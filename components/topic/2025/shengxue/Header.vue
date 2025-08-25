<script setup>
import logo from '~/assets/topic/2025/shengxue/logo@1x.png'
</script>
<template>
  <header :class="$style.header">
    <div :class="$style.con">
      <a href="">
        <img :src="logo" alt=""></img>
      </a>
      <menu>
        <a class="ywjs">业务介绍</a>
        <a class="jxtd">教学团队</a>
        <a class="fwlc">服务流程</a>
        <a class="xqhj">校区环境及地址</a>
        <a class="lxwm">联系我们</a>
      </menu>
    </div>
  </header>
</template>
<style lang="less" module>
.header {
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100%;
  background-color: #083A83;
  display: flex;
  justify-content: center;

  .con {
    width: 1200px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 138px;
      height: 56px;
      object-fit: contain;
      object-position: center;
    }

    menu {
      a {
        font-size: 18px;
        font-weight: bold;
        color: #FFFFFF;
        margin-right: 26px;
        cursor: pointer;
      }
    }
  }
}
</style>