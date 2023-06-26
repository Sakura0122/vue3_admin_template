<script lang='ts'>
export default {
  name: 'Menu',
}
</script>

<script setup lang='ts'>
import type { UserMenuRoutes } from '@/stores/types/type'
import { useRouter } from 'vue-router'

defineProps<{
  menuList: UserMenuRoutes
}>()

const router = useRouter()

const goRoute = (menu: any) => {
  router.push(menu.index)
}
</script>

<template>
  <template v-for='item in menuList' :key='item.path'>
    <!-- 没有子路由 -->
    <el-menu-item v-if='!item.children && !item.meta?.hidden' :index='item.path' @click='goRoute'>
      <el-icon>
        <component :is='item.meta?.icon' />
      </el-icon>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>

    <template v-if='item.children'>
      <!-- 有且只有一个子路由 -->
      <Menu v-if='item.children.length === 1' :menu-list='item.children' />

      <!-- 有多个子路由 -->
      <el-sub-menu v-if='item.children.length > 1' :index='item.path'>
        <template #title>
          <el-icon>
            <component :is='item.meta?.icon' />
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menu-list='item.children' />
      </el-sub-menu>
    </template>
  </template>
</template>
