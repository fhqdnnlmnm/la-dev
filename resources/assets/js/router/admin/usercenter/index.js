import { Home } from '../../layout/'

import productsma  from './productsma'

export default {
    path:'/usercenter',
    name:'会员中心',
    icon:'inbox',
    component: Home,
    children:[productsma]
}