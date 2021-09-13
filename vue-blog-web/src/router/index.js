import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '../store'
Vue.use(Router);

const router = new Router({
    mode: 'history', // ['history', 'hash']
    linkActiveClass: 'active', // active class 名称
    scrollBehavior(to, from, savedPosition) {
        // 后退页面时, 保留滚动位置
        if (savedPosition) {
            return savedPosition;
        }
        // else if (to.hash) {
        //     return {
        //         selector: to.hash,

        //     }
        // }
        return { x: 0, y: 0 };
    },
    routes,
});

router.beforeEach((to, from, next) => {
    store.commit('login/updateUserInfo')

    setTimeout(() => {
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?fdda8ded4e8623edf6ee21a9df4db1e4";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }, 0);
    next()
})


export default router;