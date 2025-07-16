<script setup>
import { defineAsyncComponent, reactive, ref } from 'vue'
import bannerImage from '~/assets/topic/2025/hk14/900-420.png'
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

const Banner = defineAsyncComponent(() => import('~/components/topic/hkfxy/Banner.vue'))
const LiangDian = defineAsyncComponent(() => import('~/components/topic/hkfxy/LiangDian.vue'))
const XingCheng = defineAsyncComponent(() => import('~/components/topic/hkfxy/XingCheng.vue'))
const School = defineAsyncComponent(() => import('~/components/topic/hkfxy/School.vue'))
const Footer = defineAsyncComponent(() => import('~/components/topic/HK-Footer.vue'))
const About = defineAsyncComponent(() => import('~/components/topic/hkfxy/About.vue'))
const MaskForm = defineAsyncComponent(() => import('~/components/topic/hkfxy/MaskForm.vue'))
const RightFixedNav = defineAsyncComponent(() => import('~/components/topic/hkfxy/RightFixedNav.vue'))
const ImgMask = defineAsyncComponent(() => import('~/components/topic/hkfxy/ImgMask.vue'))
const VideoMask = defineAsyncComponent(() => import('~/components/topic/hkfxy/VideoMask.vue'))

const about = ref([
  '都说读万卷书不如行万里路，想真正了解一所学校，也是这个理儿。光在网上看碎片化的信息可不够！',
  '这不，第14期【香港教育文化之旅】，我们带着10组家庭，在两天一夜的时间里，沉浸式打卡了8所香港本地学校，实打实体验了把 “名校零距离”!',
  '2天行程满满当当，大家都说收获超足！',
  '“说真的，Band1和Band2 真的不一样！通过这两天的行程，哪怕孩子考不上顶尖的，这些学校的课程体验也能把孩子的学习兴趣给提上来，值了！”',
  '本次访校活动行程丰富紧凑，国际教育网专家团队全程相伴，每到一所学校，便如知识引路人，凭借专业造诣和行业经验，深度解析学校特色与教学理念，详细讲解课程设置、师资力量，还分享教育发展趋势，让家长全方位了解学校。',
  '校长和老师全程导览，带领大家参观校园各处，从现代化教学楼到实验室、艺术教室、运动场，展示校园文化魅力。',
  '通过实地探访，各位家长和同学对香港中学的办学特色、课程设置及升学路径都有了更直观的认识。',
  '希望这些宝贵的见闻与体验，能为大家未来的教育选择提供重要参考。'
])
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
const liangdian = reactive(['独家定制香港中学探访团，深入体验香港八所顶尖中学', '路线覆盖香港核心名校区，一站式领略学校风采', '名师带队讲解，深度解析学校特色与教学理念', '校长老师全程相伴导览，探索校园细节，饱览校园风光', '校长亲授普通话升学讲座，精准把握香港教育体系脉络', '前瞻布局择校规划蓝图，量身定制个性化升学路径'])
const xingcheng = reactive([
  {
    title: '每日行程',
    list: [
      {
        title: '2025年07月14日访校行程安排',
        list: [
          {
            time: '08:10',
            title: '香港8度海逸酒店 集合',
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
            title: '返回 香港8度海逸酒店',
          },
        ],
      },
      {
        title: '2025年07月15日访校行程安排',
        list: [
          {
            time: '08:10',
            title: '香港8度海逸酒店 集合',
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
              '創辦時間:2000年',
              '學校類別:直資、男女校',
              '辦學團體:中華歷史文化教育基金會有限公司',
              '學校位置:香港柴灣小西灣富欣道9號',
              '課程體系:香港中學文憑試HKDSE',
              '辦學宗旨:學校致力提供優質教育;運用現代科技及方法，培學生的領導才能批判思考、創造力和自信心;增進學生的知和技能，為他們日後貢社會作好準备',
              '學校特色:中華基金中學以創新課程、國際化視野及全人發展益核心，致力培养備學術實力、社會责任感和全球競爭力的未來領袖。其直資學校的靈活性也讓課程設計更贴近時代需求，成為香港東區的熱門中學之一',
              '教學語言:學校以英文為主要教學語言。'
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
            title: '返程 龙堡国际酒店',
          },
        ],
      },
    ],
  }
])
const arrimg = ref('https://www.ieduchina.com/topic/2025/hk13/images/70084d28.png')
useHead({
  script: [
    {
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://www.ieduchina.com/statics/pcc/js/swiper.min.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: '/tencent-cdn/qcloud/video/dist/tcadapter.1.0.0.min.js',
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/TXLivePlayer-1.2.3.min.js',
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/hls.min.1.1.5.js',
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/flv.min.1.6.3.js',
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/dash.all.min.4.4.1.js',
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.v4.5.4.min.js',
      defer: true,
      crossorigin: 'anonymous',
    },
  ],
  link: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//www.ieduchina.com/statics/pcc/img/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: 'https://www.ieduchina.com/statics/pc/css/swiper.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.min.css',
    },
  ],
  title: '香港教育文化之旅第13期-香港探校 - 国际教育网',
  meta: [
    {
      name: 'keywords',
      content: '香港教育文化之旅',
    },
    {
      name: 'description',
      content: '5月2日-5月3日,香港教育文化之旅第13期圆满收官.此次活动如教育盛宴,为参访家庭带来难忘探索体验.行程丰富紧凑,探访团深入走访香港十所顶尖中学,路线涵盖DSE课程学校与国际课程学校,让参访家庭一站式领略不同名校风采.',
    },
  ],
})
</script>

<template>
  <div class="hk13">
    <img src="//www.ieduchina.com/topic/2025/hk13/images/1d83b8f1.jpg" alt="" height="0" width="0"
      img="//www.ieduchina.com/topic/2025/hk13/images/1d83b8f1.jpg" style="display:none" />
    <Header />
    <section>
      <component :is="Banner" :src="bannerImage" height="420" alt="2025年香港名校探校之旅" />
      <component :is="About" :data="about" />
      <component :is="LiangDian" :data="liangdian" />
    </section>
    <component :is="XingCheng" :data="xingcheng" :arrimg />
    <component :is="School" :data="school" width="width:25%" />
    <component :is="Footer" />
    <component :is="VideoMask" />
    <component :is="RightFixedNav" />
    <component :is="MaskForm" mark="香港教育文化之旅第14期_国际教育网PC版" />
    <component :is="ImgMask" />
  </div>
</template>

<style lang='less' scoped>
.hk13 {
  --primary: #d53c90;
  --next: #ffc85e;
}

body {
  min-width: 1280px;
}

body.noscroll {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding-right: 5px;
}

section {
  min-width: 1280px;
  background-color: #fff;
}

section.gray {
  background-color: #f2f4f6;
}

section.green>div>h3 {
  color: #fff;
}
</style>
