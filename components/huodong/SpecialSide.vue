<script setup>
import { reactive } from 'vue'

const data = reactive([
  {
    path: 'https://www.ieduchina.com/topic/2024/sz/index.html',
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202410/67208079bbbc8.png',
    title: '2024全球多元化升学论坛大湾区国际教育名校升学展',
  },
  {
    path: 'https://www.ieduchina.com/topic/2024/shenzhen/index.html',
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202407/66850ffb90b87.png',
    title: '2024全球多元化升学论坛暨内地香港教育展',
  },
  {
    path: 'https://www.ieduchina.com/topic/2023/shenzhen/index.html',
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202407/66850fcc2a1d8.png',
    title: '2023大湾区国际教育顶峰论坛',
  },
  {
    path: 'https://www.ieduchina.com/topic/2022/423_SZ/',
    image: 'https://www.ieduchina.com/uploadfile/activity/202302/1676856756.png',
    title: '2022大湾区国际教育名校论坛',
  },
  {
    path: 'https://www.ieduchina.com/topic/2020/1017_SZ/',
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202410/672080f6c2fad.png',
    title: '2020年10月17日大湾区国际教育高端名校论坛',
  },
  {
    path: 'https://www.ieduchina.com/topic/2020/711_SZ/',
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202410/6720817337c0b.png',
    title: '2020年7月11日大湾区国际名校论坛',
  },
  {
    path: 'https://www.ieduchina.com/topic/2020/3_BJ/',
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202410/672081e3ad6e2.jpg',
    title: '2020年3月28日京津冀华北区线上论坛',
  },
  {
    path: 'https://www.ieduchina.com/topic/2020/3_SZ/',
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202411/672877bcb4e25.jpg',
    title: '粤港澳大湾区线上论坛暨第二十七届国际教育择校展',
  },
  {
    path: 'https://www.ieduchina.com/topic/2019/11_SZ/',
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202411/672877daae35e.png',
    title: '第26届国际教育择校展',
  },
  {
    path: 'https://www.ieduchina.com/topic/2019/07_SZ/',
    image: 'https://zhaosheng.ieduchina.com/Upload/File/202411/67287801999e1.png',
    title: 'IEEF预见未来|2019深圳国际教育展活动',
  },
])
</script>

<template>
  <div class="x-special side-title2">
    <h2><i></i>专题回顾</h2>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <NuxtLink :to="item.path">
          <div :style="{ backgroundImage: `url(${item.image})` }"></div>
          <p>{{ item.title }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
#side .x-special {
  background-color: #f7fafc
}

#side .x-special li div {
  cursor: pointer;
  position: relative;
  width: 332px;
  height: 186px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;
  margin: 0 auto
}

#side .x-special li.enter div {
  position: relative
}

#side .x-special li.enter div::before {
  position: absolute;
  content: "姝ｅ湪鎶ュ悕";
  text-align: center;
  line-height: 28px;
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #fff;
  width: 86px;
  height: 29px;
  background-color: #fc6607;
  left: 0;
  top: 10px
}

#side .x-special li.over div {
  position: relative
}

#side .x-special li.over div::before {
  position: absolute;
  content: "娲诲姩缁撴潫";
  text-align: center;
  line-height: 28px;
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #fff;
  width: 86px;
  height: 29px;
  background-color: #a0a0a0;
  left: 0;
  top: 10px
}

#side .x-special li p {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 6px 12px 26px;
  line-height: 31px;
  color: #272727
}
</style>
