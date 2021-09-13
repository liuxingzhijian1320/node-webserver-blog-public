/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1616443430956_7491';

  // add your middleware config here
  config.middleware = ['forbidip'];

  // 给pforbidip中间件传入的参数
  config.forbidip = {
    ip: [], // 黑名单IP
    visitTotal: 100, // 每日访问次数
  };

  config.codeConfig = {
    time: 1000 * 60 * 15, //验证码有效期 15 min
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // server config
  config.cluster = {
    listen: {
      port: 5454, // 端口
      hostname: 'localhost',
    },
  };

  // 上传文件
  config.multipart = {
    mode: 'file', // 上传文件模式stream/file
    fileSize: '10mb', // fileSize默认是10mb。如果上传大文件，应指定此配置
    // whitelist: ['.png, .jpg, .gif', 'jpeg'], // 会覆盖默认文件白名单，仅允许.png格式文件
    // fileExtensions: ['.xlsx'], // 定制其他文件拓展名
  };

  // 静态资源
  config.static = {
    maxAge: 31536000,
    prefix: '/public/',
  };

  // mysql的数据配置
  config.mysql = {
    //database configuration
    client: {
      //host
      host: 'localhost',
      //port
      port: '3306',
      //username
      user: 'root',
      //password
      password: '123456',
      //database
      database: 'mysqlblog',
    },
    //load into app,default is open //加载到应用程序，默认为打开
    app: true,
    //load into agent,default is close //加载到代理中，默认值为“关闭”
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [''], //允许访问接口的白名单
  };

  config.jwt = {
    secret: '9823jsjlkjasd0asdm?cmq394$#@!', //自定义 token 的加密条件字符串
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.codeConfig = {
    time: 1000 * 60 * 15, //验证码有效期 15 min
  };

  return {
    ...config,
    ...userConfig,
  };
};
