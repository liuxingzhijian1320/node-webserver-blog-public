import { get, post } from '../api/request';

// 分类列表
export async function getCateList(params) {
  const url = `/api/cate/list`;
  const result = await get(url, params);
  return result.data;
}

// 分类详情
export async function getCateDetail(params) {
  const url = `/api/cate/detail`;
  const result = await get(url, params);
  return result.data;
}

// 创建
export async function addCateOne(params) {
  const url = `/api/cate/create`;
  const result = await post(url, params);
  return result.data;
}

// 编辑
export async function updateCateOne(params) {
  const url = `/api/cate/update`;
  const result = await post(url, params);
  return result.data;
}

// 删除分类
export async function delCateOne(params) {
  const url = `/api/cate/del`;
  const result = await post(url, params);
  return result.data;
}
