<script setup>
import ewm1 from '~/assets/topic/2025/shengxue/image@1x.png'
import ewm2 from '~/assets/topic/2025/shengxue/image@1x (1).png'

import ewm_1 from '~/assets/topic/2025/shengxue/二维码/爱读号英美留学-公众号.jpg'
import ewm_2 from '~/assets/topic/2025/shengxue/二维码/香港名校通_画板 公众号.jpg'
import ewm_3 from '~/assets/topic/2025/shengxue/二维码/深港升学陈老师-视频号.png'
import ewm_4 from '~/assets/topic/2025/shengxue/二维码/国际教育Niko老师-视频号.png'
import ewm_5 from '~/assets/topic/2025/shengxue/二维码/爱读号英美留学-小红书.png'
import ewm_6 from '~/assets/topic/2025/shengxue/二维码/贝赛思Basis有个圈.png'
</script>
<template>
  <footer :class="$style.footer" id="lxwm">
    <div :class="$style.con">
      <div :class="$style.menu">
        <ul>
          <li><a href="//www.ieduchina.com/service/aboutus.html" rel="nofollow">关于我们</a></li>
          <li><a href="//www.ieduchina.com/mp/login_member.html" rel="nofollow">投稿</a></li>
          <li><a href="//www.ieduchina.com/service/tousu.html" rel="nofollow">投诉侵权</a></li>
          <li><a href="//www.ieduchina.com/service/ad.html" rel="nofollow">联系我们</a></li>
          <li><a href="//www.ieduchina.com/service/joinus.html" rel="nofollow">加入我们</a></li>
        </ul>
      </div>
      <div :class="$style.contact">
        <ul>
          <li>
            <img :src="ewm1" alt="国际教育网Ada">
            <span>扫码关注官方公众号</span>
          </li>
          <li>
            <img :src="ewm2" alt="学校官方媒体合作"> <span>扫码咨询升学小助手</span>
          </li>
          <li>
            <p>咨询热线：</p>
            <p>400-168-1016</p>
          </li>
        </ul>
        <div :class="$style.right">
          <p>
            <span>公众号：</span>
            <span><a>爱读号英美留学</a><a :class="$style.img"><img :src="ewm_1" alt="爱读国际择校说"></a></span>
            <span><a>香港名校通</a><a :class="$style.img"><img :src="ewm_2" alt="国际择校说"></a></span>
          </p>

          <p>
            <span>视频号：</span>
            <span><a>深港升学陈老师</a><a :class="$style.img"><img :src="ewm_3" alt="深港升学陈老师"> </a></span>
            <span><a>国际教育NIKO老师</a><a :class="$style.img"><img :src="ewm_4" alt="国际教育NIKO老师"> </a></span>
          </p>
          <p>
            <span>小红书：</span>
            <span><a>爱读号英美留学</a> <a :class="$style.img"><img :src="ewm_5" alt="爱读号英美留学"></a></span>
            <span><a>贝赛思BASIS有个圈</a> <a :class="$style.img"><img :src="ewm_6" alt="贝赛思BASIS有个圈"></a></span>
          </p>
        </div>
      </div>
      <div :class="$style.copyright">
        <p>
          Copyright © <span id="copyyear">2025</span> 国际教育网 版权所有
        </p>
        <p>
          <a href="http://beian.miit.gov.cn/" rel="nofollow">粤ICP备2021064228号-2</a>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502002588" rel="nofollow">
            <img src="//www.ieduchina.com/statics/pcc/img/police.png?v=1"
              style="display: inline-block;vertical-align: middle;">粤公网安备 44030502002588号</a>
        </p>
        <p>网站所有图片、文字未经许可不得拷贝、复制</p>
      </div>
    </div>
  </footer>
</template>

<style lang="less" module>
.footer {
  background-color: #083A83;
  clear: both;
  min-width: 1200px;

  .con {
    width: 1200px;
    margin: 0 auto;

    .menu {
      height: 90px;
      display: flex;
      justify-content: space-between;

      ul {
        display: flex;
        width: 590px;
        justify-content: space-between;

        li {
          line-height: 90px;

          a {
            display: inline-block;
            line-height: 50px;
            color: white;
            font-size: 16px;
            font-weight: 300;
          }
        }
      }
    }

    .contact {
      display: flex;
      justify-content: space-between;
      border-top: solid 1px rgba(255, 255, 255, 0.1);
      border-bottom: solid 1px rgba(255, 255, 255, 0.1);
      padding: 27px 0 14px 0;

      ul {
        width: 550px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {

          img {
            width: 90px;
            height: 90px;
            margin: 0 10px;
          }

          span {
            display: block;
            font-size: 12px;
            font-weight: 400;
            color: white;
            text-align: center;
            margin-top: 10px;
          }

          p {
            font-size: 14px;
            font-weight: 400;
            color: white;

            &:last-of-type {
              font-size: 24px;
              font-weight: 500;
              margin-top: 10px;
              margin-right: 10px;
            }
          }

          &:last-of-type {
            margin-top: -24px;
          }
        }
      }

      .right {
        padding-bottom: 10px;
        padding-top: 10px;

        p {
          display: flex;
          margin-top: 15px;

          &:first-of-type {
            margin-top: 0;
          }

          span {
            position: relative;
            margin-right: 14px;
            font-size: 14px;
            font-weight: 400;
            color: white;
            cursor: pointer;

            a {
              font-size: 14px;
              font-weight: 400;
              color: white;

              &.img {
                position: absolute;
                display: none;
                width: 120px;
                height: 136px;
                bottom: 0;
                left: 50%;
                z-index: 1100;
                transform: translateX(-50%);
                box-sizing: border-box;
                padding-bottom: 16px;
                pointer-events: none;

                img {
                  width: 120px;
                  height: 120px;
                  box-shadow: 0 0 2px 0 white;
                }
              }
            }

            &:hover {
              a {
                color: #46A9FF;

                &.img {
                  display: block;
                }
              }
            }

            &:first-of-type {
              width: 80px;
              display: inline-block;
              text-align: right;
              margin-top: 0;
              margin-right: 4px;
            }

            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }
    }

    .copyright {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 14px;
        font-weight: 300;
        color: white;
        line-height: 46px;

        a {
          color: white;
          float: left;

          img {
            width: 15px;
            height: 17px;
            margin: 0 4px;
            margin-top: -2px;
          }
        }
      }
    }
  }
}
</style>
