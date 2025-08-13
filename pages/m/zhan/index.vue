<script setup>
import { useHead } from 'nuxt/app';
import { defineAsyncComponent, onMounted } from 'vue';
import { grade } from '~/assets/data/index.ts'
const Header = defineAsyncComponent(() => import(`~/components/m/zhan/Header.vue`))
const Footer = defineAsyncComponent(() => import(`~/components/m/zhan/Footer.vue`))
onMounted(() => {
  $(() => {
    var inputs = [];
    $.each($("form").find("input,select"), function (index, item) {
      if ($(item).attr("required")) {
        inputs.push(item);
      }
    });
    $("select").change(function () {
      $(this).css("color", "#333")
    })
    $("button[type=submit]").on("click", function () {
      $(".error-tips").text("");
      var form = $(this).closest("form");
      var errors = [];
      var content = inputs.reduce(function (_acc, input) {
        var val = form.find(input).val();
        if (!val) {
          errors.push(form.find(input).attr("placeholder"));
        }
        return errors[0];
      }, "");
      if (content) {
        layer.open({ content: content, skin: "msg", time: 3 });
        $(".error-tips").text(content);
        return false;
      }
      const num = $("#num_1").val();
      if (!Number(num) || Number(num) < 0 || Number(num) > 5) {
        content = "参加人数请填写阿拉伯数字，且人数不超过5人"
        layer.open({ content: content, skin: "msg", time: 3 });
        $(".error-tips").text(content);
        return false;
      }
      $.ajax({
        url: form[0].action,
        type: form[0].method,
        dataType: "json",
        data: form.serialize(),
        success: function (res) {
          if (res.status == 1) {
            form[0].reset();
            layer.open({
              content: '提交成功',
              skin: 'msg',
              time: 3
            });
            window.location.href = res.info;
          }
          if (res.status == 2) {
            callPay(res.data);
          }
          if (res.status == 0) {
            layer.open({ content: res.info, skin: "msg", time: 3 });
          }
        }
      });
      return false;
    });
  })
})

useHead({
  script: [
    {
      innerHTML: `
      (function () {
            function onResize() {
                var width = document.documentElement.clientWidth;
                var style = document.createElement("style");
                style.setAttribute('id', 'style')
                var html = '';
                if (/Android|webOS|iPhone|iPod|BlackBerry|OpenHarmony/i.test(navigator.userAgent)) {
                    html = "html{font-size: " + width / 780 + "px !important;}";
                } else {
                    html = "html{font-size: " + 1 + "px !important;width:750px !important;margin:0 auto !important;}";
                }
                if (document.getElementById('style')) {
                    document.getElementById('style').innerHTML = html
                } else {
                    style.innerHTML = html;
                    document.head.appendChild(style);
                }
            }
            window.addEventListener('resize', onResize);
            onResize()
        })();
      `
    },
    {
      src: 'https://m.ieduchina.com/statics/js/jquery-3.7.1.min.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://m.ieduchina.com/statics/m/js/layer.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://res2.wx.qq.com/open/js/jweixin-1.6.0.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://m.ieduchina.com/statics/w/js/tgFrom.js',
      type: 'text/javascript',
      body: true,
    },
  ],
  link: [
    {
      itemprop: 'image',
      content: "https://m.ieduchina.com/statics/share.jpg",
    },
    {
      rel: 'apple-touch-icon',
      href: "https://m.ieduchina.com/statics/share.jpg",
    },
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//m.ieduchina.com/favicon.ico',
    }
  ],
  title: "2024全球多元化升学论坛，大湾区国际教育名校升学展",
  meta: [
    {
      name: 'keywords',
      content: '2024全球多元化升学论坛，大湾区国际教育名校升学展',
    },
    {
      name: 'description',
      content: '2024全球多元化升学论坛，大湾区国际教育名校升学展',
    },
  ],
})
</script>
<template>
  <component :is="Header" />
  <section>
    <form action="https://m.ieduchina.com/wxpay/ajax.php?do=zhan" method="post">
      <p>活动报名</p>
      <div :class="$style.input"><span>学生姓名：</span><input name="name" type="text" autocomplete="off"
          placeholder="请输入学生姓名" required></div>
      <div :class="$style.input"><span>手机号码：</span><input name="tel" type="text" autocomplete="off"
          placeholder="请输入手机号码" id="tel" required></div>
      <div :class="$style.input"><span>在读年级：</span><select name="grade" placeholder="请选择在读年级" required>
          <option value="">请选择在读年级</option>
          <option v-for="item in grade" :value="item">{{ item }}</option>
        </select>
      </div>
      <div :class="$style.input"><span>在读年级：</span><select name="num" placeholder="请选择参与人数" required>
          <option value="">请选择参与人数</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <!-- <div :class="$style.input"><span>参加人数：</span><input name="num" type="number" autocomplete="off"
          placeholder="请输入参与人数" required></div> -->
      <div :class="$style.btn">
        <div :class="$style.error - tips"></div><button type="submit">提交</button>
      </div>
    </form>
  </section>
  <component :is="Footer" index="0" />
</template>

<style lang="less" module>
section {
  font-size: 32rem;
  padding-bottom: 220rem
}

section form>p {
  padding: 48rem 32rem 24rem;
  font-size: 40rem;
  font-weight: bold;
  color: #333
}

section form>p:nth-of-type(n+2) {
  font-size: 32rem
}

section form .input {
  height: 120rem;
  position: relative;
  line-height: 120rem;
  border-bottom: solid 1px #e5e5e5
}

section form .input span {
  position: absolute;
  left: 32rem;
  font-size: 32rem;
  color: #333
}

section form .input input {
  width: 100%;
  font-size: 32rem;
  color: #333;
  padding-left: 240rem;
  height: 100rem;
}

section form .input select {
  font-size: 32rem;
  color: #333;
  margin-left: 240rem;
  width: 508rem;
  height: 100rem;
  border: none;
  color: #999;
  appearance: none;
  background-color: transparent;
  outline: none;

  option {
    color: #333;

    &[value=""] {
      display: none;
    }
  }
}

section form .input input::placeholder {
  font-size: 32rem;
  color: #999
}

section form .input .ok {
  display: none;
  position: absolute;
  right: 32rem;
  top: 32rem;
  width: 56rem;
  height: 56rem;
  pointer-events: none
}

section form ul {
  padding: 0 32rem;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
}

section form ul li {
  width: 176rem;
  height: 190rem;
  margin-right: 20rem;
  margin-bottom: 20rem;
}

section form ul li:last-of-type {
  margin-right: 0;
}

section form ul li input {
  display: none
}

section form .btn {
  padding: 0 32rem;
  margin-top: 78rem;

  .error-tips {
    text-align: center;
    color: red;
    line-height: 0;
    padding-bottom: 30rem;
    font-size: 26rem
  }

  button {
    width: 100%;
    height: 98rem;
    background: #101E5D;
    border-radius: 8rem;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 40rem;
    color: #fff
  }
}
</style>