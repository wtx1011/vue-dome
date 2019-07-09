import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {// 要设置的全局访问的state对象
  token: null,
  changeNetwork: true,
  loginSuccess: true
  // 要设置的初始属性值
}
const getters = {
  isShow (state) { // 方法名随意,主要是来承载变化的showFooter的值
    return state.changeNetwork
  },
  getChangedNum (state) { // 方法名随意,主要是用来承载变化的changableNum的值
    return state.loginSuccess
  }
}
const mutations = {
  show (state) { // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.changeNetwork = true
  },
  hide (state) {
    state.changeNetwork = false
  },
  newNum (state, val) { // 同上，这里面的参数除了state之外还传了需要增加的值val
    state.token = val
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
