import { get, post } from '../api/request';

// 列表
export async function getArticleList(params) {
  const url = `/api/article/list`;
  const result = await get(url, params);
  return result.data;
}

// 删除
export async function delArticlelOne(params) {
  const url = `/api/article/del`;
  const result = await post(url, params);
  return result.data;
}

// 详情
export async function getArticleDetail(params) {
  const url = `/api/article/detail`;
  const result = await get(url, params);
  return result.data;
}

// 编辑
export async function postArticlelDetail(params) {
  const url = `/api/article/update`;
  const result = await post(url, params);
  return result.data;
}

// 新增
export async function createArticlel(params) {
  const url = `/api/article/create`;
  const result = await post(url, params);
  return result.data;
}

// 置顶 ／ 取消置顶
export async function abanArticle(params) {
  const url = `/api/article/aban`;
  const result = await post(url, params);
  return result;
}

// 上／下架
export async function hiddenArticle(params) {
  const url = `/api/article/hidden`;
  const result = await post(url, params);
  return result;
}

// 文章评论列表
export async function getArticleCommentList(params) {
  const url = `/api/article/comment/list`;
  const result = await get(url, params);
  return result.data;
}

// 文章评论删除
export async function delCommentOne(params) {
  const url = `/api/article/comment/del`;
  const result = await post(url, params);
  return result.data;
}

// 文章回复删除
export async function delReplyOne(params) {
  const url = `/api/article/reply/del`;
  const result = await post(url, params);
  return result.data;
}
