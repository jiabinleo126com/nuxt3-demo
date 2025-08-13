<script setup>
import { useHead } from 'nuxt/app';
import { onMounted } from 'vue';

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
                    html = "html{font-size: " + width / 16 + "px !important;}";
                } else {
                    html = "html{font-size: " + 750/16 + "px !important;width:750px !important;margin:0 auto !important;}";
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
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://zhaosheng.ieduchina.com/Public/waps/js/index.js?t=1223a8fc',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://zhaosheng.ieduchina.com/Public/js/layer.js',
      type: 'text/javascript',
      defer: true,
    }
  ],
  link: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//www.ieduchina.com/statics/pcc/img/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: 'https://zhaosheng.ieduchina.com/Public/waps/css/index.css?t=36352c3e',
    },
    {
      rel: 'stylesheet',
      href: 'https://zhaosheng.ieduchina.com/Public/css/layer.css',
    },
  ]
})

onMounted(() => {
  $(() => {
    $(document).on("click", ".sb_sh_false", function () {
      const id = $(this).closest("li").attr("ids")
      $(".mask_s15").find("i").text(id)
      $(".mask_s15").find("input[name=ids]").val(id)
      $(".mask_s15").addClass("show")
    })
    $(document).on("click", ".sb_sh_true", function () {
      layer.open({
        content: "审核成功",
        skin: "msg",
        time: 3
      });
    })
    $(".close_oa").on("click", function () {
      $(".mask_s15").removeClass("show")
    })
  })
})
</script>
<template>
  <header class="menu">
    <div class="top">
      <a href="/zsmanager/wap/index.html"><button>首页</button></a>
      <a class="active"><button>设备报废</button></a>
    </div>
    <div class="search">
      <form action="/zsmanager/wstudent/index.html" method="get">
        <input type="hidden" name="check" value="" />
        <input type="text" placeholder="请输入设备名称、编号或ID">
        <button>搜索</button>
      </form>
    </div>
    <div class="tab">
      <a href="/zsmanager/wstudent/index.html?check=1">待审批(<span class='red'>25</span>)</a>
      <a href="/zsmanager/wstudent/index.html?check=2">已审批(10)</a>
    </div>
  </header>
  <section>
    <div class="list list_n">
      <ul class="wrap">
        <li ids="3822639">
          <a>
            <div class="con">
              <div class="top"><span>设备ID:3822639</span><span></span></div>
              <ul>
                <li><span>校区</span>
                  <p>联合校区 </p>
                </li>
                <li><span>设备类型</span>
                  <p>笔记本电脑</p>
                </li>
                <li><span>设备编号</span>
                  <p>ADC2025203</p>
                </li>
                <li><span>设备名称</span>
                  <p>小米Air12.5</p>
                </li>
                <li><span>采购时间</span>
                  <p>2010-08-07</p>
                </li>
                <li><span>使用时长</span>
                  <p>15年</p>
                </li>
                <li><span>备注</span>
                  <p>
                    1.内存：4GB（板载不可扩展）<br>
                    2.电池损坏需要更换整机或主板，维修成本接近新机价格<br>
                    3.配置过低，无法满足日常办公需求<br>
                  </p>
                </li>
              </ul>
              <div class="status_z true">
                <span>审核通过</span>
                <span>2025-08-07 11:04</span>
              </div>
              <div class="status_z false">
                <span>审核不通过</span>
                <span>2025-08-07 11:04</span>
                <p class="status_t">拿去维修，维修后继续使用拿去维修，维修后继续使用拿去维修，维修后继续使用拿去维修，维修后继续使用</p>
              </div>
            </div>
          </a>
          <div class="sb_sh">
            <button class="sb_sh_false">审核不通过</button>
            <button class="sb_sh_true">审核通过</button>
          </div>
        </li>
      </ul>
      <div class="more"><button>加载更多<img alt=""
            src="https://zhaosheng.ieduchina.com/Public/waps/images/37fa6ee0.png"></button></div>
    </div>
  </section>
  <div class="mask_s15 mask">
    <form action="">
      <p>设备ID：<i>11</i></p>
      <input type="hidden" name="ids" value="">
      <div class="close_oa"></div>
      <p>审核不通过原因</p>
      <textarea name="desc" placeholder="请输入" _placeholder="请输入审核不通过原因" required></textarea>
      <button type="submit">提交</button>
    </form>
  </div>
