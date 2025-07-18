<script setup>
import { useHead } from 'nuxt/app'
import { defineAsyncComponent, onMounted, reactive } from 'vue'

defineProps({
  showhome: {
    type: Boolean,
    default: true,
  },
})
const BarTitl = defineAsyncComponent(() => import(`./BarTitle.vue`))
const Menu = defineAsyncComponent(() => import(`./Menu.vue`))

onMounted(() => {
  $(() => {
    $('#searchbtn').click(() => {
      const txt = $('#q').val().replace(/(^\s*)|(\s*$)/g, '')
      if (txt === '输入搜索内容' || txt === '请输入搜索内容' || txt === '') {
        return false
      }
    })
  })
})
</script>

<template>
  <header class="bar">
    <BarTitl :showhome />
    <div class="bar-header" id="bar_header">
      <div class="logo">
        <NuxtLink to="/">
          <img src="//www.ieduchina.com/statics/pcc/img/logo_header.png?v=1" alt="国际教育网" />
        </NuxtLink>
      </div>
      <div class="search-box">
        <form id="search" action="//www.ieduchina.com/search/index.html" method="get">
          <input id="q" class="search-content" name="searchkey" placeholder="搜索 学校/文章/机构" type="text" value="">
          <button id="searchbtn" class="search-submit" type="submit">
            <img src="//www.ieduchina.com/statics/pcc/img/search1.png?v=1">
            搜索
          </button>
        </form>
      </div>
      <div class="tel">
        <a>内地：400-900-8516<br>香港：+852 3565 1936</a>
      </div>
    </div>
    <component :is="Menu" />
  </header>
</template>

<style lang="less">
body .bar {
  width: 100%;
  min-width: 1280px;
  background-color: #ffffff;
}

body .bar .bar-header {
  width: 1280px;
  margin: 0 auto;
  height: 96px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body .bar .bar-header .logo {
  width: 200px;
  height: 44px;
  margin-top: 26px;
}

body .bar .bar-header .logo h1 {
  height: 44px;
}

body .bar .bar-header .logo h1 img {
  height: 44px;
}

body .bar .bar-header .search-box {
  margin-top: 28px;
  width: 521px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  line-height: 40px;
  position: relative;
  overflow: hidden;
}

body .bar .bar-header .search-box form {
  width: 540px;
  height: 40px;
}

body .bar .bar-header .search-box form input.search-content {
  padding: 0 108px 0 10px;
  height: 40px;
  width: 520px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  background: #fff;
  appearance: none;
  outline: none;
  box-shadow: 0 0 0 1000px white inset;
}

body .bar .bar-header .search-box form input.search-content::-webkit-input-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content::-moz-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content:-ms-input-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content::-ms-input-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .bar .bar-header .search-box form input.search-content::placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .bar .bar-header .search-box form button.search-submit {
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  outline: none;
  cursor: pointer;
  width: 97px;
  height: 40px;
  background-color: #0770d1;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
}

body .bar .bar-header .search-box form button.search-submit img {
  vertical-align: -3px;
  padding-right: 6px;
}

body .bar .bar-header .search-box form a {
  position: absolute;
  right: 110px;
  top: 0;
  z-index: 10;
  font-weight: 400;
  font-size: 14px;
  color: #0770d1;
  letter-spacing: 1px;
  cursor: pointer;
  line-height: 40px;
  text-decoration: underline
}

body .bar .bar-header .tel {
  line-height: 31px;
  margin-right: 0;
  width: 200px;
  text-align: left;
  margin-top: 18px;
}

body .bar .bar-header .tel a {
  position: relative;
  font-size: 18px;
  font-weight: initial;
  color: #333333;
}

body .bar .bar-header .tel a::before {
  position: absolute;
  content: '';
  left: -37px;
  top: 15px;
  z-index: 10;
  width: 22px;
  height: 24px;
  background-image: url(https://www.ieduchina.com/statics/pcc/img/cc9595ab.png);
  background-size: 22px 24px;
}

@-webkit-keyframes an {
  0% {
    top: 40px;
    opacity: 0
  }

  100% {
    top: 36px;
    opacity: 1
  }
}

@keyframes an {
  0% {
    top: 40px;
    opacity: 0
  }

  100% {
    top: 36px;
    opacity: 1
  }
}
</style>
