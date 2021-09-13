import Utils from "src/assets/scripts/utils";

const state = {
  userInfo: {
    nickname: "",
    username: "",
    token: "",
    userId: 0,
  },
  hasUserInfo: false, // 是否有个人信息
  loginType: 2, // 1login 2register
  logoutStatus: false, // 退出弹窗
  showNavByMin: true, // h5 hide nav
};

const getters = {
  userInfo: (state) => state.userInfo,
  hasUserInfo: (state) => state.hasUserInfo,
  loginType: (state) => state.loginType,
  logoutStatus: (state) => state.logoutStatus,
  showNavByMin: (state) => state.showNavByMin,
};

const mutations = {
  setLogout(state, payload) {
    state.logoutStatus = payload;
  },

  setNavStatusByMin(state, payload) {
    state.showNavByMin = payload;
  },

  // clear用户新消息
  clearUser() {
    state.userInfo = {
      nickname: "",
      username: "",
      token: "",
      userId: 0,
    };
    state.hasUserInfo = false;
    localStorage.removeItem("zhooson_blog_userinfo");
  },

  // 当前登录操作【登录】【注册】
  setLoginType(state, payload) {
    state.loginType = payload;
  },

  // 获取用户信息
  getUserInfo() {
    const {
      username = "",
      nickname = "",
      token = "",
      userId = 0,
    } = Utils.getLocalStorageUserInfo();

    if (username && nickname && token) {
      state.hasUserInfo = true;
    } else {
      state.hasUserInfo = false;
    }

    state.userInfo = {
      username,
      nickname,
      token,
      userId,
    };
  },

  // 本地保存用户信息
  registerUserinfo(state, payload) {
    console.info("payloadpayload", payload);
    localStorage.setItem("zhooson_blog_userinfo", JSON.stringify(payload));
  },
};

const actions = {};

export default {
  state,
  actions,
  getters,
  mutations,

  namespaced: true, // 命名空间
};
