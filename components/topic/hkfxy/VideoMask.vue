<template>
    <div class="mask">
        <div class="wrap">
            <img src="//www.ieduchina.com/topic/2024/hk7/images/a4ba9f2a.png" alt="">
            <div class="video-play">
                <video height="405" id="mask_video" playsinline poster="" preload="auto" value="" webkit-playsinline
                    width="520"></video>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style lang="less">
.mask {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 111;
    background-color: rgba(0, 0, 0, 0.5);

    .wrap {
        position: absolute;
        background-color: #000;
        width: 1200px;
        height: 600px;
        left: 50%;
        top: 50%;
        z-index: 100;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        &>img {
            width: 32px;
            height: 32px;
            -o-object-position: center;
            object-position: center;
            -o-object-fit: contain;
            object-fit: contain;
            position: absolute;
            right: -30px;
            top: -30px;
            z-index: 100;
            cursor: pointer;
        }

        .video-play {
            width: 100%;
            height: 100%;

            .tcplayer {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
