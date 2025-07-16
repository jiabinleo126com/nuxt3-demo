<script setup>
import { onMounted, defineAsyncComponent } from 'vue';

const TopMenu = defineAsyncComponent(() => import(`~/components/m/topic/hkfxy/TopMenu.vue`))

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
      // }, {
      //     src: '/statics/video/js/videolist.js',
      //     defer: true,
      //     crossorigin: 'anonymous'
    },
  ],
  link: [
    {
      itemprop: 'image',
      content: 'https://m.ieduchina.com/topic/2025/hk13/images/1d83b8f1.jpg',
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://m.ieduchina.com/topic/2025/hk13/images/1d83b8f1.jpg',
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
    {
      rel: 'stylesheet',
      href: '//web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.min.css',
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

onMounted(() => {
  !function () {
    var t = document.documentElement.clientWidth
      , e = document.createElement("style");
    /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? e.innerHTML = "html{font-size: " + t / 16 + "px !important;}" : e.innerHTML = "html{font-size: 46.875px !important;width:750px;margin:0 auto;}",
      document.head.appendChild(e)
  }()
  $(".title").on("click", "button", function () {
    var flag = $(this).hasClass("s");
    if (flag) {
      $(this).removeClass("s").find("span .o").show();
      $(this).removeClass("s").find("span .c").hide();
      $(this).closest("li").find(".list").animate({ "height": 0 }, 800);
    }
    else {
      $(this).addClass("s").find("span .c").show();
      $(this).addClass("s").find("span .o").hide();
      $(this).closest("li").find(".list").animate({ "height": $(this).closest("li").find(".wrap").height() }, 800);
    }
  });
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
  try {
    var player = TCPlayer('masksp', {});
    player.poster($(".sp").find("li").eq(0).find("img").attr("src"));
  }
  catch (error) {
  }
  $(".sp").on("click", "li img", function () {
    $("#mask").show();
    $("html,body").addClass("noscroll");
    player.src($(this).attr("value"));
    player.poster($(this).attr("src"));
    setTimeout(function () {
      player.play();
    }, 300);
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
  <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/1d83b8f1.jpg" img="images/1d83b8f1.jpg" id="share"
    style="display:none">
  <component :is="TopMenu" />
  <header>
    <img alt="香港教育文化之旅" src="https://m.ieduchina.com/topic/2025/hk13/images/c3c7509c.jpg" height="211" width="375">
  </header>
  <section>
    <h3 class="title" en="Active review">探校营回顾</h3>
    <div class="text">
      <P>5月2日-5月3日，【香港教育文化之旅】第13期圆满收官。此次活动如教育盛宴，为参访家庭带来难忘探索体验。</P>
      <P>当下教育资源优质且丰富，香港凭借独特地理位置与深厚教育底蕴，成为众多学子求学圣地，其顶尖中学以先进教育理念和卓越教学成果吸引众多目光。为助大家深入了解香港中学教育，国际教育网精心策划此次独家定制的香港名校探访团活动。
      </P>
      <P>行程丰富紧凑，探访团深入走访香港十所顶尖中学，路线涵盖DSE课程学校与国际课程学校，让参访家庭一站式领略不同名校风采。</P>
      <P>国际教育网专家团队全程相伴，每到一所学校，便如知识引路人，凭借专业造诣和行业经验，深度解析学校特色与教学理念，详细讲解课程设置、师资力量，还分享教育发展趋势，让家长全方位了解学校。</P>
      <P>校长和老师全程导览，带领大家参观校园各处，从现代化教学楼到实验室、艺术教室、运动场，展示校园文化魅力，热情解答疑问，分享学校发展历程、办学理念与成果，让家长和学生深入了解学校。</P>
      <P>校长们亲授的普通话升学讲座是探访团亮点。校长们以专业素养和对教育体系的把握，介绍DSE与国际课程学校的升学途径、招生政策及升学准备，用案例和建议为家长学生拨开迷雾。家长们称讲座如及时雨，让他们对升学之路方向清晰，收获颇丰。
      </P>
    </div>
  </section>
  <section>
    <div class="ld">
      <h3 class="title" en="characteristic">亮点特色</h3>
      <ul>
        <li>
          <span>1</span>
          独家定制香港中学探访团，深入体验香港十所顶尖中学
        </li>
        <li>
          <span>2</span>
          路线覆盖香港核心名校区，一站式领略学校风采
        </li>
        <li>
          <span>3</span>
          名师带队讲解，深度解析学校特色与教学理念
        </li>
        <li>
          <span>4</span>
          校长老师全程相伴导览，探索校园细节，饱览校园风光
        </li>
        <li>
          <span>5</span>
          校长亲授普通话升学讲座，精准把握香港教育体系脉络
        </li>
        <li>
          <span>6</span>
          前瞻布局择校规划蓝图，量身定制个性化升学路径
        </li>
      </ul>
    </div>
  </section>
  <section class="gray">
    <div class="xc">
      <h3 class="title" en="Daily itinerary">
        每日行程<span>（DSE路线）</span>
      </h3>
      <ul>
        <li>
          <div class="title">
            <div class="date-card">
              <div class="card">
                <p>Day</p>
                <p>01</p>
              </div>
            </div>
            <p>2025年05月02日访校行程安排</p>
            <button>
              <span>
                <i class="o">展开</i>
                <i class="c">关闭</i>
              </span>
              <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
            </button>
          </div>
          <div class="list">
            <div class="wrap">
              <div class="con">
                <div class="time">07:40</div>
                <div class="desc">
                  <p class="bold">香港校区集合(香港尖沙咀港景汇商场)</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">08:10-08:50</div>
                <div class="desc">
                  <p class="bold">交通</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">09:00-11:00</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/hofung/?tgform=香港教育文化之旅" target="_blank">
                      可风中学(啬色园主办)
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辦時間：1974 年創立</p>
                  <p>學校類別:資助、男女校、儒釋道；位於荃灣區</p>
                  <p>辦學團體：嗇色園</p>
                  <p>學校位置:新界葵湧和宜合道448號</p>
                  <p>辦學宗旨:秉承辦學團體嗇色園普濟勸善的精神，為學生提供優質教育。除了讓學生品學兼優外，更重視學生的均衡發展，俾其思維、能力、體魄和氣質風度等均能兼善。</p>
                  <p>學校特色:秉承“普濟勸善”的校訓，注重學生的全面和均衡發展，不僅在學業上追求卓越，還強調體育、藝術及課外活動的參與。以英語授課，提供多元化課程，注重兩文三語能力，並擁有創新的教學設施和方法。</p>
                  <p>課程體系:DSE</p>
                  <p>教學語言:以英語作為主要教學語言，絕大部分的學習、活動、宣佈都是以英語進行。多年來，學校均有收錄外籍交換生，使學生在校園內有更多應用英語及文化交流的機會。</p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/56870034.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/2ffdb74f.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/99fdbc5c.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/3152d110.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/8d6040c6.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/b2afd974.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/c36a5b21.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/e0923d56.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">11:00-12:00</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/lwfsshk/?tgform=香港教育文化之旅" target="_blank">
                      世界龙冈学校刘皇发中学
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辨時間: 1977年創立</p>
                  <p>學校類別: 資助、男女校</p>
                  <p>辦學團體: 世界龍岡學校(香港)有限公司</p>
                  <p>學校位置: 九龍大角咀詩歌舞街66號</p>
                  <p>辦學宗旨: 秉承世界各地龍岡宗親（劉、關、張、趙四姓）宏願，在香港興學育才，發揚文教，造福人群，有教無類。因應時代趨勢，作均衡有效的施教及德育陶冶。</p>
                  <p>學校特色:
                    秉承“忠、義、仁、勇”的校訓，注重均衡教育和品德培育；校風嚴謹純樸，教師嚴而有愛，學生篤學守規；提供多元化的課程，涵蓋學術、藝術、體育、科技等領域，致力於學生的全人發展。此外，該校擁有豐富的教學設施和優秀的師資團隊。
                  </p>
                  <p>課程體系: DSE</p>
                  <p>教學語言: 學校以中、英雙語為主要教學語言。培養學生「兩文三語、中英兼擅」的能力。初中部份班別的數學科及科學科以英語授課。</p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/4cc2b614.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/2f18992d.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/e2b070cb.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/457f28ab.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/6305e1c9.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/e4980fd5.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/d2731704.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/b8619a07.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">12:00-13:00</div>
                <div class="desc">
                  <p class="bold">午休/午餐</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">13:00-13:20</div>
                <div class="desc">
                  <p class="bold">交通</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">13:30-14:30</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/tmcss/?tgform=香港教育文化之旅" target="_blank">
                      屯门天主教中学
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辨時間:1987 年創立</p>
                  <p>學校類別:資助、男女校、天主教</p>
                  <p>辦學團體:天主教香港教區</p>
                  <p>學校位置:新界屯門建生邨</p>
                  <p>辦學宗旨:傳揚耶穌基督愛和公義的福音精神，培養學生以勇氣實踐倫理道德，成己達人；培養學生運用智慧，應用所學，創造美好的人生，貢獻社群。</p>
                  <p>
                    學校特色:學校注重全人教育。學校強調中英雙語並重，提供優質的雙語教學環境。課程設置豐富多元，涵蓋學術、藝術及體育等，鼓勵學生全面發展。同時，秉承天主教教育理念，重視品德教育，培養學生良好品德及社會責任感，為學生未來發展奠定堅實基礎。
                  </p>
                  <p>課程體系:DSE</p>
                  <p>
                    教學語言:學校以英文為主要教學語言。1：學校初中大部份班別以英語授課，除中文科、中國歷史、普通話、生活與社會、宗教及倫理、閱讀課外，其餘科目均以英語教學。部份學生英文、數學和科學以英語教學，以便照顧學習差異；2：高中部份科目銜接初中，維持以英語為授課語言。
                  </p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/bd308c08.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/414ecd41.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/3927fb36.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/0b516689.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/6db3c163.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/3f29a2cf.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/acfe4e19.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/77f680a4.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">14:30-15:20</div>
                <div class="desc">
                  <p class="bold">交通</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">15:30-17:00</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/yllhk/?tgform=香港教育文化之旅" target="_blank">
                      基督教香港信义会元朗信义中学
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辦時間：1967</p>
                  <p>學校類別：資助、男女校</p>
                  <p>學校位置：新界天水圍天耀邨第2期</p>
                  <p>辦學宗旨：培育學生在基督教育下建立正確的人生觀，以聖經真理、以生命影響生命的精神去引導學生，使他們能以積極的態度去珍惜生命，能堅持不斷學習，發揮潛能。</p>
                  <p>
                    學校特色：注重全人教育，以“正心修身”為校訓，致力於培養學生的品德和學業。學校設施完善，擁有先進的教學設備和豐富的教育資源。同時，學校還注重學生的實踐能力和創新精神的培養，為學生提供廣闊的發展空間和機會。
                  </p>
                  <p>教學語言：學校以英文為主要教學語言</p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/01b30230.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/1941ff5c.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/fa8cec0a.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/a761586a.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/588bdd4d.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/46b39026.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/4968c851.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/0cd0b5cf.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">17:00</div>
                <div class="desc">
                  <p class="bold">返程</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="title">
            <div class="date-card">
              <div class="card">
                <p>Day</p>
                <p>02</p>
              </div>
            </div>
            <p>2025年05月03日访校行程安排</p>
            <button>
              <span>
                <i class="o">展开</i>
                <i class="c">关闭</i>
              </span>
              <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
            </button>
          </div>
          <div class="list">
            <div class="wrap">
              <div class="con">
                <div class="time">07:40</div>
                <div class="desc">
                  <p class="bold">香港校区集合(香港尖沙咀港景汇商场)</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">08:10-08:50</div>
                <div class="desc">
                  <p class="bold">交通</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">09:00-10:20</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/ktssshk/?tgform=香港教育文化之旅" target="_blank">
                      九龙塘学校(中学部)
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辨時間:1962 年創立</p>
                  <p>學校類別:資助、男女校</p>
                  <p>辦學團體:九龍塘學校</p>
                  <p>學校位置:九龍九龍塘舒梨道10號</p>
                  <p>辦學宗旨:學校致力提供均衡教育，幫助學生建立正確人生觀，實踐「樂善勇敢」精神，使學生充分發展多元智能，提高他們對社會、祖國的責任感及歸屬感。</p>
                  <p>學校特色:學校提供均衡教育，注重學生的多元智能發展，並實踐“樂善勇敢”的精神。學校環境優美，校風良好
                    。學校聘請三位外籍教師，透過課堂、多元化活動提升英語教學品質。此外，學校還提供個性化的課程和輔導，確保每位學生都能得到適合自己的教育，致力於培養具有國際視野和社會責任感的全面發展人才。</p>
                  <p>課程體系:DSE</p>
                  <p>教學語言:學校以中文為主要教學語言。</p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/ce2711cf.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/623bccf1.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/4e3cd42b.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/61bd8da4.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/0a52f6f6.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/147d71d8.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/b9ad6639.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/c1a0b1e7.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">10:20-11:00</div>
                <div class="desc">
                  <p class="bold">交通</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">11:00-12:00</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/ccckeitohk/?tgform=香港教育文化之旅" target="_blank">
                      中华基督教会基道中学
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辦時間：2003年</p>
                  <p>學校類別：資助、男女校、基督教</p>
                  <p>辦學團體：中華基督教會香港區會</p>
                  <p>學校位置：九龍土瓜灣崇安街28號</p>
                  <p>辨學宗旨：K: Knowledge and wisdom 藉學習獲得知識 T: Transcendence求突破追求卓越 S: Serving others以服侍回饋社會 S:
                    Salvation憑信心領受救恩</p>
                  <p>
                    學校特色：學校強調「以學生為本、以學習為中心」的教育，為學生提供寬廣知識、考察研究、生活教育、社群服務、體藝活動和信仰認識等六種學習經歷，讓學生在智能、情意、體藝及靈性方面有均衡的發展，並實踐「終身學習」的目標。
                  </p>
                  <p>課程體系：DSE</p>
                  <p>教學語言：學校以中文為主要教學語言，注重培養學生兩文三語的能力。</p>
                  <p>加強英語能力：初中部份班別以英語教授數學、綜合科學、物理和化學科。歷史、地理、普通電腦、公民、經濟與社會、綜合藝術、音樂和家政科設有英語延展學習。高中物理、化學和數學延伸部份 (代數與微積分)
                    及部份班別的數學科以英語教授。</p>
                  <p>加強普通話能力：初中大部分班別以普通話教授中文。</p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/4ef64172.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/cff4c63b.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/85fed7a0.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/b1beb5d1.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/85f8a55c.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/1c6a0911.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/dabb6865.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/6f72d931.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">12:00-13:00</div>
                <div class="desc">
                  <p class="bold">午餐加午休</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">13:00</div>
                <div class="desc">
                  <p class="bold">返程</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="xc">
      <h3 class="title" en="Daily itinerary">
        每日行程<span>（私立国际DSE路线）</span>
      </h3>
      <ul>
        <li>
          <div class="title">
            <div class="date-card">
              <div class="card">
                <p>Day</p>
                <p>01</p>
              </div>
            </div>
            <p>2025年05月02日访校行程安排</p>
            <button>
              <span>
                <i class="o">展开</i>
                <i class="c">关闭</i>
              </span>
              <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
            </button>
          </div>
          <div class="list">
            <div class="wrap">
              <div class="con">
                <div class="time">07:40</div>
                <div class="desc">
                  <p class="bold">香港校区集合(香港尖沙咀港景汇商场)</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">08:10-08:50</div>
                <div class="desc">
                  <p class="bold">交通</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">09:00-11:00</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/xgdlyjnd/?tgform=香港教育文化之旅" target="_blank">
                      香港德思齐加拿大国际学校
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辦時間：1987年</p>
                  <p>學校類別：私立國際學校</p>
                  <p>辦學團體：周大福教育集團</p>
                  <p>學校位置：香港太古城太豐路</p>
                  <p>辦學宗旨：致力於培育下一代成為具創新思維、國際視野、同理心及影響力的人才。</p>
                  <p>
                    學校特色：香港第一所加拿大學校，採用加拿大安大略省課程體系。提供從幼稚園至中學的“一條龍”教學服務。畢業生獲得OSSD證書，學歷與加拿大當地中學畢業證書等效，可直接申請全球大學。多元化學生群體，來自超過50個國家的學生彙聚一堂。注重多元文化包容性，推行編程、機器人技術、數學及創客教育。課外活動豐富，提供超過80種課外活動，並推出“OSSD+Signature
                    Program”學習計畫。</p>
                  <p>課程體系：加拿大安大略省課程體系</p>
                  <p>
                    教學語言：主要為英語，同時提供中文、法語、日語作為國際語言課的選擇。中文課程分為母語和非母語班，母語班使用人教版的教材。此外，在入學面試時，學校會根據學生的英語水準決定是否需要進入ESL（英語作為第二語言）班。
                  </p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/49e76cb7.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/f640d613.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/635336a2.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/43d9d989.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/f4e51f7f.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/ef7bfab6.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/1a9b5b93.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/84f9c408.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">11:00-12:20</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/evangel/?tgform=香港教育文化之旅" target="_blank">
                      播道书院
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辨時間:2006 年創立</p>
                  <p>學校類別:直資、男女校、基督教</p>
                  <p>辦學團體:香港基督教播道會聯會</p>
                  <p>學校位置:新界將軍澳至善街7號</p>
                  <p>辦學宗旨:以聖經真理為基礎，為青少年提供全人教育及優質教育，建立正確生活價值觀，啟發潛能，以達致靈、德、智、體、群、美均衡發展。</p>
                  <p>
                    學校特色:提供小到中一條龍教學服務，不設精英班，秉持“人人皆資優”的教育理念；以聖經真理為基礎，注重中華文化傳承，將古代聖賢名言融入教育；擁有寬敞的校園和先進的教學設施，提供均衡發展的教育，致力於學生在精神、道德、智慧、體育、社交和美學等方面的全面發展。
                  </p>
                  <p>課程體系:DSE</p>
                  <p>教學語言:學校以英文為主要教學語言。學校中、英並重；採用英語為主要教學語言，亦會努力推動普通話的學習，好讓同學掌握全世界最通用的兩個口語，有所需之口語能力來走遍中國、踏足世界。</p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/d34ec39e.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/a18aa460.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/13a9557e.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/a16df448.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/b55b172e.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/df87c5d4.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/8b96da93.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/444f352e.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">12:20-13:00</div>
                <div class="desc">
                  <p class="bold">午餐加午休</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">13:00-13:30</div>
                <div class="desc">
                  <p class="bold">交通</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">13:30-14:30</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/szgxgjb/?tgform=香港教育文化之旅" target="_blank">
                      香港苏浙公学国际部
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辦時間：2002年</p>
                  <p>學校類別：私立獨立的國際學校</p>
                  <p>辦學團體：香港蘇浙滬同鄉會</p>
                  <p>學校位置：香港東區寶馬山寶馬山道20號</p>
                  <p>辦學宗旨：以中國固有文化的精髓作培育學生品德的指標，體現「整齊嚴肅」的做事、做人生活態度；並在中英並重、文理並重及升學與就業並重的原則下提供均衡教育。</p>
                  <p>
                    學校特色：蘇浙公學國際部是在學校已有的國際幼稚園和小學部門的基礎上增設的，為3至18歲的學生提供一條龍式教育。是全港首間推行英語及普通話教育的一條龍式國際學校。提供雙軌制課程，學生可以根據自身需求選擇不同的升學路徑。
                  </p>
                  <p>課程體系：中學部提供7至13年級的教育，採用英國國家課程。提供International
                    Baccalaureate（IBDP）課程。直資部學生完成中三課程後，可以選擇修讀IGCSE或香港中學文憑考試（HKDSE）；完成中四課程後，可以選擇修讀IBDP或HKDSE。</p>
                  <p>教學語言：學校主要以英語作為教學語言。中國語文用普通話作為教學媒介，其他科目均用英文授課。</p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/dec4ce13.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/ef77eb80.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/931c999b.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/d6926f25.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/a717707e.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/2d743aaf.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/89d98c5d.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/7051b828.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">14:30-15:30</div>
                <div class="desc">
                  <p class="bold">交通</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">15:30-16:50</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/lpcuwc/?tgform=香港教育文化之旅" target="_blank">
                      UWC李宝椿联合世界书院
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辦時間：1978年</p>
                  <p>學校類別：私立獨立的國際學校</p>
                  <p>學校位置：新界沙田西沙公路落禾沙裏10號</p>
                  <p>辦學宗旨：在UWC，有意識的多元化學生羣體是獨特教育體驗的核心
                    -在這個社區中，共享經驗和協作生活旨在促進學生跨文化理解的發展。重視學生參與全財計畫，認可其個人的獨特才能和能力，而不僅僅是出色的學術成績。</p>
                  <p>
                    學校特色：香港李寶椿聯合世界書院是隻開辦國際文憑大學預科課程(IB課程)的直資中學，也是UWC在亞洲創辦的第一所學校，只提供兩年制中學課程。是香港IB龍頭名校之一，誕生了不少IB狀元，不少畢業生升讀世界級學府，如牛津、劍橋、哈佛等。
                  </p>
                  <p>課程體系：IB課程</p>
                  <p>教學語言：學校以英文爲主要教學語言。</p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/88efa747.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/1eb2dbfe.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/18a78c32.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/c56a1d27.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/abe78eaf.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/5b837c7a.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/d30d6c28.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/c477a6e8.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">17:00</div>
                <div class="desc">
                  <p class="bold">返程</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="title">
            <div class="date-card">
              <div class="card">
                <p>Day</p>
                <p>02</p>
              </div>
            </div>
            <p>2025年05月03日访校行程安排</p>
            <button>
              <span>
                <i class="o">展开</i>
                <i class="c">关闭</i>
              </span>
              <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
            </button>
          </div>
          <div class="list">
            <div class="wrap">
              <div class="con">
                <div class="time">07:40</div>
                <div class="desc">
                  <p class="bold">香港校区集合(香港尖沙咀港景汇商场)</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">08:10-08:50</div>
                <div class="desc">
                  <p class="bold">交通</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">09:00-10:20</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/ktssshk/?tgform=香港教育文化之旅" target="_blank">
                      九龙塘学校(中学部)
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辨時間:1962 年創立</p>
                  <p>學校類別:資助、男女校</p>
                  <p>辦學團體:九龍塘學校</p>
                  <p>學校位置:九龍九龍塘舒梨道10號</p>
                  <p>辦學宗旨:學校致力提供均衡教育，幫助學生建立正確人生觀，實踐「樂善勇敢」精神，使學生充分發展多元智能，提高他們對社會、祖國的責任感及歸屬感。</p>
                  <p>學校特色:學校提供均衡教育，注重學生的多元智能發展，並實踐“樂善勇敢”的精神。學校環境優美，校風良好
                    。學校聘請三位外籍教師，透過課堂、多元化活動提升英語教學品質。此外，學校還提供個性化的課程和輔導，確保每位學生都能得到適合自己的教育，致力於培養具有國際視野和社會責任感的全面發展人才。</p>
                  <p>課程體系:DSE</p>
                  <p>教學語言:學校以中文為主要教學語言。</p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/ce2711cf.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/623bccf1.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/4e3cd42b.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/61bd8da4.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/0a52f6f6.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/147d71d8.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/b9ad6639.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/c1a0b1e7.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">10:20-11:00</div>
                <div class="desc">
                  <p class="bold">交通</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">11:00-12:00</div>
                <div class="desc">
                  <p class="bold">
                    <a href="https://schoollist.ieduchina.com/school/ccckeitohk/?tgform=香港教育文化之旅" target="_blank">
                      中华基督教会基道中学
                      <span>
                        查看更多<img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/70084d28.png">
                      </span>
                    </a>
                  </p>
                  <p>創辦時間：2003年</p>
                  <p>學校類別：資助、男女校、基督教</p>
                  <p>辦學團體：中華基督教會香港區會</p>
                  <p>學校位置：九龍土瓜灣崇安街28號</p>
                  <p>辨學宗旨：K: Knowledge and wisdom 藉學習獲得知識 T: Transcendence求突破追求卓越 S: Serving others以服侍回饋社會 S:
                    Salvation憑信心領受救恩</p>
                  <p>
                    學校特色：學校強調「以學生為本、以學習為中心」的教育，為學生提供寬廣知識、考察研究、生活教育、社群服務、體藝活動和信仰認識等六種學習經歷，讓學生在智能、情意、體藝及靈性方面有均衡的發展，並實踐「終身學習」的目標。
                  </p>
                  <p>課程體系：DSE</p>
                  <p>教學語言：學校以中文為主要教學語言，注重培養學生兩文三語的能力。</p>
                  <p>加強英語能力：初中部份班別以英語教授數學、綜合科學、物理和化學科。歷史、地理、普通電腦、公民、經濟與社會、綜合藝術、音樂和家政科設有英語延展學習。高中物理、化學和數學延伸部份 (代數與微積分)
                    及部份班別的數學科以英語教授。</p>
                  <p>加強普通話能力：初中大部分班別以普通話教授中文。</p>
                  <div class="image">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/4ef64172.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/cff4c63b.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/85fed7a0.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/b1beb5d1.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/85f8a55c.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/1c6a0911.jpg">
                    <img alt="" src="https://m.ieduchina.com/topic/2025/hk13/images/dabb6865.jpg"
                      preview="https://m.ieduchina.com/topic/2025/hk13/images/6f72d931.jpg">
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="time">12:00-13:00</div>
                <div class="desc">
                  <p class="bold">午餐加午休</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
              <div class="con">
                <div class="time">13:00</div>
                <div class="desc">
                  <p class="bold">返程</p>
                  <p></p>
                  <div class="image"></div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="green">
    <div class="yx">
      <h3 class="title" en="SCHOOLS">参与院校</h3>
      <ul>
        <ul>
          <li>
            <a href="https://schoollist.ieduchina.com/school/hofung/?tgform=香港教育文化之旅" target="_blank">
              <img alt="可风中学(啬色园主办)" src="https://m.ieduchina.com/topic/2025/hk13/images/59f653cd.png">
              <p>可风中学(啬色园主办)</p>
            </a>
          </li>
          <li>
            <a href="https://schoollist.ieduchina.com/school/lwfsshk/?tgform=香港教育文化之旅" target="_blank">
              <img alt="世界龙冈学校刘皇发中学" src="https://m.ieduchina.com/topic/2025/hk13/images/d5191299.png">
              <p>世界龙冈学校刘皇发中学</p>
            </a>
          </li>
          <li>
            <a href="https://schoollist.ieduchina.com/school/tmcss/?tgform=香港教育文化之旅" target="_blank">
              <img alt="屯门天主教中学" src="https://zhaosheng.ieduchina.com/Upload/File/202402/65c1cbccbbee0.jpg">
              <p>屯门天主教中学</p>
            </a>
          </li>
          <li>
            <a href="https://schoollist.ieduchina.com/school/yllhk/?tgform=香港教育文化之旅" target="_blank">
              <img alt="基督教香港信义会元朗信义中学" src="https://www.ieduchina.com/topic/2024/hk8/images/af6a1a94.png">
              <p>基督教香港信义会元朗信义中学</p>
            </a>
          </li>
          <li>
            <a href="https://schoollist.ieduchina.com/school/ktssshk/?tgform=香港教育文化之旅" target="_blank">
              <img alt="九龙塘学校(中学部)" src="https://m.ieduchina.com/topic/2025/hk13/images/389a7674.png">
              <p>九龙塘学校(中学部)</p>
            </a>
          </li>
          <li>
            <a href="https://schoollist.ieduchina.com/school/ccckeitohk/?tgform=香港教育文化之旅" target="_blank">
              <img alt="中华基督教会基道中学" src="https://m.ieduchina.com/topic/2025/hk13/images/9a4d802d.png">
              <p>中华基督教会基道中学</p>
            </a>
          </li>
          <li>
            <a href="https://schoollist.ieduchina.com/school/xgdlyjnd/?tgform=香港教育文化之旅" target="_blank">
              <img alt="香港德思齐加拿大国际学校" src="https://m.ieduchina.com/topic/2025/hk13/images/ccfb325f.png">
              <p>香港德思齐加拿大国际学校</p>
            </a>
          </li>
          <li>
            <a href="https://schoollist.ieduchina.com/school/evangel/?tgform=香港教育文化之旅" target="_blank">
              <img alt="播道书院" src="https://m.ieduchina.com/topic/2025/hk13/images/1cc1684a.png">
              <p>播道书院</p>
            </a>
          </li>
          <li>
            <a href="https://schoollist.ieduchina.com/school/szgxgjb/?tgform=香港教育文化之旅" target="_blank">
              <img alt="香港苏浙公学国际部" src="https://m.ieduchina.com/topic/2025/hk13/images/77922d59.png">
              <p>香港苏浙公学国际部</p>
            </a>
          </li>
          <li>
            <a href="https://schoollist.ieduchina.com/school/lpcuwc/?tgform=香港教育文化之旅" target="_blank">
              <img alt="UWC李宝椿联合世界书院" src="https://m.ieduchina.com/topic/2025/hk13/images/cec9b52f.png">
              <p>UWC李宝椿联合世界书院</p>
            </a>
          </li>
        </ul>
      </ul>
    </div>
  </section>
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
        <input name="mark" type="hidden" value="香港教育文化之旅第13期_国际教育网WAP版">
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
</template>

<style lang="less">
:root {
  --prime: #003d96;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  outline: none;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  color: #7e8c8d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-text-decoration: none;
  text-decoration: none;
}

a:visited {
  -webkit-text-decoration: none;
  text-decoration: none;
}

li {
  list-style: none;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track-piece {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgba(125, 125, 125, 0.7);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: rgba(125, 125, 125, 0.7);
  border-radius: 6px;
}

@font-face {
  font-family: "Source Han Sans CN-Normal";
  src: url("https://m.ieduchina.com/statics/font/SourceHanSansCN-Normal.otf") format("truetype");
}

html,
body {
  width: 100%;
  font-family: "Source Han Sans CN-Medium";
}

body {
  font-family: Source Han Sans CN-Normal;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
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
  background-color: #003d96;
  background-color: var(--prime);
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
  background: #003d96;
  background: var(--prime);
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

section .text p {
  font-size: 0.512rem;
  font-weight: 500;
  line-height: 0.68266667rem;
  margin-top: 0.85333333rem;
  color: #666666;
  text-align: justify;
}

section .text p span {
  color: #003d96;
  color: var(--prime);
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
  background-color: #003d96;
  background-color: var(--prime);
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
  background-color: #f99501;
}

section .xc {
  font-size: 0;
  padding-bottom: 1.28rem;
}

section .xc ul {
  margin-top: 1.06666667rem;
}

section .xc ul li {
  border-radius: 0.21333333rem;
  margin-bottom: 0.64rem;
  background-color: white;
}

section .xc ul li:last-of-type {
  margin-bottom: 0;
}

section .xc ul li .title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 2.13333333rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

section .xc ul li .title>img {
  width: 2.02666667rem;
  height: 1.00266667rem;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
}

section .xc ul li .title p {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 0.10666667rem;
  font-size: 0.64rem;
  font-weight: bold;
  color: #333333;
}

section .xc ul li .title button {
  width: 2.21866667rem;
  height: 0.85333333rem;
  border-radius: 0.42666667rem;
  background: transparent;
  border: none;
  font-size: 0.46933333rem;
  font-weight: 400;
  color: #003d96;
  color: var(--prime);
  background-color: rgba(39, 55, 112, 0.05);
  cursor: pointer;
  margin-right: 0.42666667rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  white-space: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

section .xc ul li .title button span i {
  font-style: normal;
  font-style: initial;
}

section .xc ul li .title button span i.c {
  display: none;
}

section .xc ul li .title button img {
  width: 0.256rem;
  height: 0.256rem;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  margin-left: 0.10666667rem;
  margin-top: 0.064rem;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
  -webkit-transition: all 800ms;
  transition: all 800ms;
}

section .xc ul li .title button.s img {
  -webkit-transform: rotateZ(0deg);
  transform: rotateZ(0deg);
  -webkit-transition: all 800ms;
  transition: all 800ms;
}

section .xc ul li .list {
  font-size: 0;
  height: 0;
  overflow: hidden;
}

section .xc ul li .list .wrap .con {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

section .xc ul li .list .wrap .con:last-of-type .time::after {
  content: normal;
  content: initial;
}

section .xc ul li .list .wrap .con .time {
  font-size: 0.55466667rem;
  font-weight: 400;
  color: #333333;
  width: 3.84rem;
  text-align: center;
  position: relative;
}

section .xc ul li .list .wrap .con .time::after {
  position: absolute;
  content: "";
  left: 50%;
  top: 0.768rem;
  width: 1px;
  bottom: 0.21333333rem;
  border-left: 1px #B8B8B8 dashed;
}

section .xc ul li .list .wrap .con .desc {
  margin-left: 0.10666667rem;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-bottom: 0.42666667rem;
}

section .xc ul li .list .wrap .con .desc p {
  font-size: 0.512rem;
  font-weight: 400;
  color: #999999;
  margin-top: 0.42666667rem;
  line-height: 0.59733333rem;
  padding-right: 0.512rem;
  text-align: justify;
}

section .xc ul li .list .wrap .con .desc p.bold {
  font-size: 0.55466667rem;
  font-weight: bold;
  color: #333333;
}

section .xc ul li .list .wrap .con .desc p.bold a {
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
  margin-top: 0rem;
  letter-spacing: -0.02133333rem;
}

section .xc ul li .list .wrap .con .desc p.bold a span {
  font-size: 0.512rem;
  font-weight: 400;
  color: #003d96;
  color: var(--prime);
}

section .xc ul li .list .wrap .con .desc p.bold a span img {
  width: 0.46933333rem;
  height: 0.36266667rem;
  -o-object-fit: contain;
  object-fit: contain;
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
  vertical-align: 0.02133333rem;
  -webkit-transform-origin: center center;
  transform-origin: center center;
}

section .xc ul li .list .wrap .con .desc p.bold:first-of-type {
  margin-top: 0;
}

section .xc ul li .list .wrap .con .desc p.bold a {
  color: #333;
}

section .xc ul li .list .wrap .con .desc p.bold a:hover {
  color: #003d96;
  color: var(--prime);
}

section .xc ul li .list .wrap .con .desc p.index {
  padding-left: 2.54rem;
  text-indent: -2.54rem;
}

section .xc ul li .list .wrap .con .desc p.index2 {
  padding-left: 2.94rem;
  text-indent: -2.94rem;
}

section .xc ul li .list .wrap .con .desc p i {
  font-style: normal;
  font-style: initial;
}

section .xc ul li .list .wrap .con .desc .image {
  padding-right: 0.512rem;
}

section .xc ul li .list .wrap .con .desc .image img {
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  margin-top: 0.42666667rem;
}

section .xc ul li .list .wrap .con .desc .image>a {
  text-align: center;
  display: inline-block;
  width: 0.85333333rem;
  height: 2.304rem;
  background: #EBF3F2;
  border-radius: 0;
  margin-right: 0.512rem;
  font-size: 0.46933333rem;
  font-weight: 400;
  color: #003d96;
  color: var(--prime);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: 0.55466667rem;
}

section .xc ul li .list .wrap .con .desc .image>a img {
  width: 0.42666667rem;
  height: 0.34133333rem;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: contain;
  object-fit: contain;
  margin-top: -0.64rem;
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
  margin-left: 0.08533333rem;
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
  border: 1px solid #003d96;
  border: 1px solid var(--prime);
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
  color: #003d96;
  color: var(--prime);
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
  color: #003d96;
  color: var(--prime);
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
  background: #003d96;
  background: var(--prime);
  -webkit-box-shadow: 0 0.064rem 0.128rem 0.02133333rem rgba(39, 55, 112, 0.502);
  box-shadow: 0 0.064rem 0.128rem 0.02133333rem rgba(39, 55, 112, 0.502);
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
  background: #003d96;
  background: var(--prime);
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
  color: #003d96;
  color: var(--prime);
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
  color: #003d96;
  color: var(--prime);
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
  background-color: #003d96;
  background-color: var(--prime);
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
  border: solid 0.10666667rem #003d96;
  border: solid 0.10666667rem var(--prime);
  margin: 0 auto;
}

.date-card .card p {
  text-align: center;
  margin-left: 0 !important;
}

.date-card .card p:first-of-type {
  background-color: #003d96;
  background-color: var(--prime);
  color: #fff;
  font-size: 0.256rem;
  font-weight: bold;
  line-height: 0.40533333rem;
  margin-top: -0.10666667rem;
  letter-spacing: 0.02133333rem;
}

.date-card .card p:nth-of-type(2) {
  font-weight: bold;
  color: #003d96;
  color: var(--prime);
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