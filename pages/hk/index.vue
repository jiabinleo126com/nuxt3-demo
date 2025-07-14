<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import c0ac9bd53 from '~/assets/hk/0ac9bd53.png'
import c0b448db7 from '~/assets/hk/0b448db7.png'
import c0d8e9010 from '~/assets/hk/0d8e9010.png'
import c1b010a11 from '~/assets/hk/1b010a11.jpg'
import c1df5f6c4 from '~/assets/hk/1df5f6c4.jpg'
import c2cc38f8f from '~/assets/hk/2cc38f8f.png'
import c2d77298b from '~/assets/hk/2d77298b.jpg'
import c2e84c33a from '~/assets/hk/2e84c33a.jpg'
import c2f88619a from '~/assets/hk/2f88619a.png'
import c4d0e9fe3 from '~/assets/hk/4d0e9fe3.png'
import c5c6f4954 from '~/assets/hk/5c6f4954.jpg'
import c6a712fb8 from '~/assets/hk/6a712fb8.jpg'
import c6c321c2a from '~/assets/hk/6c321c2a.jpg'
import c6deebeca from '~/assets/hk/6deebeca.png'
import c6e1dc52e from '~/assets/hk/6e1dc52e.jpg'
import c6e911020 from '~/assets/hk/6e911020.jpg'
import c7bb7c6e6 from '~/assets/hk/7bb7c6e6.jpg'
import c7d550e27 from '~/assets/hk/7d550e27.jpg'
import c7f26ba1c from '~/assets/hk/7f26ba1c.png'
import c8d9c1e18 from '~/assets/hk/8d9c1e18.png'
import c8e556499 from '~/assets/hk/8e556499.png'
import c8fc0bbc8 from '~/assets/hk/8fc0bbc8.png'
import c8ff91ad2 from '~/assets/hk/8ff91ad2.png'
import c9adc807d from '~/assets/hk/9adc807d.jpg'
import c9dc8f73e from '~/assets/hk/9dc8f73e.png'
import c17b145cb from '~/assets/hk/17b145cb.png'
import c22dcc7aa from '~/assets/hk/22dcc7aa.png'
import c31df18ad from '~/assets/hk/31df18ad.png'
import c44b6bd1c from '~/assets/hk/44b6bd1c.png'
import c55cee2c0 from '~/assets/hk/55cee2c0.png'
import c56ba5976 from '~/assets/hk/56ba5976.jpg'
import c83b35e49 from '~/assets/hk/83b35e49.jpg'
import c555cf639 from '~/assets/hk/555cf639.png'
import c844afdbf from '~/assets/hk/844afdbf.jpg'
import c912badb5 from '~/assets/hk/912badb5.jpg'
import c4829b767 from '~/assets/hk/4829b767.jpg'
import c7214aa4a from '~/assets/hk/7214aa4a.png'
import c50296303 from '~/assets/hk/50296303.jpg'
import c83969475 from '~/assets/hk/83969475.jpg'
import c86575112 from '~/assets/hk/86575112.png'
import ca18dd30a from '~/assets/hk/a18dd30a.png'
import ca25a6c91 from '~/assets/hk/a25a6c91.png'
import ca85ac888 from '~/assets/hk/a85ac888.jpg'
import ca14564f4 from '~/assets/hk/a14564f4.png'
import cb05cf5a4 from '~/assets/hk/b05cf5a4.png'
import cb127de8d from '~/assets/hk/b127de8d.jpg'
import cbc7e4f26 from '~/assets/hk/bc7e4f26.png'
import cc1da48a3 from '~/assets/hk/c1da48a3.png'
import cc217b964 from '~/assets/hk/c217b964.jpg'
import cd0dc71e9 from '~/assets/hk/d0dc71e9.png'
import cd0f41994 from '~/assets/hk/d0f41994.png'
import cd01a5eb8 from '~/assets/hk/d01a5eb8.jpg'
import cd467fdb9 from '~/assets/hk/d467fdb9.png'
import cd73340af from '~/assets/hk/d73340af.png'
import ce8bd1435 from '~/assets/hk/e8bd1435.jpg'
import ce60ef913 from '~/assets/hk/e60ef913.png'
import cf1b7b1b0 from '~/assets/hk/f1b7b1b0.jpg'
import cf29cd3de from '~/assets/hk/f29cd3de.jpg'
import cf3195b61 from '~/assets/hk/f3195b61.png'
import cfc875f70 from '~/assets/hk/fc875f70.jpg'
import cfdd060b9 from '~/assets/hk/fdd060b9.jpg'
import william from '~/assets/hk/william.png'

const Header = defineAsyncComponent(() => import(`~/components/hk/Header.vue`))
const Footer = defineAsyncComponent(() => import(`~/components/hk/Footer.vue`))

