import Home from "../views/Home.vue";
import Login from '../views/Login/Login';
import Dashbord from '../views/Dashbord/Dashbord';

/**
 * hidden： 是否为blank页面
 * notLogin 是否需要登录
 */

export default [{
        path: "/login",
        name: "login",
        component: Login,
        hidden: true,

        meta: {
            title: '登录',
            notLogin: true,
        }
    },
    {
        path: "/",
        name: "home",
        component: Home,
        redirect: '/dashbord',
        hidden: false,
        meta: {},
        children: [{
                path: "/dashbord",
                name: "dashbord",
                component: Dashbord,
                meta: {
                    title: '首页'
                }
            },
            // {
            //     path: "/table",
            //     name: "table",
            //     component: () =>
            //         import ( /* webpackChunkName: "component" */ "../views/Table/Index.vue"),
            //     redirect: '/table/list',
            //     meta: {
            //         title: '表格'
            //     },
            //     children: [{
            //             path: "/table/list",
            //             name: "tablelist",
            //             component: () =>
            //                 import ( /* webpackChunkName: "component" */ "../views/Table/List.vue"),
            //             meta: {
            //                 title: '简单表格'
            //             }
            //         },
            //         {
            //             path: "/table/complex",
            //             name: "tablecomplex",
            //             component: () =>
            //                 import ( /* webpackChunkName: "component" */ "../views/Table/Complex.vue"),
            //             meta: {
            //                 title: '复杂表格'
            //             },
            //             children: [{
            //                 path: "/table/complex/addupdate",
            //                 name: "complexaddupdate",
            //                 component: () =>
            //                     import ( /* webpackChunkName: "component" */ "../views/Table/AddUpdate.vue"),
            //                 meta: {
            //                     title: '新增编辑'
            //                 },
            //             }]
            //         },
            //     ]
            // },
            // {
            //     path: "/about",
            //     name: "about",
            //     meta: {
            //         title: '关于我们'
            //     },
            //     component: () =>
            //         import ( /* webpackChunkName: "component" */ "../views/About/About.vue")
            // },
            {
                path: '/category',
                name: 'category',
                component: () =>
                    import ( /* webpackChunkName: "category" */ "../views/Category/Category.vue"),
                meta: {
                    title: '分类管理'
                }
            },
            {
                path: '/comment',
                name: 'comment',
                component: () =>
                    import ( /* webpackChunkName: "comment" */ "../views/Comment/Comment.vue"),
                meta: {
                    title: '留言管理'
                }
            },
            {
                path: '/article',
                name: 'article',
                component: () =>
                    import ( /* webpackChunkName: "article" */ "../views/Article/Article.vue"),
                meta: {
                    title: '文章管理'
                },
                children: [{
                        path: '/article/add',
                        name: 'articleAdd',
                        hidden: true,
                        component: () =>
                            import ( /* webpackChunkName: "article" */ "../views/Article/Add.vue"),
                        meta: {
                            title: '创建文章'
                        }
                    },
                    {
                        path: '/article/update/:id',
                        name: 'articleUpdate',
                        hidden: true,
                        component: () =>
                            import ( /* webpackChunkName: "article" */ "../views/Article/Update.vue"),
                        meta: {
                            title: '编辑文章'
                        }
                    },
                    {
                        path: '/article/:id/comment',
                        name: 'articleComment',
                        hidden: true,
                        component: () =>
                            import ( /* webpackChunkName: "article" */ "../views/Article/Comment.vue"),
                        meta: {
                            title: '文章评论'
                        }
                    }
                ]
            },




        ]
    },

]