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