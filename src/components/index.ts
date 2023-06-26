import { App } from "vue"
import SvgIcon from "./SvgIcon/index.vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGlobalComponents: any = { SvgIcon }

export default {
  install(app: App) {
    for (const key in allGlobalComponents) {
      app.component(key, allGlobalComponents[key])
    }
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
