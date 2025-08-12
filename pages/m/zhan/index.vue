<script setup>
import { useHead } from 'nuxt/app';
import { onMounted } from 'vue';
import { grade } from '~/assets/data/index.ts'
onMounted(() => {
  $(() => {
    var inputs = [];
    $.each($("form").find("input,select"), function (index, item) {
      if ($(item).attr("required")) {
        inputs.push(item);
      }
    });
    $("select").change(function () {
      $(this).css("color", "#333")
    })
    $("button[type=submit]").on("click", function () {
      $(".error-tips").text("");
      var form = $(this).closest("form");
      var errors = [];
      var content = inputs.reduce(function (_acc, input) {
        var val = form.find(input).val();
        if (!val) {
          errors.push(form.find(input).attr("placeholder"));
        }
        return errors[0];
      }, "");
      if (content) {
        layer.open({ content: content, skin: "msg", time: 3 });
        $(".error-tips").text(content);
        return false;
      }
      if ($("input[name=price]:checked").val() == "E" && !$("#sign_yhj").val()) {
        layer.open({
          content: '请输入优惠券码',
          skin: 'msg',
          time: 3
        });
        return false;
      }
      $.ajax({
        url: form[0].action,
        type: form[0].method,
        dataType: "json",
        data: form.serialize(),
        success: function (res) {
          if (res.status == 1) {
            form[0].reset();
            layer.open({
              content: '提交成功',
              skin: 'msg',
              time: 3
            });
            window.location.href = res.info;
          }
          if (res.status == 2) {
            callPay(res.data);
          }
          if (res.status == 0) {
            layer.open({ content: res.info, skin: "msg", time: 3 });
          }
        }
      });
      return false;
    });
  })
})

useHead({
  script: [
    {
      innerHTML: `
      (function () {
            function onResize() {
                var width = document.documentElement.clientWidth;
                var style = document.createElement("style");
                style.setAttribute('id', 'style')
                var html = '';
                if (/Android|webOS|iPhone|iPod|BlackBerry|OpenHarmony/i.test(navigator.userAgent)) {
                    html = "html{font-size: " + width / 780 + "px !important;}";
                } else {
                    html = "html{font-size: " + 1 + "px !important;width:750px !important;margin:0 auto !important;}";
                }
                if (document.getElementById('style')) {
                    document.getElementById('style').innerHTML = html
                } else {
                    style.innerHTML = html;
                    document.head.appendChild(style);
                }
            }
            window.addEventListener('resize', onResize);
            onResize()
        })();
      `
    },
    {
      src: 'https://m.ieduchina.com/statics/js/jquery-3.7.1.min.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://m.ieduchina.com/statics/m/js/layer.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://res2.wx.qq.com/open/js/jweixin-1.6.0.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://m.ieduchina.com/statics/w/js/tgFrom.js',
      type: 'text/javascript',
      body: true,
    },
  ],
  link: [
    {
      itemprop: 'image',
      content: "https://m.ieduchina.com/statics/share.jpg",
    },
    {
      rel: 'apple-touch-icon',
      href: "https://m.ieduchina.com/statics/share.jpg",
    },
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//m.ieduchina.com/favicon.ico',
    }
  ],
  title: "2024全球多元化升学论坛，大湾区国际教育名校升学展",
  meta: [
    {
      name: 'keywords',
      content: '2024全球多元化升学论坛，大湾区国际教育名校升学展',
    },
    {
      name: 'description',
      content: '2024全球多元化升学论坛，大湾区国际教育名校升学展',
    },
  ],
})
</script>
<template>
  <header><img alt="" src="https://m.ieduchina.com/wxpay/zhanhui/202410/images/a4ad1bcg.png"></header>
  <section>
    <form action="https://m.ieduchina.com/wxpay/ajax.php?do=zhan" method="post">
      <p>活动报名</p>
      <div class="input"><span>学生姓名：</span><input name="name" type="text" autocomplete="off" placeholder="请输入学生姓名"
          required></div>
      <div class="input"><span>手机号码：</span><input name="tel" type="text" autocomplete="off" placeholder="请输入手机号码"
          id="tel" required></div>
      <div class="input"><span>在读年级：</span><select name="grade" placeholder="请选择在读年级" required>
          <option value="">请选择在读年级</option>
          <option v-for="item in grade" :value="item">{{ item }}</option>
        </select>
      </div>
      <div class="input"><span>参加人数：</span><input name="num" type="number" autocomplete="off" placeholder="请输入参与人数"
          required></div>
      <!-- <div class="input"><span>优惠券码：</span><input name="sign_yhj" type="text" autocomplete="off" placeholder="请输入优惠券码" id="sign_yhj" maxlength="7"> -->
      <!-- <img alt="" src="https://m.ieduchina.com/wxpay/zhanhui/202410/images/ec90ec38.png" class="ok">
      </div> -->
      <div class="btn">
        <div class="error-tips"></div><button type="submit">提交</button>
      </div>
    </form>
  </section>
  <footer>
    <a>首页</a><a href="/m/zhan/show">签到码</a>
  </footer>
