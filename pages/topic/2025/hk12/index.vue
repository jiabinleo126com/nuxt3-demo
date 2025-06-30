<template>
    <img src="https://www.ieduchina.com/topic/2025/hk12/images/dd2d5130.jpg" alt="" height="0" width="0"
        img="https://www.ieduchina.com/topic/2025/hk12/images/dd2d5130.jpg" style="display:none">
    <Header />
    <section>
        <div class="banner">
            <img src="https://www.ieduchina.com/topic/2025/hk12/images/427ffc66.png" alt="2025年香港名校探校之旅" height="420"
                width="1280">
        </div>
        <component :is="About" :data="about" />
        <component :is="LiangDian" />
    </section>
    <section class="gray">
        <component :is="XingCheng" />
    </section>
    <section class="green">
        <component :is="School" />
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
    <component :is="RightFixedNav" />
    <component :is="MaskForm" mark="香港教育文化之旅第12期_国际教育网PC版" />
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
const LiangDian = defineAsyncComponent(() => import('~/components/topic/2025/hk12/LiangDian.vue'))
const XingCheng = defineAsyncComponent(() => import('~/components/topic/2025/hk12/XingCheng.vue'))
const School = defineAsyncComponent(() => import('~/components/topic/2025/hk12/School.vue'))
const Footer = defineAsyncComponent(() => import('~/components/topic/HK-Footer.vue'))
const About = defineAsyncComponent(() => import('~/components/topic/hkfxy/About.vue'))
const MaskForm = defineAsyncComponent(() => import('~/components/topic/hkfxy/MaskForm.vue'))
const RightFixedNav = defineAsyncComponent(() => import('~/components/topic/hkfxy/RightFixedNav.vue'))

import { onMounted, ref } from "vue";

const about = ref([
    "【香港教育文化之旅】第12期在1月21日落下帷幕，为参访家庭带来了一场难忘的教育探索之旅。在教育资源多元且优质的当下，香港的顶尖中学以其独特的教育理念和卓越的教学成果吸引着众多家长和学生的目光。为了让大家深入了解香港的中学教育，国际教育网精心策划并圆满完成了这次独家定制的香港名校探访团活动。",
    "此次探访团深入体验了香港七所顶尖中学，路线巧妙地覆盖了香港核心教育区，真正做到了一站式领略名校风采。在2天的行程中家长们体验了一场充实又震撼的教育探索之旅。",
    "国际教育网专家团队的全程陪伴，是这次探访团的一大亮点。在每一所学校，专家们都凭借着深厚的专业知识和丰富的行业经验，为家长们深度解析学校特色与教学理念。他们不仅讲解了学校的课程设置、师资力量，还分享了国际教育的发展趋势，让家长们对每所学校有了全方位、深层次的认识。",
    "校长和老师们的全程相伴导览，更是让来访家庭有机会近距离探索校园细节，饱览校园风光。从现代化的教学楼到设施完备的实验室，从充满艺术氛围的艺术教室到活力四射的运动场，大家亲身感受着每所学校独特的校园文化。校长和老师们热情地解答大家的疑问，分享学校的历史故事和办学成果，让家长和学生对学校的了解不再停留在表面。",
    "校长亲授的普通话升学讲座，无疑是本次探访团的重头戏。在讲座中，校长们精准对接香港教育体系，详细介绍了香港中学的升学途径、招生政策以及如何做好升学准备。他们用丰富的案例和实用的建议，为家长们和学生们答疑解惑，帮助大家前瞻布局择校规划蓝图，量身定做个性化升学路径。许多家长表示，这场讲座让他们对孩子的升学之路有了清晰的方向，收获颇丰。"
]);

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
    title: "香港教育文化之旅第12期-香港探校 - 国际教育网",
    meta: [
        {
            name: "keywords",
            content: "香港探校"
        },
        {
            name: "description",
            content: "【香港教育文化之旅】第12期在1月21日落下帷幕，为参访家庭带来了一场难忘的教育探索之旅。在教育资源多元且优质的当下，香港的顶尖中学以其独特的教育理念和卓越的教学成果吸引着众多家长和学生的目光。为了让大家深入了解香港的中学教育，国际教育网精心策划并圆满完成了这次独家定制的香港名校探访团活动。"
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
    --primary-color: #273770;
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