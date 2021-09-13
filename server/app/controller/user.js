'use strict';

const Controller = require('egg').Controller;
const { cb, hideWhite } = require('../../utils');

class UserController extends Controller {
  // 注册
  async createUser() {
    const { ctx, service } = this;
    const createRule = {
      nickname: { type: 'string' },
      username: { type: 'string' },
      password: { type: 'string' },
    };

    try {
      // 1. 校验参数
      ctx.validate(createRule);
      const params = ctx.request.body;

      // 2. 查重复
      const obj = await service.user.queryByUsername(params.username);
      if (obj && obj.id) {
        cb(ctx, 200, 201, '当前账号已被注册', {});
        return;
      }
      await service.user.add(params);
      cb(ctx, 200, 200, '注册成功', {});
    } catch (err) {
      // ctx.logger.warn(err.errors);
      cb(ctx, 200, 422, '参数异常', err);
    }
  }

  // 登录
  async loginUser() {
    const { ctx, service, app } = this;
    try {
      const params = ctx.request.body;

      const obj = await service.user.queryByUsername(params.username);

      if (!obj) {
        cb(ctx, 200, 201, '登录账号不存在', {});
        return;
      }

      const { id = 0, password, username } = obj;

      if (params.password != password) {
        cb(ctx, 200, 201, '密码不正确', {});
        return;
      }

      //签发 token 数据
      const token = app.jwt.sign(
        {
          username,
          userId: id,
          // exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1h
        },
        app.config.jwt.secret
      );

      // 记录日志
      const log = {
        userId: id,
        ip: ctx.request.header['x-forwarded-for'],
        client: ctx.request.header['user-agent'],
        type: 1,
      };
      await service.loginlog.add(log);

      cb(ctx, 200, 200, '登录成功', {
        token,
        username,
        userId: id,
      });
    } catch (err) {
      cb(ctx, 200, 422, '登录失败', err);
    }
  }

  // admin 系统 登录
  async loginAdminUser() {
    const { ctx, service, app } = this;
    try {
      const params = ctx.request.body;

      const obj = await service.user.queryByUsername(params.username);

      if (!obj) {
        cb(ctx, 200, 201, '请确认账号密码是否正确.', {});
        return;
      }

      const { id, password, nickname, root } = obj;

      if (params.password != password) {
        cb(ctx, 200, 201, '请确认账号密码是否正确', {});
        return;
      }

      if (root != 77 && root != 88) {
        cb(ctx, 200, 201, '登录账号权限等级不足，请联系管理员', {});
        return;
      }

      //签发 token 数据
      const token = app.jwt.sign(
        {
          username: nickname,
          userId: id,
          // exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1h
        },
        app.config.jwt.secret
      );

      // 记录日志
      const log = {
        userId: id,
        ip: ctx.request.header['x-forwarded-for'],
        client: ctx.request.header['user-agent'],
        type: 2,
      };
      await service.loginlog.add(log);

      cb(ctx, 200, 200, '登录成功', {
        token,
        nickname: nickname,
        userId: id,
      });
    } catch (err) {
      cb(ctx, 200, 422, '登录失败', err);
    }
  }

  // 用户权限
  async loginUserAuth() {
    const { ctx, service } = this;
    try {
      const data = await service.user.queryAuth(ctx.state.user.userId);
      if (!data) {
        cb(ctx, 200, 201, '当前用户不存在', {});
        return;
      }
      if (data.root === 77) {
        cb(ctx, 200, 200, '查询成功', { auth: 'QsislescF' });
      } else {
        cb(ctx, 200, 200, '查询成功', { auth: '99dlaR0pdF' });
      }
    } catch (err) {
      cb(ctx, 200, 422, '查询失败', err);
    }
  }

