import Vue from "vue";
import Router from "vue-router";
import routes from './routes';
import Utils from 'src/assets/scripts'

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (!to.meta.notLogin) {
        if (Utils.getLocalStorageUserInfo().token) {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }

})

export default router