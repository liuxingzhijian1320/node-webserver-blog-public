import { get } from '../api/request';

// 获取验证码列表
export async function getCodeList(params) {
  const url = `/api/code/list`;
  const result = await get(url, params);
  return result.data;
}