  // 列表
  async listUser() {
    const { ctx, service } = this;
    try {
      const params = ctx.request.query;

      const userDetail = await service.user.queryAuth(ctx.state.user.userId);
      const list = await service.user.queryList(params);

      if (userDetail.root != 77) {
        // 非超管人员，只能看到脱敏数据
        for (let val of list.list) {
          val.username = hideWhite(val.username);
          val.email = hideWhite(val.email);
        }
      }
      cb(ctx, 200, 200, '查询用户成功', list);
    } catch (err) {
      cb(ctx, 200, 422, '查询失败', err);
    }
  }

  // 删除
  async delUser() {
    const { ctx, service } = this;
    try {
      const { id = 0 } = ctx.request.body;
      const data = await service.user.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前用户不存在', {});
        return;
      }
      await service.user.del(id);
      cb(ctx, 200, 200, '删除成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '删除失败', err);
    }
  }

  // 禁用
  async abanUser() {
    const { ctx, service } = this;
    try {
      const { id = 0 } = ctx.request.body;
      const data = await service.user.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前用户不存在', {});
        return;
      }
      const { status } = data;
      await service.user.update({ id, status: status === 1 ? 0 : 1 });
      cb(ctx, 200, 200, '操作成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '操作失败', err);
    }
  }

  // 网站 注册
  async createUserByWeb() {
    const { ctx, service, app } = this;
    const createRule = {
      nickname: { type: 'string' },
      username: { type: 'string' },
      password: { type: 'string' },
      repassword: { type: 'string' },
      code: { type: 'string' },
    };

    try {
      // 1. 校验参数
      ctx.validate(createRule);

      const { nickname, username, password, repassword, code } =
        ctx.request.body;

      // 2. 查重复
      const obj = await service.user.queryByUsername(username);
      if (obj && obj.username) {
        cb(ctx, 200, 201, '当前账号已被注册', {});
        return;
      }

      // 3. 验证码
      const codedata = await service.code.queryByCode(code);
      // 3.1 验证码不正确
      if (!codedata || (codedata && codedata.code != code)) {
        cb(ctx, 200, 201, '验证码不正确', {});
        return;
      }
      // 3.1 验证码已过期
      if (
        codedata &&
        codedata.code === code &&
        +new Date() - +new Date(codedata.create_time) >
          app.config.codeConfig.time
      ) {
        cb(ctx, 200, 201, '验证码已过期', {});
        return;
      }

      // 4. 密码
      if (!password || !repassword || password != repassword) {
        cb(ctx, 200, 201, '确认密码正确性', {});
        return;
      }

      await service.user.add({ nickname, username, password });
      cb(ctx, 200, 200, '注册成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '参数异常', err);
    }
  }

  // 网站 登录
  async loginUserByWeb() {
    const { ctx, service, app } = this;
    const createRule = {
      username: { type: 'string' },
      password: { type: 'string' },
    };

    try {
      // 1. 校验参数
      ctx.validate(createRule);

      const { username, password } = ctx.request.body;

      // 2. 查重复
      const obj = await service.user.queryByUsername(username);
      if (!obj) {
        cb(ctx, 200, 201, '当前账号未注册', {});
        return;
      }

      // 3. 密码
      if (obj && obj.password != password) {
        cb(ctx, 200, 201, '请确认账号密码正确性', {});
        return;
      }

      //签发 token 数据
      const token = app.jwt.sign(
        {
          username: obj.nickname,
          userId: obj.id,
          // exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1h
        },
        app.config.jwt.secret
      );

      // 记录日志
      const log = {
        userId: obj.id,
        ip: ctx.request.header['x-forwarded-for'],
        client: ctx.request.header['user-agent'],
        type: 3,
      };
      console.log(123123, log);
      await service.loginlog.add(log);

      cb(ctx, 200, 200, '登录成功', {
        token,
        nickname: obj.nickname,
        userId: obj.id,
        username,
      });
    } catch (err) {
      console.log(123, err);
      cb(ctx, 200, 422, '参数异常', err);
    }
  }
}

module.exports = UserController;
