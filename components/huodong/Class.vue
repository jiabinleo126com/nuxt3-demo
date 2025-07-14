<script setup lang="ts">
import { reactive } from 'vue'
const menu = reactive([
  {
    text: "全部",
    link: "/huodong"
  },
  {
    text: "校园开放日",
    link: "/huodong?type=6"
  },
  {
    text: "夏/冬令营",
    link: "/huodong?type=2"
  },
  {
    text: "直播",
    link: "/huodong?type=5"
  },
  {
    text: "分享会",
    link: "/huodong?type=3"
  },
  {
    text: "其他活动",
    link: "/huodong?type=7"
  },
])
</script>

<template>
  <div class="menu">
    <span>活动类别</span>
    <div class="hd_links">
      <NuxtLink v-for="(item, index) in menu" :key="index" :to="item.link" :class="{ active: item.link === $route.fullPath }">{{ item.text }}</NuxtLink>
    </div>
  </div>
</template>

<style lang="less">
.menu {
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 10px
}

.menu span {
  padding: 0 20px;
  border-right: solid 1px #d2d2d2;
  font-size: 18px;
  font-weight: 400;
  color: #333
}

.menu .hd_links {
  padding-left: 20px
}

.menu .hd_links a {
  margin-right: 40px;
  font-size: 18px;
  font-weight: 400;
  color: #666
}

.menu .hd_links a.active {
  position: relative;
  color: #076fcb
}

.menu .hd_links a.active::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -12px;
  width: 100%;
  height: 4px;
  background-color: #076fcb
}
</style>