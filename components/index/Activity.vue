<script setup lang="ts">
import { defineProps, onMounted } from 'vue'

defineProps<{
  activity: ActivityItem[]
  bannerlist: BannerListItem[]
}>()

declare const $: any
declare const Swiper: any

interface ActivityItem {
  path: string
  image: string
}
interface BannerListItem {
  href: string
  date: string
  title: string
  grade: string
  month: number
  year: number
  state: number
}

onMounted(() => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true, // 循环模式选项
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
  })
  if ($('.swiper-banner-list').find('.swiper-slide').length > 3) {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-banner-list', {
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      slidesPerView: 4,
      spaceBetween: 0,
    })
  }
  else {
    $('.swiper-banner-list').addClass('noswiper')
  }
})
</script>

<template>
  <div class="activity">
    <div class="con">
      <div v-if="bannerlist" class="banner-img">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in activity" :key="index" class="swiper-slide">
              <a :href="item.path">
                <img :src="item.image">
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div v-if="bannerlist" class="banner-list">
        <div class="banner-title">
          <h2>夏/冬令营</h2>
          <a href="//www.ieduchina.com/camps/index.html" target="_blank">更多>></a>
        </div>
        <div class="swiper-banner-list">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in bannerlist" :key="index" class="swiper-slide">
              <a :href="item.href" target="_blank">
                <div class="icon">
                  <img :src="`//www.ieduchina.com/statics/pcc/img/t${item.state}.png`">
                </div>
                <div class="time">
                  <div class="box">
                    <h3>{{ item.date }}</h3>
                    <p>{{ item.year }}.{{ item.month }}</p>
                  </div>
                </div>
                <div class="text">
                  <p>{{ item.title }}</p>
                  <p>适用年级:{{ item.grade }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.activity {
  background-color: #f2f4f6;

  .con {
    width: 1280px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;

    .banner-img {
      width: 900px;
      height: 420px;
      border: 4px;
      overflow: hidden;

      .swiper-container {
        width: 900px;
        height: 420px;

        .swiper-wrapper {
          width: 100%;

          .swiper-slide {
            width: 100%;
            height: 420px;

            a {
              img {
                width: 100%;
                height: 420px;
                object-fit: cover;
              }
            }
          }
        }

        .swiper-pagination-bullets {
          bottom: 10px;
          right: 10px;
          left: initial;
          text-align: right;

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #eeeeee;
            opacity: 0.6;
            margin: 0 5px;

            &.swiper-pagination-bullet-active {
              background: #66c1ff;
              opacity: 1;
            }
          }
        }
      }
    }

    .banner-list {
      width: 340px;
      height: 420px;
      background-color: #ffffff;
      border-radius: 8px;
      padding: 0 15px;
      box-sizing: content-box;

      .banner-title {
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;

        h2 {
          font-size: 20px;
          font-weight: bold;
          color: #000000;
        }

        a {
          font-size: 14px;
          font-weight: bold;
          color: #0d72ca;
        }
      }

      .swiper-banner-list {
        width: 340px;
        height: 360px;
        overflow: hidden;

        .swiper-wrapper {
          width: 100%;

          .swiper-slide {
            a {
              height: 90px;
              width: 100%;
              display: flex;

              .icon {
                position: relative;
                text-align: center;
                padding-left: 7px;
                height: 90px;
                width: 24px;
                line-height: 90px;
                box-sizing: content-box;

                &::before {
                  position: absolute;
                  content: '';
                  left: 17px;
                  top: 0;
                  z-index: 10;
                  width: 2px;
                  height: 100%;
                  background-color: #2764ff;
                }

                img {
                  position: absolute;
                  width: 22px;
                  height: 22px;
                  left: 6px;
                  top: 34px;
                  z-index: 10;
                }
              }

              .time {
                height: 90px;
                margin: 0 16px 0 13px;

                .box {
                  margin-top: 15px;
                  width: 60px;
                  height: 60px;
                  border-radius: 10px;
                  text-align: center;
                  background: linear-gradient(176deg, #2e7bfa, #1c4af6);

                  h3 {
                    font-size: 30px;
                    font-weight: bold;
                    color: #ffffff;
                    line-height: 41px;
                  }

                  p {
                    font-size: 12px;
                    font-weight: bold;
                    color: #ffffff;
                  }
                }
              }

              .text {
                padding: 12px 0;

                p {
                  width: 206px;

                  &:first-of-type {
                    height: 40px;
                    font-size: 16px;
                    color: #303030;
                    line-height: 20px;
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 100px;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                  }

                  &:last-of-type {
                    font-size: 12px;
                    color: #666666;
                    line-height: 30px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                  }
                }
              }
            }

            &.first {
              .time {
                .box {
                  background: linear-gradient(176deg, #fd8809, #fb5105)
                }
              }
            }

            &.two {
              .time {
                .box {
                  background: linear-gradient(176deg, #ffca0c, #ffa507)
                }
              }
            }
          }
        }

        &.noswiper {
          .swiper-wrapper {
            display: block;

            .swiper-slide {
              height: auto
            }
          }
        }
      }
    }
  }
}
</style>
