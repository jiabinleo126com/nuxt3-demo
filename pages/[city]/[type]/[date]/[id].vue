<script setup>
const Article = defineAsyncComponent(() => import('~/components/Article.vue'))
const route = useRoute()
console.log(route.params)
</script>
<template>
  <component :is="Article" />
</template>