</template>

<style lang="less" scoped>
footer {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 780rem;
  display: flex;
  justify-content: space-between;
  height: 172rem;
  border-top: solid 1rem #ececec;
  background-color: #fff;
  padding-bottom: 60rem
}

footer a {
  height: 112rem;
  width: 50%;
  font-weight: bold;
  font-size: 24rem;
  text-align: center;
  padding-top: 76rem;
  color: #fe8710
}

footer a[href] {
  color: #d9d9d9
}

footer a:first-of-type {
  width: 100%;
  background: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/0a713ece.png) center 16rem/56rem 56rem no-repeat
}

footer a:first-of-type[href] {
  background-image: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/4aea2284.png)
}

footer a:last-of-type {
  width: 100%;
  background: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/e253df8f.png) center 16rem/56rem 56rem no-repeat
}

footer a:last-of-type[href] {
  background-image: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/33d08641.png)
}

:root {
  --orange: #FE8710
}

header {
  min-height: 364rem
}

header img {
  width: 100%
}

section {
  font-size: 32rem;
  padding-bottom: 220rem
}

section form>p {
  padding: 48rem 32rem 24rem;
  font-size: 40rem;
  font-weight: bold;
  color: #333
}

section form>p:nth-of-type(n+2) {
  font-size: 32rem
}

section form .input {
  height: 120rem;
  position: relative;
  line-height: 120rem;
  border-bottom: solid 1px #e5e5e5
}

section form .input span {
  position: absolute;
  left: 32rem;
  font-size: 32rem;
  color: #333
}

section form .input input {
  width: 100%;
  font-size: 32rem;
  color: #333;
  padding-left: 240rem;
  height: 100rem;
}

section form .input select {
  font-size: 32rem;
  color: #333;
  margin-left: 240rem;
  width: 508rem;
  height: 100rem;
  border: none;
  color: #999;
  appearance: none;
  background-color: transparent;

  option {
    color: #333;

    &[value=""] {
      display: none;
    }
  }
}

section form .input input::placeholder {
  font-size: 32rem;
  color: #999
}

section form .input .ok {
  display: none;
  position: absolute;
  right: 32rem;
  top: 32rem;
  width: 56rem;
  height: 56rem;
  pointer-events: none
}

section form ul {
  padding: 0 32rem;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
}

section form ul li {
  width: 176rem;
  height: 190rem;
  margin-right: 20rem;
  margin-bottom: 20rem;
}

section form ul li:last-of-type {
  margin-right: 0;
}

section form ul li input {
  display: none
}

section form ul li input:checked+.box {
  background: rgba(254, 135, 16, .15);
  border: 2rem solid #fe8710;
  position: relative
}

section form ul li input:checked+.box::after {
  content: "";
  position: absolute;
  right: -1rem;
  top: -1rem;
  width: 24rem;
  height: 24rem;
  background: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/7e03a4b8.png) center/contain no-repeat
}

section form ul li input:checked+.box p {
  color: var(--orange)
}

section form ul li .box {
  width: 176rem;
  height: 190rem;
  border-radius: 8rem;
  background: #f7f7f7;
  border: 2rem solid #e5e5e5
}

