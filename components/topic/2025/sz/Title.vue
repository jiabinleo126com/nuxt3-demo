<script setup>
defineProps({
    cn: {
        type: String
    },
    en: {
        type: String
    }
})
</script>
<template>
    <div :class="$style.title">
        <h2>
            <span>
                {{ cn }}
            </span>
        </h2>
        <p>
            {{ en }}
        </p>
    </div>
</template>
<style lang="less" module>
.title {
    background: url("/assets/topic/2025/sz/标题.png") center/contain no-repeat;
    text-align: center;

    h2 {
        span {
            font-weight: bold;
            font-size: 48px;
            // color: #EDB874;
            letter-spacing: 2px;
            background: linear-gradient(to right,
                    #FCE8CF 0%,
                    #EDB773 40%);
            background-clip: text;
            color: transparent;
        }
    }

    p {
        font-weight: 400;
        font-size: 20px;
        color: #999999;
        word-spacing: 8px;
        letter-spacing: 8px;
        margin-top: 5px;
    }
}
</style>