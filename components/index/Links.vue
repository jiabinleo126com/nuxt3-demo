<template>
    <div class="links">
        <p>
            <span>友情链接</span>
        </p>
        <p>
            <template v-for="item in data">
                <NuxtLink :to="item.href" :title="item.title" target="_blank">{{ item.title }}</NuxtLink>
            </template>
        </p>
    </div>
</template>
<script setup>
import { reactive } from 'vue';

const data = reactive([
    {
        href: "https://www.ieduchina.com/beijing/",
        title: "北京国际学校"
    }, {
        href: "https://www.ieduchina.com/shanghai/",
        title: "上海国际学校"
    }, {
        href: "https://www.ieduchina.com/shenzhen/",
        title: "深圳国际学校"
    }, {
        href: "https://www.ieduchina.com/guangzhou/",
        title: "广州国际学校"
    }, {
        href: "https://www.ieduchina.com/hongkong/",
        title: "香港国际学校"
    }, {
        href: "https://www.ieduchina.com/chengdu/",
        title: "成都国际学校"
    }, {
        href: "https://www.ieduchina.com/log/sitemap/sitemaps.xml",
        title: "网站地图"
    }
])
</script>
<style lang="less">
.links {
    width: 1280px;
    margin: 30px auto 30px;
}

.links p {
    text-align: justify;
    line-height: 42px;
}

.links p:last-of-type {
    line-height: 32px;
}

.links p span {
    font-size: 20px;
    font-weight: bold;
    color: #737272;
}

.links p a {
    font-size: 16px;
    font-weight: bold;
    color: #888787;
    line-height: 42px;
    margin-right: 28px;
    white-space: nowrap;
}

.links p a:hover {
    color: #1583E3;
}
</style>