section form ul li .box p {
  text-align: center;
  line-height: 1;
  color: #333;
  padding-top: 18rem
}

section form ul li .box p.zwq {
  font-size: 40rem !important;
  padding-bottom: 4rem;
  padding-top: 21rem !important;
}

section form ul li .box p:first-of-type {
  font-size: 32rem;
  font-weight: bold
}

section form ul li .box p:nth-of-type(2) {
  font-weight: 700;
  font-size: 24rem
}

section form ul li .box p:nth-of-type(2) span {
  font-size: 48rem
}

section form ul li .box p:nth-of-type(2) {
  font-size: 22rem
}

section form .paytype {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22rem 32rem 0
}

section form .paytype img.w {
  width: 48rem;
  height: 48rem
}

section form .paytype img.g {
  width: 56rem;
  height: 56rem
}

section form .paytype span {
  font-size: 32rem;
  padding-left: 40rem;
  color: #333;
  flex: 1
}

section form .btn {
  padding: 0 32rem;
  margin-top: 78rem
}

section form .btn .error-tips {
  text-align: center;
  color: red;
  line-height: 0;
  padding-bottom: 30rem;
  font-size: 26rem
}

section form .btn button {
  width: 100%;
  height: 98rem;
  background: #fe8710;
  border-radius: 8rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 40rem;
  color: #fff
}

section .state {
  min-height: calc(100vh - 684rem);
  display: flex;
  align-items: center;
  justify-content: center
}

section .state .center {
  text-align: center
}

section .state .center img {
  width: 144rem;
  height: 144rem
}

section .state .center p {
  font-weight: bold;
  font-size: 40rem;
  color: #ee1b1b;
  padding-top: 32rem
}

section>a.repay {
  display: block;
  width: 716rem;
  height: 98rem;
  background: #fe8710;
  border-radius: 8rem;
  text-align: center;
  line-height: 98rem;
  font-weight: bold;
  font-size: 40rem;
  color: #fff;
  margin: 0 auto
}

section .time .time-title {
  padding: 48rem 0 44rem;
  font-weight: 400;
  font-size: 32rem;
  color: #fe8710;
  text-align: center
}

section .time .time-title span {
  position: relative
}

section .time .time-title span::before,
section .time .time-title span:after {
  position: absolute;
  content: "";
  top: 20rem;
  width: 50rem;
  height: 2rem
}

section .time .time-title span:before {
  left: -74rem;
  background-image: linear-gradient(270deg, rgb(236, 144, 52), rgba(236, 144, 52, 0))
}

section .time .time-title span:after {
  right: -74rem;
  background-image: linear-gradient(90deg, rgb(236, 144, 52), rgba(236, 144, 52, 0))
}

section .time ul {
  width: 590rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between
}

section .time ul li {
  width: 120rem;
  height: 130rem;
  overflow: hidden;
  border-radius: 8rem;
  background: #fe8710 url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/5000c8db.png) center/contain no-repeat;
  text-align: center
}

section .time ul li span {
  font-weight: 700;
  font-size: 72rem;
  color: #fff;
  display: block;
  height: 90rem;
  line-height: 100rem
}

section .time ul li p {
  font-weight: 400;
  font-size: 28rem;
  color: #ffe2a7
}

section .ticket {
  padding: 66rem 32rem 0;
  font-weight: bold;
  font-size: 40rem;
  color: #333
}

section .ticket ul li {
  display: flex;
  justify-content: center;
  margin-top: 26rem
}

section .ticket ul li.over .left .thead {
  background-color: #d9d9d9;
  border-color: #d9d9d9;
  color: #999
}

section .ticket ul li.over .left .thead::after {
  content: initial
}

section .ticket ul li.over .left .tbody {
  background-color: #f2f2f2
}

section .ticket ul li.over .left .tbody .l {
  background-image: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/4d20c677.png)
}

section .ticket ul li.over .left .tbody .e {
  background-image: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/e8366957.png)
}

section .ticket ul li.over .right .thead {
  background-color: #d9d9d9;
  border-color: #d9d9d9;
  color: #999
}

