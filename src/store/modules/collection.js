const state = {
  collects: []
}
const getter = {
  renderCollects (state) {
    return state.collects
  }
}
const mutations = {
  pushCollects (state, items) { // 如何变化collects,插入items
    state.collects.push(items)
  }
}
export default {
  state,
  getter,
  mutations
}
