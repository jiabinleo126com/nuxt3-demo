<script setup>
import { useHead } from 'nuxt/app';
import { onMounted } from 'vue';

const offer = [
  {
    title: '拔萃男书院',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_001.jpg'
  },
  {
    title: '汉基国际学校',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_002.jpg'
  },
  {
    title: '福建中学',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_003.jpg'
  },
  {
    title: '李宝椿UWC',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_004.jpg'
  },
  {
    title: '民生书院',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_005.jpg'
  },
  {
    title: '圣保罗书院',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_006.jpg'
  },
  {
    title: '愉景湾国际学校',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_007.jpg'
  },
  {
    title: '申請香港哈囉國際',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_36.jpg'
  },
  {
    title: '申請香港弘曆書院',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_37.jpg'
  },
  {
    title: '申請滬江維多利亞',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_38.jpg'
  },
  {
    title: '申請香港美國國際',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_41.jpg'
  },
  {
    title: '申請香港斯坦福國際',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_42.jpg'
  },
  {
    title: '申請香港新加坡國際',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/pic_43.jpg'
  },
  {
    title: '申請香港加拿大',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/e91f1e7.jpg'
  },
  {
    title: '申請香港弘曆書院',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/fdc3483c.jpg'
  },
  {
    title: '申請香港啟曆',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/d18a4f9e.jpg'
  },
  {
    title: '申請香港聖士提反書院',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/ffca5631.jpg'
  },
  {
    title: '申請香港新加坡',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/757ebbfc.jpg'
  },
  {
    title: '申請香港加拿大國際',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/37c2bdd4.jpg'
  },
  {
    title: '申請香港耀中',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/6fceb216.jpg'
  },
  {
    title: '申請香港啟思中學',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/850fb509.jpg'
  },
  {
    title: '申請香港耀中',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/31248468.jpg'
  },
  {
    title: '申請香港培僑中學',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/66f2604a.jpg'
  },
  {
    title: '申請香港加拿大國際',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/5e0f3458.jpg'
  },
  {
    title: '申請香港墨爾文國際學校',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/c525342b.jpg'
  },
  {
    title: '申請香港弘曆學校',
    image: '//m.ieduglobe.com/topic/xianggang/static/images/2932d572.jpg'
  }
]
onMounted(() => {
  $(function () {

    var d = new Date();
    var siteyear = d.getFullYear();
    $("#siteyear").html(siteyear);

    var apply = !0;
    $(".submit").on("click", function (e) {
      e = e || window.event
      e.preventDefault();
      var form = $(this).closest("form");

      if (!form.find('input[name="grade"]:checked').val()) {
        layer.open({
          content: '請選擇年級',
          skin: 'msg',
          time: 3
        });
        return false;
      }
      if (!form.find('input[name="hj"]:checked').val()) {
        layer.open({
          content: '請選擇戶籍',
          skin: 'msg',
          time: 3
        });
        return false;
      }
      if (!$.trim(form.find('input[name="name"]').val())) {
        layer.open({
          content: '请输入您的稱呼',
          skin: 'msg',
          time: 3
        });
        return false;
      }
      if (!$.trim(form.find('input[name="mobile"]').val())) {
        layer.open({
          content: '请输入您的聯繫方式',
          skin: 'msg',
          time: 3
        });
        return false;
      } else if (!/^[1][0-9]{10}$/.test($.trim(form.find('input[name="mobile"]').val()))) {
        layer.open({
          content: '手機號格式不正確',
          skin: 'msg',
          time: 3
        });
        return false;
      }

      var dataArr = form.serializeArray();
      var newObj = {};
      var mark = [];
      mark.push(form.find("input[mark=mark]").val())
      dataArr.forEach(function (el, index) {
        if (el.name == 'source') {
          mark.push(el.value)
        } else if (el.name == 'grade') {
          mark.push('年級：' + el.value)
        } else if (el.name == 'hj') {
          mark.push('戶籍：' + el.value)
        } else {
          newObj[el.name] = el.value
        }
      });
      newObj.mark = mark.join('%%%');
      var content = newObj;
      apply = !1;
      $.ajax({
        url: "/index.php?m=college&c=index&a=collegereg&dopost=reg&t=" + Math.random(),
        type: 'POST',
        dataType: 'json',
        data: content,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          'X-XXS-Protection': '1;mode=block',
          'X-Frame-Options': 'deny'
        },
        success: function (data) {
          if (data.status == 1) {
            form[0].reset();
            layer.open({
              content: '您已预约成功，谢谢您的参与！',
              skin: 'msg',
              time: 3
            });
            setTimeout(function () {
              $(".masks").hide();
            }, 3000)
          } else if (data.status == 0) {
            layer.open({
              content: data.info,
              skin: 'msg',
              time: 3
            });
          }
          apply = !0;
        },
        error: function () {
          layer.open({
            content: '预约失败，请稍后再试',
            skin: 'msg',
            time: 3
          });
          apply = !0;
        }
      })
    })

    var mySwiper2 = new Swiper('.a-hw-offer', {
      effect: 'coverflow',
      centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: 2.2,
      loop: true,
      autoplay: false,
      centeredSlides: true,
      slidesOffsetBefore: -14,
      coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 20,
        modifier: 6,
        slideShadows: false,
      }
    })

    $("#close").on("click", function () {
      $(".masks").hide();
    })
    $(".showmask").on("click", function () {
      $(".masks").css("display", "flex");
    })
  })
})


