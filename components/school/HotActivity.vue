<script setup>
import { onMounted } from 'vue'
defineProps({
  data: {
    type: Array,
    default: []
  }
})

onMounted(() => {
  new Swiper('#hot-activity', {
    autoplay: true,
    loop: true
  });
})

</script>
<template>
  <div :class="$style.activity1" id="hot-activity">
    <div class="swiper-wrapper">
      <div :class="[$style.slide, 'swiper-slide']" v-for="item in data">
        <div :class="$style.image">
          <img :src="item.image" :alt="item.title">
          <div :class="$style.title">
            <div :class="$style.text">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
        <div :class="$style.text">
          <p>开始时间：{{ item.time }}</p>
          <p>主办单位：{{ item.address }}</p>
          <a href="{{ item.path }}">
            <button>查看详情 →</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped module>
.activity1 {
  border-radius: 8px;
  overflow: hidden;

  .slide {
    width: 100%;
    height: 343px;
    background: #FFFFFF;
    -webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.01);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.01);

    .image {
      position: relative;
      font-size: 0;

      img {
        width: 360px;
        height: 240px;
        object-fit: cover;
      }

      .title {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 10;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        color: #FFFFFF;
        display: table;
        width: 100%;

        .text {
          display: table-cell;
          vertical-align: middle;
          padding: 0 12px;

          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }

    &>.text {
      padding: 4px 17px;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 102px;

      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: #272727;
        text-align: left;
      }
    }

    button {
      width: 140px;
      height: 24px;
      border: 1px solid #FF9100;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #FF9100;
      margin-top: 15px;
      background-color: transparent;
      cursor: pointer;
    }
  }
}
</style>