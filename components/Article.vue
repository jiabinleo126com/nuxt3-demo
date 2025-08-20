<script setup>
defineProps({
  data: {
    type: String,
    default: ""
  }
})

useHead({
  script: [
    {
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://www.ieduchina.com/statics/pcc/js/swiper.min.js',
      type: 'text/javascript',
      defer: true,
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://www.ieduchina.com/statics/pc/css/swiper.min.css',
    },
  ],
})
</script>

<template>
  <Header />
  <div id="content" class="com-detail-width clearfix">
    <!-- 左侧内容 -->
    <div id="main" class="w640 fl">
      <p class="breadnav">
        <a href="//www.ieduchina.com" target="_blank">首页</a>
        &gt;
        <a href='/zt/' target='_blank'>教育综合</a>
        &gt;<span>正文</span>
      </p>
      <div class="clearfix  mb15" style="line-height:36px;"></div>
      <div id="pc_ad_news">
      </div>
      <div id="ad_news_banner">
      </div>
      <div class="article mb12 share-cont">
        <h1>{{ data?.title }}</h1>
        <div class="desc-box mb12">
          <div class="desc-new">
            <div class="user-img">
              <a :href="`/home/${data?.user?.id}`" rel="nofollow" target="_blank">
                <img :src="data?.user?.image" :alt="data?.user?.name" width="68" height="68" class="vm mr5 yuantu">
              </a>
            </div>
            <div class="descs">
              <p class="username">
                <a href="//www.ieduchina.com/home/4920.html" rel="nofollow" target="_blank">
                  {{ data?.user?.name }}
                </a>
                <img src="//www.ieduchina.com/statics/pcc/img/d6a04e5c.png" alt="" class="original" height="16"
                  width="40">
              </p>
              <div class="nums">
                <p>{{ data?.time }}</p>
                <p>发布于广东</p>
              </div>
            </div>
          </div>
          <div class="fr m12">
            <a href="//www.ieduchina.com/mp/login_member.html" rel="nofollow" target="_blank">我要投稿</a>
          </div>
          <div class="clear"></div>
        </div>
        <div class="clearfix" id="main-cont">
          <div class="con" v-html="data?.description">

          </div>
        </div>
        <p id="link-href" style="color:#919191;font-size:13px;clear:both;">声明：
          本文内容为国际教育号作者发布，不代表国际教育网的观点和立场，本平台仅提供信息存储服务。
        </p>
        <div id="news_ewm">
        </div>
      </div>
      <!-- end of article -->
      <!--评论-->
      <div class="z-comment">
        <h5>最新评论</h5>
        <form>
          <textarea class="z-textarea" name="content" placeholder="请输入您想说的话" nullmsg="请输入您想说的话"></textarea>
          <div class="z-btn">
            <p class="error-tips"></p>
            <button id="zpublish">发表评论</button>
          </div>
          <input type="hidden" name="newsid" id="newsid" value="130671">
        </form>
      </div>
    </div>
    <!-- 右侧内容 -->
    <div id="side" class="fr w280">
      <!-- 公众号 -->
      <div class="iedu-side-box mar-bot28 mt15">
        <div class="gzh_wrap">
          <a href="//www.ieduchina.com/home/4920.html" rel="nofollow" target="_blank">
            <img src="https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg" alt="选校砖家" class="gzh_tx">
            <p class="gzh_name">选校砖家</p>
          </a>
          <div class="gzh_gz" id="iedu_media_attention" name="271,4920" onclick=" guanzhu(271,4920) ">
            <i>+</i>
            关注
          </div>
        </div>
        <ul class="gzh_list">
          <li>
            <span></span>
            <a href="//www.ieduchina.com/zt/202507/130620.html" target="_blank">越扒越心惊! 多家DSE备考机构成绩“黑幕”，被家长拆穿？</a>
          </li>
          <li>
            <span></span>
            <a href="//www.ieduchina.com/zt/202507/130575.html" target="_blank">跨境港宝成DSE状元！赴港读书=买罪受？深圳家长不服</a>
          </li>
          <li>
            <span></span>
            <a href="//www.ieduchina.com/zt/202507/130528.html" target="_blank">广深DSE终极PK！深圳培侨杀回来了！黑马新校赶超广州民心？</a>
          </li>
        </ul>
      </div>
      <!-- 院校库 -->
      <div id="activity_hot">
      </div>
      <!-- 学校 -->
      <div id="iedu-right-form" class="iedu-side-box school">
        <form action="" id="apply2">
          <input type="hidden" value="国际教育网文章详情页PC版" name="mark">
          <div class="">
            <div class="f">
              <input type="text" name="name" placeholder="请输入孩子姓名" class="name">
            </div>
            <div class="f select">
              <select name="grade" class="grade" style="color: rgb(102, 102, 102);">
                <option value="0" style="color: rgb(0, 0, 0);">请选择就读年级</option>
                <option value="幼儿园" style="color: rgb(0, 0, 0);">幼儿园</option>
                <option value="一年级" style="color: rgb(0, 0, 0);">一年级</option>
                <option value="二年级" style="color: rgb(0, 0, 0);">二年级</option>
                <option value="三年级" style="color: rgb(0, 0, 0);">三年级</option>
                <option value="四年级" style="color: rgb(0, 0, 0);">四年级</option>
                <option value="五年级" style="color: rgb(0, 0, 0);">五年级</option>
                <option value="六年级" style="color: rgb(0, 0, 0);">六年级</option>
                <option value="七年级" style="color: rgb(0, 0, 0);">七年级</option>
                <option value="八年级" style="color: rgb(0, 0, 0);">八年级</option>
                <option value="九年级" style="color: rgb(0, 0, 0);">九年级</option>
                <option value="十年级" style="color: rgb(0, 0, 0);">十年级</option>
                <option value="十一年级" style="color: rgb(0, 0, 0);">十一年级</option>
                <option value="十二年级" style="color: rgb(0, 0, 0);">十二年级</option>
                <option value="大一" style="color: rgb(0, 0, 0);">大一</option>
                <option value="大二" style="color: rgb(0, 0, 0);">大二</option>
                <option value="大三" style="color: rgb(0, 0, 0);">大三</option>
                <option value="大四" style="color: rgb(0, 0, 0);">大四</option>
                <option value="其他" style="color: rgb(0, 0, 0);">其他</option>
              </select>
            </div>
            <div class="f searchschool">
              <input type="text" placeholder="请输入意向学校" class="want_school">
            </div>
            <div class="f">
              <input type="text" name="mobile" placeholder="请输入联系号码" class="mobile">
            </div>
            <p class="err"></p>
          </div>
          <a href="javascript:;" class="form_btn_id">
            <button type="button">为您匹配</button>
          </a>
          <a class="tel" href="tel:4009008516">
            <img src="//www.ieduchina.com/statics/pcc/img/form1tel.png" alt="4009008516">
            <span>400-900-8516</span>
          </a>
        </form>
      </div>
      <div id="news_ewm_right">
      </div>
      <div class="news-rank mt15">
        <div class="side-title2">
          <h2>
            <i></i>
            家长关注的新闻
          </h2>
        </div>
        <ul class="news-rank_list">
          <li>
            <a target="_blank" href="//www.ieduchina.com/zt/202507/130620.html">越扒越心惊! 多家DSE备考机构成绩“黑幕”，被家长拆穿？</a>
            <a>
              <img src="https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg" alt="选校砖家" />
              <span>选校砖家 · 2天前</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="//www.ieduchina.com/zt/202507/130575.html">跨境港宝成DSE状元！赴港读书=买罪受？深圳家长不服</a>
            <a>
              <img src="https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg" alt="选校砖家" />
              <span>选校砖家 · 2025年07月22日</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="//www.ieduchina.com/zt/202507/130563.html">爆雷与建校齐飞！大湾区国际教育为何“不走寻常路”？</a>
            <a>
              <img src="https://www.ieduchina.com/uploadfile/gzh/202210/166718280294136.jpg" alt="香港名校通" />
              <span>香港名校通 · 2025年07月22日</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="//www.ieduchina.com/zt/202507/130559.html">台风天里的安心答卷｜万航用专业撑起一片天</a>
            <a>
              <img src="https://www.ieduchina.com/uploadfile/toutiao/202404/1714469893471761.jpg" alt="万航帆艇" />
              <span>万航帆艇 · 2025年07月22日</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="//www.ieduchina.com/zt/202507/130528.html">广深DSE终极PK！深圳培侨杀回来了！黑马新校赶超广州民心？</a>
            <a>
              <img src="https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg" alt="选校砖家" />
              <span>选校砖家 · 2025年07月21日</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="//www.ieduchina.com/zt/202507/130482.html">中考分流太狠!一批深圳中产果断转轨国际校，普娃“逆袭“竟这么简单?</a>
            <a>
              <img src="https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg" alt="选校砖家" />
              <span>选校砖家 · 2025年07月18日</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="//www.ieduchina.com/zt/202507/130386.html">短短两天，我感受到了香港教育与内地教育的巨大鸿沟...</a>
            <a>
              <img src="https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg" alt="选校砖家" />
              <span>选校砖家 · 2025年07月16日</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="//www.ieduchina.com/zt/202507/130339.html">DSE成绩公布在即！一文秒懂查分流程，建议收藏！</a>
            <a>
              <img src="https://www.ieduchina.com/uploadfile/gzh/202210/166718280294136.jpg" alt="香港名校通" />
              <span>香港名校通 · 2025年07月15日</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="//www.ieduchina.com/zt/202507/130275.html">2025 BTEC成绩捷报！
              RoSSoer100%获无条件录取，近95%Get最高分！</a>
            <a>
              <img src="https://www.ieduchina.com/uploadfile/toutiao/202302/1677478149263183.png" alt="RoSSo艺术留学" />
              <span>RoSSo艺术留学 · 2025年07月14日</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="//www.ieduchina.com/zt/202507/130249.html">炸裂！广州琶洲竟然与贝赛思签“对赌协议”！还要带飞顶豪房价？</a>
            <a>
              <img src="https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg" alt="选校砖家" />
              <span>选校砖家 · 2025年07月11日</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 左侧分享 -->
    <div class="clearfix" style="line-height:36px;float:left;margin-left:10px;padding:0;">
      <span class="fz14 fl"></span>
      <div class='row' id="share-2"></div>
    </div>
  </div>
  <input type="hidden" id="public_userid" value="4920" />
  <input type="hidden" id="public_id" value="271" />
  <input type="hidden" id="news_page" value="1">
  <Footer />
</template>
<style lang="less">
/* 改版新样式 */
.w280 {
  width: 360px;
}

.mar-bot28 {
  margin-bottom: 28px;
}

.desc-box .desc {
  line-height: 32px;
  height: 32px;
}

.desc-box {
  border: 0px;
  height: 32px;
  line-height: 32px;
}

.desc-box .desc a span:hover {
  color: #0070c0;
}

.desc-box .fr a {
  display: inline-block;
  width: 88px;
  height: 34px;
  border: 1px solid #076FCB;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  font-family: Source Han Sans CN;
  line-height: 34px;
  color: #076FCB;
}

.desc-box .fr a:hover {
  background-color: #338EFF;
  color: #fff;
}

.desc-box .desc span {
  font-size: 14px;
  line-height: 32px;
}

.article {
  font-size: 16px;
  font-weight: 400;
  color: #4d4d4d;
  line-height: 30px;
}

.article p {
  padding-bottom: 10px;
}

#share-2 {
  position: fixed;
  top: 315px;
  left: auto;
  margin-left: -870px;
  width: 44px;
}

#share-2 .social-share-icon::before {
  content: ' ';
}

#share-2>a {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0px;
  margin-bottom: 15px;
}

.iedu-side-box {
  background-color: #F7FAFC;
  border: 0px;
  padding: 0 0;
}

