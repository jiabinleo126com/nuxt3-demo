<script setup>
import image from '~/assets/topic/2025/sz/展会回顾banner.jpg'
</script>
<template>
  <img :class="$style.banner" :src="image" alt="2025全球多元化升学论坛大湾区国际教育名校择校展">
</template>
<style lang="less" module>
.banner {
  width: 100%;
  min-width: 1200px;
  min-height: 500px;
  object-fit: cover;
  object-position: center;
}
</style>