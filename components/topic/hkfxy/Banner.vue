<template>
  <div class="banner">
    <img :src :alt :height width="1280">
  </div>
</template>
<script setup>
defineProps({
  height: {
    type: Number
  },
  alt: {
    type: String
  },
  src: {
    type: String
  },
})
</script>
<style lang="less" scoped>
.banner {
  width: 1280px;
  margin: 0 auto;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;

    &[height="420"] {
      height: 420px;
    }
  }
}
</style>