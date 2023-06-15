import SvgIcon from './SvgIcon/index.vue'
import { App } from 'vue'

const allGlobalComponents: any = { SvgIcon }

export default {
  install(app: App) {
    for (const key in allGlobalComponents) {
      app.component(key, allGlobalComponents[key])
    }
  },
}
