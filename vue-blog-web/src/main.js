import Vue from 'vue'
import App from './App'
import store from './store';
import router from './router'
// require('src/directive')
import 'src/assets/styles/reset.scss'
import 'src/assets/styles/styles.scss'
import * as filters from './filters';

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})