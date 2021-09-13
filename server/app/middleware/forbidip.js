const { cb } = require('../../utils');

/**
 * 拦截特殊ip,防止爬虫
 * options: 中间件的配置项,框架会将 app.config[${middlewareName}] 传递进来
 * app: 当前应用实例
 * 每次路由变化都会触发 中间件
 */
module.exports = (options, app) => {
  return async function forbidipMiddleware(ctx, next) {
    const { service } = ctx;
    // console.log(1111, app.config);
    // console.log(131233, ctx.request.header.authorization);
    const token = ctx.request.header.authorization;
    // console.log(13, token, app.config.jwt.secret);
    let userId = 0;
    if (token && token.length > 10) {
      // 验证token
      let decode = ctx.app.jwt.verify(
        token.split(' ')[1],
        app.config.jwt.secret
      );
      userId = decode.userId;
      // console.log(13, decode);
    }

    // console.log('options', options);
    // console.log('request', ctx.request);
    // console.log('----ip----', ctx.request.header['x-forwarded-for']);
    // 获取客户端的ip
    let sourceIp = ctx.request.header['x-forwarded-for'] || '127.0.0.1';
    let client = ctx.request.header['user-agent'];
    // sourceIp = '1.0.0.1';

    // 1. 代码配置的ip数据
    const match = options.ip.some((val) => val == sourceIp);
    console.log('match', match);

    if (match) {
      cb(ctx, 403, 200, 'Your IP has been blocked', {});
    } else {
      // 2. 数据库中存储IP
      // 2.1 先查询
      // 2.2 操作数据
      const res = await service.ip.queryIP(sourceIp);
      if (res && res.id) {
        if (res.day + 1 > options.visitTotal) {
          cb(ctx, 403, 200, '请求过多，已被限流，请明日再来', {});
          return;
        }
        await service.ip.update({
          id: res.id,
          ip: sourceIp,
          day: res.day + 1,
          total: res.total + 1,
          client: res.client ? res.client : client,
          userId,
        });
        // cb(ctx, 200, 200, 'successfull', {});
        await next();
      } else {
        await service.ip.add({ ip: sourceIp, day: 1, total: 1, userId });
        // cb(ctx, 200, 200, 'successfull', {});
        await next();
      }
    }

    //   ctx.status = 403;
    //   ctx.body = {
    //     code: 0,
    //     message: 'Your IP has been blocked',
    //     data: {},
    //   };
  };
};
