<script setup>
import { defineAsyncComponent, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageThis = route.query.page || 1
const List = defineAsyncComponent(() => import('~/components/huodong/List.vue'))
const Page = defineAsyncComponent(() => import('~/components/huodong/Page.vue'))
const Search = defineAsyncComponent(() => import('~/components/huodong/Search.vue'))
const Class = defineAsyncComponent(() => import('~/components/huodong/Class.vue'))
const SpecialSide = defineAsyncComponent(() => import('~/components/huodong/SpecialSide.vue'))
const NewsSlide = defineAsyncComponent(() => import('~/components/huodong/NewsSlide.vue'))
const { data: { value: { activily, page } } } = await useFetch(`/api/huodong?page=${pageThis}`)
const activilyData = ref(activily)

watch(() => route.query.page, (newVal) => {
  useFetch(`/api/huodong?page=${newVal}`).then((res) => {
    activilyData.value = res.data.value.activily
    // const ipdata = res.data.value.activily.filter(item => item.image.includes('zhaosheng'))
  })
})

useHead({
  title: '国际学校开放日_夏令营_择校展_国际教育网',
  meta: [
    {
      name: 'description',
      content: '国际教育网活动专栏提供最新国际学校活动信息，包括国际学校开放日、夏令营、冬令营，国际学校择校展会、培训讲座、名校直播等。',
    },
    {
      name: 'keywords',
      content: '国际学校开放日,夏令营,国际教育展',
    },
  ],
  charset: 'utf-8',
  script: [
    {
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://www.ieduchina.com/statics/layui/layui.js',
      type: 'text/javascript',
      defer: true,
    },
  ],
  link: [
    {
      rel: 'icon',
      href: 'https://www.ieduchina.com/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: 'https://www.ieduchina.com/statics/layui/css/layui.css',
    },
  ],
})

onMounted(() => {
  $(() => {
    layui.use('form', () => {
      const form = layui.form
      form.on('select(provinceid)', (value) => {
        const provinceid = value.value
        $.ajax({
          url: '/indexPhp/api.php?op=api&do=getCity',
          type: 'GET',
          data: {
            provinceid,
          },
          success(res) {
            $('select[name=cityid]').html(res)
            form.render()
          },
          error() {
          },
        })
      })
      form.render()
    })

    // banner
    if ($('.banner').length) {
      // eslint-disable-next-line no-new
      new Swiper('.banner', {
        autoplay: true, // 可选选项，自动滑动
        loop: true,
        pagination: {
          el: '.banner-swiper-pagination',
        },
      })
    }

    // 提交数据
    let applyFlag = true
    $(document).on('click', '.submitdata', (e) => {
      e = e || window.event
      e.preventDefault()
      const form = $(this).parents('form')
      const error = form.find('.error-tips')
      error.html('')
      const btnTxt = $(this).html()
      const result = false
      const self = $(this)

      // 提交前验证
      const con = []
      form.find('input, select').each(function () {
        result = check(this)
        if ($(this).attr('mark') && $(this).val()) {
          con.push(($(this).attr('mark') === 'mark' ? '' : `${$(this).attr('mark')}:`) + $(this).val())
        }
        return result
      })
      const content = form.serialize()
      if (result && applyFlag) {
        applyFlag = false
        $.ajax({
          url: `/index.php?m=activity&c=index&a=ajax_activity_baoming&t=${Math.random()}`,
          type: 'POST',
          dataType: 'json',
          data: content,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            'X-XXS-Protection': '1;mode=block',
            'X-Frame-Options': 'deny',
          },
          success(data) {
            if (data.status === 1) {
              $('.mask').hide()
              $('.readschool').hide()
              form[0].reset()
              layer.open({
                content: '您已预约成功，谢谢您的参与！',
                skin: 'msg',
                time: 3000, // 3秒后自动关闭
              })
            }
            else {
              layer.open({
                content: data.info,
                skin: 'msg',
                time: 3000, // 3秒后自动关闭
              })
            }
            applyFlag = true
            self.html(btnTxt)
          },
          error() {
            applyFlag = true
            self.html(btnTxt)
            layer.open({
              content: '预约失败，请稍后再试',
              skin: 'msg',
              time: 3000, // 3秒后自动关闭
            })
          },
        })
      }
    }) // 验证表单
    const dataReg = {
      m: /^1\d{10}$/,
    }

    function check(element) {
      const error = $(element).parents('form').find('.error-tips')
      const datatype = $(element).attr('datatype')
      const value = $(element).val()
      if (!value && $(element).attr('nullmsg')) {
        // error.html($(element).attr('nullmsg'))
        // $(element).addClass('error')
        layer.open({
          content: $(element).attr('nullmsg'),
          skin: 'msg',
          time: 3000, // 3秒后自动关闭
        })
        return false
      }
      if (datatype && !dataReg[datatype].test(value)) {
        // error.html($(element).attr('errormsg'))
        // $(element).addClass('error')
        layer.open({
          content: $(element).attr('errormsg'),
          skin: 'msg',
          time: 3000, // 3秒后自动关闭
        })
        return false
      }
      error.html('')
      $(element).parents('.item').removeClass('error')
      return true
    }

    // $('body').on('blur', 'form input,form select', function () {
    // check(this)
    // })
    let is_getcode = false
    // 获取验证码
    $('.getcode').on('click', function () {
      const _this = $(this)
      if (is_getcode)
        return

      const telnum = _this.closest('form').find('input[name=tel]')
      if (!check(telnum))
        return false
      const val = telnum.val()
      val = $.trim(val)
      is_getcode = true

      $.ajax({
        url: '/index.php?m=activity&c=index&a=send_mobile_yzm&t=1616380473',
        data: { tel: val },
        type: 'POST',
        dataType: 'json',
        success() {
          _this.css('background', '#ccc')
          let i = 60
          const t = setInterval(() => {
            i--
            if (i === 0) {
              clearInterval(t)
              _this.css('background', '#e5e5e5').html('获取验证码')
              is_getcode = false
              return
            }
            _this.html(`${i}秒后重试`)
          }, 1000)
          is_getcode = false
        },
        error() {
          layer.open({
            content: '验证码获取失败，请稍后再试',
            skin: 'msg',
            // 3秒后自动关闭
            time: 3000,
          })
          is_getcode = false
        },
      })
    })

    $(document).on('click', '.showtk', () => {
      $('.box-alert').show()
    })
    $(document).on('click', '#close', () => {
      $(this).closest('.box-alert').hide()
    })

    layui.use(['form', 'layer'], () => {
      const laydate = layui.laydate
      laydate.render({
        elem: '#date',
        type: 'month',
      })
    })

    // 客服
    $(document).on('click', '.kefu', () => {
      open_kefu()
    })

    function open_kefu() {
      // 客服
      const url = 'https://p.qiao.baidu.com/cps/chat?siteId=17703851&userId=33651932&siteToken=25b3e7ac69f5b12c1fc2e0367d02eb0d'
      // 网页名称，可为空
      const name = ''
      // 弹出窗口的宽度
      const iWidth = 800
      // 弹出窗口的高度
      const iHeight = 700
      // window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
      // 获得窗口的垂直位置
      const iTop = (window.screen.height - 30 - iHeight) / 2
      // 获得窗口的水平位置
      const iLeft = (window.screen.width - 10 - iWidth) / 2
      window.open(url, name, `height=${iHeight},innerHeight=${iHeight},width=${iWidth},innerWidth=${iWidth},top=${iTop},left=${iLeft},toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no'`)
    }
  })
})
</script>