.iedu-side-school,
.iedu-side-city {
  display: block;
  position: relative;
  height: 72px;
  line-height: 72px;
  padding: 0 50px 0 60px;
  color: #fff;
  font-size: 18px;
  margin-bottom: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.iedu-side-school {
  background: url(../images/side-school.png) no-repeat center center;
  background-size: 100% 100%;
}

.iedu-side-school::before {
  content: '';
  display: block;
  position: absolute;
  left: 29px;
  top: 25px;
  width: 22px;
  height: 21px;
  background: url(../images/side-school-icon.png) no-repeat center center;
  background-size: 100% 100%;
}

.iedu-side-city {
  background: url(../images/side-city.png) no-repeat center center;
  background-size: 100% 100%;
  padding-left: 63px;
}

.iedu-side-city::before {
  content: '';
  display: block;
  position: absolute;
  left: 29px;
  top: 23px;
  width: 25px;
  height: 24px;
  background: url(../images/side-city-icon.png) no-repeat center center;
  background-size: 100% 100%;
}

.iedu-side-ad img {
  width: 280px;
  height: 218px;
  margin-bottom: 16px;
  border-radius: 4px;
}

.gzh_wrap {
  text-align: center;
  padding: 26px 0;
}

.gzh_wrap .gzh_tx {
  width: 88px;
  height: 88px;
  border-radius: 50%;
}

.gzh_wrap .gzh_name {
  font-size: 24px;
  font-weight: 400;
  color: #272727;
  padding: 19px 0 22px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.gzh_wrap .gzh_gz {
  width: 128px;
  height: 38px;
  background: #FF9100;
  -webkit-box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 100px;
  cursor: pointer;
  margin: 0 auto;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 32px;
}

.gzh_wrap .gzh_gz:hover {
  background: rgba(254, 181, 6, 0.8);
  -webkit-box-shadow: 0px 3px 6px 0px rgba(254, 181, 6, 0.3);
  box-shadow: 0px 3px 6px 0px rgba(254, 181, 6, 0.3);
}

.gzh_wrap .gzh_ygz {
  background: #CCCCCC;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);
}

.gzh_wrap .gzh_ygz:hover {
  background: #CCCCCC;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);
}

// .gzh_wrap .gzh_ygz i {
/* display:none; */
// <!-- } -->

.gzh_wrap .gzh_gz i {
  display: inline-block;
  width: 30px;
  height: 30px;
  color: white;
  font-size: 36px;
  vertical-align: -2px;
}

.gzh_list {
  padding: 20px 15px 25px;
  border-top: 1px solid #e6e6e6;
}

.gzh_list li {
  position: relative;
  overflow: hidden;
  margin-bottom: 15px;
}

.gzh_list li:last-child {
  margin: 0;
}

.gzh_list li span {
  position: absolute;
  top: 8px;
  left: 0px;
  font-weight: 400;
  width: 6px;
  height: 6px;
  background: #707070;
  border-radius: 50%;
}

.gzh_list li a {
  padding-left: 15px;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  color: #707070;
  line-height: 22px;
}

.gzh_list li a:hover {
  color: #338EFF;
}

.side-title {
  overflow-x: hidden;
}

.side-title h2 {
  display: inline-block;
  position: relative;
  font-size: 18px;
  font-weight: 400;
  color: #191919;
  border: 0px;
}

.side-title h2::after {
  content: '';
  display: block;
  visibility: visible;
  width: 200%;
  height: 10px;
  position: absolute;
  left: 110%;
  right: 0;
  bottom: 0px;
  background: url(https://www.ieduchina.com/statics/images/show/bor_bottom.png) no-repeat;
}

.news-rank {
  background-color: #F7FAFC;
  padding: 20px;
}

.news-rank h2 {
  margin: 0 -8px;
}

.news-rank .news-rank_list li {
  margin: 0;
  padding: 10px 0;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);

}

.news-rank .news-rank_list li:last-child {
  border: 0px;
}

.news-rank .news-rank_list li a {
  font-size: 14px;
  font-weight: 400;
  color: #4d4d4d;
  line-height: 22px;
}

.news-rank .news-rank_list li a:last-of-type {
  display: block;
}

.news-rank .news-rank_list li a img {
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0);
  border-radius: 50%;
}

.news-rank .news-rank_list li a span {
  font-size: 12px;
  font-family: Source Han Sans CN;
  line-height: 28px;
  color: #272727;
}

.news-rank .news-rank_list li img {
  width: 46px;
  height: 46px;
  vertical-align: middle;
  margin-right: 10px;
}

.news-rank .news-rank_list li a:hover {
  color: #338EFF;
}

.news-rank_schools li a {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 相关推荐 */
.recommend2 {
  background-color: #F7FAFC;
  padding: 20px;
  border-top: dashed 1px rgba(112, 112, 112, 0.4);
}

.recommend2 .recommend2-list li {
  border-bottom: 1px solid rgba(112, 112, 112, .4);
  padding: 14px 0;
}

.recommend2 .recommend2-list li:last-of-type {
  border-bottom: none;
  padding-bottom: 40px;
}

.recommend2 .recommend2-list li a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.recommend2 .recommend2-list li .image {
  width: 102px;
  height: 64px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 8px;
  border-radius: 4px;
}

.recommend2 .recommend2-list li .text {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #272727;
}

.recommend2 .recommend2-list li .text:hover {
  color: #338EFF;
}

.recommend2 .recommend2-list li .text .title {
  height: 50px;
}

.recommend2 .recommend2-list li .text .title p {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
}

.recommend2 .recommend2-list li .text .title .time {
  font-size: 12px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  line-height: 20px;
  color: #707070;
}

.xgss {
  padding: 24px 15px 8px;
  background-color: #F7F7F7;

}

.xgss a {
  display: inline-block;
  padding: 7px 15px;
  margin-bottom: 17px;
  margin-right: 5px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  color: #4D4D4D;
  font-size: 14px;
  font-weight: 400;
  color: #4d4d4d;
}

.xgss a:hover {
  background-color: #338EFF;
  border: 1px solid #338EFF;
  color: #fff;
}

.hot_wrap h2 {
  background-size: 230px 4px;
}

.hot_list_wrap {
  padding: 20px 15px;
  background-color: #F7FAFC;
}

.hot_list_wrap .hot_li {
  margin-bottom: 20px;
  overflow: hidden;
}

.hot_list_wrap .hot_li:last-child {
  margin-bottom: 0;
}

.hot_list_wrap .hot_li p {
  width: 145px;
  font-size: 14px;
  font-weight: 400;
  color: #4d4d4d;
  line-height: 20px
}

.hot_list_wrap .hot_li img {
  width: 90px;
  height: 62px;
}

/*  学校广告位 */
.school_gg {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 672px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  padding: 25px 20px;
  margin-bottom: 30px;
}

.school_gg a {
  display: block;
  height: 100%;
  overflow: hidden;
}

.school_gg img {
  width: 250px;
}

.school_gg_right {
  overflow: hidden;
}

.school_gg_right .school_gg_right_title {
  font-size: 18px;
  font-weight: 400;
  color: #18191a;
  margin-bottom: 15px;
  line-height: 36px;
}

.school_gg_right .school_gg_right_list {
  width: 334px;
  font-size: 14px;
  font-weight: 400;
  color: #6d6d6d;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.school_gg .yuyue {
  position: absolute;
  top: 24px;
  right: 20px;
  width: 100px;
  height: 36px;
  background: #feb506;
  border-radius: 4px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff !important;

}

.main-article-bottom {
  overflow: hidden;
}

.right-fun i {
  position: relative;
  top: 3px;
  display: inline-block;
  width: 20px;
  height: 17px;
  margin-right: 5px;
  background: url(https://www.ieduchina.com/statics/images/show/jubao.png) no-repeat center;
  background-size: 100% 100%;
}

.main-article-bottom .right-fun span:hover i {
  background: url(../images/report-active.png) no-repeat center;
  background-size: 100% 100%;
}

.main-article-bottom .right-fun span:hover {
  color: #338EFF;
}

.main-article-bottom .fl img {
  position: relative;
  top: 5px;
  width: 18px;
  height: 18px;
  vertical-align: baseline;
}

.main-article-bottom .fl .xulie {
  display: inline-block;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #338EFF;
}

.main-article-bottom .fl .xulie a {
  font-size: 14px;
  font-weight: 400;
  color: #338EFF;
}

.tuijian {
  font-size: 16px;
  font-weight: bold;
  color: #191919;
  line-height: 1;
  padding-bottom: 10px;
  border-bottom: 1px solid #E6E6E6;
}

.tuijian_list li {
  padding: 20px 0;
  border-bottom: 1px solid #E6E6E6;
}

.tuijian_list li.tuijian_list_img {
  padding-left: 170px;
  position: relative;
}

.tuijian_list li p {
  font-size: 16px;
  font-weight: 400;
  color: #191919;
}

.tuijian_list li p:hover {
  color: #338EFF;
}

.tuijian_list li .tuijian_biaoqian {
  overflow: hidden;
  height: 28px;
  line-height: 26px;
  margin-top: 20px;
}

.tuijian_list li .tuijian_biaoqian p {
  float: left;
  padding: 0 10px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  font-size: 14px;
  font-weight: 400;
  color: #6d6d6d;
  margin-right: 10px;
}

.tuijian_list li .tuijian_biaoqian span {
  float: left;
  font-size: 14px;
  font-weight: 400;
  color: #999999;
}

.tuijian_list li .daitu {
  display: inline-block;
  width: 480px;
  min-height: 100px;
}

.tuijian_list li .daitu .tuijian_biaoqian {
  margin-top: 40px;
}

.tuijian_list li .daitu p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.tuijian_list li.tuijian_list_img .daitu_img {
  display: inline-block;
  width: 150px;
  height: 102px;
  margin-right: 20px;
  vertical-align: bottom;
  position: absolute;
  top: 15px;
  left: 0;
}

.iedu-footer-wrap {
  padding: 30px 0;
  background: #f4f5f6;
}

#content {
  padding-bottom: 60px;
  text-align: justify;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.hot_list_wrap .hot_li p:hover,
.social-share a {
  width: 30px;
  height: 30px;
  background-size: 30px 30px;
}

.social-share .icon-wechat {
  background: url(../images/e53f904d.png) no-repeat center;
}

.social-share .icon-wechat:hover {
  background: url(../images/83e5ce1a.png) no-repeat center;
}

.social-share .icon-qzone {
  background: url(../images/de9ad078.png) no-repeat center;
}

.social-share .icon-qzone:hover {
  background: url(../images/4109aa5e.png) no-repeat center;
}

.social-share .icon-qq {
  background: url(../images/1fb84b03.png) no-repeat center;
}

.social-share .icon-qq:hover {
  background: url(../images/4ede3e70.png) no-repeat center;
}

.social-share .icon-weibo {
  background: url(../images/f2ae967d.png) no-repeat center;
}

.social-share .icon-weibo:hover {
  background: url(../images/9b45025e.png) no-repeat center;
}

#main-cont img {
  max-width: 100%;
  height: auto !important;
}



/*评论*/
input,
button,
select,
textarea {
  outline: none
}

textarea {
  resize: none
}

.form_title {
  font-size: 16px;
  color: rgba(25, 25, 25, 1);
}

.reply-con {
  width: 617px;
  background: #F4F4F4;
  margin-top: 5px;
}


.reply-con .reply {
  padding-top: 10px;
  margin-left: 43px;
  padding-bottom: 10px;
}

.publish-btn {
  cursor: pointer;
  margin: 0px;
  width: 98px;
  height: 98px;
  background: #338EFF;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 98px;
}

.kuang {
  width: 540px;
  height: 96px;
  margin-left: 0px;
  border: 1px solid #ccc;
}

.publish {
  height: 100px;
}

.say-con {
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  height: 94px;
}

.publish_q {
  width: 670px;
  height: 140px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(235, 235, 235, 1);
}

.kuang_q {
  width: 670px;
  height: 98px;
  background: rgba(255, 255, 255, 1);
}

.publish_q .btn_wrap {
  width: 100%;
  height: 42px;
  overflow: hidden;
  background: rgba(250, 250, 250, 1);
  font-size: 0px;
}

.person_q {
  float: left;
  margin-left: 20px;
}

.person_q img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
  margin-top: -10px;
}

.person_q p {
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  color: rgba(109, 109, 109, 1);
  line-height: 42px;
}

.publish-btn_q {
  cursor: pointer;
  float: right;
  margin-right: 20px;
  width: 80px;
  height: 30px;
  background: #338EFF;
  border-radius: 2px;
  font-size: 14px;
  line-height: 30px;
  margin-top: 6px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.comment {
  padding: 20px 0 10px;
  border-bottom: 1px dashad rgba(230, 230, 230, 1);
  margin: 0px;
}

.comment img {
  width: 40px;
  height: 40px;
  margin: 0 15px 0 0;
}

.comment_top {
  display: block;
  font-size: 14px;
  font-family: ArialMT;
  font-weight: 400;
  color: rgba(158, 158, 158, 1);
  margin-bottom: 5px;
}

.comment_name {
  font-size: 14px;
  font-weight: 400;
  color: rgba(77, 77, 77, 1);
  margin-right: 18px;
}

.comm {
  width: 615px;
}

.ding {
  background: url(https://www.ieduchina.com/statics/images/show/dianzan.png) no-repeat center;
  background-size: 100% 100%;
}

.ding_h {
  background: url(https://www.ieduchina.com/statics/images/show/dianzan_h.png) no-repeat center;
  background-size: 100% 100%;
}

#ckgdpl {
  display: block;
  text-decoration: none;
  width: 672px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-top: 35px;
  background: rgba(247, 247, 247, 1);
  font-size: 16px;
  font-weight: 400;
  color: #338EFF;
}

#ckgdpl:hover {
  opacity: .8;
}

#tanchuang {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px 15px;
  border-radius: 6px;
  display: none;
}

textarea:-moz-placeholder {
  color: #D7D7D7;
}

textarea:-ms-input-placeholder {
  color: #D7D7D7;
}

textarea::-webkit-input-placeholder {
  color: #D7D7D7;
}


/*文章详情页移植表单*/
.form_wrap {
  padding: 30px 40px;
  text-align: center;
  background: #EEEEEE;
  margin-top: 30px;
}

.form_wrap h3 {
  font-size: 32px;
  font-weight: bold;
  color: #183049;
}

.form_wrap .miao {
  font-size: 17px;
  color: #183049;
  margin-top: 13px;
}

.form_wrap .form_cont {
  position: relative;
  padding: 16px 0;
}

.form_wrap select {
  box-sizing: border-box;
  padding: 0 12px;
  display: block;
  width: 178px;
  margin: 12px 12px 0 0;
  height: 36px;
  line-height: 36px;
  background: url(../images/detail-select.png) no-repeat #fff right center;
  background-position-x: 96%;
  background-size: 9px 6px;
  font-size: 14px;
  color: #666;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
}

.form_wrap select::-ms-expand {
  display: none;
}

.font_col {
  color: #7D7E80 !important;
}

.form_wrap input {
  display: block;
  width: 178px;
  margin: 12px 12px 0 0;
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  padding: 0 12px;
  font-size: 14px;
  color: #666;
  background: #fff;
  -webkit-appearance: none;
  outline: none;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
}

.form_wrap .mar-0 {
  margin-right: 0;
}

.form_wrap #form_btn {
  display: block;
  width: 178px;
  height: 36px;
  line-height: 36px;
  margin: 0 auto;
  background: #183049;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  margin-top: 12px;
}

.form_wrap #form_btn::after {
  content: '';
  clear: both;
  display: none;
}

.form_wrap .boder_act {
  border: 1px solid #338EFF;
}

.form_wrap .err {
  color: #338EFF;
  position: absolute;
  left: 0;
  bottom: -5px;
  text-align: left;
  font-size: 14px;
}

/*优质国际学校*/
.recommand_schools {
  padding: 20px 0 30px;
}

.recommand_tabs {
  padding: 14px 0;
  border-bottom: 1px solid #E6E6E6;
}

.recommand_tabs h3 {
  position: relative;
  font-size: 16px;
  color: #191919;
  padding-left: 13px;
  line-height: 25px;
  margin-right: 25px;
}

.recommand_tabs h3::before {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  left: 0;
  width: 3px;
  height: 16px;
  background: #191919;
}

.recommand_tabs ul li {
  float: left;
  width: 66px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 16px;
  color: #666;
  cursor: pointer;
}

.recommand_tabs ul li:hover {
  color: #338EFF;
}

.recommand_tabs ul li.active {
  background: #338EFF;
  color: #fff;
  border-radius: 4px;
}

.recommand_list {
  display: none;
  padding-top: 20px;
}

.recommand_list table {
  border-top: 1px solid #E6E6E6;
  border-left: 1px solid #E6E6E6;
}

.recommand_list table thead td {
  border-right: 1px solid #E6E6E6;
  border-bottom: 1px solid #E6E6E6;
  background: #F2F5F7;
  font-size: 16px;
  color: #18191A;
  padding: 16px 0;
  text-align: center;
}

.recommand_list table tbody td {
  padding: 20px;
  font-size: 14px;
  color: #666;
  border-right: 1px solid #E6E6E6;
  border-bottom: 1px solid #E6E6E6;
}

.recommand_list table tbody td:first-child {
  padding: 20px 10px;
  text-align: center;
}

.recommand_list table tbody td a.school-advise {
  display: block;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #338EFF;
  font-size: 14px;
  color: #338EFF;
  border-radius: 2px;
}

