<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
const Title = defineAsyncComponent(() => import(`~/components/topic/2025/sz/Title.vue`))
import image from '~/assets/topic/2025/sz/网页新闻稿画板pc.jpg'
</script>
<template>
  <div class="ltxw">
    <component :is="Title" cn="论坛新闻" en="Forum news" />
    <div class="con">
      <div class="left">
        <img :src="image" alt="论坛新闻" height="545" width="380">
      </div>
      <div class="right"><span>部分媒体报导</span>
        <div class="links">
          <a href="https://appdetail.netwin.cn/dc-h5s/dc_new/newdetail?id=s682053d9e4b0da3882cf809d" target="_blank"
            rel="nofollow">深圳商报：<p>300+家庭与香港校长“零距离”对话，共绘孩子升学蓝图！</p></a>
          <a href="https://site.szplus.com/content/s6822f788e4b0a181ee165222.html" target="_blank" rel="nofollow">深圳晚报：
            <p>300余家庭对话深港教育界，共探大湾区国际升学新图景</p></a>
          <a href="https://www.sznews.com/news/content/mb/2025-05/12/content_31565085.htm" target="_blank"
            rel="nofollow">深圳新闻网：<p>共绘孩子升学蓝图 全球多元化升学论坛·大湾区国际教育名校择校展举办</p></a>
          <a href="https://www.dutenews.com/n/article/8837080?from=app&client=1" target="_blank" rel="nofollow">深圳特区报：
            <p>与香港校长“零距离”对话，大湾区国际教育名校择校展在深举行</p></a>
          <a href="https://m.mp.oeeee.com/a/BAAFRD0000202505121085749.html" target="_blank" rel="nofollow">南方都市报：<p>
              探讨未来教育发展方向，300+家庭与名校校长面对面交流</p></a>
          <a href="https://appimg.allcitysz.com/template/displayTemplatev1/dist/index.html?id=851112&columnId=0#/newsDetail/851112/0"
            target="_blank" rel="nofollow">晶报：<p>这场全球多元化升学论坛在深举行！超300组家庭参与共绘孩子升学蓝图</p></a>
          <a href="https://www.toutiao.com/article/7503090580860174885/" target="_blank" rel="nofollow">今日头条：<p>
              300+家庭与香港校长“零距离”对话，共绘孩子升学蓝图！</p></a>
          <a href="https://3g.k.sohu.com/t/n888654283?serialId=21a50d41093b6fb9285422ab36a10552&showType="
            target="_blank" rel="nofollow">搜狐新闻：<p>300+家庭与香港校长“零距离”对话，共绘孩子升学蓝图！</p></a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.ltxw {
  padding: 70px 0;
  min-width: 1200px;
  width: 100%;
  background-color: #F5F7FF;
}

.ltxw .con {
  margin: 70px auto 0;
  width: 1200px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.ltxw .con .left {
  width: 545px;
  height: 380px;
  background: #f7f7f7;
  text-align: center
}

// .ltxw .con .left p {
//     height: 64px;
//     line-height: 64px;
//     font-size: 20px;
//     font-weight: 500;
//     color: #333
// }

.ltxw .con .left img {
  width: 545px;
  height: 380px;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center
}

.ltxw .con .right {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 68px
}

.ltxw .con .right span {
  position: relative;
  display: block;
  width: 190px;
  height: 38px;
  line-height: 38px;
  background-color: #101e5d;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  padding-left: 24px
}

.ltxw .con .right span::after {
  position: absolute;
  right: -29px;
  bottom: -19px;
  width: 48px;
  height: 61px;
  background-color: #F5F7FF;
  content: "";
  -webkit-transform: rotateZ(34deg);
  transform: rotateZ(34deg)
}

.ltxw .con .right .links a {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 22px;
  display: block;
  white-space: nowrap
}

.ltxw .con .right .links a p {
  display: inline-block;
  font-size: 18px;
  font-weight: 400
}

.ltxw .con .right .links a:hover {
  color: #101e5d
}
</style>