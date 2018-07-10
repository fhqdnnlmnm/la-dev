import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//在线查价
//import QueryPrice from  './queryprice'

//会员中心
//import UserCenter from './usercenter'

import { Front,Admin} from '../layout'

import User from '../pages'

const routes = [
    {
        path: '/',
        name: '前台',
        icon: 'inbox',
        component: Front.App,
        children: [{
            path: '/home',
            name: '首页',
            component: Front.Home
        }]
    }, {
        path: '/register',
        name: '注册',
        icon: 'inbox',
        component: User.register
    }, {
        path: '/pricecheck',
        name: '询价',
        component: Front.PriceCheck
    },{
        path:'/dash',
        name:'首页',
        component:Admin.Home
    }];
export default new Router({
    routes
})