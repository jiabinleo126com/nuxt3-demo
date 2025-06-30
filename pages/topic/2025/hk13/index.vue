<template>
    <img src="//www.ieduchina.com/topic/2025/hk13/images/1d83b8f1.jpg" alt="" height="0" width="0"
        img="//www.ieduchina.com/topic/2025/hk13/images/1d83b8f1.jpg" style="display:none">
    <Header />
    <section>
        <div class="banner">
            <img src="//www.ieduchina.com/topic/2025/hk13/images/b01ba60e.jpg" alt="2025年香港名校探校之旅" height="420"
                width="1280">
        </div>
        <component :is="About" :data="about" />
        <component :is="LiangDian" />
    </section>
    <section class="gray">
        <component :is="XingCheng" />
    </section>
    <section class="green">
        <component :is="School" :data="school"/>
    </section>
    <component :is="Footer" />
    <div class="mask">
        <div class="wrap">
            <img src="//www.ieduchina.com/topic/2024/hk7/images/a4ba9f2a.png" alt="">
            <div class="video-play">
                <video height="405" id="mask_video" playsinline poster="" preload="auto" value="" webkit-playsinline
                    width="520"></video>
            </div>
        </div>
    </div>
    <component :is="RightFixedNav" bgColor="#003d96"/>
    <component :is="MaskForm" mark="香港教育文化之旅第13期_国际教育网PC版" />
    <div class="img-mask">
        <img src="" alt="">
        <div class="close-img-mask"></div>
        <div class="arr">
            <span class="left"></span>
            <span class="right"></span>
        </div>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const LiangDian = defineAsyncComponent(() => import('~/components/topic/2025/hk13/LiangDian.vue'))
const XingCheng = defineAsyncComponent(() => import('~/components/topic/2025/hk13/XingCheng.vue'))
const School = defineAsyncComponent(() => import('~/components/topic/hkfxy/School.vue'))
const Footer = defineAsyncComponent(() => import('~/components/topic/HK-Footer.vue'))
const About = defineAsyncComponent(() => import('~/components/topic/hkfxy/About.vue'))
const MaskForm = defineAsyncComponent(() => import('~/components/topic/hkfxy/MaskForm.vue'))
const RightFixedNav = defineAsyncComponent(() => import('~/components/topic/hkfxy/RightFixedNav.vue'))


import { onMounted, ref } from "vue";

