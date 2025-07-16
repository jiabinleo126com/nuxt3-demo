<script setup>
import { defineAsyncComponent } from 'vue'

defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  color1: {
    type: String,
    default: () => '',
  },
  color2: {
    type: String,
    default: () => '',
  },
})
const Title = defineAsyncComponent(() => import('./Title.vue'))
</script>

<template>
  <div class="ld">
    <component :is="Title" en="characteristic" cn="亮点特色" />
    <ul>
      <li v-for="(str, index) in data" :key="index">
        <span :style="`background-color: ${index % 2 === 0 ? color1 : color2})`">亮点{{ index + 1 }}</span>
        {{ str }}
      </li>
    </ul>
  </div>
</template>

<style lang="less">
.ld {
  width: 1280px;
  margin: 80px auto 0;
  padding-bottom: 64px;

  ul {
    margin-top: 50px;

    li {
      height: 48px;
      margin-top: 30px;
      line-height: 48px;
      font-size: 16px;
      background-color: #f6f6f6;
      clip-path: polygon(74px -118px, 200% 100%, 200% 100%, 0px 50px);

      span {
        background-color: var(--primary);
        margin-right: 47px;
        font-size: 22px;
        font-weight: 500;
        width: 142px;
        height: 48px;
        display: inline-block;
        color: #fff;
        text-align: center;
        clip-path: polygon(74px -118px, 166px -55px, 100px 100px, 0px 50px);
      }

      &:nth-of-type(even) {
        span {
          background-color: var(--next);
        }
      }
    }
  }
}
</style>
