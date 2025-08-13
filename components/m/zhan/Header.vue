<script setup>
import banner from '~/assets/m/zhan/bg@2x.png'
</script>
<template>
  <header :class="$style.header"><img alt="" :src="banner"></header>
</template>
<style lang="less" module>
.header {
  min-height: 364rem;

  img {
    width: 100%
  }
}
</style>