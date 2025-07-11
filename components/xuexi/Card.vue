<script setup>
defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="wrap_1809">
    <div v-for="(items, index) in data" :key="index" class="box_1809">
      <div class="title_1809">
        {{ items.title }}
      </div>
      <p class="desc" v-html="items.tip"></p>
      <ul>
        <li v-for="(item, order) in items.list" :key="order">
          <img :src="item.image" :alt="item.title" />
          <div class="text" :xuexi_id="item.id" :title="item.title">
            <p>{{ item.title }}</p>
            <a :href="item.path" target="_blank"><button>开始测评</button></a>
          </div>
        </li>
      </ul>
    </div>
    <div class="box_1809">
      <div class="title_1809">
        数学竞赛
      </div>
      <ul>
        <li>
          <img src="https://zhaosheng.ieduchina.com/Upload/File/202309/650bbac782df2.png" alt="美国AMC官方入口" />
          <div class="text" xuexi_id="17" title="美国AMC官方入口">
            <p>美国AMC官方入口</p>
            <a class="gw"><button>开始测评</button></a>
          </div>
        </li>
        <li>
          <img src="https://zhaosheng.ieduchina.com/Upload/File/202309/650d380310ff7.png" alt="Euclid欧几里得数学竞赛" />
          <div class="text" xuexi_id="20" title="Euclid欧几里得数学竞赛">
            <p>Euclid欧几里得数学竞赛</p>
            <a class="gw"><button>开始测评</button></a>
          </div>
        </li>
        <li>
          <img src="https://zhaosheng.ieduchina.com/Upload/File/202309/650d38362f3d8.png" alt="UKMT 英国数学思维挑战" />
          <div class="text" xuexi_id="21" title="UKMT 英国数学思维挑战">
            <p>UKMT 英国数学思维挑战</p>
            <a class="gw"><button>开始测评</button></a>
          </div>
        </li>
        <li>
          <img src="https://zhaosheng.ieduchina.com/Upload/File/202309/650bbaf2345d7.png" alt="澳洲AMC官方入口" />
          <div class="text" xuexi_id="18" title="澳洲AMC官方入口">
            <p>澳洲AMC官方入口</p>
            <a class="gw"><button>开始测评</button></a>
          </div>
        </li>
        <li>
          <img src="https://zhaosheng.ieduchina.com/Upload/File/202309/650bbb1256762.png" alt="袋鼠数学竞赛官方入口" />
          <div class="text" xuexi_id="19" title="袋鼠数学竞赛官方入口">
            <p>袋鼠数学竞赛官方入口</p>
            <a class="gw"><button>开始测评</button></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap_1809 .box_1809 {
  width: 1280px;
  background: #FFFFFF;
  border-radius: 8px;
  margin-top: 25px;
  padding: 30px 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.wrap_1809 .box_1809 .title_1809 {
  font-size: 24px;
  font-weight: bold;
  color: #333333;
}

.wrap_1809 .box_1809 .title_1809::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 24px;
  background: #0770D1;
  border-radius: 10px;
  vertical-align: -4px;
  margin-right: 7px;
}

.wrap_1809 .box_1809 p.desc {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
  margin-top: 20px;
}

.wrap_1809 .box_1809 ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.wrap_1809 .box_1809 ul li {
  width: 400px;
  height: 140px;
  background: #F5F5F5;
  border-radius: 4px;
  padding: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 20px;
  margin-right: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.wrap_1809 .box_1809 ul li:hover {
  -webkit-transform: translateY(-4px);
  transform: translateY(-4px);
}

.wrap_1809 .box_1809 ul li:nth-of-type(3n) {
  margin-right: 0;
}

.wrap_1809 .box_1809 ul li img {
  width: 187px;
  height: 120px;
  border-radius: 4px;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover;
  margin-right: 10px;
}

.wrap_1809 .box_1809 ul li .text {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.wrap_1809 .box_1809 ul li .text p {
  font-size: 18px;
  font-weight: 400;
  color: #333333;
  line-height: 26px;
}

.wrap_1809 .box_1809 ul li .text a {
  position: absolute;
  right: 0;
  bottom: 0;
}

.wrap_1809 .box_1809 ul li .text a button {
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  width: 82px;
  height: 26px;
  background: #0770D1;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #0770D1;
  cursor: pointer;
}

.wrap_1809 .box_1809:first-of-type {
  margin-top: 0;
}
</style>
