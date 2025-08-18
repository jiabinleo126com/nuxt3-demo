<script setup>

import { onMounted } from 'vue';


const hkTopic = reactive([
  {
    title: '25年07月:圣若瑟英文中学、中华基督教会基道中学等8所学校',
    path: '/topic/2025/hk14',
  },
  {
    title: '25年05月:可风中学、世界龙冈学校刘皇发中学等10所学校',
    path: '/topic/2025/hk13',
  },
  {
    title: '25年01月:中华基金中学、迦密爱礼信中学等7所学校',
    path: '/topic/2025/hk12',
  },
  {
    title: '24年12月:元朗公立中学校友会邓英业小学等5所学校',
    path: '/topic/2024/hk11/',
  },
  {
    title: '24年12月:中华基督教会铭基书院等4所学校',
    path: 'https://www.ieduchina.com/topic/2024/hk8/',
  },
  {
    title: '24年10月:香岛中学、新会商会陈白沙纪念中学等9所学校',
    path: 'https://www.ieduchina.com/topic/2024/hk7/',
  },
  {
    title: '24年07月:孔圣堂礼仁书院等5所本地学校(访校研学)',
    path: 'https://www.ieduchina.com/topic/2024/hkyx1/',
  },
  {
    title: '24年07月:汇基书院（东九龙）、播道书院等4所学校',
    path: 'https://www.ieduchina.com/topic/2024/hk6/',
  },
  {
    title: '24年05月:沙田培英、保良局罗杰承(一九八三)等15所学校',
    path: 'https://www.ieduchina.com/topic/2024/hk5/',
  },
  {
    title: '24年01月:香港UWC、播道书院等8所学校',
    path: 'https://www.ieduchina.com/topic/2024/hk4/',
  },
  {
    title: '23年12月:中华基督教会协和书院等6所学校+教育展',
    path: 'https://www.ieduchina.com/topic/2023/hk3/',
  },
  {
    title: '23年10月:保良局百周年李兆忠纪念中学等6所学校',
    path: 'https://www.ieduchina.com/topic/2023/xg/',
  },
  {
    title: '23年07月:圣保禄学校、英华书院、九龙真光等10所学校 ',
    path: 'https://www.ieduchina.com/topic/2023/hk/',
  },
])

const InternationalEducationForum = reactive([
  {
    path: '/topic/2025/sz/',
    title: '2025年05月',
  },
  {
    path: '//www.ieduchina.com/topic/2024/sz/',
    title: '2024年10月',
  },
  {
    path: '//www.ieduchina.com/topic/2024/shenzhen/',
    title: '2024年03月',
  },
  {
    path: '//www.ieduchina.com/topic/2023/shenzhen/',
    title: '2023年10月',
  },
  {
    path: '//www.ieduchina.com/topic/2022/shenzhen/',
    title: '2022年04月',
  },
  {
    path: '//www.ieduchina.com/topic/2020/1017_SZ/',
    title: '2020年10月',
  },
  {
    path: '//www.ieduchina.com/topic/2020/711_SZ/',
    title: '2020年07月',
  },
  {
    path: '//www.ieduchina.com/topic/2020/3_SZ/',
    title: '2020年03月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/11_SZ/',
    title: '2019年11月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/07_SZ/',
    title: '2019年07月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/05_SH/',
    title: '2019年05月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/04_SZ/',
    title: '2019年04月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/03_GZ/',
    title: '2019年03月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/12_SZ/',
    title: '2018年12月',
  },
  {
    path: '//www.ieduchina.com/topic/2018/5_GZ/',
    title: '2018年05月',
  },
  {
    path: '//www.ieduchina.com/topic/2018/4_SZ/',
    title: '2018年04月',
  },
  {
    path: '//www.ieduchina.com/topic/2017/11_GZ/',
    title: '2017年11月',
  },
  {
    path: '//www.ieduchina.com/topic/2017/10_SZ/',
    title: '2017年10月',
  },
])

