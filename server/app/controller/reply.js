'use strict';

const Controller = require('egg').Controller;
const { cb } = require('../../utils');

class ReplyController extends Controller {
  // 创建
  async createReply() {
    const { ctx, service } = this;
    const createRule = {
      content: { type: 'string' },
      comment_id: { type: 'number' },
      to_id: { type: 'number' },
      from_id: { type: 'number' },
    };

    try {
      // 1. 校验参数
      ctx.validate(createRule);
      const params = ctx.request.body;
      // 敏感词过滤
      params.content = this.ctx.app.fullSensitivewords.replaceDfa(
        params.content,
        '***',
        true
      );
      await service.reply.add(params);
      cb(ctx, 200, 200, '新增回复成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '参数异常', err);
    }
  }

  // 删除
  async delReply() {
    const { ctx, service } = this;
    try {
      const { id = 0 } = ctx.request.body;
      const data = await service.reply.query(id);
      if (!data) {
        cb(ctx, 200, 422, '当前回复不存在', {});
        return;
      }
      await service.reply.del(id);
      cb(ctx, 200, 200, '删除成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '删除失败', err);
    }
  }
}

module.exports = ReplyController;
