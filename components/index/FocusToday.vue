<script setup>
const hours = [
  {
    path: '//www.ieduchina.com/shanghai/education/202506/129051.html',
    title: '2025年上海美达菲学校学费及学校简介'
  },
  {
    path: '//www.ieduchina.com/hongkong/education/202506/129050.html',
    title: '弘立书院2025-2026学年学费及招生政策'
  },
  {
    path: '//www.ieduchina.com/chengdu/education/202506/129049.html',
    title: '2025成都双流区的国际学校汇总'
  },
  {
    path: '//www.ieduchina.com/shenzhen/education/202506/129044.html',
    title: '福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？'
  }
]
const focustoday = [
  {
    path: '//www.ieduchina.com/shenzhen/education/202506/129044.html',
    image: '//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg',
    title: '福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？',
    author: '选校砖家',
    authorImage: 'https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg',
    authorLink: '//www.ieduchina.com/home/4920.html',
    time: '19小时前',
  },
  {
    path: '//www.ieduchina.com/shenzhen/education/202506/129038.html',
    image: '//www.ieduchina.com/uploadfile/202506/f40220250605085038.jpg',
    title: '初中生把数理文史玩出花，福港艺林这场展览绝了！',
    author: '深圳市福港艺林学校',
    authorImage: 'https://www.ieduchina.com/uploadfile/gzh/202112/164031623738348.jpg',
    authorLink: '//www.ieduchina.com/home/9286.html',
    time: '19小时前',
  },
  {
    path: '//www.ieduchina.com/school/education/202506/129016.html',
    image: '//www.ieduchina.com/uploadfile/202506/f50820250605084005.jpg',
    title: 'Field Trip｜踏寻香江文脉，触摸历史温度：佛山ASJ中学部香港研学行',
    author: '佛山暨大港澳子弟学校',
    authorImage: 'https://www.ieduchina.com/uploadfile/toutiao/202306/1686633532124200.jpg',
    authorLink: '//www.ieduchina.com/home/14058.html',
    time: '19小时前',
  },
  {
    path: '//www.ieduchina.com/guangzhou/education/202506/129014.html',
    image: '//www.ieduchina.com/uploadfile/202506/f57520250605083924.jpg',
    title: '语言为桥·艺术作舟｜ASJ第四届紫荆花节暨语言艺术文化节圆满落幕',
    author: '广州暨大港澳子弟学校',
    authorImage: 'https://www.ieduchina.com/uploadfile/gzh/202110/163512691354531.jpg',
    authorLink: '//www.ieduchina.com/home/7064.html',
    time: '19小时前',
  },
  {
    path: '//www.ieduchina.com/school/education/202506/129009.html',
    image: '//www.ieduchina.com/uploadfile/202506/f58520250605083811.jpg',
    title: 'FLA学生说 | 李嘉伟：此心安处是吾乡',
    author: '未来领导力学校',
    authorImage: 'https://www.ieduchina.com/uploadfile/gzh/202305/168318054936425.jpg',
    authorLink: '//www.ieduchina.com/home/14007.html',
    time: '19小时前',
  },
  {
    path: '//www.ieduchina.com/guangzhou/education/202506/129001.html',
    image: '//www.ieduchina.com/uploadfile/202506/f60920250605083556.jpg',
    title: '省实中英国际课程校园生活精选问答',
    author: '省实IFPAD和省实A Level',
    authorImage: 'https://www.ieduchina.com/uploadfile/toutiao/202210/1665540381506177.jpg',
    authorLink: '//www.ieduchina.com/home/13626.html',
    time: '19小时前',
  }
]
const focustodayList = [
  {
    path: '//www.ieduchina.com/huodong/202506/2780.html',
    title: '2025荟同时装秀，邀您参加',
    time: '2025-06-06 18:30'
  },
  {
    path: '//www.ieduchina.com/huodong/202505/2749.html',
    title: '珠海英华6月7日招生说明会，邀您参加',
    time: '2025-06-07 09:30'
  },
  {
    path: '//www.ieduchina.com/huodong/202505/2753.html',
    title: '蓝湾未来领导力学校小学部6月7日校园开放日',
    time: '2025-06-07 09:30'
  },
  {
    path: '//www.ieduchina.com/huodong/202505/2768.html',
    title: '碧桂园十里银滩学校6月7日校园开放日',
    time: '2025-06-07 09:30'
  },
  {
    path: '//www.ieduchina.com/huodong/202505/2773.html',
    title: '佛山暨大港澳子弟学校6月7日校园开放日',
    time: '2025-06-07 08:30'
  },
  {
    path: '//www.ieduchina.com/huodong/202505/2777.html',
    title: '南宁哈罗礼德学校6月7日欢乐汇，邀您参加',
    time: '2025-06-07 09:00'
  },
  {
    path: '//www.ieduchina.com/huodong/202505/2756.html',
    title: '广州市斐特思学校6月7日校园开放日',
    time: '2025-06-07 09:30'
  },
  {
    path: '//www.ieduchina.com/huodong/202506/2781.html',
    title: '上海美达菲学校6月8日校园开放日',
    time: '2025-06-08 13:00'
  }
]
</script>
<template>
  <div class="focustoday">
    <div class="con">
      <div class="focustoday-title">
        <div class="left">
          <h2>今日聚焦</h2>
          <div class="hours24">
            <div class="hours24-title">
              24小时热闻
            </div>
            <div class="swiper-hours24">
              <div class="swiper-wrapper">
                <div v-for="(item, index) in hours" class="swiper-slide" :key="index">
                  <a :href="item.path">
                    <p>
                      <span>{{ index + 1 }}.</span>
                      {{ item.title }}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <h2>最新活动</h2>
          <div class="link">
            <a href="//www.ieduchina.com/huodong/">
              查看更多<span>>></span>
            </a>
          </div>
        </div>
      </div>
      <div class="focustoday-con">
        <ul class="focustoday-img">
          <li v-for="(item, index) in focustoday" :key="index">
            <div class="box">
              <a :href="item.path" target="_blank">
                <img :src="item.image" :alt="item.title" height="150">
                <p>{{ item.title }}</p>
              </a>
              <div class="author">
                <a :href="item.authorLink" target="_blank">
                  <img :src="item.authorImage" :alt="item.author" height="20">
                  {{ item.author }}
                </a>
                <span>{{ item.time }}</span>
              </div>
            </div>
          </li>
        </ul>
        <ul class="focustoday-list">
          <li v-for="(item, index) in focustodayList" :key="index">
            <a :href="item.path">{{ item.title }}</a>
            <p>开始时间：{{ item.time }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.focustoday {
  background-color: #f2f4f6;
  padding-top: 38px;

  .con {
    width: 1280px;
    margin: 0 auto;

    .focustoday-title {
      display: flex;
      height: 25px;
      line-height: 25px;
      overflow: hidden;
      justify-content: space-between;

      .left {
        display: flex;

        h2 {
          font-size: 24px;
          font-weight: bold;
          color: #000000;
          line-height: 25px;
        }

        .hours24 {
          margin-left: 20px;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          height: 25px;
          border-radius: 10px;

          .hours24-title {
            position: relative;
            z-index: 10;
            display: inline-block;
            font-size: 16px;
            font-weight: 400;
            color: #ffffff;
            text-align: center;
            width: 98px;
            height: 24px;
            background: #0d72ca;
            border-radius: 10px;
          }

          .swiper-hours24 {
            width: 626px;
            padding-left: 7px;
            overflow: hidden;
            margin-left: -10px;
            padding-left: 20px;
            border-radius: 20px;
            -webkit-box-sizing: content-box;
            box-sizing: content-box;

            a {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            p {
              height: 23px;
              line-height: 22px;
              font-size: 16px;
              font-weight: 400;
              color: #303030;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              display: inline-block;
              border: 1px solid #e5e5e5;
              background-color: #FFFFFF;
              margin-left: -30px;
              padding-left: 30px;
              padding-right: 10px;
              border-radius: 20px;
              max-width: 624px;
              -webkit-box-sizing: content-box;
              box-sizing: content-box;

              span {
                color: #fd8809;
                font-size: 16px;
                font-weight: 400;
                padding-right: 4px;
              }
            }
          }
        }
      }

      .right {
        width: 410px;
        display: flex;
        justify-content: space-between;

        h2 {
          font-size: 20px;
          color: #000000;
          line-height: 24px;
          font-weight: inherit;
        }

        .link {
          a {
            font-size: 13px;
            font-weight: 400;
            color: #0D72CA;

            span {
              margin-left: 4px;
            }
          }
        }
      }
    }

    .focustoday-con {
      display: flex;
      justify-content: space-between;
      margin-top: 13px;

      .focustoday-img {
        width: 850px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
          width: 270px;
          height: 260px;
          border-radius: 10px;
          background-color: #ffffff;
          margin-bottom: 20px;

          .box {
            width: 270px;
            height: 260px;
            border-radius: 10px;
            overflow: hidden;

            img {
              width: 270px;
              height: 150px;
              object-fit: cover;
              object-position: center;
            }

            p {
              padding: 8px 18px;
              font-size: 16px;
              font-weight: 400;
              color: #303030;
              line-height: 20px;
              height: 30px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              overflow: hidden;
              text-align: justify;
              -webkit-box-sizing: content-box;
              box-sizing: content-box;
            }

            .author {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
              margin-top: 24px;
              padding: 0 20px;
              line-height: 16px;

              a {
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                font-size: 16px;
                color: #333333;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                img {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  vertical-align: sub;
                  border-radius: 50%;
                  margin-right: 8px;
                  object-fit: cover;
                  object-position: center;
                }
              }

              span {
                font-size: 12px;
                color: #545454;
                padding-top: 2px;
                white-space: nowrap;
                padding-left: 10px;
              }
            }
          }
        }
      }

      .focustoday-list {
        width: 410px;
        height: 540px;
        border-radius: 8px;
        background-color: #fff;
        padding: 20px 14px 18px 43px;
        overflow: hidden;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        counter-reset: itemCounter;

        * {
          line-height: 1;
        }

        li {
          position: relative;
          margin: 21px 0 8px;
          counter-increment: itemCounter;

          &::before {
            content: "0" counter(itemCounter);
            position: absolute;
            left: -28px;
            top: 1px;
            width: 18px;
            height: 18px;
            background: #b8b8b8;
            border-radius: 2px;
            font-weight: 400;
            font-size: 12px;
            color: #fff;
            line-height: 18px;
            text-align: center
          }

          &:first-of-type {
            margin-top: 0;

            &:before {
              background-color: #e62d2d
            }
          }

          &:nth-of-type(2) {

            &:before {
              background-color: #ff5c3a
            }
          }

          &:nth-of-type(3) {

            &:before {
              background-color: #f8883b
            }
          }

          a {
            font-weight: bold;
            font-size: 16px;
            color: #333;
            line-height: 20px;
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden
          }

          p {
            font-weight: 400;
            font-size: 14px;
            color: #999;
            margin-top: 10px
          }
        }
      }
    }
  }
}
</style>
