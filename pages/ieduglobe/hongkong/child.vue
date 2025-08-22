<script setup>
import { useHead } from 'nuxt/app';
import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() => import('~/components/ieduglobe/hongkong/Header.vue'));
const Footer = defineAsyncComponent(() => import('~/components/ieduglobe/hongkong/Footer.vue'));
const Active = defineAsyncComponent(() => import('~/components/ieduglobe/hongkong/Active.vue'));

useHead({
  bodyAttrs: {
    style: 'background-color: #F3F3F7;'
  },
  meta: [
    {
      content: "text/html; charset=utf-8",
      httpEquiv: "Content-Type"
    },
    {
      content: "IE=Edge,chrome=1",
      httpEquiv: "X-UA-Compatible"
    },
    {
      content: "no-transform",
      httpEquiv: "Cache-Control"
    },
    {
      content: "no-siteapp",
      httpEquiv: "Cache-Control"
    },
    {
      content: "no-cache",
      httpEquiv: "Cache-Control"
    },
    {
      content: "form-action 'self' *.ieduchina.com;",
      httpEquiv: "Content-Security-Policy"
    },
    {
      content: "webkit",
      name: "renderer"
    },
    {
      name: "keywords",
      httpEquiv: "香港國際學校,香港學校,香港中小學"
    },
    {
      name: "description",
      httpEquiv: "國際教育網是一站式香港國際學校升學資訊平臺,提供幼稚園、小學、中學、大學及海外升學的各方面擇校指南,讓家長們全面了解香港中小學的教育現況."
    }
  ],
  title: "香港国际学校-香港学校升学-香港中小学择校指南 - 国际教育网",
  link: [
    {
      rel: "alternate",
      media: "only screen and(max-width:640px)",
      href: "//m.ieduchina.com/hongkong/"
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: "//www.ieduchina.com/statics/common/img/favicon.ico"
    },
    {
      rel: "stylesheet",
      href: "//www.ieduchina.com/statics/common/css/swiper.min.css"
    },
    {
      rel: "stylesheet",
      href: "//www.ieduchina.com/statics/js/skin/layer.css"
    },
    {
      rel: "stylesheet",
      href: "//www.ieduchina.com/statics/xg/css/common.css"
    }
  ],
  script: [
    {
      src: "//www.ieduchina.com/statics/common/js/jquery-1.8.0.min.js",
      type: "text/javascript"
    },
    {
      src: "//www.ieduchina.com/statics/js/main.js",
      type: "text/javascript"
    },
    {
      src: "//www.ieduchina.com/statics/js/layer.js",
      type: "text/javascript"
    },
    {
      src: "//www.ieduchina.com/statics/common/js/swiper.min.js",
      type: "text/javascript"
    }, {
      src: "//www.ieduchina.com/statics/xg/js/index.js",
      type: "text/javascript"
      // }, {
      //   src: "//www.ieduchina.com/statics/common/js/hk2s1.js",
      //   type: "text/javascript"
      // }, {
      //   src: "//www.ieduchina.com/statics/js/foot.js",
      //   type: "text/javascript"
    }, {
      src: "//www.ieduchina.com/statics/xg/js/form.js",
      type: "text/javascript"
    },
    {
      innerHTML: `
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|OpenHarmony/i.test(navigator.userAgent)) {
      window.location.href = "//m.ieduchina.com/hongkong/";
    }
    `
    }
  ],
})

