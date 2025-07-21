<script setup>
import { onMounted, defineAsyncComponent } from 'vue'
const CheckMarkRem = defineAsyncComponent(()=>import('~/components/zhaosheng/CheckMarkRem.vue'));

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
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    html = "html{font-size: " + width / 750 + "px !important;}";
                } else {
                    html = "html{font-size: 1px !important;width:750px !important;margin:0 auto !important;}";
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
      src: 'https://m.ieduchina.com/statics/users/js/layer.js',
      type: 'text/javascript',
      body: true,
    },
  ],
  link: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//m.ieduchina.com/favicon.ico',
    }
  ],
  title: '自习课服务申请与规则确认书 - 国际教育网',
  meta: [
    {
      name: 'keywords',
      content: '自习课服务申请与规则确认书',
    },
    {
      name: 'description',
      content: '自习课服务申请与规则确认书',
    },
  ],
})

onMounted(() => {
  $(function () {
    qianming();
    function qianming() {
      var qmarray = [];
      var scrollY = null, qmindex;
      $(".inner").on("click", function () {
        qmindex = $(this).attr("data-index");
        scrollY = window.scrollY;
        window.scrollTo(0, 0);
        var candom = $(".qmmask").find(".canvas").eq(qmindex);
        if (candom.attr("img")) {
          candom.closest(".in").css("background-image", "url(" + candom.attr("img") + ")");
          candom.attr("img", "");
        }
        candom.show();
        $(".qmmask").show();
      });
      var isMouseDown;
      var qmupdate = false;
      var flag2 = true;
      if ($(".canvas").length) {
        $.each($(".canvas"), function (index, el) {
          qmarray[index] = {};
          qmarray[index].isqm = false;
          $(".inner").eq(index).attr("data-index", index);
          var canvasWidth = $(".qmmask .in").width();
          var canvasHeight = $(".qmmask .in").height();
          qmarray[index].canvas = el;
          qmarray[index].context = qmarray[index].canvas.getContext('2d');
          qmarray[index].canvas.width = canvasWidth;
          qmarray[index].canvas.height = canvasHeight;
          var strokeColor = "#000";
          isMouseDown = false;
          var lastLoc = {
            x: 0,
            y: 0
          };
          var lastTimestamp = 0;
          var lastLineWidth = -1;
          var maxV = 10;
          var minV = 0.1;
          var maxLineWidth = 5;
          var minLineWidth = 4;
          var image = new Image();
          var img = $(".qmvalue").val();
          if (img) {
            $(".inner").css("background-image", "url(" + img + ")");
            $(".inner").find("p").hide();
            image.src = img;
            image.crossOrigin = "Anonymous";
            image.onload = function () {
              qmarray[index].context.drawImage(this, 0, 0, canvasWidth, canvasHeight);
            };
          }
          $(".colorBtn").on("click", function () {
            $(".colorBtn").removeClass('colorBtnBorder');
            $(this).addClass("colorBtnBorder");
            strokeColor = $(this).css("");
          });
          $('.clear_btn').on('click', function () {
            if (flag2) {
              flag2 = false;
              setTimeout(function () {
                flag2 = true;
              }, 300);
              qmupdate = true;
              $(".inner").eq(qmindex).css("background-image", "");
              $(".in").eq(qmindex).css("background-image", "");
              qmarray[qmindex].context.clearRect(0, 0, canvasWidth, canvasHeight);
              qmarray[qmindex].isqm = false;
            }
          });
          $('.save_btn').on('click', function () {
            if (flag2) {
              flag2 = false;
              setTimeout(function () {
                flag2 = true;
              }, 300);
              if (qmarray[qmindex].isqm) {
                var image_1 = canvasToImage(qmarray[qmindex].canvas);
                myRotate($(image_1).attr("src"));
                $(".qmmask").find(".canvas").hide();
              }
              else if (qmupdate) {
                layer.open({
                  content: '请签名',
                  skin: 'msg',
                  time: 3
                });
              }
              else {
                $(".qmmask").hide();
                $(".qmmask").find(".canvas").hide();
              }
            }
          });
          function windowToCanvas(x, y) {
            var bbox = qmarray[qmindex].canvas.getBoundingClientRect();
            return {
              x: Math.round(x - bbox.left),
              y: Math.round(y - bbox.top)
            };
          }
          function beginStroke(point) {
            qmupdate = true;
            isMouseDown = true;
            lastLoc = windowToCanvas(point.x, point.y);
            lastTimestamp = new Date().getTime();
          }
          function endStroke() {
            isMouseDown = false;
          }
          function moveStroke(point) {
            var curLoc = windowToCanvas(point.x, point.y);
            var s = calcDistance(curLoc, lastLoc);
            var curTimestamp = new Date().getTime();
            var t = curTimestamp - lastTimestamp;
            var lineWidth = calcLineWidth(t, s);
            qmarray[qmindex].context.beginPath();
            qmarray[qmindex].context.moveTo(lastLoc.x, lastLoc.y);
            qmarray[qmindex].context.lineTo(curLoc.x, curLoc.y);
            qmarray[qmindex].context.strokeStyle = strokeColor;
            qmarray[qmindex].context.lineWidth = lineWidth;
            qmarray[qmindex].context.lineCap = "round";
            qmarray[qmindex].context.lineJoin = "round";
            qmarray[qmindex].context.stroke();
            lastLoc = curLoc;
            lastTimestamp = curTimestamp;
            lastLineWidth = lineWidth;
            qmarray[qmindex].isqm = true;
          }
          qmarray[index].canvas.onmousedown = function (e) {
            e.preventDefault();
            beginStroke({
              x: e.clientX,
              y: e.clientY
            });
          };
          qmarray[index].canvas.onmouseup = function (e) {
            e.preventDefault();
            endStroke();
          };
          qmarray[index].canvas.onmouseout = function (e) {
            e.preventDefault();
            endStroke();
          };
          qmarray[index].canvas.onmousemove = function (e) {
            e.preventDefault();
            if (isMouseDown) {
              moveStroke({
                x: e.clientX,
                y: e.clientY
              });
            }
          };
          qmarray[index].canvas.addEventListener("touchstart", function (e) {
            e.preventDefault();
            var touch = e.touches[0];
            $(".in").css("background-image", "");
            beginStroke({
              x: touch.pageX,
              y: touch.pageY
            });
          });
          qmarray[index].canvas.addEventListener("touchend", function (e) {
            e.preventDefault();
            endStroke();
          });
          qmarray[index].canvas.addEventListener("touchmove", function (e) {
            e.preventDefault();
            if (isMouseDown) {
              var touch = e.touches[0];
              moveStroke({
                x: touch.pageX,
                y: touch.pageY
              });
            }
            qmarray[qmindex].isqm = true;
          });
          function calcDistance(loc1, loc2) {
            return Math.sqrt((loc1.x - loc2.x) * (loc1.x - loc2.x) + (loc1.y - loc2.y) * (loc1.y - loc2.y));
          }
          function calcLineWidth(t, s) {
            var v = s / t;
            var resultLineWidth;
            if (v <= minV) {
              resultLineWidth = maxLineWidth;
            }
            else if (v >= maxV) {
              resultLineWidth = minLineWidth;
            }
            else {
              resultLineWidth = maxLineWidth - (v - minV) / (maxV - minV) * (maxLineWidth - minLineWidth);
            }
            if (lastLineWidth == -1) {
              return resultLineWidth;
            }
            else {
              return lastLineWidth * 2 / 3 + resultLineWidth * 1 / 3;
            }
          }
          function canvasToImage(canvas) {
            var image = new Image();
            image.src = canvas.toDataURL("image/png");
            return image;
          }
          function myRotate(base64) {
            var img = new Image();
            img.src = base64;
            img.onload = function () {
              $(".inner").eq(qmindex).css("background-image", "url(" + base64 + ")");
              $(".inner p").eq(qmindex).hide();
              $(".qmvalue").eq(qmindex).val(base64);
              window.scrollTo(0, scrollY);
              $(".qmmask").hide();
            };
          }
        });
      }
    }
    var inputs = [];
    $.each($("form").find("[name]"), function (index, ele) {
      if ($(ele).attr("placeholder")) {
        inputs.push(ele);
      }
    });
    $("button[type=submit]").on("click", function () {
      var form = $(this).closest("form");
      var msgs = [];
      var _this = this;
      inputs.reduce(function (_acc, ele) {
        if (!$(ele).val()) {
          msgs.push($(ele).attr("placeholder"));
        }
        return msgs;
      }, "");
      if (msgs[0]) {
        layer.open({
          content: msgs[0],
          skin: 'msg',
          time: 3
        });
        return false;
      }
      $.ajax({
        url: form[0].action,
        type: form[0].method,
        data: form.serialize(),
        dataType: "json",
        success: function (res) {
          var time = 100;
          if (res.status == 1) {
            if ($(_this).closest(".btn").find("a").length) {
              layer.open({
                content: "提交成功",
                skin: 'msg',
                time: 3
              });
              time = 2000;
            }
            setTimeout(function () {
              window.location.href = res.info;
            }, time);
          }
          else {
            layer.open({
              content: res.info,
              skin: 'msg',
              time: 3
            });
          }
        },
        error: function () {
          layer.open({
            content: "提交失败",
            skin: 'msg',
            time: 3
          });
        }
      });
      return false;
    });
  })
})

