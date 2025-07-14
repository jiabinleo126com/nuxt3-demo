<template>
  <div class="top">
    <h2 class="title">活动专区</h2>
    <div class="form-search">
      <form action="https://www.ieduchina.com/huodong/" method="get" class="layui-form">
        <div class="layui-inline">
          <div class="layui-input-inline">
            <select id="prov" name="provinceid" lay-filter="provinceid">
              <option v-for="item in prov" :key="item.value" :value="item.value">{{ item.text }}</option>
            </select>
          </div>
        </div>
        <div class="layui-inline">
          <div class="layui-input-inline">
            <select id="city" name="cityid">
              <option value="">城市</option>
            </select>
          </div>
        </div>
        <div class="layui-inline">
          <div class="layui-input-inline">
            <input name="date" type="text" value="" id="date" class="layui-input" placeholder="年月" readonly="readonly">
          </div>
        </div>
        <div class="layui-inline">
          <div class="layui-input-inline">
            <input class="layui-input" name="keyword" value="" placeholder="主办单位" type="text">
          </div>
        </div>
        <button type="submit" lay-filter="submit" lay-submit="">
          <img :src="search" alt="搜索">
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import search from '~/assets/huodong/search.png';
const prov = reactive([
  {
    text: "省份",
    value: ""
  },
  {
    text: "北京",
    value: "2"
  },
  {
    text: "上海",
    value: "3"
  },
  {
    text: "香港",
    value: "34"
  },
  {
    text: "广东",
    value: "21"
  },
  {
    text: "天津",
    value: "4"
  },
  {
    text: "江苏",
    value: "12"
  },
  {
    text: "浙江",
    value: "13"
  },
  {
    text: "安徽",
    value: "14"
  },
  {
    text: "福建",
    value: "15"
  },
  {
    text: "湖北",
    value: "19"
  },
  {
    text: "湖南",
    value: "20"
  },
  {
    text: "四川",
    value: "24"
  },
  {
    text: "辽宁",
    value: "9"
  },
  {
    text: "吉林",
    value: "10"
  },
  {
    text: "山东",
    value: "17"
  },
  {
    text: "河南",
    value: "18"
  },
  {
    text: "广西",
    value: "22"
  },
  {
    text: "海南",
    value: "23"
  },
  {
    text: "云南",
    value: "26"
  },
  {
    text: "重庆",
    value: "5"
  }
])
</script>
<style lang="less">
body .x-content .container .left h2.title {
  position: relative;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #076fcb;
  padding-left: 28px;
  margin: 30px 0 30px;
  height: 32px
}

body .x-content .container .left h2.title::before {
  position: absolute;
  top: -2px;
  left: 7px;
  content: "";
  width: 8px;
  height: 32px;
  background: #076fcb;
  border-radius: 4px
}

.form-search {
  width: 900px
}

.form-search .layui-form {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.form-search .layui-form .layui-inline {
  margin-right: 10px;
}

.form-search .layui-form .layui-inline .layui-form-select dl dd.layui-this {
  background-color: #076fcb
}

.form-search .layui-form .layui-inline .layui-input-inline .layui-input {
  cursor: pointer
}

.form-search .layui-form button {
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0)
}

.form-search .layui-form button img {
  cursor: pointer;
  width: 38px;
  height: 38px;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px 0
}
</style>