</script>
<template>
  <component :is="Header" active="幼稚园" />
  <section :class="$style.section">
    <main>
      <div :class="$style.school">
        <h3 :class="$style.title">全方位搜寻 全港幼儿学校</h3>
        <form action="" method="GET" :class="$style.form">
          <div>
            <select name="city">
              <option value="">地区</option>
              <option value="515">中西区</option>
              <option value="516">东区</option>
              <option value="517">南区</option>
              <option value="518">湾仔区</option>
              <option value="519">九龙城区</option>
              <option value="520">观塘区</option>
              <option value="521">深水埗区</option>
              <option value="522">黄大仙区</option>
              <option value="523">油尖旺区</option>
              <option value="524">离岛区</option>
              <option value="525">葵青区</option>
              <option value="526">北区</option>
              <option value="527">西贡区</option>
              <option value="528">沙田区</option>
              <option value="529">大埔区</option>
              <option value="530">荃湾区</option>
              <option value="531">屯门区</option>
              <option value="532">元朗区</option>
            </select>
          </div>
          <div>
            <select name="nature">
              <option value="">类别</option>
              <option value="20">公办专科(副学士)</option>
              <option value="3">私立学校</option>
              <option value="21">民办专科(副学士)</option>
              <option value="22">非本地学位(港外合办大学)</option>
              <option value="12">其他学院</option>
              <option value="2">民办学校</option>
              <option value="4">中外合办</option>
              <option value="40">港外合办</option>
              <option value="5">外籍人员子女学校</option>
              <option value="6">官立学校</option>
              <option value="7">直资学校</option>
              <option value="8">资助学校</option>
              <option value="9">港人子弟学校</option>
              <option value="10">国际学校</option>
              <option value="11">非牟利</option>
              <option value="41">特殊学校</option>
              <option value="42">新外合办</option>
            </select>
          </div>
          <div>
            <select name="tx">
              <option value="">课程体系</option>
              <option value="112">香港DSE</option>
              <option value="101">IB</option>
              <option value="102">AP</option>
              <option value="103">Alevel</option>
              <option value="111">IGCSE</option>
              <option value="104">美式</option>
              <option value="105">英式</option>
              <option value="115">港式</option>
              <option value="106">加拿大</option>
              <option value="107">澳大利亚</option>
              <option value="108">双语国际</option>
              <option value="113">国际艺术</option>
              <option value="120">联考</option>
              <option value="121">法国</option>
              <option value="122">德国</option>
              <option value="123">日本</option>
              <option value="124">韩国</option>
              <option value="109">其他</option>
              <option value="125">普高</option>
              <option value="126">高复</option>
            </select>
          </div>
          <div>
            <input name="searchkey" value="" type="text" placeholder="幼儿园名称">
            <button type="submit">搜索</button>
          </div>
        </form>
        <table :class="$style.table">
          <tbody>
            <tr>
              <td>幼稚园名称</td>
              <td>
                <div :class="$style.tablelinks">
                  <a href="/hongkong/child.html?nature=0&city=0">地区</a>
                  <img src="//www.ieduchina.com/statics/xg/images/e74729ad.png" alt="">
                  <ul>
                    <li>
                      <a href="/hongkong/child.html?city=515&nature=0">中西区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=516&nature=0">东区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=517&nature=0">南区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=518&nature=0">湾仔区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=519&nature=0">九龙城区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=520&nature=0">观塘区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=521&nature=0">深水埗区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=522&nature=0">黄大仙区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=523&nature=0">油尖旺区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=524&nature=0">离岛区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=525&nature=0">葵青区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=526&nature=0">北区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=527&nature=0">西贡区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=528&nature=0">沙田区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=529&nature=0">大埔区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=530&nature=0">荃湾区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=531&nature=0">屯门区</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?city=532&nature=0">元朗区</a>
                    </li>
                  </ul>
                </div>
              </td>
              <td>
                <div :class="$style.tablelinks">
                  <a href="/hongkong/child.html?nature=0&city=0">类别</a>
                  <img src="//www.ieduchina.com/statics/xg/images/e74729ad.png" alt="">
                  <ul>
                    <li>
                      <a href="/hongkong/child.html?nature=20&city=0">公办专科(副学士)</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=3&city=0">私立学校</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=21&city=0">民办专科(副学士)</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=22&city=0">非本地学位(港外合办大学)</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=12&city=0">其他学院</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=2&city=0">民办学校</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=4&city=0">中外合办</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=40&city=0">港外合办</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=5&city=0">外籍人员子女学校</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=6&city=0">官立学校</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=7&city=0">直资学校</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=8&city=0">资助学校</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=9&city=0">港人子弟学校</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=10&city=0">国际学校</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=11&city=0">非牟利</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=41&city=0">特殊学校</a>
                    </li>
                    <li>
                      <a href="/hongkong/child.html?nature=42&city=0">新外合办</a>
                    </li>
                  </ul>
                </div>
              </td>
              <td>学费</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/hlgjxx/">香港哈罗国际学校</a>
              </td>
              <td>屯门区</td>
              <td>国际学校</td>
              <td>16.91-22.99万港币</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/xgqlxx/">香港启历学校</a>
              </td>
              <td>南区</td>
              <td>国际学校</td>
              <td>19.89-25.44万</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/xjpgjxx/">香港新加坡国际学校</a>
              </td>
              <td>南区</td>
              <td>国际学校</td>
              <td>9.9-24.5万港币</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/xgdrgjxx/">香港德瑞国际学校</a>
              </td>
              <td>中西区</td>
              <td>国际学校</td>
              <td>18.94-24.68万港币</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/xgazgjxx/">香港澳洲国际学校</a>
              </td>
              <td>九龙城区</td>
              <td>国际学校</td>
              <td>14.88-25.28万港币</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/cis/">香港汉基国际学校</a>
              </td>
              <td>东区</td>
              <td>国际学校</td>
              <td>20.62-32.71万港币</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/xggjxx/">香港国际学校</a>
              </td>
              <td>南区</td>
              <td>国际学校</td>
              <td>24.78-28.63万港币</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/xgjndgjxx/">香港加拿大国际学校</a>
              </td>
              <td>南区</td>
              <td>国际学校</td>
              <td>13.2-23.84万港币</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/xgmggjxx/">香港美国国际学校</a>
              </td>
              <td>九龙城区</td>
              <td>外籍人员子女学校</td>
              <td>9.5-17.2万港元/年</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/szgxgjb/">香港苏浙公学国际部</a>
              </td>
              <td>东区</td>
              <td>国际学校</td>
              <td>8.24-12.5万</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/yzgjxx/">香港耀中国际学校</a>
              </td>
              <td>九龙城区</td>
              <td>外籍人员子女学校</td>
              <td>57,959-258,951港币</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/sblgxx/">香港思贝礼国际学校</a>
              </td>
              <td>西贡区</td>
              <td>国际学校</td>
              <td>10.76-20.12万</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/magartedu/">瑪歌瑞特國際幼稚園暨幼兒園</a>
              </td>
              <td>九龙城区</td>
              <td>私立学校</td>
              <td>6,000~14,000港元/月</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/xghzxx/">香港弘志学校</a>
              </td>
              <td>离岛区</td>
              <td>国际学校</td>
              <td>7-12万</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/xggjmtsl/">香港国际蒙特梭利学校</a>
              </td>
              <td>离岛区</td>
              <td>国际学校</td>
              <td>9-15万</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/xggjxy/">康乐园国际学校</a>
              </td>
              <td>大埔区</td>
              <td>国际学校</td>
              <td>8.1-14.1万港币</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/jsdgjxx/">香港京斯敦国际学校</a>
              </td>
              <td>九龙城区</td>
              <td>国际学校</td>
              <td>6-16万港币</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/dysgjxx/">香港大屿山国际学校</a>
              </td>
              <td>离岛区</td>
              <td>外籍人员子女学校</td>
              <td>7-9万</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/nwgjxx/">香港挪威国际学校</a>
              </td>
              <td>大埔区</td>
              <td>外籍人员子女学校</td>
              <td>7-11万</td>
            </tr>
            <tr>
              <td>
                <a href="//schoollist.ieduchina.com/school/mtslgjxx/">香港蒙特梭利国际学校</a>
              </td>
              <td>南区</td>
              <td>外籍人员子女学校</td>
              <td>3-19万</td>
            </tr>
          </tbody>
        </table>
        <div :class="$style.pages">
          <a href="//www.ieduchina.com/hongkong/child.html?page=0">上一页</a>
          <span>1</span>
          <a href="//www.ieduchina.com/hongkong/child.html?page=2">2</a>
          <a href="//www.ieduchina.com/hongkong/child.html?page=3">3</a>
          <a href="//www.ieduchina.com/hongkong/child.html?page=4">4</a>
          <a href="//www.ieduchina.com/hongkong/child.html?page=5">5</a>
          <a href="//www.ieduchina.com/hongkong/child.html?page=6">6</a>
          <a href="//www.ieduchina.com/hongkong/child.html?page=7">7</a>
          <a href="//www.ieduchina.com/hongkong/child.html?page=8">8</a>
          <a href="//www.ieduchina.com/hongkong/child.html?page=9">9</a>
          <a href="//www.ieduchina.com/hongkong/child.html?page=10">10</a>
          ..<a href="//www.ieduchina.com/hongkong/child.html?page=15">15</a>
          <a href="//www.ieduchina.com/hongkong/child.html?page=2">下一页</a>
        </div>
      </div>
      <div :class="$style.gaikuang">
        <h3 :class="$style.title">香港幼稚園教育概況</h3>
        <div :class="$style.con">
          <img src="//www.ieduchina.com/statics/xg/images/ec8e11f7.png" alt="香港幼稚園教育概況">
          <p>香港的幼稚園教育雖非強制性，但在二零二一至二二學年，本地三至五歲兒童幾乎全部就讀幼稚園，人數約為 156,000
            人。自二零一七至一八年起，參與幼稚園教育計劃的本地非牟利幼稚園均可獲足夠資助，為所有三至六歲的合資格兒童提供半日制優質幼稚園教育服務。政府通過多項支援措施提升幼稚園教育的質素。在二零二一至二二年度，全港約有
            1,040 所幼稚園，當中合資格參加及已參加計劃的幼稚園分別約有 790 所及 762 所。</p>
        </div>
      </div>
      <div :class="$style.list">
        <h3 :class="$style.title">瀏覽不同地區的幼稚園</h3>
        <div :class="$style.lis">
          <a href="?city=515">中西区（25）</a>
          <a href="?city=516">东区（24）</a>
          <a href="?city=517">南区（19）</a>
          <a href="?city=518">湾仔区（13）</a>
          <a href="?city=519">九龙城区（34）</a>
          <a href="?city=520">观塘区（16）</a>
          <a href="?city=521">深水埗区（17）</a>
          <a href="?city=522">黄大仙区（5）</a>
          <a href="?city=523">油尖旺区（10）</a>
          <a href="?city=524">离岛区（9）</a>
          <a href="?city=525">葵青区（9）</a>
          <a href="?city=526">北区（10）</a>
          <a href="?city=527">西贡区（21）</a>
          <a href="?city=528">沙田区（18）</a>
          <a href="?city=529">大埔区（14）</a>
          <a href="?city=530">荃湾区（11）</a>
          <a href="?city=531">屯门区（10）</a>
          <a href="?city=532">元朗区（21）</a>
        </div>
      </div>
    </main>
    <aside>
      <a href="//www.ieduchina.com/hk/" rel="nofollow" :class="$style.ad">
        <img src="//www.ieduchina.com/statics/xg/images/2f0ae22f.png" alt="香港升学">
      </a>

      <component :is="Active" />
      <div :class="$style.zhinan">
        <h3>選擇幼稚園指南</h3>
        <ul>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202408/114994.html">Linda同你港|全能奥运选手背后的香港击剑教育</a>
          </li>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202407/114695.html">圣罗撒幼稚园2025-2026年度幼儿班（K1）招生详情</a>
          </li>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202407/114694.html">2024年合一堂单家传纪念幼稚园学费及招生要求</a>
          </li>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202407/114614.html">圣母无玷圣心幼稚园2024-25学年申请要求</a>
          </li>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202407/114576.html">2024年香港创价幼稚园学费及学校简介</a>
          </li>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202407/114575.html">2024年迦南幼稚园(九龙塘)学费一年多少？</a>
          </li>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202407/114574.html">香港幼稚园种类及学费介绍</a>
          </li>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202310/102384.html">内地赴港申请幼稚园，这8所热门学校</a>
          </li>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202306/97356.html">香港玛歌瑞特国际幼儿园学费一年多少？</a>
          </li>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202306/97272.html">香港玛歌瑞特国际幼儿园地址及学校简介</a>
          </li>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202306/96099.html">带您云体验！香港国际幼稚园的一天</a>
          </li>
          <li>
            <a href="//www.ieduchina.com/hongkong/child/202306/96098.html">玛歌瑞特三月小学联系</a>
          </li>
        </ul>
      </div>
    </aside>
  </section>
  <component :is="Footer" />