onMounted(() => {
  function showMenu() {
    var top = $(window).scrollTop();
    var position = top > ($('#bar_header').height() + $('#bar_title').height() + ($('#pc_ad_top').height() || 0)) ? 'fixed' : 'initial';
    $('#iedu_menu_box').css({
      position: position
    });
  }
  $(document).on('scroll', function () {
    showMenu();
  });
  showMenu();
  $('.parentMenu').hover(function () {
    $(this).find('.submenu').show()
  }, function () {
    $(this).find('.submenu').hide()
  })
})

</script>
<template>
  <div class="iedu-menu-wrap">
    <div class="iedu-menu-box" id="iedu_menu_box">
      <ul class="iedu-menu">
        <li>
          <NuxtLink to="/">
            <span>首页</span>
          </NuxtLink>
        </li>
        <li class="parentMenu">
          <NuxtLink to="/school">
            <span>教育资讯</span>
          </NuxtLink>
          <ul class="submenu">
            <li>
              <NuxtLink to="/school">
                <span>校园资讯</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/abroad">
                <span>留学资讯</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/parents">
                <span>家庭教育</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/zt">
                <span>教育综合</span>
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li class="parentMenu">
          <a href="//schoollist.ieduchina.com"><span>学校大全</span></a>
          <ul class="submenu">
            <li><a href="//schoollist.ieduchina.com"><span>内地学校</span></a></li>
            <li><a href="/hongkong" target="_blank"><span>香港学校</span></a></li>
            <li><a href="//www.ieduchina.com/singapore/index.html" target="_blank"><span>新加坡学校</span></a></li>
            <li><a href="//schoollist.ieduchina.com/schlist/c1/"><span>海外学校</span></a></li>
            <li><a href="//www.ieduchina.com/graduate/index.html"><span>家长进修</span></a></li>
          </ul>
        </li>
        <li>
          <a href="//www.ieduchina.com/camps/index.html"><span>夏/冬令营</span></a>
        </li>
        <li class="parentMenu">
          <a href="//www.ieduchina.com/zwhb/"><span>合办大学</span></a>
          <ul class="submenu">
            <li>
              <NuxtLink to="/zwhb/">
                <span>中外合办大学</span>
              </NuxtLink>
            </li>
            <li>
              <a href="//www.ieduchina.com/gwhb/"><span>港外合办大学</span></a>
            </li>
            <li>
              <a href="//www.ieduchina.com/xwhb/"><span>新外合办大学</span></a>
            </li>
          </ul>
        </li>
        <li class="parentMenu">
          <NuxtLink to="/huodong">
            <span>学校活动</span>
          </NuxtLink>
          <ul class="submenu">
            <!-- <li><a href="//www.ieduchina.com/huodong/?type=9"><span>家长学院</span></a></li> -->
            <li>
              <a href="//www.ieduchina.com/huodong/?type=6"><span>学校开放日</span></a>
            </li>
            <li>
              <a href="//www.ieduchina.com/topic/2025/hk13/" target="_blank">
                <span><img src="//www.ieduchina.com/statics/pcc/img/11d86433.png"
                    style="vertical-align: -1px;">访校团</span>
              </a>
              <div class="box">
                <div class="box_lis">
                  <div class="box_con">
                    <template v-for="(item, index) in hkTopic" :key="index">
                      <NuxtLink :to="item.path" :title="item.title">
                        {{ item.title }}
                      </NuxtLink>
                    </template>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="//www.ieduchina.com/topic/2025/sz/index.html" target="_blank"><span>国际教育论坛</span></a>
              <div class="box" style="padding-top: 12px;">
                <div class="box_lis" style="max-height: 486px;">
                  <div class="box_con center">
                    <template v-for="(item, index) in InternationalEducationForum" :key="index">
                      <NuxtLink :to="item.path" :title="item.title" rel="nofollow">
                        {{ item.title }}
                      </NuxtLink>
                    </template>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li class="parentMenu">
          <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
            <span>备考学习</span>
          </NuxtLink>
          <ul class="submenu">
            <li>
              <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                <span>官方考试</span>
              </NuxtLink>
              <div class="box">
                <div class="box_lis">
                  <div class="box_title">
                    入学考试
                  </div>
                  <div class="box_con">
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>MAP</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>CAT4</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>中数</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>英数</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>新加坡</span>
                    </NuxtLink>
                  </div>
                </div>
                <div class="box_lis">
                  <div class="box_title">
                    语言考试
                  </div>
                  <div class="box_con">
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>雅思</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>托福</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>多邻国</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>SAT</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>GRE</span>
                    </NuxtLink>
                  </div>
                </div>
                <div class="box_lis">
                  <div class="box_title">
                    国际考试
                  </div>
                  <div class="box_con">
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>A-LEVEL</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>IB考试</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>AP考试</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>DSE考试</span>
                    </NuxtLink>
                  </div>
                </div>
                <div class="box_lis">
                  <div class="box_title">
                    数学竞赛
                  </div>
                  <div class="box_con">
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>美国AMC</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>澳洲AMC</span>
                    </NuxtLink>
                    <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow">
                      <span>袋鼠数学竞赛</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/topic/2025/shengxue" rel="nofollow"><span>国际教育网升学中心</span></NuxtLink>
        </li>
        <li><a href="//www.ieduchina.com/service/aboutus.html" rel="nofollow"><span>关于我们</span></a></li>
      </ul>
    </div>
  </div>
