<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import poster from '~/assets/topic/2025/sz/1sWCMpxE.png'
const Title = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Title.vue`))


onMounted(() => {
  window.player1 = TCPlayer('lthg_video', {});
  window.player1.src($("#lthg_video").attr("value"));
})

</script>
<template>
  <div class="lthg">
    <component :is="Title" cn="论坛回顾" en="Forum review" />
    <div class="content">
      <div class="top">
        <div class="left">
          <h3>2025全球多元化升学论坛大湾区国际教育名校择校展在深圳文华东方酒店圆满落幕</h3>
          <p>
            2025年5月10日，由国际教育网主办的"全球多元化升学论坛·大湾区国际教育名校择校展"在深圳福田区文华东方酒店圆满落幕。论坛围绕香港多元化教育的优势与特色展开了深入的探讨，并与内地教育进行了比较分析。同时汇聚了众多香港&内地优质国际学校，从Band1精英中学到特色Band2/3学校，从国际名校到港澳子弟学校，涵盖从幼儿园到高中的全学段教育，全面覆盖DSE、AP、IB、A-Level主流国际课程体系，满足不同学术水平、教育预算及升学路径的需求。
          </p><a href="https://mp.weixin.qq.com/s/OgHtO9lfSb1T33FtxqPWuQ?from=industrynews&color_scheme=light"
            target="_blank" rel="nofollow">详情报道&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</a>
        </div>
        <div class="right">
          <video width="586" height="382" id="lthg_video" :poster playsinline preload="auto"
            value="https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/08bc15fd3560136621058603890/uvAfH7JohfwA.mp4"
            webkit-playsinline></video>
        </div>
      </div>
      <ul class="bottom">
        <li>
          <div class="li_wrap">
            <div class="li_wrap_in"><span>4</span>
              <p>主流课程体系</p>
            </div>
          </div>
        </li>
        <li>
          <div class="li_wrap">
            <div class="li_wrap_in"><span>10</span>
              <p>顶尖教育专家</p>
            </div>
          </div>
        </li>
        <li>
          <div class="li_wrap">
            <div class="li_wrap_in"><span>20</span>
              <p>内地&香港学校</p>
            </div>
          </div>
        </li>
        <li>
          <div class="li_wrap">
            <div class="li_wrap_in"><span>300</span>
              <p>出席家庭</p>
            </div>
          </div>
        </li>
        <li>
          <div class="li_wrap">
            <div class="li_wrap_in"><span>600W</span>
              <p>浏览量</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.lthg {
  padding: 60px 0;
  background-color: #F5F7FF;
}

.lthg .content {
  width: 1200px;
  margin: 0 auto;
}

.lthg .content .top {
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
}

.lthg .content .top .left {
  width: 568px;
}

.lthg .content .top .left h3 {
  font-weight: bold;
  font-size: 28px;
  color: #333333;
  line-height: 41px;
  letter-spacing: -1px;
  text-align: justify;
}

.lthg .content .top .left p {
  font-weight: 400;
  font-size: 18px;
  color: #666666;
  line-height: 29px;
  text-align: left;
  margin-top: 16px;
}

.lthg .content .top .left a {
  display: block;
  width: 160px;
  height: 50px;
  background: #101e5d;
  border-radius: 20px 0px 20px 0px;
  font-family: Source Han Sans, Source Han Sans;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
  margin-top: 29px;
  box-shadow: 0px 4px 10px 0px rgba(16, 30, 93, 0.3);
}

.lthg .content .top .left a img {
  margin-left: 9px;
  vertical-align: -3px;
}

.lthg .content .top .right {
  width: 586px;
  height: 382px;
  position: relative;
  background-color: #fff;
}

.lthg .content .top .right .tcplayer {
  width: 574px;
  height: 382px;
  background-color: #000;
}

.lthg .content .top .right video {
  width: 100%;
  height: 100%;
  background-color: #000;
}

.lthg .content .bottom {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}

.lthg .content .bottom li {
  width: 200px;
  height: 140px;
  background: #f5f7ff;
  border-radius: 40px 0px 0px 0px;
}

.lthg .content .bottom li .li_wrap {
  width: 200px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.lthg .content .bottom li .li_wrap .li_wrap_in {
  text-align: center;
}

.lthg .content .bottom li .li_wrap .li_wrap_in span {
  font-weight: bold;
  font-size: 50px;
  position: relative;
  margin-left: -10px;
  display: inline-block;
  padding-top: 10px;
  background: linear-gradient(to right,
      #FCE8CF,
      #EDB773);
  background-clip: text;
  color: transparent;

  &::after {
    position: absolute;
    right: -24px;
    top: 8px;
    content: "+";
    font-weight: bold;
    font-size: 28px;
    color: #333333;
  }
}

.lthg .content .bottom li .li_wrap .li_wrap_in p {
  font-weight: 400;
  font-size: 14px;
  color: #4d4d4d;
  line-height: 20px;
  margin-top: 10px;
}
</style>