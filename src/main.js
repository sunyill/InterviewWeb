/*
 * @Description: In User Settings Edit
 * @Author: wangzhan
 * @Date: 2019-09-04 22:40:44
 * @LastEditTime: 2019-09-04 23:13:00
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式"
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 将axios赋值给vue的原型属性
Vue.prototype.$axios = axios
Vue.use(ElementUi) // 注入全局组件

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
