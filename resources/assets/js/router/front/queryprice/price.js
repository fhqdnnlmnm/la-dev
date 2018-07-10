
import { Admin } from '../../layout'

import { Price } from '../../views'

export default {
    path:'price',
    name:'价格查询',
    icon:'inbox',
    component:Content,
    redirect:'queryprice/price/echarts',
    children:[{
        path:'echarts',
        name:'图表',
        icon:'bar-chart',
        component:Price.Open.Echarts
    }, {
        path: 'list',
        name: '列表',
        icon: 'reorder',
        component: Price.Open.List
      }]
}