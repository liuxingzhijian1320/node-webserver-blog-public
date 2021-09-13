// 格式化时间戳
export function timeStampFormat(date, type) {
  if (!date) return '';
  var time = new Date(date);
  if (!time) return '';
  var year = time.getFullYear();
  var month =
    time.getMonth() < 9 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1;
  var day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();

  var hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  var minute =
    time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  var second =
    time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();

  return [year, month, day].join('-') + ' ' + [hour, minute, second].join(':');
}

export function clearAllInfo() {
  localStorage.removeItem('blog-userinfo-token');
  localStorage.removeItem('blog-userinfo');
}
