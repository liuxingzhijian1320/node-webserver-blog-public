'use strict';

const Controller = require('egg').Controller;
const { cb } = require('../../utils');

class CateController extends Controller {
  // 创建
  async create() {
    const { ctx, service } = this;
    const createRule = {
      name: { type: 'string' },
    };

    try {
      // 1. 校验参数
      ctx.validate(createRule);
      const params = ctx.request.body;

      // 2. 查重复
      const obj = await service.cate.queryName(params.name);

      if (obj) {
        cb(ctx, 200, 201, '当前名称已被注册', {});
        return;
      }
      await service.cate.add(params);
      cb(ctx, 200, 200, '注册成功', {});
    } catch (err) {
      // ctx.logger.warn(err.errors);
      cb(ctx, 200, 422, '参数异常', err);
    }
  }

  // 列表
  async list() {
    const { ctx, service } = this;
    try {
      const params = ctx.request.query;
      const list = await service.cate.queryList(params);
      cb(ctx, 200, 200, '查询分类成功', list);
    } catch (err) {
      cb(ctx, 200, 422, '查询失败', err);
    }
  }

  // 删除
  async del() {
    const { ctx, service } = this;
    try {
      const { id = 0 } = ctx.request.body;
      const data = await service.cate.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前名称不存在', {});
        return;
      }
      await service.cate.del(id);
      cb(ctx, 200, 200, '删除成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '删除失败', err);
    }
  }

  // 编辑
  async update() {
    const { ctx, service } = this;
    try {
      const { id, name } = ctx.request.body;
      const data = await service.cate.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前名称不存在', {});
        return;
      }
      await service.cate.update({ id, name });
      cb(ctx, 200, 200, '编辑成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '编辑失败', err);
    }
  }

  // 详情
  async detail() {
    const { ctx, service } = this;
    try {
      const { id } = ctx.request.query;
      const data = await service.cate.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前名称不存在', {});
        return;
      }
      cb(ctx, 200, 200, '查询成功', data);
    } catch (err) {
      cb(ctx, 200, 422, '查询失败', err);
    }
  }
}

module.exports = CateController;