const about = ref([
    "5月2日-5月3日，【香港教育文化之旅】第13期圆满收官。此次活动如教育盛宴，为参访家庭带来难忘探索体验。", "当下教育资源优质且丰富，香港凭借独特地理位置与深厚教育底蕴，成为众多学子求学圣地，其顶尖中学以先进教育理念和卓越教学成果吸引众多目光。为助大家深入了解香港中学教育，国际教育网精心策划此次独家定制的香港名校探访团活动。", "行程丰富紧凑，探访团深入走访香港十所顶尖中学，路线涵盖DSE课程学校与国际课程学校，让参访家庭一站式领略不同名校风采。", "国际教育网专家团队全程相伴，每到一所学校，便如知识引路人，凭借专业造诣和行业经验，深度解析学校特色与教学理念，详细讲解课程设置、师资力量，还分享教育发展趋势，让家长全方位了解学校。", "校长和老师全程导览，带领大家参观校园各处，从现代化教学楼到实验室、艺术教室、运动场，展示校园文化魅力，热情解答疑问，分享学校发展历程、办学理念与成果，让家长和学生深入了解学校。", "校长们亲授的普通话升学讲座是探访团亮点。校长们以专业素养和对教育体系的把握，介绍DSE与国际课程学校的升学途径、招生政策及升学准备，用案例和建议为家长学生拨开迷雾。家长们称讲座如及时雨，让他们对升学之路方向清晰，收获颇丰。"
]);
const school = [
    {
        path:"https://schoollist.ieduchina.com/school/hofung/",
        name:"可风中学(啬色园主办)",
        logo:"//www.ieduchina.com/topic/2025/hk13/images/59f653cd.png"
    },{
        path:"https://schoollist.ieduchina.com/school/lwfsshk/",
        name:"世界龙冈学校刘皇发中学",
        logo:"//www.ieduchina.com/topic/2025/hk13/images/d5191299.png"
    },{
        path:"https://schoollist.ieduchina.com/school/tmcss/",
        name:"屯门天主教中学",
        logo:"https://zhaosheng.ieduchina.com/Upload/File/202402/65c1cbccbbee0.jpg"
    },
    {
        path:"https://schoollist.ieduchina.com/school/yllhk/",
        name:"基督教香港信义会元朗信义中学",
        logo:"https://www.ieduchina.com/topic/2024/hk8/images/af6a1a94.png"
    },
    {
        path:"https://schoollist.ieduchina.com/school/ktssshk/",
        name:"九龙塘学校(中学部)",
        logo:"//www.ieduchina.com/topic/2025/hk13/images/389a7674.png"
    },
    {
        path:"https://schoollist.ieduchina.com/school/ccckeitohk/",
        name:"中华基督教会基道中学",
        logo:"//www.ieduchina.com/topic/2025/hk13/images/9a4d802d.png"
    },
    {
        path:"https://schoollist.ieduchina.com/school/xgdlyjnd/",
        name:"香港德思齐加拿大国际学校",
        logo:"//www.ieduchina.com/topic/2025/hk13/images/ccfb325f.png"
    },
    {
        path:"https://schoollist.ieduchina.com/school/evangel/",
        name:"播道书院",
        logo:"//www.ieduchina.com/topic/2025/hk13/images/1cc1684a.png"
    },
    {
        path:"https://schoollist.ieduchina.com/school/szgxgjb/",
        name:"香港苏浙公学国际部",
        logo:"//www.ieduchina.com/topic/2025/hk13/images/77922d59.png"
    },
    {
        path:"https://schoollist.ieduchina.com/school/lpcuwc/",
        name:"UWC李宝椿联合世界书院",
        logo:"//www.ieduchina.com/topic/2025/hk13/images/cec9b52f.png"
    }
]
useHead({
    script: [
        {
            src: "https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js",
            type: "text/javascript",
            defer: true
        },
        {
            src: "https://www.ieduchina.com/statics/pcc/js/swiper.min.js",
            type: "text/javascript",
            defer: true
        },
        {
            src: "/tencent-cdn/qcloud/video/dist/tcadapter.1.0.0.min.js",
            defer: true,
            crossorigin: 'anonymous'
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/TXLivePlayer-1.2.3.min.js",
            defer: true,
            crossorigin: 'anonymous'
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/hls.min.1.1.5.js",
            defer: true,
            crossorigin: 'anonymous'
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/flv.min.1.6.3.js",
            defer: true,
            crossorigin: 'anonymous'
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/dash.all.min.4.4.1.js",
            defer: true,
            crossorigin: 'anonymous'
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.v4.5.4.min.js",
            defer: true,
            crossorigin: 'anonymous'
            // }, {
            //     src: "/statics/video/js/videolist.js",
            //     defer: true,
            //     crossorigin: 'anonymous'
        }
    ],
    link: [
        {
            rel: "shortcut icon",
            type: "image/x-icon",
            href: "//www.ieduchina.com/statics/pcc/img/favicon.ico"
        },
        {
            rel: "stylesheet",
            href: "https://www.ieduchina.com/statics/pc/css/swiper.min.css"
        },
        {
            rel: 'stylesheet',
            href: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.min.css'
        }
    ],
    title: "香港教育文化之旅第13期-香港探校 - 国际教育网",
    meta: [
        {
            name: "keywords",
            content: "香港教育文化之旅"
        },
        {
            name: "description",
            content: "5月2日-5月3日,香港教育文化之旅第13期圆满收官.此次活动如教育盛宴,为参访家庭带来难忘探索体验.行程丰富紧凑,探访团深入走访香港十所顶尖中学,路线涵盖DSE课程学校与国际课程学校,让参访家庭一站式领略不同名校风采."
        }
    ]
})
onMounted(() => {
    $(".title").on("click", "button", function () {
        var flag = $(this).hasClass("s");
        if (flag) {
            $(this).removeClass("s").find("span").text($(this).find("a.c").text());
            $(this).closest("li").find(".list").animate({ "height": 0 }, 800);
        }
        else {
            $(this).addClass("s").find("span").text($(this).find("a.g").text());
            $(this).closest("li").find(".list").animate({ "height": $(this).closest("li").find(".wrap").height() }, 800);
        }
    });
    var previewLength = $("img[preview]").length;
    $.each($("img[preview]"), function (index, item) {
        $(item).attr("index", index);
    });
    var previewIndex = 0;
    $(document).on("click", "img[preview]", function () {
        var src = $(this).attr("preview");
        $(".img-mask img").attr("src", src);
        $(".img-mask").addClass("show");
        previewIndex = Number($(this).attr("index"));
    });
    $(document).on("click", ".close-img-mask", function () {
        $(".img-mask").removeClass("show");
        $(".img-mask img").attr("src", "");
    });
    $(".img-mask").on("click", function (e) {
        if (e.target == this) {
            $(this).removeClass("show");
            $(".img-mask img").attr("src", "");
        }
    });
    $(".arr").on("click", "span", function () {
        var img = "";
        $(".img-mask img").attr("src", "");
        if ($(this).hasClass("left")) {
            previewIndex = previewIndex - 1;
        }
        else if ($(this).hasClass("right")) {
            previewIndex = previewIndex + 1;
        }
        if (previewIndex < 0) {
            previewIndex = previewLength - 1;
        }
        else if (previewIndex > previewLength - 1) {
            previewIndex = 0;
        }
        img = $("img[preview][index='" + previewIndex + "']");
        $(".img-mask img").attr("src", img.attr("preview"));
    });
    $("#fullyear").text(new Date().getFullYear());
    new Swiper('.case_swiper', {
        effect: 'coverflow',
        centeredSlides: true,
        spaceBetween: -80,
        slidesPerView: 2,
        loop: true,
        autoplay: 500,
        coverflowEffect: {
            rotate: 0,
            stretch: 60.8,
            depth: 80,
            modifier: 3,
            slideShadows: true,
        }
    });
    if ($(".video_swiper").find(".swiper-slide").length > 4) {
        new Swiper('.video_swiper', {
            loop: true,
            slidesPerView: 4,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }
    try {
        var player = TCPlayer('swipervideo', {});
        player.src($("#swipervideo").attr("value"));
        player.poster($("#swipervideo").attr("poster2"));
    }
    catch (err) {
    }
    $("#videos").on("click", "img[value]", function () {
        var img = $(this).attr("src");
        var value = $(this).attr("value");
        var name = $(this).attr("alt");
        player.src(value);
        player.poster(img);
        $(this).closest("#videos").siblings("p").text(name);
        setTimeout(function () {
            player.play();
        }, 300);
    });
    var player2 = TCPlayer('mask_video', {});
    $("select").change(function () {
        $(this).css("color", "#333");
    });
    $(".mask .wrap>img").on("click", function () {
        $(".mask").hide();
        player2.pause();
    });
    $(document).on('click', '.showTk', function () {
        $('.mask_form').addClass('show');
        //$("body").addClass("noscroll");
    });
    $(document).on('click', '.close', function () {
        $('.mask_form').removeClass('show');
        //$("body").removeClass("noscroll");
        $('.error-tips').html('');
        $(this).parents('.mask_form').find('form')[0].reset();
    });
    var flag = true;
    if ($(".school").length) {
        $(window).on('scroll', function () {
            var st = $(window).scrollTop();
            var wh = $(".school").offset().top;
            if (st > (wh - 48) && flag && !$(".img-mask").hasClass("show")) {
                $(".showTk").click();
                flag = false;
            }
        });
    }
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
            layer.msg(msg);
        }
        else {
            $.ajax({
                url: "".concat(form[0].action, "&t=").concat(Math.random().toString()),
                type: form[0].method,
                dataType: "JSON",
                data: form.serialize(),
                success: function (res) {
                    if (res.status == 1) {
                        $('.mask_form').removeClass('show');
                        //$("body").removeClass("noscroll");
                        layer.msg("您已报名成功，谢谢您的参与！");
                        form[0].reset();
                    }
                    else {
                        layer.msg(res.info);
                    }
                },
                error: function () {
                    layer.msg("报名失败，请稍后再试");
                }
            });
        }
        return false;
    });
    $(".contact ul").hover(function () {
        $(".right-fixed-nav").hide();
    }, function () {
        $(".right-fixed-nav").show();
    });
})
</script>
<style lang="less">
:root {
    --primary-color: #003d96;
}

