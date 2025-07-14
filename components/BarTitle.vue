<script setup>
defineProps({
  showhome: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div :class="$style.bar_title">
    <div :class="$style.bar_title_con">
      <ul :class="$style.left">
        <li :class="$style.nav">
          网站导航
          <div :class="$style.nav_box">
            <div :class="$style.nav_box_in">
              <ol>
                <li>学校大全</li>
                <li><a href="" target="_blank">内地学校</a></li>
                <li><a href="/hongkong/" target="_blank">香港学校</a></li>
                <li><a href="/singapore/index.html" target="_blank">新加坡学校</a></li>
                <li><a href="/schlist/c1/" target="_blank">海外学校</a></li>
              </ol>
              <ol>
                <li>
                  学校活动
                </li>
                <li>
                  <a href="/huodong/?type=6" target="_blank">学校开放日</a>
                </li>
                <li>
                  <a href="/topic/2024/hk5/" target="_blank">名校探校营</a>
                </li>
                <li>
                  <a href="/camps/index.html" target="_blank">夏/冬令营</a>
                </li>
                <li>
                  <a href="/topic/2024/shenzhen/index.html" target="_blank">国际教育论坛</a>
                </li>
              </ol>
              <ol>
                <li>
                  备考学习
                </li>
                <li>
                  <a href="/xuexi/index.html?tgfrom=guanwang" target="_blank">官方考试</a>
                </li>
                <li>
                  <a href="https://appaznrqrnb5508.h5.xiaoeknow.com/p/decorate/more/eyJpZCI6MTYzNzI4NDEsImNoYW5uZWxfaWQiOiIiLCJjb21wb25lbnRfaWQiOjI5NDkzODU2fQ" target="_blank">学习资源</a>
                </li>
              </ol>
            </div>
          </div>
        </li>
        <!-- eslint-disable-next-line -->
        <li v-if="showhome">返回<NuxtLink to="/" :class="$style.home">国际教育网</NuxtLink>主页</li>
        <li>
          <a href="/service/tousu.html">投诉建议</a>
        </li>
        <li>
          <a href="/mp/login_member.html">发布文章</a>
        </li>
      </ul>
      <ul :class="$style.right">
        <li id="login-before" :class="$style.login">
          <a href="/login.html" target="_blank">登录</a>/
          <a href="/register.html" target="_blank">注册</a>
        </li>
        <li><a :class="$style.s2hk" style="cursor:pointer">简体</a></li>
      </ul>
    </div>
  </div>
</template>

<style module lang="less">
.bar_title {
  border-bottom: solid 1px #e5e5e5;

  .bar_title_con {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 37px;
    line-height: 37px;
    font-size: 14px;
    color: #333;

    .left {
      display: flex;

      &>li {
        font-weight: 400;
        font-size: 14px;
        color: #333;
        margin-right: 30px;

        a {
          font-weight: 400;
          font-size: 14px;
          color: #333;

          &.home {
            color: #0770d1;
          }
        }

        &.nav {
          position: relative;
          padding-right: 15px;
          cursor: pointer;

          &::after {
            pointer-events: none;
            content: "";
            position: absolute;
            right: 0;
            top: 9px;
            width: 10px;
            height: 18px;
            background: url(/assets/hongkong/a91b75e0.png) center/contain no-repeat
          }

          &:hover {
            .nav_box {
              display: block
            }
          }

          .nav_box {
            display: none;
            position: absolute;
            top: 36px;
            left: 0;
            z-index: 100;
            padding-top: 4px;
            animation: an .3s ease-in-out;

            .nav_box_in {
              padding: 10px 20px 13px;
              background: #fff;
              box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, .1608);

              ol {
                display: flex;

                li {
                  font-weight: bold;
                  font-size: 14px;
                  color: #333;
                  white-space: nowrap;

                  &:first-of-type {
                    &::after {
                      content: "|";
                      margin-left: 20px;
                      color: #bebebe
                    }
                  }

                  a {
                    font-weight: 400;
                    font-size: 14px;
                    color: #666;
                    padding: 0 20px;

                    &.active,
                    &:hover {
                      width: 56px;
                      color: #0770d1
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .right {
      display: flex;

      li {
        padding-left: 30px;

        &.login {
          color: #0770d1;

          a {
            color: #0770d1;
            margin: 0 4px
          }
        }

        a {
          font-weight: 400;
          font-size: 14px;
          color: #333
        }
      }
    }
  }
}
</style>
