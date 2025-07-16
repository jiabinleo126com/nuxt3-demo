<script setup>
defineProps({
  data: {
    type: Array,
    default: () => Array
  }
})
</script>
<template>
  <section>
    <div class="ld">
      <h3 class="title" en="characteristic">亮点特色</h3>
      <ul>
        <li v-for="(item, index) in data">
          <span>{{ index + 1 }}</span>
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>