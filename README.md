# node-webserver-blog-public

[源码地址](https://github.com/liuxingzhijian1320/node-webserver-blog-public)

[博客地址](https://www.zhooson.cn/)

[CSDN](https://blog.csdn.net/Zhooson/article/details/101194970)

## 运行项目前必读

1. 三个项目中各种各样的授权参数 已全部修改成自己的授权参数，忘悉知！！！！忘悉知！！！！忘悉知！！！！
2. 自己创建一个数据库名称就可以了，表是运行 node 时候自动创建好  
   以 `myblog3` 为数据库名称， admin 登录页面有个 `一键生成`地方生成账号：admin 密码：123， 只能生成一次，因为是程序写死的账号，省的您手动去数据库中 User 表去添加一条账户信息。账户的体系的增删改查的接口都已经实现，根据自己的需求去释放出来
   您可以很愉快的登录玩耍了

## 整套项目功能

1. 前端 BLOG 功能介绍：

- 首页 （思维导图（树状图））
- 文章 （文章列表，个人分类，热门文章，文章详情，文章目录结构）
- 留言（登录，留言， 发邮件）
- 作品 （历年来的项目地址）
- 关于（关于项目介绍）
- 登录 （普通登录，Github 登录， QQ 登录（审核中...））

2. Admin 后台系统功能介绍

- 首页
- 分类管理（CURD）
- 留言管理（CURD，通过，拒绝，回复）
- 文章  
   列表：CURD，上下架，上传图片，markdown 编辑器，评论列表按钮
  评论列表：CURD，上下架，评论， 发邮件

3. KOA 实现后端接口

node 主要是后端接口，具体的接口的具体查看代码。

## vue-blog-web

- 代理(5454 为 node 的端口)

```
    proxyTable: {
        "/mapi": {
            target: "http://localhost:5454",
            changeOrigin: true,
            pathRewrite: {
                "^/mapi": ""
            }
        },
    }
```

- 接口层封装(http/index.js)

```
    import Axios from 'axios'
    import Router from '../router'

    export default {
        get(url, params) {
            return new Promise((resolve, reject) => {

                Axios({
                        method: "get",
                        url: url,
                        params: {
                            ...params,

                            author: 'admin'
                        },
                        validateStatus: function(status) {
                            // 截获状态码范围
                            return status >= 200 && status < 500
                        },
                    }).then(response => {
                        if (response.status == 200) {
                            resolve(response.data);
                        } else if (response.status == 401) {
                            // 无权限

                        } else if (response.status == 403) {
                            // session 过期
                            Router.push('/login')
                        } else {
                            reject(response.data)
                        }
                    })
                    .catch(error => {

                        reject(error);
                    })
            })
        },
        post(url, method = 'post', params) {
            return new Promise((resolve, reject) => {

                Axios({
                        method,
                        url: url,
                        data: {
                            ...params,

                            author: 'admin'
                        },
                        validateStatus: function(status) {
                            return status >= 200 && status < 500
                        },
                    }).then(response => {
                        if (response.status == 200) {
                            resolve(response.data);
                        } else if (response.status == 401) {
                            // Message.error('登录信息过期，请重新登录');
                            // Router.replace('/login')
                            resolve({});
                        } else if (response.status == 403) {
                            Router.push('/login')
                        } else {
                            reject(response.data)
                        }
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        },
        fetch(url, params, headers = {}) {
            return new Promise((resolve, reject) => {
                Axios({
                        method: "post",
                        url: url,
                        data: params,
                        headers: {
                            "Content-Type": "application/json",
                            ...headers
                        }
                    }).then(response => {
                        if (response.status == 200) {
                            resolve(response.data);
                        } else {
                            reject(response.data)
                        }
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        },
    }
```

- markdown 的语法编译成 html

```
    <mavon-editor ref="editor" :value="content" :subfield="false"
      :defaultOpen="'preview'" :toolbarsFlag="false" :editable="false"
      :scrollStyle="true" :ishljs="true">
    </mavon-editor>
```

- 生成 H2，H3 的文章目录
  具体查看（vue-blog-web/views/article/detail.vue）

- 其他都是 vue 的基础的知识，省略。。。

## vue-blog-admin

- 项目基础配置详见(vue-cli3-admin)[https://github.com/liuxingzhijian1320/vue-cli3-admin]

* 代理(vue.config.js)

```
    proxy: {
        "/mapi": {
            target: "http://localhost:5454",
            changeOrigin: true,
            pathRewrite: {
                "^/mapi": ""
            }
        },
    },
```

- 全局变量

1. .env.development
2. .env.production

- 多级路由实现(首页 /文章管理 /文章评论)  
  多级路的原因，因为现在很多的增加和删除都是弹窗的实现，但是一旦内容很多的时候的，新页面的就是最佳的方法

实现的主要方法： meta 的 `hidden` 的属性  
具体查看（vue-blog-admin/src/router/routes.js）

## vue-blog-koa

- 使用 koa-generator 生成 koa2 项目

  https://blog.csdn.net/Zhooson/article/details/83716814

- 运行的项目一定先修改 config/db.js 的文件，不然会报错的，项目运行自动生成数据库，自己在数据库 User 表创建的一个用户，然后登录 admin 的操作

```
    const Sequelize = require('sequelize');
    /**
    *
    * 配置数据库
    *
    * 第一个参数 myblog3   数据库名字 (自己修改)
    * 第二个参数 root      数据库名字 (自己修改)
    * 第三个参数 password  数据库密码 (自己修改)
    */
    const sequelize = new Sequelize('myblog3', 'root', '你的数据库密码', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,
        dialectOptions: {
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci",
            supportBigNumbers: true,
            bigNumberStrings: true
        },

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        timezone: '+08:00' //东八时区
    });

    module.exports = {
        sequelize
    }
```

- jwt 权限校验

```
    // 签发token
    const token = jwt.sign(userToken, JWT_SECRET, { expiresIn: '10h' });
```

- 接口白名单

1. myblog3-app-5454.js

```
// jwt
app.use(
    koajwt({ secret: JWT_SECRET }).unless({
        path: [
            // 登录
            /^\/api\/user\/login/,
            ...
        ],
    })
);
```

2. middleware/JWTPath.js

```
  module.exports = [
    // 登录
    '/api/user/login',
    ...
];
```

- 发送邮件 （controllers/SendEmailServer.js）[发送邮件文章参考](https://blog.csdn.net/Zhooson/article/details/79889081)

```
    const nodemailer = require("nodemailer");

    // code...

    // Use Smtp Protocol to send Email
    var transporter = nodemailer.createTransport({
        //node_modules/nodemailer/well-known/services.json 支持列表
        host: 'smtp.qq.com',
        port: 465, // SMTP 端口
        secure: true,
        auth: {
            user: NODEMAILER.email,
            //这里密码不是qq密码，是你设置的smtp密码（授权码）
            pass: NODEMAILER.pass
        }
    });
```

- node 调用第三方接口

```
    const koaRequest = require('koa-http-request');

    app.use(koaRequest({
        json: true, //automatically parsing of JSON response
        timeout: 3000, //3s timeout
        // host: 'https://api.github.com'
    }));
```

- github 授权 流程（controllers/GithubToken.js）

  1. 注册 OAuth APP 的应用
  2. 保存 client_id client_secret
  3. 访问 GET: https://github.com/login/oauth/authorize?client_id=c4cde05e7ea&scope=user
  4. 跳转 http://localhost:3000/auth?code=8b309cc03f95 保存 code 字段
  5. https://github.com/login/oauth/access_token POST 请求 body:{client_id,client_secret,code} 获取 token
  6. https://api.github.com/user POST 请求： body:{client_id,client_secret} header: {Authorization: token token}

- 上传图片（controllers/UploadServer.js）

  koa-body 实现上传图片，递归创建目录等

- sequelize 数据库实现 （controllers/schema.js）
  以 user.js 为例子

```
  const moment = require('moment');
  module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // 用户名字
        username: {
            type: DataTypes.STRING(100),
            field: 'username',
            allowNull: false
        },
        // 用户密码
        password: {
            type: DataTypes.STRING(255),
            field: 'password',
            allowNull: false
        },
        // 用户邮箱
        email: {
            type: DataTypes.STRING(100),
            field: 'email',
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })
}
```

- sequelize 的使用方法：

  以 Article 为模型例子

1. 创建

```
    Article.create(params)
```

2. 编辑

```
    Article.update({ browser }, {
        where: {
            id
        },
        fields: ['browser']
    })
```

3. 查看详情

```
    Article.findOne({
        where: id,
    });
```

4. 删除

```
  Article.destroy({
      where: {
          id,
      }
  })
```

5. 分页列表

```
  Article.findAndCountAll({
      row: true,
      limit: +pageSize,
      offset: (pageIndex - 1) * (+pageSize),
      order: [
          ['id', 'DESC']
      ],
  });
```

6. 模糊搜索

```
  const Op = Sequelize.Op;

  Article.findAndCountAll({
      row: true,
      limit: +pageSize,
      offset: (pageIndex - 1) * (+pageSize),
      where:{
        title: {
            // 模糊查询
            [Op.like]: '%' + keyword + '%',
        },
      }
      order: [
          ['id', 'DESC']
      ],
  });

```

补充 Op 的知识

```
    [Op.and]: {a: 5} // 且 (a = 5)
    [Op.or]: [{a: 5}, {a: 6}] // (a = 5 或 a = 6)
    [Op.gt]: 6, // id > 6
    [Op.gte]: 6, // id >= 6
    [Op.lt]: 10, // id < 10
    [Op.lte]: 10, // id <= 10
    [Op.ne]: 20, // id != 20
    [Op.eq]: 3, // = 3
    [Op.not]: true, // 不是 TRUE
    [Op.between]: [6, 10], // 在 6 和 10 之间
    [Op.notBetween]: [11, 15], // 不在 11 和 15 之间
    [Op.in]: [1, 2], // 在 [1, 2] 之中
    [Op.notIn]: [1, 2], // 不在 [1, 2] 之中
    [Op.like]: '%hat', // 包含 '%hat'
    [Op.notLike]: '%hat' // 不包含 '%hat'
    [Op.iLike]: '%hat' // 包含 '%hat' (不区分大小写) (仅限 PG)
    [Op.notILike]: '%hat' // 不包含 '%hat' (仅限 PG)
    [Op.regexp]: '^[h|a|t]' // 匹配正则表达式/~ '^[h|a|t]' (仅限 MySQL/PG)
    [Op.notRegexp]: '^[h|a|t]' // 不匹配正则表达式/!~ '^[h|a|t]' (仅限 MySQL/PG)
    [Op.iRegexp]: '^[h|a|t]' // ~_ '^[h|a|t]' (仅限 PG)
    [Op.notIRegexp]: '^[h|a|t]' // !~_ '^[h|a|t]' (仅限 PG)
    [Op.like]: { [Op.any]: ['cat', 'hat']} // 包含任何数组['cat', 'hat'] - 同样适用于 iLike 和 notLike
    [Op.overlap]: [1, 2] // && [1, 2](PG数组重叠运算符)
    [Op.contains]: [1, 2] // @> [1, 2](PG数组包含运算符)
    [Op.contained]: [1, 2] // <@ [1, 2](PG数组包含于运算符)
    [Op.any]: [2,3] // 任何数组[2, 3]::INTEGER (仅限 PG)
    [Op.col]: 'user.organization_id' // = 'user'.'organization_id', 使用数据库语言特定的列标识符, 本例使用 PG
```

7.  多对多的关系

```
  Category.belongsToMany(Article, {
      through: {
          model: ArticleToCategory,
      },
      foreignKey: 'categoryId',
  })
  Article.belongsToMany(Category, {
      through: {
          model: ArticleToCategory,
      },
      foreignKey: 'articleId',
  })
```

## 数据库表介绍

- article -------------- 文章
- articleComment ------- 文章评论
- articleTocategory ---- 文章标签（多对多的关联关系）
- category ------------- 标签
- comment -------------- 留言
- user ----------------- 用户

## 发布

1. 我的服务器环境 是 CentOS 7.5 64 位
2. web 和 admin 打包发布 dist 的文件， koa 全部文件发布，别发布 nodel_modules 啊， 自己的服务器安装 node，nginx，pm2 ， Mysql 等操作
3. 针对的 koa 项目发布需要注意点，因为线上每次上传图片写在 public/images 这个文件可千万不能覆盖，为了避免这个问题，自己搭建一个文件服务项目，专门管理文件资源

- 安装其他环境 用 `yum` 的命令安装
- 安装 Mysql（mac） https://blog.csdn.net/Zhooson/article/details/84314451
- 安装 Mysql（window） https://blog.csdn.net/Zhooson/article/details/101428300
- nginx 配置 https://blog.csdn.net/Zhooson/article/details/84901573
- 其他环境自行安装，贼简单的啊哈

* myblog3-web-2222.js / myblog3-admin-1111.js (2 个文件就是端口号不一样)  
  执行 `pm2 start myblog3-web-2222.js` 把 web 的项目启动  
  执行 `pm2 start myblog3-admin-1111.js` 把 admin 的项目启动  
  执行 `pm2 start myblog3-app-5454.js` 把 node 的项目启动

* 文件夹结构；
  以 web 为例子（需要先下载 express）

|--web  
|---- dist (vue 打包的文件)  
|---- myblog3-web-2222.js （ 文件如下代码所示）  
|---- package.json （npm i express）  
|---- node_moudles

```
    //引入express中间件
    var express = require('express');
    var app = express();

    //指定启动服务器到哪个文件夹，我这边指的是dist文件夹
    app.use(express.static('./dist'));

    // 监听端口为1111
    var server = app.listen(2222, function() {
        console.info('复制打开浏览器');
    });
```

## nginx 配置

- 登录服务器(2 种登录方式)

  1. Filezilla 软件登录
  2. ssh 登录

  ```
    ssh -p 22 root@你的服务器ip地址
    回车
    输入密码
  ```

- 已 ssh 登录为例子： 查找 nginx.conf 的位置

```
    whereis nginx.conf
```

查找结果：

```
    /usr/local/nginx/conf

```

熟悉 vim 的操作的，直接操作，不熟悉的使用的 FileZilla 的软件去修改

- nginx.conf(以 web 为例子)
  具体详见 ngixn.conf

```
    #博客 - 前端（vue）
    upstream myblog3Web {
    	server 127.0.0.1:2222;
    }

    server {
        listen       80;
        server_name  www.zhooson.cn;
        #charset koi8-r;

        #access_log  logs/host.access.lsog  main;

        location / {

          #设置主机头和客户端真实地址，以便服务器获取客户端真实IP
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          #禁用缓存
          proxy_buffering off;

          #反向代理的地址
          proxy_pass http://myblog3Web;

          root /webproject/myblog3/web;
          index index.html index.htm;
          try_files $uri $uri/ /index.html;

        }

        location /api {
          proxy_pass http://myblog3Koa2;
        }


        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

```

- 在 web 和 admin 项目的时候访问 node 接口如何代理，关键代码如下

```
     location /api {
          proxy_pass http://myblog3Koa2;
     }
```

- 在 web 和 admin 用 mode：history 的配置

```
    root /webproject/myblog3/web;
    index index.html index.htm;
    try_files $uri $uri/ /index.html;
```

## pm2

> PM2 是 node 进程管理工具，可以利用它来简化很多 node 应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。

### 安装方法

```
    npm i pm2 -g
```

### 常用命令记录

- pm2 start app.js # 启动 app.js 应用程序

- pm2 start app.js -i 4 # cluster mode 模式启动 4 个 app.js 的应用实例

- pm2 start app.js --name="api" # 启动应用程序并命名为 "api"

- pm2 start app.js --watch # 当文件变化时自动重启应用

- pm2 start script.sh # 启动 bash 脚本

- pm2 list # 列表 PM2 启动的所有的应用程序

- pm2 monit # 显示每个应用程序的 CPU 和内存占用情况

- pm2 show [app-name] # 显示应用程序的所有信息

- pm2 logs # 显示所有应用程序的日志

- pm2 logs [app-name] # 显示指定应用程序的日志

- pm2 flush # 清空所有日志文件

- pm2 stop all # 停止所有的应用程序

- pm2 stop 0 # 停止 id 为 0 的指定应用程序

- pm2 restart all # 重启所有应用

- pm2 reload all # 重启 cluster mode 下的所有应用

- pm2 gracefulReload all # Graceful reload all apps in cluster mode

- pm2 delete all # 关闭并删除所有应用

- pm2 delete 0 # 删除指定应用 id 0

- pm2 scale api 10 # 把名字叫 api 的应用扩展到 10 个实例

- pm2 reset [app-name] # 重置重启数量

- pm2 startup # 创建开机自启动命令

- pm2 save # 保存当前应用列表

- pm2 resurrect # 重新加载保存的应用列表

- pm2 update # Save processes, kill PM2 and restore processes

- pm2 generate # Generate a sample json configuration file

pm2 文档地址：http://pm2.keymetrics.io/docs/usage/quick-start/

## 关于 koa 中环境变量

在 blog-koa／package.json 中

```
  "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon myblog3-app-5454.js",
    "prod": "cross-env NODE_ENV=production nodemon myblog3-app-5454.js"
  },
```

我们在本地调试中可以使用 `npm run dev` 去拿到 `process.env.NODE_ENV`的环境变量，我们在 pm2 的环境下如何拿到呢？？

具体实现的方法：（本文此处的才标注此代码，具体文件中`不做代码添加`）

步骤 1:
和 `myblog3-app-5454.js` 同级别创建文件： `ecosystem.config.js`

```
    // 这里可以写 生产环境，测试环境，预发布环境等
    module.exports = {
        apps: [{
            // 生产环境
            name: "myblog3-app-5454-prod",
            // 项目启动入口文件
            script: "./myblog3-app-5454.js",
            // 项目环境变量
            env: {
                "NODE_ENV": "production",
                "PORT": 5454
            }
        },
        {
            ....
        }]
    }
```

步骤 2: 修改的`package.json`文件，添加一行代码：

```
    "start": "pm2 start ecosystem.config.js --only myblog3-app-5454-prod --watch"
```

步骤 3: 如何运行项目

本文初说明可以用的 `pm2 start myblog3-app-5454.js` 的方式运行，现在使用 `npm start`启动， `myblog3-app-5454-prod` 代表这个进程的 name ，其实就是--name=myblog3-app-5454-prod 的写法

步骤 4: 直接文件中就可以 `process.env.NODE_ENV`

PS: 不需要的 `process.env.NODE_ENV` 此功能的完全前一种方式就可以了，不过项目毕竟都是区分环境，最好的使用下哈

转载请附上原文出处链接及本声明。
原文链接：https://www.zhooson.cn/article/detail?id=8  
https://github.com/liuxingzhijian1320/node-webserver-blog-public
