import Vue from 'vue'
import Router from 'vue-router'


import loginComponent from '@/pages/login'
import homeComponent from '@/pages/home'
import usersComponent from '@/pages/home/users'
import powersComponent from '@/pages/home/powers'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: loginComponent
    },
    {
      path: '/home',
      component: homeComponent,
      redirect: '/home/users',
      children: [{
        path: 'users',
        component: usersComponent
      }, {
        path: 'powers',
        component: powersComponent
      }]
    }
  ]
})
