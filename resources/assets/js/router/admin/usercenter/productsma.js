
import { Content } from '../../layout'

import { UserCenter } from '../../views'

export default {
    path:'user',
    name:'个人中心',
    icon:'inbox',
    component:Content,
    // redirect:'queryprice/price/echarts',
    children:[{
        path:'productsma',
        name:'产品管理',
        icon:'bar-chart',
        component:UserCenter.Productsma.Productsma
    }]
}