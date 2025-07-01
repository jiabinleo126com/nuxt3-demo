<template>
    <div :class="['ld', className]">
        <h3 en="characteristic" class="title">亮点特色</h3>
        <ul>
            <li v-for="(str, index) in data">
                <span :style="'background-color:' + (index % 2 == 0 ? color1 : color2)">亮点{{ index + 1 }}</span>
                {{ str }}
            </li>
        </ul>
    </div>
</template>
<script setup>
defineProps({
    data: {
        type: Array,
        default: []
    },
    className: {
        type: String
    }
})
</script>
<style lang="less">
.ld {
    width: 1280px;
    margin: 80px auto 0;
    padding-bottom: 64px;

    &.cf3ad25 {
        ul {
            li {
                span {
                    background-color: #f3ad25;
                }

                &:nth-of-type(even) {
                    span {
                        background-color: #873b03;
                    }
                }
            }
        }
    }
    &.c273770 {
        ul {
            li {
                span {
                    background-color: #273770;
                }

                &:nth-of-type(even) {
                    span {
                        background-color: #A13424;
                    }
                }
            }
        }
    }
    &.c003d96 {
        ul {
            li {
                span {
                    background-color: #f99501;
                }

                &:nth-of-type(even) {
                    span {
                        background-color: #003d96;
                    }
                }
            }
        }
    }

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
                // background-color: var(--primary-color);
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

            // &:nth-of-type(even) {
            //     span {
            //         background-color: #f99501;
            //     }
            // }
        }
    }
}

// .ld ul li:nth-of-type(even) span {
// background-color: #A13424;
// <!-- } -->

// .ld ul li span {
// background-color: var(--primary-color);</style>