</template>
<style lang="less" module>
h3.title {
  font-size: 24px;
  font-weight: 500;
  color: #0770D1;
  height: 24px;

  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 24px;
    background: #0770D1;
    margin-right: 10px;
    vertical-align: -4px;
  }
}

section {
  width: 1280px;
  margin: 0 auto 50px;
  display: flex;
  justify-content: space-between;

  main {
    width: 900px;

    .school {
      width: 900px;
      background: #FFFFFF;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 20px;
      margin-top: 30px;

      .form {
        justify-content: space-between;
        margin: 30px 0;
        display: flex;

        &>div {
          position: relative;
          flex: 1;
          margin-left: 20px;
          background: #FFFFFF;
          border-radius: 4px;
          border: 1px solid #BFBFBF;

          &:first-of-type {
            margin-left: 0;
          }

          &:nth-of-type(4)::after {
            content: initial;
          }

          &::after {
            position: absolute;
            content: "";
            right: 11px;
            top: 10px;
            z-index: 10;
            pointer-events: none;
            width: 0;
            height: 0;
            border-width: 0 8px 8px 0;
            border-color: transparent #b1b1b1 transparent transparent;
            border-style: solid;
            transform: rotateZ(135deg);
          }

          select,
          input {
            height: 35px;
            width: 100%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0 10px;
            border: none;
            border-radius: 4px;
            outline: none;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            overflow: hidden;
            font-size: 14px;
            font-weight: 400;
            color: #333333;
          }

          input {
            padding-right: 80px;

            &:placeholder {
              color: #999999;
              font-size: 14px;
              font-weight: 400;
            }
          }

          button {
            position: absolute;
            right: 0;
            top: 0;
            width: 69px;
            height: 35px;
            background: #0770D1;
            border-radius: 4px;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            color: #FFFFFF;
          }
        }
      }

      .table {
        width: 100%;
        text-align: center;

        tbody {
          tr {
            height: 40px;
            background: #FFFFFF;
            line-height: 40px;

            td {
              font-size: 14px;
              font-weight: 400;
              color: #333333;
              min-width: 70px;

              &:first-of-type {
                color: #0770D1;

                a {
                  color: #0770D1;
                }
              }
            }

            &:first-of-type {
              background: #0770D1;

              td {
                color: white;

                &:first-of-type {
                  color: white;
                }
              }
            }

            &:nth-of-type(even) {
              background-color: #F8F8F8;
            }
          }
        }
      }

      .pages {
        text-align: center;
        margin: 30px auto 10px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        span {
          height: 35px;
          background: #338eff;
          border-radius: 2px;
          line-height: 35px;
          font-size: 14px;
          letter-spacing: -1px;
          border: 1px solid #338eff;
          display: inline-block;
          padding: 0 10px;
          color: #fff
        }

        a {
          height: 35px;
          border: 1px solid #ebebeb;
          border-radius: 2px;
          padding: 0 10px;
          color: #999;
          line-height: 35px;
          font-size: 14px;
          letter-spacing: -1px;
          display: inline-block;
          background-color: #fff;

          &:hover {
            background: #f1f1f1;
            color: #000;
            text-decoration: none
          }
        }
      }
    }

    .gaikuang {
      width: 900px;
      background: #FFFFFF;
      border-radius: 10px;
      margin-top: 20px;
      padding: 20px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;

      .con {
        padding-top: 20px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;

        img {
          width: 163px;
          height: 110px;
          -o-object-fit: cover;
          object-fit: cover;
          -o-object-position: center;
          object-position: center;
          margin-right: 20px;
        }

        p {
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          line-height: 22px;
          margin-top: -3px;
          text-align: justify;
        }
      }
    }
  }
}



