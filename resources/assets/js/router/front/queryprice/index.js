import { Home } from '../../layout/'

import price  from './price'

export default {
    path:'/queryprice',
    name:'在线查价',
    icon:'inbox',
    component: Home,
    children:[price]
}