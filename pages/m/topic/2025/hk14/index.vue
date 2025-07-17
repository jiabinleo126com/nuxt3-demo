<script setup>
import { onMounted, defineAsyncComponent } from 'vue'
import BannerData from '~/assets/m/topic/2025/hk14/750.png'
import schoolLogo1 from '~/assets/topic/2025/hk14/school/组 961@1x.png'
import schoolLogo2 from '~/assets/topic/2025/hk14/school/组 972@1x.png'
import schoolLogo3 from '~/assets/topic/2025/hk14/school/组 974@1x.png'
import schoolLogo4 from '~/assets/topic/2025/hk14/school/组 975@1x.png'
import schoolLogo5 from '~/assets/topic/2025/hk14/school/组 976@1x.png'
import schoolLogo6 from '~/assets/topic/2025/hk14/school/组 977@1x.png'
import schoolLogo7 from '~/assets/topic/2025/hk14/school/组 978@1x.png'
import schoolLogo8 from '~/assets/topic/2025/hk14/school/组 979@1x.png'
import school1Image1 from '~/assets/topic/2025/hk14/640.webp'
import school1Image2 from '~/assets/topic/2025/hk14/640 (1).webp'
import school1Image3 from '~/assets/topic/2025/hk14/640 (2).webp'
import school1Image4 from '~/assets/topic/2025/hk14/640 (3).webp'
import school2Image1 from '~/assets/topic/2025/hk14/640 (4).webp'
import school2Image2 from '~/assets/topic/2025/hk14/640 (5).webp'
import school2Image3 from '~/assets/topic/2025/hk14/640 (6).webp'
import school2Image4 from '~/assets/topic/2025/hk14/640 (7).webp'
import school3Image1 from '~/assets/topic/2025/hk14/640 (8).webp'
import school3Image2 from '~/assets/topic/2025/hk14/640 (9).webp'
import school3Image3 from '~/assets/topic/2025/hk14/640 (10).webp'
import school3Image4 from '~/assets/topic/2025/hk14/640 (11).webp'
import school4Image1 from '~/assets/topic/2025/hk14/640 (12).webp'
import school4Image2 from '~/assets/topic/2025/hk14/640 (13).webp'
import school4Image3 from '~/assets/topic/2025/hk14/640 (14).webp'
import school4Image4 from '~/assets/topic/2025/hk14/640 (15).webp'
import school5Image1 from '~/assets/topic/2025/hk14/640 (16).webp'
import school5Image2 from '~/assets/topic/2025/hk14/640 (17).webp'
import school5Image3 from '~/assets/topic/2025/hk14/640 (18).webp'
import school5Image4 from '~/assets/topic/2025/hk14/640 (19).webp'
import school6Image1 from '~/assets/topic/2025/hk14/640 (20).webp'
import school6Image2 from '~/assets/topic/2025/hk14/640 (21).webp'
import school6Image3 from '~/assets/topic/2025/hk14/640 (22).webp'
import school6Image4 from '~/assets/topic/2025/hk14/640 (23).webp'
import school7Image1 from '~/assets/topic/2025/hk14/640 (24).webp'
import school7Image2 from '~/assets/topic/2025/hk14/640 (25).webp'
import school7Image3 from '~/assets/topic/2025/hk14/640 (26).webp'
import school7Image4 from '~/assets/topic/2025/hk14/640 (27).webp'
import school8Image1 from '~/assets/topic/2025/hk14/640 (28).webp'
import school8Image2 from '~/assets/topic/2025/hk14/640 (29).webp'
import school8Image3 from '~/assets/topic/2025/hk14/640 (30).webp'
import school8Image4 from '~/assets/topic/2025/hk14/640 (31).webp'
import iconImage from '~/assets/topic/2025/hk14/800.png'
import images1 from '/assets/topic/2025/hk14/320/1.jpg'
import images2 from '/assets/topic/2025/hk14/320/2.jpg'
import images3 from '/assets/topic/2025/hk14/320/3.jpg'
import images4 from '/assets/topic/2025/hk14/320/4.jpg'
import images5 from '/assets/topic/2025/hk14/320/5.jpg'
import images6 from '/assets/topic/2025/hk14/320/6.jpg'
import images7 from '/assets/topic/2025/hk14/320/7.jpg'
import images8 from '/assets/topic/2025/hk14/320/8.jpg'
import images1_ from '/assets/topic/2025/hk14/1.jpg'
import images2_ from '/assets/topic/2025/hk14/2.jpg'
import images3_ from '/assets/topic/2025/hk14/3.jpg'
import images4_ from '/assets/topic/2025/hk14/4.jpg'
import images5_ from '/assets/topic/2025/hk14/5.jpg'
import images6_ from '/assets/topic/2025/hk14/6.jpg'
import images7_ from '/assets/topic/2025/hk14/7.jpg'
import images8_ from '/assets/topic/2025/hk14/8.jpg'
const TopMenu = defineAsyncComponent(() => import(`~/components/m/topic/hkfxy/TopMenu.vue`))
const Banner = defineAsyncComponent(() => import(`~/components/m/topic/hkfxy/Banner.vue`))
const Lthg = defineAsyncComponent(() => import(`~/components/m/topic/hkfxy/Lthg.vue`))
const Liangdian = defineAsyncComponent(() => import(`~/components/m/topic/hkfxy/Liangdian.vue`))
const XingCheng = defineAsyncComponent(() => import(`~/components/m/topic/hkfxy/XingCheng.vue`))
const School = defineAsyncComponent(() => import(`~/components/m/topic/hkfxy/School.vue`))
const Images = defineAsyncComponent(() => import('~/components/m/topic/hkfxy/Images.vue'))