.recommand_list table tbody tr:last-child td {
  background: #F2F5F7;
}

.recommand_list table tbody td img {
  width: 246px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/*详情页二维码*/
.detail_code {
  position: relative;
  padding: 40px 50px 40px 222px;
  margin-bottom: 50px;
  background: url('../images/detail-code-bg.png') no-repeat center center;
  background-size: 100% 100%;
  font-size: 16px;
  color: #fff;
}

.detail_code_img {
  position: absolute;
  top: 46px;
  left: 40px;
  width: 140px;
  display: block;
}

.detail_code_img img {
  width: 140px;
  height: 140px;
  margin-bottom: 10px;
}

.detail_code_text p {
  margin-bottom: 18px;
}

.detail_code_text .detail_code_mobile {
  width: 240px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 40px;
  background: #F6D14D;
  color: #523719;
}

.detail_code_text .detail_code_mobile span {
  font-weight: 600;
  font-family: Arial-BoldMT;
  font-size: 18px;
}

.hot-activi-list {
  background: #F7FAFC;
}

/* 热门活动推荐 */
.text_no_rmal ul li p {
  text-align: center;
  margin-top: 8px;
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text_no_rmal ul li {
  position: relative;
  padding: 0 !important;
  margin: 10px 0 20px;
}

.text_no_rmal ul li a {
  color: #666;
}

.text_no_rmal ul li a:hover {
  text-decoration: underline;
  color: #333;
}

.hot_activity_end:after {
  background: url(//www.ieduchina.com/statics/images/school/label-has-end.png) no-repeat;
}

.hot_activity_start:after {
  background: url(//www.ieduchina.com/statics/images/school/label-sign-up.png) no-repeat;
}

.in_progress:after {
  z-index: 0;
  top: 0;
  left: 0;
  position: absolute;
  content: '';
  display: block;
  width: 74px;
  height: 72px;
  visibility: visible;
}

#ad_news_banner {
  margin-bottom: -3px;
  margin-top: 10px;
}

#forms {
  background-color: #ffffff;
  border: solid 1px #eeeeee;
}

#forms .miao {
  color: #666666;
  font-size: 16px;
  line-height: 16px;
}

#forms .miao span {
  font-size: 40px;
  color: #666666;
  vertical-align: -7px;
  padding-left: 18px;
  padding-right: 0px;
}

#forms .miao span:first-of-type {
  padding-left: 0;
}

#forms #apply .form_cont {
  padding-top: 0;
}

#forms #apply .form_cont .f {
  position: relative;
  height: 40px;
  margin: 20px 0 0 0;
  border-radius: 8px;
}

#forms #apply .form_cont .f::before {
  position: absolute;
  left: 12px;
  top: 22px;
  content: '';
  z-index: 100;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
}

#forms #apply .form_cont .f input {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 36px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 12px 0 36px;
  background: #fff;
  -webkit-appearance: none;
  outline: none;
  border: 1px solid #cccccc;
  border-radius: 8px;
  background-position-x: 4%;
  background-size: 9px 6px;
  font-size: 14px;
  border: solid 1px #e2e5e7;
  color: #000000;
}

#forms #apply .form_cont .f input:placeholder {
  color: #999999;
}

#forms #apply .form_cont .f select {
  width: 100%;
  padding: 0 12px 0 36px;
  height: 40px;
  border: solid 1px #e2e5e7;
  color: #999999;
  border-radius: 8px;
}

#forms #apply .form_cont .f select {
  background-image: url(//www.ieduchina.com/statics/images/open.png);
}

#forms #apply .form_cont .f:nth-of-type(1) {
  width: 274px;
  margin-left: 0;
  margin-right: 0;
}

#forms #apply .form_cont .f:nth-of-type(1)::before {
  background-image: url(//www.ieduchina.com/statics/images/icon/icon1.png);
}

#forms #apply .form_cont .f:nth-of-type(2) {
  width: 274px;
  margin-left: 10px;
  margin-right: 0;
}

#forms #apply .form_cont .f:nth-of-type(2)::before {
  background-image: url(//www.ieduchina.com/statics/images/icon/icon2.png);
}

#forms #apply .form_cont .f:nth-of-type(3) {
  width: 179px;
}

#forms #apply .form_cont .f:nth-of-type(3)::before {
  background-image: url(//www.ieduchina.com/statics/images/icon/icon3.png);
}

#forms #apply .form_cont .f:nth-of-type(4) {
  width: 180px;
  margin-left: 10px;
}

#forms #apply .form_cont .f:nth-of-type(4)::before {
  background-image: url(//www.ieduchina.com/statics/images/icon/icon4.png);
}

#forms #apply .form_cont .f:nth-of-type(5) {
  width: 179px;
  margin-left: 10px;
}

#forms #apply .form_cont .f:nth-of-type(5)::before {
  background-image: url(//www.ieduchina.com/statics/images/icon/icon5.png);
}

#forms #apply .form_cont .f:nth-of-type(6) {
  width: 100%;
}

#forms #apply .form_cont .f:nth-of-type(6)::before {
  background-image: url(//www.ieduchina.com/statics/images/icon/icon6.png);
}

#forms #apply .form_cont .f::after {
  position: absolute;
  left: 296px;
  top: 22px;
  content: '';
  z-index: 100;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
}

#forms #apply .form_cont .f:nth-of-type(6)::after {
  background-image: url(//www.ieduchina.com/statics/images/icon/icon7.png?t=20211123);
}

#forms #apply .form_cont .err {
  bottom: -20px;
}

#forms #apply #form_btn {
  display: inline-block;
  background-color: #2b77df;
  width: 240px;
  height: 48px;
  line-height: 48px;
  border: solid 1px #2b77df;
  margin-top: 20px;
}

#forms #apply #form_btn2 {
  display: inline-block;
  margin: 0 auto;
  margin-left: 40px;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  color: #2b77df;
  border: solid 1px #2b77df;
  margin-top: 20px;
  background-color: #ffffff;
  width: 240px;
  height: 48px;
  line-height: 48px;
}

/* 右侧活动推荐 */
.side-title2>h2 {
  height: 32px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: #272727;
  padding: 10px 0;
  font-family: Source Han Sans CN;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.side-title2>h2 i {
  display: inline-block;
  width: 8px;
  height: 32px;
  background: #076FCB;
  border-radius: 6px;
  vertical-align: -7px;
  margin-right: 14px;
}

.activity-recommendation .swiper-wrap {
  overflow: hidden;
}

.activity-recommendation .swiper {
  width: 360px;
  height: 343px;
  position: relative;
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide {
  width: 100%;
  height: 343px;
  background: #F7FAFC;
  -webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.01);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.01);
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .image {
  position: relative;
  width: 360px;
  height: 240px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .status {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 58px;
  height: 52px;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(//www.ieduchina.com/statics/images/icon/a.png?t=20211123);
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .image .title {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #FFFFFF;
  display: table;
  width: 100%;
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .image .title .text2 {
  display: table-cell;
  vertical-align: middle;
  padding: 0 12px;
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .image .title .text2 p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .text {
  padding: 4px 17px;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 102px;
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .text p {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #272727;
  text-align: left;
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .text button {
  width: 140px;
  height: 24px;
  border: 1px solid #FF9100;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #FF9100;
  margin-top: 20px;
  background-color: transparent;
  cursor: pointer;
}

.activity-recommendation .swiper .activity-recommendation-swiper-pagination {
  position: absolute;
  bottom: 2px;
  text-align: center;
  width: 100%;
}

.activity-recommendation .swiper .activity-recommendation-swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #CBC9C9;
  border-radius: 50%;
  opacity: 1;
}

.activity-recommendation .swiper .activity-recommendation-swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 20px;
  height: 10px;
  background: #FF9100;
  border-radius: 5px;
}

/*右侧表单*/
#iedu-right-form {
  text-align: center;
  padding: 22px 15px 25px;
  margin-bottom: 80px;
}

#iedu-right-form h2 {
  font-size: 21px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #183049;
  text-align: center;
  padding-bottom: 5px;
}

#iedu-right-form .f {
  overflow: hidden;
  margin-top: 16px;
  border: 1px solid rgba(112, 112, 112, .4);
  border-radius: 4px;
}

#iedu-right-form .f span {
  float: left;
  display: inline-block;
  width: 62px;
  height: 15px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  line-height: 38px;
}

#iedu-right-form .f input {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 5px;
  width: 100%;
  height: 36px;
  color: #000000;
  background-color: white;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  -webkit-appearance: none;
  outline: none;
  -webkit-box-shadow: 0 0 0 1000px white inset;
}

#iedu-right-form .f input:placeholder {
  color: #707070;
}

#iedu-right-form .f.select {
  position: relative;
}

#iedu-right-form .f.select::after {
  position: absolute;
  right: 12px;
  top: 15px;
  background-image: url(//www.ieduchina.com/statics/images/icon/sel.png?t=20211123);
  width: 11px;
  height: 8px;
  content: "";
}

#iedu-right-form .f select {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 5px;
  width: 100%;
  height: 36px;
  color: #666666;
  border: none;
  font-size: 16px;
  background-color: white;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

#iedu-right-form .f select:-internal-autofill-previewed,
#iedu-right-form .f select:-internal-autofill-selected {
  -webkit-text-fill-color: #000000;
  -webkit-transition: background-color 5000s ease-out 0.5s;
  transition: background-color 5000s ease-out 0.5s;
}

#iedu-right-form .err {
  width: 100%;
  color: #338eff;
  text-align: center;
  font-size: 14px;
  height: 0px;
  line-height: 36px;
}

.searchschool {
  overflow: initial !important;
  position: relative;
}

.searchschool ul {
  position: absolute;
  left: -1px;
  right: -1px;
  z-index: 110;
  top: 52px;
  max-height: 200px;
  overflow-y: auto;
  background-color: #ffffff;
  border: solid 1px #000000;
}

.searchschool ul li {
  cursor: pointer;
  text-align: left;
  font-size: 15px;
  line-height: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 10px;
  border-bottom: dashed 1px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.searchschool ul li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

#iedu-right-form button.getCode {
  cursor: pointer;
  width: 149px;
  height: 43px;
  background: #076FCB;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

#iedu-right-form .form_btn_id button {
  cursor: pointer;
  display: inline-block;
  margin-top: 37px;
  width: 313px;
  height: 48px;
  background-color: #076FCB;
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  line-height: 26px;
  color: #FFFFFF;
  border: none;
  outline: none;
}

#iedu-right-form form a.tel {
  display: block;
  margin-top: 34px;
  text-align: left;
}

#iedu-right-form form a.tel img {
  height: 26px;
  vertical-align: text-bottom;
}

#iedu-right-form form a.tel span {
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  color: #FF9100;
}

#iedu-right-form.lx form a.tel span {
  color: #1e2db7;
  display: block;
  margin-left: 34px;
  margin-top: -42px;
}

#iedu-right-form.ym form a.tel span {
  color: #1e2db7;
  display: block;
  margin-left: 34px;
  margin-top: -42px;
}

#iedu-right-form .f.code {
  border: none;
  padding: 0;
}

#iedu-right-form .f.code input {
  width: 200px;
  float: left;
  border: 1px solid rgba(112, 112, 112, .4);
  border-radius: 4px;
}

#iedu-right-form .f.code button {
  width: 111px;
  height: 36px;
  float: right;
  margin-top: 0;
}

#iedu-right-form .f.code button[disabled] {
  cursor: no-drop;
  background-color: rgba(43, 119, 223, 0.8);
}


/*评论区*/
#forms #apply .form_cont .f input {
  width: 274px;
  float: left;
}

#forms #apply .form_cont .f input:nth-of-type(2) {
  width: 170px;
}

#forms #apply .form_cont .f button {
  cursor: pointer;
  float: left;
  margin: 12px 0 0 0;
  display: block;
  height: 40px;
  line-height: 36px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 90px;
  background-color: #2b77df;
  -webkit-appearance: none;
  outline: none;
  border: 1px solid #2b77df;
  border-radius: 8px;
  background-position-x: 4%;
  background-size: 9px 6px;
  font-size: 14px;
  color: #fff;
}

#forms #apply .form_cont .f button[disabled] {
  cursor: no-drop;
  background-color: rgba(43, 119, 223, 0.8);
  border: 1px solid rgba(43, 119, 223, 0.8);
}

* {
  margin: 0;
  padding: 0;
}

.wrap {
  width: 640px;
  margin: 0 auto;
}

.z-comment {
  margin-top: 50px;
  padding: 0 15px;
}

.z-comment h5 {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #222222;
  line-height: 20px;
}

.z-comment .z-textarea {
  width: 100%;
  height: 100px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 10px;
  background: #F5F5F6;
  margin-top: 10px;
  border: none;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  padding: 16px 15px;
  resize: none;
  outline: none;
}

.z-comment .z-textarea::-webkit-input-placeholder {
  color: #666666;
}

.z-comment .z-textarea::-moz-placeholder {
  color: #666666;
}

.z-comment .z-textarea:-ms-input-placeholder {
  color: #666666;
}

.z-comment .z-textarea::-ms-input-placeholder {
  color: #666666;
}

.z-comment .z-textarea::placeholder {
  color: #666666;
}

.z-comment .error-tips {
  text-align: left;
  line-height: 20px;
  font-size: 12px;
  color: red;
  padding-left: 16px;
  height: 0;
}

.z-comment .z-btn {
  height: 30px;
  width: 100%;
  text-align: right;
  margin: 10px 0 21px;
}

.z-comment .z-btn button {
  width: 88px;
  height: 30px;
  border-radius: 10px;
  background: #2B77DF;
  border-radius: 4px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #FFFFFF;
  outline: none;
  border: none;
  cursor: pointer;
}

.z-comment .z-list.istop3 ul {
  border-bottom: solid 1px rgba(107, 107, 107, 0.2);
}

.z-comment .z-list.istop3 .z-more {
  display: block;
}

.z-comment .z-list ul {
  list-style: none;
  padding-bottom: 36px;
}

.z-comment .z-list ul li {
  margin-top: 30px;
  overflow: hidden;
}

.z-comment .z-list ul li .z-portrait {
  float: left;
  width: 47px;
  height: 47px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
}

.z-comment .z-list ul li .z-content {
  float: right;
  width: 546px;
}

.z-comment .z-list ul li .z-content h6 {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #666666;
  line-height: 1;
}

.z-comment .z-list ul li .z-content p.text {
  font-size: 14px;
  padding-top: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}

