'use strict';

const Controller = require('egg').Controller;
const { cb } = require('../../utils');

class ArticleController extends Controller {
  // 创建
  async create() {
    const { ctx, service } = this;
    const createRule = {
      title: { type: 'string', required: true },
      introduction: { type: 'string', required: true },
      tag: { type: 'string' },
      cover: { type: 'string', required: true },
      content: { type: 'string', required: true },
    };

    try {
      // 1. 校验参数
      ctx.validate(createRule);
      const params = ctx.request.body;

      await service.article.add(params);
      cb(ctx, 200, 200, '新增成功', {});
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
      const list = await service.article.queryList(params);
      cb(ctx, 200, 200, '查询成功', list);
    } catch (err) {
      cb(ctx, 200, 422, '查询失败', err);
    }
  }

  async hotlist() {
    const { ctx, service } = this;
    try {
      const list = await service.article.queryHotList();
      cb(ctx, 200, 200, '查询成功', list);
    } catch (err) {
      cb(ctx, 200, 422, '查询失败', err);
    }
  }

  // 删除
  async delete() {
    const { ctx, service } = this;
    try {
      const { id = 0 } = ctx.request.body;
      const data = await service.article.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前文章不存在', {});
        return;
      }
      await service.article.del(id);
      cb(ctx, 200, 200, '删除成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '删除失败', err);
    }
  }

  // 上下架
  async hidden() {
    const { ctx, service } = this;
    try {
      const { id = 0 } = ctx.request.body;
      const data = await service.article.query(id);
      if (data && data.is_del === 1) {
        await service.article.update({ id, is_del: 0 });
        cb(ctx, 200, 200, '下架成功', {});
      } else if (data && data.is_del === 0) {
        await service.article.update({ id, is_del: 1 });
        cb(ctx, 200, 200, '上架成功', {});
      } else {
        cb(ctx, 200, 201, '当前文章不存在', {});
      }
    } catch (err) {
      cb(ctx, 200, 422, '操作失败', err);
    }
  }

  // 置顶 / 取消置顶
  async aban() {
    const { ctx, service } = this;
    try {
      const { id = 0 } = ctx.request.body;
      const data = await service.article.query(id);
      if (data && data.istop === 1) {
        await service.article.update({ id, istop: 0 });
        cb(ctx, 200, 200, '取消置顶成功', {});
      } else if (data && data.istop === 0) {
        await service.article.update({ id, istop: 1 });
        cb(ctx, 200, 200, '置顶成功', {});
      } else {
        cb(ctx, 200, 201, '当前文章不存在', {});
      }
    } catch (err) {
      cb(ctx, 200, 422, '操作失败', err);
    }
  }

  // 详情
  async detail() {
    const { ctx, service } = this;
    try {
      const { id = 0 } = ctx.request.query;

      let data = await service.article.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前文章不存在', {});
        return;
      }

      // 浏览量 +1
      data.browser = data.browser + 1;
      await service.article.update({ id: data.id, browser: data.browser });

      cb(ctx, 200, 200, '查询成功', { ...data, browser: data.browser });
    } catch (err) {
      cb(ctx, 200, 422, '查询失败', err);
    }
  }

  // 编辑
  async update() {
    const { ctx, service } = this;
    const createRule = {
      title: { type: 'string', required: true },
      introduction: { type: 'string', required: true },
      tag: { type: 'string' },
      cover: { type: 'string', required: true },
      content: { type: 'string', required: true },
    };

    try {
      // 1. 校验参数
      ctx.validate(createRule);

      let params = ctx.request.body;

      const { id } = params;
      const data = await service.article.query(id);
      if (!data) {
        cb(ctx, 200, 201, '当前文章不存在', {});
        return;
      }
      await service.article.update(params);
      cb(ctx, 200, 200, '编辑成功', {});
    } catch (err) {
      cb(ctx, 200, 422, '编辑失败', err);
    }
  }
}

module.exports = ArticleController;