onMounted(() => {
  // eslint-disable-next-line no-new
  new Swiper('.bannerswiper', {
    loop: true,
    pagination: {
      el: '.bannerswiper-pagination',
    },
  })
  fullyear.textContent = new Date().getFullYear()
  $(window).scroll(() => {
    if ($(window).scrollTop() > $(window).height()) {
      $('#gotop').show()
    }
    else {
      $('#gotop').hide()
    }
  })
  $('#gotop').on('click', () => {
    $('html,body').animate({ scrollTop: 0 }, 500)
  })
  $('.sf').on('click', () => {
    $('.f-mask').show()
  })
  $('img.close').on('click', () => {
    $('.f-mask').hide()
  })
  const inputs = [
    {
      class: 'name',
      message: '請填寫孩子姓名',
    },
    {
      class: 'grade',
      message: '請選擇孩子在讀年級',
    },
    {
      class: 'mobile',
      message: '請填寫電話號碼',
    },
  ]
  $('button[type=submit]').click(() => {
    const form = $(this).closest('form')
    const errors = []
    const msg = inputs.reduce((_acc, input) => {
      let val = ''
      if (input.class === 'grade') {
        val = form.find('[name=\'grade\']').val()
      }
      else {
        val = form.find(`.${input.class}`).val()
      }
      if (!val) {
        errors.push(input.message)
      }
      return errors[0]
    }, '')
    if (msg) {
      layer.msg(msg, {
        icon: 2,
        time: 3000,
      })
    }
    else {
      $.ajax({
        url: `${form[0].action}&t=${Math.random()}`,
        type: form[0].method,
        dataType: 'JSON',
        data: form.serialize(),
        success(res) {
          if (res.status === 1) {
            layer.msg('您已報名成功，謝謝您的參與！', {
              icon: 1,
              time: 3000,
            })
            $('.f-mask').hide()
            form[0].reset()
          }
          else {
            layer.msg(res.info, {
              icon: 2,
              time: 3000,
            })
          }
        },
        error() {
          layer.msg('數據提交失敗，請稍後再試', {
            icon: 2,
            time: 3000,
          })
        },
      })
    }
    return false
  })

  $('.kefu').on('click', () => {
    open_kefu()
  })
  function open_kefu() {
    const url = 'https://p.qiao.baidu.com/cps/chat?siteId=17703851&userId=33651932&siteToken=25b3e7ac69f5b12c1fc2e0367d02eb0d'
    const name = ''
    const iWidth = 800
    const iHeight = 700
    const iTop = (window.screen.height - 30 - iHeight) / 2
    const iLeft = (window.screen.width - 10 - iWidth) / 2
    window.open(url, name, `height=${iHeight},innerHeight=${iHeight},width=${iWidth},innerWidth=${iWidth},top=${iTop},left=${iLeft},toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no`)
  }
  // eslint-disable-next-line no-new
  new Swiper('.lqjb-swiper', {
    effect: 'coverflow',
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 3,
    autoplay: true,
    loop: true,
    coverflowEffect: {
      rotate: 6,
      stretch: 2,
      depth: 180,
      modifier: 3,
      slideShadows: false,
    },
  })

  setTimeout(() => {
    $('.bg').css('opacity', 1)
  }, 1000)
  // eslint-disable-next-line no-new
  new Swiper('.team-swiper', {
    slidesPerView: 5,
    loop: true,
    navigation: {
      nextEl: '.team-swiper-button-next',
      prevEl: '.team-swiper-button-prev',
    },
  })
})

const LqjbSwiperData = [
  c1b010a11,
  cc217b964,
  c56ba5976,
  c83b35e49,
  cd01a5eb8,
  c6a712fb8,
  c7bb7c6e6,
  c7d550e27,
  c5c6f4954,
  cb127de8d,
  ce8bd1435,
  cf29cd3de,
  cf1b7b1b0,
  c50296303,
  ca85ac888,
  c9adc807d,
  c6c321c2a,
  c4829b767,
  cfdd060b9,
  c844afdbf,
  c83969475,
  cfc875f70,
  c1df5f6c4,
  c6e1dc52e,
  c6e911020,
  c2d77298b,
  c2e84c33a,
  c912badb5,
]
</script>

