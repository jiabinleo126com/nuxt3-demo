<script setup>
import logo from '~/assets/topic/2025/shengxue/logo@1x.png'

defineProps({
  data: {
    type: Array,
    default: () => ([])
  }
})

useHead({
  script: [
    // {
    //   innerHTML: `
    //   /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.location.href="/m/topic/2025/shengxue/");
    //   `
    // },
    {
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
      body: true
    },
    {
      src: 'https://www.ieduchina.com/statics/pcc/js/swiper.min.js',
      type: 'text/javascript',
      body: true
    },
    {
      src: 'https://www.ieduchina.com/statics/js/layer.js',
      type: 'text/javascript',
      body: true
    },
    {
      src: 'https://www.ieduchina.com/topic/tgFrom.js',
      type: 'text/javascript',
      defer: true,
      body: true
    },
  ],
  link: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//www.ieduchina.com/statics/pcc/img/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: 'https://www.ieduchina.com/statics/pc/css/swiper.min.css',
    },
  ],
  title: '国际教育网升学中心',
  meta: [
    {
      name: 'keywords',
      content: '国际学校入学备考,香港学校升学规划',
    },
    {
      name: 'description',
      content: '国际教育网升学中心提供国际学校和香港学校升学规划与备考服务,国际学校升学规划与备考涵盖了英系、美系和港系的名校,香港学校升学规划与备考主要涵盖了香港本地名校及顶尖国际学校,以及香港身份咨询与规划服务.',
    },
    {
      name: 'applicable-device',
      content: 'pc',
    },
  ],
})
</script>
<template>
  <header :class="$style.header">
    <div :class="$style.con">
      <NuxtLink to="/topic/2025/shengxue">
        <img :src="logo" alt="国际教育网·升学中心"></img>
      </NuxtLink>
      <menu>
        <a v-for="value in data" :class="value.id">{{ value.title }}</a>
      </menu>
    </div>
  </header>
</template>
<style lang="less" module>
.header {
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100%;
  background-color: #083A83;
  display: flex;
  justify-content: center;

  .con {
    width: 1200px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 138px;
      height: 56px;
      object-fit: contain;
      object-position: center;
    }

    menu {
      a {
        font-size: 18px;
        font-weight: bold;
        color: #FFFFFF;
        margin-right: 26px;
        cursor: pointer;
      }
    }
  }
}
</style>