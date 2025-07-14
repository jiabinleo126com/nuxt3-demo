<script setup>
import { useHead } from 'nuxt/app'
import { onMounted } from 'vue'

useHead({
  script: [
    {
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
      defer: true,
    },
  ],
  link: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//www.ieduchina.com/statics/pcc/img/favicon.ico',
    },
  ],
  title: '中外合办大学-中外合作办学院校大全 - 国际教育网',
  meta: [
    { name: 'description', content: '国际教育网中外合办大学栏目为您提供中外合作办学院校信息,涵盖了中外合办大学学校的学习时间、学费和所在区域等相关问题。' },
    { name: 'keywords', content: '中外合办大学,中外合作办学' },
    // Open Graph 协议（用于社交媒体分享）
    { property: 'og:title', content: '中外合办大学-中外合作办学院校大全 - 国际教育网' },
    { property: 'og:description', content: '国际教育网中外合办大学栏目为您提供中外合作办学院校信息,涵盖了中外合办大学学校的学习时间、学费和所在区域等相关问题。' },
    { property: 'og:type', content: 'website' },
    // Twitter 卡片
    { name: 'twitter:card', content: 'https://www.ieduchina.com/statics/image/c14def69.jpg' },
    { name: 'twitter:title', content: '中外合办大学-中外合作办学院校大全 - 国际教育网' },
    { name: 'twitter:description', content: '国际教育网中外合办大学栏目为您提供中外合作办学院校信息,涵盖了中外合办大学学校的学习时间、学费和所在区域等相关问题。' },
  ],
})