</script>
<template>
  <header>
    <h1>自习课服务申请与规则确认书</h1>
  </header>
  <section>
    <p>
      尊敬的家长：</p>
    <p>
      感谢您选择国际教育网！为更好地辅助学生达成正课学习目标，养成良好的学习习惯，我们为在读学员<b>额外提供免费的“自习课”服务</b>。自习课是正课教学的<b>辅助环节</b>，旨在为学生提供一个安静、专注的环境，在学管老师的监督下完成<b>本校区正课老师布置的作业</b>。
    </p>
    <p>
      <b>请注意：自习课服务是国际教育网基于正课学习效果提升目的而额外提供的增值服务，并非学员必须参与或合同强制包含的项目。家长可根据学生需求，自愿选择是否申请使用</b>。
    </p>
    <p>
      为确保自习课服务有序、高效运行，保障所有学生的权益和学习环境，请您在申请自习服务前，仔细阅读并理解以下重要规则。<b>申请即表示您已充分知晓并同意遵守本确认书所述规则</b>。
    </p>
    <h2>一、自习课服务核心说明</h2>
    <p>1.<b>服务性质</b>：<b>免费增值服务</b>，非合同强制项目，需家长主动申请。</p>
    <p>2.<b>服务目标</b>：辅助学生<b>完成本校区正课老师布置的作业</b>，巩固课堂所学，培养自主学习习惯。</p>
    <p>3.<b>服务提供方</b>：由国际教育网学管老师提供监督与基础辅助。</p>
    <h2>二、 服务范围与边界 (请家长务必仔细阅读)</h2>
    <p>1.<b>核心服务</b>：</p>
    <p class="indent"><component :is="CheckMarkRem" />监督学生完成<b>本校区当前正课科目老师布置的作业</b>。</p>
    <p class="indent"><component :is="CheckMarkRem" />提供基础的<b>本校区当前正课科目老师布置的作业</b>>完成情况监督与纪律管理。</p>
    <p class="indent"><component :is="CheckMarkRem" />进行简单的、与<b>本校区当前正课科目老师布置的作业</b>相关的知识点提示和辅助（<b>不包含详细的知识点讲解或题目答疑</b>）。</p>
    <p class="indent"><component :is="CheckMarkRem" />定期向家长、正课老师及顾问反馈学生的自习表现。</p>
    <p>2.<b>明确边界 (学管老师无法提供以下服务)</b>：</p>
    <p class="indent"><component :is="CheckMarkRem" /><b>不辅助</b>学生在<b>其他机构、学校或家长额外布置</b>的作业。</p>
    <p class="indent"><component :is="CheckMarkRem" /><b>不辅导</b>学生正课<未涉及的其他科目>内容（例如：学生正课为数学，学管不辅导英语作业）。</p>
    <h2>三、 自习课安排规则</h2>
    <p>1.<b>配比原则</b>： 自习课的安排遵循 “<b>1:1配比</b>” 原则。即学员<b>每完成1节本校区正课</b>，可对应申请安排<b>1节自习课</b>。</p>
    <p>2.<b>有效期</b>： 赠送的自习课必须在<b>对应的正课完成后的7天（一周）内</b>使用，逾期自动失效。</p>
    <p>3.<b>申请流程</b>： 学生需自习课，家长需通过顾问提交申请。我们将根据配比原则和教室资源情况尽力安排。</p>
    <h2>四、 自习室纪律要求 (共同维护良好学习环境)</h2>
    <p>为确保所有学生都能在自习室高效学习，学生参与自习课需严格遵守以下纪律：</p>
    <p class="indent0">• 禁止携带与学习无关的电子设备（如游戏机、平板电脑等，手机需交由学管暂存，特殊情况需使用时需经学管同意）进入自习室，可在自习室外使用。</p>
    <p class="indent0">• 禁止交头接耳、讨论题目或大声喧哗，禁止随意走动、跑闹。</p>
    <p class="indent0">• 禁止在自习室乱扔垃圾，需保持座位及周边环境整洁；</p>
    <p class="indent0">• 禁止抄袭他人作业或干扰他人学习，需独立完成任务。</p>
    <h2>五、 纪律违规处理</h2>
    <p>学管老师将对违反纪律的学生进行提醒和记录。</p>
    <p>累计收到<b>3次有效警告</b>后，该学生<b>将被暂停享受自习课服务</b>的权益。恢复服务需家长与顾问、学管老师进行沟通并确认学生理解并承诺遵守规则。</p>
    <h2>重要提示</h2>
    <p>本文件所述规则为国际教育网当前自习课服务的执行标准，公司保留根据实际情况进行调整与更新的权利。如有更新，将以最新说明为准。</p>
    <div class="line"></div>
    <p>
      本人已仔细阅读并充分理解《国际教育网自习课服务申请与规则确认书》的全部内容，尤其是关于“服务范围与边界”、“1:1配比与有效期”、“自习室纪律要求及违规后果”的条款。本人自愿为孩子申请此项自习课服务，并承诺督促孩子遵守自习室各项纪律规定。本人理解自习课是国际教育网额外提供的免费增值服务，非主合同项下的强制义务。
    </p>
    <form action="" method="post">
      <input type="hidden" name="id" value="4036">
      <div class="input"><span>家长接收合同邮箱：</span><input name="email" value="" type="text" placeholder="请输入电子邮箱"></div>
      <div class="signature">
        <div class="qmwrap">
          <input type="hidden" class="qmvalue" value="" name="qianzi" placeholder="请签名">
          <div id="qqm" class="inner">
            <p>+添加签名</p>
          </div>
        </div>
      </div>
      <div class="btn">
        <button type="submit">提交</button>
      </div>
    </form>
  </section>
  <div class="qmmask">
    <div class="bg">
      <div class="in"><canvas class="canvas" img=""></canvas></div>
    </div>
    <div id="canvas-btn">
      <button type="button" class="clear_btn">重写</button>
      <button type="button" class="save_btn">确认</button>
    </div>
  </div>
  <footer>
    国际教育网版权所有
  </footer>
