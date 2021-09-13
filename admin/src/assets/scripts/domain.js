let BASE_URL = '';
const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  BASE_URL = '/';
} else {
  BASE_URL = '/'; // 这设置为／， 主要在nginx去配置代理
}

export const baseUrl = BASE_URL;
