import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// 引入Element-Plus插件
import ElementPlus from 'element-plus'
// Element—Plus国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
// 重置scss样式
import '@/style/reset.scss'

// 引入上下全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'

const app = createApp(App)
// 使用上下全局组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
