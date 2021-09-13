// 初始状态
const state = {
  isReload: false,
  isShowCommentModal: false
};
// 读取数据
const getters = {
  isReload: state => state.isReload,
  isShowCommentModal: state => state.isShowCommentModal
};
// 数据改变
const mutations = {
  setReloadComment(state, payload) {
    state.isReload = payload;
  },
  setShowCommentModal(state, payload) {
    state.isShowCommentModal = payload;
  }
};
// 逻辑响应
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
