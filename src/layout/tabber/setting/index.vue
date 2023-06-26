<script lang='ts'>
export default {
  name: 'Setting',
}
</script>
<script setup lang='ts'>
import { useSettingStore } from '@/stores/setting'

const settingStore = useSettingStore()
// 点击刷新按钮
const updateRefresh = () => {
  settingStore.refresh = !settingStore.refresh
}
// 点击全屏按钮
const fullScreen = () => {
  const full = document.fullscreenElement
  if (!full) {
    // 全屏
    document.documentElement.requestFullscreen()
  } else {
    // 退出全屏
    document.exitFullscreen()
  }
}
</script>

<template>
  <el-button size='small' icon='Refresh' circle @click='updateRefresh'></el-button>
  <el-button size='small' icon='FullScreen' circle @click='fullScreen'></el-button>
  <el-button size='small' icon='Setting' circle></el-button>
  <img src='public/logo.svg' alt=''>
  <el-dropdown>
        <span class='el-dropdown-link'>
          admin
          <el-icon class='el-icon--right'>
            <arrow-down />
          </el-icon>
        </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang='scss'>

</style>
