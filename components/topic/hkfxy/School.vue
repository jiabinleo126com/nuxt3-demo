<template>
    <section class="school-wrap">
        <div class="school" v-if="data.length">
            <component :is="Title" en="SCHOOLS" cn="参与院校" />
            <ul>
                <li v-for="(item, index) in data" :key="index" :style="'width:' + width">
                    <a :href="`${item.path}?tgform=香港教育文化之旅`" target="_blank">
                        <img :src="item.logo" :alt="item.name">
                        <p>{{ item.name }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script setup>
defineProps({
    data: [],
    width: {
        type: String,
        default: "20%"
    }
})
import { defineAsyncComponent } from 'vue';
const Title = defineAsyncComponent(() => import('./Title.vue'))
</script>

<style lang="less" scoped>
.school-wrap {
    background-color: var(--primary);

    .school {
        width: 1280px;
        margin: 0 auto;
        padding: 80px 0 65px;

        .title {
            color: #fff;

            &::after {
                color: var(--next);
            }
        }

        ul {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            padding-top: 8px;
        }
    }

    .school ul li {
        text-align: center;
        margin-top: 40px;
        width: 20%;
    }

    .school ul li:first-of-type img {
        padding: 10px;
    }

    .school ul li img {
        width: 218px;
        height: 90px;
        -o-object-fit: contain;
        object-fit: contain;
        -o-object-position: center;
        object-position: center;
        background-color: #fff;
        border-radius: 6px;
    }

    .school ul li p {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        padding-top: 20px;
    }
}
</style>