onMounted(() => {
  let scrollTop = 0
  $(document).on('click', '.gw', () => {
    const _this = $(this)
    const collegeid = $(this).attr('collegeid')
    const mark = $('.form_1403').find('input[name=mark]').val()
    $.ajax({
      url: '/index.php?m=college&c=index&a=collegecheck',
      type: 'post',
      data: {
        collegeid,
        mark,
        isvip: 1,
      },
      dataType: 'json',
      success(res) {
        if (res.status === 1 && res.url) {
          window.location.href = res.url
        }
        else if (res.status === 1) {
          layer.msg(res.info)
        }
        else {
          scrollTop = $(document).scrollTop()
          if (_this.attr('src')) {
            const src = _this.attr('src')
            $('.form_1403').siblings().not('script,link,img').hide()
            if ($(document).find('#bg1f8c60f5').length) {
              $('#bg1f8c60f5').attr('src', src).show()
            }
            else {
              $(document.body).append('<img id=\'bg1f8c60f5\' src=\''.concat(src, '\'>'))
            }
            $('html,body').scrollTop(0)
          }
          $('.want_school').val(_this.closest('li').find('h3').attr('title'))
          $('.collegeid').val(_this.closest('li').find('h3').attr('collegeid'))
          $('.form_1403').addClass('show')
          return false
        }
      },
    })
    return false
  })
  $('.form_1403').on('click', '.close_1409', () => {
    $(document).find('#bg1f8c60f5').hide().siblings().not('link,.form_1403,.layui-layer-move,script,img').show()
    $('.form_1403').removeClass('show')
    $('html,body').scrollTop(scrollTop)
  })
  const inputs = [
    {
      class: 'name',
    },
    {
      class: 'mobile1',
    },
    {
      class: 'age',
    },
    {
      class: 'email',
      test: /@/,
    },
    {
      class: 'emailcode',
    },
    {
      class: 'else',
    },
  ]
  function msgfun(dom) {
    return `请输入${dom.attr('placeholder')}`
  }
  function setSourceCookie2(name, value) {
    const date = new Date()
    const expireDays = 1
    date.setTime(date.getTime() + expireDays * 24 * 3600 * 1000)
    document.cookie = `${name}=${value};path=/;domain=.ieduchina.com;expires=${date.toGMTString()}`
  }
  const mark = $('.mark').val()
  $(document).on('click', 'button.submit_1421', (e) => {
    e.preventDefault()
    const forms = $(this).closest('form')
    const errors = []
    const msg = inputs.reduce((_acc, input) => {
      const val = forms.find(`.${input.class}`).val().toString()
      if (!val && forms.find(`.${input.class}`).css('display') !== 'none') {
        errors.push(msgfun(forms.find(`.${input.class}`)))
      }
      else if (input.test) {
        if (!input.test.test(val)) {
          errors.push('邮箱格式不正确')
        }
      }
      return errors[0]
    }, '')
    if (msg) {
      layer.msg(msg)
      return false
    }
    if ($('.age').val()) {
      $('.mark').val(mark + '%%%\u5E74\u9F84\uFF1A'.concat($('.age').val()))
    }
    $.ajax({
      url: forms[0].action,
      type: forms[0].method,
      data: forms.serialize(),
      dataType: 'json',
      success(res) {
        if (res.status === 1) {
          if (res.url) {
            layer.msg('正在加载境外网址，需耐心等待')
            setSourceCookie2('gw_yanjiu', 'c14def69d77be075', 1)
            setTimeout(() => {
              window.open(res.url)
            }, 2000)
            setTimeout(() => {
              window.location.reload()
            }, 2800)
          }
        }
        else {
          layer.msg(res.info)
        }
      },
      error() {
        layer.msg('数据提交失败，请稍后再试')
      },
    })
    return false
  })

  const emailTImer = 60
  let timer = null
  $('.getcode').on('click', () => {
    if (emailTImer === 60) {
      const email = $(this).closest('form').find('input[name=email]').val()
      if (!email) {
        layer.msg('请输入邮箱')
      }
      else {
        $('.getcode').text(''.concat(emailTImer, 's')).attr('disabled', 'disabled')
        timer = setInterval(() => {
          emailTImer--
          if (emailTImer === 0) {
            clearInterval(timer)
            emailTImer = 60
            $('.getcode').text('获取验证码').removeAttr('disabled')
          }
          else {
            $('.getcode').text(''.concat(emailTImer, 's')).attr('disabled', 'disabled')
          }
        }, 1000)
        $.ajax({
          url: '//www.ieduchina.com/index.php?m=content&c=ajax&a=emailcode',
          type: 'GET',
          dataType: 'json',
          data: {
            email,
          },
          success(res) {
            layer.msg(res.info)
          },
        })
      }
    }
  })

  $('.kf').on('click', () => {
    open_kefu()
    return false
  })
  function open_kefu() {
    const url = 'https://affim.baidu.com/unique_33651932/chat?siteId=17703848&userId=33651932&siteToken=13b3496aab3bbca8a5fee9288c6fbebf&cp=&cr=&cw=GuanWang-PC'
    const name = ''
    const iWidth = 800
    const iHeight = 700
    const iTop = (window.screen.height - 30 - iHeight) / 2
    const iLeft = (window.screen.width - 10 - iWidth) / 2
    window.open(url, name, `height=${iHeight},innerHeight=${iHeight},width=${iWidth},innerWidth=${iWidth},top=${iTop},left=${iLeft},toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no'`)
  }
  $('.arr').click(() => {
    const arr = 'arr'.concat($(this).closest('.m').index())
    if ($(this).hasClass('open')) {
      $(this).removeClass('open')
      $(this).closest('.m').find('.right').removeClass('open')
      sessionStorage.removeItem(arr)
    }
    else {
      $(this).addClass('open')
      $(this).closest('.m').find('.right').addClass('open')
      sessionStorage.setItem(arr, '1')
    }
  })
  $.each($('.menu .m'), (index) => {
    if (sessionStorage.getItem('arr'.concat(index))) {
      $('.menu').find('.m').eq(index).find('.right').addClass('open')
      $('.menu').find('.m').eq(index).find('.arr').addClass('open')
    }
  })
})
</script>

