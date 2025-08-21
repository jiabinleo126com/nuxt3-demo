<script setup>
defineProps({
  active: {
    type: String,
    default: ""
  }
})

const menu = [
  {
    title: "首页",
    href: "/ieduglobe/hongkong/"
  },
  {
    title: "幼稚园",
    href: "/ieduglobe/hongkong/child"
  },
  {
    title: "小学",
    href: "/ieduglobe/hongkong/primary"
  },
  {
    title: "中学",
    href: "/ieduglobe/hongkong/middle"
  },
  {
    title: "国际学校",
    href: "/ieduglobe/hongkong/international"
  },
  {
    title: "特殊学校",
    href: "/ieduglobe/hongkong/special"
  },
  {
    title: "大学",
    href: "/ieduglobe/hongkong/university"
  },
  {
    title: "海外升学",
    href: "/ieduglobe/hongkong/overseas"
  }
]

</script>
<template>
  <img src="https://www.ieduchina.com/statics/image/c14def69.jpg" width="0" height="0" style="display:none;">
  <header class="bar">
    <div class="bar-title">
      <div class="bar-title-con">
        <ul class="left">
          <li class="nav">网站导航<div class="nav_box">
              <div class="nav_box_in">
                <ol>
                  <li>学校大全</li>
                  <li><a href="//schoollist.ieduchina.com" target="_blank">内地学校</a></li>
                  <li><a href="//www.ieduchina.com/hongkong/" target="_blank">香港学校</a></li>
                  <li><a href="//www.ieduchina.com/singapore/index.html" target="_blank">新加坡学校</a></li>
                  <li><a href="//schoollist.ieduchina.com/schlist/c1/" target="_blank">海外学校</a></li>
                </ol>
                <ol>
                  <li>学校活动</li>
                  <li><a href="//www.ieduchina.com/huodong/?type=6" target="_blank">学校开放日</a></li>
                  <li><a href="//www.ieduchina.com/topic/2024/hk5/" target="_blank">名校探校营</a></li>
                  <li><a href="//www.ieduchina.com/camps/index.html" target="_blank">夏/冬令营</a></li>
                  <li><a href="//www.ieduchina.com/topic/2024/shenzhen/index.html" target="_blank">国际教育论坛</a></li>
                </ol>
                <ol>
                  <li>备考学习</li>
                  <li><a href="//www.ieduchina.com/xuexi/index.html?tgfrom=guanwang" target="_blank">官方考试</a></li>
                  <li><a
                      href="https://appaznrqrnb5508.h5.xiaoeknow.com/p/decorate/more/eyJpZCI6MTYzNzI4NDEsImNoYW5uZWxfaWQiOiIiLCJjb21wb25lbnRfaWQiOjI5NDkzODU2fQ"
                      target="_blank">学习资源</a></li>
                </ol>
              </div>
            </div>
          </li>
          <li>返回<a href="//www.ieduchina.com" class="home">国际教育网</a>主页</li>
          <li><a href="//www.ieduchina.com/service/tousu.html">投诉建议</a></li>
          <li><a href="//www.ieduchina.com/mp/login_member.html">发布文章</a></li>
        </ul>
        <ul class="right">
          <li class="login" id="login-before">
            <a href="//www.ieduchina.com/login.html">登录</a>/
            <a href="//www.ieduchina.com/register.html">注册</a>
          </li>
          <li><a class="s2hk" style="cursor:pointer">繁體</a></li>
        </ul>
      </div>
    </div>
    <div class="bar-header">
      <div class="logo"><a href="//www.ieduchina.com">
          <img src="//www.ieduchina.com/statics/images/logo_xg.png" width="220">
        </a></div>
      <div class="search-box">
        <form action="//www.ieduchina.com/search/index.html" method="get" id="search">
          <input name="searchkey" placeholder="搜索 学校/文章/机构" type="text" value="" id="q" class="search-content">
          <button class="search-submit" id="searchbtn" type="submit">
            <img src="//www.ieduchina.com/statics/xg/images/7d29e24f.png"> 搜索
          </button>
        </form>
      </div>
      <div class="tel"><a href="tel:4009008516">400-900-8516</a></div>
    </div>
    <div class="menu-5062847">
      <menu style="position: initial;">
        <div class="c">
          <div class="con left"><a href="//www.ieduchina.com/hk/" target="_blank">香港一站式升学</a></div>
          <div class="con">
            <a v-for="value in menu" :href="value.href" :class="{ active: value.title === active }">{{ value.title }}</a>
          </div>
        </div>
      </menu>
    </div>
  </header>
</template>
<style lang="less" scoped>
body .bar {
  width: 100%;
  min-width: 1280px;
  background-color: #ffffff;
}

body .bar .bar-title {
  border-bottom: solid 1px #e5e5e5
}

body .bar .bar-title .bar-title-con {
  width: 1280px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0 auto;
  height: 37px;
  line-height: 37px;
  font-size: 14px;
  color: #333
}

