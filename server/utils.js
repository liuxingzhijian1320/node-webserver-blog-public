class Utils {
  cb(ctx, status, code, message, data) {
    ctx.status = status;
    ctx.body = {
      code: code,
      message: message,
      data: data,
    };
  }

  formatDate(time, type = '') {
    function pad(str, max) {
      str = str.toString();
      return str.length < max ? pad(`0${str}`, max) : str;
    }

    let date = '';
    if (!time) {
      date = new Date();
    } else {
      date = new Date(time);
    }

    let year = date.getFullYear(),
      month = pad(pad(date.getMonth() + 1), 2), // 月份是从0开始的
      day = pad(date.getDate(), 2),
      hour = pad(date.getHours(), 2),
      min = pad(date.getMinutes(), 2),
      sec = pad(date.getSeconds(), 2),
      ms = pad(date.getMilliseconds(), 2);
    if (type == 'yyyy-mm-dd-HH-mm-ss-ms') {
      return `${year}-${month}-${day}-${hour}-${min}-${sec}-${ms}`;
    }
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
  }

  // 推平数组
  flat(arr) {
    return arr
      .toString()
      .split(',')
      .map(function (item) {
        return Number(item);
      });
  }

  // 随机生成6位数字
  randomPassSix() {
    var Num = '';
    for (var i = 0; i < 6; i++) {
      Num += Math.floor(Math.random() * 10);
    }
    return Num;
  }

  // 邮箱格式验证
  RegExpEmail(val) {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (!reg.test(val)) {
      return false;
    } else {
      return true;
    }
  }

  // 脱敏操作
  hideWhite(val) {
    if (!val) return '';
    if (val.length === 1) {
      return val;
    } else if (val.length === 2) {
      return val.replace(/.(?=.)/g, '*');
    } else if (val.length > 2) {
      return val.slice(0, 1) + '***' + val.slice(val.length - 1, val.length);
    }
  }
}

module.exports = new Utils();
