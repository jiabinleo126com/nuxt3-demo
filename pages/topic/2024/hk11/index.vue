<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'

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
  '【香港教育文化之旅】第11期在12月14日圓滿落下帷幕，為參訪家庭帶來了一場難忘的教育探索之旅。通過精心規劃，一次性深入探訪香港屯門、元朗兩大跨境區域的五所優質幼小學校。這兩個區域不僅交通便利，更匯聚了香港教育資源的精華，讓孩子和家長一次看個夠，全面了解香港不同學校的特色與優勢。',
  '本次行程由 Linda 親自帶隊講解。Linda深耕香港教育領域多年，對香港各學校的教育理念、教學模式、課程設置等都了如指掌。在探訪過程中，結合每所學校的實際情況，深入淺出地為大家剖析其教育特色，讓家長們不僅能看到校園的表面風光，更能深入理解背後的教育精髓，為孩子的擇校提供專業指導。',
  '每到一所學校，都有校長和資深老師親自導覽。他們將帶領大家走進教室、圖書館、實驗室、體育館等校園的各個角落，讓孩子和家長親身感受學校的學習氛圍和校園文化。從教學設施的配備到師資力量的介紹，從課程安排到課外活動的組織，每一個細節都不會錯過，全方位領略香港名校的獨特魅力。',
  '學校還特意為國際教育網安排了校長普通話升學講座。校長們將憑藉豐富的教育經驗，為家長們詳細解讀香港的教育體系、升學政策和招生要求。無論是幼兒園升小學，還是小學升中學的各個階段，都能獲得最準確、最實用的信息，幫助家長提前規劃孩子的升學目標，制定個性化的升學方案，讓孩子在香港的學業之路更加順暢。',
  '參加這次探訪團，孩子們可以提前感受香港名校的學習氛圍，激發學習興趣和探索慾望；家長們則能獲取一手的教育信息，為孩子的升學做好充分準備。一次行程，收獲的不僅是對香港教育的深入了解，更是為孩子未來的學業發展打下堅實的基礎。',
]);
const school = ref([
  {
    path: 'https://schoollist.ieduchina.com/school/aluhk/',
    name: '元朗公立中学校友会邓英业小学',
    logo: 'https://zhaosheng.ieduchina.com/Upload/File/202405/664701d086907.jpg',
  },
  {
    path: 'https://schoollist.ieduchina.com/school/ltssls/',
    name: '香港路德会增城兆霖学校',
    logo: 'https://zhaosheng.ieduchina.com/Upload/File/202405/6644759399303.jpg',
  },
  {
    path: 'https://schoollist.ieduchina.com/school/yantak/',
    name: '仁德天主教小学',
    logo: 'https://zhaosheng.ieduchina.com/Upload/File/202405/6642dac9f04ae.jpg',
  },
  {
    path: 'https://schoollist.ieduchina.com/school/tpbps/',
    name: '大埔浸信会幼儿园天泽邨分校',
    logo: 'https://zhaosheng.ieduchina.com/Upload/File/202402/65bca9fba0834.jpg',
  },
  {
    path: 'https://schoollist.ieduchina.com/school/tsaps/',
    name: '台山商会学校',
    logo: 'https://zhaosheng.ieduchina.com/Upload/File/202402/65bc87b44252d.jpg',
  },
])

