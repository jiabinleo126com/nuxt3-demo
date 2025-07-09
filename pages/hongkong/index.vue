<template>
  <Header />
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() => import(`~/components/hongkong/Header.vue`));
</script>
<style lang="less"></style>