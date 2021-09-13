import { DOMAIN } from "./domain";
import { get, post } from "../../utils/request";
//文章列表
export async function getArticleList(params = {}) {
  let url = `${DOMAIN}/api/web/article/list`;
  return new Promise((resolve, reject) => {
    get(url, params, 3)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

//文章详情
export async function getArticleDetail(id) {
  let url = `${DOMAIN}/api/web/article/detail?id=${id}`;
  return new Promise((resolve, reject) => {
    get(url, {}, 3)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// 手机号验证码
export async function loginGetCode(params) {
  let url = `${DOMAIN}/api/web/code/create`;
  return new Promise((resolve, reject) => {
    post(url, params, 3)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// 登录
export async function loginWebsite(params) {
  let url = `${DOMAIN}/api/web/user/login`;
  return new Promise((resolve, reject) => {
    post(url, params, 3)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// 注册
export async function registerWebsite(params) {
  let url = `${DOMAIN}/api/web/user/register`;
  return new Promise((resolve, reject) => {
    post(url, params, 3)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export async function getArticleCommentList(params) {
  let url = `${DOMAIN}/api/web/comment/list`;
  return new Promise((resolve, reject) => {
    get(url, params, 3)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// 创建评论回复
export async function createArticleCommentToReply(params) {
  let url = `${DOMAIN}/api/web/reply/create`;
  return new Promise((resolve, reject) => {
    post(url, params, 1)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// 创建留言
export async function createArticleComment(params) {
  let url = `${DOMAIN}/api/web/comment/create`;
  return new Promise((resolve, reject) => {
    post(url, params, 1)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
