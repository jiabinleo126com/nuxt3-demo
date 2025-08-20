<script setup>
import { nextTick, onMounted } from 'vue';

defineProps({
  internationalschooldata: {
    type: Array,
    default: []
  }
})
onMounted(() => {
  nextTick(() => {
    $('#school-title > li').hover(function () {
      console.log($(this).index())
      console.log($('#school-title li').length - 1)
      if ($(this).index() !== $('#school-title li').length - 1) {
        $(this).addClass('active').siblings().removeClass('active')
      }
      $('.school-con').find('.school-list').eq($(this).index()).css('display', 'flex').siblings('.school-list').css('display', 'none')
    }, () => { })
  })
})
</script>
<template>
  <div class="school">
    <div class="school-con">
      <h2>热门国际学校</h2>
      <ul id="school-title" class="school-title">
        <li v-for="(item, index) in internationalschooldata" :class="{ active: !index }">
          <a :href="item.path">{{ item.title }}</a>
        </li>
      </ul>
      <template v-for="(item, key) in internationalschooldata" :key>
        <ul v-if="item.list?.length" class="school-list">
          <li v-for="(it, b) in item.list" :key="b">
            <a :href="it.path">
              <div class="box">
                <img :src="it.image" alt="">
                <div class="center">
                  <h3>{{ it.title }}</h3>
                  <p>
                    <template v-for="(it2, c) in it.label" :key="c">
                      <span v-if="it2 == '小学'" class="x">{{ it2 }}</span>
                      <span v-if="it2 == '初中'" class="c">{{ it2 }}</span>
                      <span v-if="it2 == '高中'" class="g">{{ it2 }}</span>
                    </template>
                  </p>
                </div>
                <div class="bottom">
                  <img :src="it.logo" alt="">
                </div>
              </div>
            </a>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.school {
  background-color: #f2f4f6;
  padding-top: 84px;
  padding-bottom: 50px;

  .school-con {
    width: 1280px;
    margin: 0 auto;

    h2 {
      font-size: 24px;
      font-weight: bold;
      color: #000000;
      text-align: center;
    }

    .school-title {
      display: flex;
      justify-content: space-between;
      width: 628px;
      margin: 16px auto 0;

      li {
        width: 70px;
        height: 32px;
        border-radius: 16px;
        text-align: center;
        line-height: 32px;
        font-size: 16px;
        font-weight: bold;
        color: #666666;
        cursor: pointer;

        a {
          font-size: 16px;
          font-weight: bold;
          color: #666666;
        }

        &.active {
          background: #1583e3;

          a {
            color: #ffffff;
          }
        }
      }
    }

    .school-list {
      display: none;
      margin-top: 43px;
      justify-content: space-between;

      &:nth-of-type(2) {
        display: flex;
      }

      li {
        width: 300px;
        height: 370px;
        background-color: #ffffff;
        border-radius: 8px;

        .box {
          width: 300px;
          height: 370px;

          &>img {
            border-radius: 4px;
            overflow: hidden;
            width: 300px;
            height: 200px;
            object-fit: cover;
            object-position: center;
          }

          .center {
            padding: 0 15px;
            height: 103px;
            border-bottom: rgba(48, 48, 48, 0.2) solid 1px;
            box-sizing: content-box;

            h3 {
              font-size: 18px;
              font-weight: bold;
              color: #303030;
              line-height: 40px;
              text-align: left;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            p {
              padding-top: 5px;
              font-size: 0px;
              text-align: left;

              span {
                font-size: 16px;
                font-weight: 400;
                color: #ffffff;
                padding: 1px 10px 2px;
                border-radius: 8px;
                margin-right: 10px;

                &.c {
                  background-color: #6c75e6;
                }

                &.x {
                  background-color: #d72654;
                }

                &.y {
                  background-color: #66c428;
                }

                &.g {
                  background-color: #035297;
                }
              }
            }
          }

          .bottom {
            width: 100%;
            height: 65px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            img {
              width: 200px;
              height: 65px;
              object-fit: contain;
              background-size: contain;
            }

            &::after {
              content: "";
              width: 30px;
              height: 23px;
              background: url("https://www.ieduchina.com/statics/pcc/img/msg.png") center/contain no-repeat;
            }
          }
        }
      }
    }
  }
}
</style>
