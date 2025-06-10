<template>
    <div class="abroad-news">
        <h3><span>校园最新资讯</span></h3>
        <ul>
            <li v-for="item in data" :key="item.userid">
                <NuxtLink :to="item.path" v-if="item.image">
                    <img :src="item.image" :alt="item.title">
                </NuxtLink>
                <div class="abroad-article">
                    <NuxtLink :to="item.path">
                        <h2>{{ item.title }}</h2>
                    </NuxtLink>
                    <div class="text">
                        <p>{{ item.desc }}</p>
                    </div>
                    <p class="source">
                        <NuxtLink :to="`//www.ieduchina.com/home/${item.userid}.html`">
                            <img :src="item.userImg" :alt="item.user">
                            <span>{{ item.user }}</span>
                        </NuxtLink>
                        <span>{{ item.time }}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }
})
console.log(props)

</script>
<style>
body .abroad .abroad-con .abroad-news {
    margin-top: 10px;
    font-size: 20px;
    font-family: Source Han Sans CN-Bold, Source Han Sans CN;
    font-weight: bold;
    color: #333333;
}

body .abroad .abroad-con .abroad-news h3 {
    padding: 20px 0;
}

body .abroad .abroad-con .abroad-news h3 span {
    height: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #333333;
}

body .abroad .abroad-con .abroad-news h3 span:before {
    display: inline-block;
    content: "";
    width: 4px;
    height: 20px;
    background-color: #0770d1;
    margin-right: 8px;
    vertical-align: -3px;
}

body .abroad .abroad-con .abroad-news ul {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 6px 20px;
    width: 900px;
    background: #FFFFFF;
    border-radius: 12px;
}

body .abroad .abroad-con .abroad-news ul li {
    padding: 24px 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-bottom: solid #d4d4d4 1px;
}

body .abroad .abroad-con .abroad-news ul li:last-of-type {
    border-bottom: none;
}

body .abroad .abroad-con .abroad-news ul li>a {
    width: 204px;
    height: 138px;
    overflow: hidden;
    display: block;
    border-radius: 8px;
    margin-right: 26px;
}

body .abroad .abroad-con .abroad-news ul li>a img {
    width: 100%;
}

body .abroad .abroad-con .abroad-news ul li .abroad-article {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

body .abroad .abroad-con .abroad-news ul li .abroad-article a h2 {
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    line-height: 24px;
    display: -webkit-box;
    box-orient: vertical;
    line-clamp: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: justify;
}

body .abroad .abroad-con .abroad-news ul li .abroad-article .text {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 16px;
    height: 91px;
}

body .abroad .abroad-con .abroad-news ul li .abroad-article .text p {
    font-size: 16px;
    font-weight: 400;
    color: #666666;
    line-height: 24px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: justify;
}

body .abroad .abroad-con .abroad-news ul li .abroad-article .source {
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

body .abroad .abroad-con .abroad-news ul li .abroad-article .source a {
    font-weight: 400;
    color: #333333;
    max-width: 525px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

body .abroad .abroad-con .abroad-news ul li .abroad-article .source a img {
    height: 24px;
    width: 24px;
    vertical-align: -7px;
    border-radius: 50%;
}

body .abroad .abroad-con .abroad-news ul li .abroad-article .source a span {
    color: #333333;
}

body .abroad .abroad-con .abroad-news ul li .abroad-article .source span {
    font-size: 16px;
    font-weight: 400;
    color: #999999;
}
</style>