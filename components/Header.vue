<template>
    <header class="bar">
        <div class="bar-title">
            <div class="bar-title-con">
                <ul class="left">
                    <li class="nav">网站导航<div class="nav_box">
                            <div class="nav_box_in">
                                <ol>
                                    <li>学校大全</li>
                                    <li><a href="//schoollist.ieduchina.com">内地学校</a></li>
                                    <li><a href="//www.ieduchina.com/hongkong/" target="_blank">香港学校</a></li>
                                    <li><a href="//www.ieduchina.com/singapore/index.html" target="_blank">新加坡学校</a>
                                    </li>
                                    <li><a href="//schoollist.ieduchina.com/schlist/c1/">海外学校</a></li>
                                </ol>
                                <ol>
                                    <li>学校活动</li>
                                    <li><a href="//www.ieduchina.com/huodong/?type=9">家长学院</a></li>
                                    <li><a href="//www.ieduchina.com/huodong/?type=6">学校开放日</a></li>
                                    <li><a href="//www.ieduchina.com/topic/2025/hk13/" target="_blank">香港访校营</a></li>
                                    <li><a href="//www.ieduchina.com/camps/index.html">夏/冬令营</a></li>
                                    <li><a href="//www.ieduchina.com/topic/2025/sz/index.html"
                                            target="_blank">国际教育论坛</a></li>
                                </ol>
                                <ol>
                                    <li>备考学习</li>
                                    <li><a href="//www.ieduchina.com/xuexi/index.html?tgfrom=guanwang">官方考试</a></li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li><a href="//www.ieduchina.com/service/tousu.html" rel="nofollow">投诉建议</a></li>
                    <li><a href="//www.ieduchina.com/mp/login_member.html" rel="nofollow">发布文章</a></li>
                </ul>
                <ul class="right">
                    <li><a class="s2hk" style="cursor:pointer">繁體</a></li>
                </ul>
            </div>
        </div>
        <div class="bar-header">
            <div class="logo">
                <NuxtLink to="/">
                    <img src="//www.ieduchina.com/statics/pcc/img/logo_header.png?v=1" alt="国际教育网" />
                </NuxtLink>
            </div>
            <div class="search-box">
                <form action="//www.ieduchina.com/search/index.html" method="get" id="search">
                    <input id="q" class="search-content" name="searchkey" placeholder="搜索 学校/文章/机构" type="text"
                        value="">
                    <button id="searchbtn" class="search-submit" type="submit">
                        <img src="//www.ieduchina.com/statics/pcc/img/search1.png?v=1">
                        搜索
                    </button>
                </form>
            </div>
            <div class="tel">
                <a>内地：400-900-8516<br>香港：+852 3565 1936</a>
            </div>
        </div>
        <div class="iedu-menu-wrap">
            <div class="iedu-menu-box">
                <ul class="iedu-menu">
                    <li>
                        <NuxtLink to="/">
                            <span>首页</span>
                        </NuxtLink>
                    </li>
                    <li class="parentMenu">
                        <NuxtLink to="/school">
                            <span>教育资讯</span>
                        </NuxtLink>
                        <ul class="submenu">
                            <li>
                                <NuxtLink to="/school">
                                    <span>校园资讯</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/school">
                                    <span>留学资讯</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/school">
                                    <span>家庭教育</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/school">
                                    <span>教育综合</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li class="parentMenu">
                        <a href="//schoollist.ieduchina.com"><span>学校大全</span></a>
                        <ul class="submenu">
                            <li><a href="//schoollist.ieduchina.com"><span>内地学校</span></a></li>
                            <li><a href="//www.ieduchina.com/hongkong/" target="_blank"><span>香港学校</span></a></li>
                            <li><a href="//www.ieduchina.com/singapore/index.html"
                                    target="_blank"><span>新加坡学校</span></a></li>
                            <li><a href="//schoollist.ieduchina.com/schlist/c1/"><span>海外学校</span></a></li>
                            <li><a href="//www.ieduchina.com/graduate/index.html"><span>家长进修</span></a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="//www.ieduchina.com/camps/index.html"><span>夏/冬令营</span></a>
                    </li>
                    <li class="parentMenu">
                        <a href="//www.ieduchina.com/zwhb/"><span>合办大学</span></a>
                        <ul class="submenu">
                            <li><a href="//www.ieduchina.com/zwhb/"><span>中外合办大学</span></a></li>
                            <li><a href="//www.ieduchina.com/gwhb/"><span>港外合办大学</span></a></li>
                            <li><a href="//www.ieduchina.com/xwhb/"><span>新外合办大学</span></a></li>
                        </ul>
                    </li>
                    <li class="parentMenu">
                        <NuxtLink to="/huodong">
                            <span>学校活动</span>
                        </NuxtLink>
                        <ul class="submenu">
                            <!-- <li><a href="//www.ieduchina.com/huodong/?type=9"><span>家长学院</span></a></li> -->
                            <li><a href="//www.ieduchina.com/huodong/?type=6"><span>学校开放日</span></a></li>
                            <li>
                                <a href="//www.ieduchina.com/topic/2025/hk13/" target="_blank"><span><img
                                            src="//www.ieduchina.com/statics/pcc/img/11d86433.png"
                                            style="vertical-align: -1px;">访校团</span></a>
                                <div class="box">
                                    <div class="box_lis">
                                        <div class="box_con">
                                            <template v-for="(item, index) in hkTopic" :key="index">
                                                <NuxtLink :to="item.path" :title="item.title">
                                                    {{ item.title }}
                                                </NuxtLink>
                                                <!-- <a :href="item.path" :title="item.title">
                                                    {{ item.title }}
                                                </a> -->
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="//www.ieduchina.com/topic/2025/sz/index.html"
                                    target="_blank"><span>国际教育论坛</span></a>
                                <div class="box" style="padding-top: 12px;">
                                    <div class="box_lis" style="max-height: 486px;">
                                        <div class="box_con center">
                                            <template v-for="(item, index) in InternationalEducationForum" :key="index">
                                                <NuxtLink :to="item.path" :title="item.title" rel="nofollow">
                                                    {{ item.title }}
                                                </NuxtLink>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="parentMenu">
                        <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>备考学习</span></NuxtLink>
                        <ul class="submenu">
                            <li>
                                <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>官方考试</span></NuxtLink>
                                <div class="box">
                                    <div class="box_lis">
                                        <div class="box_title">入学考试</div>
                                        <div class="box_con">
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>MAP</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>CAT4</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>中数</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>英数</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>新加坡</span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="box_lis">
                                        <div class="box_title">语言考试</div>
                                        <div class="box_con">
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>雅思</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>托福</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>多邻国</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>SAT</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>GRE</span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="box_lis">
                                        <div class="box_title">国际考试</div>
                                        <div class="box_con">
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>A-LEVEL</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>IB考试</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>AP考试</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>DSE考试</span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="box_lis">
                                        <div class="box_title">数学竞赛</div>
                                        <div class="box_con">
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>美国AMC</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>澳洲AMC</span>
                                            </NuxtLink>
                                            <NuxtLink to="/xuexi?tgfrom=guanwang" rel="nofollow"><span>袋鼠数学竞赛</span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="//www.ieduchina.com/service/aboutus.html" rel="nofollow"><span>关于我们</span></a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useHead } from "nuxt/app";
