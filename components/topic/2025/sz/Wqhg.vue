<script setup>
import { defineAsyncComponent } from 'vue'

const Title = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Title.vue`))

</script>
<template>
  <div class="wqhg">
    <component :is="Title" cn="往期回顾" en="Look back" />
    <p class="tip">商务合作:153-6164-0708（微信同号）</p>
    <div class="textwrap">
      <div class="text">
        <p><b>论坛始于</b><br></p>
        <p><b>-- 2017.04 --</b></p>
        <p><a>2017-04-22——2017国际教育展暨国际教育论坛丨大湾区</a></p>
        <p><a href="//www.ieduchina.com/topic/2017/10_SZ/" target="_blank">2017-10-29——2018国际教育网暨国际教育高峰论坛丨深圳站</a></p>
        <p><a href="//www.ieduchina.com/topic/2017/11_GZ/" target="_blank">2017-11-26——2018国际学校招生展暨国际校长论坛丨广州站</a></p>
        <p><b>-- 2018年 --</b></p>
        <p><a>2018-04-14——2018国际教育展暨国际教育高峰论坛｜北京站</a></p>
        <p><a>2018-04-21——2018国际教育展暨国际教育高峰论坛｜上海站</a></p>
        <p><a href="//www.ieduchina.com/topic/2018/5_GZ/" target="_blank">2018-05-05——2018国际教育展暨国际教育论坛｜广州站</a>
        </p>
        <p><a>2018-05-12——2018国际教育展暨国际教育高峰论坛｜深圳站</a></p>
        <p><a href="//www.ieduchina.com/topic/2018/4_SZ/" target="_blank">2018-06-30——深圳国际教育展暨国际教育论坛 | 深圳站</a>
        </p>
        <p><a>2018-11-17——2019 国际教育展暨国际教育论坛｜北京站</a></p>
        <p><a href="//www.ieduchina.com/topic/2019/12_SZ/" target="_blank">2018-12-16——深圳国际学校展暨国际教育论坛</a></p>
        <p><b>-- 2019年 --</b></p>
        <p><a href="https://www.ieduchina.com/topic/2019/03_GZ/" target="_blank">2019-03-24——2019国际学校择校展暨国际教育论坛｜广州站</a>
        </p>
        <p><a>2019-04-13——2019国际学校见面交流会｜北京站</a></p>
        <p><a href="//www.ieduchina.com/topic/2019/04_SZ/" target="_blank">2019-04-27——2019国际学校见面交流会｜深圳站</a></p>
        <p><a href="//www.ieduchina.com/topic/2019/05_SH/" target="_blank">2019-05-26——2019国际教育展｜上海站</a></p>
        <p><a href="https://www.ieduchina.com/topic/2019/07_SZ/"
            target="_blank">2019-07-13——IEEF国际学校择校展暨国际教育论坛｜2019国际教育论坛｜深圳站</a></p>
        <p><a href="https://www.ieduchina.com/topic/2019/11_SZ/" target="_blank">2019-11-09——第26届国际教育择校展 |
            深圳站</a></p>
        <p><b>-- 2020年 --</b></p>
        <p><a href="https://www.ieduchina.com/topic/2020/3_SZ/" target="_blank">2020-03-14——粤港澳大湾区国际教育线上论坛</a>
        </p>
        <p><a href="https://www.ieduchina.com/topic/2020/3_BJ/" target="_blank">2020-03-28——京津冀华北区国际教育线上论坛</a>
        </p>
        <p><a href="https://www.ieduchina.com/topic/2020/711_SZ/" target="_blank">2020-07-11——2020大湾区国际名校论坛｜深圳站</a></p>
        <p><a href="https://www.ieduchina.com/topic/2020/1017_SZ/" target="_blank">2020-10-17——2020大湾区国际教育高端名校论坛｜深圳站</a>
        </p>
        <p><b>-- 2022年 --</b></p>
        <p><a href="https://www.ieduchina.com/topic/2022/423_SZ/" target="_blank">2022-04-23—2022大湾区国际教育名校论坛</a>
        </p>
        <p><b>-- 2023年 --</b></p>
        <p><a href="https://www.ieduchina.com/topic/2023/shenzhen/index.html"
            target="_blank">2023-10-21—2023大湾区国际教育顶峰论坛</a></p>
        <p><b>-- 2024年 --</b></p>
        <p><a href="https://www.ieduchina.com/topic/2024/shenzhen/index.html"
            target="_blank">2024-03-30—2024全球多元化升学论坛暨内地香港教育展</a></p>
        <p><a href="https://www.ieduchina.com/topic/2024/sz/index.html"
            target="_blank">2024-10-19—2024全球多元化升学论坛大湾区国际教育名校升学展</a></p>
        <p><b>-- 2025年 --</b></p>
        <p><a href="https://www.ieduchina.com/topic/2025/sz/index.html"
            target="_blank">2025-05-10—2025全球多元化升学论坛大湾区国际教育名校择校展</a></p>
        <p><a>未来更多精彩，敬请期待......</a></p>
      </div>
    </div>
  </div>
</template>
<style lang="less">
body section .wqhg {
  padding: 60px 0;
  background-color: #F5F7FF;
}

body section .wqhg ::-webkit-scrollbar {
  background-color: #fefefe;
  width: 10px
}

body section .wqhg ::-webkit-scrollbar-thumb {
  border-radius: 13px;
  background-color: #101e5d;
  border: solid 1px #101e5d;
  cursor: pointer
}

body section .wqhg .con {
  width: 1200px;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between
}

body section .wqhg .con img {
  width: 260px;
  height: 200px
}

body section .wqhg h3 {
  text-align: center;
  margin-top: 70px
}

body section .wqhg h3 span {
  font-size: 26px;
  font-weight: 500;
  color: #101e5d;
  position: relative;
  text-align: center
}

body section .wqhg h3 span::after,
body section .wqhg h3 span:before {
  content: "--";
  position: absolute;
  top: 0;
  font-size: 26px;
  font-weight: 500;
  color: #101e5d;
  line-height: 35px
}

body section .wqhg h3 span::before {
  left: -45px
}

body section .wqhg h3 span::after {
  right: -45px
}

body section .wqhg p.tip {
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: #666;
  padding: 25px 0 50px
}

body section .wqhg .textwrap {
  position: relative;
  width: 1200px;
  height: 360px;
  margin: 0 auto
}

body section .wqhg .textwrap::before,
body section .wqhg .textwrap::after {
  content: "";
  position: absolute;
  left: 0;
  width: 1170px;
  height: 6px;
  background: #FFF;
  z-index: 10
}

body section .wqhg .textwrap::before {
  top: 0
}

body section .wqhg .textwrap::after {
  bottom: 0
}

body section .wqhg .textwrap .text {
  width: 1200px;
  height: 360px;
  background: #FFF;
  overflow-y: scroll
}

body section .wqhg .textwrap .text p {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #333;
  line-height: 38px
}

body section .wqhg .textwrap .text p a {
  font-size: 20px;
  font-weight: 400;
  color: #333
}

body section .wqhg .textwrap .text p b {
  font-weight: bold;
  display: inline-block;
  padding-top: 40px;
  padding-bottom: 14px
}

body section .wqhg .textwrap .text p:nth-of-type(1) b {
  padding-bottom: 0;
  padding-top: 35px
}

body section .wqhg .textwrap .text p:nth-of-type(2) b {
  padding-top: 0
}

body section .wqhg .textwrap .text p:last-of-type {
  padding-bottom: 36px
}
</style>