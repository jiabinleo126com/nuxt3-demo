<script setup>
import { onMounted } from 'vue'

defineProps({
  cityexpressdata: {
    type: Array,
    default: () => [],
  },
})

onMounted(() => {
  $('#cityExpress > li').hover(function () {
    $(this).addClass('active').siblings().removeClass('active')
    $('.city-express-wrap').find('.contents').eq($(this).index()).css('display', 'flex').siblings('.contents').css('display', 'none')
  })
})
</script>

<template>
  <div class="city-express">
    <div class="con city-express-wrap">
      <div class="title">
        <h3>城市快报</h3>
        <ul id="cityExpress">
          <li v-for="(item, index) in cityexpressdata" :key="index" :class="{ active: index === 0 }">
            <NuxtLink :to="item.path" target="_blank">
              <span>{{ item.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div v-for="(item, index) in cityexpressdata" :key="index" class="contents">
        <div class="left">
          <NuxtLink :to="item.image1.path">
            <div class="img" :style="`background-image: url(${item.image1.image});`">
              <p>{{ item.image1.title }}</p>
            </div>
          </NuxtLink>
        </div>
        <div class="center">
          <NuxtLink :to="item.image2.path">
            <div class="img" :style="`background-image: url(${item.image2.image});`">
              <p>{{ item.image2.title }}</p>
            </div>
          </NuxtLink>
          <NuxtLink :to="item.image3.path">
            <div class="img" :style="`background-image: url(${item.image3.image});`">
              <p>{{ item.image3.title }}</p>
            </div>
          </NuxtLink>
        </div>
        <div class="right">
          <ul>
            <li v-for="(it, ind) in item.list" :key="ind">
              <NuxtLink :to="it.path">
                <p>{{ it.title }}</p>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.city-express {
  background-color: #f2f4f6;
  padding: 65px 0 44px 0;

  .con {
    width: 1280px;
    margin: 0 auto;
    height: 460px;
    background-color: #ffffff;

    .title {
      height: 70px;
      border-bottom: solid 1px #e1e1e1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;

      h3 {
        line-height: 70px;
        position: relative;
        margin-left: 28px;
        padding-left: 32px;
        font-size: 24px;
        font-weight: bold;
        color: #000000;

        &::before {
          position: absolute;
          content: '';
          left: 0;
          top: 22px;
          width: 22px;
          height: 27px;
          background-image: url(https://www.ieduchina.com/statics/pcc/img/homelocal.png?v=1);
          background-size: 22px 27px;
        }
      }

      ul {
        height: 70px;
        width: 494px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-right: 40px;

        li {
          line-height: 70px;

          span {
            font-size: 18px;
            font-weight: 400;
            color: #000000;
          }

          &.active {
            position: relative;

            &::after {
              position: absolute;
              content: '';
              width: 24px;
              height: 4px;
              bottom: 16px;
              left: 6px;
              background-color: #1583e3;
              border-radius: 2px;
            }
          }
        }
      }
    }

    .contents {
      display: none;
      justify-content: space-between;
      padding-top: 18px;

      &:nth-of-type(2) {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .left {
        margin-left: 18px;

        .img {
          position: relative;
          width: 511px;
          height: 343px;
          background-position: center center;
          background-size: cover;

          p {
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.5);
            line-height: 20px;
            padding: 10px 11px;
            font-size: 16px;
            font-weight: 400;
            color: #ffffff;
          }
        }
      }

      .center {
        a {
          .img {
            position: relative;
            width: 240px;
            height: 164px;
            background-position: center center;
            background-size: cover;
            margin-top: 15px;

            p {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 218px;
              background-color: rgba(0, 0, 0, 0.5);
              line-height: 20px;
              padding: 10px 11px;
              font-size: 16px;
              font-weight: 400;
              color: #ffffff;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              box-sizing: content-box;
            }
          }

          &:first-of-type {
            .img {
              margin-top: 0;
            }
          }
        }
      }

      .right {
        width: 460px;
        margin-left: 20px;

        ul {
          margin-left: 46px;

          li {
            position: relative;

            a {
              p {
                width: 387px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 16px;
                color: #000000;
                line-height: 31px;
              }
            }

            &::before {
              position: absolute;
              content: '';
              left: -22px;
              top: 12px;
              width: 9px;
              height: 9px;
              background-color: rgba(13, 114, 202, 0.3);
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