<template>
  <component :is="Header" />
  <section>
    <div class="bannerswiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img :src="c44b6bd1c" alt="香港优质学校一站式VIP名校升学服务" class="banner">
          <span class="sf"></span>
        </div>
        <div class="swiper-slide">
          <a href="guoji.html">
            <img :src="c17b145cb" alt="香港优质学校一站式VIP名校升学服务" class="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="bendi.html">
            <img :src="c9dc8f73e" alt="香港优质学校一站式VIP名校升学服务" class="banner">
          </a>
        </div>
      </div>
      <div class="bannerswiper-pagination"></div>
    </div>
    <div class="mxsx">
      <h2 class="title">
        <p en="school">
          名校<a>升學</a>
        </p>
        <p class="tip"></p>
      </h2>
      <div class="box">
        <div class="item-wrap" :style="`background-image:url('${ca14564f4}')`">
          <div class="bg"></div>
          <div class="item">
            <div class="title">
              國際學校升學服務
            </div>
            <p>開啟夢校沖刺方案</p><a href="guoji.html" target="_blank">查看详情</a>
          </div>
        </div>
        <div class="item-wrap" :style="`background-image:url('${c31df18ad}')`">
          <div class="bg"></div>
          <div class="item">
            <div class="title">
              本地學校升學服務
            </div>
            <p>開啟夢校沖刺方案</p><a href="bendi.html" target="_blank">查看详情</a>
          </div>
        </div>
      </div>
    </div>
    <div class="liucheng">
      <a class="kefu">更多申請問題在線解答 &gt;</a>
    </div>
    <div class="jzxy">
      <div class="con">
        <h2 class="title">
          <p en="Join us">
            選擇<a>我們</a>
          </p>
          <p class="tip">
            赴港升學家長的大本營，加入我們，與優秀同行！
          </p>
        </h2>
        <ul>
          <li>
            <img :src="c8fc0bbc8" alt="">
            <p><i></i>家長不懂香港教育制度</p>
            <p>——如何規劃孩子進名校?</p>
          </li>
          <li>
            <img :src="c8e556499" alt="">
            <p><i></i>家長英文差，無法輔導國際學校課程</p>
            <p>————如何幫助進名校?</p>
          </li>
          <li>
            <img :src="cd0f41994" alt="">
            <p><i></i>家長忙，沒時間幫孩子規劃課外活動和補習</p>
            <p>——如何規劃孩子進名校?</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="ad">
      <div class="con">
        <p>
          <a>香港愛讀教育-國際教育網升學中心</a>家長學院，不僅關註孩子學習、性格、心理等方面的發展，還精心設計涵蓋幼小初高全年齡段孩子遇到的相關困惑與答疑線上線下課堂，幫助家長獲取香港名校一手資訊以及科學的教育理念和教育方法，助力孩子成長和升學！
        </p>
      </div>
    </div>
    <div class="youshi">
      <h2 class="title">
        <p en="advantage">
          我们<a>的优势</a>
        </p>
        <p class="tip"></p>
      </h2>
      <ul>
        <li>
          <div class="image">
            <img :src="cf3195b61" alt="高端香港升學機構" class="icon">
            <img :src="c86575112" alt="高端香港升學機構" class="icon_hide">
          </div>
          <div class="text">
            <div class="title">
              高端香港升學機構
            </div>
            <p>12年一站式香港名校升學服務經驗，包括入學、轉學、插班申請，入學備考及同步提升課程等</p>
            <p>海量名校錄取案例經驗</p>
          </div>
        </li>
        <li>
          <div class="image">
            <img :src="cd0dc71e9" alt="同步名校教學和資源" class="icon">
            <img :src="c7214aa4a" alt="同步名校教學和資源" class="icon_hide">
          </div>
          <div class="text">
            <div class="title">
              同步名校教學和資源
            </div>
            <p>提供跟香港學校同步的閱讀、學習軟件以及優質的學習資源</p>
            <p>與香港本地及國際名校建立了良好關系，掌握珍貴的考試資訊及名校資源</p>
          </div>
        </li>
        <li>
          <div class="image">
            <img :src="c4d0e9fe3" alt="教學團隊全程把控服務質量" class="icon">
            <img :src="cbc7e4f26" alt="教學團隊全程把控服務質量" class="icon_hide">
          </div>
          <div class="text">
            <div class="title">
              教學團隊全程把控服務質量
            </div>
            <p>擔任過國際學校招生、海外名校碩士以上學歷，10數年以上的國際教育行業工作經驗的優秀老師組成服務團隊</p>
            <p>教師教研團隊95%以上的老師碩士畢業於世界名校，並有國際教育教學經驗，媲美國際名校師資力量</p>
          </div>
        </li>
        <li>
          <div class="image">
            <img :src="c555cf639" alt="家長學院幫助家長同步學習" class="icon">
            <img :src="ce60ef913" alt="家長學院幫助家長同步學習" class="icon_hide">
          </div>
          <div class="text">
            <div class="title">
              家長學院幫助家長同步學習
            </div>
            <p>
              家長學院開課內容包括：擇校備考攻略、家校配合、學習提升、課外規劃、綜合素質發展等全方位孩子成長中家長需要學習的知識
            </p>
            <p>
              我們是協助家長的升學顧問、學習規劃師、學習管家、心理輔導師……是家長和校方的橋梁，幫助孩子走向世界
            </p>
          </div>
        </li>
        <li>
          <div class="image">
            <img :src="c2f88619a" alt="對申請結果負責" class="icon">
            <img :src="c2cc38f8f" alt="對申請結果負責" class="icon_hide">
          </div>
          <div class="text">
            <div class="title">
              對申請結果負責
            </div>
            <p>確保學生被目標學校錄取，名校申請成功率達到95%以上</p>
            <p>確保學生學習和吸收同年級段知識點，為目標學校入學做全面準備</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="team">
      <h2 class="title">
        <p en="team">
          顧問<a>團隊</a>
        </p>
        <p class="tip">
          24小時為您提供咨詢服務，個性化制定升學方案
        </p>
      </h2>
      <div class="team-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="c8ff91ad2" alt="David"> <span>David</span>
            <p>
              博士畢業於加州理工學院<br>碩士畢業於加州大學洛杉磯分校<br>擔任加州大學終身教授<br>廣州金控（香港）集團國際教育顧問<br>曾擔任廣州南沙國際教育發展國際教育總監
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="ca18dd30a" alt="Linda"> <span>Linda</span>
            <p>
              教育学硕士 / 国际教育网VP<br>十余年国际教育行业从业经历<br>曾任职于国际学校教师及招生官超过6年时间<br>已帮助过上千名学子成功入读深圳、香港、海外等尖端国际学校<br>首届学生95%入读世界前百强学校且陆续毕业走向社会
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="c6deebeca" alt="Melody"> <span>Melody</span>
            <p>
              香港教育大學<br>教育學碩士<br>高中和本科就讀於加拿大，並以優异的成績從香港教育大學英語教育碩士畢業，擁有英文教育專業資格證<br>畢業後曾有豐富的加拿大及香港本地的學校工作等相關經驗。<br>累计10年的海外、香港的留学及工作经验，极为擅长为家庭定制升学及学习规划。
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="c55cee2c0" alt="Lee"> <span>Lee</span>
            <p>英國赫爾瓦特大學傳播學博士<br>英國萊斯特大學大眾傳播專業碩士</p>
          </div>
          <div class="swiper-slide">
            <img :src="c0b448db7" alt="朱凡"> <span>朱凡</span>
            <p>
              歷史系博士，加拿大低齡留學楷模，親子教育專家，現居加拿大<br>加拿大百年貴族名校聖瑪格麗特校董兼中國家長聯誼會主席<br>多倫多著名公校森林山高中家長委員會委員<br>《新浪教育》、《外灘教育》和《南方日報》等多個專欄作家著有《輕松留學加拿大》、《帶你走進加拿大高中》、《帶你走進加拿大大學》<br>等多本親子教育及加拿大留學專著
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="c0d8e9010" alt="Miya"> <span>Miya</span>
            <p>
              國際教育網香港升學老師<br>多年國際教育行業經驗<br>曾任職於高端國際學校擔任過校長助理、校務主任、招聘主任<br>特別擅長服務頂級國際學校升學，服務學生進入漢基、德瑞、弘立、新加坡國際，加拿大國際，香港國際，英基等名校
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="c7f26ba1c" alt="Gigi"> <span>Gigi</span>
            <p>
              國際教育網香港升學老師<br>畢業於美國東北大學<br>專業-管理學碩士<br>多年海外教育背景及一線公立小學英語教師和班主任經驗，為人耐心，有親和力，具有優秀的英語和粵語的聽說書寫能力<br>具有較強的工作統籌規劃能力，熟悉國內外學校教學模式，擅於在教學過程中發掘學生潛力，根據需求定製個性化的學校選擇方案，幫助學生順利入讀名校
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="cb05cf5a4" alt="Rowling"> <span>Rowling</span>
            <p>
              英國諾丁漢大學-碩士<br>為人熱情耐心有親和力，擅長溝通。
              會根據學生的不同情况評估整體學習水准，挖掘其學術亮點和性格優勢，為他們定制個性化的背景提升方案及專業性的擇校建議。<br>具有兩年海外教育背景，瞭解英國方面的出國留學業務及申請流程。<br>工作細緻有責任心，致力於幫學生和家長成功實現理想學校的申請
            </p>
          </div>
        </div>
      </div>
      <div class="team-swiper-pagination"></div>
      <div class="team-swiper-button-prev"></div>
      <div class="team-swiper-button-next"></div>
      <div class="bg">
        <span></span>
      </div>
    </div>
    <div class="team">
      <h2 class="title">
        <p en="team">
          教學<a>團隊</a>
        </p>
        <p class="tip">
          擁有全國一流、權威的教學團隊，給與孩子充分的教學保障
        </p>
      </h2>
      <div class="team-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="ca25a6c91" alt="Bridget"> <span>Bridget</span>
            <p>
              特倫特大學<br>加拿大多倫多蒙台梭利研究所<br>托馬斯愛迪生大學<br>Bridget老師，畢業於加拿大最好的大學——多倫多大學，同時進修蒙台梭利教師學位。<br>任職於多家蒙台梭利學校的校長和教師，也為很多教師做專業系統的培訓。<br>擁有超過十年的Montessori教育教學指導經驗，在完備的環境中，尊重孩子身心發展，培養孩子獨立思考能力，旨在培養優秀世界公民
            </p>
          </div>
          <div class="swiper-slide">
            <img alt="William" :src="william"> <span>William</span>
            <p>
              香港英华书院A-Level毕业生,
              18年香港DSE教育从业者,
              香港全科教学老师,<br>
              国际教育网升学中心特级导师,
              澳大利亚伍伦贡大学学士,<br>
              深度服务上千位学生进入香港band1等名校。
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="c0ac9bd53" alt="Alex"> <span>Alex</span>
            <p>
              加州州立理工大學<br>高中就讀於全美頂尖的山麓中學&第一大道中學，大學畢業於加州州立理工大學，該大學在「頂級公立學校：西部地區大學」<br>「2021年大學排名」中排名第2，在西部所有公立和私立機构中也上昇到第10比特。<br>純正美式教育全程親歷者，母語是英文，從小學、國中、高中到大學就讀於美國加州名校，瞭解美國中小學生及大學生的課程體系和各名校的教學理念，<br>擁有豐富的教授經驗及國際學校備考經驗。<br>曾榮獲「總統傑出學術成就銀獎」
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="c8d9c1e18" alt="Alisa"> <span>Alisa</span>
            <p>
              愛丁堡大學教育學博士<br>浙江大學教育學博士<br>香港大學教育學碩士<br>擁有豐富的國際學校的教學經驗，除了多年來教授學生，也在香港多間學校任教及擔任調研工作，擅長中小學英文和數學科
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="c6deebeca" alt="Melody"> <span>Melody</span>
            <p>
              香港教育大學<br>教育學碩士<br>高中和本科就讀於加拿大，並以優异的成績從香港教育大學英語教育碩士畢業，擁有英文教育專業資格證<br>畢業後曾有豐富的加拿大及香港本地的學校工作等相關經驗。<br>累计10年的海外、香港的留学及工作经验，极为擅长为家庭定制升学及学习规划。
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="c22dcc7aa" alt="Lavrel K"> <span>Lavrel K</span>
            <p>
              耶魯大學醫學博士<br>牛津大學天文學和天體物理學博士<br>擅長教數學和物理，同時是一位元系外行星研究員<br>英美雙背景，教過所有年齡段的學生，特別擅長將題目折開為簡單的概念，說明學生理解物理和數學題目
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="cd73340af" alt="Corina"> <span>Corina</span>
            <p>
              牛津大學-東方學博士<br>老師中文水準卓越。 成功指導過4名學生參加GCSE考試，均取得A * /
              A成績。<br>2017年，2016年，作為牛津大學東方學漢語教師，為15名大學生設計並講授中國古典文學教學大綱覈心內容。<br>曾在某國際教育培訓機構任職教師，開發並提供英語課程
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="cc1da48a3" alt="Karan B"> <span>Karan B</span>
            <p>
              劍橋大學-生物工程博士<br>對生物、化學、數學的教學熱情飽滿，牛劍申請輔導經驗豐富，曾整個夏天在上海授課，出任生物和化學導師，<br>提供類比牛津劍橋面試和個人陳述等文書類輔導，幫助學生們做申請。<br>瞭解中國學生學習痛點，深入探討的教學風格，內容也盡可能引人入勝，同時會專注於考試技巧的提高
            </p>
          </div>
          <div class="swiper-slide">
            <img :src="cd467fdb9" alt="Cheng"> <span>Cheng</span>
            <p>
              新加坡南洋理工大學哲學博士、澳大利亞悉尼大學博士後<br>世界QS排名第12的綜合性大學理工科博士畢業，曾經在澳大利亞悉尼大學從事科研工作一年半，兩所學校科學研究實力及教學品質均排名世界頂尖大學之列。<br>現時在知名雜誌上發表國際學術論文20餘篇。其中第一作者/通訊作者（含共同）9篇。
              近三年來協助指導博士研究生1名（已順利畢業），<br>碩士研究生多名（來自澳大利亞、義大利及伊朗等國家）以及大學生數名。有三年的兼職教授AP微積分、AP物理、AP化學的經驗。<br>以及輔導多名新加坡學生A-Level考入理想的大學，希望能幫到更多的學生進入自己的dream
              school以及通過我自身的經歷為學生們提供更廣闊的視角
            </p>
          </div>
        </div>
      </div>
      <div class="team-swiper-pagination"></div>
      <div class="team-swiper-button-prev"></div>
      <div class="team-swiper-button-next"></div>
      <div class="bg">
        <span></span>
      </div>
    </div>
    <div class="moreteam">
      <a href="jiaoxuelaoshi.html">查看更多專家團隊 &gt;</a>
    </div>
    <div class="lqjb">
      <h2 class="title">
        <p en="offer">
          錄取<a>捷報</a>
        </p>
        <p class="tip">
          從擇校到入學，幫助每一位孩子順利入讀心儀學校，叩開名校大門，我們共同見證榮耀！
        </p>
      </h2>
      <div class="lqjb-swiper">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in LqjbSwiperData" :key="index" class="swiper-slide">
            <img :src="item" alt="" height="657" width="467">
          </div>
        </div>
      </div>
    </div>
    <div class="f-mask">
      <div class="con">
        <div class="form">
          <h3>學校諮詢表單填寫</h3>
          <img :src="c361fd706" alt="關閉" class="close">
          <form action="/index.php?m=college&c=index&a=collegereg" method="post">
            <input name="mark" type="hidden" value="国际教育网PC版_香港专题">
            <input name="dopost" type="hidden" value="reg">
            <h4>請您填寫信息，專業老師將盡快聯繫您</h4>
            <label for="">
              <span>孩子姓名</span>
              <input name="name" type="text" autocomplete="off" class="name">
            </label>
            <label for="">
              <span>孩子在讀年級</span>
              <select class="grade" name="grade">
                <option value="" style="display:none"></option>
                <option value="幼儿园">幼兒園</option>
                <option value="一年级">一年級</option>
                <option value="二年级">二年級</option>
                <option value="三年级">三年級</option>
                <option value="四年级">四年級</option>
                <option value="五年级">五年級</option>
                <option value="六年级">六年級</option>
                <option value="七年级">七年級</option>
                <option value="八年级">八年級</option>
                <option value="九年级">九年級</option>
                <option value="十年级">十年級</option>
                <option value="十一年级">十一年級</option>
                <option value="十二年级">十二年級</option>
                <option value="大一">大一</option>
                <option value="大二">大二</option>
                <option value="大三">大三</option>
                <option value="大四">大四</option>
                <option value="已毕业">已畢業</option>
              </select>
            </label>
            <label for="">
              <span>意向學校</span>
              <input name="want_school" type="text" autocomplete="off" class="want">
            </label>
            <label for="">
              <span>電話號碼</span>
              <input name="mobile" type="text" autocomplete="off" class="mobile">
            </label>
            <div class="btn">
              <button type="submit">
                確認提交
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <component :is="Footer" />
</template>

