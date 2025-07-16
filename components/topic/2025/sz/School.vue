<script setup>
import { defineAsyncComponent } from 'vue';
import image1 from '~/assets/topic/2025/sz/school/港青基信书院.png'
import image2 from '~/assets/topic/2025/sz/school/中华基金中学.png'
import image3 from '~/assets/topic/2025/sz/school/基督教香港信义会元朗信义中学.png'
import image4 from '~/assets/topic/2025/sz/school/沙田培英中学.png'
import image5 from '~/assets/topic/2025/sz/school/香港威雅学校.png'
import image6 from '~/assets/topic/2025/sz/school/慈善基金马陈端喜纪念中学.png'
import image7 from '~/assets/topic/2025/sz/school/The Harbour School.png'
import image8 from '~/assets/topic/2025/sz/school/深圳市深美外籍人员子女学校.png'
import image9 from '~/assets/topic/2025/sz/school/深圳前海哈罗港人子弟学校.png'
import image10 from '~/assets/topic/2025/sz/school/前海哈罗外籍人员子女学校.png'
import image12 from '~/assets/topic/2025/sz/school/明爱圣若瑟中学.png'
import image13 from '~/assets/topic/2025/sz/school/明爱庄月明中学.png'
import image14 from '~/assets/topic/2025/sz/school/元朗公立中学校友会邓英业小学.png'
import image15 from '~/assets/topic/2025/sz/school/东莞暨大港澳子弟学校.png'
import image16 from '~/assets/topic/2025/sz/school/深圳丽林维育维多利亚国际学校.png'
import image17 from '~/assets/topic/2025/sz/school/苏浙公学.png'
import image18 from '~/assets/topic/2025/sz/school/香港中文大學校友會聯會張煊昌中學.png'
import image19 from '~/assets/topic/2025/sz/school/广州市源雅学校DSE课程中心.png'
import image20 from '~/assets/topic/2025/sz/school/深圳市正德高级中学DSE学部.png'
import image21 from '~/assets/topic/2025/sz/school/PKF移民.png'
import image22 from '~/assets/topic/2025/sz/school/more.png'

const Title = defineAsyncComponent(() => import('~/components/topic/2025/sz/Title.vue'))
const school = [
  {
    id: 2,
    name: "中华基金中学",
    image: image2,
    href: "https://schoollist.ieduchina.com/school/cfss/"
  },
  {
    id: 3,
    name: "基督教香港信义会元朗信义中学",
    image: image3,
    href: "https://schoollist.ieduchina.com/school/yllhk/"
  },
  {
    id: 4,
    name: "沙田培英中学",
    image: image4,
    href: "https://schoollist.ieduchina.com/school/pyc/"
  },
  {
    id: 5,
    name: "香港威雅学校",
    image: image5,
    href: "https://schoollist.ieduchina.com/school/wygx/"
  },
  {
    id: 1,
    name: "港青基信书院",
    image: image1,
    href: "https://schoollist.ieduchina.com/school/yhkcc/"
  },
  {
    id: 7,
    name: "The Harbour School",
    image: image7,
    href: "https://schoollist.ieduchina.com/school/gwxx/"
  },
  {
    id: 8,
    name: "深圳市深美外籍人员子女学校",
    image: image8,
    href: "https://schoollist.ieduchina.com/school/sais/"
  },
  {
    id: 9,
    name: "深圳前海哈罗港人子弟学校",
    image: image9,
    href: "https://schoollist.ieduchina.com/school/hhkcs/"
  },
  {
    id: 10,
    name: "前海哈罗外籍人员子女学校",
    image: image10,
    href: "https://schoollist.ieduchina.com/school/harrowshenzhen/"
  },
  {
    id: 6,
    name: "慈善基金马陈端喜纪念中学",
    image: image6,
    href: "https://schoollist.ieduchina.com/school/mcdhmchk/"
  },
  {
    id: 12,
    name: "明爱圣若瑟中学",
    image: image12,
    href: "https://schoollist.ieduchina.com/school/csjsshk/"
  },
  {
    id: 13,
    name: "明爱庄月明中学",
    image: image13,
    href: "https://schoollist.ieduchina.com/school/ccymhk/"
  },
  {
    id: 14,
    name: "元朗公立中学校友会邓英业小学",
    image: image14,
    href: "https://schoollist.ieduchina.com/school/aluhk/"
  },
  {
    id: 15,
    name: "东莞暨大港澳子弟学校",
    image: image15,
    href: "https://schoollist.ieduchina.com/school/asjdg/"
  },

  {
    id: 17,
    name: "苏浙公学",
    image: image17,
    href: "https://schoollist.ieduchina.com/school/kccnp/"
  },
  {
    id: 18,
    name: "香港中文大学校友会联会张煊昌中学",
    image: image18,
    href: "https://schoollist.ieduchina.com/school/tcss/"
  },
  {
    id: 19,
    name: "广州市源雅学校DSE课程中心",
    image: image19,
    href: "https://schoollist.ieduchina.com/school/yuanyadse/"
  },
  {
    id: 20,
    name: "深圳市正德高级中学DSE学部",
    image: image20,
    href: "https://schoollist.ieduchina.com/school/zhengdexx/"
  },
  {
    id: 16,
    name: "深圳丽林维育维多利亚国际学校",
    image: image16,
    href: "https://schoollist.ieduchina.com/school/VPA/"
  },
  {
    id: 21,
    name: "PKF移民",
    image: image21,
    href: "https://www.ieduchina.com/institution/114/index.html"
  },
  {
    id: 22,
    name: "",
    image: image22,
    href: "https://schoollist.ieduchina.com/"
  }
]
</script>
<template>
  <div class="school">
    <component :is="Title" cn="参与院校" en="School" />>
    <ul>
      <li v-for="(item, index) in school" :key="index">
        <a :href="item.href" target="_blank" rel="nofollow">
          <img :src="item.image" :alt="item.name">
          <p>
            {{ item.name }}
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.school {
  padding: 60px 0;
  background-color: #F5F7FF;

  ul {
    margin: 60px auto 0;
    width: 1200px;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 227px;
      margin-bottom: 32px;
      margin-right: 16px;

      &:nth-of-type(5n) {
        margin-right: 0;
      }

      img {
        width: 227px;
        height: 90px;
        object-fit: cover;
        object-position: center;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        color: #666666;
        line-height: 23px;
        padding-top: 12px;
        text-align: center;
      }
    }
  }
}
</style>
