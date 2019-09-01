import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式"
Vue.use(ElementUi) // 注入全局组件

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
