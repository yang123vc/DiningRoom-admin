import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/login"
    },
    {
      path: '/login',
      component: login
    },
    {path: '/main',component: Main},
     {path: '*',component: NotFound},
  ]
})