section .ticket ul li.over .right .tbody {
  background-color: #f2f2f2;
  color: #999
}

section .ticket ul li .left {
  width: 596rem;
  height: 248rem;
  background: #f2f2f2;
  border-radius: 24rem
}

section .ticket ul li .left .thead {
  position: relative;
  width: 100%;
  height: 62rem;
  background: #fff;
  font-weight: bold;
  font-size: 32rem;
  color: #fe8710;
  line-height: 62rem;
  border: solid 1rem #fe8710;
  border-bottom: none;
  padding-left: 30rem;
  border-radius: 24rem 24rem 0 0
}

section .ticket ul li .left .thead::after {
  content: "";
  position: absolute;
  right: -8rem;
  bottom: 0;
  width: 16rem;
  height: 48rem;
  background-image: linear-gradient(0deg, rgb(255, 255, 255) 50%, transparent 100%)
}

section .ticket ul li .left .tbody {
  background-color: #fec083;
  height: 184rem;
  border-radius: 0 0 24rem 24rem;
  display: flex;
  justify-content: center;
  align-items: center
}

section .ticket ul li .left .tbody .l {
  width: 152rem;
  height: 38rem;
  background: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/28294855.png) center/contain no-repeat
}

section .ticket ul li .left .tbody span {
  font-weight: bold;
  font-size: 28rem;
  color: #1a1a1a;
  padding: 0 56rem 0 48rem;
  width: 300rem;
  white-space: nowrap
}

section .ticket ul li .left .tbody .e {
  width: 65rem;
  height: 65rem;
  background: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/a9b04df6.png) center/contain no-repeat
}

section .ticket ul li .right {
  width: 120rem;
  height: 248rem;
  margin-left: -1rem
}

section .ticket ul li .right .thead {
  width: 100%;
  height: 62rem;
  background: #fff;
  font-weight: bold;
  font-size: 32rem;
  color: #fe8710;
  line-height: 62rem;
  border: solid 1rem #fe8710;
  border-bottom: none;
  text-align: center;
  border-radius: 24rem 24rem 0 0
}

section .ticket ul li .right .tbody {
  background-color: #fec083;
  height: 184rem;
  line-height: 184rem;
  border-radius: 0 0 24rem 24rem;
  font-weight: bold;
  font-size: 24rem;
  color: #1a1a1a;
  text-align: center
}

section .links {
  padding: 32rem;
  text-align: center
}

section .links .title {
  font-weight: bold;
  font-size: 40rem;
  color: #333;
  padding: 20rem 0 20rem;
  text-align: left
}

section .links button {
  background-color: var(--orange);
  font-size: 26rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10rem;
  color: #fff;
  padding: 10rem 20rem
}

section .links .tip {
  text-align: left;
  padding-top: 20rem;
  font-size: 24rem;
  line-height: 30rem
}

.mask {
  width: 100vw;
  max-width: 780rem;
  height: 100vh;
  display: none;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0
}

.mask.show {
  display: flex;
  justify-content: center;
  align-items: center
}

.mask.show .con {
  text-align: center
}

.mask.show .con .box {
  width: 620rem;
  padding: 0 32rem 32rem 32rem;
  background: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/3809756e.png) center/contain no-repeat;
  border-radius: 16rem;
  text-align: center
}

.mask.show .con .box button {
  width: 340rem;
  height: 80rem;
  background: #fe8710;
  border-radius: 0 0 48rem 48rem;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 40rem;
  color: #fff
}

.mask.show .con .box img {
  width: 360rem;
  height: 360rem;
  object-fit: contain;
  margin: 92rem 0 120rem
}

.mask.show .con .box .tip {
  background: #fff2e5;
  border-radius: 8rem;
  padding: 14rem 24rem
}

.mask.show .con .box .tip p {
  font-weight: 400;
  font-size: 24rem;
  color: #333;
  line-height: 34rem;
  text-align: left
}

.mask.show .con .close {
  width: 48rem;
  height: 48rem;
  object-fit: contain;
  padding: 24rem;
  box-sizing: content-box
}
</style>