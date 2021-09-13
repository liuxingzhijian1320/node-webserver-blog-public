import { setError } from "./error";
import { showMessage, showToast } from "../assets/scripts/feedback";
import { DOMAIN } from "../assets/api/domain";

/**
 * 防抖
 * @param {*} func
 * @param {*} wait
 */
export function debounce(func, wait) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

export function formatDate(time, type = "") {
  let date = new Date(time);

  let year = date.getFullYear(),
    month = pad(pad(date.getMonth() + 1), 2), // 月份是从0开始的
    day = pad(date.getDate(), 2),
    hour = pad(date.getHours(), 2),
    min = pad(date.getMinutes(), 2),
    sec = pad(date.getSeconds(), 2);
  if (type == "simple") {
    return `${year}-${month}-${day}`;
  } else if (type == "day") {
    return day - 0;
  } else if (type == "split") {
    return `${year}/${month}/${day} ${hour}:${min}:${sec}`;
  } else if (type == "void") {
    return `${year}${month}${day}${hour}${min}${sec}`;
  } else if (type == "yearmonth") {
    return `${[year, month]}`;
  } else if (type == "sec") {
    return [year, month, day].join("-") + " " + [hour, min].join(":");
  } else if (type == "ios") {
    return [year, month, day].join("/") + " " + [hour, min].join(":");
  }
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}

function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad(`0${str}`, max) : str;
}
