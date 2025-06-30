<template>
    <div class="ld">
        <h3 en="characteristic" class="title">亮点特色</h3>
        <ul>
            <li v-for="(str, index) in data">
                <span>亮点{{ index + 1 }}</span>
                {{ str }}
            </li>
        </ul>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const data = reactive(["独家定制香港名校探访团，深入体验香港六所顶尖中学", "路线覆盖香港核心教育区，一站式领略名校风采", "国际教育网专家团队讲解，深度解析学校特色与教学理念", "校长老师全程相伴导览，探索校园细节，饱览校园风光", "校长亲授普通话升学讲座，精准对接香港教育体系", "前瞻布局择校规划蓝图，量身定做个性化升学路径"])
</script>
<style lang="less">
.ld {
    width: 1280px;
    margin: 80px auto 0;
    padding-bottom: 64px;
}

.ld ul {
    margin-top: 50px;
}

.ld ul li {
    height: 48px;
    margin-top: 30px;
    line-height: 48px;
    font-size: 16px;
    background-color: #f6f6f6;
    -webkit-clip-path: polygon(74px -118px, 200% 100%, 200% 100%, 0px 50px);
    clip-path: polygon(74px -118px, 200% 100%, 200% 100%, 0px 50px);
}

.ld ul li:nth-of-type(even) span {
    background-color: #A13424;
}

.ld ul li span {
    background-color: var(--primary-color);
    margin-right: 47px;
    font-size: 22px;
    font-weight: 500;
    width: 142px;
    height: 48px;
    display: inline-block;
    color: #fff;
    text-align: center;
    -webkit-clip-path: polygon(74px -118px, 166px -55px, 100px 100px, 0px 50px);
    clip-path: polygon(74px -118px, 166px -55px, 100px 100px, 0px 50px);
}
</style>