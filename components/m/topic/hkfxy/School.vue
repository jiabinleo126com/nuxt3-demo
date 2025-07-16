<script setup>
defineProps({
  data: {
    type: Array,
    default: () => []
  },
})
</script>
<template>
  <section class="green">
    <div class="yx">
      <h3 class="title" en="SCHOOLS">参与院校</h3>
      <ul>
        <ul>
          <li v-for="(item, index) in data" :key="index">
            <a :href="`${item.path}?tgform=香港教育文化之旅`" target="_blank">
              <img :src="item.logo" :alt="item.name">
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </ul>
    </div>
  </section>
</template>
<style lang="less"></style>