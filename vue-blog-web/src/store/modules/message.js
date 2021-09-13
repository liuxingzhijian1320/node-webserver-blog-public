const state = {
    text: '',
    status: false,
    duration: 3, // 3s
};

const getters = {
    text: state => state.text,
    status: state => state.status,
    duration: state => state.duration,
}
const mutations = {
    setStatus(state, payload) {
        state.status = payload;
    },
    setText(state, payload) {
        state.text = payload;
    }
};

const actions = {};

export default {
    state,
    actions,
    getters,
    mutations,

    namespaced: true, // 命名空间
};