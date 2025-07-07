<template>
    <header :class="$style.bar">
        <BarTitle showHome="true" />
        <div :class="$style.bar_header">
            <div :class="$style.logo"><a href="">
                    <img :src="logo_xg" width="220">
                </a></div>
            <div :class="$style.search_box">
                <form action="/search/index.html" method="get" id="search">
                    <input name="searchkey" placeholder="搜索 学校/文章/机构" type="text" value="" id="q"
                        :class="$style.search_content">
                    <button :class="$style.search_submit" id="searchbtn" type="submit">
                        <img :src="c7d29e24f">搜索
                    </button>
                </form>
            </div>
            <div :class="$style.tel"><a href="tel:4009008516">400-900-8516</a></div>
        </div>
        <div :class="$style.menu_5062847">
            <menu>
                <div :class="$style.c">
                    <div :class="[$style.con, $style.left]">
                        <a href="/hk/" target="_blank">香港一站式升学</a>
                    </div>
                    <div :class="$style.con">
                        <a href="/hongkong/" :class="$style.active">首页</a>
                        <a href="/hongkong/child.html">幼稚园</a>
                        <a href="/hongkong/primary.html">小学</a>
                        <a href="/hongkong/middle.html">中学</a>
                        <a href="/hongkong/internation.html">国际学校</a>
                        <a href="/hongkong/teshu.html">特殊学校</a>
                        <a href="/hongkong/university.html">大学</a>
                        <a href="/hongkong/overseas.html">海外升学</a>
                    </div>
                </div>
            </menu>
        </div>
    </header>
</template>
<script setup>
import logo_xg from "~/assets/hongkong/logo_xg.png"
import c7d29e24f from "~/assets/hongkong/7d29e24f.png"
</script>
<style module lang="less">
.bar {
    width: 100%;
    min-width: 1280px;
    background-color: #ffffff;

    .bar_header {
        width: 1280px;
        margin: 0 auto;
        height: 96px;
        display: flex;
        justify-content: space-between;

        .logo {
            width: 176px;
            height: 44px;
            margin-left: 20px;
            margin-top: 26px;

            h1 {
                height: 44px;

                img {
                    height: 44px;
                }
            }
        }

        .search_box {
            margin-top: 28px;
            width: 521px;
            height: 42px;
            background: #ffffff;
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            line-height: 40px;
            position: relative;
            overflow: hidden;

            form {
                width: 540px;
                height: 40px;

                input {
                    &.search_content {
                        padding: 0 108px 0 10px;
                        height: 40px;
                        width: 520px;
                        box-sizing: border-box;
                        font-size: 14px;
                        font-weight: 400;
                        color: #333;
                        background: #fff;
                        appearance: none;
                        outline: none;
                        box-shadow: 0 0 0 1000px white inset;

                        &::placeholder {
                            color: #999999;
                            font-size: 14px;
                            font-weight: 400;
                        }
                    }
                }

                button {
                    &.search_submit {
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

                        img {
                            vertical-align: -3px;
                            padding-right: 6px;
                        }
                    }
                }
            }
        }

        .tel {
            line-height: 96px;
            margin-right: 20px;
            width: 176px;

            a {
                position: relative;
                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #333333;

                &::before {
                    position: absolute;
                    content: '';
                    left: -43px;
                    top: 5px;
                    z-index: 10;
                    width: 22px;
                    height: 24px;
                    background-image: url(/assets/hongkong/cc9595ab.png);
                    background-size: 22px 24px;
                }
            }
        }
    }
}

.menu_5062847 {
    height: 60px;

    menu {
        width: 100%;
        height: 60px;
        background: #0770D1;
        top: 0;
        z-index: 20;

        .c {
            width: 1280px;
            margin: 0 auto;
            overflow: hidden;
            display: flex;
            justify-content: space-between;

            .con {
                float: right;
                width: 670px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &.left {
                    a {
                        width: auto;
                        margin-left: 43px;

                        &.active,
                        &:hover {
                            background: initial;
                        }
                    }
                }

                a {
                    font-size: 18px;
                    font-weight: 400;
                    color: #FFFFFF;
                    width: 100px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;

                    &.active,
                    &:hover {
                        background: #0054A2;
                    }
                }
            }
        }
    }
}
</style>