useHead({
  script: [
    {
      innerHTML: `
      // /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|OpenHarmony/i.test(navigator.userAgent)||(window.location.href="/ieduglobe/topic/xianggang");
      (function () {
            function onResize() {
                var width = document.documentElement.clientWidth;
                var style = document.createElement("style");
                style.setAttribute('id', 'style')
                var html = '';
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    html = "html{font-size: " + width / 16 + "px !important;}";
                } else {
                    html = "html{font-size: " + 750 / 16 + "px !important;max-width:750px;margin:0 auto !important;}";
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
    }
  ],
  link: [
    {
      itemprop: 'image',
      content: 'https://m.xuanxiaozhuanjia.com/statics/images/logo_share.jpg',
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://m.xuanxiaozhuanjia.com/statics/images/logo_share.jpg',
    },
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//www.xuanxiaozhuanjia.com/statics/expert/images/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: '//m.ieduchina.com/statics/css/swiper.min.css',
    },
  ],
  title: '香港小初高學校一站式升學',
  meta: [
    {
      name: 'keywords',
      content: '香港小初高學校一站式升學',
    },
    {
      name: 'description',
      content: '香港小初高學校一站式升學',
    },
  ],
})
</script>
<template>
  <img src="https://www.ieduglobe.com/statics/images/share.png" width="0" height="0" style="display:none;">
  <div class="edu">
    <h1>
      <a target="_blank" href="https://m.ieduglobe.com/">
        <img src="//m.ieduglobe.com/topic/xianggang/static/images/logo.png" alt="" srcset="">
      </a>
    </h1>
    <a href="tel:4008609889">400-860-9889</a>
  </div>
  <header>
    <div class="form">
      <form>
        <p>01.學生申請年級</p>
        <div class="input">
          <label>
            <input type="radio" name="grade" value="小學">小學
            <span></span>
          </label>
          <label>
            <input type="radio" name="grade" value="初中">初中
            <span></span>
          </label>
          <label>
            <input type="radio" name="grade" value="高中">高中
            <span></span>
          </label>
        </div>
        <p>02.學生戶籍情況</p>
        <div class="input">
          <label>
            <input type="radio" name="hj" value="港籍">港籍
            <span></span>
          </label>
          <label>
            <input type="radio" name="hj" value="外籍">外籍
            <span></span>
          </label>
          <label>
            <input type="radio" name="hj" value="內地">內地
            <span></span>
          </label>
        </div>
        <p>03.您的稱呼</p>
        <input type="text" placeholder="请输入您的稱呼" name="name">
        <p>04.聯繫方式</p>
        <input type="text" placeholder="请输入您的聯繫方式" name="mobile">
        <div class="btn">
          <input mark="mark" type="hidden" name="source" value="选校专家网香港小初高學校一站式升學专题WAP版" />
          <button class="submit"></button>
        </div>
      </form>
    </div>
  </header>
  <section>
    <h3 class="title title2"><span>香港擇校升學找我們就對了</span></h3>
    <h5 class="title">申請成功超97%</h5>

    <div class="swiper-container a-hw-offer">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in offer" :key="index" class="swiper-slide">
          <div class="img">
            <img :src="item.image" :alt="item.title">
            <div class="btns">
              <a class="school showmask">{{ item.title }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="a-hw-offer-pagination"></div>
    </div>
    <div class="yq">
      <h3 class="title title2"><span>申請香港學校的基本要求</span></h3>

      <ul>

        <li>
          <div class="box">
            <img src="//m.ieduglobe.com/topic/xianggang/static/images/pic_18.png" alt="">
            <h5>年齡限制</h5>
            <p>未滿5歲8個月的孩子申請香港的學校，必須父母或監護人有香港居留權</p>
          </div>
        </li>

        <li>
          <div class="box">
            <img src="//m.ieduglobe.com/topic/xianggang/static/images/pic_19.png" alt="">
            <h5>身份要求</h5>
            <p>需要港籍或外籍身份，內地孩子需要家庭滿足相關條件。</p>
          </div>
        </li>

        <li>
          <div class="box">
            <img src="//m.ieduglobe.com/topic/xianggang/static/images/pic_20.png" alt="">
            <h5>申請時間</h5>
            <p>通常提前1-2年開放申請，需要提前做好準備。</p>
          </div>
        </li>

        <li>
          <div class="box">
            <img src="//m.ieduglobe.com/topic/xianggang/static/images/pic_21.png" alt="">
            <h5>學校類型</h5>
            <p>部分香港學校有性別限制，半數學校還有不同的宗教背景。</p>
          </div>
        </li>

      </ul>
    </div>
    <div class="type">
      <div class="btn">
        <button class="showmask">了解更多</button>
      </div>
      <h3 class="title"><span>香港學校類型</span></h3>

      <ul>

        <li>
          <div class="box">
            <div class="top">官立&資助學校</div>
            <div class="text">提供免費教育，官立由教育局管轄，資助學校管理由校董會負責。入讀這2類學校，必須參加小一入學統籌辦法和中學學位分配辦法。</div>
            <div class="bottom"><button class="showmask">>>推薦學校</button></div>
          </div>
        </li>

        <li>
          <div class="box">
            <div class="top">直資學校</div>
            <div class="text">由校董會自行管理，可收取學費，並享有一筆政府津貼。 大部分直資學校都是一條龍學校，小六學生可以選擇直接升讀其結龍中學，不用擔心升中派位的不確定因素。一般學費10萬以內。</div>
            <div class="bottom"><button class="showmask">>>推薦學校</button></div>
          </div>
        </li>

        <li>
          <div class="box">
            <div class="top">私立學校</div>
            <div class="text">私立學校則由辦學團體自資經營，课程设置更加灵活，由校董會自行管理。自行決定收生辦法。大部分私立學校是一條龍學校，大大減少了小學上讀中學的不確定因素。一般學費20萬以內。</div>
            <div class="bottom"><button class="showmask">>>推薦學校</button></div>
          </div>
        </li>

        <li>
          <div class="box">
            <div class="top">國際學校</div>
            <div class="text">香港有大約 50
              所國際學校，各自開辦不同國家及國際文憑組織的課程，自行收生。選擇國際學校的家庭，希望子女有更高的英語水準，及避免香港本地教育的功課壓力，而且對將來前往外國升學亦較易適應。</div>
            <div class="bottom"><button class="showmask">>>推薦學校</button></div>
          </div>
        </li>

      </ul>
    </div>
    <div class="recommend">
      <h3 class="title"><span>香港名校推薦</span></h3>

      <ul>

        <li>
          <div class="image"
            style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_25.png')"></div>
          <div class="text">
            <h4>新加坡國際學校</h4>
            <p>3-18歲<br>新加坡/IB課程<br>雙語並重，設施完備，IB成績優秀，眾多明星子女選擇</p>
          </div>
        </li>

        <li>
          <div class="image"
            style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_15.png')"></div>
          <div class="text">
            <h4>李寶椿聯合世界書院</h4>
            <p>16-18歲<br>IB課程<br>UWC第八個成員，IB成績優秀，均分38，藤校升學強勢</p>
          </div>
        </li>

        <li>
          <div class="image"
            style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_23.png')"></div>
          <div class="text">
            <h4>香港國際學校</h4>
            <p>4-18歲<br>美國課程<br>香港第一代國際學校，學界極具口碑，美國升學優勢</p>
          </div>
        </li>

        <li>
          <div class="image"
            style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_24.png')"></div>
          <div class="text">
            <h4>香港哈羅國際學校</h4>
            <p>3-18歲<br>英式課程<br>英國9大公學之一，香港少有的寄宿制國際學校</p>
          </div>
        </li>

        <li>
          <div class="image"
            style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_12.png')"></div>
          <div class="text">
            <h4>漢基國際學校</h4>
            <p>4-18歲<br>IB課程、中英雙語教學<br>香港頂尖藍血國際學校，普通話和英文雙語教學，極難申請</p>
          </div>
        </li>

        <li>
          <div class="image"
            style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_11.png')"></div>
          <div class="text">
            <h4>德瑞國際學校</h4>
            <p>3-18歲<br>德國課程/英語IB課程<br>学术成绩和校风备受家长信赖，2021年IB均分42分，升學極具優勢</p>
          </div>
        </li>

        <li>
          <div class="image"
            style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_28.png')"></div>
          <div class="text">
            <h4>英基</h4>
            <p>3-18歲<br>IB課程<br>英基協會共有22間幼稚園、小學、中學和一條龍學校，2021年產出1/3的香港IB狀元</p>
          </div>
        </li>

        <li>
          <div class="image"
            style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_13.png')"></div>
          <div class="text">
            <h4>弘立書院</h4>
            <p>5-18歲<br>中英雙語教學IB課程<br>根治中華文化，具備全球視野，八德一智核心思想，IB均分40</p>
          </div>
        </li>

        <li>
          <div class="image"
            style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_14.png')"></div>
          <div class="text">
            <h4>滬江維多利亞</h4>
            <p>6-18歲<br>中英雙語教學IB課程<br>香港第1所IB一條龍學校，重視中國文化傳承，極受家長歡迎</p>
          </div>
        </li>

        <li>
          <div class="image"
            style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_17.png')"></div>
          <div class="text">
            <h4>聖士提反書院</h4>
            <p>中1-中6<br>香港課程/IBDP<br>香港僅有的13所寄宿中學之一，升學和IB成績都非常優秀</p>
          </div>
        </li>

        <li>
          <div class="image"
            style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_16.png')"></div>
          <div class="text">
            <h4>聖保羅男女中學</h4>
            <p>中1-中6<br>香港課程/IBDP<br>擁有超百年優良傳統的香港傳統名校，IB均分高達43.5</p>
          </div>
        </li>

        <li>
          <div class="image" style="background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_2.png')">
          </div>
          <div class="text">
            <h4>拔萃男書院</h4>
            <p>中1-中6<br>香港課程/IBDP<br>香港傳統名校之一，英文教學，學生多才多藝，學業、音樂和田徑等均成績驕人</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="btn">
      <button class="showmask">更多學校推薦</button>
    </div>
    <div class="lc">
      <h3 class="title"><span>服務流程</span></h3>

      <ul>

        <li>
          <div class="order">1</div>
          <h4>測評定位</h4>
          <p>孩子與家庭初步測評和背景評估</p>
        </li>

        <li>
          <div class="order">2</div>
          <h4>選擇學校</h4>
          <p>家庭期望、未來規劃、區域等優選學校</p>
        </li>

        <li>
          <div class="order">3</div>
          <h4>定制方案</h4>
          <p>綜合評估結果和目標學校要求定制申請和培訓方案</p>
        </li>

        <li>
          <div class="order">4</div>
          <h4>開始申請</h4>
          <p>簡介會、簡歷包裝、報名、提交資料、</p>
        </li>

        <li>
          <div class="order">5</div>
          <h4>進度溝通</h4>
          <p>學校溝通、學校報名信件往來，跟緊申請進度，陪同考試</p>
        </li>

        <li>
          <div class="order">6</div>
          <h4>錄取成功</h4>
          <p>註冊、留位費、學費</p>
        </li>

      </ul>
    </div>
    <div class="ieduchina">
      <h3 class="title"><span>國際教育網</span></h3>
      <h4>已幫助10000+學員進入心儀學校</h4>

      <ul>

        <li>
          <div class="img" style="background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_29.png)">
          </div>
          <div class="text">
            <h5>經驗豐富</h5>
            <p>8年擇校升學申請經驗，和眾多香港學校保持良好溝通，把握即時招生動態，申請成功達97%。</p>
          </div>
        </li>

        <li>
          <div class="img" style="background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_30.png)">
          </div>
          <div class="text">
            <h5>更好的選擇</h5>
            <p>同等條件的孩子，我們可以幫您的孩子申請到更好的學校，給孩子更好的成長和升學。</p>
          </div>
        </li>

        <li>
          <div class="img" style="background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_31.png)">
          </div>
          <div class="text">
            <h5>效率高</h5>
            <p>熟悉每一個申請流程和細節，找對人、做對事，高效準確。不走彎路，便是捷徑。</p>
          </div>
        </li>

        <li>
          <div class="img" style="background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_32.png)">
          </div>
          <div class="text">
            <h5>省心省力</h5>
            <p>家長只需提供資料，剩餘手續我們全程代辦，免去多次跑學校、寫資料的煩惱。</p>
          </div>
        </li>

      </ul>
      <div class="form"
        style="background-image:url(//m.ieduglobe.com/topic/xianggang/static/images/pic_10.png?t=20211105)">
        <form>
          <p>01.學生申請年級</p>
          <div class="input">
            <label>
              <input type="radio" name="grade" value="小學">小學
              <span></span>
            </label>
            <label>
              <input type="radio" name="grade" value="初中">初中
              <span></span>
            </label>
            <label>
              <input type="radio" name="grade" value="高中">高中
              <span></span>
            </label>
          </div>
          <p>02.學生戶籍情況</p>
          <div class="input">
            <label>
              <input type="radio" name="hj" value="港籍">港籍
              <span></span>
            </label>
            <label>
              <input type="radio" name="hj" value="外籍">外籍
              <span></span>
            </label>
            <label>
              <input type="radio" name="hj" value="內地">內地
              <span></span>
            </label>
          </div>
          <p>03.您的稱呼</p>
          <input type="text" placeholder="请输入您的稱呼" name="name">
          <p>04.聯繫方式</p>
          <input type="text" placeholder="请输入您的聯繫方式" name="mobile">
          <div class="btn">
            <input mark="mark" type="hidden" name="source" value="选校专家网香港小初高學校一站式升學专题WAP版" />
            <button class="submit"></button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="footer-content">
      <p style="margin: 15px 0 5px;"><a href="http://beian.miit.gov.cn/" target="_blank"
          rel="nofollow">粤ICP备17141635号</a> Copyright © <label id="siteyear">2021</label>
      </p>
      <p>深圳市爱读教育管理有限公司 版权所有 <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502002588"
          target="_blank" rel="nofollow">
          <img src="//www.ieduchina.com/statics/images/icon/ga.png"
            style="display: inline-block;vertical-align: middle;">粤公网安备 44030502002600号</a></p>
      <p style="margin-top:5px;">深圳市福田区福田街道福山社区滨河大道5022号联合广场A座1011</p>
    </div>
  </footer>
  <div class="masks">
    <div class="popu">
      <h4>预约咨询 <span id="close"></span></h4>
      <div class="form">
        <form>
          <p>01.學生申請年級</p>
          <div class="input">
            <label>
              <input type="radio" name="grade" value="小學">小學
              <span></span>
            </label>
            <label>
              <input type="radio" name="grade" value="初中">初中
              <span></span>
            </label>
            <label>
              <input type="radio" name="grade" value="高中">高中
              <span></span>
            </label>
          </div>
          <p>02.學生戶籍情況</p>
          <div class="input">
            <label>
              <input type="radio" name="hj" value="港籍">港籍
              <span></span>
            </label>
            <label>
              <input type="radio" name="hj" value="外籍">外籍
              <span></span>
            </label>
            <label>
              <input type="radio" name="hj" value="內地">內地
              <span></span>
            </label>
          </div>
          <p>03.您的稱呼</p>
          <input type="text" placeholder="请输入您的稱呼" name="name">
          <p>04.聯繫方式</p>
          <input type="text" placeholder="请输入您的聯繫方式" name="mobile">
          <input mark="mark" type="hidden" name="source" value="选校专家网香港小初高學校一站式升學专题WAP版" />
          <button class="submit">立即预约</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.edu {
  position: fixed;
  background-color: white;
  display: flex;
  width: 100%;
  max-width: 750px;
  height: 1.19466667rem;
  z-index: 1000;
  top: 0;
  margin: 0 auto;
  box-shadow: 0 0.08533333rem 0.34133333rem 0.04266667rem rgba(28, 94, 175, 0.33);
  justify-content: space-between;
  align-items: center;
  padding: 0 0.68266667rem;
  box-sizing: border-box;

  h1 {
    line-height: 1;
    display: flex;
    align-items: center;

    img {
      width: 3.02933333rem;
    }
  }

  a {
    color: #2272cd;
    font-size: 0.59733333rem;
    text-decoration: none;
    font-weight: bold;
  }
}

header {
  margin-top: 1.19466667rem;
  width: 100%;
  padding-top: 7.46666667rem;
  background: url('~/assets/m/ieduglobe/topic/xianggang/pic_1.png') center top/16rem 16.78933333rem no-repeat;


  .form {
    background-image: url("//m.ieduglobe.com/topic/xianggang/static/images/pic_9.png");
    position: relative;
    z-index: 10;
    box-sizing: border-box;
    padding: 0rem 1.32266667rem;
    width: 12.75733333rem;
    height: 15.296rem;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 12.75733333rem 15.296rem;
    text-align: left;
    margin: 0 auto 0.42666667rem;

    form {
      padding-top: 1.83466667rem;
    }

    .btn {
      cursor: pointer;
      margin-top: 0.21333333rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
}


body header .form p {
  font-size: 0.59733333rem;
  font-weight: 400;
  color: #303030;
  text-align: left;
  padding-bottom: 0.17066667rem;
}

body header .form p:nth-of-type(-n+2) {
  padding-bottom: 0.34133333rem;
}

body header .form .input {
  padding-bottom: 0.55466667rem;
  font-size: 0.512rem;
  display: flex;
  justify-content: space-between;
}

body header .form .input label {
  position: relative;
  cursor: pointer;
  margin-left: 0.21333333rem;
  font-size: 0.59733333rem;
}

body header .form .input label input {
  cursor: pointer;
  width: 0.42666667rem;
  height: 0.42666667rem;
  margin-left: 0.384rem;
  margin-right: 0.04266667rem;
  opacity: 0;
}

body header .form .input label input+span {
  position: absolute;
  left: 0;
  top: 0.10666667rem;
  display: inline-block;
  width: 0.68266667rem;
  height: 0.68266667rem;
  background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_22.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

body header .form .input label input:checked+span {
  background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_26.png');
}

body header .form input[type="text"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 0.512rem;
  width: 100%;
  height: 1.23733333rem;
  font-size: 0.59733333rem;
  background: #FFFFFF;
  border: 0.04266667rem solid rgba(160, 160, 160, 0.5);
  border-radius: 0.21333333rem;
  color: #303030;
  padding: 0 0.34133333rem;
  outline: none;
  appearance: none;
  box-shadow: 0 0 0 21.33333333rem white inset;
}

body header .form input[type="text"]::-webkit-input-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body header .form input[type="text"]::-moz-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body header .form input[type="text"]:-ms-input-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body header .form input[type="text"]::-ms-input-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body header .form input[type="text"]::placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body header .form .btn {
  text-align: center;
}

body header .form .btn button {
  cursor: pointer;
  width: 100%;
  height: 1.024rem;
  margin-top: 0.42666667rem;
  opacity: 0;
  outline: none;
}

body section .showmask {
  cursor: pointer;
}

body section h3.title {
  margin-top: -1.06666667rem;
  text-align: center;
}

body section h3.title span {
  position: relative;
  font-size: 0.68266667rem;
  font-weight: bold;
  color: #4A4A4A;
}

body section h3.title span::before {
  position: absolute;
  left: -1.28rem;
  top: 0rem;
  content: "";
  width: 0.78933333rem;
  height: 0.74666667rem;
  background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_8.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 0.78933333rem 0.74666667rem;
}

body section h3.title span::after {
  position: absolute;
  right: -1.28rem;
  top: 0rem;
  content: "";
  width: 0.78933333rem;
  height: 0.74666667rem;
  background-image: url('//m.ieduglobe.com/topic/xianggang/static/images/pic_7.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 0.78933333rem 0.74666667rem;
}

body section h3.title2 {
  padding: 0.64rem 0;
  margin-top: -0.42666667rem;
}

body section .btn {
  text-align: center;
  margin-top: -0.72533333rem;
}

body section .btn button {
  width: 6.10133333rem;
  height: 1.23733333rem;
  background: #FDA849;
  border-radius: 0.128rem;
  line-height: 1.23733333rem;
  font-size: 0.55466667rem;
  font-weight: 400;
  color: #FEFEFE;
  outline: none;
  border: none;
}

body section .recommend {
  padding-bottom: 2.13333333rem;
  background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_3.png);
  background-repeat: no-repeat;
  background-position: center 30.08rem;
  background-size: 16rem 18.53866667rem;
}

body section .recommend ul {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0.68266667rem;
  position: relative;
  z-index: 100;
  width: 16rem;
  margin: 0 auto;
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
}

body section .recommend ul li {
  background-color: white;
  margin-top: 0.512rem;
  width: 6.99733333rem;
  height: 8.53333333rem;
  border-radius: 0 0.85333333rem 0 0.85333333rem;
  -webkit-box-shadow: 0 0.128rem 0.49066667rem 0.08533333rem rgba(167, 217, 248, 0.28);
  box-shadow: 0 0.128rem 0.49066667rem 0.08533333rem rgba(167, 217, 248, 0.28);
}

body section .recommend ul li .image {
  height: 3.968rem;
  width: 100%;
  border-radius: 0 0.85333333rem 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

body section .recommend ul li .text {
  height: 4.58666667rem;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0.42666667rem;
  text-align: justify;
}

body section .recommend ul li .text h4 {
  font-weight: 400;
  color: #4A4A4A;
  line-height: 1.06666667rem;
  padding-top: 0.21333333rem;
  font-size: 0.59733333rem;
}

body section .recommend ul li .text p {
  line-height: 0.59733333rem;
  font-size: 0.462rem;
  font-weight: 300;
  color: #464646;
  letter-spacing: -0.00426667rem;
}

body section h5.title {
  text-align: center;
  font-size: 0.59733333rem;
  font-weight: 400;
  color: #FDA849;
}

body section .a-hw-offer {
  position: relative;
  width: 14.50666667rem;
  height: 9.94133333rem;
  overflow: hidden;
  margin-top: 0.42666667rem;
  margin-bottom: 0.21333333rem;
}

body section .a-hw-offer .swiper-wrapper {
  width: 100%;
}

body section .a-hw-offer .swiper-wrapper .swiper-slide {
  width: 6.99733333rem;
  height: 9.94133333rem;
  text-align: center;

  .img {
    position: relative;
    width: 6.99733333rem;
    height: 9.94133333rem;
    box-shadow: 0 0.128rem 0.49066667rem 0.08533333rem rgba(221, 221, 221, 0.48);
    background-color: white;

    img {
      width: 6.99733333rem;
      height: 9.94133333rem;
      object-fit: contain;
    }

    .btns {
      position: absolute;
      bottom: 0.42666667rem;
      text-align: center;
      width: 100%;
    }
  }
}


body section .a-hw-offer .swiper-wrapper .swiper-slide .img .btns .school {
  cursor: pointer;
  display: inline-block;
  width: 5.33333333rem;
  line-height: 1.024rem;
  height: 1.024rem;
  background: #FDA849;
  border-radius: 0.128rem;
  font-size: 0.512rem;
  font-weight: 400;
  color: #FFFEFE;
}

body section .yq ul {
  padding-top: 1.664rem;
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
  width: 14.50666667rem;
  margin: 0 auto;
}

body section .yq ul li {
  text-align: center;
}

body section .yq ul li:nth-of-type(n+3) {
  margin-top: 1.664rem;
}

body section .yq ul li .box {
  width: 6.95466667rem;
  height: 4.864rem;
  background: #FFFFFF;
  -webkit-box-shadow: 0 0.08533333rem 0.34133333rem 0.04266667rem rgba(28, 94, 175, 0.33);
  box-shadow: 0 0.08533333rem 0.34133333rem 0.04266667rem rgba(28, 94, 175, 0.33);
  border-radius: 0.21333333rem;
}

body section .yq ul li .box img {
  margin-top: -1.83466667rem;
  width: 1.83466667rem;
  height: 1.83466667rem;
}

body section .yq ul li .box h5 {
  font-size: 0.59733333rem;
  font-weight: 400;
  color: #fda849;
  margin-top: -0.21333333rem;
}

body section .yq ul li .box p {
  padding: 0 0.768rem;
  text-align: justify;
  font-size: 0.512rem;
  font-weight: 300;
  color: #252525;
  line-height: 0.68266667rem;
}

body section .type {
  margin-top: 1.152rem;
  width: 100%;
  background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_4.png);
  background-position: center top;
  background-size: 16rem 26.13333333rem;
  background-repeat: no-repeat;
  padding-bottom: 2.13333333rem;
}

body section .type .btn {
  margin-top: 0;
}

body section .type .btn button {
  margin-top: 0.21333333rem;
}

body section .type h3.title {
  margin-top: 1rem;
}

body section .type h3.title span {
  color: white;
}

body section .type ul {
  width: 100%;
  margin: 1.70666667rem auto 0;
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
}

body section .type ul li {
  margin: 0 auto 0.96rem;
}

body section .type ul li .box {
  position: relative;
  width: 13.76rem;
  height: 3.79733333rem;
  background: #FFFFFF;
  border-radius: 0.21333333rem;
}

body section .type ul li .box .top {
  position: absolute;
  left: -0.27733333rem;
  top: -0.61866667rem;
  height: 1.23733333rem;
  background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_6.png);
  background-size: 5.33333333rem 1.23733333rem;
  background-repeat: no-repeat;
  width: 5.33333333rem;
  font-size: 0.55466667rem;
  font-weight: 400;
  color: #FFFFFF;
  text-align: left;
  text-indent: 0.64rem;
  line-height: 0.85333333rem;
}

body section .type ul li .box .text {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 0.512rem;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #4B4A4A;
  padding: 0.64rem 0.768rem 0;
  line-height: 0.64rem;
  text-align: justify;
}

body section .type ul li .box .bottom {
  position: absolute;
  right: -0.53333333rem;
  bottom: 0.27733333rem;
}

body section .type ul li .box .bottom button {
  cursor: pointer;
  font-family: "宋體";
  width: 3.37066667rem;
  height: 0.85333333rem;
  background: #FDA849;
  border-radius: 0.128rem;
  border: none;
  outline: none;
  font-size: 0.512rem;
  font-weight: 400;
  color: #FEFEFE;
}

body section .lc {
  /* margin-top: -2.13333333rem; */
  margin-top: 2rem;
  padding-bottom: 0.42666667rem;
}

body section .lc h3.title {
  padding-bottom: 0.42666667rem;
}

body section .lc ul {
  width: 14.592rem;
  margin: 0 auto 0.64rem;
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
}

body section .lc ul li {
  margin-top: 1.024rem;
  width: 6.99733333rem;
  height: 2.73066667rem;
  background: #FFFFFF;
  -webkit-box-shadow: 0.128rem 0.08533333rem 0.384rem 0 rgba(124, 124, 125, 0.5);
  box-shadow: 0.128rem 0.08533333rem 0.384rem 0 rgba(124, 124, 125, 0.5);
  border-radius: 0.128rem;
}

body section .lc ul li .order {
  width: 1.472rem;
  height: 1.36533333rem;
  background: #EEEEEE;
  margin-left: 0.17066667rem;
  margin-top: -0.68266667rem;
  -webkit-box-shadow: 0.10666667rem 0.14933333rem 0 #0A59D2;
  box-shadow: 0.10666667rem 0.14933333rem 0 #0A59D2;
  font-size: 0.85333333rem;
  font-weight: bold;
  font-style: italic;
  color: #FDA849;
  text-align: center;
  line-height: 1.36533333rem;
}

body section .lc ul li h4 {
  font-size: 0.55466667rem;
  font-weight: 400;
  color: #4A4A4A;
  line-height: 1.06666667rem;
  margin-top: -0.53333333rem;
  text-indent: 2.13333333rem;
}

body section .lc ul li p {
  padding: 0.04266667rem 0.384rem 0;
  font-size: 0.412rem;
  font-weight: 300;
  color: #4A4A4A;
  line-height: 0.68266667rem;
}

body section .ieduchina {
  background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_5.png);
  background-position: center bottom;
  background-size: 16rem 23.46666667rem;
  background-repeat: no-repeat;
  padding-top: 0.85333333rem;
  padding-bottom: 1.06666667rem;
}

body section .ieduchina h4 {
  font-size: 0.512rem;
  font-weight: 400;
  color: #FDA849;
  text-align: center;
  padding: 0.42666667rem 0;
}

body section .ieduchina ul {
  margin: 0 auto 1.23733333rem;
}

body section .ieduchina ul li {
  width: 14.61333333rem;
  height: 3.2rem;
  border-radius: 0.128rem;
  margin: 0 auto 0.55466667rem;
  background-color: #EEEEEE;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

body section .ieduchina ul li:nth-of-type(even) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

body section .ieduchina ul li .img {
  width: 4.13866667rem;
  height: 3.2rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

body section .ieduchina ul li .text {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0 0.68266667rem;
}

body section .ieduchina ul li .text h5 {
  font-size: 0.55466667rem;
  font-weight: bold;
  color: #0E69D9;
  line-height: 1.19466667rem;
}

body section .ieduchina ul li .text p {
  font-size: 0.512rem;
  font-weight: 300;
  color: #3A3A3A;
  line-height: 0.59733333rem;
  text-align: justify;
}

body section .ieduchina .form .btn {
  cursor: pointer;
  margin-top: 0.21333333rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body section .ieduchina .form {
  position: relative;
  z-index: 10;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0rem 1.32266667rem;
  width: 12.75733333rem;
  height: 15.296rem;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 12.75733333rem 15.296rem;
  text-align: left;
  margin: 0 auto 0.42666667rem;
}

body section .ieduchina .form form {
  padding-top: 1.83466667rem;
}

body section .ieduchina .form p {
  font-size: 0.59733333rem;
  font-weight: 400;
  color: #303030;
  text-align: left;
  padding-bottom: 0.17066667rem;
}

body section .ieduchina .form p:nth-of-type(-n+2) {
  padding-bottom: 0.34133333rem;
}

body section .ieduchina .form .input {
  padding-bottom: 0.55466667rem;
  font-size: 0.512rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body section .ieduchina .form .input label {
  position: relative;
  cursor: pointer;
  margin-left: 0.21333333rem;
  font-size: 0.59733333rem;
}

body section .ieduchina .form .input label input {
  cursor: pointer;
  width: 0.42666667rem;
  height: 0.42666667rem;
  margin-left: 0.384rem;
  margin-right: 0.04266667rem;
  opacity: 0;
}

body section .ieduchina .form .input label input+span {
  position: absolute;
  left: 0;
  top: 0.10666667rem;
  display: inline-block;
  width: 0.68266667rem;
  height: 0.68266667rem;
  background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_22.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

body section .ieduchina .form .input label input:checked+span {
  background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_26.png);
}

body section .ieduchina .form input[type="text"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 0.512rem;
  width: 100%;
  height: 1.23733333rem;
  font-size: 0.59733333rem;
  background: #FFFFFF;
  border: 0.04266667rem solid rgba(160, 160, 160, 0.5);
  border-radius: 0.21333333rem;
  color: #303030;
  padding: 0 0.34133333rem;
  outline: none;
  appearance: none;
  box-shadow: 0 0 0 21.33333333rem white inset;
}

body section .ieduchina .form input[type="text"]::-webkit-input-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body section .ieduchina .form input[type="text"]::-moz-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body section .ieduchina .form input[type="text"]:-ms-input-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body section .ieduchina .form input[type="text"]::-ms-input-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body section .ieduchina .form input[type="text"]::placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body section .ieduchina .form .btn {
  text-align: center;
}

body section .ieduchina .form .btn button {
  cursor: pointer;
  width: 100%;
  height: 1.024rem;
  margin-top: 0.42666667rem;
  opacity: 0;
  outline: none;
}

body footer {
  padding: 0.42666667rem 0.32rem;
  font-size: 0.512rem;
  background: #30373e;
}

body footer .footer-content {
  width: 16rem;
  margin: 0 auto;
}

body footer .footer-content .copyright {
  text-align: center;
  line-height: 2;
}

body footer .footer-content .police {
  margin: 0.256rem 0 0;
  text-align: center;
}

body footer .footer-content .police a {
  margin: 0 0.10666667rem;
}

body footer .footer-content .police a:hover {
  text-decoration: underline;
}

body footer p {
  font-size: 0.512rem;
  color: #999;
  text-align: center;
}

body footer p a {
  color: #999;
}

body .masks {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

body .masks .popu {
  width: 12.75733333rem;
  height: 16.384rem;
  background: #FFFFFF;
  -webkit-box-shadow: 0 0.128rem 0.512rem 0.08533333rem rgba(141, 142, 144, 0.33);
  box-shadow: 0 0.128rem 0.512rem 0.08533333rem rgba(141, 142, 144, 0.33);
  border-radius: 0.21333333rem;
}

body .masks .popu h4 {
  position: relative;
  height: 1.74933333rem;
  line-height: 1.74933333rem;
  background: #0A59D2;
  border-radius: 0.21333333rem;
  font-size: 0.85333333rem;
  font-weight: 400;
  color: #FEFEFE;
  width: 100%;
  text-align: center;
}

body .masks .popu h4 #close {
  position: absolute;
  right: 0.21333333rem;
  top: 0.21333333rem;
  cursor: pointer;
  z-index: 100;
  width: 0.81066667rem;
  height: 0.81066667rem;
  background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_45.png);
  background-size: 0.81066667rem 0.81066667rem;
  background-repeat: no-repeat;
  background-position: right top;
  padding: 0 0 0.42666667rem 0.42666667rem;
}

body .masks .popu .form form {
  margin-top: -1.28rem;
}

body .masks .popu .form form button {
  width: 10.02666667rem;
  height: 1.45066667rem;
  background-color: #FDA849;
  -webkit-box-shadow: 0 0.128rem 0.49066667rem 0.08533333rem rgba(141, 142, 144, 0.33);
  box-shadow: 0 0.128rem 0.49066667rem 0.08533333rem rgba(141, 142, 144, 0.33);
  border-radius: 0.128rem;
  border: none;
  outline: none;
  font-size: 0.72533333rem;
  font-weight: 400;
  color: #FFFFFF;
  margin-top: 0.55466667rem;
  cursor: pointer;
}

body .masks .popu .form {
  position: relative;
  z-index: 10;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0rem 1.32266667rem;
  width: 12.75733333rem;
  height: 15.296rem;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 12.75733333rem 15.296rem;
  text-align: left;
  margin: 0 auto 0.42666667rem;
}

body .masks .popu .form form {
  padding-top: 1.83466667rem;
}

body .masks .popu .form p {
  font-size: 0.59733333rem;
  font-weight: 400;
  color: #303030;
  text-align: left;
  padding-bottom: 0.17066667rem;
}

body .masks .popu .form p:nth-of-type(-n+2) {
  padding-bottom: 0.34133333rem;
}

body .masks .popu .form .input {
  padding-bottom: 0.55466667rem;
  font-size: 0.512rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body .masks .popu .form .input label {
  position: relative;
  cursor: pointer;
  margin-left: 0.21333333rem;
  font-size: 0.59733333rem;
}

body .masks .popu .form .input label input {
  cursor: pointer;
  width: 0.42666667rem;
  height: 0.42666667rem;
  margin-left: 0.384rem;
  margin-right: 0.04266667rem;
  opacity: 0;
}

body .masks .popu .form .input label input+span {
  position: absolute;
  left: 0;
  top: 0.10666667rem;
  display: inline-block;
  width: 0.68266667rem;
  height: 0.68266667rem;
  background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_22.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

body .masks .popu .form .input label input:checked+span {
  background-image: url(//m.ieduglobe.com/topic/xianggang/static/images/pic_26.png);
}

body .masks .popu .form input[type="text"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 0.512rem;
  width: 100%;
  height: 1.23733333rem;
  font-size: 0.59733333rem;
  background: #FFFFFF;
  border: 0.04266667rem solid rgba(160, 160, 160, 0.5);
  border-radius: 0.21333333rem;
  color: #303030;
  padding: 0 0.34133333rem;
  outline: none;
  appearance: none;
  box-shadow: 0 0 0 21.33333333rem white inset;
}

body .masks .popu .form input[type="text"]::-webkit-input-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body .masks .popu .form input[type="text"]::-moz-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body .masks .popu .form input[type="text"]:-ms-input-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body .masks .popu .form input[type="text"]::-ms-input-placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body .masks .popu .form input[type="text"]::placeholder {
  font-size: 0.512rem;
  color: #888686;
}

body .masks .popu .form .btn {
  text-align: center;
}

body .masks .popu .form .btn button {
  cursor: pointer;
  width: 100%;
  height: 1.024rem;
  margin-top: 0.42666667rem;
  opacity: 0;
  outline: none;
}
</style>
