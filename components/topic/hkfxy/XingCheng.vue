<script setup>
import { defineAsyncComponent, onMounted } from 'vue'

defineProps({
  data: {
    type: Array,
  },
  arrimg: {
    type: String,
  },
})

const Title = defineAsyncComponent(() => import('./Title.vue'))

onMounted(() => {
  $('.title').on('click', 'button', function () {
    const flag = $(this).hasClass('s')
    if (flag) {
      $(this).removeClass('s').find('span').text($(this).find('a.c').text())
      $(this).closest('li').find('.list').animate({ height: 0 }, 800)
    }
    else {
      $(this).addClass('s').find('span').text($(this).find('a.g').text())
      $(this).closest('li').find('.list').animate({ height: $(this).closest('li').find('.wrap').height() }, 800)
    }
  })
})
</script>

<template>
  <section class="xc-wrap">
    <div v-for="(items, indexs) in data" :key="indexs" class="xc">
      <component :is="Title" en="Daily itinerary" :cn="items.title" />
      <ul>
        <li v-for="(item, index) in items.list" :key="index">
          <div class="title">
            <div class="date-card">
              <div class="card">
                <p>Day</p>
                <p>0{{ index + 1 }}</p>
              </div>
            </div>
            <p>{{ item.title }}</p>
            <button>
              <span>查看行程</span>
              <a class="c">查看行程</a>
              <a class="g">关闭行程</a>
              <img :src="arrimg" alt="">
            </button>
          </div>
          <div class="list">
            <div class="wrap">
              <div v-for="(it, _index) in item.list" :key="_index" class="con">
                <div class="time">
                  {{ it.time }}
                </div>
                <div class="desc">
                  <p class="bold">
                    <template v-if="it.path">
                      <a :href="`${it.path}?tgform=香港教育文化之旅`" target="_blank">{{ it.title }}</a>
                    </template>
                    <template v-else>
                      {{ it.title }}
                    </template>
                  </p>
                  <p v-for="(str, i) in it.desc" :key="i">
                    {{ str }}
                  </p>
                  <div class="image">
                    <img v-for="(img, index2) in it.images" :key="index2" :src="img.image" :alt="it.title" :preview="img.preview">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="less" scoped>
.xc-wrap {
  background-color: #f2f4f6;

  .xc {
    width: 1280px;
    margin: 0 auto;
    padding: 80px 0 57px;

    &:nth-of-type(2) {
      padding-top: 0;
    }

    ul {
      margin-top: 50px;

      li {
        border-radius: 10px;
        margin-bottom: 30px;
        background-color: #fff;

        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100px;

          &>img {
            width: 125px;
            height: 42px;
            object-fit: contain;
            object-position: center;
          }

          .date-card {
            width: 125px;
            height: 42px;

            .card {
              width: 53px;
              height: 42px;
              background-color: #fff;
              margin: 0 auto;
              border: solid 5px var(--primary);

              p {
                text-align: center;
                margin-left: 0 !important;

                &:first-of-type {
                  color: #fff;
                  font-size: 12px;
                  font-weight: bold;
                  line-height: 19px;
                  margin-top: -5px;
                  letter-spacing: 1px;
                  background-color: var(--primary);
                }

                &:nth-of-type(2) {
                  font-weight: bold;
                  font-size: 15px;
                  padding-top: 2px;
                  letter-spacing: 1px;
                  color: var(--primary)
                }
              }
            }
          }

          p {
            flex: 1;
            margin-left: 5px;
            color: #333;
          }

          button {
            width: 105px;
            height: 32px;
            background: rgba(0, 0, 0, 0);
            border-radius: 17px;
            font-size: 16px;
            font-weight: 400;
            cursor: pointer;
            margin-right: 64px;
            border: 1px solid var(--primary);
            color: var(--primary);

            &.s {
              img {
                -webkit-transform: rotateZ(0);
                transform: rotateZ(0);
                -webkit-transition: all 1s;
                transition: all 1s;
              }
            }

            img {
              width: 9px;
              height: 8px;
              -o-object-fit: contain;
              object-fit: contain;
              -o-object-position: center;
              object-position: center;
              margin-left: 5px;
              margin-bottom: 2px;
              -webkit-transform: rotateZ(180deg);
              transform: rotateZ(180deg);
              -webkit-transition: all 1s;
              transition: all 1s;
            }

            a {
              display: none;
            }
          }
        }

        .list {
          height: 0;
          overflow: hidden;

          .wrap {
            .con {
              display: flex;
              justify-content: space-between;

              &:last-of-type {
                .time {
                  &::after {
                    content: initial;
                  }
                }
              }

              .time {
                font-size: 16px;
                font-weight: 400;
                color: #333;
                width: 125px;
                text-align: center;
                position: relative;

                &::after {
                  position: absolute;
                  content: "";
                  left: 50%;
                  top: 26px;
                  width: 1px;
                  bottom: 10px;
                  border-left: 1px #b8b8b8 dashed;
                }
              }

              .desc {
                margin-left: 5px;
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                margin-bottom: 20px;

                p {
                  font-size: 14px;
                  font-weight: 400;
                  color: #999;
                  margin-top: 15px;
                  padding-right: 60px;
                  line-height: 16px;

                  &.bold {
                    font-size: 18px;
                    font-weight: bold;
                    color: #333;
                    margin-top: 15px;

                    &:first-of-type {
                      margin-top: 0;
                    }

                    a {
                      color: #333;

                      &:hover {
                        color: var(--primary);
                      }
                    }
                  }

                  i {
                    font-style: initial;
                  }
                }

                .image {
                  margin-top: 15px;
                  width: 1080px;
                  font-size: 0;
                  display: flex;

                  &.contain {
                    img {
                      width: 255px;
                      height: 300px;
                      object-fit: contain;
                      object-position: center;
                      margin-right: 20px;

                      &:last-of-type {
                        margin-right: 0;
                      }
                    }
                  }

                  .video {
                    position: relative;
                    margin-right: 20px;
                    cursor: pointer;

                    img {
                      -webkit-filter: brightness(0.5);
                      filter: brightness(0.5);
                      -o-object-position: center -24px;
                      object-position: center -24px;
                    }

                    &::after {
                      position: absolute;
                      pointer-events: none;
                      content: "";
                      width: 43px;
                      height: 43px;
                      left: 50%;
                      top: 50%;
                      z-index: 10;
                      -webkit-transform: translate(-50%, -50%);
                      transform: translate(-50%, -50%);
                      background: url(https://www.ieduchina.com/topic/2024/hk7/images/815ba699.png) center / contain no-repeat;
                    }
                  }

                  img {
                    width: 255px;
                    height: 130px;
                    -o-object-fit: cover;
                    object-fit: cover;
                    -o-object-position: left center;
                    object-position: left center;
                    margin-right: 20px;

                    &:last-of-type {
                      margin-right: 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
