<template>
  <div>
   
    <main>
      <h1>{{ message[0] }}</h1>
      <p v-for="(msg, index) in message" :key="index">{{ msg }}</p>
    </main>
   
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const message = ref(['Welcome to My Application', 'This is the main content area.', 'Here you can add your application content.', 'Feel free to customize it as per your needs.', 'Enjoy building your application!'])

</script>
<style>
main{
  text-align: center;
}
</style>