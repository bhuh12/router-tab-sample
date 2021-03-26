import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入组件和样式
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'

Vue.use(RouterTab)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
