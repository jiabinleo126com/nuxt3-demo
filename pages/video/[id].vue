<script setup>
useHead({
  script: [
    {
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
    },
    {
      src: '/tencent-cdn/qcloud/video/dist/tcadapter.1.0.0.min.js',
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/TXLivePlayer-1.2.3.min.js',
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/hls.min.1.1.5.js',
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/flv.min.1.6.3.js',
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/dash.all.min.4.4.1.js',
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.v4.5.4.min.js',
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://www.ieduchina.com/statics/js/layer.js',
      type: 'text/javascript',
      body: true
    },
    {
      src: '/statics/share/jquery.share.min.js',
      defer: true,
      crossorigin: 'anonymous',
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://www.ieduchina.com/statics/share/share.min.css',
    },
  ],
})

const route = useRoute()
console.log(",",route.params.id)
const { data: { value: { videoMsg, list } } } = await useFetch(`/api/video/${route.params.id}`)
// const { data } = await useFetch(`/api/video/${route.params.id}`)
// console.log(data)
onMounted(() => {
  nextTick(() => {
    $(() => {
      const player = TCPlayer('player-container-id', {})
      const src = $('#player-container-id').attr('src')
      player.src(src) // src 播放地址
      setTimeout(() => {
        $('#share').share({
          sites: ['wechat', 'qq', 'qzone', 'weibo'],
        })
      }, 1000)
      // 统计浏览量
      const shipinid = $('input[name=shipin_id]').val()
      const url = `/indexPhp/index.php?m=video&c=index&a=ajaxAddViews&shipinid=${shipinid}&t=${Math.random()}`
      $.post(url, { do: 1 }, () => {
        // let res = JSON.parse(result)
      })
      $('.container-video').on('click', '.thumbs', function () {
        const id = $('input[name=shipin_id]').val()
        const user_id = $('input[name=user_id]').val()
        const like_count = $(this).attr('value')
        const video_likes_active_id = `#video_likes_active_${id}`

        $.ajax({
          type: 'post',
          url: '/indexPhp/index.php?m=video&c=index&a=like',
          data: {
            id,
            user_id,
            like_count,
          },
          dataType: 'json',
          success(res) {
            if (res === 1) {
              like_count = Number(like_count) + 1
              $('#likes_count').html(like_count)
              $('.container-video .thumbs').attr('value', like_count)
              $('.container-video .thumbs').addClass('active')
              $(video_likes_active_id).addClass('active')
            }
          },
        })
      })
      $('.container-video .box').on('click', 'button', () => {
        const id = $('input[name=shipin_id]').val()
        const user_id = $('input[name=user_id]').val()
        const shipin_user_id = $('input[name=shipin_user_id]').val()
        $.ajax({
          type: 'post',
          url: '/indexPhp/index.php?m=video&c=index&a=follow',
          data: {
            id,
            user_id,
            shipin_user_id,
          },
          dataType: 'json',
          success(res) {
            if (res === 1) {
              $('.container-video .box button').addClass('active')
              $('.container-video .box button').html('已关注')
            }
            else if (res === 2) {
              $('.container-video .box button').removeClass('active')
              $('.container-video .box button').html('<i></i>关注')
            }
            else if (res === 3) {
              window.location = '/login.html'
            }
          },
        })
      })
      const inputs = [];
      $("body [name]").each((index, item) => {
        if ($(item).attr("required")) {
          inputs.push({
            ele: item,
            tip: $(item).attr("_tip") || $(item).attr("placeholder")
          })
        }
      })
      $("#video_form").on("click", "button[type=submit]", function () {
        const erros = [];
        const msg = inputs.reduce((_acc, item) => {
          if (!$(item.ele).val()) {
            erros.push(item.tip)
          }
          return erros[0]
        }, "")
        if (msg) {
          layer.msg(msg, {
            icon: 2,
            anim: 6,
            time: 2000
          });
          return false;
        }
        $.ajax({
          url: $(this).closest("form").attr("action"),
          type: $(this).closest("form").attr("method"),
          dataType: "json",
          data: data.field,
          success: function success(res) {
            if (res.status == 1) {
              layer.msg("数据提交成功", {
                icon: 1,
                time: 2000
              });
              $("form.layui-form")[0].reset();
            } else {
              layer.msg(res.info, {
                icon: 2,
                anim: 6,
                time: 2000
              });
            }
          },
          error: function error(err) {
            layer.msg("数据提交失败，请稍后再试", {
              icon: 2,
              anim: 6,
              time: 2000
            });
          }
        });
        return false;
      })
    })
  })
})
</script>

