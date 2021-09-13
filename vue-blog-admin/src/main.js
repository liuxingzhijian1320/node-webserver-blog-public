import Vue from "vue";
import ElementUI from 'element-ui'
import _ from "lodash";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import * as filters from './filters';
import Http from 'src/http';

import 'src/assets/styles/normalize.css'
import 'src/assets/styles/common.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.prototype.lodash = _;
Vue.prototype.API = process.env.VUE_APP_BASE_API;
Vue.prototype.Http = Http;

// 注册全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");