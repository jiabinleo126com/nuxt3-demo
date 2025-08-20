<script setup>
const Article = defineAsyncComponent(() => import('~/components/Article.vue'))
const route = useRoute()
const { data } = await useFetch(`/api/${route.params.type}/${route.params.date}/${route.params.id}`)
</script>
<template>
  <component :is="Article" :data />
</template>