<script setup>
import { defineAsyncComponent } from 'vue'
// import { NuxtImage } from '@nuxt/image'
import image1 from '~/assets/topic/2025/sz/teacher/尹浩然@1x.png'
import image2 from '~/assets/topic/2025/sz/teacher/朱嘉添@1x.png'
import image3 from '~/assets/topic/2025/sz/teacher/何廸信@1x.png'
import image4 from '~/assets/topic/2025/sz/teacher/卢裕敏@1x.png'
import image5 from '~/assets/topic/2025/sz/teacher/刘少龙@1x.png'
import image6 from '~/assets/topic/2025/sz/teacher/杨菲菲@1x.png'
import image7 from '~/assets/topic/2025/sz/teacher/杨菲菲@1x.png'
import image8 from '~/assets/topic/2025/sz/teacher/张悦@1x.png'

const Title = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Title.vue`))
const teacher = [
  {
    id: 1,
    title1: "香港选科自由度高?",
    title2: "必修&选修规则&热门组合推荐",
    img: image1,
    name: "尹浩然：基督教香港信义会元朗信义中学校长",
    link: ""
  },
  {
    id: 2,
    title1: "逃离内卷，走向国际",
    title2: "——内地与香港教育的机遇与挑战",
    img: image2,
    name: "朱嘉添：沙田培英中学校长",
    link: ""
  },
  {
    id: 3,
    title1: "香港精英英文中学入学全攻略",
    title2: "——从笔试到面试的制胜策略",
    img: image3,
    name: "何廸信：中华基金中学校长",
    link: ""
  },
  {
    id: 4,
    title1: "DSE vs A-Level：",
    title2: "哪个课程更适合我的孩子？",
    img: image4,
    name: "卢裕敏 ：港青基信书院校长",
    link: ""
  },
  {
    id: 5,
    title1: "DSE vs A-Level：",
    title2: "哪个课程更适合我的孩子？",
    img: image5,
    name: "刘少龙：港青基信书院副校长",
    link: ""
  },
  {
    id: 6,
    title1: "从“双语”到“双文化”：",
    title2: "香港国际学校如何培养真正的全球竞争力？",
    img: image6,
    name: "杨菲菲 ：香港威雅学校副校长",
    link: ""
  },
  {
    id: 7,
    title1: "DSE/AP/A-Level/ IB四大国际课程体系分析",
    title2: "——课程费用与升学路径的性价比",
    img: image7,
    name: "刘宇：深美外籍人员子女学校宝安校区校长",
    link: ""
  },
  {
    id: 8,
    title1: "揭秘DSE",
    title2: "——香港中学文凭考试全解析",
    img: image8,
    name: "张悦：东莞暨大港澳子弟学校中学部校长",
    link: ""
  }]

</script>
<template>
  <div :class="$style.ztyj">
    <components :is="Title" cn="主题演讲" en="Keynote speech" />
    <div :class="$style.yj">
      <a v-for="(item, index) in teacher" :key="index" :href="item.link" rel="nofollow" target="_blank">
        <span>演讲主题</span>
        <h3>
          {{ item.title1 }}
        </h3>
        <h4>
          {{ item.title2 }}
        </h4>
        <p>
          {{ item.name }}
        </p>
        <img :src="item.img" :alt="item.name">
      </a>
    </div>
  </div>
</template>
<style lang="less" module>
.ztyj {
  padding: 60px 0;
  background: #101E5D url("~/assets/topic/2025/sz/蒙版组 1@1x.png") center -24px/contain no-repeat;

  .yj {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;

    a {
      display: block;
      position: relative;
      width: 580px;
      height: 240px;
      background: #FFFFFF url("~/assets/topic/2025/sz/人物背景@1x.png") center top/contain no-repeat;
      border-radius: 12px 12px 12px 12px;
      margin-top: 105px;
      padding: 40px 0 0 32px;

      span {
        display: block;
        line-height: 30px;
        text-align: center;
        width: 97px;
        height: 30px;
        border-radius: 15px 15px 15px 0px;
        background: linear-gradient(90deg, #FCE8CF 0%, #EDB773 100%), #101E5D;
        font-size: 16px;
        font-weight: 350;
        color: #101E5D;
      }

      h3 {
        font-size: 24px;
        font-weight: bold;
        color: #EDB874;
        padding: 17px 0 17px;
      }

      h4 {
        font-size: 24px;
        font-weight: bold;
        color: #FFFFFF;

      }

      p {
        font-weight: bold;
        font-size: 24px;
        color: #EDB874;
        line-height: 35px;

        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        font-weight: 400;
        font-size: 20px;
        color: #333333;
        line-height: 60px;
        padding-left: 32px;
      }

      img {
        position: absolute;
        right: 0;
        bottom: 60px;
        width: 182px;
        height: 225px;
        object-fit: contain;
        object-position: bottom;
      }

      &:nth-of-type(-n + 2) {
        margin-top: 80px;
      }
    }
  }
}
</style>