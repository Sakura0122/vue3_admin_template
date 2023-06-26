<script lang='ts'>
export default {
  name: 'Main',
}
</script>
<script setup lang='ts'>
import { useSettingStore } from '@/stores/setting'
import { ref, watch, nextTick } from 'vue'

const settingStore = useSettingStore()

// 控制当前组件是否销毁重建
const flag = ref(true)

// 监听仓库内部数据是否发生变化 发生变化说明用户点击过刷新按钮
watch(() => settingStore.refresh, () => {
  // 点击刷新按钮 路由组件销毁
  flag.value = false
  nextTick(() => {
    flag.value = true
  })
})
</script>
<template>
  <router-view v-slot='{ Component }'>
    <transition name='fade'>
      <component :is='Component' v-if='flag' />
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all .3s;
}

.fade-enter-to {
  opacity: 1;
}

</style>
