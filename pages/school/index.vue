<script setup>
import { defineAsyncComponent } from 'vue'

const Banner = defineAsyncComponent(() => import('~/components/school/Banner.vue'))
const LatestCampusNews = defineAsyncComponent(() => import(`~/components/school/LatestCampusNews.vue`))
const StarSchoolChoice = defineAsyncComponent(() => import(`~/components/school/StarSchoolChoice.vue`))
const HotNews = defineAsyncComponent(() => import(`~/components/school/HotNews.vue`))
const HotSchool = defineAsyncComponent(() => import(`~/components/school/HotSchool.vue`))
const HotActivity = defineAsyncComponent(() => import(`~/components/school/HotActivity.vue`))

useHead({
  script: [ 
    {
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://www.ieduchina.com/statics/pcc/js/swiper.min.js',
      type: 'text/javascript',
      defer: true,
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://www.ieduchina.com/statics/pc/css/swiper.min.css',
    },
  ],
})
const StarSchoolChoiceData = [
  {
    image: 'https://www.ieduchina.com/uploadfile/toutiao/202505/1748326396640534.png',
    title: '香港国际学校竞教小学生开公司？香港威雅杨副校长：学生18岁前玩转跨国商业项目！',
    id: 438,
  },
  {
    image: 'https://www.ieduchina.com/uploadfile/toutiao/202505/1748326343856177.png',
    title: '港八大录取率83.3%！沙田培英校长亲曝，内地生转香港名校真能“躺赢”',
    id: 437,
  },
  {
    image: 'https://www.ieduchina.com/uploadfile/toutiao/202505/1748326324524434.png',
    title: '港八大录取率高达9成！元朗信义校长亲授 内地生选科别抄作业，这样选才稳',
    id: 436,
  },
  {
    image: 'https://www.ieduchina.com/uploadfile/toutiao/202505/1747721905393845.png',
    title: 'DSE与考校vs内地校？张校长揭秘：港澳子弟学校的3大碾压级优势',
    id: 435,
  },
  {
    image: 'https://www.ieduchina.com/uploadfile/toutiao/202505/1747721548641991.png',
    title: 'DSE vs A-Level终极快择！香港双轨名校校长亲曝，选错课程恐无缘港大医科？',
    id: 434,
  },
]
const HotNewsData = [
  {
    path: '//www.ieduchina.com/shenzhen/education/202505/127886.html',
    image: 'https://www.ieduchina.com/statics/js/editor/php/upload/image/20250507/1746604162592652.png',
    title: '2025年深圳国际预科学院怎么样？学费多少？',
    author: '深圳择校攻略',
    author_id: 10981,
  },
  {
    path: '//www.ieduchina.com/shenzhen/education/202505/127803.html',
    image: '//www.ieduchina.com/uploadfile/202505/f21920250506084036.jpg',
    title: '2025年香港大学AI科技夏令营：开启未来科技之门',
    author: '新哲文院',
    author_id: 5070,
  },
  {
    path: '//www.ieduchina.com/hongkong/summercamp/202503/125885.html',
    image: '//www.ieduchina.com/uploadfile/202503/f87620250314081806.jpg',
    title: '开始报名！不限身份，3-18岁，2025热门港校夏令营火热来袭！',
    author: '选校砖家',
    author_id: 4920,
  },
  {
    path: '//www.ieduchina.com/school/dynamics/202406/112714.html',
    image: '//www.ieduchina.com/uploadfile/202406/f10020240612083943.jpg',
    title: '惠州培文（原北大培文学校）2024年高一新生招生简章',
    author: '惠州培文',
    author_id: 7328,
  },
  {
    path: '//www.ieduchina.com/abroad/france/202108/73566.html',
    image: 'https://www.ieduchina.com/uploadfile/202108/f89920210830101923.jpg',
    title: '新生必看 | 可能是全法最详细的巴黎地区治安指南',
    author: '鑫慧迪法国留学一站通',
    author_id: 5281,
  },
]
const HotSchoolData = [
  {
    id: 1,
    path: '//schoollist.ieduchina.com/school/qls/',
    logo: 'https://www.ieduchina.com/uploadfile/college/202111/1637041580.png',
    name: '清澜山学校',
    grade: ['幼儿园', '小学', '初中', '高中'],
    kecheng: 'AP,Alevel,美式,双语国际',
    xuefei: '19-26万',
  },
  {
    id: 2,
    path: '//schoollist.ieduchina.com/school/Harrownanning/',
    logo: 'https://zhaosheng.ieduchina.com/Upload/File/202412/6773951d718f9.jpg',
    name: '南宁哈罗礼德学校',
    grade: ['幼儿园', '小学', '初中', '高中'],
    kecheng: 'Alevel,IGCSE,英式',
    xuefei: '17.97-31.41万',
  },
  {
    id: 3,
    path: '//schoollist.ieduchina.com/school/isawuhan/',
    logo: 'https://zhaosheng.ieduchina.com/Upload/File/202503/67c6a18793811.png',
    name: '爱莎武汉学校',
    grade: ['幼儿园', '小学', '初中', '高中'],
    kecheng: 'IB,AP,Alevel,IGCSE,其他',
    xuefei: '20-28万/年',
  },
  {
    id: 4,
    path: '//schoollist.ieduchina.com/school/tjyh/',
    logo: 'https://www.ieduchina.com/uploadfile/school/202207/1659094455.jpg',
    name: '天津英华实验学校-国际高中部',
    grade: ['高中'],
    kecheng: 'Alevel,加拿大,IGCSE',
    xuefei: '8.5-15.6万/年',
  },
  {
    id: 5,
    path: '//schoollist.ieduchina.com/school/dghywgy/',
    logo: 'https://www.ieduchina.com/uploadfile/college/202405/1715736978.png',
    name: '东莞市海逸外国语学校',
    grade: ['小学', '初中', '高中'],
    kecheng: '香港DSE',
    xuefei: '12万',
  },
]
const HotActivityData = [
  {
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202506/683fe7b4de58a.png',
    title: '上海美达菲学校6月8日校园开放日',
    status: '',
    time: '2025-06-08 13:00-16:00',
    address: '上海美达菲学校',
    path: '//www.ieduchina.com/huodong/202506/2781.html',
  },
  {
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202506/683ea40bb46eb.png',
    title: '2025荟同时装秀，邀您参加',
    status: '',
    time: '2025-06-06 18:30-19:00',
    address: '深圳荟同学校',
    path: '//www.ieduchina.com/huodong/202506/2780.html',
  },
  {
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202505/682583c20b70d.png',
    title: '珠海英华6月7日招生说明会，邀您参加',
    status: '',
    time: '2025-06-07 09:30-11:30',
    address: '珠海英华国际高中',
    path: '//www.ieduchina.com/huodong/202505/2749.html',
  },
  {
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202505/682aa7607a65d.png',
    title: '蓝湾未来领导力学校小学部6月7日校园开放日',
    status: '',
    time: '2025-06-07 09:30-12:00',
    address: '蓝湾未来领导力学校',
    path: '//www.ieduchina.com/huodong/202505/2753.html',
  },
  {
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202505/6833b5a1b4973.png',
    title: '碧桂园十里银滩学校6月7日校园开放日',
    status: '',
    time: '2025-06-07 09:30-12:00',
    address: '碧桂园十里银滩学校',
    path: '//www.ieduchina.com/huodong/202505/2768.html',
  },
  {
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202505/683555cdb508d.png',
    title: '佛山暨大港澳子弟学校6月7日校园开放日',
    status: '',
    time: '2025-06-07 08:30-12:00',
    address: '佛山暨大港澳子弟学校',
    path: '//www.ieduchina.com/huodong/202505/2773.html',
  },
  {
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202505/6837f2e421ee5.png',
    title: '南宁哈罗礼德学校6月7日欢乐汇，邀您参加',
    status: '',
    time: '2025-06-07 09:00-12:00',
    address: '南宁哈罗礼德学校',
    path: '//www.ieduchina.com/huodong/202505/2777.html',
  },
  {
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202505/682ad7a0116e9.jpg',
    title: '广州市斐特思学校6月7日校园开放日',
    status: '',
    time: '2025-06-07 09:30-13:00',
    address: '广州市斐特思学校',
    path: '//www.ieduchina.com/huodong/202505/2756.html',
  },
  {
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202506/683fe7b4de58a.png',
    title: '上海美达菲学校6月8日校园开放日',
    status: '',
    time: '2025-06-08 13:00-16:00',
    address: '上海美达菲学校',
    path: '//www.ieduchina.com/huodong/202506/2781.html',
  },
  {
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202506/683ea40bb46eb.png',
    title: '2025荟同时装秀，邀您参加',
    status: '',
    time: '2025-06-06 18:30-19:00',
    address: '深圳荟同学校',
    path: '//www.ieduchina.com/huodong/202506/2780.html',
  },
]

