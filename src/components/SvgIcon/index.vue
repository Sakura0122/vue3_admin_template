<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: "#icon-",
  },
  // 使用图标的名字
  name: {
    type: String,
  },
  // 使用图标的颜色
  color: {
    type: String,
    default: "",
  },
  // 图标宽高
  width: {
    type: String,
    default: "16px",
  },
  height: {
    type: String,
    default: "16px",
  },
});
</script>

<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color" />
  </svg>
</template>

<style scoped lang="less"></style>
