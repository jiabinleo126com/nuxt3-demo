<script setup>
const Article = defineAsyncComponent(() => import('~/components/Article.vue'))
const route = useRoute()
console.log(route.params)
const { data } = await useFetch(`/api/${route.params.city}`)
</script>
<template>
  <component :is="Article" />
</template>