<script setup lang="ts">
interface Props {
  right?: string
  top?: string
  left?: string
  bottom?: string
  height?: string
}
defineProps<Props>()
</script>

<template>
  <span :class="$style.qianzi"><img :height src="/签名.png" :style="{ right, bottom, left, top }"></span>
</template>

<style lang="less" module>
.qianzi {
  position: relative;
  display: inline-block;
  border-bottom: solid 1px #000;
  min-width: 100px;

  img {
    position: absolute;
  }
}
</style>
