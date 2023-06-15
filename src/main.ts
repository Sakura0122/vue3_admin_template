import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// svg插件配置代码
import 'virtual:svg-icons-register'

// 全局注册组件
import globalComponents from '@/components'

// 引入全局样式
import '@/styles/index.scss'

const app = createApp(App)

app.use(ElementPlus, { locale: zhCn })
app.use(globalComponents)
app.use(router)
app.use(createPinia())

app.mount('#app')
