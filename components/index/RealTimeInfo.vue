<template>
    <div class="real-time-info">
        <div class="banner" style="background-image: url(//www.ieduchina.com/statics/pcc/img/ban.png?v=1);">
            <span>资讯动态</span>
        </div>
        <div class="boxwrap">
            <ul id="title" class="title">
                <li :class="{ active: !index }" v-for="(item, index) in data" :key="index">
                    <NuxtLink :to="item.href">
                        <span>{{ item.title }}</span>
                    </NuxtLink>
                </li>
            </ul>
            <div class="contents" v-for="(items, index) in data" :key="index">
                <ul class="info-img">
                    <li v-for="item in items.infoImg" :key="item.id">
                        <div class="box">
                            <NuxtLink :to="item.href">
                                <div class="img" :style="`background-image: url(${item.image});`"></div>
                                <h3>{{ item.title }}</h3>
                            </NuxtLink>
                            <div class="author">
                                <NuxtLink :to="`//www.ieduchina.com/home/${item.id}.html`" rel="nofollow">
                                    <i :style="`background-image: url(${item.authorImg})`"></i>
                                    {{ item.author }}
                                </NuxtLink>
                                <span>{{ item.time }}</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="info-list">
                    <ul>
                        <li v-for="item in items.infoList" :key="item.id">
                            <div class="top">
                                <NuxtLink :to="`//www.ieduchina.com/home/${item.id}.html`" rel="nofollow">
                                    <i :style="`background-image: url(${item.authorImg})`"></i>
                                    {{ item.author }}
                                </NuxtLink>
                            </div>
                            <NuxtLink :to="item.href">
                                <p>{{ item.title }}</p>
                            </NuxtLink>
                        </li>
                    </ul>
                    <NuxtLink class="more" :to="items.href">
                        <button type="button">查看更多>></button>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="dynamic">
            <span class="dynamic-title">最新招生动态</span>
            <ul>
                <li v-for="(item, index) in dynamicData" :key="index">
                    <NuxtLink :to="item.href">
                        <img width="216" :src="item.image" :alt="item.title">
                        <div class="cover-text">
                            <p>{{ item.title }}</p>
                            <button type="button">查看详情</button>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
            <!-- <a href="//www.ieduchina.com/topic/shengxue/">
            <button class="dynamic-else" type="button">查看更多</button>
        </a> -->
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'