</template>
<style lang="less">
@rem: 750/16rem;

section .list_n {
  ul li a .con {
    ul li span {
      min-width: 3rem;
    }

    .status_z {
      padding-bottom: (25/@rem);

      &.true {

        span,
        p {
          color: #00B578;
        }
      }

      &.false {

        span,
        p {
          color: #fa5151;
        }
      }

      span {
        display: block;
        text-align: right;
        font-size: (28/@rem);
        line-height: 1.5;

        &:first-of-type {
          font-size: (34/@rem);
        }
      }

      p {
        text-align: left;
        font-size: (28/@rem);
        line-height: 1.3;
        padding-top: (20/@rem);
      }
    }
  }
}

section .list ul li .sb_sh {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 (100/@rem);

  button {
    width: (200/@rem);
    height: 1.536rem;
    background: #3662EC;
    border-radius: 0.08533333rem;
    border: 0.04266667rem solid #3662EC;
    font-weight: 400;
    font-size: 0.64rem;
    color: #FFFFFF;
    margin-bottom: 0.64rem;

    &.sb_sh_false {
      background-color: #fa5151;
      border-color: #fa5151;
    }

    &.sb_sh_true {
      background-color: #00B578;
      border-color: #00B578;
    }
  }
}

.mask_s15 {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  max-width: 16rem;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-transition: background-color 0.1s ease-in-out;
  transition: background-color 0.1s ease-in-out;
  display: none;
  justify-content: center;
  align-items: center;


  &.show {
    display: flex;
  }

  form {
    width: 86vw;
    max-width: 86%;
    background-color: white;
    border-radius: (16/@rem);
    padding: (40/@rem) (24/@rem) (40/@rem);
    text-align: center;
    position: relative;

    .close_oa {
      position: absolute;
      right: (10/@rem);
      top: (20/@rem);
      padding: (10/@rem);
      box-sizing: content-box;
      width: (48/@rem);
      height: (48/@rem);
      transform: rotateZ(45deg);


      &::before {
        position: absolute;
        left: (16/@rem);
        top: (16/@rem);
        content: "";
        width: (14/@rem);
        height: (14/@rem);
        border-style: solid;
        border-color: #333;
        border-width: 0 (4/@rem) (4/@rem) 0;
      }

      &::after {
        position: absolute;
        left: (30/@rem);
        top: (30/@rem);
        content: "";
        width: (14/@rem);
        height: (14/@rem);
        border-style: solid;
        border-color: #333;
        border-width: (4/@rem) 0 0 (4/@rem);
      }
    }

    p {
      text-align: left;
      font-size: (36/@rem);
      padding-bottom: (20/@rem);
      font-weight: bold;

      i {
        font-style: initial;
      }

      &:nth-of-type(2) {
        padding-top: (40/@rem);
        font-size: (28/@rem);
        font-weight: initial;
      }
    }

    textarea {
      text-align: left;
      width: 100%;
      height: (200/@rem);
      padding: (10/@rem) (20/@rem);
      font-size: (24/@rem);
      border: solid (2/@rem) #e3e3e3;
      border-radius: (9/@rem);
      outline: none;
      resize: none;
    }

    button {
      border-radius: (18/@rem);
      border: none;
      width: (250/@rem);
      height: 1.408rem;
      margin-top: (40/@rem);
      color: white;
      background-color: var(--blue);
      border-radius: 0.704rem;
      font-size: 0.68266667rem;
    }
  }
}
</style>