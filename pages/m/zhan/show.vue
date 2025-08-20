<script setup>
import { useHead } from 'nuxt/app';
import { defineAsyncComponent, onMounted } from 'vue';
const Header = defineAsyncComponent(() => import(`~/components/m/zhan/Header.vue`))
const Footer = defineAsyncComponent(() => import(`~/components/m/zhan/Footer.vue`))
onMounted(() => {
  $(function () {
    if ($(".time").length) {
      time();
    }
    function time() {
      var start = new Date($(".time").attr("time")).getTime();
      var timer = setInterval(function () {
        var now = new Date().getTime();
        if (start >= now) {
          var leftTime = start - now;
          var day = Math.floor(leftTime / (24 * 60 * 60 * 1000));
          var hour = Math.floor(leftTime / (60 * 60 * 1000) - day * 24);
          var minute = Math.floor(leftTime / (60 * 1000) - day * 24 * 60 - hour * 60);
          var second = Math.floor(leftTime / 1000 - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60);
          $(".time").find("li").eq(0).find("span").text(addZero(day));
          $(".time").find("li").eq(1).find("span").text(addZero(hour));
          $(".time").find("li").eq(2).find("span").text(addZero(minute));
          $(".time").find("li").eq(3).find("span").text(addZero(second));
        }
        else {
          clearInterval(timer);
        }
      }, 1000);
    }
    function addZero(num) {
      if (num < 10) {
        return "0" + num;
      }
      else {
        return num;
      }
    }
    $("#ticket").on("click", "li", function () {
      if (!$(this).hasClass("over")) {
        var img = $(this).attr("img");
        $("#mask").find("img").eq(0).attr("src", img);
        $("#mask").addClass("show");
      }
    });
    $(".close").on("click", function () {
      window.location.reload();
    });
  });
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
  <component :is="Header" />
  <section>
    <div :class="$style.time" class="time" time="2025-08-23 08:30:00">
      <div :class="$style.time_title"><span>距离活动开始还剩</span></div>
      <ul>
        <li><span>00</span>
          <p>天</p>
        </li>
        <li><span>00</span>
          <p>时</p>
        </li>
        <li><span>00</span>
          <p>分</p>
        </li>
        <li><span>00</span>
          <p>秒</p>
        </li>
      </ul>
    </div>
    <div :class="$style.ticket" id="ticket">
      <p>我的门票（5）</p>
      <ul>
        <li class='' img='https://www.ieduchina.com/statics/hui.jpg'>
          <div :class='$style.left'>
            <div :class='$style.thead'>19日通行证</div>
            <div :class='$style.tbody'>
              <div :class='$style.l'></div><span>
                点击显示二维码
              </span>
              <div :class='$style.e'></div>
            </div>
          </div>
          <div :class='$style.right'>
            <div :class='$style.thead'></div>
            <div :class='$style.tbody'>未使用</div>
          </div>
        </li>
        <li :class='$style.over' class="over" img=''>
          <div :class='$style.left'>
            <div :class='$style.thead'>19日通行证</div>
            <div :class='$style.tbody'>
              <div :class='$style.l'></div><span>
                点击显示二维码
              </span>
              <div :class='$style.e'></div>
            </div>
          </div>
          <div :class='$style.right'>
            <div :class='$style.thead'></div>
            <div :class='$style.tbody'>已使用</div>
          </div>
        </li>
      </ul>
    </div>

    <div :class="$style.links">
      <a href="/wxpay/info.php"><button>升学择校登记表</button></a>
      <p :class="$style.tip">为了更好地了解您的需求，提供精准和个性化的教育规划服务，请提交您孩子的基础信息。请放心，我们会确保所有收集到的信息得到充分保护。</p>
    </div>
  </section>
  <div :class="$style.mask" id="mask">
    <div :class="$style.con">
      <div :class="$style.box">
        <button>签到码</button>
        <img alt="" src="">
        <div :class="$style.tip">
          <p>时间：2025年08月23日 周六08:30-12:30</p>
          <p>地址：深圳</p>
        </div>
      </div>
      <img alt="" src="//m.ieduchina.com//wxpay/zhanhui/202410/images/5ddcd19c.png" class="close" :class="$style.close">
    </div>
  </div>
  <component :is="Footer" index="1" />
</template>

<style lang="less" module>
section {
  font-size: 32rem;
  padding-bottom: 220rem;

  .time {
    .time_title {
      padding: 48rem 0 44rem;
      font-weight: 400;
      font-size: 32rem;
      color: #101E5D;
      text-align: center;

      span {
        position: relative;

        &::before,
        &:after {
          position: absolute;
          content: "";
          top: 20rem;
          width: 50rem;
          height: 2rem
        }

        &:before {
          left: -74rem;
          background-image: linear-gradient(270deg, rgb(236, 144, 52), rgba(236, 144, 52, 0))
        }

        &:after {
          right: -74rem;
          background-image: linear-gradient(90deg, rgb(236, 144, 52), rgba(236, 144, 52, 0))
        }
      }
    }

    ul {
      width: 590rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      li {
        width: 120rem;
        height: 130rem;
        overflow: hidden;
        border-radius: 8rem;
        background: linear-gradient(180deg, #FCE7CB 0%, #EDB875 34%), #EDB875;
        text-align: center;

        span {
          font-weight: 700;
          font-size: 72rem;
          color: #fff;
          display: block;
          height: 90rem;
          line-height: 100rem
        }

        p {
          font-weight: 400;
          font-size: 28rem;
          color: #ffe2a7
        }
      }
    }
  }

  .ticket {
    padding: 66rem 32rem 0;
    font-weight: bold;
    font-size: 40rem;
    color: #333;

    ul {
      li {
        display: flex;
        justify-content: center;
        margin-top: 26rem;

        .left {
          width: 596rem;
          height: 248rem;
          background: #f2f2f2;
          border-radius: 24rem;

          .thead {
            position: relative;
            width: 100%;
            height: 62rem;
            background: #fff;
            font-weight: bold;
            font-size: 32rem;
            color: #D37F2B;
            line-height: 62rem;
            border: solid 1rem #FCE7CB;
            border-bottom: none;
            padding-left: 30rem;
            border-radius: 24rem 24rem 0 0;

            &::after {
              content: "";
              position: absolute;
              right: -8rem;
              bottom: 0;
              width: 16rem;
              height: 48rem;
              background-image: linear-gradient(0deg, rgb(255, 255, 255) 50%, transparent 100%)
            }
          }

          .tbody {
            background: linear-gradient(180deg, #FCE7CB 27%, #EDB875 100%);
            height: 184rem;
            border-radius: 0 0 24rem 24rem;
            display: flex;
            justify-content: center;
            align-items: center;

            .l {
              width: 152rem;
              height: 38rem;
              background: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/28294855.png) center/contain no-repeat
            }

            span {
              font-weight: bold;
              font-size: 28rem;
              color: #1a1a1a;
              padding: 0 56rem 0 48rem;
              width: 300rem;
              white-space: nowrap
            }

            .e {
              width: 65rem;
              height: 65rem;
              background: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/a9b04df6.png) center/contain no-repeat
            }
          }
        }

        .right {
          width: 120rem;
          height: 248rem;
          margin-left: -1rem;

          .thead {
            width: 100%;
            height: 62rem;
            background: #fff;
            font-weight: bold;
            font-size: 32rem;
            color: #101E5D;
            line-height: 62rem;
            border: solid 1rem #FCE7CB;
            border-bottom: none;
            text-align: center;
            border-radius: 24rem 24rem 0 0
          }

          .tbody {
            background: linear-gradient(180deg, #FCE7CB 27%, #EDB875 100%);
            height: 184rem;
            line-height: 184rem;
            border-radius: 0 0 24rem 24rem;
            font-weight: bold;
            font-size: 24rem;
            color: white;
            text-align: center
          }
        }

        &.over {
          .left {
            .thead {
              background-color: #d9d9d9;
              border-color: #d9d9d9;
              color: #999;

              &::after {
                content: initial
              }
            }

            .tbody {
              background: linear-gradient(180deg, #f2f2f2 27%, #f2f2f2 100%);

              .l {
                background-image: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/4d20c677.png)
              }

              .e {
                background-image: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/e8366957.png)
              }
            }
          }

          .right {
            .thead {
              background-color: #d9d9d9;
              border-color: #d9d9d9;
              color: #999
            }

            .tbody {
              background: linear-gradient(180deg, #f2f2f2 27%, #f2f2f2 100%);
              color: #999
            }
          }
        }
      }
    }
  }

  .links {
    padding: 32rem;
    text-align: center;

    .title {
      font-weight: bold;
      font-size: 40rem;
      color: #333;
      padding: 20rem 0 20rem;
      text-align: left
    }

    button {
      background-color: #101E5D;
      font-size: 26rem;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 10rem;
      color: #fff;
      padding: 10rem 20rem
    }

    .tip {
      text-align: left;
      padding-top: 20rem;
      font-size: 24rem;
      line-height: 30rem
    }
  }
}


.mask {
  width: 100vw;
  max-width: 780rem;
  height: 100vh;
  display: none;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;

  .con {
    text-align: center;

    .box {
      width: 620rem;
      padding: 0 32rem 32rem 32rem;
      background: url(https://m.ieduchina.com/wxpay/zhanhui/202410/images/3809756e.png) center/contain no-repeat;
      border-radius: 16rem;
      text-align: center;

      button {
        width: 340rem;
        height: 80rem;
        background: linear-gradient(180deg, #ECB877 0%, #FCE7CB 100%);
        border-radius: 0 0 48rem 48rem;
        border: none;
        outline: none;
        font-weight: bold;
        font-size: 40rem;
        color: #fff
      }

      img {
        width: 360rem;
        height: 360rem;
        object-fit: contain;
        margin: 92rem 0 120rem
      }

      .tip {
        background: #fff2e5;
        border-radius: 8rem;
        padding: 14rem 24rem;

        p {
          font-weight: 400;
          font-size: 24rem;
          color: #333;
          line-height: 34rem;
          text-align: left
        }
      }
    }

    .close {
      width: 48rem;
      height: 48rem;
      object-fit: contain;
      padding: 24rem;
      box-sizing: content-box
    }
  }
}
</style>
<style lang="less">
#mask.show {
  display: flex;
}
</style>