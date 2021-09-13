import { get } from '../api/request';

// 分类列表
export async function getLogList(params) {
  const url = `/api/log/list`;
  const result = await get(url, params);
  return result.data;
}
