<template>
  <div class="x-news side-title2">
    <h2><i></i>新闻资讯</h2>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <NuxtLink :to="item.path">
          <div class="image" :style="{ backgroundImage: `url(${item.image})` }"></div>
        </NuxtLink>
        <div class="news-text">
          <NuxtLink :to="item.path">
            <p class="title">
              {{ item.title }}
            </p>
          </NuxtLink>
          <p class="bottom">
            <NuxtLink :to="item.path">
              <span title=""><i :style="{ backgroundImage: `url(${item.authorImage})` }"></i>{{
                item.author }}</span>
            </NuxtLink>
            <span>{{ item.date }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
const data = reactive([
  {
    title: '2026QS排名大洗牌！港大飙升！这次排名真的很颠...',
    image: '//www.ieduchina.com/uploadfile/202506/f70520250620085554.jpg',
    path: '//www.ieduchina.com/school/education/202506/129701.html',
    author: '选校砖家',
    authorImage: 'https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg',
    date: '2025-06-20',
  },
  {
    title: '港大跃居2026QS排名Top 11！今夏「雅思集训+DSE冲刺营」抢占录取窗口期！',
    image: '//www.ieduchina.com/uploadfile/202506/f32620250620084634.jpg',
    path: '//www.ieduchina.com/school/education/202506/129697.html',
    author: '香港名校通',
    authorImage: 'https://www.ieduchina.com/uploadfile/gzh/202210/166718280294136.jpg',
    date: '2025-06-20',
  },
  {
    title: '昆明世青学校2025年高中招生简章',
    image: '//www.ieduchina.com/uploadfile/202506/f66320250620085817.jpg',
    path: '//www.ieduchina.com/school/dynamics/202506/129706.html',
    author: '昆明世青学校',
    authorImage: 'https://www.ieduchina.com/uploadfile/gzh/202303/167775046912446.jpg',
    date: '2025-06-20',
  },
  {
    title: '2025毕业生何滨江：05后转轨生的教育突围与治愈成长 | 圆梦银滩',
    image: '//www.ieduchina.com/uploadfile/202506/f19520250620083440.jpg',
    path: '//www.ieduchina.com/school/education/202506/129684.html',
    author: '碧桂园十里银滩学校',
    authorImage: 'https://www.ieduchina.com/uploadfile/toutiao/202205/1652840031.png',
    date: '2025-06-20',
  },
  {
    title: 'Students’ Speech | 在学生会，遇见更好的自己',
    image: '//www.ieduchina.com/uploadfile/202506/f38320250620085505.jpg',
    path: '//www.ieduchina.com/school/education/202506/129700.html',
    author: '广州暨大港澳子弟学校',
    authorImage: 'https://www.ieduchina.com/uploadfile/gzh/202110/163512691354531.jpg',
    date: '2025-06-20',
  },
])
</script>
<style lang="less">
#side .x-news {
  background-color: #f7fafc
}

#side .x-news li {
  display: flex;
  margin: 0 15px 0 15px;
  padding: 14px 0;
  justify-content: space-between;
  border-bottom: solid #eee 1px
}

#side .x-news li:first-of-type {
  padding-top: 0
}

#side .x-news li:last-of-type {
  border-bottom: none
}

#side .x-news li .image {
  width: 102px;
  height: 64px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 14px;
  border-radius: 4px
}

#side .x-news li .news-text {
  flex: 1
}

#side .x-news li .news-text a {
  text-decoration: none
}

#side .x-news li .news-text p.title {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #1a1919;
  line-height: 18px;
  height: 36px;
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 10px
}

#side .x-news li .news-text p.bottom {
  display: flex;
  justify-content: space-between;
  line-height: 18px
}

#side .x-news li .news-text p.bottom span {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #424242
}

#side .x-news li .news-text p.bottom span:first-of-type {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden
}

#side .x-news li .news-text p.bottom a span {
  width: 151px;
  display: inline-block
}

#side .x-news li .news-text p.bottom span i {
  vertical-align: -4px;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: #facd89;
  border-radius: 50%;
  margin-right: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat
}
</style>