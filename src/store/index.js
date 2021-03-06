import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// const state = {// 要设置的全局访问的state对象
//   token: null,
//   changeNetwork: true,
//   loginSuccess: true,
//   showFooter: true,
//   changableNum: 0
//   // 要设置的初始属性值
// }
// const getters = {
//   isShow (state) { // 方法名随意,主要是来承载变化的showFooter的值
//     return state.showFooter
//   },
//   getChangedNum (state) { // 方法名随意,主要是用来承载变化的changableNum的值
//     return state.changableNum
//   }
// }
// const mutations = {
//   show (state) { // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
//     state.showFooter = true
//   },
//   hide (state) {
//     state.showFooter = false
//   },
//   newNum (state, sum) { // 同上，这里面的参数除了state之外还传了需要增加的值val
//     state.changableNum += sum
//   }
// }
// const actions = {
//   hideFooter (context) { // 自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
//     context.commit('hide')
//   },
//   showFooter (context) {
//     context.commit('show')
//   },
//   getNewNum (context, num) {
//     context.commit('newNum', num)
//   }
// }
const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

const store = new Vuex.Store({
  modules
  // state,
  // getters,
  // mutations,
  // actions
})

export default store
