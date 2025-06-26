<template>
    <div class="list">
        <ul>
            <template v-for="(item, index) in data" :key="index">
                <li :class="{ started: item.status == 1, over: item.status === 0 }">
                    <NuxtLink :to="item.path">
                        <div class="image" :style="{ backgroundImage: `url(${item.image})` }"></div>
                        <div class="detail">
                            <div>
                                <div class="title">
                                    <span>{{ item.title }}</span>
                                </div>
                                <p v-if="item.dw" :title="item.dw">主办单位：{{ item.dw }}</p>
                                <p>开始时间：{{ item.time }}</p>
                            </div>
                        </div>
                        <div class="btn">
                            <div>
                                <button>预约报名</button>
                                <p>有<span>{{ item.nums }}人</span>查看</p>
                            </div>
                        </div>
                    </NuxtLink>
                </li>
            </template>
        </ul>
    </div>
</template>
<script setup lang="ts">

interface Activity {
    title: string;
    dw: string;
    time: string;
    image: string;
    status: number;
    nums: number;
    path: string
}

const props = defineProps({
    data: {
        type: Array as () => Activity[],
        default: () => []
    }
});

</script>
<style lang="less">
body .x-content .container .left .list ul {
    padding: 15px 0 30px 0
}

body .x-content .container .left .list ul li {
    float: initial;
    width: 900px;
    height: 178px;
    position: relative;
    margin-bottom: 8px
}

body .x-content .container .left .list ul li a {
    cursor: pointer;
    width: 900px;
    height: 178px;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(176, 176, 175, .3), 0px 1px 2px 0px rgba(182, 182, 182, .17);
    box-sizing: border-box;
    padding: 14px 23px 14px 12px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #000;
    line-height: 20px
}

body .x-content .container .left .list ul li a:hover {
    background-color: #eee
}

body .x-content .container .left .list ul li a .image {
    width: 225px;
    height: 150px;
    border-radius: 4px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat
}

body .x-content .container .left .list ul li a .detail {
    display: table;
    height: 100%
}

body .x-content .container .left .list ul li a .detail>div {
    display: table-cell;
    vertical-align: middle;
    width: 312px
}

body .x-content .container .left .list ul li a .detail>div p {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #333232;
    height: 30px;
    width: 312px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    margin-top: 0
}

body .x-content .container .left .list ul li a .detail>div>.title {
    text-align: justify;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 30px;
    color: #272727;
    margin-bottom: 6px
}

body .x-content .container .left .list ul li a .detail>div>.title span {
    line-height: 1;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden
}

body .x-content .container .left .list ul li a .detail>div p.title {
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #272727
}

body .x-content .container .left .list ul li a .btn {
    width: 160px;
    text-align: center;
    display: table;
    height: 100%
}

body .x-content .container .left .list ul li a .btn>div {
    display: table-cell;
    vertical-align: middle
}

body .x-content .container .left .list ul li a .btn>div button {
    margin-top: 28px;
    cursor: pointer;
    width: 118px;
    height: 38px;
    background: #ff9100;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #fff
}

body .x-content .container .left .list ul li.over a .btn>div button {
    background-color: #989796
}

body .x-content .container .left .list ul li a .btn>div p {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #1a1a1a;
    margin-top: 7px;
    height: 40px
}

body .x-content .container .left .list ul li a .btn>div p span {
    color: #ff9100
}

body .x-content .container .left .list ul li a {
    position: relative
}

body .x-content .container .left .list ul li a::before {
    content: "";
    position: absolute;
    width: 92px;
    height: 29px;
    z-index: 10;
    left: 8px;
    top: 23px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center
}

body .x-content .container .left .list ul li.started a::before {
    background-image: url(https://www.ieduchina.com/statics/pcc/img/0119start.png?t=20211124)
}

body .x-content .container .left .list ul li.over a::before {
    background-image: url(https://www.ieduchina.com/statics/pcc/img/0119over.png?t=20211124)
}

body .x-content .container .left .list button.x-more {
    width: 896px;
    height: 64px;
    background: #e5e5e5;
    border-radius: 4px;
    font-size: 28px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #807f7e;
    border: none;
    outline: none;
    margin-bottom: 64px;
    cursor: pointer
}
</style>