<template>
    <h3 class="title" :en>{{ cn }}</h3>
</template>
<script setup lang="ts">
defineProps<{
    cn: string,
    en: string,
}>();
</script>
<style scoped lang="less">
h3[en].title {
    font-size: 42px;
    font-weight: bold;
    color: #000;
}

h3[en].title::after {
    content: attr(en);
    font-size: 28px;
    font-weight: 500;
    color: #ccc;
    text-transform: uppercase;
    margin-left: 20px;
}
</style>