.date-card {
    width: 125px;
    height: 42px;
}

.date-card .card {
    width: 53px;
    height: 42px;
    background-color: #fff;
    border: solid 5px var(--primary-color);
    margin: 0 auto;
}

.date-card .card p {
    text-align: center;
    margin-left: 0 !important;
}

.date-card .card p:first-of-type {
    background-color: var(--primary-color);
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    line-height: 19px;
    margin-top: -5px;
    letter-spacing: 1px;
}

.date-card .card p:nth-of-type(2) {
    font-weight: bold;
    color: var(--primary-color);
    font-size: 15px;
    padding-top: 2px;
    letter-spacing: 1px;
}

.images {
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
    font-size: 0;
    width: 1280px;
    margin: 50px auto 0;
}

.images .left img {
    width: 560px;
    height: 305px;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: left center;
    object-position: left center;
}

.images .right {
    width: 705px;
    height: 305px;
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

.images .right img {
    width: 225px;
    height: 145px;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}

.images .right img:nth-of-type(n+4) {
    margin-top: 15px;
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
    background-color: var(--primary-color);
}

section.green>div>h3 {
    color: #fff;
}

section h3.title {
    font-size: 42px;
    font-weight: bold;
    color: #000;
}

section h3.title::after {
    content: attr(en);
    font-size: 28px;
    font-weight: 500;
    color: #ccc;
    text-transform: uppercase;
    margin-left: 20px;
}

section .banner {
    width: 1280px;
    margin: 0 auto;
}

section .banner img {
    width: 100%;
    height: 420px;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}

section .jc {
    width: 1280px;
    margin: 0 auto;
    padding: 80px 0 80px;
}

section .jc .swiper-container {
    height: 360px;
    margin-top: 80px;
}

section .jc .swiper-container img {
    -o-object-position: center;
    object-position: center;
    -o-object-fit: cover;
    object-fit: cover;
}

section .jc .swiper-container .swiper-slide-next,
section .jc .swiper-container .swiper-slide-prev {
    -webkit-filter: brightness(0.5);
    filter: brightness(0.5);
}

section .sp {
    width: 1280px;
    margin: 0 auto;
    padding: 80px 0;
}

section .sp .box {
    width: 1034px;
    height: 707px;
    margin: 80px auto 0;
}

section .sp .box .video-wrap {
    width: 1034px;
    height: 520px;
}

section .sp .box .video-wrap .tcplayer {
    width: 100%;
    height: 100%;
}

section .sp .box p {
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    background-color: #000;
}

section .sp .box .swiper_wrap {
    background-color: #656565;
    position: relative;
    padding-top: 18px;
}

section .sp .box .swiper_wrap .video_swiper {
    width: 820px;
    height: 122px;
    margin: 0 auto;
}

section .sp .box .swiper_wrap .video_swiper .swiper-wrapper .swiper-slide img {
    width: 190px;
    height: 104px;
    -o-object-position: center -19px;
    object-position: center -19px;
    -o-object-fit: cover;
    object-fit: cover;
    cursor: pointer;
}

section .sp .box .swiper_wrap .swiper-button-prev {
    position: absolute;
    left: 50px;
    top: 80px;
    width: 14px;
    height: 30px;
    background: url(https://www.ieduchina.com/topic/2024/hk7/images/10552782.png) center / contain no-repeat;
}

section .sp .box .swiper_wrap .swiper-button-next {
    position: absolute;
    right: 50px;
    top: 80px;
    width: 14px;
    height: 30px;
    background: url(https://www.ieduchina.com/topic/2024/hk7/images/10552782.png) center / contain no-repeat;
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
}

.mask {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 111;
    background-color: rgba(0, 0, 0, 0.5);
}

.mask .wrap {
    position: absolute;
    background-color: #000;
    width: 1200px;
    height: 600px;
    left: 50%;
    top: 50%;
    z-index: 100;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.mask .wrap>img {
    width: 32px;
    height: 32px;
    -o-object-position: center;
    object-position: center;
    -o-object-fit: contain;
    object-fit: contain;
    position: absolute;
    right: -30px;
    top: -30px;
    z-index: 100;
    cursor: pointer;
}

.mask .wrap .video-play {
    width: 100%;
    height: 100%;
}

.mask .wrap .video-play .tcplayer {
    width: 100%;
    height: 100%;
}

img[preview] {
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
}

.img-mask {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1100;
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

.img-mask.show {
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
}

.img-mask.show img {
    height: 80vh;
    -o-object-fit: contain;
    object-fit: contain;
    -o-object-position: center;
    object-position: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.img-mask.show .close-img-mask {
    position: absolute;
    left: 50%;
    bottom: 4vh;
    margin-left: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    background: url("//www.ieduchina.com/topic/2024/hk7/images/a4ba9f2a.png") center / contain no-repeat;
}

.img-mask.show .arr span {
    position: absolute;
    top: 50%;
    margin-top: -30px;
    width: 60px;
    height: 60px;
    background: url(//www.ieduchina.com/topic/2025/hk13/images/e113f82e.png) center / contain no-repeat;
    cursor: pointer;
}

.img-mask.show .arr span.left {
    left: 5vw;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.img-mask.show .arr span.right {
    right: 5vw;
}
</style>