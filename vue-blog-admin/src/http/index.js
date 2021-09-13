import Axios from 'axios'
import Router from '../router'
import { Message } from 'element-ui';
import Utils from 'src/assets/scripts'

export default class Http {
    /**
     * 全局 http的请求
     * GET
     * @param {*} url      
     * @param {*} method 
     * @param {*} params 
     * @param {*} headers 
     */

    static $get(url, method = "get", params = {}, headers = {}) {
        return new Promise((resolve, reject) => {

            Axios({
                    method: 'get',
                    url,
                    params: {
                        ...params,

                        author: Utils.getLocalStorageUserInfo().username,
                    },
                    headers: {
                        authorization: `Bearer ${Utils.getLocalStorageUserInfo().token}`,

                        // "Content-Type": "application/json",
                        // "Content-Type": "application/x-www-form-urlencoded",

                        ...headers
                    },
                    validateStatus: function(status) {
                        // 截获状态码范围
                        return status >= 200 && status < 500
                    },
                }).then(response => {
                    if (response.status == 200) {
                        resolve(response.data);
                    } else if (response.status == 401) {
                        Message.error('登录信息过期，请重新登录');
                        Router.replace('/login')
                        resolve({});
                    } else if (response.status == 403) {
                        Router.push('/login')
                    } else {
                        reject(response.data)
                    }
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    /**
     * POST DELETE UPDATE
     * 全局 http的请求
     * @param {*} url      
     * @param {*} method 
     * @param {*} params 
     * @param {*} headers 
     */

    static $post(url, method = "post", params = {}, headers = {}) {
        return new Promise((resolve, reject) => {

            Axios({
                    method,
                    url,
                    data: {
                        ...params,

                        author: Utils.getLocalStorageUserInfo().username,
                    },
                    headers: {
                        authorization: `Bearer ${Utils.getLocalStorageUserInfo().token}`,

                        // "Content-Type": "application/json",
                        // "Content-Type": "application/x-www-form-urlencoded",

                        ...headers
                    },
                    validateStatus: function(status) {
                        // 截获状态码范围
                        return status >= 200 && status < 500
                    },
                }).then(response => {
                    if (response.status == 200) {
                        resolve(response.data);
                    } else if (response.status == 401) {
                        Message.error('登录信息过期，请重新登录');
                        Router.replace('/login')
                        resolve({});
                    } else if (response.status == 403) {
                        Router.push('/login')
                    } else {
                        reject(response.data)
                    }
                })
                .catch(error => {
                    reject(error);
                })
        })
    }


    /**
     * 上传图片 
     * @param {*} $file  文件流
     * @param {*} bucket 文件空间名称
     */
    static $upload($file, bucket) {
        // 第一步.将图片上传到服务器.
        var formdata = new FormData();
        formdata.append('file', $file);
        formdata.append('bucket', bucket);

        return new Promise((resolve, reject) => {
            Axios({
                    method: 'post',
                    url: `${process.env.VUE_APP_BASE_API}/api/upload`,
                    data: formdata,
                    //   headers: {
                    //       authorization: `Bearer ${
                    //   JSON.parse(localStorage.getItem("USERINFO")).token
                    // }`
                    //   },
                    headers: { 'Content-Type': 'multipart/form-data' },
                    validateStatus: function(status) {
                        return status >= 200 && status < 500
                    },
                }).then(response => {
                    if (response.status == 200) {
                        resolve(response.data);
                    } else if (response.status == 401) {
                        Message.error('登录信息过期，请重新登录');
                        Router.replace('/login')
                        resolve({});
                    } else if (response.status == 403) {
                        Router.push('/login')
                    } else {
                        reject(response.data)
                    }
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    /**
     * 登录接口
     * @param {*} url 
     * @param {*} params 
     */
    static $login(url, params) {
        return new Promise((resolve, reject) => {
            Axios({
                    method: "post",
                    url: url,
                    data: params,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => {
                    if (response.status == 200) {
                        resolve(response.data);
                    } else {
                        reject(response.data)
                    }
                })
                .catch(error => {
                    reject(error);
                })
        })
    }
}