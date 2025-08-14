<script setup>
defineProps({
  index: {
    type: String,
    default: ""
  }
})
const menu = [
  {
    title: "首页",
    path: "/m/zhan"
  },
  {
    title: "签到码",
    path: "/m/zhan/show"
  }
]
</script>
<template>
  <footer :class="$style.footer">
    <template v-for="(item, num) in menu">
      <a v-if="index == num">{{ item.title }}</a>
      <a v-else :href="item.path">{{ item.title }}</a>
    </template>
  </footer>
</template>
<style lang="less" module>
.footer {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 780rem;
  display: flex;
  justify-content: space-between;
  height: 172rem;
  border-top: solid 1rem #ececec;
  background-color: #fff;
  padding-bottom: 60rem;

  a {
    height: 112rem;
    width: 50%;
    font-weight: bold;
    font-size: 24rem;
    text-align: center;
    padding-top: 76rem;
    color: #101E5D;

    &[href] {
      color: #86909c
    }

    &:first-of-type {
      width: 100%;
      background: url('~/assets/m/zhan/home-5-line@1.5x.png') center 16rem/56rem 56rem no-repeat
    }

    &:first-of-type[href] {
      background-image: url('~/assets/m/zhan/home-5-line@1.5x (1).png')
    }

    &:last-of-type {
      width: 100%;
      background: url('~/assets/m/zhan/qr-scan-2-line@1.5x (1).png') center 16rem/56rem 56rem no-repeat
    }

    &:last-of-type[href] {
      background-image: url('~/assets/m/zhan/qr-scan-2-line@1.5x.png')
    }
  }
}
</style>