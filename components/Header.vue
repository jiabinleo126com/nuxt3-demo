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

const hkTopic = reactive([
  {
    title: '25年07月:圣若瑟英文中学、中华基督教会基道中学等8所学校',
    path: '/topic/2025/hk14',
  },
  {
    title: '25年05月:可风中学、世界龙冈学校刘皇发中学等10所学校',
    path: '/topic/2025/hk13',
  },
  {
    title: '25年01月:中华基金中学、迦密爱礼信中学等7所学校',
    path: '/topic/2025/hk12',
  },
  {
    title: '24年12月:元朗公立中学校友会邓英业小学等5所学校',
    path: '/topic/2024/hk11/',
  },
  {
    title: '24年12月:中华基督教会铭基书院等4所学校',
    path: 'https://www.ieduchina.com/topic/2024/hk8/',
  },
  {
    title: '24年10月:香岛中学、新会商会陈白沙纪念中学等9所学校',
    path: 'https://www.ieduchina.com/topic/2024/hk7/',
  },
  {
    title: '24年07月:孔圣堂礼仁书院等5所本地学校(访校研学)',
    path: 'https://www.ieduchina.com/topic/2024/hkyx1/',
  },
  {
    title: '24年07月:汇基书院（东九龙）、播道书院等4所学校',
    path: 'https://www.ieduchina.com/topic/2024/hk6/',
  },
  {
    title: '24年05月:沙田培英、保良局罗杰承(一九八三)等15所学校',
    path: 'https://www.ieduchina.com/topic/2024/hk5/',
  },
  {
    title: '24年01月:香港UWC、播道书院等8所学校',
    path: 'https://www.ieduchina.com/topic/2024/hk4/',
  },
  {
    title: '23年12月:中华基督教会协和书院等6所学校+教育展',
    path: 'https://www.ieduchina.com/topic/2023/hk3/',
  },
  {
    title: '23年10月:保良局百周年李兆忠纪念中学等6所学校',
    path: 'https://www.ieduchina.com/topic/2023/xg/',
  },
  {
    title: '23年07月:圣保禄学校、英华书院、九龙真光等10所学校 ',
    path: 'https://www.ieduchina.com/topic/2023/hk/',
  },
])

const InternationalEducationForum = reactive([
  {
    path: '/topic/2025/sz/',
    title: '2025年05月',
  },
  {
    path: '//www.ieduchina.com/topic/2024/sz/',
    title: '2024年10月',
  },
  {
    path: '//www.ieduchina.com/topic/2024/shenzhen/',
    title: '2024年03月',
  },
  {
    path: '//www.ieduchina.com/topic/2023/shenzhen/',
    title: '2023年10月',
  },
  {
    path: '//www.ieduchina.com/topic/2022/shenzhen/',
    title: '2022年04月',
  },
  {
    path: '//www.ieduchina.com/topic/2020/1017_SZ/',
    title: '2020年10月',
  },
  {
    path: '//www.ieduchina.com/topic/2020/711_SZ/',
    title: '2020年07月',
  },
  {
    path: '//www.ieduchina.com/topic/2020/3_SZ/',
    title: '2020年03月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/11_SZ/',
    title: '2019年11月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/07_SZ/',
    title: '2019年07月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/05_SH/',
    title: '2019年05月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/04_SZ/',
    title: '2019年04月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/03_GZ/',
    title: '2019年03月',
  },
  {
    path: '//www.ieduchina.com/topic/2019/12_SZ/',
    title: '2018年12月',
  },
  {
    path: '//www.ieduchina.com/topic/2018/5_GZ/',
    title: '2018年05月',
  },
  {
    path: '//www.ieduchina.com/topic/2018/4_SZ/',
    title: '2018年04月',
  },
  {
    path: '//www.ieduchina.com/topic/2017/11_GZ/',
    title: '2017年11月',
  },
  {
    path: '//www.ieduchina.com/topic/2017/10_SZ/',
    title: '2017年10月',
  },
])
useHead({
  script: [
    {
      src: '/s2hk.js',
      type: 'text/javascript',
      defer: true,
      body: true
    },
  ],
})

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
