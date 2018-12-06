// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 完整引入 element-ui 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 注册 element-ui
Vue.use(ElementUI);

Vue.config.productionTip = false

// 路由的全局导航卫士
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')

  if (!token && to.path !== '/login') return next({
    path: '/login'
  })

  if (token && to.path == '/login') return next({
    path: '/home'
  })

  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
