<script setup>
const Article = defineAsyncComponent(() => import('~/components/Article.vue'))
const route = useRoute()
</script>
<template>
  <component :is="Article" />
</template>