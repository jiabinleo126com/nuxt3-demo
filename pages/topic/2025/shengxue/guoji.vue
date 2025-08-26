<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
const Header = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Header.vue`))
const Title = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Title.vue`))
const Banner = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Banner.vue`))
const Footer = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Footer.vue`))

const { data: { value: { banner2, menu2 } } } = await useFetch('/api/topic/2025/shengxue')
</script>
<template>
  <component :is="Header" :data="menu2" />
  <section :class="$style.section">
    <component :is="Banner" :data="banner2" />
  </section>
  <component :is="Footer" />
</template>
<style lang="less" scoped module>
.section {
  padding-top: 96px;
}
</style>