<style lang="less">
.bannerswiper {
  width: 100%;
  min-width: 1200px;
  height: 665px;
  overflow: hidden;
  position: relative;
}

.bannerswiper .swiper-wrapper .swiper-slide {
  width: 100%;
  height: 665px;
  position: relative;
}

.bannerswiper .swiper-wrapper .swiper-slide span {
  position: absolute;
  left: 49%;
  top: 441px;
  z-index: 10;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 386px;
  height: 52px;
  cursor: pointer;
}

.bannerswiper .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 665px;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.bannerswiper .bannerswiper-pagination {
  bottom: 29px;
  position: absolute;
  z-index: 10;
  text-align: center;
}

.bannerswiper .bannerswiper-pagination .swiper-pagination-bullet {
  width: 9px;
  height: 9px;
  background-color: white;
  border-radius: 0;
  opacity: 1;
  margin: 0 4px;
}

.bannerswiper .bannerswiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 34px;
  background-color: #FFA52E;
}

.mxsx {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0 53px;
}

.mxsx .box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 50px;
}

.mxsx .box .item-wrap {
  width: 570px;
  height: 350px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(44, 46, 113, 0.5);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: color-burn;
  position: relative;
}

.mxsx .box .item-wrap .item {
  width: 570px;
  height: 350px;
  position: relative;
  padding: 92px 50px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 20;
}

