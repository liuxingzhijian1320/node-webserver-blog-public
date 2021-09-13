import axios from 'axios';
import { message } from 'antd';
import { baseUrl } from '../scripts/domain';
import history from '../scripts/history';

const ERROR_MSG = '服务器异常，请稍后操作';

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export const get = (url, params = {}) => {
  const token = localStorage.getItem('blog-userinfo-token') || '';
  // console.log("token", token);

  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url: url,
      params: params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(
      (response) => {
        if (response.data.code === 200) {
          resolve(response.data);
        } else {
          const title = response?.data?.message
            ? response.data.message
            : ERROR_MSG;
          message.error(title);
          reject(title);
        }
      },
      (err) => {
        console.log(13, err);
        if (JSON.stringify(err).search(/401/) > -1) {
          message.error('身份过期，请重新登录');
        } else if (JSON.stringify(err).search(/403/) > -1) {
          message.error('请求过多，已被限流，请明日再来');
        } else {
          message.error(ERROR_MSG);
        }
        reject(ERROR_MSG);
      }
    );
  });
};

export const post = (url, data = {}) => {
  const token = localStorage.getItem('blog-userinfo-token') || '';
  // console.log("token", token);

  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          if (response.data.code === 200) {
            resolve(response.data);
          } else {
            const title = response?.data?.message
              ? response.data.message
              : ERROR_MSG;
            message.error(title);
            reject(title);
          }
        },
        (err) => {
          if (JSON.stringify(err).search(/401/) > -1) {
            message.error('身份过期，请重新登录');
            history.replace('/login');
            // window.location.href = '/login';
          } else if (JSON.stringify(err).search(/403/) > -1) {
            message.error('请求过多，已被限流，请明日再来');
          } else {
            message.error(ERROR_MSG);
          }
          reject(ERROR_MSG);
        }
      );
  });
};
