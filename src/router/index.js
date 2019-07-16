import Vue from 'vue'
import Router from 'vue-router'
import routerIndex from '@/router/indexRouter'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'menuActive',
  mode: 'history',
  routes: [
    ...routerIndex
  ]
})

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
  // 验证当前路由所有的匹配中是否需要有登录验证的
  if (to.matched.some(r => r.meta.requiresAuth)) {
    next()
  } else {
    // 不需要身份校验 直接通过
    next()
  }
})
export default router
