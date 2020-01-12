import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/mainPage/Index.vue'
// import Home from '../components/Home.vue'
// import Welcome from '../components/Welcome.vue'
// import User from '../components/user/User.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Index },
  // {
  //   path: '/home',
  //   component: Home,
  //   redirect: '/welcome',
  //   children: [
  //     { path: '/welcome', component: Welcome },
  //     { path: '/user', component: User }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   // to 表示要跳转到哪里
//   // from 从哪个路径过来
//   // next 函数,表示放行
//   if (to.path === '/login') return next()
//   const tokenStr = window.sessionStorage.getItem('token')
//   // 没有token则跳转到登入页面
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router