.z-comment .z-list ul li .z-content .z-tool {
  height: 32px;
  line-height: 32px;
  padding-top: 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.z-comment .z-list ul li .z-content .z-tool .time {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #A3A6AC;
}

.z-comment .z-list ul li .z-content .z-tool .tool button {
  position: relative;
  width: 60px;
  height: 40px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  margin-left: 20px;
}

.z-comment .z-list ul li .z-content .z-tool .tool button.zan::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 15px;
  vertical-align: -2px;
  margin-right: 4px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAADaUlEQVRIS7WW32tcRRTHv9/JBoO2krRKFWK1YBZ8qNj6IAbFYPNg6osgS0U0TXrv3MTig1Kw9g+wDyIoFAw7c7NZhKKwBV/EH9S8KK0voraFUqhRqX0wIt2H0mKze2fkLLNhGzTeLNl5mp37nfOZs3POnEOsGbOzsw9lWXaE5H4AOwEU1mq6+O289+edc6+yc/PMzMwB730FwJ1dGM2z5adVYBRF+/r6+r7s8OgmgIskm3ksicY5t4vkjqD/EcCNMH8UwN3ee98ClkqlvsHBwUskHw6CuWazebRSqVzPCxNdkiQfAnitDTHGXAjr3wJ4SuYtYBzHzyqlFmXuvf/KWvvcRkBtbW6g1voYyePhbymlaXqqp8AkSaoADgbII8aYS70GngXwJIBmvV6/q1arrfQa+BeA7d77n621I93AcgfN5OTk9oGBAQFKwHxurX2+p0Ct9SjJMwHygTHmzV4Dp0guBMhhY8xcr4HHSR4TSJZl4/Pz86187GbkysMkSSTnXhRAo9HYubCw8Hs3sNxBkyTJeQC7vfc3rLVbJXZ6DZQHVqrDOWPMY93CNuKhPNBbAPxSr9eLtVot6xaa9w4/A9DKPe/91yQXpYz8B3TZWivP4G0j5PLjAN4CsC/YOkFyOcw1yQdlziiK9iilzpIcyOHZnDHmcFtXKpW2DA0NvQfgEID+HPv/aJUnrfUzANKOevive733+621X8jHKIq2KaVOk9ybA9RKAufcoc4WQ2mtpTLvUEqtrjvnTpLcJlHcaDTuqVarf4eCvUhSDipXcQ1AWSl12Xtf997fUkqtXov33jnnLqZpevW2nmbtSaenp+8tFArLJEW3aIwZF00cx28opd4P+ivOubE0TX/N4+m6QK31OMnTwYt3rbVHx8bGCsViUR6H+6ScAXjCGPNDHlgraNYTJknyOoATonHOHUzT9KM4jp9WSn0TDnHSWvtKXlgeoETgERE2m83RSqXy3Zp25OU0TT/eTKAYeyl4+IBcutb6U5IvyNrKysquarX622YCPwFwQAxmWbZ3aWnpwsjIyBWS9wP40xjT7kFzM/8vaGZJtuujhL50BsVwf6estaXcpCBcFzgxMXHH8PDwGZLybHWOmyRHy+XyuU0FirGpqanB/v7+d6RBB7BV2hGSb5fL5e83ChP9P/whtjF7A9d1AAAAAElFTkSuQmCC);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
}

.z-comment .z-list ul li .z-content .z-tool .tool button.zan.is::before {
  -webkit-transform: rotateZ(0deg);
  transform: rotateZ(0deg);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAB30lEQVRIS73WMWjUYBjG8f+T6yE4ikgHEd1E9JrDrR3Fwd3BqoOiIA4Kl56LLp0s2uZcHJwKIkrlcFQcRMRBu2hyd6MFxUUqKGLlqnDJK5VGTulluKZfphC+7/nlTXjzRgx5HJqzwyMeNzHGTawATb5zLZ7Wt7xIDeNVQxtDvAK2/7PfeLNSZmLpsn4Nyh0ObFgTOL5RaJpysVXXnUJBv2HLgl0bhhoPoymdKAz0Z2yvtvE+51UsRIEmCwOrczaJx4NBgSmErUD1wkA/tPsSJ3PAS61AtwsB/7SCWESMDHyk4mhU07NNg5VZ21cq8QLYk/P+LEkYbV/R51ywcsN2q8yBEnjZwreBnmbn/i27jnFBsCOvbw2+enAqW5OkmFKW4y5tppWuXddYaKc9MQ+U+8OiQH97tNowG+YDke0xeJeknO/U9VLV0D4hRv8PLBJcz15NjQkNuvstADF47Br84RQEuq7BjmvwkVPQjBnX4FnXoNs+XP3JTpcVfokCOQVfR4HGnVVocDcOdMYdaFyNp+SuLRJxpF3TczcVGkvRIvtpKpHfsER9kz6biwWOp15PHOus/+esgZHA36IB3E3gXDvQQpavyqwd9ErcAyr9lW6iwp7BR8ETE2Fc04f+Yn4DkU0T/N2KcnIAAAAASUVORK5CYII=);
}

.z-comment .z-list ul li .z-content .z-tool .tool button.cai::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 15px;
  vertical-align: -4px;
  margin-right: 4px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAADaUlEQVRIS7WW32tcRRTHv9/JBoO2krRKFWK1YBZ8qNj6IAbFYPNg6osgS0U0TXrv3MTig1Kw9g+wDyIoFAw7c7NZhKKwBV/EH9S8KK0voraFUqhRqX0wIt2H0mKze2fkLLNhGzTeLNl5mp37nfOZs3POnEOsGbOzsw9lWXaE5H4AOwEU1mq6+O289+edc6+yc/PMzMwB730FwJ1dGM2z5adVYBRF+/r6+r7s8OgmgIskm3ksicY5t4vkjqD/EcCNMH8UwN3ee98ClkqlvsHBwUskHw6CuWazebRSqVzPCxNdkiQfAnitDTHGXAjr3wJ4SuYtYBzHzyqlFmXuvf/KWvvcRkBtbW6g1voYyePhbymlaXqqp8AkSaoADgbII8aYS70GngXwJIBmvV6/q1arrfQa+BeA7d77n621I93AcgfN5OTk9oGBAQFKwHxurX2+p0Ct9SjJMwHygTHmzV4Dp0guBMhhY8xcr4HHSR4TSJZl4/Pz86187GbkysMkSSTnXhRAo9HYubCw8Hs3sNxBkyTJeQC7vfc3rLVbJXZ6DZQHVqrDOWPMY93CNuKhPNBbAPxSr9eLtVot6xaa9w4/A9DKPe/91yQXpYz8B3TZWivP4G0j5PLjAN4CsC/YOkFyOcw1yQdlziiK9iilzpIcyOHZnDHmcFtXKpW2DA0NvQfgEID+HPv/aJUnrfUzANKOevive733+621X8jHKIq2KaVOk9ybA9RKAufcoc4WQ2mtpTLvUEqtrjvnTpLcJlHcaDTuqVarf4eCvUhSDipXcQ1AWSl12Xtf997fUkqtXov33jnnLqZpevW2nmbtSaenp+8tFArLJEW3aIwZF00cx28opd4P+ivOubE0TX/N4+m6QK31OMnTwYt3rbVHx8bGCsViUR6H+6ScAXjCGPNDHlgraNYTJknyOoATonHOHUzT9KM4jp9WSn0TDnHSWvtKXlgeoETgERE2m83RSqXy3Zp25OU0TT/eTKAYeyl4+IBcutb6U5IvyNrKysquarX622YCPwFwQAxmWbZ3aWnpwsjIyBWS9wP40xjT7kFzM/8vaGZJtuujhL50BsVwf6estaXcpCBcFzgxMXHH8PDwGZLybHWOmyRHy+XyuU0FirGpqanB/v7+d6RBB7BV2hGSb5fL5e83ChP9P/whtjF7A9d1AAAAAElFTkSuQmCC);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-transform: rotateZ(0deg);
  transform: rotateZ(0deg);
}

.z-comment .z-list ul li .z-content .z-tool .tool button.cai.is::before {
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAB30lEQVRIS73WMWjUYBjG8f+T6yE4ikgHEd1E9JrDrR3Fwd3BqoOiIA4Kl56LLp0s2uZcHJwKIkrlcFQcRMRBu2hyd6MFxUUqKGLlqnDJK5VGTulluKZfphC+7/nlTXjzRgx5HJqzwyMeNzHGTawATb5zLZ7Wt7xIDeNVQxtDvAK2/7PfeLNSZmLpsn4Nyh0ObFgTOL5RaJpysVXXnUJBv2HLgl0bhhoPoymdKAz0Z2yvtvE+51UsRIEmCwOrczaJx4NBgSmErUD1wkA/tPsSJ3PAS61AtwsB/7SCWESMDHyk4mhU07NNg5VZ21cq8QLYk/P+LEkYbV/R51ywcsN2q8yBEnjZwreBnmbn/i27jnFBsCOvbw2+enAqW5OkmFKW4y5tppWuXddYaKc9MQ+U+8OiQH97tNowG+YDke0xeJeknO/U9VLV0D4hRv8PLBJcz15NjQkNuvstADF47Br84RQEuq7BjmvwkVPQjBnX4FnXoNs+XP3JTpcVfokCOQVfR4HGnVVocDcOdMYdaFyNp+SuLRJxpF3TczcVGkvRIvtpKpHfsER9kz6biwWOp15PHOus/+esgZHA36IB3E3gXDvQQpavyqwd9ErcAyr9lW6iwp7BR8ETE2Fc04f+Yn4DkU0T/N2KcnIAAAAASUVORK5CYII=);
}

.z-comment .z-list ul li .z-content .reply {
  padding-top: 10px;
}

.z-comment .z-list ul li .z-content .reply p {
  background-color: rgba(163, 166, 172, 0.2);
  border-radius: 10px;
  padding: 9px 19px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #192C46;
  padding-left: 95px;
  text-indent: -79px;
  margin-left: -17px;
}

.z-comment .z-list ul li .z-content .reply p span {
  color: #318EFF;
  padding-right: 7px;
}

.z-comment .z-list ul li .z-content .reply p a {
  color: #192C46;
  padding: 0 2px;
}

.z-comment .z-list .z-more {
  display: none;
  text-align: center;
}

.z-comment .z-list .z-more button {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  padding-top: 10px;
  height: 20px;
  font-size: 17px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #192C46;
}

.z-comment .z-list .z-more button img {
  vertical-align: middle;
  width: 15px;
  height: 15px;
}


#iedu-right-form {
  text-align: center;
  margin-top: 20px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 16px 20px;
  margin-bottom: 20px;
  width: 360px;
}

#iedu-right-form.school {
  background-image: url(//www.ieduchina.com/statics/images/show/form1.png?t=20211124);
  height: 555px;
}

#iedu-right-form.lx {
  background-image: url(//www.ieduchina.com/statics/images/show/form2.png?t=20211124);
  height: 507px;
  background-size: 360px 507px;
}

#iedu-right-form.lx form {
  margin-top: 114px;
}

#iedu-right-form.ym {
  background: url(//www.ieduchina.com/statics/images/show/fbb44a12.png) 0 0/360px 394px no-repeat;
  height: 394px;
  border-bottom: solid 1px #ccc
}

#iedu-right-form form {
  margin-top: 106px;
}

#iedu-right-form .form_cont {
  padding-bottom: 16px;
}

#iedu-right-form .form_cont.ym .f:nth-of-type(1)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon11.png);
  background-position: 2px 2px;
  background-size: 12px 13px;
}

#iedu-right-form .form_cont.ym .f:nth-of-type(2)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon12.png);
  background-position: 0 1px;
  background-size: 15px 15px;
}

#iedu-right-form .form_cont.ym .f:nth-of-type(3)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon13.png);
  background-position: 1px 1px;
  background-size: 16px 14px;
}

#iedu-right-form .form_cont.ym .f:nth-of-type(4)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon14.png);
  background-size: 15px 15px;
  background-position: 2px 1px;
}

#iedu-right-form .form_cont.ym .f:nth-of-type(5)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon15.png);
  background-position: 4px 1px;
  background-size: 11px 15px;
}

#iedu-right-form .form_cont.ym .f:nth-of-type(6)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon16.png);
  background-size: 13px 16px;
  background-position: 4px 1px;
}

#iedu-right-form .form_cont.lx .f:nth-of-type(1)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon1.png);
}

#iedu-right-form .form_cont.lx .f:nth-of-type(2)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon6.png);
  background-position: 1px -1px;
}

#iedu-right-form .form_cont.lx .f:nth-of-type(3)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon5.png);
  background-position: 1px -1px;
}

#iedu-right-form .form_cont.lx .f:nth-of-type(4)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon7.png);
  background-size: 14px 14px;
  background-position: 3px 1px;
}

#iedu-right-form .form_cont.lx .f:nth-of-type(5)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon2.png);
  background-position: 1px -1px;
}

#iedu-right-form .form_cont.lx .f:nth-of-type(6)::before {
  background-image: url(//www.ieduchina.com/statics/pc/images/icon8.png);
  background-size: 13px 16px;
  background-position: 4px 1px;
}

#iedu-right-form .form_cont .f {
  position: relative;
  height: 36px;
  margin: 20px 0 0 0;
  border-radius: 6px;
}

#iedu-right-form .form_cont .f::before {
  position: absolute;
  left: 12px;
  top: 10px;
  content: '';
  z-index: 100;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
}

#iedu-right-form .form_cont .f input {
  display: block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 12px 0 36px;
  background: #fff;
  -webkit-appearance: none;
  outline: none;
  border: 1px solid #cccccc;
  border-radius: 6px;
  background-position-x: 4%;
  background-size: 9px 6px;
  font-size: 14px;
  border: solid 1px #e2e5e7;
  color: #000000;
  -webkit-box-shadow: 0 0 0 1000px white inset;
}

#iedu-right-form .form_cont .f input:placeholder {
  color: #999999;
}

#iedu-right-form .form_cont .f select {
  width: 100%;
  padding: 0 12px 0 36px;
  height: 36px;
  border: solid 1px #e2e5e7;
  color: #666666;
  border-radius: 8px;
  outline: none;
  background-image: url(//www.ieduchina.com/statics/pc/images/open.png);
  background-repeat: no-repeat;
  background-position: 225px center;
  background-size: 14px 8px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

#iedu-right-form .form_cont .f select::-webkit-input-placeholder {
  color: #cccccc;
}

#iedu-right-form .form_cont .f select::-moz-placeholder {
  color: #cccccc;
}

#iedu-right-form .form_cont .f select:-ms-input-placeholder {
  color: #cccccc;
}

#iedu-right-form .form_cont .f select::-ms-input-placeholder {
  color: #cccccc;
}

#iedu-right-form .form_cont .f select::placeholder {
  color: #cccccc;
}

