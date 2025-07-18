<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  $(".top-right").on("click", function () {
    $(".menu_mask").show();
  });
  $(".top").on("click", ".close2808c713", function () {
    var dom = $(this).closest(".menu_mask");
    if (dom.css("display") === "none") {
      dom.show();
      return false;
    }
    dom.hide();
  });
})
</script>
<template>
  <div class="top">
    <h1>
      <img alt="" src="//m.ieduchina.com/topic/2024/hk5/images/f84aa037.png?t=2808c713" height="48">
    </h1>
    <div class="top-right">
      <span>往期回顾</span>
    </div>
    <div class="menu_mask">
      <div class="con">
        <div class="title">往期回顾</div>
        <i class="close2808c713"></i>
        <ul>
          <li>
            <a href="//www.ieduchina.com/topic/2025/hk14/" target="_blank" title="香港教育文化之旅"
              class="active">25年07月:圣若瑟英文中学等8所学校</a>
            <a href="//www.ieduchina.com/topic/2025/hk13/" target="_blank"
              title="香港教育文化之旅">25年05月:可风中学、屯门天主教中学等10所学校</a>
            <a href="//www.ieduchina.com/topic/2025/hk12/" target="_blank"
              title="香港教育文化之旅">25年01月:中华基金中学、迦密爱礼信中学等7所学校</a>
            <a href="//www.ieduchina.com/topic/2025/hkyy10/" target="_blank" title="香港教育文化之旅">25年01月:汇基书院（东九龙）等6所学校</a>
            <a href="//www.ieduchina.com/topic/2024/hk11/" target="_blank" title="香港教育文化之旅">24年12月:元朗邓英业小学等5所学校</a>
            <a href="//www.ieduchina.com/topic/2024/hk8/" target="_blank" title="香港教育文化之旅">24年12月:中华基督教会铭基书院等4所学校</a>
            <a href="//www.ieduchina.com/topic/2024/hk7/" target="_blank" title="香港教育文化之旅">24年10月:香岛中学等9所学校</a>
            <a href="//www.ieduchina.com/topic/2024/hkyx1/" target="_blank"
              title="香港英文中学暑期访校研学营">24年07月:孔圣堂礼仁书院等5所本地学校(访校研学)</a>
            <a href="//www.ieduchina.com/topic/2024/hk6/" target="_blank"
              title="香港教育文化之旅">24年07月:汇基书院（东九龙）、播道书院等4所学校</a>
            <a href="//www.ieduchina.com/topic/2024/hk5/" target="_blank" title="香港教育文化之旅">24年05月:沙田培英等15所学校</a>
            <a href="//www.ieduchina.com/topic/2024/hk4/" target="_blank" title="香港教育文化之旅">24年01月:香港UWC、播道书院等8所学校</a>
            <a href="//www.ieduchina.com/topic/2023/hk3/" target="_blank"
              title="香港教育文化之旅">23年12月:中华基督教会协和书院等6所学校+教育展</a>
            <a href="//www.ieduchina.com/topic/2023/xg/" target="_blank" title="香港教育文化之旅">23年10月:保良局百周年李兆忠纪念中学等6所学校</a>
            <a href="//www.ieduchina.com/topic/2023/hk/" target="_blank" title="香港教育文化之旅">23年07月:圣保禄学校、英华书院等10所学校</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.top {
  position: fixed;
  width: 16rem;
  z-index: 1000;
  top: 0;
  height: 1.792rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.64rem;
  background-color: white;
}

.top h1 img {
  height: 1.024rem;
}

.top .top-right {
  position: relative;
  height: 1.792rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.top .top-right span {
  position: relative;
  padding-right: 0.832rem;
  font-weight: 400;
  font-size: 0.64rem;
  color: #000000;
}

.top .top-right span::after {
  position: absolute;
  right: 0;
  top: 0.192rem;
  pointer-events: none;
  z-index: 10;
  content: "";
  width: 0;
  height: 0;
  border: solid 0.27733333rem transparent;
  border-top: 0.27733333rem solid #8D8D8D;
}

.top .menu_mask {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  display: none;
  width: 16rem;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
}

.top .menu_mask .con {
  position: relative;
  background-color: white;
  border-radius: 0 0 0.64rem 0.64rem;
}

.top .menu_mask .con .title {
  height: 1.984rem;
  width: 100%;
  border-bottom: solid 0.02133333rem #B4B4B4;
  font-weight: bold;
  font-size: 0.72533333rem;
  color: #000000;
  text-align: center;
  line-height: 1.984rem;
}

.top .menu_mask .con i.close2808c713 {
  position: absolute;
  right: 0rem;
  top: 0rem;
  z-index: 100;
  width: 1.92rem;
  height: 1.92rem;
  display: block;
  border-radius: 50%;
  overflow: 0;
  cursor: pointer;
}

.top .menu_mask .con i.close2808c713::before,
.top .menu_mask .con i.close2808c713::after {
  pointer-events: none;
  transform-origin: 0% 0%;
  position: absolute;
  left: 0.64rem;
  top: 0.64rem;
  content: "";
  width: 0.768rem;
  height: 0.064rem;
  background-color: #7B7B7B;
  border-radius: 0.064rem;
  transform: rotateZ(45deg);
}

.top .menu_mask .con i.close2808c713::after {
  transform: rotateZ(-45deg);
  top: 1.17333333rem;
  left: 0.59733333rem;
}

.top .menu_mask .con ul {
  padding: 0 0.96rem 1.23733333rem;
  max-height: 80vh;
  overflow-y: auto;
}

.top .menu_mask .con ul li {
  padding-top: 0.85333333rem;
}

.top .menu_mask .con ul li span {
  font-weight: bold;
  font-size: 0.64rem;
  color: #000000;
  line-height: 0.32rem;
  display: block;
}

.top .menu_mask .con ul li span::before {
  content: "";
  display: inline-block;
  width: 0.10666667rem;
  height: 0.59733333rem;
  background: var(--primary);
  margin-right: 0.32rem;
  vertical-align: -0.064rem;
}

.top .menu_mask .con ul li a {
  display: inline-block;
  height: 1.23733333rem;
  width: 100%;
  background: #FFFFFF;
  border-radius: 0.08533333rem;
  border: 0.02133333rem solid #C1C1C1;
  text-align: center;
  line-height: 1.23733333rem;
  margin-top: 0.42666667rem;
  font-weight: 400;
  font-size: 0.59733333rem;
  color: #333333;
}

.top .menu_mask .con ul li a.active {
  color: white;
  background-color: var(--primary);
  border-color: var(--primary);
}
</style>