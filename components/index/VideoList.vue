<template>
    <div class="video-list">
        <div class="video-con">
            <h2>
                精彩视频
                <a href="/videos/index.html">
                    更多视频<i></i>
                </a>
            </h2>
            <ul>
                <li v-for="item in verticalVideos" :key="item.id">
                    <NuxtLink :to="`/video/${item.id}`">
                        <img loading="lazy" :src="item.image" :alt="item.title">
                    </NuxtLink>
                    <p>{{ item.title }}</p>
                    <div class="nums">
                        <span>
                            <i :style="`background-image: url(${item.authorImage})`"></i>
                            {{ item.author }}
                        </span>
                    </div>
                </li>
            </ul>
            <ul class="video2">
                <li v-for="item in horizontalVideos" :key="item.id">
                    <NuxtLink :to="`/video/${item.id}`">
                        <img loading="lazy" :src="item.image" :alt="item.title">
                    </NuxtLink>
                    <p>{{ item.title }}</p>
                    <div class="nums">
                        <span>
                            <i :style="`background-image: url(${item.authorImage})`"></i>
                            {{ item.author }}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Videos {
    id: string;
    image: string;
    title: string;
    author: string;
    authorImage: string;
}

defineProps<{
    verticalVideos: Videos[],
    horizontalVideos: Videos[]
}>()

</script>

<style lang="less" scoped>
body .video-list {
    width: 100%;
    background: #FFFFFF;
    border-radius: 0px;
    padding-bottom: 40px;
}

body .video-list .video-con {
    width: 1280px;
    margin: 0 auto;
    font-size: 0;
}

body .video-list .video-con h2 {
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    padding: 40px 0 20px;
}

body .video-list .video-con h2 a {
    font-size: 16px;
    font-weight: 400;
    color: #0D72CA;
    margin-left: 24px;
    cursor: pointer;
}

body .video-list .video-con h2 a i {
    background-image: url(https://www.ieduchina.com/statics/pcc/img/60532746.png);
    display: inline-block;
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-left: 5px;
    vertical-align: -2px;
}

body .video-list .video-con ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

body .video-list .video-con ul li {
    margin-left: 16px;
}

body .video-list .video-con ul li a {
    display: block;
    width: 200px;
    height: 266px;
}

body .video-list .video-con ul li a img {
    width: 200px;
    height: 266px;
    border-radius: 6px;
    background-color: black;
    overflow: hidden;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}

body .video-list .video-con ul li p {
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    padding: 10px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 180px;
}

body .video-list .video-con ul li .nums span {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
}

body .video-list .video-con ul li .nums span i {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 5px;
    vertical-align: -3px;
    border-radius: 50%;
}

body .video-list .video-con ul li .nums span:nth-of-type(1) i {
    background-image: url(../img/f7299d4c.png);
}

body .video-list .video-con ul li .nums span:nth-of-type(2) {
    margin-left: 20px;
}

body .video-list .video-con ul li .nums span:nth-of-type(2) i {
    background-image: url(../img/525f804a.png);
}

body .video-list .video-con ul li:first-of-type {
    margin-left: 0;
}

body .video-list .video-con ul.video2 {
    margin-top: 20px;
    display: block;
    padding-top: 6px;
    overflow: hidden;
}

body .video-list .video-con ul.video2 li {
    margin-left: 15px;
    float: left;
    margin-top: 14px;
}

body .video-list .video-con ul.video2 li .nums {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 180px;
}

body .video-list .video-con ul.video2 li a {
    width: auto;
    height: auto;
}

body .video-list .video-con ul.video2 li a img {
    width: 184px;
    height: 103px;
    background: #000;
    border-radius: 8px;
}

body .video-list .video-con ul.video2 li:first-of-type {
    height: auto;
    margin-left: 0;
}

body .video-list .video-con ul.video2 li:first-of-type p {
    width: 480px;
}

body .video-list .video-con ul.video2 li:first-of-type a img {
    width: 481px;
    height: 271px;
    background: #000;
    border-radius: 8px;
    overflow: hidden;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}
</style>