#iedu-right-form .form_cont .f select:-internal-autofill-previewed,
#iedu-right-form .form_cont .f select:-internal-autofill-selected {
  -webkit-text-fill-color: #000000;
  -webkit-transition: background-color 5000s ease-out 0.5s;
  transition: background-color 5000s ease-out 0.5s;
}

#iedu-right-form .form_cont .f .error {
  border: solid 1px red;
}

#iedu-right-form .form_cont .f.achievement {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #FFFFFF;
  border: solid 1px #e2e5e7;
}

#iedu-right-form .form_cont .f.achievement.error {
  border: solid 1px red;
}

#iedu-right-form .form_cont .f.achievement select {
  border: none;
  width: 130px;
  border-right: solid 1px #d5d5d5;
  border-radius: 0;
  height: 16px;
  background-position: 74px center;
  margin-top: 10px;
}

#iedu-right-form .form_cont .f.achievement input {
  border: none;
  padding-left: 10px;
}

#iedu-right-form .form_cont .f.x-code {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 36px;
}

#iedu-right-form .form_cont .f.x-code input {
  width: 162px;
  height: 36px;
}

#iedu-right-form .form_cont .f.x-code button {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 80px;
  margin-top: 0;
  height: 36px;
  background-color: white;
  border: solid 1px #2B77DF;
  color: #2B77DF;
  border-radius: 6px;
}

#iedu-right-form .form_cont .error-tips {
  height: 0;
  line-height: 30px;
  font-size: 12px;
  color: red;
}

#iedu-right-form .selectwrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border: none;
}

#iedu-right-form .selectwrap select {
  width: 156px;
  height: 36px;
  background: #FFFFFF;
}

#iedu-right-form .boder_act {
  border: 1px solid #338EFF !important;
}

/* 广告 */
.advertising {
  width: 360px;
  height: 240px;
  margin-top: 26px;
}

.advertising .advertising-swiper {
  height: 240px;
  overflow: hidden;
}

.advertising .advertising-swiper .swiper-wrapper .swiper-slide {
  height: 240px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.advertising .advertising-swiper .swiper-wrapper .swiper-slide a {
  width: 100%;
  height: 100%;
  display: block;
}

.advertising .advertising-swiper {
  position: relative;
}

.advertising .advertising-swiper .advertising-swiper-pagination {
  position: absolute;
  bottom: 10px;
  right: 0;
  z-index: 10;
  text-align: right;
  margin-right: 10px;
}

.advertising .advertising-swiper .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #FFFFFF;
  border-radius: 60px;
}

.advertising .advertising-swiper .swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 17px;
  height: 8px;
  background: #FF9100;
  border-radius: 60px;
}

/*浏览量*/
.article .desc-box {
  height: auto;
}

.article .desc-box .desc-new {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  float: left;
}

.article .desc-box .desc-new .user-img {
  width: 50px;
  height: 50px;
}

.article .desc-box .desc-new .user-img a img {
  width: 50px;
  height: 50px;
}

.article .desc-box .desc-new .descs {
  margin-left: 15px;
}

.article .desc-box .desc-new .descs .username {
  width: 100%;
  font-size: 16px;
  font-family: Microsoft YaHei;
  line-height: 22px;
  color: #262525;
  padding-top: 4px;
  padding-bottom: 6px;
}

.article .desc-box .desc-new .descs .username a {
  color: #000000;
}

.article .desc-box .desc-new .descs .username .original {
  width: 45px;
  height: 20px;
  margin-left: 10px;
  vertical-align: -4px
}

.article .desc-box .desc-new .descs .nums {
  white-space: nowrap;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  font-size: 14px;
  font-weight: 300;
  color: #000000;
  font-size: 13px;
  line-height: 15px;
  color: #9195a3;
}

.article .desc-box .desc-new .descs .nums p {
  padding-bottom: 0px;
  margin-right: 20px;
  color: #474747;
}

.m12 {
  margin-top: 7px;
}

.article .desc-box .desc-new .descs .nums p.thumbs-up-new img {
  width: 19px;
  vertical-align: -4px;
}

.article .desc-box .desc-new .descs .nums p img {
  vertical-align: -4px;
  width: 18px;
}

.article .desc-box .desc-new .descs .nums p:nth-of-type(n+3) {
  cursor: pointer;
}

.article .desc-box .member-new {
  margin-top: 15px;
}


/****************学校*****************/
#side .iedu-side-message {
  padding: 14px 12px 0 12px;
}

#side .iedu-side-message .iedu-logo-wrap {
  padding: 4px;
  border: 1px solid rgba(112, 112, 112, 0.1);
  background-color: white;
}

#side .iedu-side-message .iedu-logo {
  height: 95px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}

#side .iedu-side-message h2 {
  height: 26px;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 26px;
  color: #262525;
  margin: 9px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#side .iedu-side-message .label {
  overflow: hidden;
}

#side .iedu-side-message .label a {
  padding: 3px 6px;
  border: 1px solid transparent;
  border-radius: 20px;
  float: left;
  margin-right: 10px;
  margin-bottom: 4px;
  font-size: 14px;
}

#side .iedu-side-message .label a.y {
  color: #fecc76;
  border-color: #fecc76;
}

#side .iedu-side-message .label a.x {
  color: #fcb9b9;
  border-color: #fcb9b9;
}

#side .iedu-side-message .label a.c {
  color: #9cd8ae;
  border-color: #9cd8ae;
}

#side .iedu-side-message .label a.g {
  color: #64aafb;
  border-color: #64aafb;
}

#side .iedu-side-message p {
  margin-top: 5px;
  font-size: 14px;
  font-weight: 300;
  line-height: 19px;
  color: #272727;
}

#side .iedu-side-message .btn {
  text-align: center;
  padding: 20px 0;
}

#side .iedu-side-message .btn button {
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 128px;
  height: 38px;
  border: 1px solid #076FCB;
  border-radius: 20px;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #076FCB;
  background-color: transparent;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: none;
  font-size: 16px;
}

.mask .main {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 380px;
  overflow: auto;
}

.mask .main .dele {
  position: absolute;
  right: 5px;
  top: 0;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
  color: white;
}

.mask .main form {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mask .main form>div {
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  padding: 0 10px;
  margin-top: 10px;
  position: relative;
  background-color: #ffffff;
}

.mask .main form>div.textarea {
  height: auto;
}

.mask .main form>div p {
  width: 100px;
  text-align: right;
  margin-right: 20px;
}

.mask .main form>div .from_list {
  width: 100%;
}

.mask .main form>div .from_list select {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  padding-left: 6px;
  border: none;
  outline: none;
}

.mask .main form>div .from_list input[type="text"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  padding-left: 10px;
  border: none;
  font-size: 14px;
  outline: none;
}

.mask .main form>div .from_list input[type="text"]::-webkit-input-placeholder {
  color: #666666;
}

.mask .main form>div .from_list input[type="text"]::-moz-placeholder {
  color: #666666;
}

.mask .main form>div .from_list input[type="text"]:-ms-input-placeholder {
  color: #666666;
}

.mask .main form>div .from_list input[type="text"]::-ms-input-placeholder {
  color: #666666;
}

.mask .main form>div .from_list input[type="text"]::placeholder {
  color: #666666;
}

.mask .main form>div .from_list .gender {
  display: inline-block;
}

.mask .main form>div .from_list textarea {
  padding-top: 10px;
  padding-left: 10px;
  width: 470px;
  font-size: 14px;
}

.mask .main form>div .from_list textarea::-webkit-input-placeholder {
  color: #666666;
}

.mask .main form>div .from_list textarea::-moz-placeholder {
  color: #666666;
}

.mask .main form>div .from_list textarea:-ms-input-placeholder {
  color: #666666;
}

.mask .main form>div .from_list textarea::-ms-input-placeholder {
  color: #666666;
}

.mask .main form>div .from_list textarea::placeholder {
  color: #666666;
}

.mask .main form .sub_btn {
  display: block;
  width: 160px;
  height: 52px;
  background: #1558a0;
  line-height: 52px;
  text-align: center;
  color: #fff;
  margin: 0 auto 20px;
  cursor: pointer;
}

.mask .main form .error-tips {
  text-align: center;
  line-height: 24px;
  height: 32px;
  color: red;
  font-size: 12px;
}

.mask .main h3 {
  font-size: 24px;
  color: #2e2e2e;
  background-color: #2462a5;
  text-align: center;
  padding: 20px 0;
  color: white;
}


#main .article .desc-box .fr a {
  border: 1px solid #338EFF;
  color: #338EFF;
}

#main .article .desc-box .fr a:hover {
  color: white;
}

#main .article .right-icon a {
  cursor: pointer;
  color: #333;
  margin-right: 20px;
  font-size: 14px;
}

#main .article .right-icon a:last-of-type {
  margin-right: 0;
}

#main .article .right-icon a i {
  width: 18px;
  height: 18px;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: -1px;
}

#main .article .right-icon a.dz i {
  background-image: url(//www.ieduchina.com/statics/pc/images/f6e02e51.png);
  vertical-align: 1px;
}

#main .article .right-icon a.pl i {
  background-image: url(//www.ieduchina.com/statics/pc/images/31a69131.png);
}

#main .article .right-icon a.jb i {
  background-image: url(//www.ieduchina.com/statics/pc/images/fab63a4d.png);
}

#main .article .right-icon a.jb:hover {
  color: #085aad;
}

#main .article .right-icon a.jb:hover i {
  background-image: url(//www.ieduchina.com/statics/pc/images/23621848.png);
}

/* 联系学校弹出层 */
body #content #main .article .desc-box .concat {
  background-color: #338EFF;
  color: white;
  cursor: pointer;
  margin-right: 10px;
}

body #content #main .article .desc-box .concat.tel {
  width: auto;
  padding: 0 10px 0 6px;
}

body #content #main .article .desc-box .concat.tel::before {
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  vertical-align: -3px;
  margin-right: 4px;
  background: url(../images/f773cdf4.png) center / contain no-repeat;
}

body #getmsg {
  display: none;
}

body .getmsg-layer {
  border-radius: 8px;
}

body .getmsg-layer #getmsg {
  width: 969px;
  background: #F8F8F8 url(../images/d0174934.png) 0 0 / 969px 172px no-repeat;
  border-radius: 8px;
  padding-top: 50px;
  padding-bottom: 27px;
}

body .getmsg-layer #getmsg.spacing .box div.left ul li p {
  letter-spacing: 0;
}

body .getmsg-layer #getmsg .box {
  width: 918px;
  padding: 24px 0 14px;
  background: #FFFFFF;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 0;
  line-height: 1;
  border-radius: 6px;
}

body .getmsg-layer #getmsg .box>div {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
}

body .getmsg-layer #getmsg .box>div.left {
  width: 462px;
  height: 378px;
  padding: 0 34px 0 36px;
  background: #FFFFFF;
  margin: 0 auto;
  font-size: 0;
  line-height: 1;
  border-right: solid #E1E1E1 1px;
}

body .getmsg-layer #getmsg .box>div.left .title {
  font-size: 24px;
  font-weight: 500;
  color: #2B77DF;
  padding-top: 5px;
  text-align: center;
}

body .getmsg-layer #getmsg .box>div.left img {
  width: 100%;
  height: 65px;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  margin: 15px 0 17px;
}

body .getmsg-layer #getmsg .box>div.left ul {
  width: 462px;
  height: 235px;
  border-radius: 4px;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
}

body .getmsg-layer #getmsg .box>div.left ul li {
  margin-top: 15px;
  width: 462px;
  height: 35px;
  background: #F2F2F2;
  border-radius: 4px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body .getmsg-layer #getmsg .box>div.left ul li span {
  width: 100px;
  height: 35px;
  line-height: 35px;
  background: #2B77DF;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  text-align: center;
}

body .getmsg-layer #getmsg .box>div.left ul li p {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 35px;
  line-height: 35px;
  font-weight: 400;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 1px;
  text-align: left;
  padding-left: 20px;
  font-size: 16px;
  color: #333;
}

body .getmsg-layer #getmsg .box>div.left ul li p span {
  color: #2B77DF;
  background-color: transparent;
  font-size: 12px;
  padding-left: 19px;
}

body .getmsg-layer #getmsg .box>div.left ul li:first-of-type {
  margin-top: 0;
}

body .getmsg-layer #getmsg .box>div.form .title {
  font-size: 20px;
  font-weight: 500;
  color: #2B77DF;
  padding-bottom: 27px;
  padding-top: 5px;
}

body .getmsg-layer #getmsg .box>div.form form {
  margin: 0 auto;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block {
  width: 284px;
  height: 40px;
  margin: 20px auto 0;
  font-size: 14px;
  font-weight: 400;
  color: #999999;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block:first-of-type {
  margin-top: 0;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block input {
  width: 284px;
  height: 40px;
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #E3E3E3;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 10px;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block input::-webkit-input-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block input::-moz-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block input:-ms-input-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block input::-ms-input-placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block input::placeholder {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block select {
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #E3E3E3;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 10px;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block .layui-form-select dl dd.layui-this {
  background-color: #2B77DF;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block.yzm {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block.yzm input {
  width: 180px;
  height: 40px;
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #E3E3E3;
}

body .getmsg-layer #getmsg .box>div.form form .layui-block.yzm button {
  width: 88px;
  height: 40px;
  background: #2B77DF;
  border-radius: 4px;
  border: solid 1px #2B77DF;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  cursor: pointer;
}

body .getmsg-layer #getmsg .box>div.form form button[type='submit'] {
  width: 284px;
  height: 40px;
  background: #2B77DF;
  border-radius: 4px;
  outline: none;
  border: solid 1px #2B77DF;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  cursor: pointer;
  margin-top: 49px;
}

body .getmsg-layer #getmsg .box>div.gzh {
  display: none;
}

body .getmsg-layer #getmsg .box>div.gzh .title {
  font-size: 20px;
  font-weight: 500;
  color: #2B77DF;
  padding-bottom: 20px;
  padding-top: 5px;
}

body .getmsg-layer #getmsg .box>div.gzh img {
  width: 248px;
  height: 248px;
  background: #D6D6D6;
  border-radius: 0;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  margin-top: 33px;
}

body .getmsg-layer #getmsg .box>div.gzh p {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
}

body .getmsg-layer #getmsg .box .tip {
  font-size: 12px;
  font-weight: 400;
  color: #666666;
  padding-top: 18px;
}

body .getmsg-layer .layui-layer-setwin .layui-layer-close2 {
  background: url(../images/f7482283.png) no-repeat;
}

body .getmsg-layer .layui-layer-setwin .layui-layer-close2:hover {
  background-position: 0 0;
}