.list {
  width: 900px;
  background: #FFFFFF;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-right: 0;
}

.list .lis {
  margin-top: 5px;
}

.list .lis a {
  background: url(https://www.ieduchina.com/statics/xg/images/e47fed32.png) left center / 10px 13px no-repeat;
  padding-left: 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  margin-right: 30px;
  margin-top: 15px;
  display: inline-block;
}

.list .lis a:hover {
  color: #0770D1;
}

aside {
  width: 360px;
  margin-top: 30px;

  .ad {
    width: 360px;
    margin-bottom: 20px;
    display: block;

    img {
      width: 360px;
      cursor: pointer;
    }
  }
}

aside {
  .zhinan {
    background: #FFFFFF;
    border-radius: 10px;
    margin-top: 20px;
    padding: 20px 20px 0 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    h3 {
      font-size: 20px;
      font-weight: 500;
      color: #0770D1;
      height: 20px;

      &::before {
        content: "";
        display: inline-block;
        width: 4px;
        height: 20px;
        background: #0770D1;
        margin-right: 10px;
        vertical-align: -4px;
      }
    }

    ul {
      margin-top: 5px;

      li {
        height: 46px;
        line-height: 46px;
        border-bottom: solid 1px #DEDEDE;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:last-of-type {
          border-bottom: none;
        }

        a {
          font-size: 16px;
          font-weight: 400;
          color: #666666;
          padding-left: 14px;

          &:hover {
            color: #0770D1;
          }
        }
      }
    }
  }
}

.tablelinks {
  font-size: 14px;
  font-weight: 400;
  min-width: 70px;
  color: #fff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  position: relative;
  cursor: pointer;

  a {
    font-size: 14px;
    font-weight: 400;
    color: #fff
  }

  ul {
    display: none;
    opacity: 0;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    background: #0770d1;

    li {
      text-align: left;
      padding: 0 15px;
      line-height: 36px;
      height: 36px;
      text-align: center;

      a {
        white-space: nowrap;
        line-height: 36px;
        font-weight: 400;
        font-size: 14px;
        color: #fff
      }

      &:hover,
      &.active {
        a {
          color: #fff834
        }
      }
    }
  }

  &:hover {
    ul {
      animation: table-links .3s ease-in-out;
      display: block;
      opacity: 1
    }
  }

  img {
    width: 11px;
    margin-left: 3px;
    vertical-align: 0
  }
}

@keyframes table-links {
  0% {
    top: 42px;
    opacity: 0
  }

  100% {
    top: 40px;
    opacity: 1
  }
}
</style>