<template>
  <Header />
  <section class="x-content">
    <div class="container">
      <div class="left">
        <component :is="Search" />
        <component :is="Class" />
        <component :is="List" :data="activilyData" />
        <component :is="Page" :data="page" />
      </div>

      <div id="side">
        <component :is="NewsSlide" />
        <component :is="SpecialSide" />
      </div>
    </div>
  </section>
  <Footer />
</template>

<style lang="less">
a:hover {
  text-decoration: none
}

body .x-content {
  width: 1280px;
  margin: 0 auto
}

body .x-content .banner-swiper-container {
  margin-top: 18px;
  width: 1280px;
  height: 420px
}

body .x-content .banner-swiper-container .swiper-wrapper {
  width: 1280px;
  height: 420px
}

body .x-content .banner-swiper-container .swiper-wrapper .swiper-slide {
  width: 1280px;
  height: 420px
}

body .x-content .banner-swiper-container .swiper-wrapper .swiper-slide .image {
  width: 1280px;
  height: 420px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat
}

body .x-content .banner-swiper-container .banner-swiper-pagination {
  position: absolute;
  bottom: 20px;
  z-index: 100;
  text-align: center
}

body .x-content .container {
  display: flex;
  justify-content: space-between
}

body .x-content .container .left {
  width: 900px;
  height: 100%
}

