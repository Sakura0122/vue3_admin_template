// layout组件和相关配置的仓库
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingStore = defineStore('setting', () => {
  // 控制菜单折叠还是收起
  const fold = ref(false)
  // 刷新
  const refresh = ref(false)

  return { fold, refresh }
})
