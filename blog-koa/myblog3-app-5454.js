const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const views = require('koa-views');
const onerror = require('koa-onerror');
// const bodyparser = require('koa-bodyparser');
const koaBody = require('koa-body');
const logger = require('koa-logger');
// const cors = require('koa-cors');
const koaRequest = require('koa-http-request');

const config = require('./config');
const koajwt = require('koa-jwt');
const Routers = require('./routes');
const { JWT_SECRET } = require('./config/index');
const JWTToken = require('./middleware/JWTToken');

// error handler
onerror(app);

app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
    }
}));

app.use(koaRequest({
    json: true, //automatically parsing of JSON response
    timeout: 3000, //3s timeout
    // host: 'https://api.github.com'
}));


// cors
// app.use(cors());

// token
app.use(JWTToken());

// middlewares
app
// .use(bodyparser())
    .use(json())
    .use(logger())
    .use(
        views(__dirname + '/views', {
            extension: 'njk',
        })
    )
    .use(require('koa-static')(__dirname + '/public'))

// jwt
app.use(
    koajwt({ secret: JWT_SECRET }).unless({
        path: [
            // 登录
            /^\/api\/user\/login/,
            // 注册
            /^\/api\/user\/register/,
            // 上传图片
            /^\/api\/upload/,
            // 图片路径
            /^\/upload/,

            // 查看文章列表
            /^\/api\/article\/weblist/,
            // 查看文章详情
            /^\/api\/article\/webdetail/,
            // 查看热门文章详情
            /^\/api\/article\/webhotlist/,

            // 创建文章评论
            /^\/api\/articlecomment\/webcreate/,
            // 文章评论列表
            /^\/api\/articlecomment\/weblist/,

            // 查看分类列表
            /^\/api\/category\/weblist/,
            // 查看个人分类列表
            /^\/api\/articletocategory\/list/,

            // 查看评论列表
            /^\/api\/comment\/weblist/,
            // 创建评论
            /^\/api\/comment\/webcreate/,

            // github
            /^\/api\/github/,
            /^\/api\/githubUserInfo/,
        ],
    })
);

// logger
app.use(async(ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - $ms`);
});

// routes
app.use(Routers.routes(), Routers.allowedMethods());

// error
app.on('error', function(err, ctx) {
    console.log(err);
    logger.error('server error', err, ctx);
});

module.exports = app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`);
});