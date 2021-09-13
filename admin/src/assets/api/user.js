import { get, post } from '../api/request';

// 登录
export async function userLogin(params) {
  const url = `/api/user/adminLogin`;
  const result = await post(url, params);
  return result.data;
}

// 注册
export async function userRegister(params) {
  const url = `/api/user/create`;
  const result = await post(url, params);
  return result;
}

// 权限
export async function userAuth(params) {
  const url = `/api/user/auth`;
  const result = await get(url, params);
  return result;
}

// 列表
export async function userList(params) {
  const url = `/api/user/list`;
  const result = await get(url, params);
  return result.data;
}

// 禁用／启用
export async function userAban(params) {
  const url = `/api/user/aban`;
  const result = await post(url, params);
  return result;
}
