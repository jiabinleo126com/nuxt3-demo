<script setup>
import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import(`~/components/hongkong/Header.vue`))
</script>

<template>
  <Header />
</template>

<style lang="less"></style>
