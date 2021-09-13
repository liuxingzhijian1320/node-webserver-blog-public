import { showToast } from "../assets/scripts/feedback";

function createFly() {
  if (mpvuePlatform === "wx") {
    const Fly = require("flyio/dist/npm/wx");
    return new Fly();
  } else if (mpvuePlatform === "my") {
    const Fly = require("flyio/dist/npm/ap");
    return new Fly();
  } else {
    return null;
  }
}

function setHeadersParams(tokenType) {
  const fly = createFly();
  let token = ""; // 1 业务token  2 upload token 3 不需要token
  // 业务token
  if (tokenType == 1) {
    token = wx.getStorageSync("userInfo-token") || "";
  } else if (tokenType == 2) {
    // upload token
    token = wx.getStorageSync("hall_upload") || "";
  }

  fly.interceptors.request.use(request => {
    request.headers = {
      "Content-Type": "application/json",
      authorization: token ? `Bearer ${token}` : ""
      // 'Content-Type': 'application/x-www-form-urlencoded'
    };
  });
  return fly;
}

export function get(url, params = {}, tokenType = 1) {
  const fly = setHeadersParams(tokenType);

  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .get(url, params)
        .then(response => {
          // console.log(response)
          if (response.data.code == 200) {
            resolve(response.data);
          } else {
            showToast(response.data.message);
          }
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
}

export function post(url, params = {}, tokenType = 1) {
  const fly = setHeadersParams(tokenType);

  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .post(url, params)
        .then(response => {
          // console.log(response)
          if (response.data.code == 200) {
            resolve(response.data);
          } else {
            showToast(response.data.message);
          }
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
}