body .layui-layer-page .layui-layer-content {
  overflow: initial;
}

#content #main .article .concat-form {
  font-size: 0;
  width: 100%;
  height: 409px;
  background-image: url(../images/6b4ec3a2.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 36px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}

#content #main .article .concat-form::after {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
  content: "";
  width: 101px;
  height: 59px;
  background: url(../images/1b266cba.png) 0 0 / 101px 59px no-repeat;
}

#content #main .article .concat-form form {
  width: 735px;
  height: 341px;
  background: #FFFFFF;
  border-radius: 0px;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

#content #main .article .concat-form form h3 {
  padding: 30px 0 6px;
  width: 100%;
  text-align: center;
  line-height: 1;
  position: relative;
}

#content #main .article .concat-form form h3::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 1;
  width: 165px;
  height: 10px;
  background: #ECF4FA;
}

#content #main .article .concat-form form h3 span {
  font-size: 16px;
  font-weight: 500;
  color: #2B77DF;
  z-index: 10;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
  position: relative;
  z-index: 6;
}

#content #main .article .concat-form form h3+p {
  font-size: 12px;
  font-weight: 400;
  color: #666666;
  text-align: center;
  padding: 0;
  line-height: 1;
  padding-top: 12px;
}

#content #main .article .concat-form form h3+p span {
  color: #F61414;
}

#content #main .article .concat-form form .left {
  width: 320px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 15px;
}

#content #main .article .concat-form form .left .layui-block {
  width: 100%;
  height: 33px;
  background: #FFFFFF;
  border-radius: 0px;
  border: 1px solid #E3E3E3;
  position: relative;
  margin-top: 15px;
}

#content #main .article .concat-form form .left .layui-block i.icon {
  position: absolute;
  left: 0;
  top: -2px;
  z-index: 10;
  display: inline-block;
  width: 28px;
  height: 35px;
  background-size: 14px 14px;
  background-repeat: no-repeat;
  background-position: center;
}

#content #main .article .concat-form form .left .layui-block i.icon.name {
  background-image: url(../images/f66ccc46.png);
}

#content #main .article .concat-form form .left .layui-block i.icon.grade {
  background-image: url(../images/695ac609.png);
}

#content #main .article .concat-form form .left .layui-block i.icon.yzm {
  background-image: url(../images/12c15ec1.png);
}

#content #main .article .concat-form form .left .layui-block i.icon.phone {
  background-image: url(../images/7999e8b4.png);
  padding-left: 0;
}

#content #main .article .concat-form form .left .layui-block i.icon.pro {
  background-image: url(../images/bd2bec26.png);
  padding-left: 0;
}

#content #main .article .concat-form form .left .layui-block i.icon.city {
  background-image: url(../images/7b72834c.png);
  padding-left: 0;
}

#content #main .article .concat-form form .left .layui-block input {
  font-size: 12px;
  font-weight: 400;
  color: #333;
  height: 29px;
  width: 100%;
  line-height: 33px;
  padding-left: 28px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: none;
}

#content #main .article .concat-form form .left .layui-block input::-webkit-input-placeholder {
  font-size: 12px;
  font-weight: 400;
  color: #999999;
}

#content #main .article .concat-form form .left .layui-block input::-moz-placeholder {
  font-size: 12px;
  font-weight: 400;
  color: #999999;
}

#content #main .article .concat-form form .left .layui-block input:-ms-input-placeholder {
  font-size: 12px;
  font-weight: 400;
  color: #999999;
}

#content #main .article .concat-form form .left .layui-block input::-ms-input-placeholder {
  font-size: 12px;
  font-weight: 400;
  color: #999999;
}

#content #main .article .concat-form form .left .layui-block input::placeholder {
  font-size: 12px;
  font-weight: 400;
  color: #999999;
}

#content #main .article .concat-form form .left .layui-block select {
  font-size: 12px;
  font-weight: 400;
  color: #333;
  height: 35px;
  line-height: 35px;
  padding-left: 28px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#content #main .article .concat-form form .left .layui-block .layui-form-select dl {
  font-size: 14px;
}

#content #main .article .concat-form form .left .layui-block .layui-form-select dl dd.layui-this {
  background-color: #2B77DF;
}

#content #main .article .concat-form form .left .code-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

#content #main .article .concat-form form .left .code-wrap>div {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

#content #main .article .concat-form form .left .code-wrap button {
  width: 77px;
  height: 35px;
  background: -webkit-gradient(linear, left top, left bottom, from(#9AC4FF), to(#2A74DA));
  background: linear-gradient(180deg, #9AC4FF 0%, #2A74DA 100%);
  -webkit-box-shadow: 0px 3px 6px 1px rgba(43, 119, 223, 0.502);
  box-shadow: 0px 3px 6px 1px rgba(43, 119, 223, 0.502);
  border-radius: 0px;
  margin: 15px 0 0 10px;
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF;
  border: none;
  outline: none;
  cursor: pointer;
}

#content #main .article .concat-form form .right {
  width: 320px;
}

#content #main .article .concat-form form .right ul {
  margin: 0 auto;
  width: 255px;
}

#content #main .article .concat-form form .right ul.p li:nth-of-type(n+2) p {
  letter-spacing: 2px;
  font-size: 14px;
}

#content #main .article .concat-form form .right ul li {
  min-height: 35px;
  background: #ECF4FA;
  margin-top: 28px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

#content #main .article .concat-form form .right ul li:first-of-type {
  margin-top: 14px
}

#content #main .article .concat-form form .right ul li span {
  font-size: 13px;
  font-weight: 400;
  color: #2B77DF;
  padding-left: 10px;
  padding-top: 3px;
}

#content #main .article .concat-form form .right ul li p {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  padding-bottom: 0;
  width: 170px;
  line-height: 16px;
  padding-top: 10px;
  padding-bottom: 8px;
  word-wrap: break-word;
}

#content #main .article .concat-form form .center {
  width: 80px;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
}

#content #main .article .concat-form form .center .btn {
  z-index: 10;
  width: 78px;
  height: 78px;
  position: relative;
  border-radius: 50%;
  text-align: center;
}

#content #main .article .concat-form form .center .btn button {
  cursor: pointer;
  width: 55px;
  height: 55px;
  background: -webkit-gradient(linear, left top, left bottom, from(#9AC4FF), to(#2A74DA));
  background: linear-gradient(180deg, #9AC4FF 0%, #2A74DA 100%);
  -webkit-box-shadow: 0px 3px 6px 1px rgba(43, 119, 223, 0.502);
  box-shadow: 0px 3px 6px 1px rgba(43, 119, 223, 0.502);
  border: none;
  outline: none;
  border-radius: 50%;
  margin-top: 12px;
  margin-left: 1px;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 16px;
  letter-spacing: 4px;
  padding-left: 2px;
}

#content #main .article .concat-form form .center .btn::before,
#content #main .article .concat-form form .center .btn::after {
  content: "";
  position: absolute;
  width: 80px;
  height: 143px;
  left: -1px;
  top: 0px;
  -webkit-transform: translateY(-119px);
  transform: translateY(-119px);
  background-image: url(../images/ca490f38.png);
}

#content #main .article .concat-form form .center .btn::after {
  -webkit-transform: translateY(54px);
  transform: translateY(54px);
  background-image: url(../images/64a191a2.png);
}

#content #main .article .concat-form form .center .circle {
  position: absolute;
  top: 131px;
  left: 0px;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: #2B77DF;
  z-index: 6;
  -webkit-animation: scale-three2 1.5s ease infinite;
  animation: scale-three2 1.5s ease infinite;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}


.w640 {
  width: 800px;
}

.com-detail-width {
  padding-left: 50px;
  width: 1220px;
}

#main-cont img {
  max-width: 84% !important;
  margin-left: 8%;
}

body .iedu-menu-wrap .iedu-menu-box .iedu-menu li.parentMenu>a span::after {
  top: 5px;
}

.fix {
  position: fixed;
  top: 0px;
  _position: absolute;
  z-index: 100;
  margin-top: 0;
}

.ad {
  border: 1px solid #ddd;
  margin-top: 7px;
}

.ad h2,
.ad p {
  padding: 0 9px;
}

.ad h2 {
  margin: 8px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 652px;
}

.scroll_ad {
  width: 490px;
  height: 340px;
  position: relative;
  overflow: hidden;
}

.scroll_ad .bg {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 41px;
  background: #000;
  opacity: 0.5;
  filter: alpha(opacity=50);
}

.scroll_ad .pic {
  width: 9999px;
}

.scroll_ad .pic li {
  float: left;
  width: 490px;
  height: 340px;
}

.scroll_ad .txt {
  position: absolute;
  width: 375px;
  height: 40px;
  left: 10px;
  bottom: 0;
  z-index: 1;
}

.scroll_ad .txt li {
  display: none;
}

.scroll_ad .pic img {
  width: 490px;
  height: 340px;
}

.scroll_ad .txt p {
  width: 375px;
  text-overflow: ellipsis;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
}

.scroll_ad p a,
.small_ad p a {
  font-size: 28px;
  color: #fff;
}

.prev,
.next {
  width: 40px;
  height: 50px;
  position: absolute;
  top: 50%;
  margin-top: -25px;
  z-index: 1;
}

.prev {
  background: url(../images/newindex/play.png) -15px -18px no-repeat;
  left: 0;
  _background: url(../images/newindex/ie6_play.gif) 0 0 no-repeat;
  _filter: alpha(opacity=30);
}

.next {
  background: url(../images/newindex/play.png) -152px -18px no-repeat;
  right: 0;
  _background: url(../images/newindex/ie6_play.gif) -122px 0 no-repeat;
  _filter: alpha(opacity=30);
}

.prev:hover {
  background: url(../images/newindex/play.png) -22px -217px;
  _background: url(../images/newindex/ie6_play.gif) 0 0 no-repeat;
  _filter: alpha(opacity=80);
}

.next:hover {
  background: url(../images/newindex/play.png) -146px -217px;
  _background: url(../images/newindex/ie6_play.gif) -122px 0 no-repeat;
  _filter: alpha(opacity=80);
}

.dot {
  position: absolute;
  right: 0;
  height: 12px;
  bottom: 12px;
  z-index: 0;
}

.dot span {
  float: left;
  display: inline;
  width: 9px;
  height: 9px;
  background: url(../images/newindex/dot.png) 0 0 no-repeat;
  margin-right: 12px;
  cursor: pointer;
}

.dot .active {
  background: url(../images/newindex/dot_over.png) 0 0 no-repeat;
}

.small_ad {
  width: 175px;
  overflow: hidden;
  position: relative;
}

.small_ad .bg {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 30px;
  background: #000;
  opacity: 0.5;
  filter: alpha(opacity=50);
}

.small_ad li {
  width: 175px;
  height: 110px;
  position: relative;
  overflow: hidden;
  position: relative;
  *left: -16px;
  margin-bottom: 5px;
}

.small_ad li img {
  width: 175px;
  height: 110px;
}

.small_ad p {
  position: absolute;
  width: 171px;
  padding: 0 2px;
  height: 20px;
  z-index: 1;
  left: 0;
  bottom: 6px;
  text-align: center;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.small_ad p a {
  font-size: 14px;
}

.mail {
  width: 280px;
  height: 86px;
  background: #e9e9e9;
  padding-left: 20px;
  margin: 7px 0 14px;
}

.mail div {
  font-size: 20px;
  color: #000;
  font-weight: normal;
  padding-top: 6px;
  padding-bottom: 9px;
}

.mail .mail_txt {
  border: none;
  border-top: 1px solid #bbbaba;
  border-left: 1px solid #bbbaba;
  width: 212px;
  height: 27px;
  line-height: 27px\9;
  padding-left: 9px;
  margin-right: 10px;
  color: #8f8f8f;
  outline: none;
}

.sub_btn {
  width: 28px;
  height: 28px;
  background: url(../images/newindex/sub_btn.png) 0 center no-repeat;
  color: #fff;
}


.column_list {
  font-size: 17px;
  position: relative;
  z-index: 1;
}

.column_list li {
  float: left;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid #000;
}

.column_list li.ml5 {
  padding-left: 12px !important;
  margin-left: 0;
}

.column_list li a {
  color: #000;
  display: block;
}

.column_list li a:hover {
  text-decoration: none;
  color: #fff;
}

.column_list li.on {
  background: #000;
}

.column_list .on a {
  color: #fff;
}

.column_list .column_list_last {
  width: 84px;
}

.more_news_list {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 34px;
  width: 186px;
  border: 1px solid #e5e5e5;
  border-top: none;
  border-bottom: none;
}

.column_list_last .more_news_list a {
  width: 93px;
  height: 29px;
  line-height: 29px;
  font-size: 16px;
  color: #444;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
  font-weight: normal;
  float: left;
  overflow: hidden;
}

.column_list .more_news a {
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
}

.column_list_last .more_news_list a:hover,
.column_list .more_news a:hover {
  color: #0262af;
  text-decoration: none;
}

.column_list i {
  background: url(../images/newindex/dire_down.gif) 0 center no-repeat;
  display: inline-block;
  width: 13px;
  height: 7px;
  margin-left: 5px;
  cursor: pointer;
  vertical-align: middle;
}

.column_list_last .active i {
  background: url(../images/newindex/dire_up.gif) 0 center no-repeat;
  display: inline-block;
  width: 13px;
  height: 7px;
  margin-left: 5px;
  cursor: pointer;
  vertical-align: middle;
}

.news-title span {
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0;
  color: #272727;
}

.column_con .news {
  display: flex;
}

.news,
.big-news {
  border-bottom: 1px solid #e9e9e9;
  padding: 20px 0;
}

.news h3,
.big-news h3 {
  font-size: 20px;
}

.news h3 {
  margin-top: -4px;
}

.news dt {
  width: 218px;
  margin-right: 10px;
}

.news dd div,
.big-news div {
  color: #999;
}

.news a,
.big-news a {
  color: #000;
}

.news .fz24 {
  font-size: 20px;
  margin-top: -4px;
  font-weight: bold;
  position: relative;
}

.news .fz24 a {
  color: #000;
}

.news .fz24 a:hover {
  color: #000;
}

.news p {
  color: #999;
}

.grey-block {
  display: inline-block;
  width: 8px;
  height: 8px;
  overflow: hidden;
  background: #e9e9e9;
  margin-right: 10px;
  margin-top: 13px;
}

.news-line {
  width: 580px;
  height: 1px;
  background: #e9e9e9;
  overflow: hidden;
  margin: 20px 0;
}

.news dd a.mr10 {
  color: #455e85;
}

.more {
  width: 100%;
  height: 40px;
  display: block;
  margin-bottom: 80px;
  line-height: 40px;
  text-align: center;
  background: #f1f1f1 url(../images/newindex/more_down.gif) 310px center no-repeat;
}

.more.loading span {
  display: inline-block;
  padding-left: 30px;
  background: #f1f1f1 url(../images/loading.gif) 0 50% no-repeat;
}

.more:hover,
.more-comment:hover {
  text-decoration: none;
}

.hot h3 {
  width: 150px;
  height: 35px;
  background: #007ac8;
  color: #fff;
  line-height: 35px;
  text-align: center;
  margin-bottom: 15px;
}

.hot i {
  background: url(../images/newindex/hot-ico.gif) 0 0 no-repeat;
  display: inline-block;
  width: 8px;
  height: 12px;
  margin-right: 5px;
}

.hot ul li {
  line-height: 24px;
  margin: 0 10px 5px;
  _padding-bottom: 5px;
  padding-left: 8px;
  border-bottom: 1px solid #ddd;
}

.hot ul li a {
  color: #000;
  font-size: 14px;
}

.hot ul li p {
  color: #6c6c6c;
}


.weixin-box {
  width: 270px;
  height: 215px;
  background: url(../images/newindex/weixin-bg.jpg) 0 0 no-repeat;
  margin: 25px 0;
  color: #fff;
  line-height: 26px;
  padding: 15px 0 0 30px;
  position: relative;
}

.weixin-box dl {
  width: 225px;
}

.sina-guanzhu {
  width: 62px;
  height: 22px;
  background: url(../images/newindex/sina.jpg) no-repeat;
  display: inline-block;
  vertical-align: middle;
}

.guanzhu {
  position: absolute;
  left: 30px;
  bottom: 16px;
  width: 230px;
  height: 65px;
}

.guanzhu p {
  line-height: 25px;
}

.side-ad,
.stock,
.side-bg {
  width: 298px;
  /*border:1px solid #ddd; border-top:2px solid #333;*/
}

.side-ad ul {
  height: 29px;
  *height: 30px;
  border-bottom: 1px solid #333;
}

.side-ad ul li {
  float: left;
  display: inline;
  line-height: 29px;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 14px;
  padding: 0 15px;
  cursor: pointer;
}

.side-ad ul .active {
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  border-top: 2px solid #333;
  border-bottom: 1px solid #fff;
  position: relative;
  top: -2px;
}

.stock-title li.active {
  top: 1px;
}

.stock .stock-title td {
  border-bottom: 1px solid #333;
  color: #000;
  font-weight: bold;
  font-size: 14px;
  height: 30px;
}

.stock table td {
  border-bottom: 1px dashed #dbe4e9;
  height: 39px;
  text-align: center;
}

.stock table .last td {
  border-bottom: none;
}

#scroll_stock {
  height: 224px;
  overflow: hidden;
}