const { data: { value: { banner, news } } } = await useFetch(`/api/school`)
</script>

<template>
  <Header />
  <section class="abroad">
    <div class="abroad-con">
      <component :is="Banner" :data="banner" />
      <component :is="LatestCampusNews" :data="news" />
    </div>
    <aside>
      <div id="side">
        <component :is="HotActivity" :data="HotActivityData" />
        <component :is="HotSchool" :data="HotSchoolData" />
        <component :is="HotNews" :data="HotNewsData" />
        <component :is="StarSchoolChoice" :data="StarSchoolChoiceData" />
      </div>
    </aside>
  </section>
  <Footer />
</template>

<style lang='less'>
body {
  background-color: #f3f3f7;
}

.abroad {
  width: 1280px;
  margin: 40px auto 80px;
  display: flex;
  justify-content: space-between;

  .abroad-con {
    width: 900px;
  }

  #side {
    padding-top: 0;
    width: 360px;

    h3 {
      margin-bottom: 0;
      font-size: 20px;
      font-weight: 500;
      color: #272727;
      font-family: Source Han Sans CN;
      padding: 30px 0 20px;

      i {
        display: inline-block;
        width: 4px;
        height: 20px;
        background: #076FCB;
        border-radius: 6px;
        vertical-align: -3px;
        margin-right: 8px;
      }
    }
  }
}
</style>
