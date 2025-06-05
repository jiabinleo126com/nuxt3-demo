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
const data = reactive(["独家定制香港中学探访团，深入体验香港十所顶尖中学", "路线覆盖香港核心名校区，一站式领略学校风采", "名师带队讲解，深度解析学校特色与教学理念", "校长老师全程相伴导览，探索校园细节，饱览校园风光", "校长亲授普通话升学讲座，精准把握香港教育体系脉络", "前瞻布局择校规划蓝图，量身定制个性化升学路径"])
</script>
<style lang="less">
.ld {
    width: 1280px;
    margin: 80px auto 0;
    padding-bottom: 64px;

    ul {
        margin-top: 50px;

        li {
            height: 48px;
            margin-top: 30px;
            line-height: 48px;
            font-size: 16px;
            background-color: #f6f6f6;
            clip-path: polygon(74px -118px, 200% 100%, 200% 100%, 0px 50px);

            span {
                background-color: var(--primary-color);
                margin-right: 47px;
                font-size: 22px;
                font-weight: 500;
                width: 142px;
                height: 48px;
                display: inline-block;
                color: #fff;
                text-align: center;
                clip-path: polygon(74px -118px, 166px -55px, 100px 100px, 0px 50px);
            }

            &:nth-of-type(even) {
                span {
                    background-color: #f99501;
                }
            }
        }
    }
}
</style>