</template>
<style lang="less">
.iedu-menu-wrap {
  width: 1280px;
  margin: 0 auto;
  height: 48px;

  .iedu-menu-box {
    background-color: #ffffff;
    width: 100%;
    height: 48px;
    top: 0;
    left: 0;
    z-index: 1000;

    .iedu-menu {
      width: 1280px;
      height: 48px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      li {
        cursor: pointer;
        line-height: 48px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;

        a {
          color: #303030;
          width: 100%;

          span {
            white-space: nowrap;
          }
        }

        .submenu {
          display: none;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          min-width: 100%;
          top: 48px;
          z-index: 800;
          background: #ffffff;
          box-shadow: 0px 2px 4px 0px rgba(104, 104, 104, 0.6);

          li {
            padding: 0 20px;
            line-height: 48px;
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            position: relative;

            a {
              width: 100%;
              height: 100%;
              color: #212121;
            }

            .box {
              display: none;
              max-height: 80vh;
              overflow-y: auto;
              position: absolute;
              left: 100%;
              top: 0;
              background: #fff;
              box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, .302);
              border-radius: 0px 0px 0px 0px;
              box-sizing: border-box;
              padding: 0 16px 0;

              .box_lis {
                border-bottom: solid 1px #cecece;

                .box_title {
                  text-align: left;
                  font-size: 16px;
                  font-weight: 500;
                  color: #333333;
                  line-height: 1;
                  padding-top: 14px;

                  &::before {
                    content: "";
                    display: inline-block;
                    width: 5px;
                    height: 18px;
                    background-color: #338eff;
                    vertical-align: -3px;
                    margin-right: 6px;
                  }
                }

                .box_con {
                  flex: 1;
                  flex-wrap: wrap;
                  display: flex;
                  padding-bottom: 12px;
                  padding-top: 10px;

                  a {
                    font-size: 16px;
                    font-weight: 400;
                    color: #666666;
                    display: block;
                    text-align: left;
                    white-space: nowrap;
                    line-height: 38px;

                    &.ing {
                      width: 100%
                    }

                    &:hover {
                      color: #338eff
                    }

                    &:nth-of-type(3n) {
                      width: 30%
                    }
                  }

                  &.center {
                    a {
                      text-align: center;
                      width: 100% !important;
                    }
                  }
                }

                &:last-of-type {
                  border-bottom: none;
                }
              }
            }

            &:hover {
              .box {
                display: block;
              }

              a {
                color: #338eff;
              }
            }
          }
        }

        &.parentMenu {
          position: relative;
          padding-right: 18px;

          &>a {
            span {
              position: relative;

              &::after {
                content: '';
                position: absolute;
                right: -16px;
                top: 0;
                width: 8px;
                height: 8px;
                border-style: solid;
                border-width: 0 2px 2px 0;
                transform: rotateZ(45deg);
              }
            }
          }
        }
      }
    }
  }
}
</style>