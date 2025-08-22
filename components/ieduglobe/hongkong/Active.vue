<script setup>
import { onMounted } from 'vue';

const list = [
  {
    title: "北京爱迪学校8月校园开放日，秋招收尾倒计时",
    image: "https://zhaosheng.ieduchina.com/Upload/File/202507/687f294fe5568.jpg",
    href: "//www.ieduchina.com/huodong/202507/2855.html",
    time: "2025-08-23 09:00-12:00",
    dw: "北京爱迪学校"
  },
  {
    title: "暑假黄金探校期，探秘哈罗横琴校园",
    image: "https://zhaosheng.ieduchina.com/Upload/File/202507/687470a7e5354.png",
    href: "//www.ieduchina.com/huodong/202507/2842.html",
    time: "2025-07-09 00:00-00:00",
    dw: "哈罗横琴"
  }, {
    title: "2025深圳橘郡STEM夏令营，火热报名中",
    image: "https://zhaosheng.ieduchina.com/Upload/File/202507/686617a0cd336.jpg",
    href: "//www.ieduchina.com/huodong/202507/2837.html",
    time: "2025-08-24 00:00-00:00",
    dw: "橘郡国际课程中心"
  }, {
    title: "珠海英华7-8月份校园开放日信息",
    image: "https://zhaosheng.ieduchina.com/Upload/File/202507/6883392c9220d.png",
    href: "//www.ieduchina.com/huodong/202507/2861.html",
    time: "2025-07-26 00:00-00:00",
    dw: "珠海英华国际高中"
  }, {
    title: "深圳市前海国王国际学校暑假开放日，邀您参加",
    image: "https://zhaosheng.ieduchina.com/Upload/File/202508/688c6e629c7df.jpg",
    href: "//www.ieduchina.com/huodong/202508/2868.html",
    time: "2025-08-13 00:00-00:00",
    dw: "哈罗北京8月份校园开放日"
  }
]
onMounted(() => {
  new Swiper('.swiper', {
    loop: true,
    autoplay: false
  });
});
</script>
<template>
  <div :class="$style.activily">
    <div id="activity_hot_hk" :class="$style.wrap">
      <h3>活動推薦</h3>
      <div :class='$style.swiper' class="swiper">
        <div class='swiper-wrapper'>
          <div v-for="item in list" :class='$style.slide' class="swiper-slide">
            <div :class='$style.con'>
              <img :src='item.image' :alt='item.title' />
              <p>{{ item.title }}</p>
            </div>
            <p>开始时间：{{ item.time }}</p>
            <p>主办单位：{{ item.dw }}</p>
            <div :class='$style.btn'>
              <a :href='item.href' target='_blank'>查看详情<i></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped module>
.activily {
  // margin-top: 20px;
  width: 360px;

  .wrap {
    box-sizing: border-box;
    border-radius: 6px;
    padding: 20px 15px;
    background-color: white;

    h3 {
      font-size: 24px;
      font-weight: 500;
      color: #0770D1;
      height: 24px;

      &::before {
        content: "";
        display: inline-block;
        width: 4px;
        height: 20px;
        background: #0770D1;
        margin-right: 10px;
        vertical-align: -4px;
      }
    }

    .swiper {
      width: 330px;
      margin-top: 20px;
      overflow: hidden;

      .slide {
        width: 330px;
        height: 342px;
        cursor: pointer;

        .con {
          width: 330px;
          height: 220px;
          position: relative;

          img {
            width: 330px;
            height: 220px;
            -o-object-fit: cover;
            object-fit: cover;
            -o-object-position: center;
            object-position: center;
          }

          p {
            background-color: rgba(0, 0, 0, 0.5);
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 10;
            height: 35px;
            line-height: 35px;
            font-size: 14px;
            padding: 0 12px;
            font-weight: 400;
            color: white;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          &::before {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 58px;
            height: 52px;
            z-index: 10;
            background: url(https://www.ieduchina.com/statics/xg/images/9a943cd3.png) center / contain no-repeat;
          }
        }

        &>p {
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          padding-top: 12px;
        }

        .btn {
          text-align: center;
          margin-top: 15px;

          a {
            display: inline-block;
            width: 150px;
            height: 34px;
            line-height: 32px;
            border-radius: 4px;
            border: 1px solid #1583E3;
            font-size: 14px;
            font-weight: 400;
            color: #1583E3;

            i {
              display: inline-block;
              width: 17px;
              height: 13px;
              border-top: #1583E3 solid 1px;
              position: relative;
              vertical-align: -7px;
              margin-left: 4px;

              &::before {
                right: 0;
                top: -5.5px;
                z-index: 1;
                content: "";
                position: absolute;
                width: 8px;
                height: 8px;
                border-style: solid;
                border-color: #1583E3;
                border-width: 1px 1px 0 0;
                transform: rotateZ(45deg);
              }
            }
          }
        }
      }
    }
  }
}
</style>