const liangdian = reactive(['专属深圳湾跨境小幼探访团，深入體验香港五所优秀小幼学校', '路线覆盖屯门元朗两大跨境区域，综合学习与探索，收获满满', 'Linda带队讲解，深度解析学校特色与教学理念', '校长老师亲自导览，探索校园细节，领略校园风光', '校长普通话升学讲座，精准对接香港教育體系', '提前规划择校目标，为个性化升学做好准备'])
const xingcheng = reactive([
  {
    title: '每日行程',
    list: [
      {
        title: '2024年12月14日访校行程安排',
        list: [
          {
            time: '07:30',
            title: '深圳湾口岸集合',
          },
          {
            time: '07:50-08:30',
            title: '交通',
          },
          {
            time: '08:30-09:30',
            title: '元朗公立中学校友会邓英业小学',
            path: 'https://schoollist.ieduchina.com/school/aluhk/',
            desc: [
              '学校类别： 资助、男女校；位于元朗区',
              '教学语言： 中文（包括普通话）及英文',
              '创校历史： 1989 年创立',
              '办学团體：元朗公立中学校友会',
              '校训：勤、孝、友、诚',
              '学校设施：设有 30 个课室，1 个礼堂，4 个操场学校有图书馆。特别室包括：STEM教室、校园电视台、辅导室、电脑室、陶艺室、琴室、湿地探知馆、英文学习室、家教会资源中心等。全校空调。各课室有电脑、投影机及实物投影机。室外蔬果种植场。这小学占地面积大约6,200 平方米，属于「大型」的校园。',
              '教学情况： 教学人员总数 62 人；班级总数为 28 班，每级约有 5 班',
              '学校有联系中学：元朗公立中学校友会邓兆棠中学 在中学统一派位阶段，联系中学可为其联系小学保留最多 25% 的学位。',
            ],
            images: [
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/331287f8.jpg',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/8d6f078e.jpg',
              },
              {
                image: '	https://www.ieduchina.com/topic/2024/hk11/images/226dffd8.png',
                preview: '	https://www.ieduchina.com/topic/2024/hk11/images/4657ae52.png',
              },
            ],
          },
          {
            time: '09:30-10:10',
            title: '交通',
          },
          {
            time: '10:10-11:15',
            title: '香港路德会增城兆霖学校',
            path: 'https://schoollist.ieduchina.com/school/ltssls/',
            desc: [
              '学校类别： 资助、男女校、基督教；位于屯门区',
              '教学语言： 中文（包括普通话）及英文，普通话教中文',
              '创校历史： 2005 年创立',
              '办学团體：香港路德会',
              '校训：好学力行　荣神益人',
              '学校设施： 学校设有 24 个课室，1 个礼堂，3 个操场 学校有图书馆。特别室包括：电脑室、电视台、音乐室、视艺室、舞蹈室、会议室、医疗室、接见室、自修室、英语室、校牧室。',
              '学校设施还有：游戏室、社工室、家长教师会室、家政室、教育心理学家室、言语治疗室。这小学占地面积大约 5,800 平方米，属于「大型偏中」的校园。',
            ],
            images: [
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/d4c7e378.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/92767397.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/124c9320.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/f1e2494e.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/f88e1d41.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/8ab28fca.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/71294907.jpg',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/b956ecd6.jpg',
              },
            ],
          },
          {
            time: '11:15-11:30',
            title: '交通',
          },
          {
            time: '11:30-12:30',
            title: '仁德天主教小学',
            path: 'https://schoollist.ieduchina.com/school/tmcss/',
            desc: [
              '学校类别： 资助、男女校、天主教；位于屯门区',
              '教学语言： 学校以中文为教学语言',
              '创校历史： 1983 年创立',
              '办学团体：天主教香港教区',
              '校训：仁智善德',
              '学校设施： 学校设有 24 个课室，1 个礼堂，2 个操场 学校有图书馆。特别室包括：STEM教室、电脑室、音乐室、中央图书馆、辅导室、英语室、视觉艺术室、校园电视台、小圣堂。全校课室设置电子白板、电脑、投影设备及全校冷气设备。这小学占地面积大约3,900 平方米，属于「中型偏小」的校园。',
              '学校有联系中学：屯门天主教中学 在中学统一派位阶段，联系中学可为其联系小学保留最多 25% 的学位。',
            ],
            images: [
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/76cd1309.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/4ffd6463.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/a0b9246e.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/1eab23d9.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/7b7e3e86.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/761e9c15.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/e5091dd2.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/2dab0415.jpg',
              }
            ]
          },
          {
            time: '12:30-13:20',
            title: '午休',
          },
          {
            time: '13:20-14:00',
            title: '交通',
          },
          {
            time: '14:00-15:00',
            title: '大埔浸信会幼儿园天泽邨分校',
            path: 'https://schoollist.ieduchina.com/school/tpbps/',
            desc: [
              '学校类别：非牟利学校，参加免费幼稚园计划',
              '创校历史： 2001 年创立',
              '办学团体：浸信会',
              '以基督教信仰为本的教育，强调人尊贵的确立、自由、创意以及爱人如己情操的培养，使学生成为尊重自己、尊重别人、愿舍己为人、具整全人生观、有情有抱负的人。学校深信在创造主面前人人平等。每一个都具有神所赐的独特潜能，故应采开放接纳并灵活多变的方式帮助不同能力的学生发展其潜能。',
              '学校设施：学校有注册课室 7 个，可容纳约 125 个学生 其他设施包括：室内游戏场地、音乐室、电脑室、体能室、音乐室、小组室、医疗室。',
              '教学情况：学校有教职员约 8 位，师生比例约 1 位教师对 9 名学生',
              '学校收费： 半日制免费，全日制学费 $7,260，分 11 期 学校有参加「幼稚园教育计划」，以下列出扣减政府资助后不同班别的全年学费和期数。',
            ],
            images: [
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/3279e6b4.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/d57d9538.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/7adba6a6.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/aaee20b3.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/c56aff33.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/8887aa2a.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/3e002d0d.jpg',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/5b0fd501.png',
              },
            ],
          },
          {
            time: '15:00-16:00',
            title: '交通',
          },
          {
            time: '15:30-16:30',
            title: '台山商会学校',
            path: 'https://schoollist.ieduchina.com/school/tsaps/',
            desc: [
              '学校类别： 资助、男女校；位于屯门区',
              '教学语言： 学校以中文为教学语言，普通话教中文',
              '创校历史： 1978 年创立',
              '办学团体：台山商会 校训：勤、诚、勇、毅',
              '学校设施： 学校设有 30 个课室，2 个礼堂，2 个操场 学校有 2 间图书馆。特别室包括：中文室、英语室、数学室、STEM ROOM、音乐室、体育活动中心、视艺室、ICT Lab、电脑室。学校设施还有：校园电视台、学生活动中心、会议室、家教会室、护理室、学生辅导室、言语治疗室、教育心理学家室。这小学占地面积大约 6,806 平方米，属于「大型」的校园。',
            ],
            images: [
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/bdd08e88.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/9e9f7194.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/d3a232ca.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/b9f3f22c.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/808ed75a.png',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/ba928d6d.png',
              },
              {
                image: 'https://www.ieduchina.com/topic/2024/hk11/images/ed49bff8.jpg',
                preview: 'https://www.ieduchina.com/topic/2024/hk11/images/57b80881.jpg',
              },
            ],
          },
          {
            time: '16:30-17:00',
            title: '颁奖总结',
          },
          {
            time: '17:00',
            title: '返程',
          },
        ],
      },
    ],
  },
])
const arrimg = ref('https://www.ieduchina.com/topic/2024/hk11/images/f72c217f.png')
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
    }, {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/TXLivePlayer-1.2.3.min.js',
      defer: true,
      crossorigin: 'anonymous',
    }, {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/hls.min.1.1.5.js',
      defer: true,
      crossorigin: 'anonymous',
    }, {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/flv.min.1.6.3.js',
      defer: true,
      crossorigin: 'anonymous',
    }, {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/dash.all.min.4.4.1.js',
      defer: true,
      crossorigin: 'anonymous',
    }, {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.v4.5.4.min.js',
      defer: true,
      crossorigin: 'anonymous',
    }
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
  title: '香港教育文化之旅第11期-香港探校 - 国际教育网',
  meta: [
    {
      name: 'keywords',
      content: '香港探校',
    },
    {
      name: 'description',
      content: '【香港教育文化之旅】第11期在12月14日圆满落下帷幕，为参访家庭带来了一场难忘的教育探索之旅。通过精心规划，一次性深入探访香港屯门、元朗两大跨境区域的五所优质幼小学校 。这两个区域不仅交通便利，更汇聚了香港教育资源的精华，让孩子和家长一次看个够，全面了解香港不同学校的特色与优势。',
    },
  ],
})
onMounted(() => {
  if ($('.video_swiper').find('.swiper-slide').length > 4) {
    new Swiper('.video_swiper', {
      loop: true,
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }
  try {
    var player = TCPlayer('swipervideo', {})
    player.src($('#swipervideo').attr('value'))
    player.poster($('#swipervideo').attr('poster2'))
  }
  catch (err) {
  }
  $('#videos').on('click', 'img[value]', () => {
    var img = $(this).attr('src')
    var value = $(this).attr('value')
    var name = $(this).attr('alt')
    player.src(value)
    player.poster(img)
    $(this).closest('#videos').siblings('p').text(name)
    setTimeout(function () {
      player.play()
    }, 300)
  })
  const player2 = TCPlayer('mask_video', {})
  $('select').change(function () {
    $(this).css('color', '#333')
  })
  $('.mask .wrap>img').on('click', () => {
    $('.mask').hide()
    player2.pause()
  })
  $(document).on('click', '.showTk', () => {
    $('.mask_form').addClass('show')
  })
  $(document).on('click', '.close', () => {
    $('.mask_form').removeClass('show')
    $('.error-tips').html('')
    $(this).parents('.mask_form').find('form')[0].reset()
  })

  let flag = true
  if ($('.school').length) {
    $(window).on('scroll', () => {
      const st = $(window).scrollTop()
      const wh = $('.school').offset().top
      if (st > (wh - 48) && flag && !$('.img-mask').hasClass('show')) {
        $('.showTk').click()
        flag = false
      }
    })
  }
  const inputs = [
    {
      name: 'name',
      message: '请输入学生姓名',
    },
    {
      name: 'mobile',
      message: '请输入家长手机号',
    },
    {
      name: 'grade',
      message: '请选择就读年级',
    },
    {
      name: 'want_school',
      message: '意向学校',
    },
    {
      name: 'email',
      message: '您的邮箱',
    },
  ]
  $('.submit').on('click', function () {
    const form = $(this).closest('form')
    const errors = []
    const msg = inputs.reduce((acc, input) => {
      const val = form.find(`[name=${input.name}]`).val()
      if (!val) {
        errors.push(input.message)
      }
      return errors[0]
    }, '')
    if (msg) {
      layer.msg(msg)
    }
    else {
      $.ajax({
        url: ''.concat(form[0].action, '&t=').concat(Math.random().toString()),
        type: form[0].method,
        dataType: 'JSON',
        data: form.serialize(),
        success(res) {
          if (+res.status === 1) {
            $('.mask_form').removeClass('show')
            layer.msg('您已报名成功，谢谢您的参与！')
            form[0].reset()
          }
          else {
            layer.msg(res.info)
          }
        },
        error() {
          layer.msg('报名失败，请稍后再试')
        },
      })
    }
    return false
  })
  $('.contact ul').hover(() => {
    $('.right-fixed-nav').hide()
  }, () => {
    $('.right-fixed-nav').show()
  })
})
</script>

<template>
  <div class="hk11">
    <img src="https://www.ieduchina.com/topic/2024/hk11/images/8bec04d6.jpg" alt="" height="0" width="0" img="https://www.ieduchina.com/topic/2024/hk11/images/8bec04d6.jpg" style="display:none">
    <Header />
    <section>
      <component :is="Banner" src="https://www.ieduchina.com/topic/2024/hk11/images/1389f4ff.png" height="420" alt="2024年香港名校探校之旅" />
      <component :is="About" :data="about" />
      <component :is="LiangDian" :data="liangdian" />
    </section>
    <component :is="XingCheng" :data="xingcheng" :arrimg />
    <component :is="School" :data="school" width="20%" />
    <component :is="Footer" />
    <component :is="VideoMask" />
    <component :is="RightFixedNav" />
    <component :is="MaskForm" mark="香港教育文化之旅第12期_国际教育网PC版" />
    <component :is="ImgMask" />
  </div>
</template>

<style lang="less" scoped>
.hk11 {
  --primary: #f3ad25;
  --next: #873b03;
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

section.green {
  background-color: #f3ad25;
}

section.green>div>h3 {
  color: #fff;
}
</style>
