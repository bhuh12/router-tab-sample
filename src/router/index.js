import Vue from 'vue'
import VueRouter from 'vue-router'

// RouterTab 内置路由
import { RouterTabRoutes } from 'vue-router-tab'

// 引入布局框架组件
import Frame from '../components/layout/Frame.vue'

// 异步加载页面组件
const importPage = view => () =>
  import(/* webpackChunkName: "p-[request]" */ `../views/${view}.vue`)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Frame,
    children: [
      // 引入 RouterTab 内置路由以支持 iframe 页签
      ...RouterTabRoutes,
      {
        path: '/', // 默认页和父级路由一致
        name: 'Home',
        component: importPage('Home'),
        meta: {
          title: 'Home' // 页签标题
        }
      },
      {
        path: '/about',
        name: 'About',
        component: importPage('About'),
        meta: {
          title: 'About' // 页签标题
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
