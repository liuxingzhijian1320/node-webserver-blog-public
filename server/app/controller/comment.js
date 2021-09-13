'use strict';

const Controller = require('egg').Controller;
const { cb } = require('../../utils');
class CommentController extends Controller {
  // 创建
  async createComment() {
    const { ctx, service } = this;
    const createRule = {
      content: { type: 'string' },
      article_id: { type: 'string' },
      user_id: { type: 'number' },
    };

    try {
      // 1. 校验参数
      ctx.validate(createRule);
      const params = ctx.request.body;
      // 敏感词过滤
      // params.content = this.ctx.app.fullSensitivewords.replaceDfa(
      //   params.content,
      //   '***',
      //   true
      // );

      const textoBj = await service.tool.sensitivewordsFilter(params.content);
      const cbResult =
        JSON.parse(textoBj).Data.Elements[0].Results[0].Suggestion;

      if (cbResult === 'block') {
        cb(ctx, 200, 202, '评论包含敏感词', {});
      } else {
        await service.comment.add(params);
        cb(ctx, 200, 200, '新增评论成功', {});
      }
    } catch (err) {
      cb(ctx, 200, 422, '参数异常', err);
    }
  }

  // 详情
  async detailComment() {
    const { ctx, service } = this;
    try {
      const id = ctx.request.query.id;
      const detail = await service.comment.query(id);
      cb(ctx, 200, 200, '查询成功', detail);
    } catch (err) {
      cb(ctx, 200, 422, '查询失败', err);
    }
  }

  // 列表
  async listComment() {
    const { ctx, service } = this;
    try {
      const params = ctx.request.query;
      const list = await service.comment.queryList(params);
      cb(ctx, 200, 200, '查询成功', list);
    } catch (err) {
      cb(ctx, 200, 422, '查询失败', err);
    }
  }

  // 删除
  async delComment() {
    const { ctx, service } = this;
    try {
      const { id = 0 } = ctx.request.body;
      const data = await service.comment.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前评论不存在', {});
        return;
      }
      // 删除评论
      await service.comment.del(id);
      // 同时删除当前评论的回复 data.id
      await service.reply.delByCommentId(data.id);
      cb(ctx, 200, 200, '删除成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '删除失败', err);
    }
  }

  // 编辑
  async updateComment() {
    const { ctx, service } = this;
    try {
      const createRule = {
        content: { type: 'string' },
      };
      ctx.validate(createRule);
      const params = ctx.request.body;
      const data = await service.comment.query(params.id);
      if (!data) {
        cb(ctx, 200, 201, '当前评论不存在', {});
        return;
      }
      // 敏感词过滤
      params.content = this.ctx.app.fullSensitivewords.replaceDfa(
        params.content,
        '***',
        true
      );
      await service.comment.update(params);
      cb(ctx, 200, 200, '编辑成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '编辑失败', err);
    }
  }
}

module.exports = CommentController;
