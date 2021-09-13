const Router = require('koa-router');
const Routers = new Router({
    prefix: '/api',
});

const User = require('../controllers/User');
const Article = require('../controllers/Article');
const Category = require('../controllers/Category');
// const UploadToken = require('../controllers/UploadToken')
const UploadServer = require('../controllers/UploadServer')
const SendEmailServer = require('../controllers/SendEmailServer')
const ArticleToCategory = require('../controllers/ArticleToCategory')
const Comment = require('../controllers/Comment');
const ArticleComment = require('../controllers/ArticleComment');
const GithubToken = require('../controllers/GithubToken');


/**
 *  用户接口
 */
// 用户注册
Routers.post('/user/register', User.create);
// 用户登录
Routers.post('/user/login', User.login);
// 删除用户
Routers.delete('/user/delete/:id', User.delete);
// 获取用户信息
Routers.get('/user/info', User.info);
// 获取用户列表
Routers.get('/user/list', User.list);

/**
 * 文章接口
 */
// 创建文章
Routers.post('/article/create', Article.create);
// 获取文章详情
Routers.get('/article/detail/:id', Article.detail);
// 上 / 下 架文章
Routers.put('/article/hidden/:id', Article.hidden);
// 删除文章
Routers.delete('/article/delete/:id', Article.delete);
// 更改文章
Routers.put('/article/update/:id', Article.update);
// 获取文章列表
Routers.get('/article/list', Article.list);

/**
 * 文章评论 接口
 */
// 创建
Routers.post('/articlecomment/create', ArticleComment.create);
// 列表
Routers.get('/articlecomment/list', ArticleComment.list);
// 删除
Routers.delete('/articlecomment/delete/:id', ArticleComment.delete);
// 编辑
Routers.put('/articlecomment/update/:id', ArticleComment.update);
// 通过 / 拒绝
Routers.put('/articlecomment/hidden/:id', ArticleComment.hidden);


/**
 * 分类接口
 */
// 创建分类
Routers.post('/category/create', Category.create);
// 获取分类列表
Routers.get('/category/list', Category.list);
// 删除分类
Routers.delete('/category/delete/:id', Category.delete);
// 编辑分类
Routers.put('/category/update/:id', Category.update);


/**
 * 上传token  qiniu
 */
// Routers.get('/upload/token', UploadToken.token)

// 上传图片 到 自己服务器
Routers.post('/upload', UploadServer.upload)

// 发送邮件
Routers.post('/email', SendEmailServer.email)

// 获取github授权
Routers.post('/github', GithubToken.getToken)
Routers.post('/githubUserInfo', GithubToken.getUserInfo)

/**
 * 评论接口
 */
// 创建
Routers.post('/comment/create', Comment.create);
// 获取列表
Routers.get('/comment/list', Comment.list);
// 删除
Routers.delete('/comment/delete/:id', Comment.delete);
// 编辑
Routers.put('/comment/update/:id', Comment.update);
// 通过 / 拒绝
Routers.put('/comment/hidden/:id', Comment.hidden);


/**
 *  前端博客web使用的接口，无权限校验
 */
// blog - 文章列表
Routers.get('/article/weblist', Article.list);
// blog - 热门文章列表
Routers.get('/article/webhotlist', Article.webhotlist);
// blog - 文章详情
Routers.get('/article/webdetail/:id', Article.detail);
// blog - 分类列表
Routers.get('/category/weblist', Category.list);
// blog - 个人分类列表
Routers.get('/articletocategory/list', ArticleToCategory.list);
// blog - 评论列表
Routers.get('/comment/weblist', Comment.weblist);
// blog - 评论创建
Routers.post('/comment/webcreate', Comment.webcreate);
// blog - 文章评论列表
Routers.get('/articlecomment/weblist', ArticleComment.weblist);
// blog - 创建文章评论
Routers.post('/articlecomment/webcreate', ArticleComment.webcreate);

module.exports = Routers;