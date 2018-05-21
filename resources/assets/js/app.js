
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './register'
import store from './store/'
Vue.config.devtools = true


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);

//实例化路由

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
//实例化Vue
const app = new Vue({
    router,
    store,
    el: '#app'
});
