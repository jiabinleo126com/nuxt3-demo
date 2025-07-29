<script setup>
defineProps({
  hours24Data: {
    type: Array,
    default: () => []
  },
  focustodayImgData: {
    type: Array,
    default: () => []
  }
})
</script>
<template>
  <div class="focustoday">
    <div class="con">
      <div class="focustoday-title">
        <div class="left">
          <h2>今日聚焦</h2>
          <div class="hours24">
            <div class="hours24-title">
              24小时热闻
            </div>
            <div class="swiper-hours24">
              <div class="swiper-wrapper">
                <div v-for="(item, index) in hours24Data" :key="index" class="swiper-slide">
                  <a :href="item.path">
                    <p>
                      <span>{{ index + 1 }}.</span>
                      {{ item.title }}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <h2>最新活动</h2>
          <div class="link">
            <a href="//www.ieduchina.com/huodong/">
              查看更多<span>>></span>
            </a>
          </div>
        </div>
      </div>
      <div class="focustoday-con">
        <ul v-if="focustodayImgData" class="focustoday-img">
          <li v-for="item in focustodayImgData" :key="item.id">
            <div class="box">
              <a href="//www.ieduchina.com/shenzhen/education/202506/129044.html">
                <div class="img" :style="`background-image: url(${item.cover});`">
                </div>
                <p>{{ item.title }}</p>
              </a>
              <div class="author">
                <a :href="`/home/${item.userid}`" target="_blank">
                  <i :style="`background-image: url(${item.userimg})`"></i>
                  {{ item.user }}
                </a>
                <span>{{ item.time }}</span>
              </div>
            </div>
          </li>
        </ul>
        <ul class="focustoday-list">
          <li>
            <a href="//www.ieduchina.com/huodong/202506/2780.html">2025荟同时装秀，邀您参加</a>
            <p>开始时间：2025-06-06 18:30</p>
          </li>
          <li>
            <a href="//www.ieduchina.com/huodong/202505/2749.html">珠海英华6月7日招生说明会，邀您参加</a>
            <p>开始时间：2025-06-07 09:30</p>
          </li>
          <li>
            <a href="//www.ieduchina.com/huodong/202505/2753.html">蓝湾未来领导力学校小学部6月7日校园开放日</a>
            <p>开始时间：2025-06-07 09:30</p>
          </li>
          <li>
            <a href="//www.ieduchina.com/huodong/202505/2768.html">碧桂园十里银滩学校6月7日校园开放日</a>
            <p>开始时间：2025-06-07 09:30</p>
          </li>
          <li>
            <a href="//www.ieduchina.com/huodong/202505/2773.html">佛山暨大港澳子弟学校6月7日校园开放日</a>
            <p>开始时间：2025-06-07 08:30</p>
          </li>
          <li>
            <a href="//www.ieduchina.com/huodong/202505/2777.html">南宁哈罗礼德学校6月7日欢乐汇，邀您参加</a>
            <p>开始时间：2025-06-07 09:00</p>
          </li>
          <li>
            <a href="//www.ieduchina.com/huodong/202505/2756.html">广州市斐特思学校6月7日校园开放日</a>
            <p>开始时间：2025-06-07 09:30</p>
          </li>
          <li>
            <a href="//www.ieduchina.com/huodong/202506/2781.html">上海美达菲学校6月8日校园开放日</a>
            <p>开始时间：2025-06-08 13:00</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less">
body .focustoday {
  background-color: #f2f4f6;
  padding-top: 38px;
}

body .focustoday .con {
  width: 1280px;
  margin: 0 auto
}

