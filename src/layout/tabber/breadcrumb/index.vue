<script lang='ts'>
export default {
  name: 'BreadCrumb',
}
</script>
<script setup lang='ts'>
import { useSettingStore } from '@/stores/setting'
import { useRoute } from 'vue-router'

let route = useRoute()
const settingStore = useSettingStore()
const changeIcon = () => {
  settingStore.fold = !settingStore.fold
}
</script>

<template>
  <el-icon style='margin-right: 10px;cursor: pointer' @click='changeIcon'>
    <component :is="settingStore.fold ? 'Fold' : 'Expand'" />
  </el-icon>
  <el-breadcrumb separator-icon='ArrowRight'>
    <el-breadcrumb-item v-for='(item,index) in route.matched' :key='index' v-show='item.meta.title' :to='item.path'>
      <el-icon>
        <component :is='item.meta.icon' />
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang='scss'>

</style>