const data = reactive([
    {
        title: "校园资讯",
        href: "//www.ieduchina.com/school/",
        infoImg: [
            {
                href: "//www.ieduchina.com/shanghai/education/202506/129051.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749109895605859.jpg",
                title: "2025年上海美达菲学校学费及学校简介",
                author: "上海择校攻略",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202303/167834150579083.png",
                time: "12小时前",
                id: 10977
            },
            {
                href: "//www.ieduchina.com/hongkong/education/202506/129050.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749108575443503.jpg",
                title: "弘立书院2025-2026学年学费及招生政策",
                author: "立身学",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/201910/157249004940613.png",
                time: "12小时前",
                id: 5920
            },
            {
                href: "//www.ieduchina.com/chengdu/education/202506/129049.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749106902245811.jpg",
                title: "2025成都双流区的国际学校汇总",
                author: "校园百事",
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202412/1734506004744095.png",
                time: "13小时前",
                id: 5919
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            }
        ],
        infoList: [
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            }
        ]
    },
    {
        title: "家庭资讯",
        href: "//www.ieduchina.com/parents/",
        infoImg: [
            {
                href: "//www.ieduchina.com/shanghai/education/202506/129051.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749109895605859.jpg",
                title: "2025年上海美达菲学校学费及学校简介",
                author: "上海择校攻略2",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202303/167834150579083.png",
                time: "12小时前",
                id: 10977
            },
            {
                href: "//www.ieduchina.com/hongkong/education/202506/129050.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749108575443503.jpg",
                title: "弘立书院2025-2026学年学费及招生政策",
                author: "立身学",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/201910/157249004940613.png",
                time: "12小时前",
                id: 5920
            },
            {
                href: "//www.ieduchina.com/chengdu/education/202506/129049.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749106902245811.jpg",
                title: "2025成都双流区的国际学校汇总",
                author: "校园百事",
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202412/1734506004744095.png",
                time: "13小时前",
                id: 5919
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            }
        ],
        infoList: [
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            }
        ]
    },
    {
        title: "留学资讯",
        href: "//www.ieduchina.com/abroad/",
        infoImg: [
            {
                href: "//www.ieduchina.com/shanghai/education/202506/129051.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749109895605859.jpg",
                title: "2025年上海美达菲学校学费及学校简介",
                author: "上海择校攻略",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202303/167834150579083.png",
                time: "12小时前",
                id: 10977
            },
            {
                href: "//www.ieduchina.com/hongkong/education/202506/129050.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749108575443503.jpg",
                title: "弘立书院2025-2026学年学费及招生政策",
                author: "立身学",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/201910/157249004940613.png",
                time: "12小时前",
                id: 5920
            },
            {
                href: "//www.ieduchina.com/chengdu/education/202506/129049.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749106902245811.jpg",
                title: "2025成都双流区的国际学校汇总",
                author: "校园百事",
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202412/1734506004744095.png",
                time: "13小时前",
                id: 5919
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            }
        ],
        infoList: [
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            }
        ]
    },
    {
        title: "备考资讯",
        href: "//www.ieduchina.com/training/",
        infoImg: [
            {
                href: "//www.ieduchina.com/shanghai/education/202506/129051.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749109895605859.jpg",
                title: "2025年上海美达菲学校学费及学校简介",
                author: "上海择校攻略",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202303/167834150579083.png",
                time: "12小时前",
                id: 10977
            },
            {
                href: "//www.ieduchina.com/hongkong/education/202506/129050.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749108575443503.jpg",
                title: "弘立书院2025-2026学年学费及招生政策",
                author: "立身学",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/201910/157249004940613.png",
                time: "12小时前",
                id: 5920
            },
            {
                href: "//www.ieduchina.com/chengdu/education/202506/129049.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749106902245811.jpg",
                title: "2025成都双流区的国际学校汇总",
                author: "校园百事",
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202412/1734506004744095.png",
                time: "13小时前",
                id: 5919
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            }
        ],
        infoList: [
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            }
        ]
    },
    {
        title: "最新时讯",
        href: "//www.ieduchina.com/news/",
        infoImg: [
            {
                href: "//www.ieduchina.com/shanghai/education/202506/129051.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749109895605859.jpg",
                title: "2025年上海美达菲学校学费及学校简介",
                author: "上海择校攻略",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202303/167834150579083.png",
                time: "12小时前",
                id: 10977
            },
            {
                href: "//www.ieduchina.com/hongkong/education/202506/129050.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749108575443503.jpg",
                title: "弘立书院2025-2026学年学费及招生政策",
                author: "立身学",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/201910/157249004940613.png",
                time: "12小时前",
                id: 5920
            },
            {
                href: "//www.ieduchina.com/chengdu/education/202506/129049.html",
                image: "https://www.ieduchina.com/statics/js/editor/php/upload/image/20250605/1749106902245811.jpg",
                title: "2025成都双流区的国际学校汇总",
                author: "校园百事",
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202412/1734506004744095.png",
                time: "13小时前",
                id: 5919
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            },
            {
                href: "//www.ieduchina.com/shenzhen/education/202506/129044.html",
                image: "//www.ieduchina.com/uploadfile/202506/f81220250605085413.jpg",
                title: "福田精英家庭教育秘密！为什么他们2岁就开始“投资”这个？",
                author: "选校砖家",
                authorImg: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg",
                time: "19小时前",
                id: 4920
            }
        ],
        infoList: [
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            },
            {
                id: 13892,
                authorImg: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg",
                author: "青岛博格思加州学校",
                href: "//www.ieduchina.com/school/education/202506/129047.html",
                title: "燃动青春，趣享运动！博格思运动月精彩回顾"
            }
        ]
    },
])

const dynamicData = reactive([
    {
        href: "//www.ieduchina.com/shenzhen/dynamics/202506/128936.html",
        image: "//www.ieduchina.com/uploadfile/202506/f85620250604083645.jpg",
        title: "荟同学校《2025-2026学年招生简章》"
    }, {
        href: "//www.ieduchina.com/guangzhou/dynamics/202506/128931.html",
        image: "//www.ieduchina.com/uploadfile/202506/f22920250604083312.jpg",
        title: "广州市为明学校国际部2025招生简章"
    }, {
        href: "//www.ieduchina.com/shenzhen/dynamics/202506/128904.html",
        image: "//www.ieduchina.com/uploadfile/202506/f77220250603085825.jpg",
        title: "云顶梦途双语优才  |  2025-2026学年招生简章"
    }, {
        href: "//www.ieduchina.com/school/dynamics/202506/128868.html",
        image: "//www.ieduchina.com/uploadfile/202506/f21620250603083324.jpg",
        title: "6大亮点读懂弘科未来｜2025年小学一年级、初中一年级招生公告"
    }, {
        href: "//www.ieduchina.com/hangzhou/dynamics/202505/128789.html",
        image: "//www.ieduchina.com/uploadfile/202505/f39220250529090103.jpg",
        title: "2025-26学年杭州惠立学校招生简章"
    }
])
</script>

