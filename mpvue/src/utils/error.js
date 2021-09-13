// import store from '../store'

import { showMessage, showToast } from "../assets/scripts/feedback";

// 想Vuex发送错误通知
export function setError(message, options) {
    showMessage(message);

    // 记录错误日志及其参数
    console.info("HTTP requests are printed to:", message, options);

    // mpvue.hideLoading();
    // store.commit('setError', message)
}

// 应用级异常捕获
export function catchError(err, options) {
    // console.log("wx.onError", err);
    if (err) {
        try {
            const errMessage = err.message;
            // 连接超时
            if (errMessage && errMessage.match(/timeout/g)) {
                setError("连接超时", options);
            } else {
                // 其余报错
                // ...
                setError("非常抱歉，程序出现异常", options);
            }
        } catch (e) {
            setError("c", options);
        }
    } else {
        setError("非常抱歉，程序出现异常...", options);
    }
}