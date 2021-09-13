'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, jwt } = app;

  const visitor = app.middlewares.visitor(app);

  /**
   *  用户
   */
  // 用户注册
  router.post('/api/user/create', controller.user.createUser);
  // 用户登录
  router.post('/api/user/login', controller.user.loginUser);
  // 管理员登录
  router.post('/api/user/adminLogin', controller.user.loginAdminUser);
  // 删除用户
  router.post('/api/user/del', jwt, visitor, controller.user.delUser);
  // 获取用户列表
  router.get('/api/user/list', jwt, controller.user.listUser);
  // 禁用／启用
  router.post('/api/user/aban', jwt, visitor, controller.user.abanUser);
  // 用户权限
  router.get('/api/user/auth', jwt, controller.user.loginUserAuth);

  /**
   * 分类
   */
  // 创建分类
  router.post('/api/cate/create', jwt, visitor, controller.cate.create);
  // 删除分类
  router.post('/api/cate/del', jwt, visitor, controller.cate.del);
  // 编辑分类
  router.post('/api/cate/update', jwt, visitor, controller.cate.update);
  // 获取分类列表
  router.get('/api/cate/list', jwt, controller.cate.list);
  // 获取详情
  router.get('/api/cate/detail', jwt, visitor, controller.cate.detail);

  /**
   * 文章
   */
  // 创建文章
  router.post('/api/article/create', jwt, visitor, controller.article.create);
  // 获取文章详情
  router.get('/api/article/detail', jwt, visitor, controller.article.detail);
  // 上 / 下 架文章
  router.post('/api/article/hidden', jwt, visitor, controller.article.hidden);
  // 置顶 / 取消置顶
  router.post('/api/article/aban', jwt, visitor, controller.article.aban);
  // 删除文章
  router.post('/api/article/del', jwt, visitor, controller.article.delete);
  // 更改文章
  router.post('/api/article/update', jwt, visitor, controller.article.update);
  // 获取文章列表
  router.get('/api/article/list', jwt, controller.article.list);

  /**
   * 上传文件
   */
  router.post('/api/file/upload', jwt, visitor, controller.file.fileUpload);

  /**
   * 评论
   */
  // 评论创建
  router.post(
    '/api/article/comment/create',
    jwt,
    visitor,
    controller.comment.createComment
  );
  // 评论列表
  router.get('/api/article/comment/list', jwt, controller.comment.listComment);
  // 评论详情
  router.get(
    '/api/article/comment/detail',
    jwt,
    visitor,
    controller.comment.detailComment
  );
  // 评论删除
  router.post(
    '/api/article/comment/del',
    jwt,
    visitor,
    controller.comment.delComment
  );
  // 评论更新
  router.post(
    '/api/article/comment/update',
    jwt,
    visitor,
    controller.comment.updateComment
  );

  /**
   * 回复
   */
  router.post(
    '/api/article/reply/create',
    jwt,
    visitor,
    controller.reply.createReply
  );
  router.post(
    '/api/article/reply/del',
    jwt,
    visitor,
    controller.reply.delReply
  );

  /**
   * 验证码
   */
  // 创建
  router.post('/api/code/create', controller.code.create);
  // 列表
  router.get('/api/code/list', jwt, controller.code.list);

  /**
   * ip
   */
  router.get('/api/log/list', jwt, controller.ip.list);

  /**
   * 登录日志
   */
  router.get('/api/loginlog/list', jwt, controller.loginlog.list);

  // -----------------------------------------------------------------------
  // 客户端，免鉴权

  // 注册
  router.post('/api/web/user/register', controller.user.createUserByWeb);
  // 登录
  router.post('/api/web/user/login', controller.user.loginUserByWeb);
  // 创建验证码
  router.post('/api/web/code/create', controller.code.create);
  // 文章列表
  router.get('/api/web/article/list', controller.article.list);
  // 文章详情
  router.get('/api/web/article/detail', controller.article.detail);
  // 热门文章详情
  router.get('/api/web/hot/list', controller.article.hotlist);
  // 文章评论列表
  router.get('/api/web/comment/list', controller.comment.listComment);
  // 创建评论
  router.post('/api/web/comment/create', jwt, controller.comment.createComment);
  // 创建评论回复
  router.post('/api/web/reply/create', jwt, controller.reply.createReply);
};