.stock ul span {
  display: inline-block;
  width: 80px;
  text-align: center;
}

.stock .rise {
  width: 50px;
}

.stock-price,
.rise {
  color: #c20000;
}

.stock .stock-price {
  text-align: left;
  padding-left: 10px;
  width: 70px;
}

#scroll_stock ul li {
  line-height: 32px;
}

.point-con {
  margin-bottom: 18px;
}

.point-con h3 {
  margin-bottom: 10px;
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 298px;
  font-weight: bold;
}

.point-con .notice {
  margin-bottom: 10px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 298px;
  font-weight: bold;
}

.point-con h3 a,
.point-con .notice a {
  color: #101010;
}

.point-con dl {
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 15px;
}

.point-con dt {
  float: left;
  width: 100px;
}

.point-con dd {
  width: 181px;
  float: right;
  line-height: 20px;
  color: #666;
  margin-top: -4px;
}

.side_block h2.title {
  height: 29px;
  font-size: 20px;
  color: #000;
  font-weight: normal;
  line-height: 29px;
  border-bottom: 2px solid #2a292a;
}

.point-con .no-border {
  border-bottom: none;
  padding-bottom: 0;
}

.side-banner {
  border: 1px solid #ddd;
  margin-top: 15px;
}

.play_btn {
  margin-top: 85px;
  margin-left: 110px;
}

.play_btn li {
  width: 10px;
  height: 10px;
  margin-right: 20px;
  background: #3a63aa;
  border: 1px solid #ced8ea;
  float: left;
  display: inline;
  cursor: pointer;
}


#scroll_news {
  height: 215px;
  width: 300px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}


#scroll_news ul li {
  width: 300px;
  line-height: 30px;
  font-size: 14px;
  color: #666;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
}

#scroll_news .bg {
  width: 240px;
  height: 30px;
  left: 30px;
  top: 91px;
  position: absolute;
  background-color: #7FBCE3;
  z-index: -1;
  margin: 0 auto;
}

#scroll_news ul li a {
  color: #000;
}

#scroll_news ul .active {
  font-size: 22px;
  color: #fff;
  width: 240px;
  margin: 0 auto;
  text-align: center;
  overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

#scroll_news ul .active a {
  color: #fff;
}

.tags {
  width: 300px;
  background: #fff;
  margin-bottom: 20px;
}

.tags h3 {
  font-weight: normal;
  font-size: 20px;
  color: #000;
}

#div1 {
  position: relative;
  width: 298px;
  height: 250px;
  margin: 5px auto;
  overflow: hidden;
  border-top: 2px solid #000;
}

#div1 a {
  position: absolute;
  top: 20px;
  left: 0px;
  font-size: 14px;
  text-decoration: none;
}


.article {}

/* .article h1{ font-size:28px; color:#000; margin-bottom:10px;line-height: 40px;} */
.article h1 {
  font-size: 32px;
  color: #000;
  margin-bottom: 20px;
  line-height: 50px;
  text-align: justify;
  font-weight: 600;
}

.article .subtitle {
  margin: 10px 0;
  font-size: 18px;
  color: #333;
}

.desc-box {
  border-bottom: 1px solid #ddd;
  line-height: 24px;
  padding: 5px 0;
}

.desc-box .desc {
  line-height: 24px;
  height: 24px;
  margin: 0;
  float: left;
  padding: 0;
}

.desc-box .tg {
  float: left;
}

.desc-box .desc span {
  line-height: 24px;
  height: 24px;
  padding: 0;
}

.desc-box .clear {
  clear: both;
  margin: 0;
  padding: 0;
}

.art_login {}

.art_login span {
  color: #ccc;
}

.sub_ico {
  background: url(../images/newindex/tg.png) 0 0 no-repeat;
  margin: 0;
  line-height: 12px;
  display: inline-block;
  width: 60px;
  height: 24px;
}

.article_mail {
  width: 672px;
  background: #efefef;
  margin-top: 24px;
}

#dy div.fl {
  background: url(../images/newindex/title_bg.gif) 0 0 no-repeat;
  width: 103px;
  padding-left: 16px;
  height: 60px;
  font-size: 20px;
  color: #000;
  font-weight: normal;
  line-height: 60px;
}

.article_mail form {
  padding-top: 18px;
  height: 30px;
  line-height: 30px;
  margin-left: 9px;
}

.article_mail label {
  color: #4a4a4a;
}

.article_mail .mail_txt {
  background: #fff;
  border: none;
  border-top: 1px solid #bbbaba;
  border-right: 1px solid #bbbaba;
  width: 232px;
  height: 27px;
  line-height: 27px\9;
  padding-left: 9px;
  margin-right: 18px;
  color: #8f8f8f;
  outline: none;
}

.article_code .pb20 {
  font-size: 20px;
  color: #000;
  font-weight: bold;
}

.code_box {
  margin: 0 auto;
  width: 368px;
}

.mr129 {
  margin-right: 124px;
}

.article_code dl dt {
  border: 1px solid #ccc;
}


.c999 {
  color: #999;
}

.article .con {
  font-size: 16px;
  color: #000;
  line-height: 24px;
}

.article {
  margin-bottom: 18px;
  text-align: justify;
}

.article .con p img {
  display: block;
  margin: 0 auto !important;
  /*width: 500px!important;*/
  height: auto !important;
}

.article .con .con-img {
  width: 650px;
  margin: 0 auto;
  text-indent: 0;
}

.share {
  width: 750px;
  height: 40px;
  line-height: 40px;
  background: #f5f5f5;
}

.article .con a {
  color: #085aad;
}

.key_read {
  font-size: 14px;
  line-height: 22px;
}

.key_read dt {
  color: #000;
}

.key_read dd a {
  height: 22px;
  line-height: 22px;
  text-align: center;
  display: inline-block;
  background: url(../images/newindex/key_l.gif) left center no-repeat;
  margin-right: 3px;
  color: #0097ff;
}

.key_read dd .key_right {
  height: 22px;
  display: inline-block;
  background: url(../images/newindex/key_r.gif) right center no-repeat;
}

.key_read dd .key_right span {
  background: url(../images/newindex/key_m.gif) center center repeat-x;
  display: inline-block;
  height: 22px;
  margin: 0 10px;
  padding: 0 3px;
}

.list1 {
  font-size: 14px;
}

.list1 li {
  line-height: 30px;
  height: 30px;
  vertical-align: top;
}

.list1 li a {
  color: #000;
}

.list1 li strong {
  color: #df0212;
  font-weight: normal;
}

.list li {
  float: left;
  display: inline;
  width: 145px;
  margin-right: 22px;
}

.list li p {
  margin-top: 7px;
  height: 40px;
  _height: 41px;
  _overflow: hidden;
}

.list li a {
  font-size: 14px;
  color: #000;
  line-height: 20px;
}

.list li a img {
  width: 145px;
  height: 102px;
  border: 0;
}

.list .no-margin {
  margin-right: 0;
}

#youlike {
  width: 300px;
}

.recommend {
  background: #2a292a;
  color: #fff;
  padding: 2px 10px;
  font-size: 18px;
}

.publish {
  width: 100%;
  height: 108px;
}

.publish .person {
  width: 107px;
  height: 108px;
  border: 1px solid #ccc;
  text-align: center;
}

.person img {
  margin: 19px 0 16px 0;
}

.kuang {
  width: 561px;
  height: 108px;
  border: 1px solid #ccc;
  margin-left: -1px;
}

.say-con {
  display: inline-block;
  border: none;
  *border: 1px solid #fff;
  width: 555px;
  _width: 553px;
  height: 104px;
  *height: 98px;
  _height: 100px;
}

.qqlogin {
  width: 79px;
  height: 22px;
  background: url(../images/newindex/qqlogin.gif) 0 0 no-repeat;
  display: inline-block;
}

.weibologin {
  width: 84px;
  height: 22px;
  background: url(../images/newindex/weibologin.gif) 0 0 no-repeat;
  display: inline-block;
}

.publish-btn,
.reponse {
  width: 100px;
  height: 28px;
  background: url(../images/newindex/publish.gif) right 0 no-repeat;
  float: right;
  margin-top: 5px;
}

.comm-info .content {
  border: 1px solid #cad1d7;
  padding: 5px 10px;
  background: #f5f5f5;
  margin: 5px 0;
}

.comm-info .content pre {
  margin: 0;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}

.double-c-line {
  border-bottom: 1px solid #d3d3d3;
}

.double-c-line strong {
  border-bottom: 1px solid #000;
  display: inline-block;
}

.ping {
  width: 15px;
  height: 10px;
  background: url(../images/newindex/comm-ico.gif) left center no-repeat;
  display: inline-block;
  margin-right: 2px;
}

.ding,
.cai {
  width: 15px;
  height: 15px;
  background: url(../images/newindex/comm-ico.gif) -15px center no-repeat;
  display: inline-block;
}

.cai {
  background-position: -27px center;
}

.comment {
  padding-bottom: 20px;
  border-bottom: 1px dashed #d3d3d3;
  margin: 0 20px 28px;
}

.comment img {
  margin-left: 5px;
}

.comment p {
  line-height: 24px;
  font-size: 14px;
  color: #000;
}

.comm {
  width: 557px;
}

.comment a {
  color: #888;
}

.comm-box .comm-txt {
  width: 627px;
  height: 100px;
  border: 1px solid #ccc;
}

.news-rank ul {
  line-height: 24px;
}

.side-title h2 {
  font-weight: normal;
  border-bottom: 2px solid #000;
  font-size: 20px;
  padding-bottom: 2px;
}

.news-rank ul li {
  margin-bottom: 5px;
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 5px;
}

.news-rank ul li.last {
  border-bottom: none;
}

.news-rank ul h3 a {
  font-size: 14px;
  color: #101010;
  font-weight: normal;
}

.news-rank ul li div {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 298px;
  font-weight: normal;
}

.news-rank ul li div a {
  font-size: 14px;
  color: #101010;
  font-weight: normal;
}

.news-rank ul h3 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 298px;
  font-weight: normal;
}

.news-rank ul em {
  color: #444;
  font-size: 14px;
  font-weight: bold;
}

.news-rank p a {
  font-size: 12px;
  color: #999;
}

.news-rank p {
  text-indent: 17px;
}

.more-comment {
  width: 750px;
  height: 40px;
  display: block;
  line-height: 40px;
  text-align: center;
  background: #e8e8e8;
  margin-bottom: 230px;
  margin-top: -29px;
  color: #000;
  font-size: 14px;
}

.more-comment a:hover {
  text-decoration: none;
}

.page-nav {
  font-size: 26px;
  color: #0069b2;
  font-weight: normal;
}

.page-nav span {
  font-size: 14px;
  color: #000;
}

.science {
  width: 24px;
  height: 25px;
  display: inline-block;
  background: url(/statics/images/newindex/lx.png) no-repeat;
  margin-right: 6px;
  position: relative;
  top: 0px;
}

.sclive {
  width: 24px;
  height: 25px;
  display: inline-block;
  background: url(/statics/images/newindex/px.png) no-repeat;
  margin-right: 6px;
  position: relative;
  top: 0px;
}

.sccaij {
  width: 24px;
  height: 25px;
  display: inline-block;
  background: url(/statics/images/newindex/jy.png) no-repeat;
  margin-right: 6px;
  position: relative;
  top: 0px;
}

.ks {
  width: 24px;
  height: 25px;
  display: inline-block;
  background: url(/statics/images/newindex/ks.png) no-repeat;
  margin-right: 6px;
  position: relative;
  top: 0px;
}

.scwar {
  width: 24px;
  height: 25px;
  display: inline-block;
  background: url(/statics/images/newindex/war.gif) no-repeat;
  margin-right: 6px;
  position: relative;
  top: 0px;
}

.page-nav .line {
  color: #ababab;
}

.science-ad {
  position: relative;
  width: 670px;
  height: 360px;
}

.kjk {
  position: relative;
  width: 300px;
  height: 210px;
  margin-bottom: 8px;
}

