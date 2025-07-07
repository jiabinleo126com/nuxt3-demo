<template>
    <img src="https://www.ieduchina.com/statics/image/c14def69.jpg" width="0" height="0" style="display:none;">
    <header>
        <div class="con">
            <h1><a href="index.html"><img :src="c7ac0a9fb" alt="国际教育网"></a></h1>
            <menu>
                <ul>
                    <li class="active"><a href="index.html">首页</a></li>
                    <li><a href="bendi.html">本地学校升学</a></li>
                    <li><a href="guoji.html">国际学校升学</a></li>
                    <li><a href="guwenzhuanjia.html">专家团队</a></li>
                    <li><a href="about.html">关于我们</a></li>
                    <li><a href="https://www.ieduchina.com/">国际教育网</a></li>
                    <li><a class="s2hk" style="cursor: pointer;">繁體</a></li>
                </ul>
            </menu>
        </div>
    </header>
</template>
<script setup>
import { useHead } from 'nuxt/app';

import c7ac0a9fb from "~/assets/hk/7ac0a9fb.png"

useHead({
    link: [
        {
            rel: "shortcut icon",
            type: "image/x-icon",
            href: "//www.ieduchina.com/statics/pcc/img/favicon.ico"
        },
        {
            rel: "stylesheet",
            href: "https://www.ieduchina.com/statics/pc/css/swiper.min.css"
        }
    ],
    script: [
        {
            src: "https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js",
            type: "text/javascript",
            defer: true
        },
        {
            src: "//www.ieduchina.com/statics/js/layer.js",
            type: "text/javascript",
            defer: true
        },
        {
            src: "https://www.ieduchina.com/statics/pcc/js/swiper.min.js",
            type: "text/javascript",
            defer: true
        },
        {
            src: "https://www.ieduchina.com/statics/common/js/hk2s1.js",
            type: "text/javascript",
            defer: true
        }
    ],
    title: 'HKIEDU 香港愛讀教育-國際教育網升學中心 香港本土一站式名校升學服務',
    meta: [
        { name: 'description', content: '香港愛讀教育擁有12年+香港名校一站式服務經驗，服務中心落地於香港和深圳，專注於為香港新移民、雙非港寶和華僑等赴港讀書家庭提供香港優質學校……' },
        { name: 'keywords', content: '香港幼稚園,香港國際學校,香港大學,香港升學' },

        // Open Graph 协议（用于社交媒体分享）
        { property: 'og:title', content: 'HKIEDU 香港愛讀教育-國際教育網升學中心 香港本土一站式名校升學服務' },
        { property: 'og:description', content: '香港愛讀教育擁有12年+香港名校一站式服務經驗，服務中心落地於香港和深圳，專注於為香港新移民、雙非港寶和華僑等赴港讀書家庭提供香港優質學校……。' },
        { property: 'og:type', content: 'website' },

        // Twitter 卡片
        { name: 'twitter:card', content: 'https://www.ieduchina.com/statics/image/c14def69.jpg' },
        { name: 'twitter:title', content: 'HKIEDU 香港愛讀教育-國際教育網升學中心 香港本土一站式名校升學服務' },
        { name: 'twitter:description', content: '香港愛讀教育擁有12年+香港名校一站式服務經驗，服務中心落地於香港和深圳，專注於為香港新移民、雙非港寶和華僑等赴港讀書家庭提供香港優質學校……' }
    ]
})
</script>
<style lang="less">
header {
    background: #2C2E71;
    min-width: 1200px;
}

header .con {
    width: 1200px;
    height: 120px;
    margin: 0 auto;
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
}

header .con h1 {
    font-size: 0;
}

header .con h1 a img {
    height: 77px;
}

menu ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 730px;
}

menu ul li {
    position: relative;
}

menu ul li.active a {
    font-weight: bold;
}

menu ul li.active::before,
menu ul li:hover::before {
    position: absolute;
    content: "";
    left: 2px;
    bottom: -18px;
    width: 40px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 5px;
    background: #FFFFFF;
    border-radius: 3px;
}

menu ul li a {
    font-size: 20px;
    font-weight: 500;
    color: #FFFFFF;
}

menu ul li .list {
    display: none;
    position: absolute;
    padding-top: 63px;
    top: -30px;
    left: 11px;
    z-index: 10;
}

menu ul li .list .in {
    width: 156px;
    background: #FFFFFF;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(93, 93, 93, 0.1608);
    box-shadow: 0px 0px 15px 1px rgba(93, 93, 93, 0.1608);
    border-radius: 10px;
    padding-bottom: 28px;
}

menu ul li .list .in a {
    font-size: 18px;
    font-weight: 400;
    color: #666666;
    display: block;
    text-align: center;
    padding-top: 28px;
    padding-right: 0;
}

menu ul li .list .in a:nth-of-type(n+2) {
    padding-top: 25px;
}

menu ul li .list .in a:hover,
menu ul li .list .in a.active {
    color: #2C2E71;
}

menu ul li:nth-of-type(2) {
    position: relative;
}

menu ul li:nth-of-type(2):hover .list {
    display: block;
}

menu ul li:nth-of-type(2)::before {
    -webkit-transform: translateX(-84%);
    transform: translateX(-84%);
}

menu ul li:nth-of-type(2)::after {
    position: absolute;
    /* content: ""; */
    pointer-events: none;
    top: 8px;
    right: 0;
    width: 13px;
    height: 7px;
    background: url(~/assets/hk/abb61a86.png) right center / 13px 7px no-repeat;
}
</style>