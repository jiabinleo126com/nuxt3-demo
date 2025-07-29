<script setup>
import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Header.vue`))
const Banner = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Banner.vue`))
const Lthg = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Lthg.vue`))
const Ztyj = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Ztyj.vue`))
const Videos = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Videos.vue`))
const Hdxc = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Hdxc.vue`))
const School = defineAsyncComponent(() => import(`~/components/topic/2025/sz/School.vue`))
const Ltxw = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Ltxw.vue`))
const Wqhg = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Wqhg.vue`))
const Footer = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Footer.vue`))
const Rightnav = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Rightnav.vue`))
const Mask = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Mask.vue`))
useHead({
  title: '2025全球多元化升学论坛大湾区国际教育名校择校展-香港教育论坛 - 国际教育网 国际化学校门户',
  meta: [
    { name: 'description', content: '2025年5月10日，由国际教育网主办的“全球多元化升学论坛·大湾区国际教育名校择校展”在深圳福田圆满落幕。论坛围绕香港多元化教育的优势与特色展开了深入的探讨，并与内地教育进行了比较分析。同时汇聚了众多香港&内地优质国际学校，从Band1精英中学到特色Band2/3学校，从国际名校到港澳子弟学校，涵盖从幼儿园到高中的全学段教育，全面覆盖DSE、AP、IB、A-Level主流国际课程体系，满足不同学术水平、教育预算及升学路径的需求。' },
    { name: 'keywords', content: '升学论坛,香港教育论坛' },
    // Open Graph 协议（用于社交媒体分享）
    { property: 'og:title', content: '升学论坛,香港教育论坛' },
    { property: 'og:description', content: '2025年5月10日，由国际教育网主办的“全球多元化升学论坛·大湾区国际教育名校择校展”在深圳福田圆满落幕。论坛围绕香港多元化教育的优势与特色展开了深入的探讨，并与内地教育进行了比较分析。同时汇聚了众多香港&内地优质国际学校，从Band1精英中学到特色Band2/3学校，从国际名校到港澳子弟学校，涵盖从幼儿园到高中的全学段教育，全面覆盖DSE、AP、IB、A-Level主流国际课程体系，满足不同学术水平、教育预算及升学路径的需求。' },
    { property: 'og:type', content: 'website' },
    // Twitter 卡片
    { name: 'twitter:card', content: 'https://www.ieduchina.com/statics/image/c14def69.jpg' },
    { name: 'twitter:title', content: '升学论坛,香港教育论坛' },
    { name: 'twitter:description', content: '2025年5月10日，由国际教育网主办的“全球多元化升学论坛·大湾区国际教育名校择校展”在深圳福田圆满落幕。论坛围绕香港多元化教育的优势与特色展开了深入的探讨，并与内地教育进行了比较分析。同时汇聚了众多香港&内地优质国际学校，从Band1精英中学到特色Band2/3学校，从国际名校到港澳子弟学校，涵盖从幼儿园到高中的全学段教育，全面覆盖DSE、AP、IB、A-Level主流国际课程体系，满足不同学术水平、教育预算及升学路径的需求。' },
  ],
  link: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//www.ieduchina.com/statics/pcc/img/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: 'https://www.ieduchina.com/statics/common/css/swiper.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.min.css',
    },
  ],
  script: [
    {
      src: "https://cloudcache.tencentcs.com/qcloud/video/dist/tcadapter.1.0.0.min.js",
      type: 'text/javascript',
      defer: true,
    },
    {
      src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/TXLivePlayer-1.2.3.min.js",
      type: 'text/javascript',
      defer: true,
    },
    {
      src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/hls.min.1.1.5.js",
      type: 'text/javascript',
      defer: true,
    },
    {
      src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/flv.min.1.6.3.js",
      type: 'text/javascript',
      defer: true,
    },
    {
      src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/dash.all.min.4.4.1.js",
      type: 'text/javascript',
      defer: true,
    },
    {
      src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.v4.5.4.min.js",
      type: 'text/javascript',
      defer: true,
    },
    {
      src: "https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js",
      type: 'text/javascript',
      defer: true,
    },
    {
      src: "https://www.ieduchina.com/statics/common/js/swiper.min.js",
      type: 'text/javascript',
      defer: true,
    },
    {
      src: "https://www.ieduchina.com/statics/js/layer.js",
      type: 'text/javascript',
      defer: true,
    },
    {
      src: "https://www.ieduchina.com/statics/share/jquery.share.min.js",
      type: 'text/javascript',
      defer: true,
    },
    {
      src: "https://www.ieduchina.com/topic/tgFrom.js?t=2025",
      type: 'text/javascript',
      defer: true,
    },
  ]
})
</script>
<template>
  <img src="https://www.ieduchina.com/statics/image/c14def69.jpg" width="0" height="0" style="display:none;">
  <component :is="Header" />
  <section>
    <component :is="Banner" />
    <component :is="Lthg" />
    <component :is="Ztyj" />
    <component :is="Videos" />
    <component :is="Hdxc" />
    <component :is="School" />
    <component :is="Ltxw" />
    <component :is="Wqhg" />
  </section>
  <component :is="Footer" />
  <component :is="Rightnav" />
  <component :is="Mask" />
</template>
<style lang="less"></style>