import { onMounted, reactive } from "vue";

const hkTopic = reactive([
    {
        title: "25年05月:可风中学、世界龙冈学校刘皇发中学等10所学校",
        path: "/topic/2025/hk13"
    },
    {
        title: "25年01月:中华基金中学、迦密爱礼信中学等7所学校",
        path: "/topic/2025/hk12"
    },
    {
        title: "24年12月:元朗公立中学校友会邓英业小学等5所学校",
        path: "/topic/2024/hk11/"
    },
    {
        title: "24年12月:中华基督教会铭基书院等4所学校",
        path: "https://www.ieduchina.com/topic/2024/hk8/"
    },
    {
        title: "24年10月:香岛中学、新会商会陈白沙纪念中学等9所学校",
        path: "https://www.ieduchina.com/topic/2024/hk7/"
    },
    {
        title: "24年07月:孔圣堂礼仁书院等5所本地学校(访校研学)",
        path: "https://www.ieduchina.com/topic/2024/hkyx1/"
    },
    {
        title: "24年07月:汇基书院（东九龙）、播道书院等4所学校",
        path: "https://www.ieduchina.com/topic/2024/hk6/"
    },
    {
        title: "24年05月:沙田培英、保良局罗杰承(一九八三)等15所学校",
        path: "https://www.ieduchina.com/topic/2024/hk5/"
    },
    {
        title: "24年01月:香港UWC、播道书院等8所学校",
        path: "https://www.ieduchina.com/topic/2024/hk4/"
    },
    {
        title: "23年12月:中华基督教会协和书院等6所学校+教育展",
        path: "https://www.ieduchina.com/topic/2023/hk3/"
    },
    {
        title: "23年10月:保良局百周年李兆忠纪念中学等6所学校",
        path: "https://www.ieduchina.com/topic/2023/xg/"
    },
    {
        title: "23年07月:圣保禄学校、英华书院、九龙真光等10所学校 ",
        path: "https://www.ieduchina.com/topic/2023/hk/"
    }
])

