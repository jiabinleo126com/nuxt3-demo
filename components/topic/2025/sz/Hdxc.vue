<script setup>
import image1 from '~/assets/topic/2025/sz/蒙版组 23@1x.png'
import image2 from '~/assets/topic/2025/sz/蒙版组 24@1x.png'
import image3 from '~/assets/topic/2025/sz/蒙版组 25@1x.png'
import image4 from '~/assets/topic/2025/sz/蒙版组 26@1x.png'
import image5 from '~/assets/topic/2025/sz/蒙版组 27@1x.png'
import image6 from '~/assets/topic/2025/sz/蒙版组 28@1x.png'
import { defineAsyncComponent } from 'vue'

const Title = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Title.vue`))
</script>
<template>
  <div class="hdxc">
    <component :is="Title" cn="活动现场" en="Activity site" />
    <div class="images">
      <img :src="image1" alt="">
      <img :src="image2" alt="">
      <img :src="image3" alt="">
      <img :src="image4" alt="">
      <img :src="image5" alt="">
      <img :src="image6" alt="">
    </div>
    <a href="https://m.inmuu.com/v2/photolive/news/4767131/photo?inviteId=7019896" target="_blank" rel="nofollow">
      照片直播&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→
    </a>
  </div>
</template>
<style lang="less">
.hdxc {
  padding: 60px 0;
  text-align: center;
  background-color: #F5F7FF;

  .images {
    padding: 60px 0 40px;
    margin: 0 auto;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      width: 387px;
      height: 300px;
      object-position: center;
      object-fit: cover;
      margin-bottom: 20px;
    }
  }

  a {
    display: inline-block;
    width: 160px;
    height: 50px;
    background: #101e5d;
    border-radius: 20px 0px 20px 0px;
    font-weight: 350;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 50px;
    box-shadow: 0px 4px 10px 0px rgba(16, 30, 93, 0.3);
  }
}
</style>