body .bar .bar-title .bar-title-con .left {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

body .bar .bar-title .bar-title-con .left>li {
  font-weight: 400;
  font-size: 14px;
  color: #333;
  margin-right: 30px
}

body .bar .bar-title .bar-title-con .left>li a {
  font-weight: 400;
  font-size: 14px;
  color: #333
}

body .bar .bar-title .bar-title-con .left>li a.home {
  color: #0770d1
}

body .bar .bar-title .bar-title-con .left>li.nav {
  position: relative;
  padding-right: 15px;
  cursor: pointer
}

body .bar .bar-title .bar-title-con .left>li.nav:hover .nav_box {
  display: block
}

body .bar .bar-title .bar-title-con .left>li.nav::after {
  pointer-events: none;
  content: "";
  position: absolute;
  right: 0;
  top: 9px;
  width: 10px;
  height: 18px;
  background: url(https://www.ieduchina.com/statics/xg/images/a91b75e0.png) center/contain no-repeat
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box {
  display: none;
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 100;
  padding-top: 4px;
  -webkit-animation: an .3s ease-in-out;
  animation: an .3s ease-in-out
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in {
  padding: 10px 20px 13px;
  background: #fff;
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, .1608);
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, .1608)
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol li {
  font-weight: bold;
  font-size: 14px;
  color: #333;
  white-space: nowrap
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol li:first-of-type::after {
  content: "|";
  margin-left: 20px;
  color: #bebebe
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol li a {
  font-weight: 400;
  font-size: 14px;
  color: #666;
  padding: 0 20px
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol li a.active,
body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol li a:hover {
  width: 56px;
  color: #0770d1
}

body .bar .bar-title .bar-title-con .right {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

body .bar .bar-title .bar-title-con .right li {
  padding-left: 30px
}

body .bar .bar-title .bar-title-con .right li.login {
  color: #0770d1
}

body .bar .bar-title .bar-title-con .right li.login a {
  color: #0770d1;
  margin: 0 4px
}

body .bar .bar-title .bar-title-con .right li a {
  font-weight: 400;
  font-size: 14px;
  color: #333
}

body .bar .bar-header {
  width: 1280px;
  margin: 0 auto;
  height: 96px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body .bar .bar-header .logo {
  width: 176px;
  height: 44px;
  margin-left: 20px;
  margin-top: 26px;
}

body .bar .bar-header .logo h1 {
  height: 44px;
}

body .bar .bar-header .logo h1 img {
  height: 44px;
}

body .bar .bar-header .search-box {
  margin-top: 28px;
  width: 521px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  line-height: 40px;
  position: relative;
  overflow: hidden;
}

body .bar .bar-header .search-box form {
  width: 540px;
  height: 40px;
}

body .bar .bar-header .search-box form input.search-content {
  padding: 0 108px 0 10px;
  height: 40px;
  width: 520px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  background: #fff;
  -webkit-appearance: none;
  outline: none;
  -webkit-box-shadow: 0 0 0 1000px white inset;
}

body .bar .bar-header .search-box form input.search-content::-webkit-input-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content::-moz-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content:-ms-input-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content::-ms-input-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content::placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .bar .bar-header .search-box form button.search-submit {
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  outline: none;
  cursor: pointer;
  width: 97px;
  height: 40px;
  background-color: #0770d1;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
}

body .bar .bar-header .search-box form button.search-submit img {
  vertical-align: -3px;
  padding-right: 6px;
}

body .bar .bar-header .tel {
  line-height: 96px;
  margin-right: 20px;
  width: 176px;
}

body .bar .bar-header .tel a {
  position: relative;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
}

body .bar .bar-header .tel a::before {
  position: absolute;
  content: '';
  left: -43px;
  top: 5px;
  z-index: 10;
  width: 22px;
  height: 24px;
  background-image: url(https://www.ieduchina.com/statics/xg/images/cc9595ab.png);
  background-size: 22px 24px;
}

.bar .menu-5062847 {
  height: 60px;
}

.bar .menu-5062847 menu {
  width: 100%;
  height: 60px;
  background: #0770D1;
  top: 0;
  z-index: 20;
}

.bar .menu-5062847 menu .c {
  width: 1280px;
  margin: 0 auto;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.bar .menu-5062847 menu .c .con {
  float: right;
  width: 670px;
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
}

.bar .menu-5062847 menu .c .con.left a {
  width: auto;
  margin-left: 43px;
}

.bar .menu-5062847 menu .c .con.left a.active,
.bar .menu-5062847 menu .c .con.left a:hover {
  background: initial;
}

.bar .menu-5062847 menu .c .con a {
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  width: 100px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.bar .menu-5062847 menu .c .con a.active,
.bar .menu-5062847 menu .c .con a:hover {
  background: #0054A2;
}
</style>