<style lang="less">
body {
    .real-time-info {
        background-color: #ffffff;
        padding-bottom: 50px;
        position: relative;

        &::after {
            content: '';
            width: 50px;
            height: 50px;
            background-color: #ffffff;
            position: absolute;
            left: 50%;
            margin-left: -25px;
            bottom: -20px;
            -webkit-transform: rotateZ(45deg);
            transform: rotateZ(45deg);
        }

        .banner {
            width: 100%;
            height: 356px;
            min-width: 1280px;
            background-size: cover;
            background-position: center center;
            margin-bottom: -150px;
            text-align: center;
            line-height: 60px;

            span {
                display: inline-block;
                position: relative;
                top: 96px;
                height: 37px;
                font-size: 36px;
                font-weight: bold;
                color: #ffffff;

                &:after {
                    content: '';
                    position: absolute;
                    left: 45px;
                    bottom: -30px;
                    width: 58px;
                    height: 4px;
                    border-radius: 2px;
                    background-color: #ffffff;
                }
            }
        }
    }
}


body .real-time-info .boxwrap {
    width: 1280px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 8px;
    -webkit-box-shadow: 0 5px 8px 0 rgba(185, 201, 214, 0.57);
    box-shadow: 0 5px 8px 0 rgba(185, 201, 214, 0.57);
}

body .real-time-info .boxwrap .title {
    background-color: rgba(0, 0, 0, 0.6);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 52px;
    line-height: 52px;
    border-radius: 8px 8px 0 0;
}

body .real-time-info .boxwrap .title li {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    cursor: pointer;
}

body .real-time-info .boxwrap .title li.active {
    position: relative;
}

body .real-time-info .boxwrap .title li.active::after {
    position: absolute;
    content: '';
    left: 50%;
    margin-left: -18px;
    bottom: 8px;
    width: 36px;
    height: 4px;
    border-radius: 2px;
    background-color: #0d72ca;
}

body .real-time-info .boxwrap .title li.active span {
    font-weight: bold;
    font-size: 18px;
    opacity: 1;
}

body .real-time-info .boxwrap .title li span {
    font-size: 16px;
    color: #ffffff;
    opacity: 0.8;
}

body .real-time-info .boxwrap .contents {
    display: none;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 13px;
}

