<script setup>
import { onMounted } from 'vue'
import banner1 from '~/assets/topic/2025/shengxue/banner1.png'
import banner2 from '~/assets/topic/2025/shengxue/banner2.png'
import banner3 from '~/assets/topic/2025/shengxue/banner3.png'
import banner4 from '~/assets/topic/2025/shengxue/banner4.png'
import banner5 from '~/assets/topic/2025/shengxue/banner5.png'
import banner6 from '~/assets/topic/2025/shengxue/banner6.png'

const images = {
  banner1, banner2, banner3, banner4, banner5, banner6
}
defineProps({
  data: {
    type: Array,
    default: () => ([])
  }
})
onMounted(() => {
  $(() => {
    let swiper1 = null;
    if ($(".banner_swiper").length && $(".banner_swiper .swiper-slide").length > 1) {
      const swiper1 = new Swiper('.banner_swiper', {
        loop: true,
        autoplay: {
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.banner_swiper_pagination',
          clickable: true,
        },
      });
    }
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          swiper1?.autoplay.start();
        } else {
          swiper1?.autoplay.stop();
        }
      });
    }, {
      threshold: 0.2
    });
    observer1.observe(document.querySelector('.banner_swiper'));
    $(".banner_swiper").hover(function () {
      swiper1?.autoplay.stop();
    }, function () {
      swiper1?.autoplay.start();
    })
  })
})
</script>
<template>
  <div :class="$style.banner" class="banner_swiper">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in data" class="swiper-slide" :class="$style.slide">
        <img :src="images[item.image]" :alt="item.title">
      </div>
    </div>
    <div :class="$style.pagination" class="banner_swiper_pagination"></div>
  </div>
</template>
<style lang="less" scoped module>
.banner {
  min-width: 1200px;
  width: 100%;
  object-fit: cover;
  object-position: center;

  .slide {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
<style lang="less" scoped>
.banner_swiper {
  width: 100%;
  overflow: hidden;
  position: relative;

  .banner_swiper_pagination {
    bottom: 30px;
    position: absolute;
    z-index: 10;
    text-align: center;
  }
}
</style>
<style lang="less">
.swiper-pagination-bullet {
  width: 9px;
  height: 9px;
  border-radius: 0;
  background-color: white;
  opacity: 1;

  &.swiper-pagination-bullet-active {
    background-color: #F6B756;
    width: 32px;
    border-radius: 0;
  }
}
</style>