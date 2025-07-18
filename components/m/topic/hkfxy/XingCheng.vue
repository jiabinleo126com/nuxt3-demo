<script setup>
import { onMounted } from 'vue'

defineProps({
  data: {
    type: Array,
  },
  arrimg: {
    type: String,
  },
})

onMounted(() => {
  $(".title").on("click", "button", function () {
    var flag = $(this).hasClass("s");
    if (flag) {
      $(this).removeClass("s").find("span .o").show();
      $(this).removeClass("s").find("span .c").hide();
      $(this).closest("li").find(".list").animate({ "height": 0 }, 800);
    }
    else {
      $(this).addClass("s").find("span .c").show();
      $(this).addClass("s").find("span .o").hide();
      $(this).closest("li").find(".list").animate({ "height": $(this).closest("li").find(".wrap").height() }, 800);
    }
  });
})
</script>
<template>
  <section class="gray">

    <div v-for="(items, indexs) in data" :key="indexs" class="xc">
      <h3 class="title" en="Daily itinerary">
        每日行程
      </h3>
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
              <span>
                <i class="o">展开</i>
                <i class="c">关闭</i>
              </span>
              <i class="arr"></i>
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
                    <img v-for="(img, index2) in it.images" :key="index2" :src="img.image" :alt="it.title"
                      :preview="img.preview">
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
<style lang="less">
@rem: 750/16rem;

.xc {
  font-size: 0;
  padding-bottom: 1.28rem;
}

.xc ul {
  margin-top: 1.06666667rem;
}

.xc ul li {
  border-radius: 0.21333333rem;
  margin-bottom: 0.64rem;
  background-color: white;
}

.xc ul li:last-of-type {
  margin-bottom: 0;
}

.xc ul li .title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 2.13333333rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.xc ul li .title>img {
  width: 2.02666667rem;
  height: 1.00266667rem;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
}

.xc ul li .title p {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 0.10666667rem;
  font-size: 0.64rem;
  font-weight: bold;
  color: #333333;
}

.xc ul li .title button {
  width: 2.21866667rem;
  height: 0.85333333rem;
  border-radius: 0.42666667rem;
  background: transparent;
  border: none;
  font-size: 0.46933333rem;
  font-weight: 400;
  color: var(--primary);
  background-color: rgba(39, 55, 112, 0.05);
  cursor: pointer;
  margin-right: 0.42666667rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  white-space: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  &.s {
    .arr {
      transform: rotateZ(180deg);
      transition: all 1s;
    }
  }
}

.xc ul li .title button span i {
  font-style: normal;
  font-style: initial;
}

.xc ul li .title button span i.c {
  display: none;
}

.xc ul li .title button .arr {
  display: inline-block;
  position: relative;
  width: (9/@rem);
  height: (8/@rem);
  margin-left: (5/@rem);
  margin-bottom: (2/@rem);
  transform: rotateZ(0);
  transition: all 1s;
  transform-origin: (3/@rem) (7/@rem);

  &::after {
    position: absolute;
    top: (8/@rem);
    left: 0;
    content: "";
    width: (6/@rem);
    height: (6/@rem);
    background-color: transparent;
    border-color: var(--primary);
    border-style: solid;
    border-width: (1/@rem) (1/@rem) 0 0;
    transform: rotate(135deg);
    margin-top: (-9/@rem);
  }

  &::before {
    position: absolute;
    top: (6/@rem);
    left: 0;
    content: "";
    width: (6/@rem);
    height: (6/@rem);
    background-color: transparent;
    border-color: var(--primary);
    border-style: solid;
    border-width: (1/@rem) (1/@rem) 0 0;
    transform: rotate(135deg);
    margin-top: (-2/@rem);
  }
}

.xc ul li .title button.s img {
  -webkit-transform: rotateZ(0deg);
  transform: rotateZ(0deg);
  -webkit-transition: all 800ms;
  transition: all 800ms;
}

.xc ul li .list {
  font-size: 0;
  height: 0;
  overflow: hidden;
}

.xc ul li .list .wrap .con {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.xc ul li .list .wrap .con:last-of-type .time::after {
  content: normal;
  content: initial;
}

.xc ul li .list .wrap .con .time {
  font-size: 0.55466667rem;
  font-weight: 400;
  color: #333333;
  width: 3.84rem;
  text-align: center;
  position: relative;
}

.xc ul li .list .wrap .con .time::after {
  position: absolute;
  content: "";
  left: 50%;
  top: 0.768rem;
  width: 1px;
  bottom: 0.21333333rem;
  border-left: 1px #B8B8B8 dashed;
}

.xc ul li .list .wrap .con .desc {
  margin-left: 0.10666667rem;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-bottom: 0.42666667rem;
}

.xc ul li .list .wrap .con .desc p {
  font-size: 0.512rem;
  font-weight: 400;
  color: #999999;
  margin-top: 0.42666667rem;
  line-height: 0.59733333rem;
  padding-right: 0.512rem;
  text-align: justify;
}

.xc ul li .list .wrap .con .desc p.bold {
  font-size: 0.55466667rem;
  font-weight: bold;
  color: #333333;
}

.xc ul li .list .wrap .con .desc p.bold a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 0rem;
  letter-spacing: -0.02133333rem;
}

.xc ul li .list .wrap .con .desc p.bold a span {
  font-size: 0.512rem;
  font-weight: 400;
  color: var(--primary);
}

.xc ul li .list .wrap .con .desc p.bold a span img {
  width: 0.46933333rem;
  height: 0.36266667rem;
  -o-object-fit: contain;
  object-fit: contain;
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
  vertical-align: 0.02133333rem;
  -webkit-transform-origin: center center;
  transform-origin: center center;
}

.xc ul li .list .wrap .con .desc p.bold:first-of-type {
  margin-top: 0;
}

.xc ul li .list .wrap .con .desc p.bold a {
  color: #333;
}

.xc ul li .list .wrap .con .desc p.bold a:hover {
  color: var(--primary);
}

.xc ul li .list .wrap .con .desc p.index {
  padding-left: 2.54rem;
  text-indent: -2.54rem;
}

.xc ul li .list .wrap .con .desc p.index2 {
  padding-left: 2.94rem;
  text-indent: -2.94rem;
}

.xc ul li .list .wrap .con .desc p i {
  font-style: normal;
  font-style: initial;
}

.xc ul li .list .wrap .con .desc .image {
  padding-right: 0.512rem;
}

.xc ul li .list .wrap .con .desc .image img {
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  margin-top: 0.42666667rem;
}

.xc ul li .list .wrap .con .desc .image>a {
  text-align: center;
  display: inline-block;
  width: 0.85333333rem;
  height: 2.304rem;
  background: #EBF3F2;
  border-radius: 0;
  margin-right: 0.512rem;
  font-size: 0.46933333rem;
  font-weight: 400;
  color: var(--primary);
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: 0.55466667rem;
}

.xc ul li .list .wrap .con .desc .image>a img {
  width: 0.42666667rem;
  height: 0.34133333rem;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: contain;
  object-fit: contain;
  margin-top: -0.64rem;
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
  margin-left: 0.08533333rem;
}
</style>