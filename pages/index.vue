<template>
    <Header />
    <component :is="Activity" :activity="activity" :bannerList="bannerList" />
    <component :is="FocusToday" />
    <component :is="VideoList" :verticalVideos="verticalVideos" :horizontalVideos="horizontalVideos" />
    <component :is="RealTimeInfo" />
    <component :is="InternationalSchool" />
    <component :is="HotSchool" />
    <component :is="cityExpress" />
    <component :is="Links" />
    <Footer />
</template>
<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
const Activity = defineAsyncComponent(() => import('~/components/index/Activity.vue'))
const VideoList = defineAsyncComponent(() => import(`~/components/index/VideoList.vue`))
const Links = defineAsyncComponent(() => import(`~/components/index/Links.vue`))
const HotSchool = defineAsyncComponent(() => import(`~/components/index/HotSchool.vue`))
const cityExpress = defineAsyncComponent(() => import(`~/components/index/CityExpress.vue`))
const InternationalSchool = defineAsyncComponent(() => import(`~/components/index/InternationalSchool.vue`))
const FocusToday = defineAsyncComponent(() => import(`~/components/index/FocusToday.vue`))
const RealTimeInfo = defineAsyncComponent(() => import(`~/components/index/RealTimeInfo.vue`))

const { data: { value: { activity = null, bannerList = [], verticalVideos = [], horizontalVideos = [] } } } = await useFetch(`/api/`, {
  onResponseError({ response }) {
    console.error('API request failed:', response._data)
  }
})

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
        }, {
            src: "https://cloudcache.tencentcs.com/qcloud/video/dist/tcadapter.1.0.0.min.js",
            type: "text/javascript",
            defer: true
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/TXLivePlayer-1.2.3.min.js",
            type: "text/javascript",
            defer: true
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/hls.min.1.1.5.js",
            type: "text/javascript",
            defer: true
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/flv.min.1.6.3.js",
            type: "text/javascript",
            defer: true
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/dash.all.min.4.4.1.js",
            type: "text/javascript",
            defer: true
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.v4.5.4.min.js",
            type: "text/javascript",
            defer: true
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
        }, {
            rel: "stylesheet",
            href: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.min.css"
        }
    ],
    title: '国际教育网 国际化学校门户',
    meta: [
        { name: 'description', content: '国际教育网是汇集了海内外前沿的国际教育门户网站，涵盖北京、上海、广州、深圳等全国数千家国际学校排名学费及招生报名资讯，为K12家长提供全面升学指导、为孩子提供专业的国际课程、助力备考升学。' },
        { name: 'keywords', content: '国际教育,国际学校,教育门户' },

        // Open Graph 协议（用于社交媒体分享）
        { property: 'og:title', content: '国际教育网 国际化学校门户' },
        { property: 'og:description', content: '国际教育网是汇集了海内外前沿的国际教育门户网站，涵盖北京、上海、广州、深圳等全国数千家国际学校排名学费及招生报名资讯，为K12家长提供全面升学指导、为孩子提供专业的国际课程、助力备考升学。' },
        { property: 'og:type', content: 'website' },

        // Twitter 卡片
        { name: 'twitter:card', content: 'https://www.ieduchina.com/statics/image/c14def69.jpg' },
        { name: 'twitter:title', content: '国际教育网 国际化学校门户' },
        { name: 'twitter:description', content: '国际教育网是汇集了海内外前沿的国际教育门户网站，涵盖北京、上海、广州、深圳等全国数千家国际学校排名学费及招生报名资讯，为K12家长提供全面升学指导、为孩子提供专业的国际课程、助力备考升学。' }
    ]
})
onMounted(() => {
    $(function () {
        var mySwiper3 = new Swiper('.swiper-hours24', {
            direction: "vertical",
            loop: true, // 循环模式选项
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            slidesPerView: 1,
            spaceBetween: 0
        })

        $("#title > li").hover(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(".boxwrap").find(".contents").eq($(this).index()).find(".info-list").find("a.more").attr("href", $(this).find("a").attr("href"));
            $(".boxwrap").find(".contents").eq($(this).index()).css("display", "flex").siblings(".contents").css("display",
                "none");
        }, function () { })

        $("#school-title > li").hover(function () {
            if ($(this).index() != $("#school-title li").length - 1) {
                $(this).addClass("active").siblings().removeClass("active");
            }
            $(".school-con").find(".school-list").eq($(this).index()).css("display", "flex").siblings(".school-list").css(
                "display",
                "none");
        }, function () { })

        $("#cityExpress > li").hover(function () {
            $(this).addClass("active").siblings().removeClass("active")
            $(".city-express-wrap").find(".contents").eq($(this).index()).css("display", "flex").siblings(".contents").css(
                "display",
                "none");
        }, function () { })

    })
})
</script>
<style lang="less">
body {
    font-family: "Source Han Sans CN-Normal";
}

body .bigshot {
    text-align: center;
    width: 1280px;
    margin: 40px auto 0;
}

body .bigshot .bigshot-title {
    position: relative;
    display: inline-block;
    height: 24px;
    font-size: 24px;
    font-weight: bold;
    color: #000000;
}

body .bigshot .bigshot-title::before {
    position: absolute;
    left: 45px;
    bottom: -18px;
    content: '';
    width: 59px;
    height: 4px;
    background: #1583e3;
    border-radius: 2px;
}

body .bigshot ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 58px;
}

body .bigshot ul li {
    width: 264px;
    border-radius: 10px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

body .bigshot ul li .video {
    position: relative;
    width: 264px;
    height: 168px;
    background-size: cover;
    background-position: center center;
}

body .bigshot ul li .video.review::before {
    content: 'å›žé¡¾';
    background-color: rgba(0, 0, 0, 0.8);
}

body .bigshot ul li .video.notice::before {
    content: 'é¢„å‘Š';
    background-color: rgba(255, 165, 0, 0.8);
}

body .bigshot ul li .video.live::before {
    content: 'æ­£åœ¨ç›´æ’­';
    background-color: rgba(255, 0, 0, 0.8);
}

body .bigshot ul li .video::before {
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 40;
    font-size: 14px;
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    background-size: 40px 40px;
    background-repeat: no-repeat;
    background-position: center center;
}

body .bigshot ul li .video:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    z-index: 10;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    background-image: url(https://www.ieduchina.com/statics/pcc/img/play.png?v=1);
    background-size: 50px 50px;
    background-repeat: no-repeat;
    background-position: center center;
}

body .bigshot ul li p {
    font-size: 16px;
    color: #000000;
    line-height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>