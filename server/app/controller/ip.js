'use strict';

const Controller = require('egg').Controller;
const { cb } = require('../../utils');

class IPController extends Controller {
  // 创建
  async create() {
    const { ctx, service } = this;
    const createRule = {
      ip: { type: 'string' },
    };

    try {
      // 1. 校验参数
      ctx.validate(createRule);
      const params = ctx.request.body;

      // 2. 查重复
      const obj = await service.ip.queryIP(params.ip);

      if (obj && obj.id) {
        await service.ip.update({
          id: obj.id,
          count: obj.count + 1,
        });
      } else {
        await service.ip.add(params);
      }
      cb(ctx, 200, 200, '成功', {});
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
      const list = await service.ip.queryList(params);
      cb(ctx, 200, 200, '查询IP成功', list);
    } catch (err) {
      cb(ctx, 200, 422, '查询失败', err);
    }
  }

  // 删除
  async del() {
    const { ctx, service } = this;
    try {
      const { id = 0 } = ctx.request.body;
      const data = await service.ip.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前ip不存在', {});
        return;
      }
      await service.ip.del(id);
      cb(ctx, 200, 200, '删除成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '删除失败', err);
    }
  }

  // 编辑
  async update() {
    const { ctx, service } = this;
    try {
      const { id } = ctx.request.body;
      const data = await service.ip.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前ip不存在', {});
        return;
      }
      await service.ip.update(ctx.request.body);
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
      const data = await service.ip.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前ip不存在', {});
        return;
      }
      cb(ctx, 200, 200, '查询成功', data);
    } catch (err) {
      cb(ctx, 200, 422, '查询失败', err);
    }
  }
}

module.exports = IPController;