</template>

<style lang="less" scoped>
body {
  margin: 0 auto !important;
}

header {
  margin: 40rem 0 30rem;

  h1 {
    text-align: center;
    font-size: 42rem;
  }
}

section {
  margin: 0 24rem;

  p {
    font-size: 28rem;
    color: #000;
    line-height: 50rem;
    margin-top: 10rem;

    &.indent {
      padding-left: 2em;
      text-indent: -1em;
    }

    &.indent0 {
      padding-left: 1em;
    }
  }

  .line {
    border-bottom: solid 1px #000;
    height: 1px;
    width: 100%;
    margin: 40rem 0;
  }

  h2 {
    font-size: 28rem;
    font-weight: bold;
    padding: 40rem 0 20rem;
  }

  form {
    .input {
      display: flex;
      flex-wrap: wrap;
      font-size: 28rem;
      line-height: 42rem;
      margin-top: 10rem;

      span {
        min-width: 10rem;
        white-space: nowrap;
      }

      input {
        height: 60rem;
        line-height: 60rem;
        flex: 1;
        border: none;
        border-radius: 0;
        border-bottom: solid #000 1rem;
        font-size: 28rem;
        line-height: 40rem;
        color: #000;
        margin-top: -5rem;
      }
    }


    .signature {
      .qmwrap {
        width: 100%;
        height: 328rem;
        background: #f6f6f6;
        border-radius: 20rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-top: 30rem;

        .inner {
          width: 100%;
          height: 100%;
          border-radius: 20rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;

          p {
            font-size: 44rem;
            font-weight: 400;
            color: #0770d1
          }
        }
      }
    }

    .btn {
      text-align: center;

      button {
        width: 600rem;
        height: 80rem;
        font-size: 32rem;
        font-weight: bold;
        margin: 50rem 0;
        border: 10rem;
        background-color: #0770d1;
        color: #fff;
        cursor: pointer
      }
    }
  }
}

.qmmask {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: #fff;

  .bg {
    position: relative;
    z-index: 10;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 700rem;
    height: 464rem;
    margin: 60rem auto 0;

    .in {
      overflow: hidden;
      width: 700rem;
      height: 380rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: dashed 6rem #739ddc;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      canvas {
        display: none
      }
    }
  }

  #canvas {
    position: relative;
    z-index: 100
  }

  #canvas-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-width: 750px;
    margin: 113rem auto 0;

    button {
      width: 328rem;
      height: 88rem;
      border: 2rem solid #0770d1;
      border-radius: 20rem;
      outline: none;
      text-align: center;
      color: #0770d1;
      margin: 0 24rem;
      font-size: 40rem;
      background-color: #fff;

      &:last-of-type {
        background-color: #0770d1;
        color: #fff
      }
    }
  }
}

footer {
  font-size: 28rem;
  color: #000;
  line-height: 50rem;
  margin-top: 10rem;
  text-align: center;
  padding: 100rem;
}
</style>