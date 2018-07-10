import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from './cart/'
import user from './user/'
import global from './global/'
import leftmenu from './leftmenu/'
import router from './router/'
import tabs from './tabs/'

//自定义模块
import app from './models/app'

import getters from './getters'

export default new Vuex.Store({
  modules: {
    cart,
    user,
    global,
    router,
    leftmenu,
    tabs,
    //自定义模块
    app
  },getters
})