<template>
  <Header />
  <section>
    <div class="top">
      <form action="/zwhb/" method="get">
        <span class="zixun_icon">中外合办大学</span>
        <div class="search">
          <input name="searchkey" type="text" value="" placeholder="输入关键词搜索">
          <button class="search_5fdf7354" type="submit">
            <img src="https://www.ieduchina.com/statics/zwhb/images/d1634ce7.png" alt="">
          </button>
        </div>
      </form>
      <div class="menu">
        <div class="m">
          <span>独立法人&nbsp;S11</span>
          <div class="right">
            <a href="https://schoollist.ieduchina.com/school/nyush/">上海纽约大学</a>
            <a href="https://schoollist.ieduchina.com/school/dukekunshan/">昆山杜克大学</a>
            <a href="https://schoollist.ieduchina.com/school/cuhksz/">香港中文大学（深圳）</a>
            <a href="https://schoollist.ieduchina.com/school/1941/">北师港浸大UIC（珠海）</a>
            <a href="https://schoollist.ieduchina.com/school/hkustgz/">香港科技大学（广州）</a>
            <a href="https://schoollist.ieduchina.com/school/cityudg/">香港城市大学（东莞）</a>
            <a href="https://schoollist.ieduchina.com/school/smbudx/">深圳北理莫斯科大学</a>
            <a href="https://schoollist.ieduchina.com/school/unnc/">宁波诺丁汉大学</a>
            <a href="https://schoollist.ieduchina.com/school/2718/">西交利物浦大学</a>
            <a href="https://schoollist.ieduchina.com/school/wku/">温州肯恩大学</a>
            <a href="https://schoollist.ieduchina.com/school/1938/">广东以色列理工大学</a>
          </div>
          <div class="arr">
            <i>展开</i><i>收起</i>
            <img src="https://www.ieduchina.com/statics/zwhb/images/bc1f5d13.png" alt="">
          </div>
        </div>
        <div class="m">
          <span>中方学校地区</span>
          <div class="right">
            <a href="/zwhb/p0-c0-g0-x0-q0/" class="active">全部</a>
            <a href="/zwhb/p2-c0-g0-x0-q0/">北京</a>
            <a href="/zwhb/p3-c0-g0-x0-q0/">上海</a>
            <a href="/zwhb/p34-c0-g0-x0-q0/">香港</a>
            <a href="/zwhb/p21-c328-g0-x0-q0/">深圳</a>
            <a href="/zwhb/p21-c326-g0-x0-q0/">广州</a>
            <a href="/zwhb/p4-c0-g0-x0-q0/">天津</a>
            <a href="/zwhb/p5-c0-g0-x0-q0/">重庆</a>
            <a href="/zwhb/p21-c0-g0-x0-q0/">广东</a>
            <a href="/zwhb/p12-c0-g0-x0-q0/">江苏</a>
            <a href="/zwhb/p13-c0-g0-x0-q0/">浙江</a>
            <a href="/zwhb/p14-c0-g0-x0-q0/">安徽</a>
            <a href="/zwhb/p15-c0-g0-x0-q0/">福建</a>
            <a href="/zwhb/p19-c0-g0-x0-q0/">湖北</a>
            <a href="/zwhb/p20-c0-g0-x0-q0/">湖南</a>
            <a href="/zwhb/p24-c0-g0-x0-q0/">四川</a>
            <a href="/zwhb/p7-c0-g0-x0-q0/">山西</a>
            <a href="/zwhb/p8-c0-g0-x0-q0/">内蒙古</a>
            <a href="/zwhb/p9-c0-g0-x0-q0/">辽宁</a>
            <a href="/zwhb/p6-c0-g0-x0-q0/">河北</a>
            <a href="/zwhb/p10-c0-g0-x0-q0/">吉林</a>
            <a href="/zwhb/p11-c0-g0-x0-q0/">黑龙江</a>
            <a href="/zwhb/p16-c0-g0-x0-q0/">江西</a>
            <a href="/zwhb/p17-c0-g0-x0-q0/">山东</a>
            <a href="/zwhb/p18-c0-g0-x0-q0/">河南</a>
            <a href="/zwhb/p22-c0-g0-x0-q0/">广西</a>
            <a href="/zwhb/p23-c0-g0-x0-q0/">海南</a>
            <a href="/zwhb/p25-c0-g0-x0-q0/">贵州</a>
            <a href="/zwhb/p26-c0-g0-x0-q0/">云南</a>
            <a href="/zwhb/p28-c0-g0-x0-q0/">陕西</a>
            <a href="/zwhb/p29-c0-g0-x0-q0/">甘肃</a>
            <a href="/zwhb/p32-c0-g0-x0-q0/">新疆</a>
            <a href="/zwhb/p33-c0-g0-x0-q0/">台湾</a>
            <a href="/zwhb/p35-c0-g0-x0-q0/">澳门</a>
          </div>
          <div class="arr">
            <i>展开</i><i>收起</i><img src="https://www.ieduchina.com/statics/zwhb/images/bc1f5d13.png" alt="">
          </div>
        </div>
        <div class="m">
          <span>外方学校地区</span>
          <div class="right">
            <a href="/zwhb/p0-c0-g0-x0-q0/" class="active">全部</a>
            <a href="/zwhb/p0-c0-g1-x0-q0/">美国</a>
            <a href="/zwhb/p0-c0-g2-x0-q0/">英国</a>
            <a href="/zwhb/p0-c0-g3-x0-q0/">澳大利亚</a>
            <a href="/zwhb/p0-c0-g4-x0-q0/">加拿大</a>
            <a href="/zwhb/p0-c0-g5-x0-q0/">日本</a>
            <a href="/zwhb/p0-c0-g6-x0-q0/">韩国</a>
            <a href="/zwhb/p0-c0-g7-x0-q0/">新西兰</a>
            <a href="/zwhb/p0-c0-g9-x0-q0/">意大利</a>
            <a href="/zwhb/p0-c0-g10-x0-q0/">德国</a>
            <a href="/zwhb/p0-c0-g11-x0-q0/">法国</a>
            <a href="/zwhb/p0-c0-g12-x0-q0/">瑞士</a>
            <a href="/zwhb/p0-c0-g13-x0-q0/">新加坡</a>
          </div>
        </div>
        <div class="m">
          <span>学&nbsp;&nbsp;习&nbsp;&nbsp;时&nbsp;&nbsp;间</span>
          <div class="right">
            <a href="/zwhb/p0-c0-g0-x0-q0/" class="active">全部</a>
            <a href="/zwhb/p0-c0-g0-x1-q0/">1+3年制</a>
            <a href="/zwhb/p0-c0-g0-x2-q0/">2+2年制</a>
            <a href="/zwhb/p0-c0-g0-x8-q0/">2+3年制</a>
            <a href="/zwhb/p0-c0-g0-x3-q0/">3+1年制</a>
            <a href="/zwhb/p0-c0-g0-x4-q0/">4+0年制</a>
            <a href="/zwhb/p0-c0-g0-x5-q0/">4+1年制</a>
            <a href="/zwhb/p0-c0-g0-x6-q0/">3+2年制</a>
            <a href="/zwhb/p0-c0-g0-x7-q0/">1+1双硕士</a>
            <a href="/zwhb/p0-c0-g0-x9-q0/">2+2+1学制</a>
          </div>
        </div>
        <div class="m">
          <span>学&nbsp;&nbsp;费&nbsp;&nbsp;区&nbsp;&nbsp;间</span>
          <div class="right">
            <a href="/zwhb/p0-c0-g0-x0-q0/" class="active">全部</a>
            <a href="/zwhb/p0-c0-g0-x0-q1/">5万以下</a>
            <a href="/zwhb/p0-c0-g0-x0-q2/">5万-10万</a>
            <a href="/zwhb/p0-c0-g0-x0-q3/">10万-15万</a>
            <a href="/zwhb/p0-c0-g0-x0-q4/">15万-20万</a>
            <a href="/zwhb/p0-c0-g0-x0-q5/">20万-25万</a>
            <a href="/zwhb/p0-c0-g0-x0-q6/">25万-30万</a>
            <a href="/zwhb/p0-c0-g0-x0-q7/">30万以上</a>
          </div>
        </div>
      </div>
    </div>
    <main>
      <div class="tab">
        <NuxtLink class="active" to="/zwhb">
          中外合办院校
        </NuxtLink>
        <NuxtLink to="/zwhb/project">
          中外合办机构及项目
        </NuxtLink>
      </div>
      <div class="school">
        <ul>
          <li>
            <a href="//schoollist.ieduchina.com/school/nyush/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/66616059dfb65.png" alt="上海纽约大学" />
              <h3 collegeid="1786" title="上海纽约大学">上海纽约大学</h3>
              <p>New York University Shanghai</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="1786" src="https://zhaosheng.ieduchina.com/Upload/File/202406/6661605ec6a77.png"> <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
          <li>
            <a href="//schoollist.ieduchina.com/school/dukekunshan/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/666160beaf4b1.jpg" alt="昆山杜克大学" />
              <h3 collegeid="1788" title="昆山杜克大学">昆山杜克大学</h3>
              <p>Duke Kunshan University</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="1788" src="https://zhaosheng.ieduchina.com/Upload/File/202406/666160d015500.png">
                    <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
          <li>
            <a href="//schoollist.ieduchina.com/school/cuhksz/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/6660223a30e52.jpeg" alt="香港中文大学（深圳）" />
              <h3 collegeid="1791" title="香港中文大学（深圳）">香港中文大学（深圳）</h3>
              <p>The Chinese University of Hong Kong, Shenzhen</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="1791" src="https://zhaosheng.ieduchina.com/Upload/File/202406/666021f1912d5.png">
                    <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
          <li>
            <a href="//schoollist.ieduchina.com/school/1941/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/66616a386f8dc.jpeg" alt="北京师范大学-香港浸会大学联合国际学院" />
              <h3 collegeid="1941" title="北京师范大学-香港浸会大学联合国际学院">北京师范大学-香港浸会大学联合国际学院</h3>
              <p>Beijing Normal University - Hong Kong Baptist University United International College</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="1941" src="https://zhaosheng.ieduchina.com/Upload/File/202406/66616a6fcc0d4.png">
                    <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
          <li>
            <a href="//schoollist.ieduchina.com/school/hkustgz/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/666022f68d562.jpeg" alt="香港科技大学（广州）" />
              <h3 collegeid="4740" title="香港科技大学（广州）">香港科技大学（广州）</h3>
              <p>The Hong Kong University of Science and Technology (Guangzhou)</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="4740" src="https://zhaosheng.ieduchina.com/Upload/File/202406/6660230e0c9d4.png">
                    <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
          <li>
            <a href="//schoollist.ieduchina.com/school/cityudg/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/66613075aa12d.jpg" alt="香港城市大学（东莞）" />
              <h3 collegeid="4741" title="香港城市大学（东莞）">香港城市大学（东莞）</h3>
              <p>City University of Hong Kong（Dongguan）</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="4741" src="https://zhaosheng.ieduchina.com/Upload/File/202406/666130931b130.png">
                    <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
          <li>
            <a href="//schoollist.ieduchina.com/school/smbudx/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/6662a95a1024d.png" alt="深圳北理莫斯科大学" />
              <h3 collegeid="1953" title="深圳北理莫斯科大学">深圳北理莫斯科大学</h3>
              <p>Shenzhen MSU-BIT University</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="1953" src="https://zhaosheng.ieduchina.com/Upload/File/202406/6662a9814a883.png">
                    <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
          <li>
            <a href="//schoollist.ieduchina.com/school/2718/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/666173cf43398.jpg" alt="西交利物浦大学" />
              <h3 collegeid="2718" title="西交利物浦大学">西交利物浦大学</h3>
              <p>Xi’an Jiaotong-Liverpool University</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="2718" src="https://zhaosheng.ieduchina.com/Upload/File/202406/666173e87fec2.png">
                    <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
          <li>
            <a href="//schoollist.ieduchina.com/school/wku/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/66617d55a6e8e.jpg" alt="温州肯恩大学" />
              <h3 collegeid="1790" title="温州肯恩大学">温州肯恩大学</h3>
              <p>Wenzhou-Kean University</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="1790" src="https://zhaosheng.ieduchina.com/Upload/File/202406/66617d7f3f3f4.png">
                    <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
          <li>
            <a href="//schoollist.ieduchina.com/school/unnc/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/66616641e5039.jpeg" alt="宁波诺丁汉大学" />
              <h3 collegeid="1789" title="宁波诺丁汉大学">宁波诺丁汉大学</h3>
              <p>University of Nottingham Ningbo China</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="1789" src="https://zhaosheng.ieduchina.com/Upload/File/202406/6661665a48aab.png">
                    <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
          <li>
            <a href="//schoollist.ieduchina.com/school/1938/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/66627685eafda.jpeg" alt="广东以色列理工学院" />
              <h3 collegeid="1938" title="广东以色列理工学院">广东以色列理工学院</h3>
              <p>Guangdong Technion-Israel Institute of Technology</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="1938" src="https://zhaosheng.ieduchina.com/Upload/File/202406/666276924ee4a.png">
                    <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
          <li>
            <a href="//schoollist.ieduchina.com/school/gufs/">
              <img src="https://zhaosheng.ieduchina.com/Upload/File/202406/6662ce898909b.jpg" alt="广东外语外贸大学国际本科课程" />
              <h3 collegeid="1794" title="广东外语外贸大学国际本科课程">广东外语外贸大学国际本科课程</h3>
              <p>International Academy of GUFS</p>
              <div class="btn">
                <button class="kf">在线咨询</button>
                <object>
                  <a class="gw" collegeid="1794" src="https://zhaosheng.ieduchina.com/Upload/File/202406/6662ceb7105da.png"> <button>进入官网</button>
                  </a>
                </object>
              </div>
            </a>
          </li>
        </ul>
        <div class="pages"></div>
      </div>
    </main>
  </section>
  <div class="form_1403">
    <div class="con">
      <form action="/index.php?m=college&c=index&a=collegereg&dopost=reg" method="post">
        <h2>注册【国际教育网】，获取更多招生入学信息</h2>
        <input name="mark" type="hidden" class="mark" value="国际教育网PC版_中外合办大学">
        <input name="want_school" type="hidden" class="want_school">
        <input name="collegeid" type="hidden" class="collegeid">
        <input name="name" type="text" class="name" placeholder="姓名">
        <input name="mobile" type="text" class="mobile1" placeholder="手机">
        <input name="age" type="text" class="age" placeholder="年龄">
        <input name="email" type="text" class="email" placeholder="邮箱">
        <div class="emailcode_wrap">
          <input name="emailcode" type="text" class="emailcode" placeholder="邮箱验证码">
          <button class="getcode" type="button">
            获取验证码
          </button>
        </div>
        <button class="submit_1421" type="submit">
          提交
        </button>
      </form><img src="https://www.ieduchina.com/statics/zwhb/images/1e225adb.png" alt="" class="close_1409">
    </div>
  </div>
  <Footer />
