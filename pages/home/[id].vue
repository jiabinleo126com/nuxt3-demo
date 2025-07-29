<script setup>
import bg from "~/assets/home/6677afa4.png"

const route = useRoute()
const { data } = await useFetch(`/api/home/${route.params.id}`)
useHead({
  script: [
    {
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
    },
    {
      src: 'https://www.ieduchina.com/statics/js/layer.js',
      type: 'text/javascript',
      body: true
    },
  ],
  link: [
  ],
})
</script>
<template>
  <Header />
  <section class="container_wrap_f">
    <img :src="bg" alt="" class="bg">
    <div class="container_f">
      <div class="user_msg">
        <div class="top">
          <img :src="data.image" alt="">
          <span>{{ data.name }}</span>
        </div>
        <div class="center">
          <div class="text">
            <p class="clamp">{{ data.brief }}</p>
          </div>
          <a><button id="guanzhu4920" onclick="guanzhu_user(4920)">关注</button></a>
        </div>
        <div class="num">
          <a>
            <span>{{ data.content }}</span>内容
          </a>
          <a>
            <span>5435</span>获赞
          </a>
          <a>
            <span>68</span>关注
          </a>
        </div>
      </div>
      <div class="content_f">
        <div class="list_f">
          <div class="menu">
            <a class="active">文章</a>
            <a href="/home/video/4920.html">视频</a>
            <a href="/home/activitys/4920.html">活动</a>
          </div>
          <ul class="article">
            <li v-for="item in data.article" :key="item.id">
              <a :href="item.path" target="_blank">
                <img :src="item.cover" alt="">
                <div class="con">
                  <div class="text">
                    <p>{{ item.title }}</p>
                    <div class="tool">
                      <span>{{ item.time }}</span>
                      <span>3 阅读</span>
                      <span>0 评论</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="side_f">
          <div class="school">
            <a target="_blank" href="//schoollist.ieduchina.com/school/gdsydse/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202507/6881f812cbe7b.jpg" alt="广德实验学校DSE班" />
            </a>
            <h3>广德实验学校DSE班</h3>
            <div class="label">

              <i class="g">高中</i>
            </div>
            <p>课程设置：香港DSE</p>
            <p>学费区间：</p>
            <div class="btn">
              <button>申请入读</button>
            </div>
          </div>
          <div class="activitys">
            <h3>活动推荐</h3>
            <div class="swiper-wrap">
              <div class="swiper user_center_activitys">
                <div class="swiper-wrapper">
                  <div class='swiper-slide'>
                    <div class='image'
                      style='background-image: url(https://zhaosheng.ieduchina.com/Upload/File/202507/687f2b173b0e7.png);'>
                      <div class='status'></div>
                      <div class='title'>
                        <div class='text2'>
                          <p>佛山暨大港澳子弟学校7月26日开放日</p>
                        </div>
                      </div>
                    </div>
                    <div class='text'>
                      <p>开始时间：2025-07-26 08:30-12:00</p>
                      <p>主办单位：佛山暨大港澳子弟学校</p> <a href='//www.ieduchina.com/huodong/202507/2856.html'><button>查看详情
                          →</button></a>
                    </div>
                  </div>
                </div>
                <div class="activitys-swiper-pagination"></div>
              </div>
            </div>
          </div>
          <div class="videos">
            <h3>视频推荐</h3>
            <ul>
              <li>
                <a href="/video/445.html">
                  <img src="https://www.ieduchina.com/uploadfile/toutiao/202506/1750927549701684.png"
                    alt="国际学校是坑还是路？90%家长转错时机毁孩子前途!">
                  <div class="text">
                    <div class="list-title">
                      <p>国际学校是坑还是路？90%家长转错时机毁孩子前途!</p>
                    </div>
                    <div class="author">
                      <object>
                        <a href="/home/4920.html" target="_blank" rel="nofollow">
                          <img src="https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg" alt="选校砖家">
                          <span>选校砖家</span>
                        </a>
                      </object>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="articles">
            <h3>文章推荐</h3>
            <ul>
              <li>
                <a href="//www.ieduchina.com/school/education/202507/130693.html">
                  <div class="con">
                    <img
                      src="https://www.ieduchina.com/statics/js/editor/php/upload/image/20250725/1753423564129575.jpg"
                      alt="苏州科技城外国语学校开设了哪些国际课程？">
                    <div class="text">
                      <div class="list-title">
                        <p>苏州科技城外国语学校开设了哪些国际课程？</p>
                      </div>
                      <div class="author">
                        <object>
                          <a href="/home/5919.html" target="_blank" rel="nofollow">
                            <img src="https://www.ieduchina.com/uploadfile/toutiao/202412/1734506004744095.png"
                              alt="校园百事">
                            <span>校园百事</span>
                          </a>
                        </object>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<style lang="less">
