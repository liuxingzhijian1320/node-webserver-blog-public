import Axios from "axios";
// import Router from "../router";
import Utils from "src/assets/scripts/utils";
import store from "src/store";

export default {
  get(url, params) {
    return new Promise((resolve, reject) => {
      Axios({
        method: "get",
        url: url,
        params: {
          ...params,

          // author: 'admin'
        },
        headers: {
          authorization: `Bearer ${store.getters["login/userInfo"].token}`,
        },
        validateStatus: function (status) {
          // 截获状态码范围
          return status >= 200 && status < 500;
        },
      })
        .then((response) => {
          if (response.status == 200 && response.data.code === 200) {
            resolve(response.data);
          } else if (response.status == 401) {
            // Router.replace('/login')
            Utils.Toast("登录失效，请重新登录", 2000);
            reject("登录失效，请重新登录");
            store.commit("login/clearUser");
          } else {
            Utils.Toast(response.data.message, 2000);
            reject(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  post(url, method = "post", params) {
    return new Promise((resolve, reject) => {
      Axios({
        method,
        url: url,
        data: {
          ...params,

          //   author: "admin"
        },
        headers: {
          authorization: `Bearer ${store.getters["login/userInfo"].token}`,
        },
        validateStatus: function (status) {
          return status >= 200 && status < 500;
        },
      })
        .then((response) => {
          if (response.status == 200 && response.data.code === 200) {
            resolve(response.data);
          } else if (response.status == 401) {
            // Router.replace('/login')
            Utils.Toast("登录失效，请重新登录", 2000);
            reject("登录失效，请重新登录");
            store.commit("login/clearUser");
          } else {
            Utils.Toast(response.data.message, 2000);
            reject(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  fetch(url, params, headers = {}) {
    return new Promise((resolve, reject) => {
      Axios({
        method: "post",
        url: url,
        data: params,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      })
        .then((response) => {
          if (response.status == 200) {
            resolve(response.data);
          } else {
            reject(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
