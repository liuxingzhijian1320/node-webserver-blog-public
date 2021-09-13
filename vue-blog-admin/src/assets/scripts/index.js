export default class Utils {
    /**
     * 格式化日期
     * @param {日期} date
     * @param {格式} type
     */
    static timeFormat(date, type) {
        if (date) {
            var reg = new RegExp("[-T:.]", "g")
            var arr = date.split(reg)
            var time = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5], 0);
        } else {
            return ""
        }
        var year = time.getFullYear()
        var month = time.getMonth() < 9 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1
        var day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate()

        var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
        var minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
        var second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
        if (type === "yyyy-mm-dd") {
            return [year, month, day].join("-")
        } else if (type === "mm-dd") {
            return [month, day].join("-")
        } else if (type === "MM-DD") {
            return `${month}月${day}日`
        } else {
            return [year, month, day].join("-") + " " + [hour, minute, second].join(":")
        }
    }

    /**
     * 格式化时间戳
     * @param {时间戳} date
     * @param {*} type
     */
    static timeStampFormat(date, type) {
        if (!date) return "";
        var time = new Date(date);
        if (!time) return "";
        var year = time.getFullYear()
        var month = time.getMonth() < 9 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1
        var day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate()

        var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
        var minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
        var second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()

        if (type === "yyyy-mm-dd") {
            return [year, month, day].join("-")
        } else if (type === "mm-dd") {
            return [month, day].join("-")
        } else if (type === "MM-DD") {
            return `${month}月${day}日`
        } else {
            return [year, month, day].join("-") + " " + [hour, minute, second].join(":")
        }
    }

    /**
     * 明天日期
     * @param {日期} date
     */
    static tomorrowDate(date) {
        return this.timeStampFormat(date && (date / 1000 + 60 * 60 * 24) * 1000, "yyyy-mm-dd")
    }


    /**
     * 上月 月初至月末
     * @param {日期} date
     */
    static lastMonth(date) {
        if (date) {
            var reg = new RegExp("[-T:.]", "g")
            var arr = date.split(reg)
            var time = new Date(arr[0], arr[1] - 1, arr[2]);
        } else {
            var time = new Date()
        }
        var year = time.getFullYear()
        var month = time.getMonth()

        var first = new Date(year, month - 1, 1)
        var first_year = first.getFullYear()
        var first_month = first.getMonth() < 9 ? '0' + (first.getMonth() + 1) : first.getMonth() + 1
        var first_day = first.getDate() < 10 ? '0' + first.getDate() : first.getDate()

        var last = new Date(year, month, 0)
        var last_year = last.getFullYear()
        var last_month = last.getMonth() < 9 ? '0' + (last.getMonth() + 1) : last.getMonth() + 1
        var last_day = last.getDate() < 10 ? '0' + last.getDate() : last.getDate()

        return [
            [first_year, first_month, first_day].join('-'), [last_year, last_month, last_day].join('-')
        ]
    }

    /**
     * 月初至当天
     * @param {日期} date
     */
    static beginToToday(date) {
        if (date) {
            var reg = new RegExp("[-T:.]", "g")
            var arr = date.split(reg)
            var time = new Date(new Date(arr[0], arr[1] - 1, arr[2]));
        } else {
            var time = new Date(new Date())
        }
        var year = time.getFullYear()
        var month = time.getMonth() < 9 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1
        var yesterday = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()

        return [
            [year, month, '01'].join('-'), [year, month, yesterday].join('-')
        ]
    }

    /**
     * 清除首尾空格
     */
    static strReplaceSpace(str) {
        return str && str.toString().replace(/^\s+|\s+$/g, '');
    }

    /**
     * 验证格式 -|-
     */
    static strCheckFormat(str) {
        if (!str) return false
        let arr = str.split('|')
        if (arr.length < 2 || !arr[0] || !arr[1]) return false
        return true
    }


    // 设置cookie
    static setCookie(key, value, expiremHours) {
        var exdate = new Date();
        exdate.setTime(exdate.getTime() + expiremHours * 60 * 60 * 1000);
        document.cookie = key + "=" + escape(value) + ((expiremHours == null) ? "" : ";expires=" + exdate.toUTCString());
    }


    // 读取cookie
    static getCookie(key) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(key + "=");
            if (c_start != -1) {
                c_start = c_start + key.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1)
                    c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }


    // 删除cookie
    static delCookie(key) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(key);
        if (cval != null) {
            document.cookie = key + "=" + cval + ";expires=" + exp.toUTCString();
        }
    }

    //  guid 的生成规则
    static guid() {
        let S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (
            S4() +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            S4() +
            S4()
        );
    }
    static checkSpecialSymbols(str) {
        try {
            str = ("" + str).replace(/\s+/g, "");
            if (!str) return str;
            for (let i = 0; i < str.length; i++) {
                const code = str[i].charCodeAt();
                const status =
                    (code >= 19968 && code <= 40869) ||
                    (code >= 48 && code <= 57) ||
                    (code >= 97 && code <= 122) ||
                    (code >= 65 && code <= 90);
                if (!status) return false;
            }
            return str;
        } catch (error) {
            return false;
        }
    }

    /**
     * a模拟window.open，不会被浏览器拦截
     * @param {String} url        a标签打开的地址
     * @param {String} id         a标签的ID
     * @param {String} targetType a标签点击打开的方式（当前页面打开还是新窗口打开）
     */
    static openWindow(url, targetType = "_blank", id = "open", download = false) {
        // 如果存在则删除
        if (document.getElementById(id)) {
            document.body.removeChild(document.getElementById(id));
        }
        const a = document.createElement("a");
        a.setAttribute("href", url);
        if (download) {
            a.setAttribute("download", url);
        }
        a.setAttribute("target", targetType);
        a.setAttribute("id", id);
        document.body.appendChild(a);
        a.click();
    }

    /**
     * 验证格式 -|-
     */
    static strCheckFormat(str) {
        str = str.replace(/\s+/g, "");
        if (!str) return false;
        let arr = str.split("|");
        if (this.checkSpecialSymbols(arr[0])) return str;
        return false;
    }

    // 清除所有缓存
    static clearAlllocalStorage() {
        localStorage.removeItem("USERINFO");
    }

    // 判断登录状态
    static getLocalStorageUserInfo() {
        let userinfo;
        if (localStorage.getItem("USERINFO")) {
            userinfo = JSON.parse(localStorage.getItem("USERINFO"))
        } else {
            userinfo = {}
        }
        return userinfo
    }

    // 节流
    static throttle(callBack, time) {
        let timer = null;
        //timer状态要常驻内存，这里做了一个闭包
        return function() {
            if (!timer) {
                timer = setTimeout(() => {
                    callBack()
                    timer = null
                }, time)
            }
        }
    }


    // 全局变量的控制
    static gUint() {
        return {
            boss: '站长',
            avatar: 'http://myblog3.zhooson.cn/upload/article。。玩儿玩儿。asfaf-16-05-15.png',
            email: '123'
        }
    }


}