<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
const Header = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Header.vue`))
const Title = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Title.vue`))
const Banner = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Banner.vue`))
const Footer = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Footer.vue`))

const { data: { value: { banner, menu } } } = await useFetch('/api/topic/2025/shengxue', {
  method: 'POST',
  body: {
    page: "guoji"
  }
})
</script>
<template>
  <component :is="Header" :data="menu" />
  <section :class="$style.section">
    <component :is="Banner" :data="banner" />
  </section>
  <component :is="Footer" />
</template>
<style lang="less" scoped module>
.section {
  padding-top: 96px;
}
</style>