<template>
  <Header />
  <div class="container-video">
    <div class="return">
      <a href="/">首页</a>><a href="/videos/">视频></a>{{ videoMsg.title }}
    </div>
    <div class="videos">
      <div class="video-wrap">
        <div class="video-play">
          <video id="player-container-id" width="520" height="405" preload="auto" playsinline webkit-playsinline
            :poster="videoMsg.cover" :src="videoMsg.src">
          </video>
        </div>
        <div class="oper">
          <input type="hidden" name="shipin_id" :value="videoMsg.id">
          <input type="hidden" name="shipin_user_id" :value="videoMsg.author_id">
          <input type="hidden" name="user_id" value="0">
          <input type="hidden" name="is_like" value="">
          <span class="time">发布时间：{{ videoMsg.time }}</span>
          <div class="right">
            <span>
              <i class="thumbs" value="3"></i><span id="likes_count">{{ videoMsg.num }}</span>
            </span>
            <span id="share">分享到：</span>
          </div>
        </div>
        <p class="video-title">
          {{ videoMsg.title }}
        </p>
        <div class="box">
          <div class="upmsg">
            <NuxtLink :to="`/home/${videoMsg.user.id}`">
              <img :src="videoMsg.user.image" :alt="videoMsg.user.name">
            </NuxtLink>
            <div class="desc">
              <p>
                <NuxtLink :to="`/home/${videoMsg.user.id}`">
                  {{ videoMsg.user.name }}
                </NuxtLink>
              </p>
              <p>视频：{{ videoMsg.num }}</p>
            </div>
          </div>
          <button>
            <i></i>关注
          </button>
        </div>
        <form id="video_form" action="/index.php?m=college&c=index&a=collegereg&dopost=reg" method="post">
          <div class="form_head">
            <span>快速匹配适合您孩子的学校</span>
          </div>
          <div class="titles">
            <span><i></i>全国500所国际学校大全</span>
            <span><i></i>3分钟匹配5-8所</span>
            <span><i></i>1年名校升学备考托管服务</span>
          </div>
          <div class="inputs">
            <input type="hidden" name="shipin_id" :value="videoMsg.id">
            <div class="input">
              <input name="name" placeholder="您的孩子姓名" required>
            </div>
            <div class="input">
              <input name="want_school" placeholder="您的意向学校">
            </div>
            <div class="input">
              <input name="mobile" maxlength="11" placeholder="您的联系号码">
            </div>
          </div>
          <button type="submit">
            为您匹配
          </button>
        </form>
      </div>
      <div class="video-list">
        <h3>推荐播放</h3>
        <ul>
          <li v-for="item in list" :key="item.id">
            <NuxtLink :to="`/video/${item.id}`">
              <img :src="item.cover" :alt="item.title">
              <div class="text">
                <div class="list-title">
                  <p>{{ item.title }}</p>
                </div>
                <div class="nums">
                  <span>
                    <i :style="`background-image: url(${item.authorImg})`"></i>{{ item.author }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="less" scoped>
.container {
  width: 1280px;
  margin: 0 auto;
  font-size: 0;
  padding-bottom: 20px;
}

.container .return {
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  cursor: initial;
  padding-top: 15px;
}

.container .return a {
  color: #999999;
}

.container .title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 20px 0 3px;
}

.container .title h2 {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
}

.container .title .pages {
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
}

.container .title .pages a {
  width: 16px;
  height: 16px;
  display: inline-block;
}

.container .title .pages a:first-of-type {
  background-image: url(/assets/video/37353e3b.png);
}

.container .title .pages a:last-of-type {
  background-image: url(/assets/video/81532380.png);
  vertical-align: -2px;
}

.container .title .pages span {
  display: inline-block;
  width: 92px;
  text-align: center;
  line-height: 16px;
}

.container>ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.container>ul li {
  margin-left: 16px;
  margin-top: 20px;
}

.container>ul li a {
  display: block;
  width: 200px;
  height: 266px;
}

