// 组装模块并导出 store 的地方
import Vue from "vue";
import Vuex from "vuex";

import normal from "./modules/normal";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    normal
  },
  strict: process.env.NODE_ENV !== "production" // 严格模式
});
