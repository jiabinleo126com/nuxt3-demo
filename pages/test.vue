<template>
  <div>
    <h1>API Test Page</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/index')
</script>