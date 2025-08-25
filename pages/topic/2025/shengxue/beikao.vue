<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
const Header = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Header.vue`))
const Title = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Title.vue`))
const Footer = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Footer.vue`))
</script>
<template>
  <component :is="Header" />
  <component :is="Footer" />
</template>
<style lang="less" scoped module></style>