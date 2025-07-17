<script setup>
defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>
<template>
  <div :class="$style.images">
    <img v-for="(item, index) in data" :key="index" :src="item.image" :preview="item.imageMax" alt="">
  </div>
</template>

<style lang="less" module>
.images {
  width: 1280px;
  margin: 80px auto 0;
  padding-bottom: 64px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    width: 310px;
    margin-top: 10px;
  }
}
</style>