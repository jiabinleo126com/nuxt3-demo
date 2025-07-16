<script setup>
defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>
<template>
  <section>
    <h3 class="title" en="Active review">探校营回顾</h3>
    <div class="text">
      <P v-for="(item, index) in data" :key="index">{{ item }}</P>
    </div>
  </section>
</template>
<style lang="less">
section .text p {
  font-size: 0.512rem;
  font-weight: 500;
  line-height: 0.68266667rem;
  margin-top: 0.85333333rem;
  color: #666666;
  text-align: justify;
}

section .text p span {
  color: var(--primary);
}
</style>