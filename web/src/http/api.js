import Http from "src/http";
let API = process.env.API_ROOT;
export default class Api {
  // 注册
  static registerWebsite(params = {}) {
    let url = `${API}/api/web/user/register`;
    return Http.post(url, "post", params);
  }

  // 发送验证码
  static loginGetCode(params = {}) {
    let url = `${API}/api/web/code/create`;
    params.type = 2;
    return Http.post(url, "post", params);
  }

  // 登录
  static loginWebsite(params = {}) {
    let url = `${API}/api/web/user/login`;
    return Http.post(url, "post", params);
  }

  // 文章列表
  static getArticleList(params = {}) {
    let url = `${API}/api/web/article/list`;
    return Http.get(url, params);
  }

  // 文章详情
  static getArticleDetail({ id }) {
    let url = `${API}/api/web/article/detail?id=${id}`;
    return Http.get(url, {});
  }

  // 热门文章
  static getHotArticleList() {
    let url = `${API}/api/web/hot/list`;
    return Http.get(url, {});
  }

  // 文章评论列表
  static getArticleCommentList(params = {}) {
    let url = `${API}/api/web/comment/list`;
    return Http.get(url, params);
  }

  // 创建评论
  static createArticleComment(params = {}) {
    let url = `${API}/api/web/comment/create`;
    return Http.post(url, "post", params);
  }

  // 创建评论回复
  static createArticleCommentToReply(params = {}) {
    let url = `${API}/api/web/reply/create`;
    return Http.post(url, "post", params);
  }

  // 创建留言
  static createComment(params = {}) {
    let url = `${API}/api/comment/webcreate`;
    return Http.post(url, "post", params);
  }

  /**
   * github
   */
  static async getGithubToken(params = {}) {
    let url = `${API}/api/github`;
    return Http.post(url, "post", params);
  }

  static async getGithubUserInfo(params = {}) {
    let url = `${API}/api/githubUserInfo`;
    return Http.post(url, "post", params);
  }
}
