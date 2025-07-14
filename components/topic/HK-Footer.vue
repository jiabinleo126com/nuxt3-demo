<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  $(() => {
    $('#fullyear').text(new Date().getFullYear())
    $('.contact ul').hover(() => {
      $('.right-fixed-nav').hide()
    }, () => {
      $('.right-fixed-nav').show()
    })
  })
})
</script>

<template>
  <footer>
    <div class="con">
      <div class="top">
        <img src="//www.ieduchina.com/topic/2024/hk7/images/8c9d1cc6.png" alt="升学中心">
        <div class="menu">
          <a href="//www.ieduchina.com/service/aboutus.html" target="_blank">关于我们</a>
          <a href="//www.ieduchina.com/hk/" target="_blank">香港升学</a>
          <a href="//www.ieduchina.com/mp/login_member.html" target="_blank">投稿</a>
          <a href="//www.ieduchina.com/service/tousu.html" target="_blank">投诉侵权</a>
          <a href="//www.ieduchina.com/service/ad.html" target="_blank">联系我们</a>
          <a href="//www.ieduchina.com/service/joinus.html" target="_blank">加入我们</a>
        </div>
      </div>
      <div class="contact">
        <div class="left">
          <p>
            <img src="//www.ieduchina.com/topic/2024/hk7/images/d6dd4766.png" alt="" height="30" width="24">
            周一到周日 08:00-21:00<span>400-900-8516</span>
          </p>
          <p>
            <img src="//www.ieduchina.com/topic/2024/hk7/images/a0b3063b.png" alt="" height="30" width="24">
            公司地址<br>
            香港中心：香港尖沙咀柯士甸路188号 港景汇商场临街店铺<br>
            深圳湾中心:深圳市南山区粤海街道海德三道卓越后海金融中心5楼<br>
            福田联合中心:深圳市福田区滨河大道5022号联合广场A座10楼<br>
            福田皇岗中心:深圳市福田区皇岗公园东侧云顶翠峰二期1楼十字路口<br>
            福田安托山中心:深圳市福田区安托山六路侨香雅居商住楼裙楼一楼(深国交东门正对面)<br>
            深圳北中心:深圳市龙华区北站龙华设计产业园总部大厦3栋10楼
          </p>
        </div>
        <ul>
          <li>
            <img src="//www.ieduchina.com/topic/2024/hk6/images/1b8cc5dd.png" alt="活动报名" height="150" width="150">
            <p>下一期探校预约</p>
          </li>
          <li>
            <img src="//www.ieduchina.com/statics/pcc/img/181e94a0.png" alt="选校砖家视频号" height="150" width="150">
            <p>选校砖家视频号</p>
          </li>
          <li>
            <img src="//www.ieduchina.com/statics/hui.jpg" alt="商务合作" height="150" width="150">
            <p>媒体合作</p>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <p>
          <span>
            Copyright ©<a id="fullyear"></a>
            国际教育网 版权所有
          </span>
          <span>网站所有图片、文字未经许可不得拷贝、复制</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="less">
footer .con {
  width: 1280px;
  margin: 0 auto;
}

footer .con .top {
  border-bottom: solid 1px #c7c7c7;
  padding: 80px 0 22px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
}

footer .con .top a {
  margin-left: 46px;
}

footer .con .top img {
  width: 184px;
  height: 75px;
}

footer .con .top .menu {
  padding-bottom: 17px;
}

footer .con .top .menu a {
  font-size: 20px;
  font-weight: 400;
  color: #333;
}

footer .con .contact {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 0;
  padding-bottom: 36px;
  border-bottom: solid 1px #c7c7c7;
}

footer .con .contact .left {
  padding-left: 34px;
}

footer .con .contact .left p {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  padding-top: 18px;
  line-height: 24px;
  position: relative;
}

footer .con .contact .left p img {
  position: absolute;
  left: -32px;
  top: 19px;
  z-index: 1;
}

footer .con .contact .left p span {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  padding-left: 25px;
}

footer .con .contact .left p:last-of-type img {
  top: 15px;
}

footer .con .contact ul {
  width: 500px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 56px;
}

footer .con .contact ul li img {
  width: 150px;
  height: 150px;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
}

footer .con .contact ul li p {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  text-align: center;
  padding-top: 10px;
}

footer .con .bottom p {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 20px 0 30px;
}

footer .con .bottom p span {
  font-size: 14px;
  font-weight: 400;
  color: #333;
}

footer .con .bottom p span a {
  color: #333;
}
</style>
