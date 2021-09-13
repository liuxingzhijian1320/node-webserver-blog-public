import { get } from '../api/request';

// 分类列表
export async function getLoginlogList(params) {
  const url = `/api/loginlog/list`;
  const result = await get(url, params);
  return result.data;
}
