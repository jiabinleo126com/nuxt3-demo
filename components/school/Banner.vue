<template>
    <div class="abroad-banner">
        <a v-for="(item, index) in data" :href="item.href">
            <img :src="item.image" :alt="item.title">
            <p>{{ item.title }}</p>
        </a>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const data = reactive([
    {
        title: "2025广州市香江中学国际部学费及课程介绍",
        href: "//www.ieduchina.com/guangzhou/education/202506/128981.html",
        image: (await import("~/assets/school/683555cdb508d.png")).default
    },
    {
        title: "2025广州市香江中学国际部学费及课程介绍",
        href: "//www.ieduchina.com/hongkong/education/202506/128980.html",
        image: (await import("~/assets/school/683555cdb508d.png")).default
    },
    {
        title: "2025广州市香江中学国际部学费及课程介绍",
        href: "//www.ieduchina.com/school/education/202506/128978.html",
        image: (await import("~/assets/school/683555cdb508d.png")).default
    }
])
</script>
<style lang="less" scoped>
.abroad-banner {
    overflow: hidden;

    a {
        position: relative;
        float: left;
        width: 268px;
        height: 163px;
        overflow: hidden;
        border-radius: 12px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &:first-of-type {
            width: 622px;
            height: 342px;
            margin-right: 10px;
        }

        &:last-of-type {
            margin-top: 15px;
        }

        p {
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 10;
            background-color: rgba(0, 0, 0, 0.6);
            height: 40px;
            font-size: 16px;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 40px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

    }
}
</style>