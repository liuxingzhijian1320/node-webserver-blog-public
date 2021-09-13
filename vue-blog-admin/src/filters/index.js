export function capitalizeFirstLetter(word) {
    const letters = word.split('');
    const first = letters.shift().toUpperCase();
    letters.unshift(first);
    return letters.join('');
}

export function formatMoney(str) {
    // return str.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    // return str.toFixed(0).replace(/(\d)(?=(\d{3})+\.?)/g, '$1,');
    const num = parseInt(str, 10);
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


/**
 * 格式化时间戳
 * @param {时间戳} date
 * @param {*} type
 */
export function timeStampFormat(date, type) {
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