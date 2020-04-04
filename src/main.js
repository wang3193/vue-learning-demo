import Vue from 'vue'
import App from './App.vue'
import router from './router' //引入路由
import './plugins/element.js'
import global from '@/util/global'

Vue.config.productionTip = false
Vue.prototype.global = global // 挂载全局配置模块


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
