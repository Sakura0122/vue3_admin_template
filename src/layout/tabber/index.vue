<script lang='ts'>
export default {
  name: 'Tabbar',
}
</script>
<script setup lang='ts'>
import BreadCrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<template>
  <div class='tabbar'>
    <div class='tabbar_left'>
      <bread-crumb />
    </div>
    <div class='tabbar_right'>
      <setting />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.tabbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 20px;

  .tabbar_left {
    display: flex;
    align-items: center;

  }

  .tabbar_right {
    display: flex;
    align-items: center;

    ::v-deep(img) {
      width: 24px;
      height: 24px;
      margin: 0 10px;
    }
  }
}
</style>
