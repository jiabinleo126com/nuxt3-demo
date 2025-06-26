<template>
    <div class="container">
        <h1><span>收款收据</span><a>128952</a></h1>
        <p class="date">2020年06月12日</p>
        <div class="box">
            <div class="left">
            </div>
            <div class="center">
                <div class="content">
                    <div class="text">
                        今收到<span>{{ data.name }}</span><br>
                        交来：<span>{{ data.kecheng }}</span><br>
                        金额（大写）<span>{{ maxMoney }}</span>
                    </div>
                    <div class="desc">
                        <div class="desc-left">
                            <i>HK</i><span>{{ data.minMoney }}</span>
                        </div>
                        <div class="desc-center">
                            <span><img src="./未选中.png" alt="选中">现金</span>
                            <span><img src="./未选中.png" alt="选中">转账</span>
                            <span><img src="./未选中.png" alt="选中">微信/支付宝</span>
                            <span><img src="./未选中.png" alt="选中">支票</span>
                            <span><img src="./选中.png" alt="选中">移动支付</span>
                        </div>
                        <div class="desc-right">
                            收款单位（盖章）
                            <component :is="YinZhang" right="-4cm" bottom="-1.2cm" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                ①存根<span>（</span>白<span>）</span>
                ②交对方<span>（</span>红<span>）</span>
                ③交财务<span>（</span>黄<span>）</span>
            </div>
        </div>
        <div class="bottom">
            <span>核准</span>
            <span>会计</span>
            <span>记账</span>
            <span>出纳 出纳</span>
            <span>经手人 顾问</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, computed } from 'vue';
const YinZhang = defineAsyncComponent(() => import('~/components/zhaosheng/YinZhang.vue'))

interface DataType {
    name: string;
    kecheng: string;
    money: string;
    minMoney: number;
}

const data: DataType = reactive({
    name: "学生姓名",
    kecheng: "课程名称+课时数",
    money: "玖亿柒仟捌佰玖拾壹万叁仟伍佰陆拾八元叁角肆分",
    minMoney: 978913568.34
})
function numberToChinese(num: number): string {
    const fraction = ['角', '分'];
    const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
    const head = num < 0 ? '负' : '';
    num = Math.abs(num);

    let s = '';

    // 处理小数部分
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';

    // 处理整数部分
    num = Math.floor(num);
    for (let i = 0; i < unit[0].length && num > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && num > 0; j++) {
            p = digit[num % 10] + unit[1][j] + p;
            num = Math.floor(num / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }

    // 替换多余的零
    s = s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
    return head + s;
}

data.minMoney = parseFloat((Math.random() * 1000000000).toFixed(2));

const maxMoney = computed(() => {
    return numberToChinese(data.minMoney)
})

useHead({
    link: [
        {
            rel: "shortcut icon",
            type: "image/x-icon",
            href: "//www.ieduchina.com/statics/pcc/img/favicon.ico"
        }
    ],
    script: [
        {
            src: "https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js",
            type: "text/javascript",
            defer: true
        }
    ],
    title: '收款收据',
    meta: [
        { name: 'description', content: '收款收据' },
        { name: 'keywords', content: '收款，收据' }
    ]
})
onMounted(() => {
    nextTick(() => {
        console.log(window.location.href)
    })
})
</script>
<style lang="less">
@media print {
    @page {
        size: landscape;
        margin: 0.5cm;
        mso-header: none;
        mso-footer: none;
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1;
}

.container {
    width: 21cm;
    height: 13cm;
    position: relative;
    margin: 0 auto;
    padding: 1cm 0.5cm;


    h1 {
        text-align: center;

        span {
            padding: 0 0.8cm;
            border-bottom: 0.1cm double #000;
            letter-spacing: 0.6cm;
            font-size: 0.8cm;
        }

        a {
            position: absolute;
            color: red;
            right: 0.8cm;
            top: 1.4cm;
            font-size: 0.8cm;
        }
    }

    .date {
        text-align: center;
        font-size: 0.6cm;
        margin-top: 0.4cm;
    }

    .box {
        overflow: hidden;
        margin-top: 0.2cm;

        .left {
            float: left;
            width: 0.5cm;
            height: 6cm;
            line-height: 0.48cm;
        }

        .right {
            float: left;
            width: 0.5cm;
            height: 6cm;
            writing-mode: horizontal-tb;
            line-height: 0.32cm;
            font-size: 0.3cm;
            text-align: center;
            letter-spacing: 0.1cm;
            padding-left: 0.1cm;

            span {
                display: block;
                transform: rotateZ(90deg) translateX(0.06cm);
                margin-left: -0.02cm;
            }
        }

        .center {
            float: left;
            width: 18.9cm;
            padding: 0 0.2cm;

            .content {
                height: 100%;
                border: solid 1px #000;
                padding: 0.6cm 0.5cm;

                .text {
                    font-size: 0.5cm;
                    text-indent: 2em;
                    line-height: 1.1cm;

                    span {
                        display: inline-block;
                        padding: 0 0.1cm;
                        border-bottom: solid 0.01cm #000;
                        text-align: left;


                        &:first-of-type {
                            width: 14.6cm;
                        }

                        &:nth-of-type(2) {
                            width: 15.6cm;
                        }

                        &:nth-of-type(3) {
                            width: 14.11cm;
                            letter-spacing: 0.07cm;
                        }
                    }
                }

                .desc {
                    margin-top: 0.6cm;
                    min-height: 1.4cm;

                    .desc-left {
                        float: left;
                        margin-top: 0.03cm;

                        i {
                            font-style: initial;
                            font-size: 0.8cm;
                            font-weight: bold;
                        }

                        span {
                            background-color: #eee;
                            font-size: 0.6cm;
                            margin-left: 0.2cm;
                            padding: 0.4 0.4cm;
                        }
                    }

                    .desc-center {
                        float: left;
                        width: 5cm;
                        font-size: 0.5cm;
                        display: block;
                        margin-left: 0.6cm;

                        span {
                            display: inline-block;
                            min-width: 2cm;

                            &:nth-of-type(2) {
                                margin-right: 0.9cm;
                            }
                        }

                        img {
                            width: 0.6cm;
                            vertical-align: -0.1cm;
                        }
                    }

                    .desc-right {
                        float: left;
                        font-size: 0.5cm;
                        margin-left: 1cm;
                        position: relative;
                    }
                }
            }
        }
    }

    .bottom {
        padding: 0.1cm 0.7cm;

        span {
            display: inline-block;
            width: 20%;
        }
    }
}
</style>