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
import { reactive } from 'vue';
const verticalVideos = reactive([
    {
        id: "438",
        image: "https://www.ieduchina.com/uploadfile/toutiao/202505/1748326396640534.png",
        title: "香港国际学校竞教小学生开公司？香港威雅杨副校长：学生18岁前玩转跨国商业项目！",
        author: "选校砖家",
        authorImage: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg"
    }, {
        id: "437",
        image: "https://www.ieduchina.com/uploadfile/toutiao/202505/1748326343856177.png",
        title: "港八大录取率83.3%！沙田培英校长亲曝，内地生转香港名校真能“躺赢”",
        author: "选校砖家",
        authorImage: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg"
    }, {
        id: "436",
        image: "https://www.ieduchina.com/uploadfile/toutiao/202505/1748326324524434.png",
        title: "港八大录取率高达9成！元朗信义校长亲授 内地生选科别抄作业，这样选才稳",
        author: "选校砖家",
        authorImage: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg"
    }, {
        id: "435",
        image: "https://www.ieduchina.com/uploadfile/toutiao/202505/1747721905393845.png",
        title: "DSE与考校vs内地校？张校长揭秘：港澳子弟学校的3大碾压级优势",
        author: "选校砖家",
        authorImage: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg"
    }, {
        id: "434",
        image: "https://www.ieduchina.com/uploadfile/toutiao/202505/1747721548641991.png",
        title: "DSE vs A-Level终极快择！香港双轨名校校长亲曝，选错课程恐无缘港大医科？",
        author: "选校砖家",
        authorImage: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg"
    }, {
        id: "433",
        image: "https://www.ieduchina.com/uploadfile/toutiao/202505/1747721035875998.png",
        title: "选错课程=耽误孩子？听刘宇校长谈国际课程的“精准匹配”法则",
        author: "选校砖家",
        authorImage: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg"
    }
]),
    horizontalVideos = reactive([
        {
            id: "398",
            image: "https://www.ieduchina.com/uploadfile/toutiao/202408/1724816633743697.png",
            title: "未来更卓越 威睿达思品牌升级发布会",
            author: "威睿达思",
            authorImage: "https://www.ieduchina.com/uploadfile/gzh/202204/164921293384661.jpg"
        },
        {
            id: "367",
            image: "https://www.ieduchina.com/uploadfile/toutiao/202405/1715300840935142.png",
            title: "菁华HKDSE校园开放日",
            author: "菁华HKDSE",
            authorImage: "https://www.ieduchina.com/uploadfile/toutiao/202404/1714026986540131.png"
        },
        {
            id: "325",
            image: "https://www.ieduchina.com/uploadfile/toutiao/202402/1708830541310148.jpg",
            title: "博格思学校2024暖冬之约，共赴下一程美好",
            author: "青岛博格思加州学校",
            authorImage: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg"
        },
        {
            id: "315",
            image: "https://www.ieduchina.com/uploadfile/toutiao/202401/1705373610704532.jpg",
            title: "One day in Pegasus！美式高中的一天vlog",
            author: "青岛博格思加州学校",
            authorImage: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg"
        },
        {
            id: "306",
            image: "https://www.ieduchina.com/uploadfile/toutiao/202312/1701920552934977.png",
            title: "往期营地回顾",
            author: "领睿学院",
            authorImage: "https://www.ieduchina.com/uploadfile/toutiao/202312/1701833847730264.jpg"
        },
        {
            id: "305",
            image: "https://www.ieduchina.com/uploadfile/toutiao/202312/1701842274635278.jpg",
            title: "“莞通万里”国际专上教育升学展",
            author: "ASJ 东莞暨大港澳子弟学校",
            authorImage: "https://www.ieduchina.com/uploadfile/toutiao/202206/1655098793.png"
        },
        {
            id: "304",
            image: "https://www.ieduchina.com/uploadfile/toutiao/202312/1701677334436310.jpg",
            title: "【爱莎科学城】塑造与人工智能并进的教育 从知识转化为技能",
            author: "选校砖家",
            authorImage: "https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg"
        },
        {
            id: "303",
            image: "https://www.ieduchina.com/uploadfile/toutiao/202312/1701411970964637.jpg",
            title: "10月21日校园开放日学生分享",
            author: "上海宏润博源",
            authorImage: "https://www.ieduchina.com/uploadfile/gzh/201912/157533935756668.jpg"
        },
        {
            id: "302",
            image: "https://www.ieduchina.com/uploadfile/toutiao/202311/1699838272230560.jpg",
            title: "招生官到访青岛博格思学校，零距离对话众多海外名校招生官",
            author: "青岛博格思加州学校",
            authorImage: "https://www.ieduchina.com/uploadfile/toutiao/202303/1678418354312120.jpg"
        }
    ])
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