body section.container_wrap_f {
  width: 100%;
  background-color: #F2F4F6;
}

body section.container_wrap_f .bg {
  height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

body section.container_wrap_f .container_f {
  width: 1200px;
  margin: 0 auto;
}

body section.container_wrap_f .container_f .user_msg {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  width: 1200px;
  margin-top: -130px;
  position: relative;
  padding: 20px 44px 0 44px;
}

body section.container_wrap_f .container_f .user_msg .top img {
  position: absolute;
  left: 40px;
  top: -54px;
  z-index: 10;
  width: 110px;
  height: 110px;
  border: solid 6px rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

body section.container_wrap_f .container_f .user_msg .top span {
  font-size: 28px;
  font-weight: 500;
  color: #000000;
  margin-left: 122px;
}

body section.container_wrap_f .container_f .user_msg .center {
  margin-top: 30px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body section.container_wrap_f .container_f .user_msg .center .text {
  padding-bottom: 34px;
  text-align: justify;
  width: 823px;
  position: relative;
}

body section.container_wrap_f .container_f .user_msg .center .text .ellipsis,
body section.container_wrap_f .container_f .user_msg .center .text .open {
  position: absolute;
  right: 0;
  bottom: 35px;
  content: "å±•å¼€";
  background-color: white;
  padding: 4px 0 0 1px;
  font-size: 13px;
  font-weight: 400;
  color: #1583E3;
  cursor: pointer;
}

body section.container_wrap_f .container_f .user_msg .center .text .ellipsis span,
body section.container_wrap_f .container_f .user_msg .center .text .open span {
  font-size: 18px;
  font-weight: 400;
  color: #666666;
  padding-right: 0.6em;
}

body section.container_wrap_f .container_f .user_msg .center .text .open {
  display: none;
  bottom: 16px;
}

body section.container_wrap_f .container_f .user_msg .center .text p {
  line-height: 26px;
  font-size: 18px;
  font-weight: 400;
  color: #666666;
  display: -webkit-box;
  /*  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;*/
}

body section.container_wrap_f .container_f .user_msg .center .text p.clamp {
  -webkit-line-clamp: 2;
}

body section.container_wrap_f .container_f .user_msg .center a {
  margin-top: 18px;
}

body section.container_wrap_f .container_f .user_msg .center a button {
  width: 160px;
  height: 50px;
  background: #1583E3;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 22px;
  font-weight: 500;
  color: #FFFFFF;
}

body section.container_wrap_f .container_f .user_msg .center a button.follow {
  background: #A5A5A5;
}

body section.container_wrap_f .container_f .user_msg .num {
  background: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-bottom: 34px;
}

body section.container_wrap_f .container_f .user_msg .num a {
  font-size: 16px;
  font-weight: 400;
  color: #333333;
}

body section.container_wrap_f .container_f .user_msg .num a span {
  font-size: 24px;
  font-weight: 500;
  color: #333333;
  padding-right: 10px;
  margin-left: 100px;
}

body section.container_wrap_f .container_f .user_msg .num a:first-of-type span {
  margin-left: 0;
}

body section.container_wrap_f .container_f .content_f {
  width: 100%;
  margin-top: 20px;
  padding-bottom: 50px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body section.container_wrap_f .container_f .content_f .list_f {
  width: 820px;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 0 44px 0 44px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body section.container_wrap_f .container_f .content_f .list_f .menu {
  border-bottom: solid 1px #D9D9D9;
}

body section.container_wrap_f .container_f .content_f .list_f .menu a {
  font-size: 18px;
  font-weight: 400;
  color: #333333;
  padding: 11px 0;
  margin-left: 47px;
  display: inline-block;
  cursor: pointer;
}

body section.container_wrap_f .container_f .content_f .list_f .menu a.active {
  color: #1583E3;
  position: relative;
}

body section.container_wrap_f .container_f .content_f .list_f .menu a.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 4px;
  border-radius: 4px;
  background-color: #1583E3;
}

body section.container_wrap_f .container_f .content_f .list_f .nullmsg {
  text-align: center;
  padding-top: 80px;
}

body section.container_wrap_f .container_f .content_f .list_f .nullmsg img {
  width: 180px;
}

body section.container_wrap_f .container_f .content_f .list_f .nullmsg p {
  font-size: 18px;
  font-weight: 400;
  color: #333333;
  cursor: pointer;
  padding-top: 29px;
}

body section.container_wrap_f .container_f .content_f .list_f ul.article li {
  padding: 30px 0;
  border-bottom: solid 1px #D9D9D9;
}

body section.container_wrap_f .container_f .content_f .list_f ul.article li:last-of-type {
  border-bottom: none;
}

body section.container_wrap_f .container_f .content_f .list_f ul.article li a {
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body section.container_wrap_f .container_f .content_f .list_f ul.article li a img {
  width: 184px;
  height: 123px;
  background: #C2C2C2;
  border-radius: 6px;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  margin-right: 30px;
}

body section.container_wrap_f .container_f .content_f .list_f ul.article li a .con {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

body section.container_wrap_f .container_f .content_f .list_f ul.article li a .con .text {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

body section.container_wrap_f .container_f .content_f .list_f ul.article li a .con .text p {
  font-size: 22px;
  font-weight: 400;
  color: #333333;
  line-height: 26px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-align: justify;
  width: 100%;
}

body section.container_wrap_f .container_f .content_f .list_f ul.article li a .con .text .tool {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
}

body section.container_wrap_f .container_f .content_f .list_f ul.article li a .con .text .tool span {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  margin-right: 20px;
}

body section.container_wrap_f .container_f .content_f .list_f ul.activitys li {
  padding: 30px 0;
  border-bottom: solid 1px #D9D9D9;
}

body section.container_wrap_f .container_f .content_f .list_f ul.activitys li:last-of-type {
  border-bottom: none;
}

body section.container_wrap_f .container_f .content_f .list_f ul.activitys li a {
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body section.container_wrap_f .container_f .content_f .list_f ul.activitys li a img {
  width: 184px;
  height: 123px;
  border-radius: 6px;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  margin-right: 30px;
}

body section.container_wrap_f .container_f .content_f .list_f ul.activitys li a .con {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

body section.container_wrap_f .container_f .content_f .list_f ul.activitys li a .con .text {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

body section.container_wrap_f .container_f .content_f .list_f ul.activitys li a .con .text .title>p {
  font-size: 22px;
  font-weight: 400;
  color: #333333;
  line-height: 26px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-align: justify;
  width: 100%;
  margin-top: 0;
}

body section.container_wrap_f .container_f .content_f .list_f ul.activitys li a .con .text p {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 1;
  margin-top: 20px;
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-top: 10px;
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos li {
  width: 230px;
  height: 307px;
  position: relative;
  margin-top: 20px;
  margin-right: 20px;
  overflow: hidden;
  border-radius: 6px;
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos li:nth-of-type(3n) {
  margin-right: 0;
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos li a {
  border-radius: 6px;
  width: 230px;
  height: 307px;
  position: relative;
  overflow: hidden;
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos li a>.filter {
  display: none;
  width: 230px;
  height: 307px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  -webkit-filter: blur(4px);
  filter: blur(4px);
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos li a .image {
  position: absolute;
  top: 0;
  left: 0;
  width: 230px;
  height: 307px;
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos li a .image img {
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 230px;
  height: 307px;
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos li a .image .bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.5)));
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos li a .image .bottom .num {
  position: absolute;
  right: 8px;
  bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos li a .image .bottom .num::before {
  content: "";
  width: 20px;
  height: 20px;
  display: inline-block;
  background-image: url(../images/7aa0bebd.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: -4px;
  margin-right: 6px;
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos li a.horizontal>.filter {
  display: block;
}

body section.container_wrap_f .container_f .content_f .list_f ul.videos li a.horizontal .image img {
  width: 230px;
  height: 307px;
  -o-object-fit: contain;
  object-fit: contain;
}

body section.container_wrap_f .container_f .content_f .list_f .layui-laypage {
  width: 100%;
  padding: 40px 0 30px;
  text-align: center;
}

body section.container_wrap_f .container_f .content_f .list_f .layui-laypage span em.layui-laypage-em {
  background-color: #338EFF;
}

body section.container_wrap_f .container_f .content_f .list_f .layui-laypage a:hover {
  color: #338EFF;
}

body section.container_wrap_f .container_f .content_f .side_f {
  font-size: 0;
  margin-left: 20px;
  width: 360px;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body section.container_wrap_f .container_f .content_f .side_f .school {
  padding: 0 15px;
  background-color: white;
  border-radius: 6px;
  padding: 20px 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body section.container_wrap_f .container_f .content_f .side_f .school img {
  width: 330px;
  height: 95px;
  background: #FFFFFF;
  border-radius: 2px;
  border: 1px solid #EEEEEE;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
}

body section.container_wrap_f .container_f .content_f .side_f .school h3 {
  font-size: 22px;
  font-weight: bold;
  color: #333333;
  line-height: 26px;
  padding: 10px 0;
}

body section.container_wrap_f .container_f .content_f .side_f .school .label i {
  font-size: 12px;
  font-weight: 400;
  line-height: 26px;
  font-style: initial;
  padding: 5px 8px;
  border-radius: 22px;
  border: solid 1px transparent;
  margin-right: 10px;
}

body section.container_wrap_f .container_f .content_f .side_f .school .label i.y {
  color: #fecc76;
  border-color: #fecc76;
}

body section.container_wrap_f .container_f .content_f .side_f .school .label i.x {
  color: #fcb9b9;
  border-color: #fcb9b9;
}

body section.container_wrap_f .container_f .content_f .side_f .school .label i.c {
  color: #9cd8ae;
  border-color: #9cd8ae;
}

body section.container_wrap_f .container_f .content_f .side_f .school .label i.g {
  color: #64aafb;
  border-color: #64aafb;
}

body section.container_wrap_f .container_f .content_f .side_f .school .label i.d {
  color: #a84df8;
  border-color: #a84df8;
}

body section.container_wrap_f .container_f .content_f .side_f .school p {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}

body section.container_wrap_f .container_f .content_f .side_f .school p:first-of-type {
  margin-top: 10px;
}

body section.container_wrap_f .container_f .content_f .side_f .school .btn {
  text-align: center;
  margin-top: 20px;
}

body section.container_wrap_f .container_f .content_f .side_f .school .btn button {
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  color: #1583E3;
  width: 143px;
  height: 37px;
  border-radius: 20px;
  border: 1px solid #1583E3;
  background-color: transparent;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys {
  border-radius: 6px;
  margin-top: 20px;
  padding: 0 15px;
  background-color: white;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys h3 {
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  padding: 20px 0;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper-wrap {
  width: 330px;
  overflow: hidden;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper {
  width: 330px;
  position: relative;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .swiper-wrapper .swiper-slide {
  width: 100%;
  background-color: white;
  -webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.01);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.01);
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .swiper-wrapper .swiper-slide .image {
  position: relative;
  width: 330px;
  height: 220px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .swiper-wrapper .swiper-slide .image .title {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF;
  display: table;
  width: 100%;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .swiper-wrapper .swiper-slide .image .title .text2 {
  display: table-cell;
  vertical-align: middle;
  padding: 0 12px;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .swiper-wrapper .swiper-slide .image .title .text2 p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 255px;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .swiper-wrapper .swiper-slide .image::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 58px;
  height: 52px;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(//www.ieduchina.com/statics/images/icon/a.png?t=20211123);
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .swiper-wrapper .swiper-slide .text {
  padding: 4px 10px;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 125px;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .swiper-wrapper .swiper-slide .text p {
  font-size: 12px;
  font-weight: 400;
  line-height: 30px;
  color: #333333;
  text-align: left;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .swiper-wrapper .swiper-slide .text button {
  width: 125px;
  height: 28px;
  border-radius: 4px;
  border: 1px solid #1583E3;
  font-size: 12px;
  font-weight: 400;
  color: #1583E3;
  margin-top: 12px;
  background-color: transparent;
  cursor: pointer;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .activitys-swiper-pagination {
  position: absolute;
  bottom: 2px;
  text-align: center;
  width: 100%;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .activitys-swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #CBC9C9;
  border-radius: 50%;
  opacity: 1;
}

body section.container_wrap_f .container_f .content_f .side_f .activitys .swiper .activitys-swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 20px;
  height: 10px;
  background: #FF9100;
  border-radius: 5px;
}

body section.container_wrap_f .container_f .content_f .side_f .videos {
  border-radius: 6px;
  margin-top: 20px;
  padding: 0 15px;
  background-color: white;
}

body section.container_wrap_f .container_f .content_f .side_f .videos h3 {
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  padding: 20px 0;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul {
  padding-bottom: 22px;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul li {
  margin-top: 15px;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul li:first-of-type {
  margin-top: 0;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul li a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul li a img {
  width: 146px;
  height: 83px;
  background: #000000;
  border-radius: 4px;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul li a .text {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 10px;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul li a .text .list-title {
  height: 54px;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul li a .text .list-title p {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul li a .text .author object {
  overflow: hidden;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul li a .text .author object a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul li a .text .author object a img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  vertical-align: -4px;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

body section.container_wrap_f .container_f .content_f .side_f .videos ul li a .text .author object a span {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  overflow: hidden;
  line-height: 20px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

body section.container_wrap_f .container_f .content_f .side_f .articles {
  border-radius: 6px;
  margin-top: 20px;
  padding: 0 15px;
  background-color: white;
}

body section.container_wrap_f .container_f .content_f .side_f .articles h3 {
  font-size: 20px;
  color: #333333;
  padding: 20px 0;
  font-weight: bold;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul {
  padding-bottom: 22px;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li {
  padding: 20px 0;
  border-bottom: solid 1px #D9D9D9;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li:last-of-type {
  border-bottom: none;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li:first-of-type {
  padding-top: 0;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li>a .con {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: hidden;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li>a .con img {
  width: 146px;
  height: 97px;
  background: white;
  border-radius: 4px;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li>a .con .text {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 10px;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li>a .con .text .list-title {
  height: 60px;
  padding-top: 10px;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li>a .con .text .list-title p {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li>a .con .text .author object {
  overflow: hidden;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li>a .con .text .author object a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li>a .con .text .author object a img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  vertical-align: -4px;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

body section.container_wrap_f .container_f .content_f .side_f .articles ul li>a .con .text .author object a span {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  overflow: hidden;
  line-height: 20px;
}

body .user_center_mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: none;
  font-size: 16px;
}

body .user_center_mask .main {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 380px;
  overflow: auto;
}

body .user_center_mask .main .close {
  position: absolute;
  right: 5px;
  top: 0;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
  color: white;
}

body .user_center_mask .main form {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body .user_center_mask .main form>div {
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  padding: 0 10px;
  margin-top: 10px;
  position: relative;
  background-color: #ffffff;
}

body .user_center_mask .main form>div.textarea {
  height: auto;
}

body .user_center_mask .main form>div p {
  width: 100px;
  text-align: right;
  margin-right: 20px;
}

body .user_center_mask .main form>div .from_list {
  width: 100%;
}

body .user_center_mask .main form>div .from_list select {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  padding-left: 6px;
  border: none;
  outline: none;
  font-size: 14px;
}

body .user_center_mask .main form>div .from_list input {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  padding-left: 10px;
  border: none;
  font-size: 14px;
  outline: none;
}

body .user_center_mask .main form>div .from_list input::-webkit-input-placeholder {
  color: #666666;
  font-size: 14px;
}

body .user_center_mask .main form>div .from_list input::-moz-placeholder {
  color: #666666;
  font-size: 14px;
}

body .user_center_mask .main form>div .from_list input:-ms-input-placeholder {
  color: #666666;
  font-size: 14px;
}

body .user_center_mask .main form>div .from_list input::-ms-input-placeholder {
  color: #666666;
  font-size: 14px;
}

body .user_center_mask .main form>div .from_list input::placeholder {
  color: #666666;
  font-size: 14px;
}

body .user_center_mask .main form>div .from_list .gender {
  display: inline-block;
}

body .user_center_mask .main form .sub_btn {
  display: block;
  width: 160px;
  height: 52px;
  background: #1558a0;
  line-height: 52px;
  text-align: center;
  color: #fff;
  margin: 0 auto 20px;
  cursor: pointer;
}

body .user_center_mask .main form .error-tips {
  text-align: center;
  line-height: 24px;
  height: 32px;
  color: red;
  font-size: 12px;
}

body .user_center_mask .main h3 {
  font-size: 24px;
  color: #2e2e2e;
  background-color: #2462a5;
  text-align: center;
  padding: 20px 0;
  color: white;
}

body footer.footer {
  margin-top: 0;
}
</style>