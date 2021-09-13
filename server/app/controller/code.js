'use strict';

const Controller = require('egg').Controller;
const { cb, randomPassSix, RegExpEmail, hideWhite } = require('../../utils');

class CodeController extends Controller {
  // 创建
  async create() {
    const { ctx, service, app } = this;
    const createRule = {
      username: { type: 'string' },
    };

    try {
      // 1. 校验参数
      ctx.validate(createRule);

      const { username, type = 1 } = ctx.request.body;

      // 2. 查重复
      const obj = await service.user.queryByUsername(username);
      if (obj && obj.username) {
        cb(ctx, 200, 201, '当前账号已经注册', {});
        return;
      }

      // 3. 查看是否过期，，防止恶意刷接口信息 (15分钟有效期)
      const info = await service.code.queryByUsername(username);

      if (
        info[0] &&
        info[0].create_time &&
        +new Date() - +new Date(info[0].create_time) <
          app.config.codeConfig.time
      ) {
        cb(ctx, 200, 201, '操作频繁', {});
        return;
      }

      // 验证码数据库写入
      const code = randomPassSix();
      const result = await service.code.add({ username, code });

      // 1邮箱 2短信
      if (type == 2) {
        // 发送短信验证码
        if (username.length != 11) {
          cb(ctx, 200, 201, '手机号格式不正确', {});
          return;
        }

        const res = await service.tool.sendPhonecode({ username, code });
        if (res.Code === 'OK') {
          cb(ctx, 200, 200, '短信发送成功', {
            id: result.insertId,
          });
        } else {
          cb(ctx, 200, 201, '短信发送失败', {});
        }
      } else {
        // 2. 发送邮箱验证码
        if (!RegExpEmail(username)) {
          cb(ctx, 200, 201, '邮箱格式不正确', {});
          return;
        }

        const subject = '《10个肉包子的博客》注册操作';
        const text = `【张沪生个人经验分享】验证码为：${code}，您正在登录，若非本人操作，请勿泄露。`;
        const html = ``;
        const has_send = await this.service.tool.sendMail(
          username,
          subject,
          text,
          html
        );
        if (has_send) {
          cb(ctx, 200, 200, '邮箱发送成功', {
            id: result.insertId,
          });
        } else {
          cb(ctx, 200, 201, '邮箱发送失败', {});
        }
      }
    } catch (err) {
      cb(ctx, 200, 422, '参数异常', err);
    }
  }

  // 列表
  async list() {
    const { ctx, service } = this;
    try {
      const params = ctx.request.query;

      const userDetail = await service.user.queryAuth(ctx.state.user.userId);
      const list = await service.code.queryList(params);
      if (userDetail.root != 99) {
        // 非超管人员，只能看到脱敏数据
        for (let val of list.list) {
          val.username = hideWhite(val.username);
        }
      }

      cb(ctx, 200, 200, '查询分类成功', list);
    } catch (err) {
      console.log(123, err);
      cb(ctx, 200, 422, '查询失败', err);
    }
  }
}

module.exports = CodeController;
