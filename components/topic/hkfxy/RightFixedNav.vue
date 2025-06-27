<template>
    <div class="right-fixed-nav">
        <ul>
            <li class="right-nav">
                <img src="//www.ieduchina.com/topic/2024/hk7/images/f361907d.png" alt=""
                    style="width:40px;height:40px;margin-bottom:8px">
                <p class="title">往期回顾</p>
                <div class="right-nav-list-wq">
                    <ul>
                        <li v-for="item in menu" :key="item.title">
                            <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="right-nav">
                <img src="//www.ieduchina.com/topic/2024/hk7/images/7f8d27e7.png" alt="">
                <p class="title">媒体合作</p>
                <div class="right-nav-list">
                    <div>
                        <img src="//www.ieduchina.com/statics/hui.jpg" alt="">
                        <p>
                            媒体合作请扫码<br>或联系：181-6570-6113
                        </p>
                    </div>
                </div>
            </li>
            <li class="right-nav">
                <a class="showTk">
                    <img src="//www.ieduchina.com/topic/2024/hk7/images/76b68ec5.png" alt="">
                    <p class="title">下期报名</p>
                </a>
            </li>
            <li class="right-nav">
                <img src="//www.ieduchina.com/topic/2024/hk7/images/c3f96327.png" alt="">
                <p class="title">家长咨询</p>
                <div class="right-nav-list">
                    <div>
                        <img src="//www.ieduchina.com/topic/2024/hk7/images/d7b7dbc9.jpg" alt="">
                        <p>
                            香港升学咨询请扫码<br>或联系：189-3807-4754
                        </p>
                    </div>
                </div>
            </li>
            <li class="right-nav" id="go-top">
                <img src="//www.ieduchina.com/topic/2024/hk7/images/320e2aa3.png" alt="">
                <p class="title">回到顶部</p>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
declare const $: any;
declare const Swiper: any;
const menu = ref([
    {
        path: "/topic/2023/hk/",
        title: "第一期"
    },
    {
        path: "/topic/2023/xg/",
        title: "第二期"
    },
    {
        path: "/topic/2023/hk3/",
        title: "第三期"
    },
    {
        path: "/topic/2024/hk4/",
        title: "第四期"
    },
    {
        path: "/topic/2024/hk5/",
        title: "第五期"
    },
    {
        path: "/topic/2024/hk6/",
        title: "第六期"
    },
    {
        path: "/topic/2024/hk7/",
        title: "第七期"
    },
    {
        path: "/topic/2024/hk8/",
        title: "第八期"
    },
    {
        path: "/topic/2024/hk11/",
        title: "第十一期"
    },
    {
        path: "/topic/2025/hk12/",
        title: "第十二期"
    },
    {
        path: "/topic/2025/hk13/",
        title: "第十三期"
    }
])
onMounted(() => {
    $(function () {
        $('#go-top').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    })
})
</script>
<style scoped lang="less">
.right-fixed-nav {
    position: fixed;
    right: 0;
    top: 35%;
    width: 98px;
    z-index: 100;
    background-color: var(--primary-color);
    -webkit-box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}

.right-fixed-nav ul li {
    position: relative;
    cursor: pointer;
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
    text-align: center;
    padding: 15px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.right-fixed-nav ul li:hover .right-nav-list {
    -webkit-transform: scale(1);
    transform: scale(1);
}

.right-fixed-nav ul li .right-nav-list-wq {
    -webkit-transform: scale(0);
    transform: scale(0);
    position: absolute;
    right: 98px;
    width: 100px;
    top: 0;
    background-color: white;
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
    border: 1px solid #dcdcdc;
}

.right-fixed-nav ul li .right-nav-list-wq ul li {
    padding: 0;
}

.right-fixed-nav ul li .right-nav-list-wq ul li a {
    display: block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #333;
}

.right-fixed-nav ul li .right-nav-list-wq ul li a:hover {
    color: var(--primary-color);
}

.right-fixed-nav ul li:hover .right-nav-list-wq {
    -webkit-transform: scale(1);
    transform: scale(1);
}

.right-fixed-nav ul li:nth-of-type(2) .right-nav-list {
    left: -151px;
    top: -26px;
}

.right-fixed-nav ul li:nth-of-type(4) .right-nav-list {
    left: -151px;
    top: -38px;
}

.right-fixed-nav ul li:last-of-type p.title {
    padding-bottom: 0;
    border-bottom: none;
}

.right-fixed-nav ul li>img {
    width: 44px;
    height: 44px;
}

.right-fixed-nav ul li p.title {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    width: 70px;
    margin: 0 auto;
    padding-bottom: 14px;
    border-bottom: solid 1px #fff;
}

.right-fixed-nav ul li .right-nav-list {
    border: 1px solid #dcdcdc;
    position: absolute;
    color: #333;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transition: -webkit-transform 0.25s;
    transition: -webkit-transform 0.25s;
    transition: transform 0.25s;
    transition: transform 0.25s, -webkit-transform 0.25s;
    background-color: #fff;
    font-size: 0;
}

.right-fixed-nav ul li .right-nav-list div {
    display: inline-block;
    width: 149px;
}

.right-fixed-nav ul li .right-nav-list div img {
    width: 122px;
    height: 122px;
    margin-top: 7px;
}

.right-fixed-nav ul li .right-nav-list div p {
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color: #333;
    line-height: 18px;
    padding: 5px 0;
}
</style>