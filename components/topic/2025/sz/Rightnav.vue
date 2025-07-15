<script setup>
import { onMounted } from 'vue'
import imageqy from '~/assets/topic/2025/sz/企业微信截图_17297359295513.png'
import share from '~/assets/topic/2025/sz/微信分享.png'

onMounted(() => {

  $(document).on("click", ".showTk", function () {
    $(".mask").addClass("show");
  });
  $(document).on("click", ".close", function () {
    $(".mask").removeClass("show");
    $(".error-tips").html("");
    $(this).parents(".mask").find("form")[0].reset();
    $("select").css("color", "#999");
  });
  var inputs = [
    {
      class: "name",
      message: "请输入学生姓名"
    },
    {
      class: "mobile",
      message: "请输入家长手机号"
    },
    {
      class: "grade",
      message: "请选择就读年级"
    },
    {
      class: "want_school",
      message: "意向学校"
    }
  ];
  $(".submit").on("click", function () {
    var form = $(this).closest("form");
    var errors = [];
    var msg = inputs.reduce(function (acc, input) {
      var val = form.find(".".concat(input.class)).val();
      if (!val) {
        errors.push(input.message);
      }
      return errors[0];
    }, "");
    if (msg) {
      layer.msg(msg);
      return false;
    }
    else {
      $.ajax({
        url: "".concat(form[0].action),
        type: form[0].method,
        dataType: "JSON",
        data: form.serialize(),
        success: function (res) {
          if (res.status == 1) {
            $('.mask_form').removeClass('show');
            layer.msg("您已报名成功，谢谢您的参与！");
            $(document).find(".close").click();
            form[0].reset();
            $("select").css("color", "#999");
          }
          else {
            layer.msg(res.info);
          }
        },
        error: function () {
          layer.msg("报名失败，请稍后再试");
        }
      });
    }
    return false;
  });
  $("#go-top").on("click", function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });
  $("select").change(function () {
    $(this).css("color", "#000");
  });
  $('#share').share({
    sites: ['wechat']
  });
})
</script>
<template>
  <div class="right-fixed-nav">
    <ul>
      <li class="right-nav"><img src="//www.ieduchina.com/topic/2024/shenzhen/images/bb5751dd.png" alt="">
        <p class="title2">商务合作</p>
        <div class="right-nav-list">
          <div><img :src="imageqy" alt="">
            <p>商务合作请扫码<br>或联系：153-6164-0708</p>
          </div>
        </div>
      </li>
      <li class="right-nav"><a class="showTk"><img src="//www.ieduchina.com/topic/2024/shenzhen/images/4ef3a511.png"
            alt="">
          <p class="title2">活动预约</p>
        </a></li>
      <li class="right-nav"><img src="//www.ieduchina.com/topic/2024/shenzhen/images/72aad185.png" alt="">
        <p class="title2">家长咨询</p>
        <div class="right-nav-list">
          <div><img src="//www.ieduchina.com/topic/2024/shenzhen/images/d7b7dbc9.jpg" alt="">
            <p>家长咨询请扫码<br>或联系：189-3807-4754</p>
          </div>
        </div>
      </li>
      <li class="right-nav"><img :src="share" alt="">
        <p class="title2">微信分享</p>
        <div class="right-nav-list">
          <div>
            <div id="share"></div>
          </div>
        </div>
      </li>
      <li class="right-nav" id="go-top"><img src="//www.ieduchina.com/topic/2024/shenzhen/images/9b98f400.png" alt="">
        <p class="title2">回到顶部</p>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
body .right-fixed-nav {
  position: fixed;
  right: 0;
  top: 35%;
  width: 98px;
  z-index: 100;
  background-color: #101e5d
}

body .right-fixed-nav ul li {
  position: relative;
  cursor: pointer;
  -webkit-transition: all .1s;
  transition: all .1s;
  text-align: center;
  padding: 15px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

body .right-fixed-nav ul li:hover .right-nav-list {
  -webkit-transform: scale(1);
  transform: scale(1)
}

body .right-fixed-nav ul li:first-of-type .right-nav-list {
  left: -151px;
  top: -26px
}

body .right-fixed-nav ul li:nth-of-type(3) .right-nav-list {
  left: -151px;
  top: -10px
}

body .right-fixed-nav ul li:nth-of-type(4) .right-nav-list {
  left: -151px;
  top: -10px
}

body .right-fixed-nav ul li:last-of-type p.title2 {
  padding-bottom: 0;
  border-bottom: none
}

body .right-fixed-nav ul li>img {
  width: 44px;
  height: 44px
}

body .right-fixed-nav ul li p.title2 {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  width: 70px;
  margin: 0 auto;
  padding-bottom: 14px;
  border-bottom: solid 1px #fff
}

body .right-fixed-nav ul li .right-nav-list {
  border: 1px solid #dcdcdc;
  position: absolute;
  font-size: 16px;
  color: #333;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
  -webkit-transition: -webkit-transform .25s;
  transition: -webkit-transform .25s;
  transition: transform .25s;
  transition: transform .25s, -webkit-transform .25s;
  background-color: #fff
}

body .right-fixed-nav ul li .right-nav-list div {
  display: inline-block;
  width: 149px;
  padding-bottom: 5px
}

body .right-fixed-nav ul li .right-nav-list div img {
  width: 122px;
  height: 122px;
  margin-top: 7px
}

body .right-fixed-nav ul li .right-nav-list div p {
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: #333;
  line-height: 15px;
  margin-top: -4px
}

// 微信分享
#share {
  padding: 6px 0 0 0;

  .wechat-qrcode {
    padding-bottom: 0;

    h4 {
      text-align: center;
      font-size: 12px;
      font-weight: bold;
      color: #333;
      line-height: 15px;
    }

    p {
      text-align: center;
      font-size: 12px;
      font-weight: bold;
      color: #333;
      line-height: 18px;
      padding: 0 5px;
    }

    .help {
      padding-bottom: 0;
    }
  }
}
</style>