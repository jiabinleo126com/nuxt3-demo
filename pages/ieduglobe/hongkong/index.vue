<script setup>
import { useHead } from 'nuxt/app';
import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() => import('~/components/ieduglobe/hongkong/Header.vue'));
const Footer = defineAsyncComponent(() => import('~/components/ieduglobe/hongkong/Footer.vue'));
const Active = defineAsyncComponent(() => import('~/components/ieduglobe/hongkong/Active.vue'));

useHead({
  bodyAttrs: {
    style: "background-color: #F3F3F7;"
  },
  meta: [
    {
      content: "text/html; charset=utf-8",
      httpEquiv: "Content-Type",
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

const kpm = [
  {
    title: "选择幼稚园指南",
    image: "//www.ieduchina.com/statics/xg/images/bd306830.png",
    href: "//www.ieduchina.com/hongkong/child.html",
    list: [
      {
        title: "Linda同你港|全能奥运选手背后的香港击剑教育",
        href: "//www.ieduchina.com/hongkong/child/202408/114994.html"
      },
      {
        title: "圣罗撒幼稚园2025-2026年度幼儿班（K1）招生详情",
        href: "//www.ieduchina.com/hongkong/child/202407/114695.html"
      },
      {
        title: "2024年合一堂单家传纪念幼稚园学费及招生要求",
        href: "//www.ieduchina.com/hongkong/child/202407/114694.html"
      },
      {
        title: "圣母无玷圣心幼稚园2024-25学年申请要求",
        href: "//www.ieduchina.com/hongkong/child/202407/114614.html"
      },
      {
        title: "2024年香港创价幼稚园学费及学校简介",
        href: "//www.ieduchina.com/hongkong/child/202407/114576.html"
      },
      {
        title: "2024年迦南幼稚园(九龙塘)学费一年多少？",
        href: "//www.ieduchina.com/hongkong/child/202407/114575.html"
      },
      {
        title: "香港幼稚园种类及学费介绍",
        href: "//www.ieduchina.com/hongkong/child/202407/114574.html"
      },
      {
        title: "内地赴港申请幼稚园，这8所热门学校",
        href: "//www.ieduchina.com/hongkong/child/202310/102384.html"
      },
      {
        title: "香港玛歌瑞特国际幼儿园学费一年多少？",
        href: "//www.ieduchina.com/hongkong/child/202306/97356.html"
      },
      {
        title: "香港玛歌瑞特国际幼儿园地址及学校简介",
        href: "//www.ieduchina.com/hongkong/child/202306/97272.html"
      },
      {
        title: "带您云体验！香港国际幼稚园的一天",
        href: "//www.ieduchina.com/hongkong/child/202306/96099.html"
      },
      {
        title: "玛歌瑞特三月小学联系",
        href: "//www.ieduchina.com/hongkong/child/202306/96098.html"
      }
    ]
  },
  {
    title: "升小选校攻略",
    image: "//www.ieduchina.com/statics/xg/images/916c4c67.png",
    href: "//www.ieduchina.com/hongkong/primary.html",
    list: [
      {
        title: "嘉诺撒圣方济各学校2025年插班生申请须知",
        href: "//www.ieduchina.com/hongkong/eleschool/202504/126934.html"
      },
      {
        title: "轩尼诗道官立小学2025-2026学年插班申请须知",
        href: "//www.ieduchina.com/hongkong/eleschool/202504/126880.html"
      },
      {
        title: "圣士提反书院附属小学2025-2026 年度二至六年级插班信息",
        href: "//www.ieduchina.com/hongkong/eleschool/202504/126826.html"
      },
      {
        title: "圣保罗书院小学2026至2027年度小一入学申请简介会",
        href: "//www.ieduchina.com/hongkong/eleschool/202504/126783.html"
      },
      {
        title: "圣保罗男女中学附属小学2025-2026 小一入学招生信息",
        href: "//www.ieduchina.com/hongkong/eleschool/202504/126743.html"
      },
      {
        title: "港大同学会小学2026-2027 年度小一入学申请须知",
        href: "//www.ieduchina.com/hongkong/eleschool/202504/126688.html"
      },
      {
        title: "苏浙小学好不好？苏浙小学简介",
        href: "//www.ieduchina.com/hongkong/eleschool/202504/126649.html"
      },
      {
        title: "北角官立小学学校简介",
        href: "//www.ieduchina.com/hongkong/eleschool/202503/126597.html"
      },
      {
        title: "香港培侨小学怎么样？培侨小学简介",
        href: "//www.ieduchina.com/hongkong/eleschool/202503/126511.html"
      },
      {
        title: "中华基督教会基湾小学2024-2025年度一至五年级插班生招生信息",
        href: "//www.ieduchina.com/hongkong/eleschool/202503/126462.html"
      },
      {
        title: "香港沪江小学学校简介及办学宗旨",
        href: "//www.ieduchina.com/hongkong/eleschool/202503/126399.html"
      },
      {
        title: "香港嘉诺撒学校怎么样？",
        href: "//www.ieduchina.com/hongkong/eleschool/202503/126345.html"
      }
    ]
  },
  {
    title: "升中选校策略",
    image: "//www.ieduchina.com/statics/xg/images/b565b198.png",
    href: "//www.ieduchina.com/hongkong/middle.html",
    list: [
      {
        title: "2025香港汉华中学插班入学申请须知",
        href: "//www.ieduchina.com/hongkong/midschool/202504/127760.html"
      },
      {
        title: "中华基金中学2025-2026学年插班入学须知",
        href: "//www.ieduchina.com/hongkong/midschool/202504/127535.html"
      },
      {
        title: "2025年福建中学学费及录取标准",
        href: "//www.ieduchina.com/hongkong/midschool/202504/127470.html"
      },
      {
        title: "九龙真光中学2025年插班生申请入学安排",
        href: "//www.ieduchina.com/hongkong/midschool/202504/127405.html"
      },
      {
        title: "2025沙田崇真中学招生要求介绍",
        href: "//www.ieduchina.com/hongkong/midschool/202504/127337.html"
      },
      {
        title: "玛利诺修院学校中二至中四2025-2026申请人须知",
        href: "//www.ieduchina.com/hongkong/midschool/202504/127049.html"
      },
      {
        title: "中西区圣安多尼学校简介",
        href: "//www.ieduchina.com/hongkong/midschool/202503/126207.html"
      },
      {
        title: "美国Top30、英国Top10、澳加Top3、荷兰Top3、香港Top3…三牛海外录取成果（2025阶段性汇总）",
        href: "//www.ieduchina.com/wuhan/midschool/202503/126041.html"
      },
      {
        title: "NHS普高部｜用中文考试！香港DSE到底适合谁？",
        href: "//www.ieduchina.com/school/midschool/202503/125810.html"
      },
      {
        title: "英皇书院2025-2026学年招生信息",
        href: "//www.ieduchina.com/hongkong/midschool/202502/125125.html"
      },
      {
        title: "香港田家炳中学2025-2026学年招生问答",
        href: "//www.ieduchina.com/hongkong/midschool/202502/124897.html"
      },
      {
        title: "保良局颜宝铃书院2025–2026学年招生简章",
        href: "//www.ieduchina.com/hongkong/midschool/202411/121626.html"
      }
    ]
  }
]
const io = [
  {
    href: "//www.ieduchina.com/hongkong/internation.html",
    image: "//www.ieduchina.com/statics/xg/images/fc86ea8e.png"
  },
  {
    href: "//www.ieduchina.com/hongkong/overseas.html",
    image: "//www.ieduchina.com/statics/xg/images/9ccf88fe.png"
  }
]
const hot = [
  {
    title: "一个月内最多阅览次数的网页",
    list: [
      { title: "香港汉基国际学校", href: "//schoollist.ieduchina.com/school/cis/" },
      { title: "香港弘立书院", href: "//schoollist.ieduchina.com/school/hlxy/" },
      { title: "沪江维多利亚学校", href: "//schoollist.ieduchina.com/school/Victoria/" },
      { title: "香港德瑞国际学校", href: "//schoollist.ieduchina.com/school/xgdrgjxx/" },
      { title: "香港墨尔文国际学校", href: "//schoollist.ieduchina.com/school/malverncollege/" },
      { title: "香港诺德安达国际学校", href: "//schoollist.ieduchina.com/school/naishk/" },
      { title: "香港德思齐加拿大国际学校", href: "//schoollist.ieduchina.com/school/xgdlyjnd/" },
      { title: "拔萃女书院", href: "//schoollist.ieduchina.com/school/dgs/" },
      { title: "香港基督教国际学校", href: "//schoollist.ieduchina.com/school/jdjgjxx/" },
      { title: "香港英皇佐治五世学校", href: "//schoollist.ieduchina.com/school/yhzzwsxx/" },
      { title: "香港培侨书院", href: "//schoollist.ieduchina.com/school/puikiucollege/" },
      { title: "香港思贝礼国际学校", href: "//schoollist.ieduchina.com/school/sblgxx/" },
      { title: "茵维特香港学校", href: "//schoollist.ieduchina.com/school/InvictusHK/" },
      { title: "香港学堂", href: "//schoollist.ieduchina.com/school/xgxt/" },
      { title: "香港培正小学", href: "//schoollist.ieduchina.com/school/pcpshk/" },
      { title: "王锦辉中小学", href: "//schoollist.ieduchina.com/school/hkbuas/" },
      { title: "基督教香港信义会心诚中学", href: "//schoollist.ieduchina.com/school/flss/" },
      { title: "香港树仁大学", href: "//schoollist.ieduchina.com/school/hksyu/" },
      { title: "香港大屿山国际学校", href: "//schoollist.ieduchina.com/school/dysgjxx/" },
      { title: "保良局林文灿英文小学", href: "//schoollist.ieduchina.com/school/plklmc/" },
      { title: "香港中文大学", href: "//schoollist.ieduchina.com/school/cuhk/" },
      { title: "香港西班牙学校", href: "//schoollist.ieduchina.com/school/spis/" },
      { title: "香港浸会大学", href: "//schoollist.ieduchina.com/school/hkbu/" }
    ]
  }, {
    title: "一个月内最热门的站内搜寻",
    list: [
      {
        title: "香港力迈学校",
        href: "//schoollist.ieduchina.com/school/limaihk/"
      },
      {
        title: "香港中文大学与上海交大双学位项目",
        href: "//schoollist.ieduchina.com/school/fintechssh/"
      },
      {
        title: "香港城市大学专业进修学院",
        href: "//schoollist.ieduchina.com/school/scopehk/"
      },
      {
        title: "香港理工大学专业进修学院",
        href: "//schoollist.ieduchina.com/school/speed/"
      },
      {
        title: "明爱社区书院",
        href: "//schoollist.ieduchina.com/school/cicehk/"
      },
      {
        title: "香港红十字会医院学校",
        href: "//schoollist.ieduchina.com/school/hshk/"
      },
      {
        title: "明爱乐恩学校",
        href: "//schoollist.ieduchina.com/school/cmtsjl/"
      },
      {
        title: "东湾莫罗瑞华学校",
        href: "//schoollist.ieduchina.com/school/twshk/"
      },
      {
        title: "明爱培立学校",
        href: "//schoollist.ieduchina.com/school/pelletier/"
      },
      {
        title: "香港扶幼会许仲绳纪念学校",
        href: "//schoollist.ieduchina.com/school/sbchcsms/"
      },
      {
        title: "香港扶幼会则仁中心学校",
        href: "//schoollist.ieduchina.com/school/cycshk/"
      },
      {
        title: "香港扶幼会盛德中心学校",
        href: "//schoollist.ieduchina.com/school/shingtak/"
      },
      {
        title: "玛利湾学校",
        href: "//schoollist.ieduchina.com/school/chschkx/"
      },
      {
        title: "香港青少年培育会陈南昌纪念学校",
        href: "//schoollist.ieduchina.com/school/hkjcc/"
      },
      {
        title: "匡智绍邦晨辉学校",
        href: "//schoollist.ieduchina.com/school/hcspms/"
      },
      {
        title: "灵实恩光学校",
        href: "//schoollist.ieduchina.com/school/sunnyside/"
      },
      {
        title: "保良局罗氏信托学校",
        href: "//schoollist.ieduchina.com/school/plklaws/"
      },
      {
        title: "保良局陈百强伉俪青衣学校",
        href: "//schoollist.ieduchina.com/school/plkcpktys/"
      },
      {
        title: "匡智松岭第三校",
        href: "//schoollist.ieduchina.com/school/hcp3/"
      },
      {
        title: "匡智松岭第二校",
        href: "//schoollist.ieduchina.com/school/hcp2/"
      },
      {
        title: "慈恩学校",
        href: "//schoollist.ieduchina.com/school/chiyun/"
      },
      {
        title: "香港心理卫生会–臻和学校",
        href: "//schoollist.ieduchina.com/school/mhahk/"
      }
    ]
  }
]

</script>

<template>
  <component :is="Header" active="首页" />
  <section>
    <div :class="$style.kpm">
      <ul>
        <li v-for="item in kpm">
          <a :href="item.href">
            <img :src="item.image" :alt="item.title"></a>
          <h3>{{ item.title }}</h3>
          <div :class="$style.lis">
            <a v-for="it in item.list" :href="it.href">{{ it.title }}</a>
          </div>
        </li>
      </ul>
    </div>
    <div :class="$style.io">
      <a v-for="item in io" :href="item.href"><img :src="item.image" alt=""></a>
    </div>
    <div :class="$style.bottom_2018886">
      <div :class="$style.hot_1683600683069">
        <ul>
          <li v-for="item in hot">
            <div :class="$style.wrap">
              <h3>{{ item.title }}</h3>
              <div :class="$style.lis">
                <a v-for="it in item.list" :href="it.href">{{ it.title }}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <component :is="Active" />
    </div>
  </section>
  <div :class="$style.form_1f8c60f5">
    <div :class="$style.box">
      <img src="https://www.ieduchina.com/statics/xg/images/8e599d7e.png" alt="">
      <div :class="$style.form_con">
        <img src="https://www.ieduchina.com/statics/xg/images/4b1cd002.png" :class="$style.close" />
        <form :class="$style.f8c60f5" action="/index.php?m=college&c=index&a=collegereg&dopost=reg" method="post">
          <input type="hidden" id="_href">
          <input type="hidden" :class="$style.mark" name="mark" value="国际教育网院校库PC版_香港学校" />
          <h3>登錄國際教育網</h3>
          <p>您有3次免費查看的機會，登錄即可查看詳情</p>
          <input type="text" name="name" _placeholder="請輸入孩子姓名" required placeholder="孩子姓名">
          <div :class="$style.select">
            <select name="grade" placeholder="請選擇在讀年級" required>
              <option value="">在讀年級</option>
              <option value="幼儿园">幼兒園</option>
              <option value="一年级">一年級</option>
              <option value="二年级">二年級</option>
              <option value="三年级">三年級</option>
              <option value="四年级">四年級</option>
              <option value="五年级">五年級</option>
              <option value="六年级">六年級</option>
              <option value="初一">初一</option>
              <option value="初二">初二</option>
              <option value="初三">初三</option>
              <option value="高一">高一</option>
              <option value="高二">高二</option>
              <option value="高三">高三</option>
              <option value="其他">其他</option>
              >

            </select>
          </div>
          <input type="text" name="mobile" _placeholder="請輸入手機號碼" required placeholder="手機號碼">
          <input type="text" name="email" _placeholder="請輸入電子郵箱" required placeholder="電子郵箱">
          <div :class="$style.code">
            <input type="text" name="emailcode" _placeholder="請輸入郵箱驗證碼" required placeholder="郵箱驗證碼">
            <button type="button" :class="$style.getcode">獲取驗證碼</button>
          </div>
          <div :class="$style.xy">
            <label>
              <input type="checkbox" name="xy" _placeholder="請閲讀並同意《國際教育網用户協議》" required value="1">
              <span></span>
              我已閲讀並同意
            </label>
            <a href="https://www.ieduchina.com/service/protocol.html" target="_blank">《國際教育網用户協議》</a>
          </div>
          <button :class="$style.f8c60f" type="submit">登錄</button>
        </form>
      </div>
    </div>
  </div>
  <component :is="Footer" />
</template>

<style lang="less" scoped module>
.bottom_2018886 {
  width: 1280px;
  margin: 25px auto 22px;
  display: flex;
  justify-content: space-between;
}

.kpm {
  padding-top: 26px;
}

.kpm ul {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.kpm ul li {
  width: 415px;
  overflow: hidden;
  background: #FFFFFF;
  border-radius: 10px;
}

.kpm ul li:nth-of-type(2) h3 {
  color: #757BF2;
}

.kpm ul li:nth-of-type(2) h3::before {
  background-color: #757BF2;
}

.kpm ul li:nth-of-type(2) .lis a {
  background-image: url(https://www.ieduchina.com/statics/xg/images/images/d8f2cdc0.png);
}

.kpm ul li:nth-of-type(3) h3 {
  color: #F2911E;
}

.kpm ul li:nth-of-type(3) h3::before {
  background-color: #F2911E;
}

.kpm ul li:nth-of-type(3) .lis a {
  background-image: url(https://www.ieduchina.com/statics/xg/images/images/af7969a8.png);
}

.kpm ul li a img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: top;
}

.kpm ul li h3 {
  padding-left: 15px;
  font-size: 24px;
  font-weight: 500;
  color: #0770D1;
  height: 24px;
  margin-top: 20px;
}

.kpm ul li h3::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 24px;
  background: #0770D1;
  margin-right: 10px;
  vertical-align: -4px;
}

.kpm ul li .lis {
  padding: 5px 0px 10px 15px;
  line-height: 1.42857143;
  font-size: 0;
}

.kpm ul li .lis a {
  display: inline-block;
  max-width: 100%;
  font-size: 15px;
  margin-right: 16px;
  font-weight: 400;
  color: #333333;
  margin-top: 14px;
  background: url(https://www.ieduchina.com/statics/xg/images/images/e47fed32.png) left center / 10px 13px no-repeat;
  padding-left: 15px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.kpm ul li .lis a:hover {
  color: #0770D1;
}

.io {
  width: 1280px;
  margin: 25px auto 0;
  display: flex;
  justify-content: space-between;
}

.io a img {
  width: 630px;
  height: 150px;
}

.hot_1683600683069 {
  width: 902px;
}

.hot_1683600683069 ul {
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.hot_1683600683069 ul li {
  width: 442px;
  box-sizing: border-box;
}

.hot_1683600683069 ul li .wrap {
  border-radius: 10px;
  background: #FFFFFF;
  padding-top: 20px;
  padding-bottom: 20px;
}

.hot_1683600683069 ul li .wrap h3 {
  padding-left: 15px;
  font-size: 24px;
  font-weight: 500;
  color: #0770D1;
  height: 24px;
}

.hot_1683600683069 ul li .wrap h3::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 24px;
  background: #0770D1;
  margin-right: 10px;
  vertical-align: -4px;
}

.hot_1683600683069 ul li .wrap .lis {
  padding: 5px 15px 0 15px;
  line-height: 1.42857143;
  font-size: 0;
}

.hot_1683600683069 ul li .wrap .lis a {
  display: inline-block;
  max-width: 100%;
  font-size: 15px;
  margin-right: 16px;
  font-weight: 400;
  color: #333333;
  margin-top: 15px;
  background: url(https://www.ieduchina.com/statics/xg/images/images/e47fed32.png) left center / 10px 13px no-repeat;
  padding-left: 15px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hot_1683600683069 ul li .wrap .lis a:hover {
  color: #0770D1;
}

.ad_0900 {
  position: fixed;
  font-size: 0;
  height: 100px;
  width: 100%;
  bottom: 0;
  z-index: 100;
  min-width: 1200px;
  background: #FFFFFF;
  box-shadow: 0px -5px 6px 1px rgba(103, 103, 103, 0.1608);
  text-align: center;
}

.ad_0900>.close_0914 {
  position: absolute;
  width: 80px;
  height: 40px;
  left: 0;
  top: -40px;
  background: #FFFFFF;
  box-shadow: 0px -5px 6px 1px rgba(103, 103, 103, 0.1608);
  border-radius: 13px 13px 0px 0px;
}

.ad_0900>.close_0914.up img {
  transform: rotateZ(180deg);
}

.ad_0900>.close_0914 img {
  width: 20px;
  height: 20px;
  padding: 15px 30px;
  box-sizing: content-box;
  cursor: pointer;
  background-color: white;
  border-radius: 13px;
}

.ad_0900>a {
  position: relative;
  display: inline-block;
}

.ad_0900>a .close_0914 {
  position: absolute;
  width: 36px;
  height: 36px;
  z-index: 10;
  right: 0;
  top: 0;
  pointer-events: all;
}

.ad_0900>a .close_0914 img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 8px;
  box-sizing: content-box;
}

.ad_0900>a>img {
  width: 1280px;
  height: 100px;
  object-fit: contain;
  object-position: bottom;
}

.form_1f8c60f5 {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  display: none;
  justify-content: center;
  align-items: center
}

.form_1f8c60f5 * {
  box-sizing: border-box;
  -moz-box-sizing: border-box
}

.form_1f8c60f5.show {
  display: flex
}

.form_1f8c60f5 .box {
  width: 720px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  overflow: hidden
}

.form_1f8c60f5 .box>img {
  height: 500px
}

.form_1f8c60f5 .box .form_con {
  position: relative;
  flex: 1;
  background: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  padding: 30px 0
}

.form_1f8c60f5 .box .form_con .close {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  padding: 20px;
  width: 15px;
  height: 15px;
  box-sizing: content-box;
  cursor: pointer
}

.form_1f8c60f5 .box .form_con form {
  width: 325px
}

.form_1f8c60f5 .box .form_con form h3 {
  font-weight: bold;
  font-size: 24px;
  color: #0770d1
}

.form_1f8c60f5 .box .form_con form p {
  font-weight: 400;
  font-size: 14px;
  color: #333;
  padding: 15px 0 10px
}

.form_1f8c60f5 .box .form_con form input {
  width: 325px;
  height: 42px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0 15px;
  margin-top: 15px;
  font-weight: 400;
  font-size: 16px;
  color: #666
}

.form_1f8c60f5 .box .form_con form .select select {
  width: 325px;
  height: 42px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0 15px;
  margin-top: 15px;
  appearance: none;
  font-weight: 400;
  font-size: 16px;
  color: #666;
  outline: none
}

.form_1f8c60f5 .box .form_con form .code {
  display: flex;
  justify-content: space-between;
  width: 325px;
  margin-top: 15px
}

.form_1f8c60f5 .box .form_con form .code input {
  flex: 1;
  margin-top: 0;
  width: 0;
  margin-right: 15px
}

.form_1f8c60f5 .box .form_con form .code button {
  width: 115px;
  height: 42px;
  background: #0770d1;
  border-radius: 4px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  cursor: pointer
}

.form_1f8c60f5 .box .form_con form .code button[disabled] {
  opacity: .5
}

.form_1f8c60f5 .box .form_con form .xy {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  padding: 20px 0
}

.form_1f8c60f5 .box .form_con form .xy label {
  color: #666;
  margin-right: 2px;
  cursor: pointer
}

.form_1f8c60f5 .box .form_con form .xy label input {
  width: 14px;
  height: 14px;
  margin-top: 0;
  display: none
}

.form_1f8c60f5 .box .form_con form .xy label input+span {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 7px;
  background: url(https://www.ieduchina.com/statics/xg/images/images/f0376074.png) center/contain no-repeat;
  vertical-align: -2px
}

.form_1f8c60f5 .box .form_con form .xy label input:checked+span {
  background-image: url(https://www.ieduchina.com/statics/xg/images/images/2489a8be.png)
}

.form_1f8c60f5 .box .form_con form .xy a {
  color: #0770d1
}

.form_1f8c60f5 .box .form_con form>button {
  width: 325px;
  height: 42px;
  background: #0770d1;
  border-radius: 4px;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer
}

@keyframes ans {
  0% {
    top: 62px;
    opacity: 0
  }

  100% {
    top: 60px;
    opacity: 1
  }
}

.table-links {
  font-size: 14px;
  font-weight: 400;
  min-width: 70px;
  color: #fff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  position: relative;
  cursor: pointer
}

.table-links a {
  font-size: 14px;
  font-weight: 400;
  color: #fff
}

.table-links:hover ul {
  animation: table-links .3s ease-in-out;
  display: block;
  opacity: 1
}

.table-links img {
  width: 11px;
  margin-left: 3px;
  vertical-align: 0
}

.table-links ul {
  display: none;
  opacity: 0;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background: #0770d1
}

.table-links ul li {
  text-align: left;
  padding: 0 15px;
  line-height: 36px;
  height: 36px;
  text-align: center
}

.table-links ul li:hover a,
.table-links ul li.active a {
  color: #fff834
}

.table-links ul li a {
  white-space: nowrap;
  line-height: 36px;
  font-weight: 400;
  font-size: 14px;
  color: #fff
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