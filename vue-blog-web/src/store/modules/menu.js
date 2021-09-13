const state = {
    nav: [{
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
            name: "留言",
            type: 1,
            path: "/comment"
        },
        {
            name: "关于本站",
            type: 0,
            path: "/about"
        }
    ]
};

const getters = {
    nav: state => state.nav
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