body .real-time-info .boxwrap .contents:first-of-type {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

body .real-time-info .boxwrap .contents .info-img {
    width: 870px;
    height: 546px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: 10px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

body .real-time-info .boxwrap .contents .info-img li {
    width: 266px;
    height: 260px;
    padding: 0 10px;
    padding-bottom: 8px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

body .real-time-info .boxwrap .contents .info-img li:nth-of-type(-n + 3) {
    border-bottom: solid 1px #e1e1e1;
    height: 250px;
    margin-bottom: 13px;
    padding-bottom: 14px;
}

body .real-time-info .boxwrap .contents .info-img li .box {
    width: 260px;
    height: 260px;
    border-radius: 10px;
    overflow: hidden;
    padding: 8px 0;
}

body .real-time-info .boxwrap .contents .info-img li .box .img {
    width: 270px;
    height: 180px;
    background-size: cover;
    background-position: center center;
}

body .real-time-info .boxwrap .contents .info-img li .box h3 {
    font-size: 16px;
    font-weight: bold;
    color: #303030;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 36px;
}

body .real-time-info .boxwrap .contents .info-img li .box .author {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 10px;
    line-height: 16px;
}

body .real-time-info .boxwrap .contents .info-img li .box .author a {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 16px;
    color: #333333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

body .real-time-info .boxwrap .contents .info-img li .box .author a i {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: sub;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin-right: 8px;
}

body .real-time-info .boxwrap .contents .info-img li .box .author span {
    font-size: 12px;
    color: #545454;
    padding-top: 2px;
    white-space: nowrap;
    padding-left: 10px;
}

body .real-time-info .boxwrap .contents .info-list {
    width: 410px;
    height: 420px;
    border-radius: 8px;
    background-color: #ffffff;
    padding: 20px 0;
    text-align: center;
}

body .real-time-info .boxwrap .contents .info-list ul {
    width: 410px;
}

body .real-time-info .boxwrap .contents .info-list ul li {
    width: 367px;
    margin-left: 20px;
    margin-bottom: 9px;
}

body .real-time-info .boxwrap .contents .info-list ul li .top {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

body .real-time-info .boxwrap .contents .info-list ul li .top a {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
}

body .real-time-info .boxwrap .contents .info-list ul li .top button {
    width: 60px;
    height: 18px;
    background: #FFFFFF;
    border-radius: 8px;
    border: solid 1px #0770D1;
    margin-top: 6px;
    cursor: pointer;
    outline: none;
    margin-left: 10px;
}

body .real-time-info .boxwrap .contents .info-list ul li .top button:after {
    content: "å…³æ³¨";
    line-height: 16px;
    color: #0770D1;
}

body .real-time-info .boxwrap .contents .info-list ul li .top button.yes {
    border: 1px solid #4D4D4D;
}

body .real-time-info .boxwrap .contents .info-list ul li .top button.yes:after {
    content: "å·²å…³æ³¨";
    color: #4D4D4D;
}

body .real-time-info .boxwrap .contents .info-list ul li a {
    text-align: justify;
    white-space: nowrap;
}

body .real-time-info .boxwrap .contents .info-list ul li a i {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-repeat: repeat;
    background-position: center center;
    background-size: cover;
    vertical-align: -5px;
    border-radius: 50%;
    margin-right: 10px;
}

body .real-time-info .boxwrap .contents .info-list ul li a:first-of-type {
    line-height: 30px;
}

body .real-time-info .boxwrap .contents .info-list ul li a p {
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    color: #303030;
    line-height: 28px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

body .real-time-info .boxwrap .contents .info-list button {
    cursor: pointer;
    margin-top: 10px;
    width: 180px;
    height: 41px;
    border: none;
    font-size: 14px;
    font-weight: 400;
    color: #0770d1;
    background-color: #ffffff;
    outline: none;
}

body .real-time-info .boxwrap .contents .info-list .more {
    background: none;
}

body .real-time-info .dynamic {
    text-align: center;
    width: 1280px;
    margin: 50px auto 0;
}

body .real-time-info .dynamic .dynamic-title {
    position: relative;
    display: inline-block;
    height: 24px;
    font-size: 24px;
    font-weight: bold;
    color: #000000;
}

body .real-time-info .dynamic .dynamic-title::before {
    position: absolute;
    left: 45px;
    bottom: -18px;
    content: '';
    width: 59px;
    height: 4px;
    background: #1583e3;
    border-radius: 2px;
}

body .real-time-info .dynamic ul {
    margin-top: 40px;
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

body .real-time-info .dynamic ul li {
    position: relative;
    width: 240px;
    height: 257px;
}

body .real-time-info .dynamic ul li img {
    position: absolute;
    left: 12px;
    top: 0;
    z-index: 100;
    width: 216px;
    height: 144px;
    border-radius: 8px;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}

body .real-time-info .dynamic ul li .cover-text {
    position: absolute;
    top: 122px;
    left: 0;
    z-index: 50;
    width: 240px;
    height: 135px;
    border: solid 1px rgba(170, 170, 170, 0.5);
    border-radius: 4px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

body .real-time-info .dynamic ul li .cover-text p {
    text-align: left;
    margin-top: 33px;
    font-size: 16px;
    padding: 0 10px;
    line-height: 20px;
    color: #303030;
    height: 40px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

body .real-time-info .dynamic ul li .cover-text button {
    width: 110px;
    height: 32px;
    border: solid 1px #0d72ca;
    background-color: white;
    font-size: 14px;
    font-weight: bold;
    color: #0d72ca;
    border-radius: 8px;
    margin-top: 22px;
    outline: none;
    cursor: pointer;
}

body .real-time-info .dynamic .dynamic-else {
    width: 123px;
    height: 36px;
    background: #1583e3;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    margin-top: 40px;
    cursor: pointer;
}
</style>