.container>ul li a img {
  width: 200px;
  height: 266px;
  border-radius: 6px;
  background-color: black;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.container>ul li p {
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  padding: 10px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 200px;
  box-sizing: border-box;
}

.container>ul li .nums span {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
}

.container>ul li .nums span i {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 5px;
  vertical-align: -2px;
}

.container>ul li .nums span:nth-of-type(1) i {
  background-image: url(/assets/video/f7299d4c.png);
}

.container>ul li .nums span:nth-of-type(2) {
  margin-left: 20px;
}

.container>ul li .nums span:nth-of-type(2) i {
  background-image: url(/assets/video/525f804a.png);
}

.container>ul li:nth-of-type(6n+1) {
  margin-left: 0;
}

.container>ul.video2 {
  display: block;
  padding-top: 6px;
  overflow: hidden;
}

.container>ul.video2 li {
  margin-left: 15px;
  float: left;
  margin-top: 14px;
}

.container>ul.video2 li a {
  width: auto;
  height: auto;
}

.container>ul.video2 li a img {
  width: 184px;
  height: 103px;
  background: #000;
  border-radius: 8px;
}

.container>ul.video2 li .nums {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 180px;
}

.container>ul.video2 li:first-of-type {
  height: auto;
  margin-left: 0;
}

.container>ul.video2 li:first-of-type a img {
  width: 481px;
  height: 271px;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.container>ul.video2 li p {
  width: 184px;
}

.container>ul.video2 li:first-of-type p {
  width: 481px;
}

.container-video {
  width: 1200px;
  margin: 0 auto;
  font-size: 0;
  padding-bottom: 20px;
}

.container-video .return {
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  cursor: initial;
  padding-top: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 880px;
}

.container-video .return a {
  color: #999999;
}

.container-video .videos {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 15px;
}

.container-video .videos .video-wrap .video-play {
  width: 880px;
  height: 495px;
  background: #000000;
  border-radius: 0px;
}

.container-video .videos .video-wrap .video-play #player-container-id {
  width: 880px;
  height: 495px;
  background: #000000;
}

.container-video .videos .video-wrap .oper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  padding-top: 16px;
}

.container-video .videos .video-wrap .oper .right span {
  cursor: pointer;
}

.container-video .videos .video-wrap .oper .right span i {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 5px;
  vertical-align: -1px;
}

.container-video .videos .video-wrap .oper .right span:nth-of-type(1) i {
  background-image: url(/assets/video/525f804a.png);
}

.container-video .videos .video-wrap .oper .right span:nth-of-type(1) i.active {
  background-image: url(/assets/video/e3dc2e45.png);
}

.container-video .videos .video-wrap .oper .right span:nth-of-type(2) {
  margin-left: 20px;
}

.container-video .videos .video-wrap .oper .right span:nth-of-type(2) i {
  background-image: url(/assets/video/5d5a86de.png);
  vertical-align: -3px;
}

.container-video .videos .video-wrap .oper .right #share .social-share-icon {
  width: 24px;
  height: 24px;
  border: none;
  color: initial;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: -4px;
}

.container-video .videos .video-wrap .oper .right #share .social-share-icon.icon-wechat {
  background-image: url(/assets/video/9bfa5073.png);
}

.container-video .videos .video-wrap .oper .right #share .social-share-icon.icon-wechat .wechat-qrcode {
  left: -89px;
}

.container-video .videos .video-wrap .oper .right #share .social-share-icon.icon-qq {
  background-image: url(/assets/video/31a7158a.png);
}

.container-video .videos .video-wrap .oper .right #share .social-share-icon.icon-qzone {
  background-image: url(/assets/video/052533b1.png);
}

.container-video .videos .video-wrap .oper .right #share .social-share-icon.icon-weibo {
  background-image: url(/assets/video/17f5cce3.png);
}

.container-video .videos .video-wrap .oper .right #share .social-share-icon::before {
  content: none;
}

.container-video .videos .video-wrap .oper .right #share .social-share-icon:hover {
  background-color: initial;
}

.container-video .videos .video-wrap .video-title {
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  padding: 18px 0;
  /*white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;*/
  width: 880px;
  line-height: 28px;
}

.container-video .videos .video-wrap .box {
  height: 70px;
  background: #F2F4F6;
  border-radius: 4px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 10px;
}

.container-video .videos .video-wrap .box .upmsg {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.container-video .videos .video-wrap .box .upmsg img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
}

.container-video .videos .video-wrap .box .upmsg .desc {
  margin-left: 10px;
}

.container-video .videos .video-wrap .box .upmsg .desc p {
  font-size: 16px;
  font-weight: bold;
  color: #000000;
}