.mxsx .box .item-wrap .item .title {
  font-size: 40px;
  font-weight: 500;
  color: #FFFFFF;
  position: relative;
}

.mxsx .box .item-wrap .item .title::after {
  position: absolute;
  content: "";
  width: 90px;
  height: 4px;
  left: 0;
  bottom: -37px;
  background: #FFFFFF;
}

.mxsx .box .item-wrap .item p {
  font-size: 28px;
  font-weight: 400;
  color: #FFFFFF;
  margin-top: 77px;
}

.mxsx .box .item-wrap .item a {
  position: absolute;
  font-size: 24px;
  font-weight: 400;
  color: #FFFFFF;
  width: 233px;
  height: 67px;
  background: #323272;
  right: 0;
  bottom: -33px;
  text-align: center;
  line-height: 67px;
  padding-right: 36px;
}

.mxsx .box .item-wrap .item a::after {
  position: absolute;
  content: "";
  right: 70px;
  top: 26px;
  width: 23px;
  height: 17px;
  background: url(~/assets/hk/3316edd6.png) center / contain no-repeat;
}

.mxsx .box .item-wrap .item .bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(50, 50, 114, 0.5);
}

.mxsx .box .item-wrap .bg {
  position: absolute;
  z-index: 8;
  width: 0;
  height: 100%;
  opacity: 0;
  background-color: rgba(50, 50, 114, 0.5);
  -webkit-animation: sss2 1s 1;
  animation: sss2 1s 1;
}

