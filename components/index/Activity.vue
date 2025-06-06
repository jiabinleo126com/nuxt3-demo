<template>
    <div class="activity">
        <div class="con">
            <div class="banner-img">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div v-for="(item, index) in BannerImg" class="swiper-slide">
                            <a :href="item.href">
                                <img :src="item.image">
                            </a>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="banner-list">
                <div class="banner-title">
                    <h2>夏/冬令营</h2>
                    <a href="//www.ieduchina.com/camps/index.html" target="_blank">更多>></a>
                </div>
                <div class="swiper-banner-list">
                    <div class="swiper-wrapper">
                        <div v-for="(item, index) in BannerList" class="swiper-slide">
                            <a :href="item.href" target="_blank">
                                <div class="icon">
                                    <img :src="`//www.ieduchina.com/statics/pcc/img/t${item.state}.png`">
                                </div>
                                <div class="time">
                                    <div class="box">
                                        <h3>{{ item.date }}</h3>
                                        <p>{{ item.year }}.{{ item.month }}</p>
                                    </div>
                                </div>
                                <div class="text">
                                    <p>{{ item.title }}</p>
                                    <p>适用年级:{{ item.grade }}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue';
declare const $: any;
declare const Swiper: any;

const BannerImg = reactive([
    {
        image: "https://zhaosheng.ieduchina.com/Upload/File/202505/682d32c6cec02.jpg",
        href: ""
    },
    {
        image: "https://zhaosheng.ieduchina.com/Upload/File/202505/682be7320a1af.jpg",
        href: "https://www.ieduchina.com/huodong/202505/2758.html"
    }, {
        image: "https://zhaosheng.ieduchina.com/Upload/File/202406/667bd10c372dc.png",
        href: ""
    }, {
        image: "https://zhaosheng.ieduchina.com/Upload/File/202406/667bd11a9ecad.png",
        href: ""
    }, {
        image: "https://zhaosheng.ieduchina.com/Upload/File/202311/654da55c539ad.png",
        href: "https://www.ieduchina.com/hk/index.html"
    }
])
const BannerList = reactive([
    {
        href: "//www.ieduchina.com/camp/1527.html",
        state: 3,
        year: 2025,
        month: 6,
        date: 9,
        title: "Stanford Institutes of Medicine Summer Research Program",
        grade: "11-12年级学生"
    }, {
        href: "//www.ieduchina.com/camp/1526.html",
        state: 3,
        year: 2025,
        month: 6,
        date: 15,
        title: "Research In The Biological Sciences (RIBS)",
        grade: "10-11年级学生"
    }, {
        href: "//www.ieduchina.com/camp/1517.html",
        state: 3,
        year: 2025,
        month: 6,
        date: 15,
        title: "Summer Science Program (SSP)",
        grade: "15-18岁"
    }, {
        href: "//www.ieduchina.com/camp/1552.html",
        state: 3,
        year: 2025,
        month: 6,
        date: 16,
        title: "香港科技大学2025年暑期学校",
        grade: "18岁以上"
    }, {
        href: "//www.ieduchina.com/camp/1533.html",
        state: 3,
        year: 2025,
        month: 6,
        date: 16,
        title: "Berkeley Summer Computer Science Academy",
        grade: "当年6月年满16-17岁学生"
    }, {
        href: "//www.ieduchina.com/camp/1530.html",
        state: 3,
        year: 2025,
        month: 6,
        date: 16,
        title: "High School Honors Science, Math and Engineering Program (HSHSP) ",
        grade: "11年级在读学生"
    }, {
        href: "//www.ieduchina.com/camp/1528.html",
        state: 3,
        year: 2025,
        month: 6,
        date: 16,
        title: "Ross Mathematics Program-数学类 ",
        grade: "15-18岁学生"
    }, {
        href: "//www.ieduchina.com/camp/1553.html",
        state: 3,
        year: 2025,
        month: 6,
        date: 22,
        title: "2025香港中文大学国际暑期学校",
        grade: ""
    }
])
onMounted(() => {
    var mySwiper1 = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        slidesPerView: 1,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0
    })
    if ($(".swiper-banner-list").find(".swiper-slide").length > 3) {
        new Swiper('.swiper-banner-list', {
            direction: "vertical",
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            slidesPerView: 4,
            spaceBetween: 0
        });
    }
    else {
        $(".swiper-banner-list").addClass("noswiper");
    }
})
</script>

<style lang="less" scoped>
.activity {
    background-color: #f2f4f6;

    .con {
        width: 1280px;
        margin: 0 auto;
        padding-top: 20px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;

        .banner-img {
            width: 900px;
            height: 420px;
            border: 4px;
            overflow: hidden;

            .swiper-container {
                width: 900px;
                height: 420px;

                .swiper-wrapper {
                    width: 100%;

                    .swiper-slide {
                        width: 100%;
                        height: 420px;

                        a {
                            img {
                                width: 100%;
                                height: 420px;
                                object-fit: cover;
                            }
                        }
                    }
                }

                .swiper-pagination-bullets {
                    bottom: 10px;
                    right: 10px;
                    left: initial;
                    text-align: right;

                    .swiper-pagination-bullet {
                        width: 10px;
                        height: 10px;
                        background: #eeeeee;
                        opacity: 0.6;
                        margin: 0 5px;

                        &.swiper-pagination-bullet-active {
                            background: #66c1ff;
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
}


body .activity .con .banner-list {
    width: 340px;
    height: 420px;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 0 15px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

body .activity .con .banner-list .banner-title {
    height: 50px;
    line-height: 50px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

body .activity .con .banner-list .banner-title h2 {
    font-size: 20px;
    font-weight: bold;
    color: #000000;
}

body .activity .con .banner-list .banner-title a {
    font-size: 14px;
    font-weight: bold;
    color: #0d72ca;
}

body .activity .con .banner-list .swiper-banner-list {
    width: 340px;
    height: 360px;
    overflow: hidden;
}

body .activity .con .banner-list .swiper-banner-list.noswiper .swiper-wrapper {
    display: block
}

body .activity .con .banner-list .swiper-banner-list.noswiper .swiper-wrapper .swiper-slide {
    height: auto
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper {
    width: 100%;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a {
    height: 90px;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a .icon {
    position: relative;
    text-align: center;
    padding-left: 7px;
    height: 90px;
    width: 24px;
    line-height: 90px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a .icon::before {
    position: absolute;
    content: '';
    left: 17px;
    top: 0;
    z-index: 10;
    width: 2px;
    height: 100%;
    background-color: #2764ff;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a .icon img {
    position: absolute;
    width: 22px;
    height: 22px;
    left: 6px;
    top: 34px;
    z-index: 10;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a .time {
    height: 90px;
    margin: 0 16px 0 13px;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a .time .box {
    margin-top: 15px;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    text-align: center;
    background: linear-gradient(176deg, #2e7bfa, #1c4af6);
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a .time .box h3 {
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
    line-height: 41px;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a .time .box p {
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a .text {
    padding: 12px 0;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a .text p {
    width: 206px;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a .text p:first-of-type {
    height: 40px;
    font-size: 16px;
    color: #303030;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide a .text p:last-of-type {
    font-size: 12px;
    color: #666666;
    line-height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide.first .time .box {
    background: linear-gradient(176deg, #fd8809, #fb5105)
}

body .activity .con .banner-list .swiper-banner-list .swiper-wrapper .swiper-slide.two .time .box {
    background: linear-gradient(176deg, #ffca0c, #ffa507)
}
</style>