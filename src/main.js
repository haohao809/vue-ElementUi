import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import routerConfig from '../src/routerConfig.js'
import store from './store/'
Vue.use(ElementUI)
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
const router = new VueRouter({
//	mode: 'history',
  routes:routerConfig
})
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
