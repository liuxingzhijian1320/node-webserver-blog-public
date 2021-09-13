export default class Utils {

    // Utils.Toast("这是一个弹框", 2000);
    //import Utils from "src/assets/scripts/utils";

    //  自定义Toast
    static Toast(msg, duration) {
        duration = isNaN(duration) ? 3000 : duration;
        var m = document.createElement('div');
        m.innerHTML = msg;
        m.style.cssText = `
              max-width:60%;
              min-width: 150px;
              padding:0 14px;
              height: 40px;
              color: rgb(255, 255, 255);
              line-height: 40px;
              text-align: center;
              border-radius: 4px;
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 999999;
              background: rgba(0, 0, 0,.7);
              font-size: 16px;`;
        document.body.appendChild(m);

        setTimeout(function() {
            var d = 0.5;
            m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
            m.style.opacity = '0';
            setTimeout(function() { document.body.removeChild(m) }, d * 1000);
        }, duration);
    }

    static getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    static getTokenString(str) {
        let arr = str.split('&')
        let obj = {}
        arr.forEach(item => {
            obj[`${item.split('=')[0]}`] = item.split('=')[1]
        })
        return obj
    }


    static getLocalStorageUserInfo() {
        let userinfo;
        if (localStorage.getItem("zhooson_blog_userinfo") && localStorage.getItem("zhooson_blog_userinfo") != 'undefined') {
            userinfo = JSON.parse(localStorage.getItem("zhooson_blog_userinfo"))
        } else {
            userinfo = {}
        }
        return userinfo
    }
}