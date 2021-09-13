'use strict';
const words = require('./sensitivewords');

module.exports = (app) => {
  // 全局注册敏感词
  app.fullSensitivewords.addWords(words);
};