.container-video .videos .video-wrap .box .upmsg .desc p:last-of-type {
  font-size: 12px;
  font-weight: 400;
  padding-top: 15px;
  color: #666666;
}

.container-video .videos .video-wrap .box button {
  width: 85px;
  height: 34px;
  background: #0770D1;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  cursor: pointer;
}

.container-video .videos .video-wrap .box button i {
  width: 14px;
  height: 14px;
  display: inline-block;
  background-image: url(/assets/video/4412e517.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 7px;
  vertical-align: -2px;
}

.container-video .videos .video-wrap .box button.active {
  background-color: #A5A5A5;
}

.container-video .videos .video-wrap form {
  width: 880px;
  margin-top: 50px;
  background-color: #F2F4F6;
  text-align: center;
}

.container-video .videos .video-wrap form .form_head {
  position: relative;
  width: 880px;
  height: 50px;
  background: #0770D1;
  border-radius: 4px 4px 0 0;
  text-align: center;
  line-height: 50px;
}

.container-video .videos .video-wrap form .form_head span {
  font-size: 22px;
  font-weight: 500;
  color: #FFFFFF;
}

.container-video .videos .video-wrap form .form_head::after,
.container-video .videos .video-wrap form .form_head::before {
  position: absolute;
  content: "";
  top: 20px;
  width: 13px;
  height: 13px;
  background: #FFFFFF;
  border-radius: 50%;
}

.container-video .videos .video-wrap form .form_head::before {
  left: 20px;
}

.container-video .videos .video-wrap form .form_head::after {
  right: 20px;
}

.container-video .videos .video-wrap form .titles {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 24px 50px 10px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.container-video .videos .video-wrap form .titles span {
  font-size: 16px;
  font-weight: 500;
  color: #0770D1;
}

.container-video .videos .video-wrap form .titles span i {
  width: 22px;
  height: 22px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  background-image: url(/assets/video/2edd62f9.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 6px;
  vertical-align: -4px;
}

.container-video .videos .video-wrap form .inputs {
  text-align: left;
  padding: 0 50px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.container-video .videos .video-wrap form .inputs .input {
  width: 380px;
  height: 40px;
  border-radius: 4px;
  margin-top: 20px;
}

.container-video .videos .video-wrap form .inputs .input input {
  background: #FFFFFF;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
}

.container-video .videos .video-wrap form .inputs .input.code {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.container-video .videos .video-wrap form .inputs .input.code input {
  width: 213px;
}

.container-video .videos .video-wrap form .inputs .input.code button {
  width: 147px;
  height: 40px;
  background: #0770D1;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  border: none;
  outline: none;
  cursor: pointer;
}

.container-video .videos .video-wrap form button[type='submit'] {
  width: 246px;
  height: 40px;
  background: #0770D1;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 30px 0;
}

.container-video .videos .video-list h3 {
  font-size: 18px;
  font-weight: 500;
  color: #333333;
}

.container-video .videos .video-list ul li {
  margin-top: 15px;
}

.container-video .videos .video-list ul li a {
  display: flex;
  justify-content: space-between;
}

.container-video .videos .video-list ul li a img {
  width: 146px;
  height: 83px;
  background: #000000;
  border-radius: 4px;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
}

.container-video .videos .video-list ul li a .text {
  width: 140px;
  margin-left: 10px;
}

.container-video .videos .video-list ul li a .text .nums {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.container-video .videos .video-list ul li a .text .list-title {
  height: 68px;
}

.container-video .videos .video-list ul li a .text .list-title p {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}

.container-video .videos .video-list ul li a .text .nums span {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
}

.container-video .videos .video-list ul li a .text .nums span i {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 5px;
  vertical-align: -1px;
}

.container-video .videos .video-list ul li a .text .nums span:nth-of-type(1) i {
  background-image: url(/assets/video/f7299d4c.png);
}

.container-video .videos .video-list ul li a .text .nums span:nth-of-type(2) {
  margin-left: 20px;
}

.container-video .videos .video-list ul li a .text .nums span:nth-of-type(2) i {
  background-image: url(/assets/video/525f804a.png);
}

.container-video .videos .video-list ul li a .text .nums span:nth-of-type(2) i.active {
  background-image: url(/assets/video/e3dc2e45.png);
}

.layui-layer-msg {
  background-color: white;
}
</style>