body .focustoday .con .focustoday-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 25px;
  line-height: 25px;
  overflow: hidden;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body .focustoday .con .focustoday-title .left {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

body .focustoday .con .focustoday-title .left h2 {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  line-height: 25px;
}

body .focustoday .con .focustoday-title .left .hours24 {
  margin-left: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 25px;
  /* background: #ffffff; */
  border-radius: 10px;
}

body .focustoday .con .focustoday-title .left .hours24 .hours24-title {
  position: relative;
  z-index: 10;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  width: 98px;
  height: 24px;
  background: #0d72ca;
  border-radius: 10px;
}

body .focustoday .con .focustoday-title .left .hours24 .swiper-hours24 {
  width: 626px;
  padding-left: 7px;
  overflow: hidden;
  margin-left: -10px;
  padding-left: 20px;
  border-radius: 20px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

body .focustoday .con .focustoday-title .left .hours24 .swiper-hours24 a {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

body .focustoday .con .focustoday-title .left .hours24 .swiper-hours24 p {
  height: 23px;
  line-height: 22px;
  font-size: 16px;
  font-weight: 400;
  color: #303030;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  border: 1px solid #e5e5e5;
  background-color: #FFFFFF;
  margin-left: -30px;
  padding-left: 30px;
  padding-right: 10px;
  border-radius: 20px;
  max-width: 624px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

body .focustoday .con .focustoday-title .left .hours24 .swiper-hours24 p span {
  color: #fd8809;
  font-size: 16px;
  font-weight: 400;
  padding-right: 4px;
}

body .focustoday .con .focustoday-title .right {
  width: 410px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body .focustoday .con .focustoday-title .right h2 {
  font-size: 20px;
  color: #000000;
  line-height: 24px;
  font-weight: inherit;
}

body .focustoday .con .focustoday-title .right .link a {
  font-size: 13px;
  font-weight: 400;
  color: #0D72CA;
}

body .focustoday .con .focustoday-title .right .link a span {
  margin-left: 4px;
}

body .focustoday .con .focustoday-con {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 13px;
}

body .focustoday .con .focustoday-con .focustoday-img {
  width: 850px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body .focustoday .con .focustoday-con .focustoday-img li {
  width: 270px;
  height: 260px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 20px;
}

body .focustoday .con .focustoday-con .focustoday-img li .box {
  width: 270px;
  height: 260px;
  border-radius: 10px;
  overflow: hidden;
}

body .focustoday .con .focustoday-con .focustoday-img li .box .img {
  width: 270px;
  height: 150px;
  background-size: cover;
  background-position: center center;
}

body .focustoday .con .focustoday-con .focustoday-img li .box p {
  padding: 8px 18px;
  font-size: 16px;
  font-weight: 400;
  color: #303030;
  line-height: 20px;
  height: 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  text-align: justify;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

body .focustoday .con .focustoday-con .focustoday-img li .box .author {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 24px;
  padding: 0 20px;
  line-height: 16px;
}

body .focustoday .con .focustoday-con .focustoday-img li .box .author a {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 16px;
  color: #333333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

body .focustoday .con .focustoday-con .focustoday-img li .box .author a i {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: sub;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: 8px;
}

body .focustoday .con .focustoday-con .focustoday-img li .box .author span {
  font-size: 12px;
  color: #545454;
  padding-top: 2px;
  white-space: nowrap;
  padding-left: 10px;
}

.focustoday .con .focustoday-con .focustoday-list {
  width: 410px;
  height: 540px;
  border-radius: 8px;
  background-color: #fff;
  padding: 20px 14px 18px 43px;
  overflow: hidden;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  counter-reset: itemCounter
}

.focustoday .con .focustoday-con .focustoday-list * {
  line-height: 1;
}

.focustoday .con .focustoday-con .focustoday-list li {
  position: relative;
  margin: 21px 0 8px;
  counter-increment: itemCounter
}

.focustoday .con .focustoday-con .focustoday-list li::before {
  content: "0" counter(itemCounter);
  position: absolute;
  left: -28px;
  top: 1px;
  width: 18px;
  height: 18px;
  background: #b8b8b8;
  border-radius: 2px;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  line-height: 18px;
  text-align: center
}

.focustoday .con .focustoday-con .focustoday-list li:first-of-type {
  margin-top: 0
}

.focustoday .con .focustoday-con .focustoday-list li:first-of-type::before {
  background-color: #e62d2d
}

.focustoday .con .focustoday-con .focustoday-list li:nth-of-type(2)::before {
  background-color: #ff5c3a
}

.focustoday .con .focustoday-con .focustoday-list li:nth-of-type(3)::before {
  background-color: #f8883b
}

.focustoday .con .focustoday-con .focustoday-list li a {
  font-weight: bold;
  font-size: 16px;
  color: #333;
  line-height: 20px;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden
}

.focustoday .con .focustoday-con .focustoday-list li p {
  font-weight: 400;
  font-size: 14px;
  color: #999;
  margin-top: 10px
}
</style>