const InternationalEducationForum = reactive([
    {
        path: "//www.ieduchina.com/topic/2025/sz/",
        title: "2025年05月"
    },
    {
        path: "//www.ieduchina.com/topic/2024/sz/",
        title: "2024年10月"
    },
    {
        path: "//www.ieduchina.com/topic/2024/shenzhen/",
        title: "2024年03月"
    },
    {
        path: "//www.ieduchina.com/topic/2023/shenzhen/",
        title: "2023年10月"
    },
    {
        path: "//www.ieduchina.com/topic/2022/shenzhen/",
        title: "2022年04月"
    },
    {
        path: "//www.ieduchina.com/topic/2020/1017_SZ/",
        title: "2020年10月"
    },
    {
        path: "//www.ieduchina.com/topic/2020/711_SZ/",
        title: "2020年07月"
    },
    {
        path: "//www.ieduchina.com/topic/2020/3_SZ/",
        title: "2020年03月"
    },
    {
        path: "//www.ieduchina.com/topic/2019/11_SZ/",
        title: "2019年11月"
    },
    {
        path: "//www.ieduchina.com/topic/2019/07_SZ/",
        title: "2019年07月"
    },
    {
        path: "//www.ieduchina.com/topic/2019/05_SH/",
        title: "2019年05月"
    },
    {
        path: "//www.ieduchina.com/topic/2019/04_SZ/",
        title: "2019年04月"
    },
    {
        path: "//www.ieduchina.com/topic/2019/03_GZ/",
        title: "2019年03月"
    },
    {
        path: "//www.ieduchina.com/topic/2019/12_SZ/",
        title: "2018年12月"
    },
    {
        path: "//www.ieduchina.com/topic/2018/5_GZ/",
        title: "2018年05月"
    },
    {
        path: "//www.ieduchina.com/topic/2018/4_SZ/",
        title: "2018年04月"
    },
    {
        path: "//www.ieduchina.com/topic/2017/11_GZ/",
        title: "2017年11月"
    },
    {
        path: "//www.ieduchina.com/topic/2017/10_SZ/",
        title: "2017年10月"
    }
])
useHead({
    script: [
        {
            src: "/s2hk.js",
            type: "text/javascript",
            defer: true
        }
    ]
})


onMounted(() => {
    "onMountedStart"
    $(function () {
        $('.search-hover').on('click', 'li', function () {
            $('#searchContent').text($(this).text());
            $('#searchid').val($(this).attr('value'));
            $('.search-hover').find('.submenu').hide();
        });
        $("#searchbtn").click(function () {
            var txt = $("#q").val().replace(/(^\s*)|(\s*$)/g, '');
            if (txt == "输入搜索内容" || txt == "请输入搜索内容" || txt == "") {
                return false;
            }
        });
        function isShowMenu() {
            var ad_height = $('#pc_ad_top').height() || 0;
            var top = $(window).scrollTop();
            var position = top > ($('.bar-header').height() + $('.bar-title').height() + ad_height) ? 'fixed' : 'initial';
            $('.iedu-menu-box').css({
                position: position
            });
        }
        $(document).on('scroll', function () {
            isShowMenu();
        });
        isShowMenu();
        $('.parentMenu').hover(function () {
            $(this).find('.submenu').show();
        }, function () {
            $(this).find('.submenu').hide();
        });
        function getcookieval(objname) {
            var arrstr = document.cookie.split("; ");
            for (var i = 0; i < arrstr.length; i++) {
                var temp = arrstr[i].split("=");
                if (temp[0] == objname)
                    return decodeURI(unescape(temp[1]));
            }
        }
        var live_username = getcookieval("live_username");
        if (live_username) {
            var userUrl = '//www.ieduchina.com/usercenter/index/index.html';
            var html = "<p class='logout'><span><a rel='nofollow' target='_blank' href='" + userUrl + "'> " + live_username + " </a></span><span> | </span><a href='//www.ieduchina.com/logout.html'>退出</a></p>";
            $("#login-before").html(html);
        }
    })
    "onMountedEnd"
})
</script>

