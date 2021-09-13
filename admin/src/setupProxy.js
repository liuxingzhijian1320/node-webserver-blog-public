// 配置多个代理同时不执行 npm run eject。
// 不在package.json 里面配置， 原因：只能配置一个proxy

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:5454',
      changeOrigin: true,
    })
  );
};
