import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//在线查价
import QueryPrice from  './queryprice'

//会员中心
import UserCenter from './usercenter'

import { PriceCheck } from '../layout'

const routes=[
    {path:'/pricecheck', component: PriceCheck},
    QueryPrice,
    UserCenter
]
export default new Router({
   routes
})