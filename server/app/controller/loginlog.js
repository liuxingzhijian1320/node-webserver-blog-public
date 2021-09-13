'use strict';

const Controller = require('egg').Controller;
const { cb } = require('../../utils');

class LoginlogController extends Controller {
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
      await service.loginlog.add(params);
      cb(ctx, 200, 200, '成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '参数异常', err);
    }
  }

  // 列表
  async list() {
    const { ctx, service } = this;
    try {
      const params = ctx.request.query;
      const list = await service.loginlog.queryList(params);
      cb(ctx, 200, 200, '查询成功', list);
    } catch (err) {
      console.log(123, err);
      cb(ctx, 200, 422, '查询失败', err);
    }
  }
}

module.exports = LoginlogController;
