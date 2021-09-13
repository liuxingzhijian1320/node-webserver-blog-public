'use strict';

const { cb } = require('../../utils');

/**
 * 游客模式
 * 局部中间价
 * app: 当前应用实例（需传递进来）
 * options: 每次路由变化都会触发 中间件
 */
module.exports = (app, options = {}) => {
  return async function vs(ctx, next) {
    const { service } = ctx;
    const token = ctx.request.header.authorization;
    let userId = 0;
    if (token && token.length > 10) {
      //验证token
      let decode = ctx.app.jwt.verify(
        token.split(' ')[1],
        app.config.jwt.secret
      );
      userId = decode.userId;
    }

    const { root } = await service.user.queryRoot(userId);

    if (root === 99) {
      await next();
    } else {
      cb(ctx, 200, 300, '暂无权限操作数据', {});
    }
  };
};