body .x-content .container .left .crumbs {
  padding-left: 18px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #242323;
  padding: 30px 0 16px
}

body .x-content .container .left .x-content-title {
  position: relative
}

body .x-content .container .left .x-content-title h2 {
  width: 534px;
  font-size: 32px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #242323;
  line-height: 44px
}

body .x-content .container .left .x-content-title>p {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 22px;
  line-height: 44px;
  min-height: 44px;
  font-family: Microsoft YaHei;
  color: #1a1a1a
}

body .x-content .container .left .x-content-title p span {
  color: #ff9100;
  font-weight: bold
}

body .x-content .container .left .x-school-msg {
  width: 900px;
  background: #fff;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, .16)
}

body .x-content .container .left .x-school-msg .bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  margin-top: 16px;
  box-sizing: border-box
}

body .x-content .container .left .x-school-msg .image {
  width: 350px;
  height: 230px;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center
}

body .x-content .container .left .x-school-msg .image {
  position: relative
}

body .x-content .container .left .x-school-msg .image::before {
  content: "";
  position: absolute;
  left: -5px;
  top: 13px;
  width: 92px;
  height: 29px;
  background-size: 92px 29px;
  background-position: center center;
  background-repeat: no-repeat
}

body .x-content .container .left .x-school-msg .image.enter::before {
  background-image: url(https://www.ieduchina.com/statics/pcc/img/0119start.png)
}

body .x-content .container .left .x-school-msg .image.over::before {
  background-image: url(https://www.ieduchina.com/statics/pcc/img/0119over.png)
}

body .x-content .container .left .x-school-msg .con {
  width: 366px
}

body .x-content .container .left .x-school-msg .con p {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #242323;
  padding-top: 20px
}

body .x-content .container .left .x-school-msg .con p:first-of-type {
  padding-top: 0;
  color: #0770d1;
  font-size: 18px
}

body .x-content .container .left .form {
  width: 900px;
  background: #fff;
  border: 1px solid rgba(112, 112, 112, .4);
  box-sizing: border-box;
  margin-top: 21px
}

body .x-content .container .left .form label {
  display: block;
  margin-top: 37px;
  display: flex;
  flex-wrap: wrap
}

body .x-content .container .left .form label.code input {
  width: 564px
}

body .x-content .container .left .form label.code button {
  width: 220px;
  height: 48px;
  background: #ff9100;
  border-radius: 6px;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #fff;
  margin-left: 19px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 12px
}

body .x-content .container .left .form label.code button[disabled] {
  background-color: #ddd
}

body .x-content .container .left .form label span {
  display: block;
  width: 100%;
  font-size: 28px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #242323;
  margin-left: 48px
}

body .x-content .container .left .form label span i {
  color: red;
}

body .x-content .container .left .form label input {
  margin-top: 12px;
  margin-left: 42px;
  box-sizing: border-box;
  height: 48px;
  line-height: 53px;
  width: 806px;
  background: #f8f8f8;
  border-radius: 6px;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #000;
  padding-left: 17px;
  border: 1px solid rgba(112, 112, 112, .3)
}

body .x-content .container .left .form .btn {
  display: flex;
  justify-content: space-between;
  height: 64px;
  line-height: 64px;
  padding: 44px 0 22px 0;
  box-sizing: content-box
}

body .x-content .container .left .form .btn p {
  font-family: Source Han Sans CN;
  margin-left: 42px;
  font-size: 43px;
  font-weight: 400;
  color: #ff9100
}

body .x-content .container .left .form .btn p img {
  margin-right: 12px;
  height: 42px;
  vertical-align: -4px
}

body .x-content .container .left .form .btn button {
  background: #ff9100;
  font-size: 26px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #fff;
  margin-right: 52px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 248px;
  height: 58px;
  border-radius: 6px
}

body .x-content .container .left .form .btn button[disabled] {
  background-color: #ddd
}

body .x-content .container .left .x-con {
  padding-top: 50px;
  width: 745px;
  margin: 0 auto
}

body .x-content .container .left .x-con .x-con-title {
  height: 47px;
  line-height: 47px;
  border-bottom: solid 1px #1245ab;
  display: flex
}

body .x-content .container .left .x-con .x-con-title a {
  display: inline-block;
  width: 100%;
  height: 40px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  line-height: 47px;
  text-align: center;
  border-bottom: rgba(112, 112, 112, .4) dashed 1px;
  text-align: left;
  padding-left: 34px
}

body .x-content .container .left .x-con .x-con-title a.active {
  width: 134px;
  color: #076fcb;
  border: 1px solid #076fcb;
  box-shadow: 6px 6px 1px #076fcb;
  text-align: center;
  padding-left: 0;
  height: 47px
}

body .x-content .container .left .x-con .x-con-title a.active:hover {
  text-decoration: none
}

body .x-content .container .left .x-con .x-text {
  padding: 30px 20px 55px;
  text-align: justify;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  line-height: 28px;
  color: #272727
}

body .x-content .container .left .x-con .x-text p {
  word-break: break-all
}

body .x-content .container .left .x-con .x-text img {
  max-width: 100%
}

body .x-content .container .left .x-con .x-school-msg2 {
  border-bottom: solid 1px #b5b5b5;
  padding: 45px 20px 30px 20px;
  display: flex;
  justify-content: flex-start
}

body .x-content .container .left .x-con .x-school-msg2 .image {
  border-radius: 0;
  width: 254px;
  height: 127px;
  border: 1px solid rgba(121, 121, 121, .4);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain
}

body .x-content .container .left .x-con .x-school-msg2 .x-school-con {
  padding-left: 26px
}

body .x-content .container .left .x-con .x-school-msg2 .x-school-con h3 {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #076fcb
}

body .x-content .container .left .x-con .x-school-msg2 .x-school-con .x-school-class {
  min-height: 68px;
  padding-top: 5px
}

body .x-content .container .left .x-con .x-school-msg2 .x-school-con .x-school-class p {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #272727;
  line-height: 26px
}

body .x-content .container .left .x-con .x-school-msg2 .x-school-con .btn {
  display: flex;
  justify-content: space-between;
  width: 280px
}

body .x-content .container .left .x-con .x-school-msg2 .x-school-con .btn button {
  cursor: pointer;
  width: 111px;
  height: 32px;
  border: 1px solid rgba(121, 121, 121, .4);
  border-radius: 4px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #707070;
  background-color: #fff;
  outline: none;
  box-sizing: border-box
}

body .x-content .container .left .x-con .x-school-msg2 .x-school-con .btn button a {
  display: inline-block;
  width: 100%;
  color: #707070
}

body .x-content .container .left .x-con .x-school-msg2 .x-school-con .btn button:hover {
  background-color: #ff9100;
  border: 1px solid #ff9100;
  color: #fff
}

body .x-content .container .left .x-con .x-school-msg2 .x-school-con .btn button:hover a {
  color: #fff
}

body .box-alert {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, .5)
}

body .box-alert .con {
  box-sizing: border-box;
  padding: 20px 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 456px;
  background: #fff;
  border-radius: 10px
}

body .box-alert .con .close {
  position: absolute;
  right: 0px;
  top: -58px;
  width: 48px;
  height: 48px;
  cursor: pointer
}

body .box-alert .con label {
  display: block;
  height: 53px;
  line-height: 53px;
  margin-top: 37px;
  display: flex;
  justify-content: flex-start
}

body .box-alert .con label:last-of-type span {
  width: 130px
}

body .box-alert .con label.code input {
  width: 200px
}

body .box-alert .con label.code button {
  width: 223px;
  height: 53px;
  background: #eee;
  border-radius: 10px;
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #fc6607;
  margin-left: 19px;
  border: none;
  outline: none;
  cursor: pointer
}

body .box-alert .con label span {
  display: inline-block;
  width: 160px;
  height: 26px;
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #242323;
  text-align: justify
}

body .box-alert .con label span::after {
  content: "";
  display: inline-block;
  width: 100%
}

body .box-alert .con label input {
  box-sizing: border-box;
  margin-left: 20px;
  height: 53px;
  line-height: 53px;
  width: 648px;
  background: #eee;
  border-radius: 10px;
  font-family: "Source Han Sans CN";
  font-weight: 300;
  color: #242323;
  font-size: 22px;
  padding-left: 28px
}

body .box-alert .con .btn {
  display: flex;
  justify-content: space-between;
  height: 64px;
  line-height: 64px;
  padding: 52px 0
}

body .box-alert .con .btn button {
  width: 100%;
  height: 64px;
  background: #fc6607;
  border-radius: 10px;
  font-size: 28px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer
}

body .x-content .container .left .x-school-msg .con .social-share {
  font-family: "socialshare" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: .2px;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 23px
}

body .x-content .container .left .x-school-msg .con .social-share .social-share-icon {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 16px;
  border-radius: 50%;
  line-height: 22px;
  border: 1px solid #fff;
  color: #666;
  text-align: center;
  vertical-align: middle;
  margin-right: 26px
}

body .x-content .container .left .x-school-msg .con #share-2 a {
  width: 44px;
  height: 44px;
  margin-bottom: 0
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat:hover .wechat-qrcode {
  display: block
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode {
  display: none;
  border: 1px solid #eee;
  position: absolute;
  z-index: 9;
  top: -205px;
  left: -81px;
  width: 200px;
  height: 192px;
  color: #666;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 10px #aaa;
  transition: all 200ms;
  -webkit-tansition: all 350ms;
  -moz-transition: all 350ms
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode:after {
  content: "";
  position: absolute;
  left: 50%;
  margin-left: -6px;
  bottom: -13px;
  width: 0;
  height: 0;
  border-width: 8px 6px 6px 6px;
  border-style: solid;
  border-color: #fff rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode.bottom {
  top: 40px;
  left: -84px
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode.bottom:after {
  display: none
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode h4 {
  font-weight: normal;
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  background-color: #f3f3f3;
  margin: 0;
  padding: 0;
  color: #777
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode .qrcode {
  width: 105px;
  margin: 10px auto
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode .qrcode table {
  margin: 0 !important
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode .help {
  font-size: 16px
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode .help p {
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  padding: 0;
  margin: 0
}

body .x-content .container .left .x-school-msg .con .social-share {
  background-size: 44px 44px;
  position: relative
}

body .x-content .container .left .x-school-msg .con .social-share .social-share-icon.icon-wechat {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_01.png) no-repeat center
}

body .x-content .container .left .x-school-msg .con .social-share .social-share-icon.icon-qq {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_02.png) no-repeat center
}

body .x-content .container .left .x-school-msg .con .social-share .social-share-icon.icon-qzone {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_03.png) no-repeat center
}

body .x-content .container .left .x-school-msg .con .social-share .social-share-icon.icon-weibo {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_04.png) no-repeat center
}

body .x-content .container .left .x-school-msg .con #share-2 {
  position: initial;
  top: 300px;
  left: 50%;
  margin-left: -15px;
  width: auto
}

#side {
  width: 360px;
  background-color: #f7fafc;
  padding-top: 0
}

#side>div:first-of-type.activity-recommendation {
  padding-top: 30px;
  background-color: #fff
}

#side h2 {
  margin-left: 11px;
  margin-bottom: 10px;
  height: 32px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: #272727;
  padding-bottom: 10px;
  font-family: Source Han Sans CN;
  padding-top: 24px;
  box-sizing: content-box
}

#side h2 i {
  display: inline-block;
  width: 8px;
  height: 32px;
  background: #076fcb;
  border-radius: 6px;
  vertical-align: -7px;
  margin-right: 14px
}

