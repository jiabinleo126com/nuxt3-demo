<script setup>
import image1 from '~/assets/topic/2025/sz/尹浩然.jpg'
import image2 from '~/assets/topic/2025/sz/朱嘉添.jpg'
import image3 from '~/assets/topic/2025/sz/何廸信.jpg'
import image4 from '~/assets/topic/2025/sz/卢裕敏刘少龙.jpg'
import image5 from '~/assets/topic/2025/sz/杨菲菲.jpg'
import image6 from '~/assets/topic/2025/sz/刘宇.jpg'
import image7 from '~/assets/topic/2025/sz/张悦.jpg'
import { onMounted } from 'vue'

onMounted(() => {
  var mySwiper = new Swiper('.case_swiper', {
    effect: 'coverflow',
    centeredSlides: true,
    spaceBetween: -610,
    slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: false,
    coverflowEffect: {
      rotate: 0,
      stretch: -20,
      depth: 400,
      modifier: 1,
      slideShadows: true
    },
    on: {
      slideChangeTransitionStart: addvideo,
      onSlideChangeEnd: addvideo
    }
  });
  var timer = null;
  $(document).on("click", "#player_s", function () {
    window.player1.pause();
    // window.player2.play();
    // return false;
  })
  // addvideo()
  function addvideo() {
    $(".swiper-slide-active").siblings(".swiper-slide").find(".video-wrap").find("#player_s").remove();
    window.player1.pause();
    timer = setInterval(function () {
      var $img = $(".swiper-slide-active").find(".video-wrap").find("img");
      if (!$(".swiper-slide-active").find("#player_s").length) {
        $(".swiper-slide-active").find(".video-wrap").append("<video objectFit=\"cover\" style=\"background-color:#000;\" id=\"player_s\" controls=\"controls\" webkit-playsinline=\"true\" playsinline=\"true\" x5-video-player-type=\"h5\" x5-video-player-fullscreen=\"true\" src=\"".concat($img.attr("value"), "\" poster=\"").concat($img.attr("src"), "\"> <source src=\"").concat($img.attr("value"), "\" type=\"video/mp4\"> <source src=\"").concat($img.attr("value"), "\" type=\"video/ogg\"> <source src=\"").concat($img.attr("value"), "\" type=\"video/webm\"></video>")).find("video").css("opacity", 0);

        // window.player2 = TCPlayer('player_s', {});
        // window.player2.src($("#player_s").attr("value"));
        setTimeout(function () {
          $(".swiper-slide-active").find("video").css("opacity", 1);
          // $("#player_s").css("object-position", "center -538px")
        }, 300);
        addvideo();
      }
      else {
        $(".swiper-slide-active").siblings(".swiper-slide").find(".video-wrap").find("#player_s").remove();
        clearInterval(timer);
      }
    }, 500);
  }
  mySwiper.el.onclick = function () {
  };
})
const data = [
  {
    video: "https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/922954843560136621077538556/CMhT7MRLaJkA.mp4",
    image: image1
  },
  {
    video: "https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/2be42dfa3560136621079502292/yvaPSR66dlMA.mp4",
    image: image2
  },
  {
    video: "https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/9e7be9013560136621084838471/p8wOW0T0980A.mp4",
    image: image3
  },
  {
    video: "https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/dca65cf83560136621078411472/0551UKbfMDQA.mp4",
    image: image4
  },
  {
    video: "https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/9b8c22f53560136621077941003/uukBDHsaetgA.mp4",
    image: image5
  },
  {
    video: "https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/e62272413560136621078837271/NymQhrgryrIA.mp4",
    image: image6
  },
  {
    video: "https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/ba4ef6cd3560136621081998668/9aRJe8N1ocsA.mp4",
    image: image7
  }
]
</script>
<template>
  <div class="videos">
    <div class="con">
      <div class="case-wrap">
        <div class="case_swiper swiper-container">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in data" class="swiper-slide">
              <div class="video-wrap">
                <img width="754" height="424" :src="item.image" alt="" :value="item.video">
              </div>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.videos {
  width: 100%;
  height: 720px;
  min-width: 1200px;
  background: #101E5D center/1920px 720px no-repeat;
  padding: 70px 0
}

.videos .con {
  width: 1200px;
  margin: 70px auto 0;
  overflow: hidden
}

.videos .con .case-wrap {
  position: relative
}

.videos .con .case-wrap .swiper-container-horizontal>.swiper-pagination-bullets,
.videos .con .case-wrap .swiper-pagination-custom,
.videos .con .case-wrap .swiper-pagination-fraction {
  bottom: 0px
}

.videos .con .case-wrap .swiper-slide.swiper-slide-active .list p {
  opacity: 1
}

.videos .con .case-wrap .swiper-slide .swiper-slide-shadow-left {
  bottom: 40px;
  height: auto
}

.videos .con .case-wrap .swiper-slide .swiper-slide-shadow-right {
  bottom: 40px;
  height: auto
}

.videos .con .case-wrap .swiper-slide {
  width: 754px;
  height: 424px;
}

.videos .con .case-wrap .swiper-slide .video-wrap {
  position: relative;
  width: 754px;
  height: 424px;
  padding-bottom: 40px
}

.videos .con .case-wrap .swiper-slide .video-wrap img {
  object-fit: cover;
}

.videos .con .case-wrap .swiper-slide .video-wrap #player_s {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 754px;
  height: 424px;
  border-radius: 10px;
  background-color: transparent;
  object-fit: cover;
}

.videos .con .case-wrap .swiper-slide .list p {
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  padding-top: 17px;
  opacity: 0
}

.videos .con .case-wrap .swiper-slide.swiper-slide-active .mask {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 100;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0)
}

.videos .con .case-wrap .swiper-button-prev {
  background-image: url(https://www.ieduchina.com/topic/2024/shenzhen/images/e5b61a34.png);
  width: 70px;
  height: 70px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: -52px
}

.videos .con .case-wrap .swiper-button-next {
  background-image: url(https://www.ieduchina.com/topic/2024/shenzhen/images/bec9856b.png);
  width: 70px;
  height: 70px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: -52px
}
</style>