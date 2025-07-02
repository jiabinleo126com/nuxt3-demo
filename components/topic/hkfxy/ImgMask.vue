<template>
    <div class="img-mask">
        <img src="" alt="">
        <div class="close-img-mask"></div>
        <div class="arr">
            <span class="left"></span>
            <span class="right"></span>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    var previewLength = $("img[preview]").length;
    $.each($("img[preview]"), function (index, item) {
        $(item).attr("index", index);
    });
    var previewIndex = 0;
    $(document).on("click", "img[preview]", function () {
        var src = $(this).attr("preview");
        $(".img-mask img").attr("src", src);
        $(".img-mask").addClass("show");
        previewIndex = Number($(this).attr("index"));
    });
    $(document).on("click", ".close-img-mask", function () {
        $(".img-mask").removeClass("show");
        $(".img-mask img").attr("src", "");
    });
    $(".img-mask").on("click", function (e) {
        if (e.target == this) {
            $(this).removeClass("show");
            $(".img-mask img").attr("src", "");
        }
    });
    $(".arr").on("click", "span", function () {
        var img = "";
        $(".img-mask img").attr("src", "");
        if ($(this).hasClass("left")) {
            previewIndex = previewIndex - 1;
        }
        else if ($(this).hasClass("right")) {
            previewIndex = previewIndex + 1;
        }
        if (previewIndex < 0) {
            previewIndex = previewLength - 1;
        }
        else if (previewIndex > previewLength - 1) {
            previewIndex = 0;
        }
        img = $("img[preview][index='" + previewIndex + "']");
        $(".img-mask img").attr("src", img.attr("preview"));
    });

    new Swiper('.case_swiper', {
        effect: 'coverflow',
        centeredSlides: true,
        spaceBetween: -80,
        slidesPerView: 2,
        loop: true,
        autoplay: 500,
        coverflowEffect: {
            rotate: 0,
            stretch: 60.8,
            depth: 80,
            modifier: 3,
            slideShadows: true,
        }
    });
})
</script>
<style lang="less">
.img-mask {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1100;
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

.img-mask.show {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.img-mask.show img {
    height: 80vh;
    -o-object-fit: contain;
    object-fit: contain;
    -o-object-position: center;
    object-position: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.img-mask.show .close-img-mask {
    position: absolute;
    left: 50%;
    bottom: 4vh;
    margin-left: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    background: url("//www.ieduchina.com/topic/2024/hk7/images/a4ba9f2a.png") center / contain no-repeat;
}

.img-mask.show .arr span {
    position: absolute;
    top: 50%;
    margin-top: -30px;
    width: 60px;
    height: 60px;
    background: url(//www.ieduchina.com/topic/2025/hk13/images/e113f82e.png) center / contain no-repeat;
    cursor: pointer;
}

.img-mask.show .arr span.left {
    left: 5vw;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.img-mask.show .arr span.right {
    right: 5vw;
}

img[preview] {
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
}
</style>