#side .x-video {
  background-color: #f7fafc
}

#side .x-video li {
  margin-bottom: 18px
}

#side .x-video li:last-of-type {
  margin-bottom: 0
}

#side .x-video li.hg div::before {
  background-color: rgba(39, 39, 39, .8);
  content: "鍥為【";
  color: #fff;
  position: relative;
  z-index: 30;
  padding: 2px 8px;
  margin: 8px;
  left: 0;
  border-radius: 0
}

#side .x-video li.yg div::before {
  background-color: #fc6607;
  content: "棰勫憡";
  color: #fff
}

#side .x-video li.jx div::before {
  background-color: #fc6607;
  content: "姝ｅ湪鐩存挱";
  color: #fff
}

#side .x-video li div {
  position: relative;
  width: 332px;
  height: 169px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #000
}

#side .x-video li div img {
  object-fit: contain;
  object-position: center;
  width: 332px;
  height: 169px
}

#side .x-video li div::before {
  position: absolute;
  padding: 4px 8px;
  left: 11px;
  top: 8px;
  z-index: 10;
  border-radius: 4px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: bold
}

#side .x-video li div::after {
  content: "";
  position: absolute;
  z-index: 20;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .3);
  background-image: url(https://www.ieduchina.com/statics/pcc/img/play.png);
  background-size: 40px 40px;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 0px 0px 6px 6px
}

