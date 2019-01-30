import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'

import GlobalSettings from './views/GlobalSettings.vue'
import TableList from './views/TableList.vue'
import TableAdd from './views/TableAdd.vue'
import TableDelete from './views/TableDelete.vue'

import CategoryAdd from './views/CategoryAdd.vue'
import CategoryList from './views/CategoryList.vue'
import CategoryDelete from './views/CategoryDelete.vue'
import CategoryUpdata from './views/CategoryUpdata.vue'


import DishList from './views/DishList.vue'
import DishAdd from './views/DishAdd.vue'
import DishDelete from './views/DishDelete.vue'
import DishUpdata from './views/DishUpdata.vue'


import OrderList from './views/OrderList.vue'
import Security from './views/Security.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: "/login"},
    {path: '/login', component: login},
    {
      path: '/main', 
      component: Main,
      children:[
        {path:'/settings',component:GlobalSettings},
        {path:'/table/list',component:TableList},
        {path:'/table/add',component:TableAdd},
        {path:'/table/delete',component:TableDelete},
        
        {path:'/category/list',component:CategoryList},
        {path:'/category/add',component:CategoryAdd},
        {path:'/category/delete',component:CategoryDelete},
        {path:'/category/updata',component:CategoryUpdata},
        
        {path:'/dish/list',component:DishList},
        {path:'/dish/add',component:DishAdd},
        {path:'/dish/Delete',component:DishDelete},
        {path:'/dish/updata',component:DishUpdata},
        
        {path:'/order/list',component:OrderList},
        {path:'/security',component:Security},
      ]
    },
    {path: '*', component: NotFound},
  ]
})
