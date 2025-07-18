<script setup>
defineProps({
  src: {
    type: String,
    default: () => ''
  }
})
</script>
<template>
  <header>
    <img alt="香港教育文化之旅" :src height="211" width="375">
  </header>
</template>
<style lang="less" module>
header {
  img {
    width: 100%;
    height: 9.00266667rem;
    object-position: center;
    object-fit: cover;
  }
}
</style>
