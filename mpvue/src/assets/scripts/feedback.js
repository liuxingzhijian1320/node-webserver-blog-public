// 错误解析
function errorHandler(error) {
  let message;
  if (typeof error === "string") {
    message = error;
  } else if (typeof error == "object") {
    message = error.message;
  } else {
    message = "unknown error";
  }
  return message;
}

// 弹窗, loading, alert 等等
export function showMessage(error) {
  return new Promise(resolve => {
    const message = errorHandler(error);
    if (!message) {
      // 没有内容就不弹窗
      resolve();
      return;
    }
    mpvue.showModal({
      title: "提示",
      content: message,
      showCancel: false,
      success(res) {
        resolve(res);
      }
    });
  });
}

export function showComfirm(error) {
  return new Promise((resolve, reject) => {
    const message = errorHandler(error);
    mpvue.showModal({
      title: "提示",
      content: message,
      success(res) {
        if (res.confirm) {
          resolve(res);
        } else if (res.cancel) {
          reject(res);
        }
      }
    });
  });
}
export function showToastSimple(error) {
  return new Promise(resolve => {
    const message = errorHandler(error);
    mpvue.showToast({
      title: message,
      icon: "success",
      duration: 2000,
      success(res) {
        resolve(res);
      }
    });
  });
}

export function showToast(error) {
  return new Promise(resolve => {
    const message = errorHandler(error);
    mpvue.showToast({
      title: message,
      icon: "none",
      duration: 2000,
      success(res) {
        resolve(res);
      }
    });
  });
}

// 传入改变的字段
export function modelCustom({
  title = "提示",
  content = "",
  showCancel = true,
  confirmText = "确定",
  cancelText = "取消"
}) {
  return new Promise((resolve, reject) => {
    if (!content) {
      return;
    }
    mpvue.showModal({
      title,
      content,
      confirmText,
      cancelText,
      showCancel,
      success(res) {
        if (res.confirm) {
          resolve(res);
        } else if (res.cancel) {
          reject(res);
        }
      }
    });
  });
}