#side .x-video li p {
  position: absolute;
  z-index: 50;
  bottom: 0;
  font-size: 16px;
  color: #fff;
  width: 100%;
  background: rgba(39, 39, 39, .6);
  padding: 6px 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 27px
}

.activity-recommendation .swiper-wrap {
  overflow: hidden;
  padding-bottom: 26px;
  background-color: #fff
}

.activity-recommendation .swiper {
  width: 360px;
  height: 360px;
  position: relative;
  background-color: #fff
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide {
  width: 100%;
  height: 343px;
  background: #fff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, .01)
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .image {
  position: relative;
  width: 360px;
  height: 240px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover
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
  background-image: url(//www.ieduchina.com/statics/images/icon/a.png?t=20211123)
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .image .title {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  height: 40px;
  background-color: rgba(0, 0, 0, .6);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #fff;
  display: table;
  width: 100%
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .image .title .text2 {
  display: table-cell;
  vertical-align: middle;
  padding: 0 12px
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .image .title .text2 p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .text {
  padding: 4px 17px;
  text-align: center;
  box-sizing: border-box;
  height: 102px
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .text p {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #272727;
  text-align: left
}

.activity-recommendation .swiper .swiper-wrapper .swiper-slide .text button {
  width: 140px;
  height: 24px;
  border: 1px solid #ff9100;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #ff9100;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer
}

.activity-recommendation .swiper .activity-recommendation-swiper-pagination {
  position: absolute;
  bottom: -6px;
  text-align: center;
  width: 100%;
  z-index: 10
}

.activity-recommendation .swiper .activity-recommendation-swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #cbc9c9;
  border-radius: 50%;
  opacity: 1
}

.activity-recommendation .swiper .activity-recommendation-swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 20px;
  height: 10px;
  background: #ff9100;
  border-radius: 5px
}

.advertising {
  width: 360px;
  height: 240px;
  background-color: #f7fafc
}

.advertising .advertising-swiper {
  height: 240px;
  overflow: hidden
}

.advertising .advertising-swiper .swiper-wrapper .swiper-slide {
  height: 240px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat
}

.advertising .advertising-swiper .swiper-wrapper .swiper-slide a {
  width: 100%;
  height: 100%;
  display: block
}

.advertising .advertising-swiper {
  position: relative
}

.advertising .advertising-swiper .advertising-swiper-pagination {
  position: absolute;
  bottom: 10px;
  right: 0;
  z-index: 10;
  text-align: right;
  margin-right: 10px
}

.advertising .advertising-swiper .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 60px
}

.advertising .advertising-swiper .swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 17px;
  height: 8px;
  background: #ff9100;
  border-radius: 60px
}

body .box-alert {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, .5)
}

body .box-alert .con {
  box-sizing: border-box;
  padding: 20px 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 456px;
  background: #fff;
  border-radius: 10px
}

body .box-alert .con .close {
  position: absolute;
  right: 0px;
  top: -58px;
  width: 48px;
  height: 48px;
  cursor: pointer
}

body .box-alert .con label {
  display: block;
  height: 53px;
  line-height: 53px;
  margin-top: 37px;
  display: flex;
  justify-content: flex-start
}

body .box-alert .con label:last-of-type span {
  width: 130px
}

body .box-alert .con label.code input {
  width: 200px
}

body .box-alert .con label.code button {
  width: 223px;
  height: 53px;
  background: #eee;
  border-radius: 10px;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #fc6607;
  margin-left: 19px;
  border: none;
  outline: none;
  cursor: pointer
}

body .box-alert .con label span {
  display: inline-block;
  width: 160px;
  height: 26px;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #242323;
  text-align: justify
}

body .box-alert .con label span::after {
  content: "";
  display: inline-block;
  width: 100%
}

body .box-alert .con label input {
  box-sizing: border-box;
  margin-left: 20px;
  height: 53px;
  line-height: 53px;
  width: 648px;
  background: #eee;
  border-radius: 10px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #242323;
  font-size: 22px;
  padding-left: 28px
}

body .box-alert .con .btn {
  display: flex;
  justify-content: space-between;
  height: 64px;
  line-height: 64px;
  padding: 52px 0
}

body .box-alert .con .btn button {
  width: 100%;
  height: 64px;
  background: #fc6607;
  border-radius: 10px;
  font-size: 28px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer
}

body .x-content .container .left .x-school-msg .con .social-share {
  font-family: "socialshare" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: .2px;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 26px
}

body .x-content .container .left .x-school-msg .con .social-share .social-share-icon {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 16px;
  border-radius: 50%;
  line-height: 22px;
  border: 1px solid #fff;
  color: #666;
  text-align: center;
  vertical-align: middle;
  margin-right: 6px
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_01.png) no-repeat center;
  position: relative
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat:hover {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_01.png) no-repeat center
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat:hover .wechat-qrcode {
  display: block
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode {
  display: none;
  border: 1px solid #eee;
  position: absolute;
  z-index: 9;
  top: -205px;
  left: -81px;
  width: 200px;
  height: 192px;
  color: #666;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 10px #aaa;
  transition: all 200ms;
  -webkit-tansition: all 350ms;
  -moz-transition: all 350ms
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode:after {
  content: "";
  position: absolute;
  left: 50%;
  margin-left: -6px;
  bottom: -13px;
  width: 0;
  height: 0;
  border-width: 8px 6px 6px 6px;
  border-style: solid;
  border-color: #fff rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode.bottom {
  top: 40px;
  left: -84px
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode.bottom:after {
  display: none
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode h4 {
  font-weight: normal;
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  background-color: #f3f3f3;
  margin: 0;
  padding: 0;
  color: #777
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode .qrcode {
  width: 105px;
  margin: 10px auto
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode .qrcode table {
  margin: 0 !important
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode .help {
  font-size: 16px
}

body .x-content .container .left .x-school-msg .con .social-share .icon-wechat .wechat-qrcode .help p {
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  padding: 0;
  margin: 0
}

body .x-content .container .left .x-school-msg .con .social-share .icon-qzone {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_03.png) no-repeat center
}

body .x-content .container .left .x-school-msg .con .social-share .icon-qzone:hover {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_03.png) no-repeat center
}

body .x-content .container .left .x-school-msg .con .social-share .icon-qq {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_02.png) no-repeat center
}

body .x-content .container .left .x-school-msg .con .social-share .icon-qq:hover {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_02.png) no-repeat center
}

body .x-content .container .left .x-school-msg .con .social-share .icon-weibo {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_04.png) no-repeat center
}

body .x-content .container .left .x-school-msg .con .social-share .icon-weibo:hover {
  background: url(https://www.ieduchina.com/statics/pcc/img/share_04.png) no-repeat center
}

body .x-content .container .left .x-school-msg .con #share-2 {
  position: initial;
  top: 300px;
  left: 50%;
  margin-left: -15px;
  width: auto
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

.form-search .layui-form .layui-inline .layui-form-select dl dd.layui-this {
  background-color: #076fcb
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

.layui-laydate .layui-laydate-main .layui-this {
  background-color: #076fcb !important
}

.form-search .layui-form .layui-inline .layui-input-inline .layui-input {
  cursor: pointer
}
</style>
