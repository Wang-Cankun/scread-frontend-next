import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import routes from 'virtual:generated-pages'
import { setGlobalOptions } from 'vue-request'
import NProgress from 'nprogress'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'echarts'

const app = createApp(App)
const head = createHead()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})
router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
})
router.afterEach(() => {
  NProgress.done()
})
setGlobalOptions({
  throttleInterval: 500,
  cacheTime: 300000,
  staleTime: 3600000, // 60 minutes
})
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(head)
app.mount('#app')