.mxsx .box .item-wrap:hover .bg {
  width: 100%;
  -webkit-animation: sss 1s 1;
  animation: sss 1s 1;
}

@-webkit-keyframes sss2 {
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
}

@keyframes sss2 {
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
}

@-webkit-keyframes sss {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}

@keyframes sss {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}

h2.title {
  text-align: center;
  width: 1200px;
  margin: 0 auto;
  background: url(~/assets/hk/ec8829b2.png) center bottom / 1200px 18px no-repeat;
}

h2.title p {
  font-size: 48px;
  font-weight: 500;
  color: #333333;
  padding-top: 40px;
  letter-spacing: 12px;
  line-height: 54px;
  padding-bottom: 32px;
}

h2.title p::before {
  content: attr(en);
  display: block;
  height: 0;
  font-size: 72px;
  font-weight: bold;
  color: rgba(51, 51, 51, 0.1);
  line-height: 0;
  text-transform: uppercase;
  letter-spacing: 0;
}

h2.title p a {
  color: #2C2E71;
}

h2.title p.tip {
  font-size: 20px;
  font-weight: 400;
  color: #333333;
  margin-top: -62px;
  line-height: 22px;
  letter-spacing: 0;
}

.liucheng {
  background: url(~/assets/hk/89e04594.png) center / cover no-repeat;
  height: 700px;
  width: 100%;
  min-width: 1200px;
  margin-top: 60px;
  position: relative;
}

