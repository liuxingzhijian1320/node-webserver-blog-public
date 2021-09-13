const crypto = require('crypto')
    // const http = require('http');
    // const util = require('util')

// 密匙
const SECRET_KEY = 'WJiol_8776#'

// md5 加密
function md5(content) {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

// 加密函数
function genPassword(password) {
    const str = `password=${password}&key=${SECRET_KEY}`
    return md5(str)
}

function timeFormat(date, type) {
    var time = new Date(date);

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
    } else if (type === "yyyy-mm-dd-HH-mm-ss") {
        return [year, month, day, hour, minute, second].join("-")
    } else {
        return [year, month, day].join("-") + " " + [hour, minute, second].join(":")
    }
}

/**
 * @param {string} ip ip地址
 * @method 根据ip地址获取地理信息
 */
// function getAddress(ip) {
//     // if (ip.indexOf('localhost') > -1) {
//     //     ip = '127.0.0.1'
//     //     console.info(223323)
//     // }


//     let url = `http://ip.taobao.com/service/getIpInfo.php?ip=${ip}`

//     return new Promise((resolve, reject) => {
//         // 发起请求
//         http.get(url, res => {
//             console.info(7777777, res)

//             let data = '';
//             res.on("data", function(chunk) {
//                 //接受数据
//                 data += chunk;
//             });
//             res.on("end", function() {
//                 //console.log(data);
//                 let result = JSON.parse(data);
//                 //打印数据
//                 console.log(`result:${util.inspect(result)}`);
//             })
//             res.on("error", function() {
//                 //输出错误信息
//                 console.log(`错误:${e.message}`)
//             })
//         })






//     })
// }

module.exports = {
    genPassword,
    // getAddress,
    timeFormat
}