<style lang="less">
body .bar {
    width: 100%;
    min-width: 1280px;
    background-color: #ffffff;
}

body .bar .bar-title {
    border-bottom: solid 1px #e5e5e5
}

body .bar .bar-title .bar-title-con {
    width: 1280px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 0 auto;
    height: 37px;
    line-height: 37px;
    font-size: 14px;
    color: #333
}

body .bar .bar-title .bar-title-con .left {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

body .bar .bar-title .bar-title-con .left>li {
    font-weight: 400;
    font-size: 14px;
    color: #333;
    margin-right: 30px
}

body .bar .bar-title .bar-title-con .left>li a {
    font-weight: 400;
    font-size: 14px;
    color: #333
}

body .bar .bar-title .bar-title-con .left>li a.home {
    color: #0770d1
}

body .bar .bar-title .bar-title-con .left>li.nav {
    position: relative;
    padding-right: 15px;
    cursor: pointer
}

body .bar .bar-title .bar-title-con .left>li.nav:hover .nav_box {
    display: block
}

body .bar .bar-title .bar-title-con .left>li.nav::after {
    pointer-events: none;
    content: "";
    position: absolute;
    right: 0;
    top: 9px;
    width: 10px;
    height: 18px;
    background: url(https://www.ieduchina.com/statics/pcc/img/a91b75e0.png) center/contain no-repeat
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box {
    display: none;
    position: absolute;
    top: 36px;
    left: 0;
    z-index: 100;
    padding-top: 4px;
    -webkit-animation: an .3s ease-in-out;
    animation: an .3s ease-in-out
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in {
    padding: 10px 20px 13px;
    background: #fff;
    -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, .1608);
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, .1608)
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol li {
    font-weight: bold;
    font-size: 14px;
    color: #333;
    white-space: nowrap
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol li:first-of-type::after {
    content: "|";
    margin-left: 20px;
    color: #bebebe
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol li a {
    font-weight: 400;
    font-size: 14px;
    color: #666;
    padding: 0 20px
}

body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol li a.active,
body .bar .bar-title .bar-title-con .left>li.nav .nav_box .nav_box_in ol li a:hover {
    width: 56px;
    color: #0770d1
}

body .bar .bar-title .bar-title-con .right {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

body .bar .bar-title .bar-title-con .right li {
    padding-left: 30px
}

body .bar .bar-title .bar-title-con .right li.free {
    position: relative
}

body .bar .bar-title .bar-title-con .right li.free:hover {
    cursor: pointer;
    color: #0770d1
}

body .bar .bar-title .bar-title-con .right li.free:hover .card {
    display: block;
    opacity: 1;
    -webkit-animation: vip .3s ease-in-out;
    animation: vip .3s ease-in-out
}

body .bar .bar-title .bar-title-con .right li.free i {
    position: absolute;
    left: 5px;
    top: 6px;
    width: 20px;
    height: 26px;
    background: url(https://www.ieduchina.com/statics/vips/images/91796bc7.png) center/contain no-repeat
}

body .bar .bar-title .bar-title-con .right li.free .card {
    display: none;
    opacity: 0;
    position: absolute;
    top: 24px;
    right: 0;
    z-index: 12;
    padding-top: 12px;
    -webkit-transform: translateX(44%);
    transform: translateX(44%)
}

body .bar .bar-title .bar-title-con .right li.free .card .content {
    padding: 10px 20px 14px;
    width: 344px;
    -webkit-box-shadow: 0px 3px 20px 1px rgba(0, 0, 0, .2);
    box-shadow: 0px 3px 20px 1px rgba(0, 0, 0, .2);
    border-radius: 10px;
    background: #fff url(/statics/vips/images/d42be359.png) left top/contain no-repeat
}

body .bar .bar-title .bar-title-con .right li.free .card .content i {
    position: initial;
    display: inline-block;
    vertical-align: -8px;
    margin-right: 5px
}

body .bar .bar-title .bar-title-con .right li.free .card .content span {
    font-weight: 400;
    font-size: 14px;
    color: #666;
    margin-right: 14px
}

body .bar .bar-title .bar-title-con .right li.free .card .content span.recharge {
    display: inline-block;
    width: 66px;
    height: 20px;
    background: -webkit-gradient(linear, left top, right top, from(#393737), to(#494848));
    background: linear-gradient(90deg, #393737 0%, #494848 100%);
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    color: #f9e7be;
    text-align: left;
    line-height: 20px;
    text-align: center
}

body .bar .bar-title .bar-title-con .right li.free .card .content>p {
    font-weight: bold;
    font-size: 16px;
    color: #333;
    letter-spacing: -1px
}

body .bar .bar-title .bar-title-con .right li.free .card .content>p:nth-of-type(2) {
    margin-top: -4px
}

body .bar .bar-title .bar-title-con .right li.free .card .content ol {
    padding-top: 16px
}

body .bar .bar-title .bar-title-con .right li.free .card .content ol li {
    padding-left: 0;
    font-weight: 400;
    font-size: 14px;
    color: #333;
    line-height: 27px
}

body .bar .bar-title .bar-title-con .right li.free .card .content ol li::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url(/statics/vips/images/e659043d.png) left center/contain no-repeat;
    vertical-align: 1px;
    margin-right: 5px
}

body .bar .bar-title .bar-title-con .right li.free.vip i {
    background-image: url(/statics/vips/images/f21e7f40.png)
}

body .bar .bar-title .bar-title-con .right li.free.vip .card .content {
    background-image: url(/statics/vips/images/5a1e2a12.png)
}

body .bar .bar-title .bar-title-con .right li.free.vip .card .content p i {
    background-image: url(/statics/vips/images/f21e7f40.png)
}

body .bar .bar-title .bar-title-con .right li.free.vip .card .content ol li {
    color: #5e3318
}

body .bar .bar-title .bar-title-con .right li.free.vip .card .content ol li::before {
    background-image: url(/statics/vips/images/f2c68241.png)
}

body .bar .bar-title .bar-title-con .right li.login {
    color: #0770d1
}

body .bar .bar-title .bar-title-con .right li.login a {
    color: #0770d1;
    margin: 0 4px
}

body .bar .bar-title .bar-title-con .right li a {
    font-weight: 400;
    font-size: 14px;
    color: #333
}

body .bar .bar-header {
    width: 1280px;
    margin: 0 auto;
    height: 96px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

body .bar .bar-header .logo {
    width: 200px;
    height: 44px;
    margin-top: 26px;
}

body .bar .bar-header .logo h1 {
    height: 44px;
}

body .bar .bar-header .logo h1 img {
    height: 44px;
}

body .bar .bar-header .search-box {
    margin-top: 28px;
    width: 521px;
    height: 42px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    line-height: 40px;
    position: relative;
    overflow: hidden;
}

body .bar .bar-header .search-box form {
    width: 540px;
    height: 40px;
}

body .bar .bar-header .search-box form input.search-content {
    padding: 0 108px 0 10px;
    height: 40px;
    width: 520px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    background: #fff;
    -webkit-appearance: none;
    outline: none;
    -webkit-box-shadow: 0 0 0 1000px white inset;
}

body .bar .bar-header .search-box form input.search-content::-webkit-input-placeholder {
    color: #999999;
    font-size: 14px;
    font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content::-moz-placeholder {
    color: #999999;
    font-size: 14px;
    font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content:-ms-input-placeholder {
    color: #999999;
    font-size: 14px;
    font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content::-ms-input-placeholder {
    color: #999999;
    font-size: 14px;
    font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content::placeholder {
    color: #999999;
    font-size: 14px;
    font-weight: 400;
}

body .bar .bar-header .search-box form button.search-submit {
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    outline: none;
    cursor: pointer;
    width: 97px;
    height: 40px;
    background-color: #0770d1;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    line-height: 40px;
}

body .bar .bar-header .search-box form button.search-submit img {
    vertical-align: -3px;
    padding-right: 6px;
}

body .bar .bar-header .search-box form a {
    position: absolute;
    right: 110px;
    top: 0;
    z-index: 10;
    font-weight: 400;
    font-size: 14px;
    color: #0770d1;
    letter-spacing: 1px;
    cursor: pointer;
    line-height: 40px;
    text-decoration: underline
}

body .bar .bar-header .tel {
    line-height: 31px;
    margin-right: 0;
    width: 200px;
    text-align: left;
    margin-top: 18px;
}

body .bar .bar-header .tel a {
    position: relative;
    font-size: 18px;
    font-weight: initial;
    color: #333333;
}

body .bar .bar-header .tel a::before {
    position: absolute;
    content: '';
    left: -37px;
    top: 15px;
    z-index: 10;
    width: 22px;
    height: 24px;
    background-image: url(https://www.ieduchina.com/statics/pcc/img/cc9595ab.png);
    background-size: 22px 24px;
}

body .iedu-menu-wrap {
    width: 1280px;
    margin: 0 auto;
    height: 48px;
}

body .iedu-menu-wrap .iedu-menu-box {
    background-color: #ffffff;
    width: 100%;
    height: 48px;
    top: 0;
    left: 0;
    z-index: 1000;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu {
    width: 1280px;
    height: 48px;
    margin: 0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li {
    cursor: pointer;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    line-height: 48px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li a {
    color: #303030;
    width: 100%;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li.parentMenu {
    position: relative;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li.parentMenu>a span {
    position: relative;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li.parentMenu>a span::after {
    content: '';
    position: absolute;
    right: -16px;
    top: 4px;
    width: 14px;
    height: 8px;
    background-image: url(https://www.ieduchina.com/statics/pcc/img/511880fa.png);
    background-repeat: no-repeat;
    background-size: 14px 8px;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu {
    display: none;
    position: absolute;
    left: 0;
    width: 100%;
    top: 48px;
    z-index: 800;
    background: #ffffff;
    -webkit-box-shadow: 0px 2px 4px 0px rgba(104, 104, 104, 0.6);
    box-shadow: 0px 2px 4px 0px rgba(104, 104, 104, 0.6);
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li {
    line-height: 48px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    position: relative;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li:hover .box {
    display: block;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li a {
    width: 100%;
    height: 100%;
    color: #212121;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li:hover a {
    color: #338eff;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li .box {
    display: none;
    max-height: 80vh;
    overflow-y: auto;
    position: absolute;
    left: 142px;
    top: 0;
    background: #fff;
    -webkit-box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, .302);
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, .302);
    border-radius: 0px 0px 0px 0px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 16px 0
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li .box .box_lis {
    border-bottom: solid 1px #cecece
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li .box .box_lis:last-of-type {
    border-bottom: none;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li .box .box_lis .box_title {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    line-height: 1;
    padding-top: 14px
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li .box .box_lis .box_title::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 18px;
    background-color: #338eff;
    vertical-align: -3px;
    margin-right: 6px;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li .box .box_lis .box_con {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 12px;
    padding-top: 10px
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li .box .box_lis .box_con a {
    font-size: 16px;
    font-weight: 400;
    color: #666666;
    display: block;
    text-align: left;
    white-space: nowrap;
    line-height: 38px;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li .box .box_lis .box_con.center a {
    text-align: center;
    width: 100% !important;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li .box .box_lis .box_con a:nth-of-type(3n) {
    width: 30%
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li .box .box_lis .box_con a.ing {
    width: 100%
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li .submenu li .box .box_lis .box_con a:hover {
    color: #338eff
}

@-webkit-keyframes an {
    0% {
        top: 40px;
        opacity: 0
    }

    100% {
        top: 36px;
        opacity: 1
    }
}

@keyframes an {
    0% {
        top: 40px;
        opacity: 0
    }

    100% {
        top: 36px;
        opacity: 1
    }
}
</style>