.liucheng a {
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  display: inline-block;
  width: 253px;
  height: 50px;
  background: #FF9100;
  line-height: 50px;
  text-align: center;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(152px);
  transform: translateX(152px);
  bottom: 44px;
  cursor: pointer;
}

.liucheng a:hover {
  background-color: #e18914;
}

.jzxy {
  background-color: #F8F8F8;
  padding-top: 80px;
  padding-bottom: 52px;
}

.jzxy .con {
  width: 1200px;
  margin: 0 auto;
}

.jzxy .con ul {
  margin-top: 60px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.jzxy .con ul li {
  width: 366px;
  height: 345px;
  background: #FFFFFF;
  -webkit-box-shadow: 0px 0px 20px 1px rgba(143, 143, 143, 0.1608);
  box-shadow: 0px 0px 20px 1px rgba(143, 143, 143, 0.1608);
  position: relative;
}

.jzxy .con ul li::after {
  position: absolute;
  content: "";
  left: 146px;
  top: 60px;
  width: 74px;
  height: 123px;
  background: url(~/assets/hk/61ae2337.png) center / contain no-repeat;
}

.jzxy .con ul li img {
  width: 366px;
  height: 240px;
  -webkit-filter: brightness(0.5);
  filter: brightness(0.5);
}

.jzxy .con ul li p {
  font-size: 18px;
  font-weight: 400;
  color: #333333;
  line-height: 26px;
  padding-top: 20px;
}

.jzxy .con ul li p i {
  display: inline-block;
  width: 5px;
  height: 22px;
  background: #2C2E71;
  margin-right: 10px;
  vertical-align: -5px;
}

.jzxy .con ul li p:last-of-type {
  text-align: right;
  padding-bottom: 24px;
  padding-right: 15px;
}

.ad {
  width: 100%;
  min-width: 1200px;
  height: 380px;
  background: #2C2E71 url(~/assets/hk/f69e607f.png) 1144px 0 / 776px 380px no-repeat;
}

.ad .con {
  width: 1200px;
  margin: 0 auto;
  padding-top: 70px;
  background: url(~/assets/hk/ebd92e05.png) 0 101px / 67px 54px no-repeat;
}

.ad .con p {
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 34px;
  width: 988px;
  height: 246px;
  background: url(~/assets/hk/2ce4be46.png) center / cover no-repeat;
  padding-right: 270px;
  padding-top: 70px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.ad .con p a {
  color: #FF9100;
  font-size: 24px;
}

.youshi {
  padding-top: 84px;
  width: 100%;
  margin: 0 auto;
  width: 1200px;
}

.youshi ul {
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
  background: url(~/assets/hk/1a951504.png) right center / 1047px 529px no-repeat;
  counter-reset: item;
}

.youshi ul li {
  padding-top: 30px;
  width: 535px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  cursor: pointer;
}

.youshi ul li .image {
  font-size: 0;
}

.youshi ul li .image img {
  width: 186px;
  height: 169px;
}

.youshi ul li .image img.icon_hide {
  display: none;
}

.youshi ul li:hover .image img {
  display: none;
}

.youshi ul li:hover .image img.icon_hide {
  display: block;
}

.youshi ul li .text .title {
  position: relative;
  font-size: 22px;
  font-weight: 500;
  color: #2C2E71;
  border-bottom: 1px solid #9F9F9F;
  padding: 9px 0 9px 18px;
}

.youshi ul li .text .title::before {
  content: "0" counter(item);
  counter-increment: item;
  position: absolute;
  left: 0;
  bottom: 8px;
  width: 54px;
  height: 46px;
  font-size: 46px;
  font-weight: bold;
  color: rgba(44, 46, 113, 0.14);
}

.youshi ul li .text p {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
  padding-left: 19px;
  position: relative;
  padding-top: 6px;
}

.youshi ul li .text p::before {
  position: absolute;
  content: "";
  left: 0;
  top: 12px;
  width: 10px;
  height: 10px;
  background: #2C2E71;
  border-radius: 0px 0px 0px 0px;
}

.team {
  padding-top: 80px;
  position: relative;
  overflow: hidden;
  user-select: none;
}

.team .team-swiper {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  height: 628px;
}

.team .team-swiper .swiper-slide {
  text-align: center;
  padding-top: 110px;
}

.team .team-swiper .swiper-slide img {
  width: 160px;
  height: 160px;
  transition: all 0.3s;
}

.team .team-swiper .swiper-slide p {
  margin-top: 26px;
  width: 1200px;
  position: absolute;
  left: -200%;
  display: none;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 26px;
}

.team .team-swiper .swiper-slide span {
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 26px;
  padding-top: 20px;
}

.team .team-swiper .swiper-slide.swiper-slide-active {
  margin-left: -38px;
}

.team .team-swiper .swiper-slide.swiper-slide-next {
  margin-left: -10px;
}

.team .team-swiper .swiper-slide.swiper-slide-next+.swiper-slide {
  padding-top: 60px;
  margin-left: 50px;
}

.team .team-swiper .swiper-slide.swiper-slide-next+.swiper-slide span {
  position: relative;
  padding-bottom: 20px;
}

.team .team-swiper .swiper-slide.swiper-slide-next+.swiper-slide span:after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background: #FF9100;
}

.team .team-swiper .swiper-slide.swiper-slide-next+.swiper-slide img {
  width: 260px;
  height: 260px;
  margin-left: -11px;
  transition: all 0.3s;
}

.team .team-swiper .swiper-slide.swiper-slide-next+.swiper-slide p,
.team .team-swiper .swiper-slide.swiper-slide-next+.swiper-slide span {
  display: block;
}

.team .team-swiper .swiper-slide.swiper-slide-next+.swiper-slide+.swiper-slide {
  margin-left: 52px;
}

.team .team-swiper .swiper-slide.swiper-slide-next+.swiper-slide+.swiper-slide+.swiper-slide {
  margin-left: -14px;
}

.team .team-swiper-button-prev,
.team .team-swiper-button-next {
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 190px;
  z-index: 20;
  border-radius: 50%;
  cursor: pointer;
  background: url(~/assets/hk/4c5eb414.png) center / contain no-repeat;
}

.team .team-swiper-button-prev {
  left: 50%;
  transform: translateX(-708px);
}

.team .team-swiper-button-next {
  right: 50%;
  transform: translateX(708px) rotateZ(180deg);
}

.team .bg {
  width: 100%;
  height: 440px;
  margin-top: -440px;
  background-color: #2C2E71;
  text-align: center;
}

.team .bg span {
  display: inline-block;
  width: 280px;
  height: 280px;
  margin-top: -139px;
  background-color: #2C2E71;
  border-radius: 50%;
}

.moreteam {
  height: 160px;
  background-color: white;
  width: 100%;
  text-align: center;
  padding-top: 30px;
  box-sizing: border-box;
}

.moreteam a {
  display: inline-block;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  background: #1e2063;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  box-shadow: 10px 10px 0 0 rgba(44, 46, 113, 0.15);
  cursor: pointer;
}

.moreteam a:hover {
  background-color: #03053a;
}

.lqjb {
  padding-top: 70px;
  padding-bottom: 100px;
  background-color: #F8F8F8;
}

.lqjb .lqjb-swiper {
  width: 1200px;
  height: 700px;
  margin: 67px auto 0;
  overflow: hidden;
}

.lqjb .lqjb-swiper .swiper-wrapper .swiper-slide img {
  width: 467px;
  height: 657px;
  object-position: center;
  object-fit: contain;
  margin-left: -38px;
}

.f-mask {
  display: none;
}

.f-mask .con {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
}

.f-mask .con .form {
  width: 523px;
  height: 478px;
  background: #FFFFFF;
  border-radius: 8px;
  position: relative;
}

.f-mask .con .form h3 {
  width: 100%;
  height: 67px;
  background: #2C2E71;
  font-size: 24px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 67px;
  text-align: center;
}

.f-mask .con .form .close {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  width: 16px;
  height: 16px;
  box-sizing: content-box;
  padding: 12px;
  cursor: pointer;
}

.f-mask .con .form form {
  padding: 10px 38px 0 20px;
  font-size: 0;
}

.f-mask .con .form form h4 {
  font-size: 16px;
  font-weight: 400;
  color: #2C2E71;
  padding: 20px 0 10px;
  text-align: center;
}

.f-mask .con .form form label {
  margin-top: 20px;
  display: block;
  width: 100%;
}

.f-mask .con .form form label:nth-of-type(3) span::before {
  content: "";
}

.f-mask .con .form form label:nth-of-type(2) {
  position: relative;
}

.f-mask .con .form form label:nth-of-type(2)::after {
  position: absolute;
  right: 30px;
  top: 10px;
  content: "";
  z-index: 10;
  width: 20px;
  height: 20px;
  pointer-events: none;
  background: url(~/assets/hk/297553fa.png) center / contain no-repeat;
}

.f-mask .con .form form label span {
  width: 128px;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  text-align: right;
  padding-right: 21px;
  box-sizing: border-box;
}

.f-mask .con .form form label span::before {
  content: "*";
  color: #ff0000;
  font-size: 18px;
}

.f-mask .con .form form label input,
.f-mask .con .form form label select {
  box-sizing: border-box;
  width: 323px;
  height: 40px;
  line-height: 40px;
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #C8C8C8;
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  padding: 0 10px;
  outline: none;
  appearance: none;
}

.f-mask .con .form form label input:-internal-autofill-previewed,
.f-mask .con .form form label select:-internal-autofill-previewed,
.f-mask .con .form form label input:-internal-autofill-selected,
.f-mask .con .form form label select:-internal-autofill-selected {
  -webkit-text-fill-color: #000000;
  transition: background-color 5000s ease-out 0.5s;
}

.f-mask .con .form form .btn {
  text-align: center;
  box-sizing: border-box;
  padding-top: 35px;
}

.f-mask .con .form form .btn button {
  cursor: pointer;
  width: 271px;
  height: 45px;
  background: #2C2E71;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  border: none;
  outline: none;
}

.layui-layer-msg {
  background-color: white;
  top: 100px !important;
}
</style>
