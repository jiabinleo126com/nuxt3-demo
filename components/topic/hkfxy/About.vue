<script setup lang="ts">
defineProps<{
  data: string[]
}>()
</script>

<template>
  <div class="about">
    <h3 en="Active review">
      探校营回顾
    </h3>
    <div class="text">
      <p v-for="(item, index) in data" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="less">
.about {
  display: flex;
  justify-content: space-between;
  font-size: 0;
  width: 1280px;
  margin: 80px auto 0;

  h3 {
    font-size: 42px;
    font-weight: bold;
    color: #000;

    &::after {
      content: attr(en);
      font-size: 28px;
      font-weight: 500;
      color: #ccc;
      text-transform: uppercase;
      display: block;
      margin-top: 10px;
    }
  }

  .text {
    width: 954px;

    p {
      font-size: 16px;
      font-weight: 500;
      color: #666;
      line-height: 30px;
      padding-top: 20px;
      text-align: justify;
      letter-spacing: -1px;

      &:first-of-type {
        padding-top: 0;
        margin-top: -6px;
      }

      span {
        color: var(--primary);
      }
    }
  }
}
</style>