.science-ad .ad-bg,
.kjk .ad-bg {
  position: absolute;
  width: 670px;
  height: 79px;
  background: #303030;
  opacity: 0.8;
  filter: alpha(opacity=80);
  position: absolute;
  bottom: 0;
  left: 0;
}

.kjk .ad-bg {
  width: 300px;
  height: 35px;
}

.science-ad p,
.kjk p {
  font-weight: bold;
  font-size: 32px;
  position: absolute;
  left: 0;
  bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  width: 670px;
  text-overflow: ellipsis;
  color: #fff;
}

.kjk p {
  width: 280px;
  font-size: 14px;
  font-weight: normal;
  bottom: 10px;
  padding: 0 10px;
}

.science-ad p a:hover,
.kjk p a:hover {
  text-decoration: none;
}

.page-nav i {
  display: inline-block;
  top: 3px;
  position: relative;
  margin-right: 5px;
  width: 30px;
  height: 26px;
}

.life-ico {
  width: 25px;
  height: 25px;
  background: url(../images/newindex/live.gif) 0 bottom no-repeat;
}

.caij-ico {
  width: 29px;
  height: 20px;
  background: url(../images/newindex/caij.gif) no-repeat;
}

.zhanlv-ico {
  width: 20px;
  height: 27px;
  background: url(../images/newindex/war.gif) no-repeat;
}

.ad-con {
  border: 1px solid #ddd;
}

.shiqu ul li {
  background: url(../images/newindex/art_point.gif) 0 center no-repeat;
  padding-left: 9px;
  line-height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 289px;
}

.shiqu li a {
  color: #101010;
  font-size: 14px;
}

.c15930 {
  color: #159300;
}

.c936f0f {
  color: #936f0f;
}

.c5d4a9b {
  color: #5d4a9b;
}

.pagebox {
  margin-top: 90px;
  width: 340px;
  margin-left: auto;
  margin-right: auto;
}

.pagebox span {
  float: left;
  width: 28px;
  height: 28px;
  background: #fefefe;
  border: 1px solid #dcdcdc;
  margin-right: 10px;
  line-height: 28px;
  text-align: center;
}

.pagebox span a {
  display: block;
  color: #000;
}

.pagebox span a:hover {
  text-decoration: none;
}

.pagebox .pagebox-pre,
.pagebox .pagebox-next {
  width: 58px;
}

.ckj-des {
  color: #333;
  text-align: center;
}

.ckj-des h1 {
  font-size: 100px;
  font-weight: normal;
  margin-top: 64px;
  margin-bottom: 20px;
}

.ckj-des p {
  font-size: 24px;
  line-height: 54px;
}

.about-con {
  width: 100%;
  height: 320px;
  background: #f2f2f2 url(../images/newindex/about2.gif) right top no-repeat;
  text-align: left;
  padding-top: 40px;
}

.about-con p {
  width: 530px;
  line-height: 30px;
  padding-bottom: 15px;
  font-size: 16px;
  color: #000;
}

.lanmu p {
  line-height: 43px;
}

.lanmu .lan-con {
  font-size: 20px;
  color: #454545;
}

.lanmu ul li {
  margin-right: 26px;
  width: 221px;
  height: 300px;
  border: 1px solid #d8d8d8;
  text-align: center;
  padding-top: 28px;
}

.lanmu .no-margin-r {
  margin-right: 0;
}

.lanmu li.active {
  background: #99d5ff;
}

.lanmu .know-more {
  width: 98px;
  height: 28px;
  background: #4c9fd8;
  display: block;
  color: #fff;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  border-radius: 3px;
  margin: 8px auto 0;
}

.know-more:hover {
  text-decoration: none;
}

.ad-service {
  height: 380px;
  border-top: 1px solid #bebebe;
  background: url(../images/newindex/ads-bg.gif) right top repeat-y;
  position: relative;
  margin-bottom: 130px;
  margin-top: 60px;
}

.ad-service h3 {
  font-size: 30px;
  color: #000;
  font-weight: normal;
  position: absolute;
  left: 0;
  top: -17px;
  background: #fff;
  padding-right: 10px;
}

.ad-service dl {
  padding-top: 1px;
}

.ad-service dt {
  position: absolute;
  right: 6px;
  bottom: 0;
  height: 369px;
  width: 377px;
}

.ad-service dl dd {
  font-size: 20px;
  color: #000;
}

.phone,
.fax,
.email {
  /*background:url(../images/newindex/adv-ico.gif) no-repeat;*/
  height: 20px;
  padding-left: 25px;
  line-height: 20px;
  vertical-align: middle;
}

.phone {
  background-position: 0 0;
}

.fax {
  background-position: 0 -16px;
}

.email {
  background-position: 0 -36px;
}

.tgmail {
  background: url(../images/newindex/laigao.gif) 0 0 no-repeat;
  height: 91px;
  padding-left: 180px;
  line-height: 91px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.tags_jj {
  line-height: 28px;
  padding-bottom: 17px;
  margin-bottom: 19px;
  margin-top: 28px;
}

.tags_jj dt {
  font-size: 26px;
  color: #000;
  margin-bottom: 5px;
}

.tags_jj dd {
  font-size: 16px;
  color: #333;
}

.result h2 {
  font-weight: normal;
}


/* 翻页条 */
#pages {
  text-align: center;
  margin: 0;
  height: 116px;
  padding-top: 38px;
  box-sizing: border-box;
}

#pages span {
  height: 35px;
  background: #338EFF;
  border-radius: 2px;
  line-height: 35px;
  font-size: 14px;
  letter-spacing: -1px;
  border: 1px solid #338EFF;
  display: inline-block;
  padding: 0 10px;
  color: #fff;
}

#pages a {
  height: 35px;
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 2px;
  padding: 0 10px;
  color: rgba(153, 153, 153, 1);
  line-height: 35px;
  font-size: 13px;
  letter-spacing: -1px;
  display: inline-block;
}

#pages a:hover {
  background: #f1f1f1;
  color: #000;
  text-decoration: none;
}

#pages a:first-child {
  width: auto;
  padding: 0 10px;
}


.page .noPage {
  display: inline-block;
  width: 56px;
  height: 22px;
  line-height: 22px;
  background: url(../img/icu/titleBg.png) repeat-x 0 -55px;
  border: 1px solid #e3e3e3;
  text-align: center;
  color: #a4a4a4;
}

.tougao_con {
  color: #333;
  margin-top: 11px;
}

.tg_title {
  font-size: 38px;
  color: #333;
  width: 210px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 24px;
  margin-bottom: 14px;
}

.ckj_desc {
  border-bottom: 1px solid #ccc;
  padding-bottom: 60px;
  margin-bottom: 12px;
}

.ckj_desc p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
}

.ckj_desc p strong,
.please_tg strong {
  font-size: 24px;
  font-weight: normal;
}

.please_tg {
  font-size: 16px;
  line-height: 30px;
}

.tg_rules {
  font-size: 16px;
  line-height: 32px;
  margin-top: 66px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 73px;
  margin-bottom: 24px;
}

.tg_rules dt {
  font-size: 18px;
  margin-bottom: 4px;
}

.tg_method {
  font-size: 16px;
  line-height: 32px;
}

.tg_sm {
  color: #7f7f7f;
  line-height: 22px;
  padding-bottom: 65px;
}

#tags {
  margin-top: 5px;
  padding: 5px;
  border: 1px #E8E8E8 solid;
  border-top: 2px #262626 solid;
  text-align: center;
  word-wrap: break-word;
}

#tags a {
  text-decoration: none;
}

#tags a:hover {
  text-decoration: underline;
}

.result a img {
  width: 145px;
  height: 95px;
}

.result_con {
  width: 505px;
}

.tagtitle {
  font-size: 20px;
  color: #000;
}

.label_list {
  border-top: 2px solid #000;
  margin-top: 6px;
}

.label_list .all {
  background: #000;
  color: #fff;
  padding: 5px 0;
  width: 50px;
  text-align: center;
  font-size: 14px;
  margin-right: 5px;
}

.label_list .all a {
  color: #fff;
}

.label_list li {
  float: left;
  text-align: center;
  width: 35px;
  font-size: 14px;
  cursor: pointer;
}

.label_list li a {
  display: block;
  padding: 2px 0;
  color: #000;
  _width: 35px;
}

.label_list a:hover {
  background: #000;
  color: #fff;
  text-decoration: none;
}

.label_box {
  padding-bottom: 40px;
}

.label_con h3 {
  font-size: 26px;
  color: #b2b2b2;
  font-weight: normal;
  width: 48px;
}

.label_con ul {
  width: 938px;
  border-left: 1px solid #e5e5e5;
  padding-left: 12px;
}

.label_con ul li {
  float: left;
  width: 117px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 29px;
}

.label_con ul li a {
  color: #333;
  font-size: 14px;
}

/*关键词*/
.word_ad {
  background: #f8f8f8;
  border: 1px solid #ddd;
  padding: 10px 10px 0;
  margin-bottom: 20px;
  margin-top: 17px;
}

.word_ad dt {
  padding-right: 10px;
}

.word_ad dd {
  width: 500px;
}

.word_ad dd h3 {
  font-weight: normal;
  line-height: 19px;
}

.word_ad dd h3 a {
  font-size: 14px;
  color: #085aad;
}

.word_ad dd h3 a:hover {
  color: #e20000;
}

.word_ad dd h3 strong {
  color: #e20000;
  font-weight: normal;
}

.word_ad dd p {
  font-size: 12px;
  color: #666;
  margin-top: 2px;
  line-height: 18px;
}

.word_ad dd ul li {
  background: url(//images.ofweek.com/lights/images/ico_down.gif) left top no-repeat;
  padding-left: 23px;
  padding-bottom: 11px;
}

#word_ad_service dd ul {
  max-height: 100px;
  overflow: hidden;
}

.article .con p img+span {
  display: none;
}

/*关联签约院校*/
.college_list {
  border: 1px solid #e7e7e7;
}

.college_list .items {
  padding: 10px 0;
}

.college_list .items img {
  max-width: 150px;
  max-height: 150px;
  vertical-align: middle;
  display: inline-block;
  display: inline;
  zoom: 1;
}

.college_list .items .sem-l {
  width: 232px;
}

.college_list .items .sem-l>a {
  border: 1px solid #e9e9e9;
}

.college_list .items .sem-l img {
  width: 230px;
  height: 56px;
  max-width: 230px;
  max-height: 56px;
}

.college_list .items .sem-r {
  width: 434px;
}

.college_list .items .sem-r .up {
  line-height: 36px;
}

.college_list .items .sem-r .up h3 {
  line-height: 36px;
  height: 36px;
}

.college_list .items .sem-r .name {
  font-size: 18px;
  color: #333333;
  font-weight: 600;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.college_list .items .sem-r .up .reg {
  margin-right: 10px;
  width: 120px;
  text-align: center;
  background: #f14119;
  border-radius: 2px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

.college_list .items .sem-r .up .reg:hover {
  text-decoration: none;
}

.college_list .items .sem-r .course {
  font-size: 14px;
  color: #F6A623;
}

.college_list .items .sem-r .course a {
  color: #2A2A2A;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin-right: 20px;
}

/*首页直播*/
.broastcast-cont {
  position: relative;
  margin-top: 15px;
}

.broastcast-status {
  position: absolute;
  top: 5px;
  left: 7px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 2px;
  padding: 5px 10px;
  font-size: 14px;
}

.broastcast-cont img {
  width: 100%;
  height: 185.4px;
}

.broastcast-cont-bottom {
  padding: 18px 16px;
  background: #FFFFFF;
  border: 1px solid #DEDEDE;
  border-top: 0;
  font-size: 14px;
  color: #45596C;
  position: relative;
}

.broastcast-cont-bottom h3 {
  font-size: 16px;
  color: #203653;
  line-height: 16px;
  margin-bottom: 13px;
}

.broastcast-cont-bottom p img {
  width: 13px;
  height: 13px;
  margin-right: 8px;
}

.broastcast-cont-bottom p span {
  color: #999;
  position: absolute;
  right: 16px;
  bottom: 12px;
}

/*首页直播*/
.expo-live-wrap {
  width: 100%;
}

.expo-live-item {
  width: 210px;
  margin-right: 25px;
  margin-top: 28px;
}

.expo-live-item.last {
  margin-right: 0;
}

.expo-live-item .pic {
  width: 210px;
  height: 138px;
  position: relative;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.expo-live-item .pic img {
  max-width: 100%;
  max-height: 100%;
  display: inline-block;


}

.expo-live-item .pic .live-tag {
  width: 49px;
  height: 22px;

  border-radius: 2px;
  font-size: 12px;
  color: #FFFFFF;
  line-height: 22px;
  text-align: center;
  position: absolute;
  top: 8px;
  left: 8px;
}

.expo-live-item .pic .live-tag.look-back {
  background: rgba(0, 0, 0, 0.60);
}

.expo-live-item .pic .live-tag.living {
  background: #ff3e3e;
}

.expo-live-item .pic .live-tag.over-look {
  background: #f5a623;
}

.live-name {
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  padding-top: 12px;
  color: #253751;
  display: block;
  width: 210px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.live-name:hover {
  color: #BF0008;
}

.expo-live-item .time {
  font-size: 12px;
  color: #9B9B9B;
  padding-top: 6px;
  line-height: 17px;
}

.expo-live-item .host {
  font-size: 12px;
  color: #9B9B9B;
  line-height: 17px;
  padding-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 文章列表 */
.w800 {
  width: 800px;
}

.com-width2 {
  width: 1200px;
  margin: 0 auto;
}

.article-list {
  width: 100%;
}

.article-list ul li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #CBC9C9;
}

.article-list ul li:last-of-type {
  border-bottom: none;
}

.article-list ul li .text {
  flex: 1;
}

.article-list ul li .text .title {
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 22px;
  text-align: justify;
}

.article-list ul li .text .title a {
  font-size: 20px;
  font-weight: bold;
  color: #272727;
}

.article-list ul li .text .text-inner {
  height: 66px;
}

.article-list ul li .text .text-inner p {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #999999;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
}

.article-list ul li .text .author a img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  vertical-align: -11px;
  margin-right: 12px;
}

.article-list ul li .text .author a span {
  font-size: 14px;
  font-weight: 400;
  color: #939699;
  line-height: 32px;
  display: inline-block;
  height: 32px;
}

.article-list ul li .image {
  width: 247px;
  height: 164px;
  margin-left: 26px;
}

.article-list ul li .image a img {
  width: 241px;
  height: 164px;
}



@-webkit-keyframes scale-three2 {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.8;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes scale-three2 {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.8;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>