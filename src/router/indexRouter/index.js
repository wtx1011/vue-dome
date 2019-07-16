const meta = { requiresAuth: true }
const routes = [{
  path: '/',
  name: 'HelloWorld',
  component: () => import('@/components/HelloWorld'),
  meta,
  children: [
    {
      path: '/',
      redirect: '/HelloWorld'
    },
    // 刷新页面 必须保留
    {
      path: 'refresh',
      name: 'refresh',
      hidden: true,
      component: {
        beforeRouteEnter (to, from, next) {
          next(instance => instance.$router.replace(from.fullPath))
        },
        render: h => h()
      }
    },
    // 页面重定向 必须保留
    {
      path: 'redirect/:route*',
      name: 'redirect',
      hidden: true,
      component: {
        beforeRouteEnter (to, from, next) {
          next(instance => instance.$router.replace(JSON.parse(from.params.route)))
        },
        render: h => h()
      }
    }
  ]
}]
export default routes
