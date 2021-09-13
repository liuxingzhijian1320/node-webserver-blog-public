import Vue from "vue";

import App from "./App";
import MpvueRouterPatch from "mpvue-router-patch";
import store from "./store";
import "@/assets/iconfont/iconfont.css";

Vue.prototype.$store = store;

Vue.use(MpvueRouterPatch);

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue({
  ...App,
  store
});
app.$mount();
