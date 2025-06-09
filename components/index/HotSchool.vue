<template>
    <div class="colleges">
        <span class="colleges-title">热门院校地区</span>
        <ul>
            <li v-for="item in data" :key="item.id">
                <NuxtLink :to="item.href" :title="item.title">
                    <img width="200" :src="item.image" :alt="item.title">
                </NuxtLink>
            </li>
        </ul>
        <a href="//schoollist.ieduchina.com" target="_blank">
            <button type="button">了解国际院校</button>
        </a>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const data = reactive([
    {
        id: 1,
        href: "//schoollist.ieduchina.com/schlist/c2-p34-c0-g0-s0/",
        title: "香港",
        image: "//www.ieduchina.com/statics/pcc/img/hot1.png"
    },
    {
        id: 2,
        href: "//schoollist.ieduchina.com/schlist/c1-g1-t0-z0/",
        title: "美国",
        image: "//www.ieduchina.com/statics/pcc/img/hot2.png"
    },
    {
        id: 3,
        href: "//schoollist.ieduchina.com/schlist/c1-g2-t0-z0/",
        title: "英国",
        image: "//www.ieduchina.com/statics/pcc/img/hot3.png"
    },
    {
        id: 4,
        href: "//schoollist.ieduchina.com/schlist/c1-g4-t0-z0/",
        title: "加拿大",
        image: "//www.ieduchina.com/statics/pcc/img/hot4.png"
    }, {
        id: 5,
        href: "//schoollist.ieduchina.com/schlist/c1-g15-t0-z0/",
        title: "新加坡",
        image: "//www.ieduchina.com/statics/pcc/img/hot5.png"
    }, {
        id: 6,
        href: "//schoollist.ieduchina.com/schlist/c2-p21-c328-g0-s0/",
        title: "深圳",
        image: "//www.ieduchina.com/statics/pcc/img/hot6.png"
    }
])
</script>

<style lang="less" scoped>
body {
    .colleges {
        text-align: center;
        width: 1280px;
        margin: 40px auto 58px;

        .colleges-title {
            position: relative;
            display: inline-block;
            height: 24px;
            font-size: 24px;
            font-weight: bold;
            color: #000000;

            &::before {
                position: absolute;
                left: 45px;
                bottom: -18px;
                content: '';
                width: 59px;
                height: 4px;
                background: #1583e3;
                border-radius: 2px;
            }
        }

        ul {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            margin-top: 58px;

            li {
                width: 200px;
                height: 280px;

                img {
                    width: 200px;
                    height: 280px;
                    border-radius: 10px;
                    object-fit: cover;
                    -o-object-fit: cover;
                    object-position: center;
                    -o-object-position: center;
                }
            }
        }

        button {
            cursor: pointer;
            margin-top: 30px;
            width: 160px;
            height: 40px;
            background: #1583e3;
            border-radius: 8px;
            border: none;
            outline: none;
            font-size: 16px;
            font-family: "Source Han Sans CN-Medium";
            font-weight: 400;
            color: #ffffff;
        }
    }
}
</style>