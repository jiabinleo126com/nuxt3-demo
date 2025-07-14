<template>
  <footer :class="$style.footer_nav">
    <div :class="$style.con">
      <div :class="$style.footer_menu">
        <h2><img src="https://www.ieduchina.com/statics/pcc/img/logo_footer.png?v=1" alt="国际教育网"></h2>
        <ul>
          <li><a href="//www.ieduchina.com/service/aboutus.html" rel="nofollow">关于我们</a></li>
          <li><a href="//www.ieduchina.com/mp/login_member.html" rel="nofollow">投稿</a></li>
          <li><a href="//www.ieduchina.com/service/tousu.html" rel="nofollow">投诉侵权</a></li>
          <li><a href="//www.ieduchina.com/service/ad.html" rel="nofollow">联系我们</a></li>
          <li><a href="//www.ieduchina.com/service/joinus.html" rel="nofollow">加入我们</a></li>
        </ul>
      </div>
      <div :class="$style.footer_contact">
        <ul>
          <li><img src="https://www.ieduchina.com/statics/pcc/img/ada.png" alt="国际教育网Ada">
            <span>国际教育网Ada</span>
          </li>
          <li>
            <p>学生家长咨询</p>
            <p>400-900-8516</p>
          </li>
          <li><img src="https://www.ieduchina.com/statics/hui.jpg" alt="学校官方媒体合作"> <span>学校官方媒体合作</span></li>
          <li>
            <p>学校媒体合作</p>
            <p>18165706113</p>
          </li>
        </ul>
        <div :class="$style.right">
          <p>
            <span>小红书</span>
            <span><a>爱读国际择校说</a><a :class="$style.img_wrap"><img src="//www.ieduchina.com/statics/pcc/img/db240701.jpg"
                  alt="爱读国际择校说"></a></span>
            <span><a>国际择校说</a><a :class="$style.img_wrap"><img src="//www.ieduchina.com/statics/pcc/img/cf005a47.jpg"
                  alt="国际择校说"></a></span>
            <span><a>爱读选校君</a><a :class="$style.img_wrap"><img src="//www.ieduchina.com/statics/pcc/img/ae66ed27.jpg"
                  alt="爱读选校君"></a></span>
            <span><a>小鹏</a><a :class="$style.img_wrap"><img src="//www.ieduchina.com/statics/pcc/img/c0651e2d.jpg"
                  alt="小鹏"></a></span>
          </p>
          <p>
            <span>视频号</span>
            <span><a>选校砖家</a><a :class="$style.img_wrap"><img src="//www.ieduchina.com/statics/pcc/img/726abf7f.jpg"
                  alt="选校砖家"></a></span>
          </p>
          <p>
            <span>微信公众号</span>
            <span><a>选校砖家</a><a :class="$style.img_wrap"><img src="//www.ieduchina.com/statics/pcc/img/af371255.jpg"
                  alt="选校砖家"></a></span>
            <span><a>香港名校通</a><a :class="$style.img_wrap"><img src="//www.ieduchina.com/statics/pcc/img/19172166.jpg"
                  alt="香港名校通"></a></span>
            <span><a>爱读教育</a><a :class="$style.img_wrap"><img src="//www.ieduchina.com/statics/pcc/img/18d2c315.jpg"
                  alt="爱读教育"></a></span>
          </p>
          <p>
            <span>小程序</span>
            <span><a>探校小管家</a><a :class="$style.img_wrap"><img src="//www.ieduchina.com/statics/pcc/img/25eb8325.png"
                  alt="探校小管家"></a></span>
          </p>
        </div>
      </div>
      <div :class="$style.footer_copyright">
        <p>Copyright © <span id="fullyear">2024</span> 国际教育网 版权所有</p>
        <p><a href="http://beian.miit.gov.cn/" rel="nofollow">粤ICP备2021064228号</a> <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502002588" rel="nofollow"><img
              src="//www.ieduchina.com/statics/pcc/img/police.png?v=1"
              style="display: inline-block;vertical-align: middle;">粤公网安备 44030502002588号</a></p>
        <p>网站所有图片、文字未经许可不得拷贝、复制</p>
      </div>
    </div>
  </footer>
</template>

<style module lang="less">
.footer_nav {
  background-color: #2C2E71;
  clear: both;
  min-width: 1280px;

  .con {
    width: 1280px;
    margin: 0 auto;

    .footer_menu {
      height: 90px;
      display: flex;
      justify-content: space-between;

      h2 {
        width: 176px;
        height: 44px;
        margin-left: 20px;
        margin-top: 26px;
        background-size: contain;
        background-repeat: no-repeat;
      }

      ul {
        display: flex;
        width: 590px;
        justify-content: space-between;

        li {
          line-height: 90px;

          a {
            display: inline-block;
            line-height: 50px;
            color: rgba(255, 255, 255, 0.55);
            font-size: 16px;
            font-weight: 300;
          }
        }
      }
    }

    .footer_contact {
      display: flex;
      justify-content: space-between;
      border-top: solid 1px rgba(255, 255, 255, 0.1);
      border-bottom: solid 1px rgba(255, 255, 255, 0.1);
      padding: 27px 0 14px 0;

      ul {
        width: 633px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
          &:nth-of-type(even) {
            margin-top: -16px;
          }

          img {
            width: 120px;
            height: 120px;
            margin: 0 10px;
          }

          span {
            display: block;
            font-size: 12px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.55);
            text-align: center;
            margin-top: 10px;
          }

          p {
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.55);

            &:last-of-type {
              font-size: 24px;
              font-weight: 500;
              margin-top: 10px;
              margin-right: 10px;
            }
          }
        }
      }

      .right {
        padding-bottom: 10px;

        p {
          display: flex;
          margin-top: 15px;

          &:first-of-type {
            margin-top: 0;
          }

          span {
            position: relative;
            margin-right: 19px;
            font-size: 12px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.55);
            cursor: pointer;

            &:hover {
              a {
                color: #a2a4e6;

                &.img_wrap {
                  display: block;
                }
              }
            }

            &:first-of-type {
              width: 80px;
              display: inline-block;
              text-align: right;
              margin-top: 0;
            }

            &:last-of-type {
              margin-right: 0;
            }

            a {
              font-size: 12px;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.55);

              &.img_wrap {
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

                img {
                  width: 120px;
                  height: 120px;
                  box-shadow: 0 0 2px 0 rgba(185, 201, 214, 0.7);
                }
              }
            }
          }
        }
      }
    }

    .footer_copyright {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 14px;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.55);
        line-height: 46px;

        a {
          color: rgba(255, 255, 255, 0.55);
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