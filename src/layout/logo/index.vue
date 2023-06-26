<script lang='ts'>
export default {
  name: 'Logo',
}
</script>
<script setup lang='ts'>
import setting from '@/setting'
import { useSettingStore } from '@/stores/setting'

const settingStore = useSettingStore()
</script>

<template>
  <div class='logo' v-if='!setting.logoHidden'>
    <img :src='setting.logo' alt='' />
    <p v-show='!settingStore.fold'>{{ setting.title }}</p>
  </div>
</template>

<style scoped lang='scss'>
@import "src/styles/variable";

.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 5px;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    white-space: nowrap;
    margin-left: 10px;
    font-size: $base-menu-logo-title-fontSize;
  }
}
</style>