const about = [
  '都说读万卷书不如行万里路，想真正了解一所学校，也是这个理儿。光在网上看碎片化的信息可不够！',
  '这不，第14期【香港教育文化之旅】，我们带着10组家庭，在两天一夜的时间里，沉浸式打卡了8所香港本地学校，实打实体验了把 “名校零距离”!',
  '2天行程满满当当，大家都说收获超足！',
  '“说真的，Band1和Band2 真的不一样！通过这两天的行程，哪怕孩子考不上顶尖的，这些学校的课程体验也能把孩子的学习兴趣给提上来，值了！”',
  '本次访校活动行程丰富紧凑，国际教育网专家团队全程相伴，每到一所学校，便如知识引路人，凭借专业造诣和行业经验，深度解析学校特色与教学理念，详细讲解课程设置、师资力量，还分享教育发展趋势，让家长全方位了解学校。',
  '校长和老师全程导览，带领大家参观校园各处，从现代化教学楼到实验室、艺术教室、运动场，展示校园文化魅力。',
  '通过实地探访，各位家长和同学对香港中学的办学特色、课程设置及升学路径都有了更直观的认识。',
  '希望这些宝贵的见闻与体验，能为大家未来的教育选择提供重要参考。'
]
const LiangdianData = ['独家定制香港中学探访团，深入体验香港八所顶尖中学', '路线覆盖香港核心名校区，一站式领略学校风采', '名师带队讲解，深度解析学校特色与教学理念', '校长老师全程相伴导览，探索校园细节，饱览校园风光', '校长亲授普通话升学讲座，精准把握香港教育体系脉络', '前瞻布局择校规划蓝图，量身定制个性化升学路径']
const school = [
  {
    path: 'https://schoollist.ieduchina.com/school/sjacshk/',
    name: '圣若瑟英文中学',
    logo: schoolLogo3,
  },
  {
    path: 'https://schoollist.ieduchina.com/school/ccckeitohk/',
    name: '中华基督教会基道中学',
    logo: schoolLogo8,
  },
  {
    path: 'https://schoollist.ieduchina.com/school/yllhk/',
    name: '圣母无玷圣心书院',
    logo: schoolLogo4,
  },
  {
    path: 'https://schoollist.ieduchina.com/school/fkyc/',
    name: '香港粉岭救恩书院',
    logo: schoolLogo5,
  },
  {
    path: 'https://schoollist.ieduchina.com/school/holaphk/',
    name: '可立中学',
    logo: schoolLogo1,
  },
  {
    path: 'https://schoollist.ieduchina.com/school/hktayyhk/',
    name: '香港道教联合会圆玄学院第三中学',
    logo: schoolLogo7,
  },
  {
    path: 'https://schoollist.ieduchina.com/school/sunfc/',
    name: '香港港九街坊妇女会孙方中书院',
    logo: schoolLogo6,
  },
  {
    path: 'https://schoollist.ieduchina.com/school/cfss/',
    name: '中华基金中学',
    logo: schoolLogo2,
  },
]
const xingcheng = [
  {
    title: '每日行程',
    list: [
      {
        title: '2025年07月14日访校行程安排',
        list: [
          {
            time: '08:10',
            title: '集合',
          },
          {
            time: '08:20-08:50',
            title: '交通',
          },
          {
            time: '09:00-10:00',
            title: '圣若瑟英文中学',
            path: 'https://schoollist.ieduchina.com/school/sjacshk/',
            desc: [
              '创办时间：1958年',
              '学校类别：资助、男校、天主教；位于观塘区',
              '办学团体：天主教香港教区',
              '学校位置：九龙新清水湾道46号',
              '课程体系：香港中学文凭试HKDSE',
              '办学宗旨：本著基督仁愛精神辦學，提供靈、德、智、、群、美並重的天主教全人教育，令學生的學行均「臻於至善」，並以「力行仁愛」精神服務社會。',
              '学校特色：秉持全人教育理念，重視學術卓越與品德培育。課程多元且具前瞻性豐富的學習經歷助學生發揮潛能，塑造國際視野及培養對社會的關爱。',
              '教学语言：學校以中、英文為主要教學語言。'
            ],
            images: [
              {
                image: school1Image1,
                preview: school1Image1,
              },
              {
                image: school1Image2,
                preview: school1Image2,
              },
              {
                image: school1Image3,
                preview: school1Image3,
              },
              {
                image: school1Image4,
                preview: school1Image4,
              },
            ],
          },
          {
            time: '10:00-11:00',
            title: '交通',
          },
          {
            time: '11:00-12:00',
            title: '中华基督教会基道中学',
            path: 'https://schoollist.ieduchina.com/school/ccckeitohk/',
            desc: [
              '办学时间: 2003年',
              '学校类别: 资助、男女校、基督教',
              '辦學團體: 中華基督教會香港區龠',
              '學校位置: 九龍土瓜灣崇安街28號',
              '課程體系: 香港中學文憑試HKDSE',
              '物辛學宗旨：K: Knowledge and wisdom 藉學習獲得知識;T: Transcendence求突破追求卓越S:Serving others以服侍回饋社會; S: Salvation憑信心領受救恩',
              '学校特色：学校强调「以学生为本、以学习为中心」的教育，为学生提供宽广知识、考察研究、生活教育、社群服务、体艺活动和信仰认识等六种学习经历，让学生在智能、情意、体艺及灵性方面有均衡的发展，并实践“终生学习”的目标',
              '教学语言:学校以中文为主要教学语言，注重培養學生兩文三語的能力。'
            ],
            images: [
              {
                image: school2Image1,
                preview: school2Image1,
              },
              {
                image: school2Image2,
                preview: school2Image2,
              },
              {
                image: school2Image3,
                preview: school2Image3,
              },
              {
                image: school2Image4,
                preview: school2Image4,
              },
            ],
          },
          {
            time: '12:00-12:30',
            title: '午休/午餐',
          },
          {
            time: '12:30-13:30',
            title: '交通',
          },
          {
            time: '13:30-14:30',
            title: '圣母无玷圣心书院',
            path: 'https://schoollist.ieduchina.com/school/yllhk/',
            desc: [
              '创办时间：1981年',
              '学校类别：资助、男女校、天主教；位于沙田园',
              '辦學團體：聖母痛苦方濟傳教女修會',
              '學校位置：新界沙田乙明邨',
              '課程體系：香港中學文憑試HKDSE',
              '辦學宗旨：學校以聖母瑪利亞撫育耶龢成長之信德為榜樣，效法她仁愛無私，甘服務他人的福音精神，塑造充滿鼓勵、關懷之園地，一同學習，互重互諒，造福社群。',
              '學校特色：以天主教信仰為基，注重全人教育，培育學生品德與學並重。提供富課外活動，營造關懐包容的校園文化，助力學生多元發展。',
              '教學語言：以英語作為主要教學語言'
            ],
            images: [
              {
                image: school3Image1,
                preview: school3Image1,
              },
              {
                image: school3Image2,
                preview: school3Image2,
              },
              {
                image: school3Image3,
                preview: school3Image3,
              },
              {
                image: school3Image4,
                preview: school3Image4,
              },
            ],
          },
          {
            time: '14:30-15:30',
            title: '交通',
          },
          {
            time: '15:30-16:30',
            title: '香港粉岭救恩书院',
            path: 'https://schoollist.ieduchina.com/school/fkyc/',
            desc: [
              '創辦時間:2000年',
              '學校類別:資助、男女校、基督教;位於北區',
              '辦學團體:基督教香港崇真會',
              '學校位置:新界粉嶺欣盛里3號',
              '課程體系:香港中學文憑試HKDSE',
              '辦學宗旨:學校相信每個孩子都有尊，都可教，都可成功。學校效法基督以生命影響生命」的精神，為香港培育一群追求卓越、樂於奉獻、勇於承擔的新一代。',
              '學校特色:學校以“全人教育”為核心理念，注重學生自學能力培養，推行小班學與“自主學習”模式。學校重視兩文三語發展，設外籍教師提升英語環境，開多元聯課活動，以“生命影響生命”精神培育學生。',
              '教學語言:學校以中文為主要教學語言。'
            ],
            images: [
              {
                image: school4Image1,
                preview: school4Image1,
              },
              {
                image: school4Image2,
                preview: school4Image2,
              },
              {
                image: school4Image3,
                preview: school4Image3,
              },
              {
                image: school4Image4,
                preview: school4Image4,
              },
            ],
          },
          {
            time: '17:00',
            title: '返程',
          },
        ],
      },
      {
        title: '2025年07月15日访校行程安排',
        list: [
          {
            time: '08:10',
            title: '集合',
          },
          {
            time: '08:10-08:50',
            title: '交通',
          },
          {
            time: '09:00-10:00',
            title: '可立中学',
            path: 'https://schoollist.ieduchina.com/school/holaphk/',
            desc: [
              '創辦辛時間:1969 年',
              '璺校類別:資助、男女校、儒釋道;位於黄大仙區',
              '辦學團體:啬色圉',
              '學校位置:九龍爵祿街15號',
              '課程體系:香港中學文憑試HKDSE',
              '辦學宗旨:學校秉承嗇色園辦學宗旨崇奉道釋儒三教經義，以普濟勤善為校訓,培養學生樂善好施、服務社會的精神;並著重學生德、智、體、群、美五育的均衡發展。',
              '學校特色:本校秉持“普濟善”校訓，深耕五育均衡發展，致力於培養具備國隙視野和創新能力的人才，以應對未來的社會需求。推行全英語沉浸式教學，設富課外活動與國際交流項目，注重兩文三語訓練，全方位培育學生综合素養與國視野。',
              '教學語言:學校以英語為主要教學語言。'
            ],
            images: [
              {
                image: school5Image1,
                preview: school5Image1,
              },
              {
                image: school5Image2,
                preview: school5Image2,
              },
              {
                image: school5Image3,
                preview: school5Image3,
              },
              {
                image: school5Image4,
                preview: school5Image4,
              },
            ],
          },
          {
            time: '10:00-11:00',
            title: '交通',
          },
          {
            time: '11:00-12:00',
            title: '香港道教联合会圆玄学院第三中学',
            path: 'https://schoollist.ieduchina.com/school/hktayyhk/',
            desc: [
              '創辦時間:1988年',
              '學校類別:資助、男女校、道教;位於大埔區',
              '辦學團體:香港道教聯合會',
              '學校位置:新界大埔富善邨',
              '課程體系:香港中學文憑試HKDSE',
              '辦學宗旨:秉承母會「道化教育」的宗旨，致力發展及提高學生的能力，使他們能立足於高科技、多資訊的社會，並過優質的生活。',
              '學校特色:根植道教文化沃土，推行全人教育理念，融合古今智慧，注重學生品德、學術、創新力及社會擔當全方位培育。',
              '教學語言:學校以中文為主要教學語言。'
            ],
            images: [
              {
                image: school6Image1,
                preview: school6Image1,
              },
              {
                image: school6Image2,
                preview: school6Image2,
              },
              {
                image: school6Image3,
                preview: school6Image3,
              },
              {
                image: school6Image4,
                preview: school6Image4,
              },
            ],
          },
          {
            time: '12:00-13:00',
            title: '午餐加午休',
          },
          {
            time: '13:00-13:30',
            title: '交通',
          },
          {
            time: '13:30-14:30',
            title: '香港港九街坊妇女会孙方中书院',
            path: 'https://schoollist.ieduchina.com/school/sunfc/',
            desc: [
              '創辦時閒:2002 年',
              '學校類別:資助、男女;位於大埔區',
              '辦學團體:港九街坊婦女會',
              '學校位置:新界大埔大埔公路大埔滘段4643號',
              '課程體系:香港中學文憑試HKDSE',
              '辦學宗旨:秉承辦學團體的辦學方針，注重學生兩文三語培訓，乃香港首以普通話為教學語言的津貼中學。發掘學生多元智能，使他們得到全面而具個性 的發展,樂於終身學習，成為有創意、具應變能力、富責任感及積極進取的公民',
              '學校特色:學校共開24班。師資優良，教師共58人，100%持學士學位，當中74%士及博士學位，全體中英文科教師已達普通話或英文科語文能力要求(即語更持硕文基準)，而且教學經驗豐富，71%教師的教學經驗超過10年',
              '教學語言:學校以普通話為教學語言'
            ],
            images: [
              {
                image: school7Image1,
                preview: school7Image1,
              },
              {
                image: school7Image2,
                preview: school7Image2,
              },
              {
                image: school7Image3,
                preview: school7Image3,
              },
              {
                image: school7Image4,
                preview: school7Image4,
              },
            ],
          },
          {
            time: '14:30-15:30',
            title: '交通',
          },
          {
            time: '15:45-16:45',
            title: '中华基金中学',
            path: 'https://schoollist.ieduchina.com/school/cfss/',
            desc: [
              '創辦時間：2000年',
              '學校類別：直資、男女校',
              '辦學團體：中華歷史文化教育基金會有限公司',
              '學校位置：香港柴灣小西灣富欣道9號',
              '課程體系：香港中學文憑試HKDSE',
              '辦學宗旨：學校致力提供優質教育;運用現代科技及方法，培學生的領導才能批判思考、創造力和自信心;增進學生的知和技能，為他們日後貢社會作好準备',
              '學校特色：中華基金中學以創新課程、國際化視野及全人發展益核心，致力培养備學術實力、社會责任感和全球競爭力的未來領袖。其直資學校的靈活性也讓課程設計更贴近時代需求，成為香港東區的熱門中學之一',
              '教學語言：學校以英文為主要教學語言。'
            ],
            images: [
              {
                image: school8Image1,
                preview: school8Image1,
              },
              {
                image: school8Image2,
                preview: school8Image2,
              },
              {
                image: school8Image3,
                preview: school8Image3,
              },
              {
                image: school8Image4,
                preview: school8Image4,
              },
            ],
          },
          {
            time: '17:20',
            title: '返程 香港校区',
          },
        ],
      },
    ],
  }
]
const ImagesData = [
  {
    image: images1,
    imageMax: images1_
  },
  {
    image: images2,
    imageMax: images2_
  },
  {
    image: images3,
    imageMax: images3_
  },
  {
    image: images4,
    imageMax: images4_
  },
  {
    image: images5,
    imageMax: images5_
  },
  {
    image: images6,
    imageMax: images6_
  },
  {
    image: images7,
    imageMax: images7_
  },
  {
    image: images8,
    imageMax: images8_
  },
]
useHead({
  script: [
    {
      innerHTML: `
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(window.location.href="/topic/2025/hk14/");
      (function () {
            function onResize() {
                var width = document.documentElement.clientWidth;
                var style = document.createElement("style");
                style.setAttribute('id', 'style')
                var html = '';
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    html = "html{font-size: " + width / 16 + "px !important;}";
                } else {
                    html = "html{font-size: " + 750 / 16 + "px !important;width:750px;margin:0 auto;}";
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
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://www.ieduchina.com/statics/pcc/js/swiper.min.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://m.ieduchina.com/statics/users/js/layer.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://m.ieduchina.com/topic/tgFrom.js',
      type: 'text/javascript',
      defer: true,
      body: true,
    },
    {
      src: 'https://res2.wx.qq.com/open/js/jweixin-1.6.0.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: '/weixinShare.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: '/s2hk.js',
      type: 'text/javascript',
      body: true,
    },
  ],
  link: [
    {
      itemprop: 'image',
      content: iconImage,
    },
    {
      rel: 'apple-touch-icon',
      href: iconImage,
    },
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//m.ieduchina.com/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: '//m.ieduchina.com/statics/css/swiper.min.css',
    },
  ],
  title: '香港教育文化之旅第14期-香港中学校访校 - 国际教育网',
  meta: [
    {
      name: 'keywords',
      content: '香港教育文化之旅',
    },
    {
      name: 'description',
      content: '本次访校活动行程丰富紧凑，国际教育网专家团队全程相伴，每到一所学校，便如知识引路人，凭借专业造诣和行业经验，深度解析学校特色与教学理念，详细讲解课程设置、师资力量，还分享教育发展趋势，让家长全方位了解学校。',
    },
  ],
})

onMounted(() => {
  $("#fullyear").text(new Date().getFullYear());
  var swiper1 = new Swiper(".preview_swiper", {
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination1",
      type: "fraction"
    }
  });
  $.each($("img[preview]"), function (index, item) {
    $(item).attr("index", index);
    swiper1.appendSlide("<div class=\"swiper-slide\">\n    <img src=\"".concat($(item).attr("preview"), "\" alt=\"\">\n  </div>"));
  });
  $(document).on("click", "img[preview]", function () {
    $(".preview_mask").addClass("show");
    swiper1.slideTo($(this).attr("index"));
  });
  $(".preview_mask").on("click", ".swiper-slide", function () {
    $(".preview_mask").removeClass("show");
  });
  new Swiper('.case_swiper', {
    centeredSlides: false,
    spaceBetween: 5,
    slidesPerView: 1.4,
  });
  $(".more").on("click", function () {
    if ($(this).hasClass("up")) {
      $(this).closest(".sp").find("ul li:nth-of-type(n+7)").hide();
      $(this).find("span").text("展开更多");
      $(this).removeClass("up");
    }
    else {
      $(this).closest(".sp").find("ul li").show();
      $(this).find("span").text("收起");
      $(this).addClass("up");
    }
  });
  $("select").change(function () {
    if ($(this).val()) {
      $(this).css("color", "#333");
    }
    else {
      $(this).css("color", "#999");
    }
  });
  var flag = true;
  if ($(".jc").length) {
    $(window).on('scroll', function () {
      var st = $(window).scrollTop();
      var wh = $(".jc").offset().top;
      if (st > (wh - 48) && flag) {
        $("html,body").addClass("noscroll");
        $(".form_up").addClass("show");
        flag = false;
      }
    });
  }
  $(".form_up").on("click", ".close", function () {
    $(".form_up").removeClass("show");
    $("html,body").removeClass("noscroll");
  });
  $(".rightfixed").on("click", function () {
    $(".form_up").addClass("show");
    $("html,body").addClass("noscroll");
  });
  var inputs = [
    {
      name: "name",
      message: "请输入学生姓名"
    },
    {
      name: "mobile",
      message: "请输入家长手机号"
    },
    {
      name: "grade",
      message: "请选择就读年级"
    },
    {
      name: "want_school",
      message: "意向学校"
    }, {
      name: "email",
      message: "您的邮箱"
    }
  ];
  $('html').t2s1();
  $(".submit").on("click", function () {
    var form = $(this).closest("form");
    var errors = [];
    var msg = inputs.reduce(function (acc, input) {
      var val = form.find("[name=\"".concat(input.name, "\"]")).val();
      if (!val) {
        errors.push(input.message);
      }
      return errors[0];
    }, "");
    if (msg) {
      layer.open({
        content: msg,
        skin: 'msg',
        time: 3
      });
    }
    else {
      $.ajax({
        url: "".concat(form[0].action, "&t=").concat(Math.random().toString()),
        type: form[0].method,
        dataType: "JSON",
        data: form.serialize(),
        success: function (res) {
          if (res.status == 1) {
            layer.open({
              content: "您已报名成功，谢谢您的参与！",
              skin: 'msg',
              time: 3
            });
            $(".form_up").removeClass("show");
            form[0].reset();
          }
          else {
            layer.open({
              content: "报名失败，请稍后再试",
              skin: 'msg',
              time: 3
            });
          }
        },
        error: function () {
          layer.open({
            content: "报名失败，请稍后再试",
            skin: 'msg',
            time: 3
          });
        }
      });
    }
    return false;
  });

  $("#mask").on("click", "img", function () {
    $("html,body").removeClass("noscroll");
    player.pause();
    $("#mask").hide();
  });
  $('#go-bottom').on('click', function () {
    $('html,body').animate({
      scrollTop: $("form").offset().top
    }, 500);
  });
  $(".footer-nav").on("click", "li", function () {
    var img = $(this).find("img");
    $("html,body").addClass("noscroll");
    if (img.attr("img")) {
      $(".concat h4").text(img.attr("alt"));
      $(".concat .img img").attr("src", img.attr("img"));
      if (img.attr("tel")) {
        $(".concat p").text("".concat(img.attr("alt"), "\u8BF7\u626B\u7801\u6216\u62E8\u6253\u7535\u8BDD\uFF1A"));
        $(".concat a").attr("href", "tel:".concat(img.attr("tel"))).text("".concat(img.attr("tel")));
        $(".concat").addClass("show");
      }
      else {
        $(".concat").removeClass("show");
        $(".form_up").addClass("show");
      }
      $("html,body").addClass("noscroll");
    }
  });
  $(".concat .box > img").on("click", function () {
    $(".concat").removeClass("show");
    $("html,body").removeClass("noscroll");
  });
  $(".menu_mask").on("click", "a.form", function () {
    $(".form_up").addClass("show");
  });
  $(".form_up").on("click", ".close img", function () {
    $(this).closest(".form_up").removeClass("show");
  });
  $(".menu_mask").on("click", function (e) {
    if (!$(e.target).closest(".con").length) {
      $(".menu_mask").hide();
    }
  })
})

</script>
<template>
  <div class="hk14">
    <img alt="香港访校营" :src="iconImage" id="share" style="display:none">
    <component :is="TopMenu" />
    <component :is="Banner" :src="BannerData" />
    <component :is="Images" :data="ImagesData" />
    <component :is="Lthg" :data="about" />
    <component :is="Liangdian" :data="LiangdianData" />
    <component :is="XingCheng" :data="xingcheng" />
    <component :is="School" :data="school" />
    <section class="form_up">
      <div class="con">
        <form action="/index.php?m=college&c=index&a=collegereg&dopost=reg" method="POST">
          <p>下一期探校预约报名</p>
          <input name="name" type="text" placeholder="学生姓名">
          <input name="mobile" type="text" placeholder="您的手机">
          <select name="grade">
            <option value="" style="display:none">学生即将入读年级</option>
            <option value="幼儿园">幼儿园</option>
            <option value="一年级">一年级</option>
            <option value="二年级">二年级</option>
            <option value="三年级">三年级</option>
            <option value="四年级">四年级</option>
            <option value="五年级">五年级</option>
            <option value="六年级">六年级</option>
            <option value="七年级">七年级</option>
            <option value="八年级">八年级</option>
            <option value="九年级">九年级</option>
            <option value="十年级">十年级</option>
            <option value="十一年级">十一年级</option>
            <option value="十二年级">十二年级</option>
            <option value="大一">大一</option>
            <option value="大二">大二</option>
            <option value="大三">大三</option>
            <option value="大四">大四</option>
            <option value="其他">其他</option>
          </select>
          <input name="want_school" type="text" placeholder="意向学校">
          <input name="email" type="text" placeholder="您的邮箱">
          <input name="mark" type="hidden" value="香港教育文化之旅第14期_国际教育网WAP版">
          <button class="submit">立即预约</button>
        </form>
        <div class="close">
          <img alt="" src="//m.ieduchina.com/topic/2024/hk7/images/d978f273.png?t=2808c713">
        </div>
      </div>
    </section>
    <footer>
      <p>
        Copyright@<span id="fullyear"></span>
        ，国际教育网 版权所有
      </p>
      <p>粤ICP备2021064228号-2 & 粤公网安备44030502002588号</p>
    </footer>
    <div class="mask" id="mask">
      <img alt="" src="//m.ieduchina.com/topic/2024/hk7/images/d978f273.png?t=2808c713">
      <video height="405" id="masksp" playsinline poster="" preload="auto" value="" webkit-playsinline
        width="375"></video>
    </div>
    <div class="footer-nav">
      <ul>
        <li>
          <img alt="媒体合作" src="//m.ieduchina.com/topic/2024/hk7/images/8d327893.png?t=2808c713"
            img="//www.ieduchina.com/statics/hui.jpg" tel="181-6570-6113">
          <p>媒体合作</p>
        </li>
        <li>
          <img alt="活动预约" src="//m.ieduchina.com/topic/2024/hk7/images/bc4f5a55.png?t=2808c713"
            img="//m.ieduchina.com/topic/2024/hk7/images/1b8cc5dd.png?t=2808c713">
          <p>下一期报名</p>
        </li>
        <li>
          <img alt="香港升学咨询" src="//m.ieduchina.com/topic/2024/hk7/images/5ee14fdf.png?t=2808c713"
            img="//m.ieduchina.com/topic/2024/hk7/images/d7b7dbc9.jpg" tel="189-3807-4754">
          <p>家长咨询</p>
        </li>
      </ul>
    </div>
    <div class="concat">
      <div class="box">
        <div class="img">
          <h4></h4>
          <img alt="" src="">
          <p></p>
          <a href=""></a>
        </div>
        <img alt="" src="//m.ieduchina.com/topic/2024/hk7/images/d978f273.png?t=2808c713">
      </div>
    </div>
    <div class="preview_mask">
      <div class="preview_swiper">
        <div class="swiper-wrapper"></div>
        <div class="swiper-pagination1"></div>
      </div>
    </div>
    <div class="rightfixed">
      <img alt="" src="//m.ieduchina.com/topic/2025/hkyy10/images/4332d74a.png">
    </div>
  </div>
</template>

<style lang="less">
.hk14 {
  --primary: #d53c90;
  --next: #ffc85e;
}

html .noscroll {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

body {
  padding-top: 1.792rem;
  max-width: 750px;
  margin: 0 auto;
  padding-bottom: 3.02933333rem;
}

body .noscroll {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

header img {
  width: 100%;
  height: 9.00266667rem;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover;
}

section {
  padding: 1.70666667rem 0.64rem 0;
}

section.gray {
  background-color: #F2F4F6;
}

section.green {
  background-color: var(--primary);
  overflow: hidden;
}

section.green h3.title {
  color: white;
}

section.green h3.title::before {
  background-color: white;
}

section.nr {
  padding-right: 0;
}

section h3.title {
  font-size: 0.896rem;
  font-weight: bold;
  color: #000000;
}

section h3.title span {
  font-size: 0.59733333rem;
}

section h3.title::before {
  content: "";
  display: inline-block;
  width: 0.17066667rem;
  height: 0.896rem;
  background: var(--primary);
  border-radius: 0;
  vertical-align: -0.10666667rem;
  margin-right: 0.17066667rem;
}

section h3.title::after {
  content: attr(en);
  display: inline-block;
  font-size: 0.512rem;
  font-weight: 500;
  color: #ccc;
  text-transform: uppercase;
  margin-left: 0.42666667rem;
}

section .images {
  font-size: 0;
  margin-top: 0.64rem;
}

section .images>img {
  width: 14.72rem;
  height: 8.02133333rem;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

section .images .bottom {
  margin-top: 0.29866667rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

section .images .bottom img {
  width: 4.69333333rem;
  height: 3.008rem;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

section .ld {
  padding-bottom: 1.28rem;
  width: 100%;
}

section .ld ul {
  margin-top: 1.06666667rem;
}

section .ld ul li {
  height: 1.19466667rem;
  margin-top: 0.53333333rem;
  line-height: 1.19466667rem;
  background-color: #F6F6F6;
  font-size: 0.512rem;
  font-weight: 400;
  color: #333333;
  -webkit-clip-path: polygon(0.72533333rem -1.25866667rem, 200% 100%, 200% 100%, 0 1.06666667rem);
  clip-path: polygon(0.72533333rem -1.25866667rem, 200% 100%, 200% 100%, 0 1.06666667rem);
  letter-spacing: -0.01066667rem;
}

section .ld ul li span {
  background-color: var(--primary);
  margin-right: 0.08533333rem;
  font-size: 0.512rem;
  font-weight: 500;
  width: 2.00533333rem;
  height: 1.19466667rem;
  display: inline-block;
  color: #fff;
  text-align: center;
  -webkit-clip-path: polygon(2.00533333rem -5.99466667rem, 5.184rem -10.45333333rem, 1.64266667rem 1.216rem, 0.04266667rem 1.088rem);
  clip-path: polygon(2.00533333rem -5.99466667rem, 5.184rem -10.45333333rem, 1.64266667rem 1.216rem, 0.04266667rem 1.088rem);
}

section .ld ul li:nth-of-type(2n) span {
  background-color: var(--next);
}

section .jc {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 1.49333333rem;
}

section .jc .swiper-container {
  height: 5.29066667rem;
  margin-top: 0.85333333rem;
  overflow: visible;
  overflow: initial;
}

section .jc .swiper-container .swiper-slide img {
  -o-object-position: center;
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover;
  width: 10.38933333rem;
  height: 5.29066667rem;
}

section .sp {
  padding-bottom: 1.70666667rem;
}

section .sp ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 1.06666667rem 0 0.42666667rem;
}

section .sp ul li {
  position: relative;
}

section .sp ul li:nth-of-type(n+7) {
  display: none;
}

section .sp ul li::before {
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 46%;
  z-index: 100;
  content: "";
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
  width: 1.38666667rem;
  height: 1.38666667rem;
  background: url(https://m.ieduchina.com/topic/2024/hk7/images/815ba699.png) center / contain no-repeat;
}

section .sp ul li img {
  width: 7.104rem;
  height: 9.55733333rem;
  background: #000000;
  border-radius: 0;
  -o-object-fit: cover;
  object-fit: cover;
  -webkit-filter: brightness(0.5);
  filter: brightness(0.5);
}

section .sp ul li p {
  font-size: 0.55466667rem;
  font-weight: 400;
  color: #333333;
  padding: 0.384rem 0 0.64rem;
}

section .sp .btn {
  text-align: center;
}

section .sp .btn button {
  width: 4.11733333rem;
  height: 1.216rem;
  background: #FFFFFF;
  border-radius: 0.21333333rem;
  border: 1px solid var(--primary);
  text-align: center;
}

section .sp .btn button.up img {
  -webkit-transition: all 300ms;
  transition: all 300ms;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
}

section .sp .btn button span {
  font-size: 0.55466667rem;
  font-weight: 400;
  color: var(--primary);
}

section .sp .btn button img {
  width: 0.34133333rem;
  height: 0.34133333rem;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  margin-left: 0.21333333rem;
  vertical-align: 0.064rem;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
}

section .yx ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  text-align: center;
  padding: 1.06666667rem 0 0.85333333rem;
}

section .yx ul li {
  width: 7.06133333rem;
}

section .yx ul li:first-of-type img {
  padding: 0.21333333rem;
}

section .yx ul li img {
  width: 7.06133333rem;
  height: 2.92266667rem;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  background-color: white;
}

section .yx ul li p {
  font-size: 0.512rem;
  font-weight: 400;
  color: #FFFFFF;
  padding: 0.42666667rem 0 0.64rem;
  letter-spacing: -0.02133333rem;
}

section.form_up {
  display: none;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: fixed;
  padding: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 16rem;
  z-index: 1010;
}

section.form_up.show {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

section.form_up .con form {
  max-height: 80vh;
  overflow-y: auto;
  margin: 0 0.64rem;
  background: #FFFFFF;
  -webkit-box-shadow: 0 0 0.42666667rem 0.02133333rem rgba(99, 99, 99, 0.1608);
  box-shadow: 0 0 0.42666667rem 0.02133333rem rgba(99, 99, 99, 0.1608);
  border-radius: 0.42666667rem;
  padding: 0 0.64rem;
  position: relative;
}

section.form_up .con form::before {
  position: absolute;
  content: "";
  top: 8.64rem;
  right: 1.17333333rem;
  z-index: 10;
  width: 0.512rem;
  height: 0.29866667rem;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: contain;
  object-fit: contain;
  pointer-events: none;
  background: url(https://m.ieduchina.com/topic/2024/hk7/images/06d922bf.png) center / contain no-repeat;
}

section.form_up .con form p {
  font-size: 0.81066667rem;
  font-weight: bold;
  color: var(--primary);
  text-align: center;
  padding: 0.85333333rem 0 0.42666667rem;
}

section.form_up .con form input {
  height: 1.92rem;
  width: 100%;
  background: #F8F8F8;
  border-radius: 0.21333333rem;
  margin-top: 0.64rem;
  font-size: 0.68266667rem;
  font-weight: 400;
  color: #333;
  padding: 0 0.42666667rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  -webkit-box-shadow: 0 0 0 1000px #F8F8F8 inset;
  box-shadow: 0 0 0 1000px #F8F8F8 inset;
}

section.form_up .con form input::-webkit-input-placeholder {
  font-size: 0.68266667rem;
  color: #999;
}

section.form_up .con form input::-moz-placeholder {
  font-size: 0.68266667rem;
  color: #999;
}

section.form_up .con form input:-ms-input-placeholder {
  font-size: 0.68266667rem;
  color: #999;
}

section.form_up .con form input::-ms-input-placeholder {
  font-size: 0.68266667rem;
  color: #999;
}

section.form_up .con form input::placeholder {
  font-size: 0.68266667rem;
  color: #999;
}

section.form_up .con form select {
  height: 1.92rem;
  width: 100%;
  background: #F8F8F8;
  border-radius: 0.21333333rem;
  margin-top: 0.64rem;
  font-size: 0.68266667rem;
  font-weight: 400;
  color: #999;
  padding: 0 0.42666667rem;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

section.form_up .con form select:-internal-autofill-previewed,
section.form_up .con form select:-internal-autofill-selected {
  -webkit-text-fill-color: #000000;
  -webkit-transition: background-color 5000s ease-out 0.5s;
  transition: background-color 5000s ease-out 0.5s;
}

section.form_up .con form button {
  margin-top: 0.85333333rem;
  width: 100%;
  height: 1.92rem;
  background: var(--primary);
  -webkit-box-shadow: 0 0.064rem 0.128rem 0.02133333rem rgba(213, 60, 144, 0.502);
  box-shadow: 0 0.064rem 0.128rem 0.02133333rem rgba(213, 60, 144, 0.502);
  border-radius: 0.21333333rem;
  font-size: 0.768rem;
  font-weight: 500;
  color: #FFFFFF;
  border: none;
  outline: none;
  margin-bottom: 1.216rem;
  cursor: pointer;
}

section.form_up .con .close {
  width: 16rem;
  text-align: center;
}

section.form_up .con .close img {
  width: 1.024rem;
  height: 1.024rem;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: contain;
  object-fit: contain;
  margin-top: 0.64rem;
}

footer {
  padding: 1.06666667rem 0 1.32266667rem;
}

footer p {
  font-size: 0.512rem;
  font-weight: 400;
  color: #999999;
  text-align: center;
  margin-top: 0.42666667rem;
}

.mask {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  pointer-events: fill;
}

.mask>img {
  width: 1.36533333rem;
  height: 1.36533333rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10000;
  padding: 0.42666667rem;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.mask .tcplayer {
  width: 100vw;
  height: 100vh;
}

.mask .tcplayer #masksp {
  width: 100vw;
  height: 100vh;
}

.footer-nav {
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 990;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 16rem;
  height: 3.02933333rem;
  background: var(--primary);
}

.footer-nav ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 3.02933333rem;
}

.footer-nav ul li {
  height: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0.42666667rem 0;
  cursor: pointer;
}

.footer-nav ul li img {
  width: 1.10933333rem;
  height: 1.10933333rem;
}

.footer-nav ul li p {
  width: 100%;
  font-size: 0.512rem;
  font-weight: 400;
  color: #FFFFFF;
  text-align: center;
}

.concat {
  font-size: 0;
  position: fixed;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  top: 0;
  width: 16rem;
  bottom: 0;
  z-index: 10000;
  display: none;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.concat.show {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.concat .box {
  text-align: center;
}

.concat .box .img {
  width: 9.216rem;
  height: 12.16rem;
  background: #FFFFFF;
  border-radius: 0.32rem;
  border: 1px solid #707070;
  text-align: center;
}

.concat .box .img h4 {
  font-size: 0.768rem;
  font-weight: 500;
  color: var(--primary);
  padding: 0.85333333rem 0 0.64rem;
}

.concat .box .img img {
  width: 6.82666667rem;
  height: 6.82666667rem;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: contain;
  object-fit: contain;
}

.concat .box .img p {
  font-size: 0.512rem;
  font-weight: 400;
  color: #333333;
  line-height: 0.768rem;
  padding: 0.53333333rem 0 0.32rem;
}

.concat .box .img a {
  font-size: 0.59733333rem;
  font-weight: 500;
  color: var(--primary);
}

.concat .box>img {
  width: 1.06666667rem;
  height: 1.06666667rem;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  margin-top: 0.64rem;
  cursor: pointer;
}

.rightfixed {
  position: fixed;
  right: 0;
  top: 70%;
  z-index: 999;
}

.rightfixed img {
  width: 3.2rem;
  height: 3.2rem;
  -o-object-fit: contain;
  object-fit: contain;
  background-color: var(--primary);
  border-radius: 50%;
}

.date-card {
  width: 2.66666667rem;
  height: 0.896rem;
}

.date-card .card {
  width: 1.13066667rem;
  height: 0.896rem;
  background-color: #fff;
  border: solid 0.10666667rem var(--primary);
  margin: 0 auto;
}

.date-card .card p {
  text-align: center;
  margin-left: 0 !important;
}

.date-card .card p:first-of-type {
  background-color: var(--primary);
  color: #fff;
  font-size: 0.256rem;
  font-weight: bold;
  line-height: 0.40533333rem;
  margin-top: -0.10666667rem;
  letter-spacing: 0.02133333rem;
}

.date-card .card p:nth-of-type(2) {
  font-weight: bold;
  color: var(--primary);
  font-size: 0.32rem;
  padding-top: 0.04266667rem;
  letter-spacing: 0.02133333rem;
}

.preview_mask {
  width: 100vw;
  height: 100vh;
  max-width: 16rem;
  position: fixed;
  top: 0;
  z-index: 1100;
  background-color: #000000;
  display: none;
  overflow: hidden;
}

.preview_mask.show {
  display: block;
}

.preview_mask .preview_swiper {
  height: 100vh;
}

.preview_mask .preview_swiper .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 100%;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: contain;
  object-fit: contain;
}

.preview_mask .preview_swiper .swiper-pagination-fraction {
  position: absolute;
  top: 1.28rem;
  left: 0;
  text-align: center;
  color: white;
  font-size: 0.68266667rem;
}

.preview_mask .preview_swiper .swiper-pagination-fraction span {
  color: white;
  font-weight: bold;
}
</style>