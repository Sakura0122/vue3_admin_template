<script lang='ts'>
export default {
  name: 'Layout',
}
</script>
<script setup lang='ts'>
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabber/index.vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useSettingStore } from '@/stores/setting'

const route = useRoute()
const userStore = useUserStore()
const settingStore = useSettingStore()

</script>

<template>
  <div class='layout_container'>

    <!-- 左侧菜单 -->
    <div class='layout_slider' :class='{fold:settingStore.fold}'>
      <Logo />
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class='scrollbar'>
        <!-- 菜单组件 -->
        <el-menu :collapse="settingStore.fold" :default-active='route.path' background-color='#001529' text-color='#fff'>
          <Menu :menuList='userStore.menuRoutes' />
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 顶部导航 -->
    <div class='layout_tabbar' :class='{fold:settingStore.fold}'>
      <Tabbar />
    </div>

    <!-- 内容展示 -->
    <div class='layout_main' :class='{fold:settingStore.fold}'>
      <Main />
    </div>

  </div>
</template>

<style scoped lang='scss'>
@import "src/styles/variable";

.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    color: #fff;
    transition: all .3s;

    &.fold {
      width: $base-menu-min-width;
    }

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    transition: all .3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    padding: 20px;
    transition: all .3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