</template>

<style lang="less" scoped>
@font-face {
  font-family: "Source Han Sans CN-Normal";
  src: url("/statics/font/SourceHanSansCN-Normal.otf") format("truetype")
}

body {
  font-family: Source Han Sans CN-Normal;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

.banner {
  width: 100%;
  min-width: 1200px;
  height: 420px;
  overflow: hidden
}

.banner .swiper_1f8c60f5 .swiper-slide a img {
  width: 100%;
  min-width: 1200px;
  height: 420px;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center
}

.pages {
  text-align: center;
  margin: 30px auto 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.pages span {
  height: 35px;
  background: var(--blue);
  border-radius: 2px;
  line-height: 35px;
  font-size: 14px;
  letter-spacing: -1px;
  border: 1px solid var(--blue);
  display: inline-block;
  padding: 0 10px;
  color: #fff;
  margin: 0 5px
}

.pages a {
  margin: 0 5px;
  height: 35px;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  padding: 0 10px;
  color: #999;
  line-height: 35px;
  font-size: 14px;
  letter-spacing: -1px;
  display: inline-block;
  background-color: #fff
}

.pages a:hover {
  background: #f1f1f1;
  color: #000;
  text-decoration: none
}

.right-fixed-nav2 {
  position: fixed;
  right: 30px;
  top: 50%;
  z-index: 200;
  width: 75px;
  display: none
}

.right-fixed-nav2 ul li {
  width: 75px;
  height: 70px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 5px;
  cursor: pointer;
  background-color: var(--blue);
  position: relative
}

.right-fixed-nav2 ul li.radius {
  border-radius: 0 0 6px 6px
}

.right-fixed-nav2 ul li p {
  width: 100%;
  height: 100%;
  color: #fff;
  padding-top: 42px;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  background-position: center 7px;
  background-size: 30px 30px;
  background-repeat: no-repeat
}

.right-fixed-nav2 ul li .box {
  position: absolute;
  right: 75px;
  top: 50%;
  -webkit-transform: translateY(-50%) scale(0);
  transform: translateY(-50%) scale(0);
  width: 122px;
  -webkit-transition: 500ms;
  transition: 500ms;
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%
}

.right-fixed-nav2 ul li .box .cn {
  background: var(--blue);
  border-radius: 6px;
  padding: 20px 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 114px;
  position: relative
}

.right-fixed-nav2 ul li .box .cn::after {
  content: "";
  position: absolute;
  right: -12px;
  width: 0;
  height: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border: solid 10px var(--blue);
  border-top: rgba(0, 0, 0, 0) solid 5px;
  border-bottom: rgba(0, 0, 0, 0) solid 5px;
  border-right: rgba(0, 0, 0, 0) solid 5px
}

.right-fixed-nav2 ul li .box .cn span {
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: #fff
}

.right-fixed-nav2 ul li .box .cn img {
  width: 96px;
  height: 96px
}

.right-fixed-nav2 ul li .box .cn a {
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  padding-top: 6px;
  display: inline-block;
  margin-top: 6px;
  letter-spacing: -1px
}

.right-fixed-nav2 ul li.kefu {
  border-radius: 6px
}

.right-fixed-nav2 ul li.kefu p {
  background-image: url(../images/eda8ee1c.png);
  background-size: 33px 28px
}

.right-fixed-nav2 ul li:nth-of-type(n+2):hover .box {
  -webkit-transform-origin: 0% 50%;
  transform-origin: 0% 50%;
  -webkit-transition: 500ms;
  transition: 500ms;
  -webkit-transform: translateY(-50%) scale(1);
  transform: translateY(-50%) scale(1)
}

.right-fixed-nav2 ul li:nth-of-type(n+2):hover p {
  color: #333;
  background-color: #fff;
  border-radius: 4px
}

.right-fixed-nav2 ul li.tel {
  margin-top: 5px;
  border-radius: 6px 6px 0 0
}

.right-fixed-nav2 ul li.tel p {
  background-image: url(../images/f85f09a9.png)
}

.right-fixed-nav2 ul li.tel:hover p {
  background-image: url(../images/b22f83f5.png)
}

.right-fixed-nav2 ul li.mobile p {
  background-image: url(../images/af20ff73.png)
}

.right-fixed-nav2 ul li.mobile .box .cn span {
  text-align: center;
  padding-top: 6px
}

.right-fixed-nav2 ul li.mobile:hover p {
  background-image: url(../images/8c825c8e.png)
}

.right-fixed-nav2 ul li.weixin p {
  background-image: url(../images/969144f5.png)
}

.right-fixed-nav2 ul li.weixin:hover p {
  background-image: url(../images/18ed670b.png)
}

.right-fixed-nav2 ul li.weixin .box .cn span {
  text-align: center;
  padding-top: 4px;
  white-space: nowrap
}

.right-fixed-nav2 ul li.weixin .box .cn img:nth-of-type(2) {
  margin-top: 6px
}

.right-fixed-nav2 ul li.top {
  display: none
}

.right-fixed-nav2 ul li.top p {
  background-image: url(../images/3877772e.png)
}

.right-fixed-nav2 ul li.top:hover p {
  background-image: url(../images/b0205f30.png)
}

.top form {
  padding: 27px 0 27px;
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
  align-items: center
}

.top form span {
  font-size: 20px;
  font-weight: bold;
  color: #333
}

.top form span::before {
  content: "";
  display: inline-block;
  width: 3px;
  height: 20px;
  background: var(--blue);
  margin-right: 5px;
  vertical-align: -3px
}

.top form .search {
  position: relative;
  width: 432px;
  height: 32px;
  background: #fff;
  border-radius: 16px
}

.top form .search input {
  width: 432px;
  height: 32px;
  background: #fff;
  border-radius: 16px;
  font-weight: 400;
  font-size: 14px;
  color: #333;
  padding: 0 74px 0 20px
}

.top form .search input:placeholder {
  color: #999;
  font-weight: 400;
  font-size: 14px
}

.top form .search button {
  position: absolute;
  right: 0;
  top: 0;
  width: 54px;
  height: 32px;
  background: var(--blue);
  border-radius: 16px;
  border: none;
  outline: none;
  cursor: pointer
}

.top form .search button img {
  width: 20px;
  height: 20px;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  vertical-align: -3px
}

.top .menu {
  font-size: 0;
  width: 1200px;
  background: #fff;
  border-radius: 8px;
  padding: 0 20px 7px 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.top .menu .m {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  overflow: hidden
}

.top .menu .m:first-of-type .right {
  height: 50px
}

.top .menu .m:first-of-type .right.open {
  height: initial
}

.top .menu .m:nth-of-type(2) .right,
.top .menu .m:nth-of-type(3) .right {
  height: 50px
}

.top .menu .m:nth-of-type(2) .right.open,
.top .menu .m:nth-of-type(3) .right.open {
  height: initial
}

.top .menu .m span {
  width: 96px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  height: 30px;
  display: inline-block;
  border-right: 1px solid #e6e6e6;
  text-align: justify;
  margin-top: 10px;
  padding-top: 10px
}

.top .menu .m .right {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 2px 20px 15px
}

.top .menu .m .right a {
  display: inline-block;
  margin-right: 40px;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  margin-top: 18px
}

.top .menu .m .right a.active {
  color: var(--blue)
}

.top .menu .m .arr {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  right: 0;
  top: 7px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  color: #0770d1
}

.top .menu .m .arr i {
  font-style: initial
}

.top .menu .m .arr i:nth-of-type(2) {
  display: none
}

.top .menu .m .arr img {
  width: 8px;
  height: 8px;
  margin-left: 4px
}

.top .menu .m .arr.open {
  -webkit-transition: -webkit-transform 1s;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s
}

.top .menu .m .arr.open i {
  display: none
}

.top .menu .m .arr.open i:nth-of-type(2) {
  display: inline
}

.top .menu .m .arr.open img {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg)
}

.top .menu .m:nth-of-type(n+2) {
  border-top: 1px solid #e6e6e6
}

.tab {
  padding: 10px 0;
  border-bottom: solid 1px #ebebeb
}

.tab a {
  margin-right: 50px;
  font-weight: bold;
  font-size: 16px;
  color: #333;
  height: 16px;
  display: inline-block
}

.tab a.active {
  color: #0770d1;
  position: relative
}

.tab a.active::after {
  position: absolute;
  content: "";
  bottom: -10px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #0770d1
}

.school ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 5px
}

.school ul li {
  width: 275px;
  height: 330px;
  background: #fff;
  border-radius: 10px 10px 10px 10px;
  margin: 20px 16px 0 0;
  border: solid 1px #e2e2e2
}

.school ul li:nth-of-type(4n) {
  margin-right: 0
}

.school ul li a {
  display: block;
  padding: 5px
}

.school ul li a img {
  width: 265px;
  height: 165px;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: contain;
  object-fit: contain
}

.school ul li a h3 {
  display: block;
  font-weight: bold;
  font-size: 18px;
  color: #333;
  line-height: 30px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 13px 0
}

.school ul li a p {
  font-weight: 400;
  font-size: 14px;
  color: #666;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}

.school ul li a .btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 206px;
  margin: 24px auto 0
}

.school ul li a .btn button {
  width: 88px;
  height: 30px;
  background: #fff;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid var(--blue);
  color: var(--blue);
  cursor: pointer
}

.school ul li a .btn object a {
  padding: 0
}

.school ul li a .btn object a button {
  width: 88px;
  height: 30px;
  color: #fff;
  background: var(--blue);
  border-radius: 4px 4px 4px 4px;
  border: 1px solid var(--blue)
}

.institutions {
  padding-top: 20px
}

.institutions ul li {
  line-height: 23px;
  border-bottom: 1px solid #ebebeb;
  padding: 16px 0
}

.institutions ul li a {
  font-weight: 400;
  font-size: 16px;
  color: #333
}

.institutions ul li a:hover {
  color: #0770d1
}

.form_1403 {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .5);
  display: none;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.form_1403.show {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.form_1403 .con {
  text-align: center;
  background-color: transparent;
  width: initial;
}

.form_1403 .con form {
  width: 420px;
  padding: 30px 40px;
  background: #fff;
  border-radius: 10px
}

.form_1403 .con form h2 {
  font-size: 26px;
  font-weight: bold;
  color: #0770d1;
  line-height: 32px;
  letter-spacing: 3px
}

.form_1403 .con form h3 {
  font-size: 16px;
  font-weight: 400;
  color: #666;
  padding-bottom: 10px
}

.form_1403 .con form input {
  width: 100%;
  height: 47px;
  background: #fff;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 400;
  color: #333;
  outline: none;
  margin-top: 20px
}

.form_1403 .con form input::-webkit-input-placeholder {
  font-size: 18px;
  font-weight: 400;
  color: #999
}

.form_1403 .con form input::-moz-placeholder {
  font-size: 18px;
  font-weight: 400;
  color: #999
}

.form_1403 .con form input:-ms-input-placeholder {
  font-size: 18px;
  font-weight: 400;
  color: #999
}

.form_1403 .con form input::-ms-input-placeholder {
  font-size: 18px;
  font-weight: 400;
  color: #999
}

.form_1403 .con form input::placeholder {
  font-size: 18px;
  font-weight: 400;
  color: #999
}

.form_1403 .con form .emailcode_wrap {
  position: relative
}

.form_1403 .con form .emailcode_wrap input {
  width: 200px;
  margin-right: 150px
}

.form_1403 .con form .emailcode_wrap button {
  position: absolute;
  right: 0;
  top: 20px;
  z-index: 10;
  width: 130px;
  height: 47px;
  background: #0770d1;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  border: none;
  outline: none
}

.form_1403 .con form .emailcode_wrap button[disabled] {
  opacity: .5;
  cursor: no-drop
}

.form_1403 .con form>button {
  width: 100%;
  height: 47px;
  background: #0770d1;
  border-radius: 6px;
  margin-top: 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  border: none;
  outline: none
}

.form_1403 .con .close_1409 {
  width: 30px;
  height: 30px;
  margin-top: 20px;
  cursor: pointer
}

:root {
  --blue: #0770D1
}

body {
  background-color: #f3f3f7
}

body section {
  width: 1200px;
  margin: 0 auto 100px
}

body section main {
  background: #fff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px
}
</style>
