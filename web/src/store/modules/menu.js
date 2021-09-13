const state = {
  nav: [
    {
      name: "首页",
      type: 0,
      path: "/"
    },
    {
      name: "文章",
      type: 0,
      path: "/article"
    },
    {
      name: "关于本站",
      type: 0,
      path: "/about"
    }
  ],
  minNavList: [
    {
      name: "首页",
      path: "/",
      icon: "icon-home"
    },
    {
      name: "文章",
      path: "/article",
      icon: "icon-article"
    },
    {
      name: "我的",
      path: "/user",
      icon: "icon-my"
    }
  ]
};

const getters = {
  nav: state => state.nav,
  minNavList: state => state.minNavList
};

const mutations = {};

const actions = {};

export default {
  state,
  actions,
  getters,
  mutations,

  namespaced: true // 命名空间
};
