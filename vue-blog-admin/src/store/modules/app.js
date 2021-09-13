import routes from "src/router/routes.js";

function filterRoutes(data) {
    // console.info(234, data)

    // let newRouter = data.find(item => !item.hidden).children;
    // console.info('newRouter', newRouter)

    let aa = data.find(item => {
        if (!item.hidden) {
            // console.info(888, item)
            return item.children.filter(code => {
                if (code.children) {
                    // console.info('code.children', code.children)
                    // console.info(555, code.children.filter(foo => !foo.hidden))
                    code.children = code.children.filter(foo => !foo.hidden)
                } else {
                    code.children = []
                }
            })
        }
    }).children

    return aa


}

const state = {
    isCollapse: false,
    routelist: []
}

const getters = {
    isCollapse: state => state.isCollapse,
    routelist: () => filterRoutes(routes)
}

const mutations = {
    updateCollapse(state, payload) {
        state.isCollapse = payload
    },
}

const actions = {}

export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true,
}