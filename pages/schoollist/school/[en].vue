<script setup>
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
const Header = defineAsyncComponent(() => import(`~/components/hongkong/Header.vue`));
const Footer = defineAsyncComponent(() => import(`~/components/hongkong/Footer.vue`));
const route = useRoute()
console.log(route.params)
useHead({
  script: [
    {
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
    },
    {
      src: 'https://www.ieduchina.com/statics/pcc/js/swiper.min.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://cloudcache.tencentcs.com/qcloud/video/dist/tcadapter.1.0.0.min.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/TXLivePlayer-1.2.3.min.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/hls.min.1.1.5.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/flv.min.1.6.3.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/dash.all.min.4.4.1.js',
      type: 'text/javascript',
      defer: true,
    },
    {
      src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.v4.5.4.min.js',
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
    {
      rel: 'stylesheet',
      href: 'https://www.ieduchina.com/statics/pc/css/swiper.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.min.css',
    },
  ],
  title: '香港哈罗国际学校_怎么样_学费-国际教育网',
  meta: [
    { name: 'description', content: '哈罗香港国际学校是一所私立的独立国际学校，该校是哈罗公学(Harrow School)全球第4家的分校，亦是中国香港首家寄宿制的国际学校。该校于2012年9月创办，现任校长是Ann Haydon女士。学校位处屯门黄金海岸附近，沿袭英国哈罗公学的教育理念、教学方法和传统，并将之融人香港多元且国际化的社会中。' },
    { name: 'keywords', content: '香港哈罗国际学校' },
    // Open Graph 协议（用于社交媒体分享）
    { property: 'og:title', content: '香港哈罗国际学校_怎么样_学费-国际教育网' },
    { property: 'og:description', content: '哈罗香港国际学校是一所私立的独立国际学校，该校是哈罗公学(Harrow School)全球第4家的分校，亦是中国香港首家寄宿制的国际学校。该校于2012年9月创办，现任校长是Ann Haydon女士。学校位处屯门黄金海岸附近，沿袭英国哈罗公学的教育理念、教学方法和传统，并将之融人香港多元且国际化的社会中。' },
    { property: 'og:type', content: 'website' },
    // Twitter 卡片
    { name: 'twitter:card', content: 'https://www.ieduchina.com/statics/image/c14def69.jpg' },
    { name: 'twitter:title', content: '香港哈罗国际学校_怎么样_学费-国际教育网' },
    { name: 'twitter:description', content: '哈罗香港国际学校是一所私立的独立国际学校，该校是哈罗公学(Harrow School)全球第4家的分校，亦是中国香港首家寄宿制的国际学校。该校于2012年9月创办，现任校长是Ann Haydon女士。学校位处屯门黄金海岸附近，沿袭英国哈罗公学的教育理念、教学方法和传统，并将之融人香港多元且国际化的社会中。' },
  ],
})
</script>
<template>
  <Header />
  <section>
    <div class="container">
      <p class="bread"><a href="//www.ieduchina.com" target="_blank">首页</a>>
        <a href="//www.ieduchina.com/hongkong/">香港学校</a>>
        <span>香港哈罗国际学校</span>
      </p>
      <div class="content">
        <main>
          <div class="box">
            <div class="title"><i></i>香港哈罗国际学校 Harrow International School Hong Kong</div>
            <div class="intro">
              <img src="https://www.ieduchina.com/uploadfile/college/201909/1568097236.png" alt="香港哈罗国际学校" />
              <div class="desc">
                <p>哈罗香港国际学校是一所私立的独立国际学校，该校是哈罗公学(Harrow School)全球第4家的分校，亦是中国香港首家寄宿制的国际学校。该校于2012年9月创办，现任校长是Ann
                  Haydon女士。学校位处屯门黄金海岸附近，沿袭英国哈罗公学的教育理念、教学方法和传统，并将之融人香港多元且国际化的社会中。</p>
                <div class="school-brief-btn">
                  <a href="javascript:">
                    <button class="mask-btn"
                      style="background-image:url(//www.ieduchina.com/statics/pc/images/btn-appointment.png)">申请入读</button>
                  </a>
                  <a href="javascript:">
                    <button class="open_kefu"
                      style="background-image:url(//www.ieduchina.com/statics/pc/images/zxkf1208.png)">在线咨询</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="title"><i></i><span style="display: none;">香港哈罗国际学校</span>基本信息</div>
            <ul class="info">
              <li><span>学校名称 ：</span>
                <p>香港哈罗国际学校</p>
              </li>

              <li><span>英文名称 ：</span>
                <p>Harrow International School Hong Kong</p>
              </li>
              <li><span>创立时间 ：</span>
                <p>2012年</p>
              </li>

              <li><span>学校性质 ：</span>
                <p>国际学校</p>
              </li>

              <li><span>开设阶段 ：</span>
                <p>幼儿园 、小学 、初中 、高中</p>
              </li>


              <li><span>课程体系 ：</span>
                <p>Alevel 、IGCSE 、英式</p>
              </li>

              <li><span>学费区间 ：</span>
                <p>16.91-22.99万港币</p>
              </li>

              <li><span>是否住宿 ：</span>
                <p>是</p>
              </li>

              <li><span>留学国家 ：</span>
                <p>美国 、英国 、澳大利亚 、加拿大</p>
              </li>


            </ul>

          </div>

          <div class="box">
            <div class="title"><i></i><span style="display: none;">香港哈罗国际学校</span>学校简介</div>
            <div class="con">
              <p>
                哈罗香港国际学校成立于2012年，是香港首间寄宿及全日制国际学校。学校位处屯门黄金海岸附近，巍峨壮丽的半月形校舍，配备师生所需的一流设备。哈罗香港提供出类拔萃的教育，学校沿袭英国哈罗公学的教育理念、教学方法和传统，并将之融入香港多元且国际化的社会中。哈罗香港分为低年级(幼儿园1年班至初班5年级)和高年级(6年级至13年级)。哈罗香港的学生由预备班6年班起可以申请寄宿，学校的寄宿是周宿制，现在有近半高年级学生寄宿。
              </p>
              <p>幼儿园(1至2年班)采用英国制Early Years Foundation Stage课程;初班(1 至5 年班)修读英国制National Curriculum of
                England(2014)课程;预备班(6 至8 年班)以英国制National Curriculum为基础，提供技能导向的课程，从初班的家校环境过渡到高年级以科目主导的学习环境;高班(9 至11
                年班)3年课程以国际普通中学教育文凭考试(IGCSEs)为基础;预科班(12 至13 年班)班的2年课程以普通教育文凭高级程度考试(A-level)为基础，另加专题研习课程(Extended Project
                Qualification)及学校自设的哈罗国际视野课程(Harrow International Perspectives)。</p>
              <p>开设阶段：幼儿教育、小学及中学部</p>
            </div>
          </div>

          <div class="box">
            <div class="title"><i></i><span style="display: none;">香港哈罗国际学校</span>招生简章</div>
            <div class="con">
              <p style="line-height: 1.75em;">
                <span style="color: rgb(15, 36, 62); font-size: 16px;">
                  <strong>入学</strong><br />香港哈罗国际学校是一所精英学校,
                  旨在招收那些有才能、有能力、有个性的学生，他们最有可能在多元化的国际社会中茁壮成长并为之做出贡献。<br />哈罗香港传承英国哈罗公学“为世界培育领袖力量”的愿景和使命，这些因素在招生和决定录取哪些学生方面很重要。他们是：<br /></span>
              </p>
              <p style="line-height: 1.75em;"><span style="font-size: 16px; color: rgb(15, 36, 62);">▪&nbsp; 学术能力</span>
              </p>
              <p style="line-height: 1.75em;"><span
                  style="color: rgb(15, 36, 62); font-size: 16px;">▪&nbsp;&nbsp;广泛的课外活动爱好</span></p>
              <p style="line-height: 1.75em;"><span
                  style="color: rgb(15, 36, 62); font-size: 16px;">▪&nbsp;&nbsp;学校内外的人际关系</span></p>
              <p style="line-height: 1.75em;"><span
                  style="color: rgb(15, 36, 62); font-size: 16px;">▪&nbsp;&nbsp;符合学校的精神<br /></span></p>
              <p style="line-height: 1.75em;"><span style="color: rgb(15, 36, 62);"><span
                    style="color: rgb(15, 36, 62); font-size: 16px;">鉴于学生群体的国籍和第一语言的多样性，英语是学校唯一的包容性语言，申请者需要精通英语，以便能够接触到所有课程和社区。因此，学校的招生系统将以一种与年龄相适应的方式评估所有申请人目前的英语水平，以评估他们进入课程的能力。</span></span>
              </p>
              <p style="line-height: 1.75em;"><span style="color: rgb(15, 36, 62);"><span
                    style="color: rgb(15, 36, 62); font-size: 16px;"><strong>2025年8月入学申请时间</strong></span><br /></span>
              </p>
              <p style="line-height: 1.75em;"><span style="font-size: 16px; color: rgb(15, 36, 62);"><img alt=""
                    src="//www.ieduchina.com/uploadfile/2024/0827/20240827043636390.png" width="700" height="618"
                    title="" /></span><br /></p>
              <p style="line-height: 1.75em;"><span style="color: rgb(15, 36, 62);"><span
                    style="color: rgb(15, 36, 62); font-size: 16px;"><strong>评估</strong></span><br /><span
                    style="color: rgb(15, 36, 62); font-size: 16px;">评估将在学校进行。申请人应随身携带护照和香港身份证（如适用）。着装要求是他们的校服或便装。<br />海外申请人在学校或授权的考试中心参加英语和数学的机试，有些情况下需要书面写作。表现出所需学术能力的申请人将随后接受Skype面试。<br />评估系统以适合不同年龄段的年龄段的方式评估申请人目前的英语水平，除了他们的学习成绩、课外兴趣，还有他们在学校多元化的国际社会中茁壮成长并作出贡献的潜力。<br /></span></span>
              </p>
              <p style="line-height: 1.75em;"><span style="font-size: 16px; color: rgb(15, 36, 62);"><img alt=""
                    src="//www.ieduchina.com/uploadfile/2021/0427/20210427053226470.png" width="700" height="585"
                    title="" /></span><br /></p>
              <p style="line-height: 1.75em;"><span style="color: rgb(15, 36, 62); font-size: 16px;"><strong>2024-2025
                    学年学费</strong><br /></span></p>
              <p style="line-height: 1.75em;"><span style="font-size: 16px; color: rgb(15, 36, 62);"><img alt=""
                    src="//www.ieduchina.com/uploadfile/2024/0716/20240716022948653.png" width="700" height="249"
                    title="" /></span><br /><span style="color: rgb(15, 36, 62);">&nbsp;</span></p>
            </div>
          </div>


          <div class="box">
            <div class="title"><i></i><span style="display: none;">香港哈罗国际学校</span>课程设置</div>
            <div class="con">
              <p>哈罗香港国际学校的课程分为 Early Years (K1 &amp; K2)， Pre-Prep (Year 1-5)， Prep (Year 6-8)， Senior (Year 9-11)，
                Sixth Form (Year 12-13)。</p>
              <p>Early Years 的课程会採用英国 Early Years Foundation Stage (EYFS) 的学制。这个幼儿课程主要为学生的下一步小学课程打好学术基础。Pre-prep 及 Prep
                小学年度就会提供各种学科让学生修读，包括英文、数学、中文、科学、体育、地理、音乐、历史、艺术及语言，务求让学生完美衔接高中课程。Senior 中学年度就会跟随 GCSE 学制，科目上与 Prep
                类似，但科学课堂就会分拆为化学、生物及物理科目。Sixth Form 就会採用大家所熟悉的 A Levels 课程。</p>
              <p>由于 Harrow International School Hong Kong 的课程与英国传统课程类似，功课上会较为繁忙，而且英语难度甚高。</p>
              <p>课外活动方面，哈罗香港国际学校提供多元化的选择，包括：计算机科学、歌词、音乐演奏、芭蕾舞、运动(网球、足球、篮球、排球、羽毛球、高尔夫球、体操等)、其他语言。</p>
            </div>
          </div>


          <div class="box">
            <div class="title"><i></i><span style="display: none;">香港哈罗国际学校</span>校园环境</div>
            <div class="environment">
              <div class="swiper_envi">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="https://www.ieduchina.com/uploadfile/college/201909/1568098355.png" alt="香港哈罗国际学校-校园风采"
                      width="251">
                    <p>校园风采</p>
                  </div>
                  <div class="swiper-slide">
                    <img src="https://www.ieduchina.com/uploadfile/college/201909/1568098276.jpg" alt="香港哈罗国际学校-校园风采"
                      width="251">
                    <p>校园风采</p>
                  </div>
                  <div class="swiper-slide">
                    <img src="https://www.ieduchina.com/uploadfile/college/201909/1568098245.jpg" alt="香港哈罗国际学校-校园一角"
                      width="251">
                    <p>校园一角</p>
                  </div>
                  <div class="swiper-slide">
                    <img src="https://www.ieduchina.com/uploadfile/college/201909/1568098227.jpg" alt="香港哈罗国际学校-校园外观"
                      width="251">
                    <p>校园外观</p>
                  </div>
                  <div class="swiper-slide">
                    <img src="https://www.ieduchina.com/uploadfile/college/201909/1568098207.jpg" alt="香港哈罗国际学校-学生风采"
                      width="251">
                    <p>学生风采</p>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>

          <!--  -->
          <!-- <div class="box">
                    <div class="title"><i></i>联系方式</div>
                    <div class="concat">
                                                    <p>学校官网：<a href="http://www.harrowschool.hk" target="_blank">http://www.harrowschool.hk</a></p><br>
                                                <p>学校电话：<a>28249099</a></p><br>
                                                    <p class="email">学校邮箱：<a>info@harrowschool.hk</a></p><br>
                                                                            <p>学校地址：<a>屯门青盈路38号</a></p>
                                            </div>
                    <div class="concat_">查看联系方式 >></div>
                </div> -->
          <!--  -->

          <!-- <div class="mask2">
                    <form action="/index.php?m=college&c=index&a=collegereg&dopost=reg" method="post">
                        <input type="hidden"  name="mark" value="国际教育网院校库PC版_获取学校联系方式"  />
                        <input type="hidden"  name="collegeid" value="312" id="collegeid" />
                        <input type="hidden"  name="want_school"  value="香港哈罗国际学校" />
                        <img src="//www.ieduchina.com/statics/xg/school/images/4b1cd002.png" alt="" class="close">
                        <p>查看学校官方详情</p>
                        <p>登记注册</p>
                        <div class="input" required><span>孩子姓名</span><input name="name" type="text" placeholder="请输入孩子姓名" /></div>
                        <div class="input select" required><span>在读年级</span><select name="grade" placeholder="请选择在读年级">
                            <option value="" style="display:none">请选择在读年级</option>
                            <option value="幼儿园">幼儿园</option>
                            <option value="一年级">一年级</option>
                            <option value="二年级">二年级</option>
                            <option value="三年级">三年级</option>
                            <option value="四年级">四年级</option>
                            <option value="五年级">五年级</option>
                            <option value="六年级">六年级</option>
                            <option value="初一">初一</option>
                            <option value="初二">初二</option>
                            <option value="初三">初三</option>
                            <option value="高一">高一</option>
                            <option value="高二">高二</option>
                            <option value="高三">高三</option>
                            <option value="其他">其他</option>
                        </select></div>
                        <div class="input" required>
                            <span>手机号码</span>
                            <input name="mobile" type="text" placeholder="请输入您的手机号" />
                        </div>
                        <div class="input" required>
                            <span>电子邮箱</span>
                            <input name="email" type="text" placeholder="请输入您的电子邮箱" />
                        </div>
                        <div class="input" required>
                            <span>验证码</span>
                            <div class="emailcode_wrap">
                                <input name="emailcode" type="text" class="emailcode" placeholder="邮箱验证码"><button class="getcode" type="button">获取验证码</button>
                            </div>
                        </div>
                        <button class="submit_ed8b" type="submit">提交</button>
                    </form>
                </div> -->
          <div class="box">
            <div class="title"><i></i><span style="display: none;">香港哈罗国际学校</span>学校地址</div>
            <div class="map">
              <div id="container"></div>
            </div>
          </div>

          <!-- 视频 -->
        </main>
        <aside>
          <form action="/index.php?m=college&c=index&a=collegereg&dopost=reg" class="form_a57c" method="post">
            <input type="hidden" name="mark" value="国际教育网PC版_香港学校" />
            <input type="hidden" name="collegeid" value="312" id="collegeid" />
            <input type="hidden" name="want_school" value="香港哈罗国际学校" />
            <div class="top">
              <h2>2025招生报名入口</h2>
              <p>少量开放日预约名额，火速报名吧!</p>
            </div>
            <div class="bottom">
              <div class="item select"><select id="cmbProvince" name="province" placeholder="选择省份" required></select>
              </div>
              <div class="item select"><select id="cmbCity" name="city"></select></div>
              <div class="item"><input type="text" name="name" placeholder="学生中文名字" required></div>
              <div class="item select"><select id="" name="grade" placeholder="选择班级" required>
                  <option value="" style="color:#999;display:none">选择班级</option>
                  <option value="幼儿园">幼儿园</option>
                  <option value="一年级">一年级</option>
                  <option value="二年级">二年级</option>
                  <option value="三年级">三年级</option>
                  <option value="四年级">四年级</option>
                  <option value="五年级">五年级</option>
                  <option value="六年级">六年级</option>
                  <option value="初一">初一</option>
                  <option value="初二">初二</option>
                  <option value="初三">初三</option>
                  <option value="高一">高一</option>
                  <option value="高二">高二</option>
                  <option value="高三">高三</option>
                  <option value="其他">其他</option>
                </select></div><select id="cmbArea" style="display:none"></select>
              <div class="item"><input type="text" name="mobile" placeholder="手机号码" required></div><button
                class="btna57c" type="submit">立即报名</button>
              <div class="tel"><img src="//www.ieduchina.com/statics/xx_xg/images/6efcad18.png" alt=""
                  width="22">400-900-8516</div>
            </div>
          </form>
          <a href="//www.ieduchina.com/hk/" rel="nofollow" class="ad"><img
              src="//www.ieduchina.com/statics/xg/images/2f0ae22f.png" alt="香港升学"></a>
          <div class="activily-3074171">
            <div id="activity_hot_hk" class="wrap"></div>
          </div>
          <div class="zhinan">
            <h3 class="title">選校指南</h3>
            <ul>
              <li><a href="//www.ieduchina.com/hongkong/midschool/202504/127760.html"
                  target="_blank">2025香港汉华中学插班入学申请须知</a></li>
              <li><a href="//www.ieduchina.com/hongkong/midschool/202504/127535.html"
                  target="_blank">中华基金中学2025-2026学年插班入学须知</a></li>
              <li><a href="//www.ieduchina.com/hongkong/midschool/202504/127470.html"
                  target="_blank">2025年福建中学学费及录取标准</a></li>
              <li><a href="//www.ieduchina.com/hongkong/midschool/202504/127405.html"
                  target="_blank">九龙真光中学2025年插班生申请入学安排</a></li>
              <li><a href="//www.ieduchina.com/hongkong/midschool/202504/127337.html"
                  target="_blank">2025沙田崇真中学招生要求介绍</a></li>
              <li><a href="//www.ieduchina.com/hongkong/midschool/202504/127049.html"
                  target="_blank">玛利诺修院学校中二至中四2025-2026申请人须知</a></li>
              <li><a href="//www.ieduchina.com/hongkong/eleschool/202504/126934.html"
                  target="_blank">嘉诺撒圣方济各学校2025年插班生申请须知</a></li>
              <li><a href="//www.ieduchina.com/hongkong/eleschool/202504/126880.html"
                  target="_blank">轩尼诗道官立小学2025-2026学年插班申请须知</a></li>
              <li><a href="//www.ieduchina.com/hongkong/eleschool/202504/126826.html"
                  target="_blank">圣士提反书院附属小学2025-2026 年度二至六年级插班信息</a></li>
              <li><a href="//www.ieduchina.com/hongkong/eleschool/202504/126783.html"
                  target="_blank">圣保罗书院小学2026至2027年度小一入学申请简介会</a></li>
              <li><a href="//www.ieduchina.com/hongkong/eleschool/202504/126743.html"
                  target="_blank">圣保罗男女中学附属小学2025-2026 小一入学招生信息</a></li>
              <li><a href="//www.ieduchina.com/hongkong/eleschool/202504/126688.html" target="_blank">港大同学会小学2026-2027
                  年度小一入学申请须知</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
  <Footer />
</template>
<style lang="less" scoped>
.bread {
  font-size: 14px;
  font-weight: 400;
  padding: 30px 0 20px
}

.bread a {
  color: #333;
  padding-right: 4px;
  padding-left: 4px
}

.bread span {
  color: #0770d1;
  margin-left: 4px
}

.title {
  font-size: 24px;
  font-weight: 500;
  color: #0770d1;
  line-height: 24px
}

.title i {
  display: inline-block;
  width: 4px;
  height: 24px;
  background: #0770d1;
  vertical-align: -3px;
  margin-right: 10px
}

aside {
  width: 360px;
  margin-top: 30px
}

aside .ad {
  width: 360px
}

aside .ad img {
  width: 360px;
  cursor: pointer
}

aside .activily-3074171 {
  margin-top: 20px
}

aside .activily-3074171 h3 {
  font-size: 20px;
  height: 20px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box
}

aside .activily-3074171 h3::before {
  height: 20px
}

aside .zhinan {
  background: #fff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 20px 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

aside .zhinan h3 {
  font-size: 20px;
  font-weight: 500;
  color: #0770d1;
  height: 20px
}

aside .zhinan h3::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 20px;
  background: #0770d1;
  margin-right: 10px;
  vertical-align: -4px
}

aside .zhinan ul {
  margin-top: 5px
}

aside .zhinan ul li {
  height: 46px;
  line-height: 46px;
  border-bottom: solid 1px #dedede;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}

aside .zhinan ul li:last-of-type {
  border-bottom: none
}

aside .zhinan ul li a {
  font-size: 16px;
  font-weight: 400;
  color: #666;
  padding-left: 14px
}

aside .zhinan ul li a:hover {
  color: #0770d1
}

.activily-3074171 {
  width: 360px
}

.activily-3074171 .wrap {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 20px 15px;
  background-color: #fff
}

.activily-3074171 h3 {
  font-size: 24px;
  font-weight: 500;
  color: #0770d1;
  height: 24px
}

.activily-3074171 h3::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 20px;
  background: #0770d1;
  margin-right: 10px;
  vertical-align: -4px
}

.activily-3074171 .swiper {
  width: 330px;
  margin-top: 20px;
  overflow: hidden
}

.activily-3074171 .swiper .swiper-slide {
  width: 330px;
  height: 342px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer
}

.activily-3074171 .swiper .swiper-slide .con {
  width: 330px;
  height: 220px;
  position: relative
}

.activily-3074171 .swiper .swiper-slide .con::before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 58px;
  height: 52px;
  z-index: 10;
  background: url(../images/9a943cd3.png) center/contain no-repeat
}

.activily-3074171 .swiper .swiper-slide .con img {
  width: 330px;
  height: 220px;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center
}

.activily-3074171 .swiper .swiper-slide .con p {
  background-color: rgba(0, 0, 0, .5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  padding: 0 12px;
  font-weight: 400;
  color: #fff;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden
}

.activily-3074171 .swiper .swiper-slide>p {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  padding-top: 12px
}

.activily-3074171 .swiper .swiper-slide .btn {
  text-align: center;
  margin-top: 15px
}

.activily-3074171 .swiper .swiper-slide .btn a {
  display: inline-block;
  width: 150px;
  height: 34px;
  line-height: 32px;
  border-radius: 4px;
  border: 1px solid #1583e3;
  font-size: 14px;
  font-weight: 400;
  color: #1583e3;
  background: url(../images/c344b826.png) 98px center/17px 13px no-repeat;
  padding-right: 26px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.form1684460871227 {
  width: 360px;
  height: 480px;
  background: center top/360px 480px no-repeat;
  margin-top: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.form1684460871227 form {
  padding-top: 110px;
  width: 306px;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.form1684460871227 form input {
  width: 306px;
  height: 40px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e3e3e3;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  padding: 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.form1684460871227 form input::-webkit-input-placeholder {
  color: #999
}

.form1684460871227 form input::-moz-placeholder {
  color: #999
}

.form1684460871227 form input:-ms-input-placeholder {
  color: #999
}

.form1684460871227 form input::-ms-input-placeholder {
  color: #999
}

.form1684460871227 form input::placeholder {
  color: #999
}

.form1684460871227 form button {
  width: 306px;
  height: 40px;
  background: #2b77df;
  -webkit-box-shadow: 0px 3px 6px 1px rgba(75, 142, 232, .502);
  box-shadow: 0px 3px 6px 1px rgba(75, 142, 232, .502);
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  margin-top: 20px;
  cursor: pointer
}

body .footer_nav {
  background-color: #044781;
  clear: both;
  min-width: 1280px
}

body .footer_nav .con {
  width: 1280px;
  margin: 0 auto
}

body .footer_nav .con .footer-menu {
  height: 90px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between
}

body .footer_nav .con .footer-menu h2 {
  width: 176px;
  height: 44px;
  margin-left: 20px;
  margin-top: 26px;
  background-size: contain;
  background-repeat: no-repeat
}

body .footer_nav .con .footer-menu ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 590px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between
}

body .footer_nav .con .footer-menu ul li {
  line-height: 90px
}

body .footer_nav .con .footer-menu ul li a {
  display: inline-block;
  line-height: 50px;
  color: rgba(255, 255, 255, .55);
  font-size: 16px;
  font-weight: 300
}

body .footer_nav .con .footer-contact {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-top: solid 1px rgba(255, 255, 255, .1);
  border-bottom: solid 1px rgba(255, 255, 255, .1);
  padding: 27px 0 14px 0
}

body .footer_nav .con .footer-contact ul {
  width: 633px;
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

body .footer_nav .con .footer-contact ul li:nth-of-type(even) {
  margin-top: -16px
}

body .footer_nav .con .footer-contact ul li img {
  width: 120px;
  height: 120px;
  margin: 0 10px
}

body .footer_nav .con .footer-contact ul li span {
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, .55);
  text-align: center;
  margin-top: 10px
}

body .footer_nav .con .footer-contact ul li p {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, .55)
}

body .footer_nav .con .footer-contact ul li p:last-of-type {
  font-size: 24px;
  font-weight: 500;
  margin-top: 10px;
  margin-right: 10px
}

body .footer_nav .con .footer-contact .right {
  padding-bottom: 10px
}

body .footer_nav .con .footer-contact .right p {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 15px
}

body .footer_nav .con .footer-contact .right p:first-of-type {
  margin-top: 0
}

body .footer_nav .con .footer-contact .right p span {
  position: relative;
  margin-right: 19px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, .55);
  cursor: pointer
}

body .footer_nav .con .footer-contact .right p span:hover a {
  color: #46a9ff
}

body .footer_nav .con .footer-contact .right p span:hover a.img-wrap {
  display: block
}

body .footer_nav .con .footer-contact .right p span:first-of-type {
  width: 80px;
  display: inline-block;
  text-align: right;
  margin-top: 0
}

body .footer_nav .con .footer-contact .right p span:last-of-type {
  margin-right: 0
}

body .footer_nav .con .footer-contact .right p span a {
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, .55)
}

body .footer_nav .con .footer-contact .right p span a.img-wrap {
  position: absolute;
  display: none;
  width: 120px;
  height: 136px;
  bottom: 0;
  left: 50%;
  z-index: 1100;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-bottom: 16px
}

body .footer_nav .con .footer-contact .right p span a.img-wrap img {
  width: 120px;
  height: 120px;
  -webkit-box-shadow: 0 0 2px 0 rgba(185, 201, 214, .7);
  box-shadow: 0 0 2px 0 rgba(185, 201, 214, .7)
}

body .footer_nav .con .footer-copyright {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between
}

body .footer_nav .con .footer-copyright p {
  font-size: 14px;
  font-weight: 300;
  color: rgba(255, 255, 255, .55);
  line-height: 46px
}

body .footer_nav .con .footer-copyright p a {
  color: rgba(255, 255, 255, .55);
  float: left
}

body .footer_nav .con .footer-copyright p a img {
  width: 15px;
  height: 17px;
  margin: 0 4px;
  margin-top: -2px;
  display: inline-block;
  vertical-align: middle
}

.map {
  margin-top: 23px
}

.map #container {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 860px;
  height: 487px;
  margin-bottom: 23px
}

.map #container+img {
  display: none
}

.map #container+img+img {
  display: none
}

.map #container>div {
  z-index: 10 !important
}

.map #info {
  width: 180px;
  background: #fff;
  border-radius: 10px;
  text-align: center
}

.map #info img {
  width: 180px;
  height: 100px;
  pointer-events: none;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
}

.map #info p {
  font-weight: 400;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  text-align: left;
  padding: 10px 0;
  white-space: break-spaces
}

.map #info a {
  display: inline-block;
  width: 126px;
  height: 30px;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #0770d1;
  font-weight: 400;
  font-size: 14px;
  color: #0770d1;
  line-height: 30px;
  cursor: pointer
}

body {
  background-color: #f3f3f7
}

.container {
  width: 1280px;
  margin: 0 auto
}

.container .content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.container .content main {
  width: 900px;
  background: #fff;
  border-radius: 10px;
  padding: 20px 20px 54px;
  margin-bottom: 70px
}

.container .content main .box {
  margin-top: 50px
}

.container .content main .box:first-of-type {
  margin-top: 0
}

.container .content main .box .intro {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 20px
}

.container .content main .box .intro img {
  width: 280px;
  height: 180px;
  background: #fff;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  margin-right: 20px
}

.container .content main .box .intro .desc {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.container .content main .box .intro .desc p {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  line-height: 22px;
  text-align: justify;
  min-height: 125px
}

.container .content main .box .intro .desc .school-brief-btn {
  margin-top: 20px
}

.container .content main .box .intro .desc .school-brief-btn a {
  margin-right: 32px
}

.container .content main .box .intro .desc .school-brief-btn a button {
  width: 128px;
  height: 36px;
  background-color: #0770d1;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  background-position: 16px 11px;
  background-repeat: no-repeat;
  text-indent: 20px
}

.container .content main .box .info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-top: 9px;
  padding-bottom: 20px
}

.container .content main .box .info li {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 49%;
  position: relative;
  margin-top: 11px;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 20px;
  text-align: left
}

.container .content main .box .info li:nth-of-type(2n) {
  margin-left: 2%
}

.container .content main .box .info li span {
  color: #333
}

.container .content main .box .info li p {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.container .content main .box .articles {
  padding-top: 20px;
  border-top: solid 1px #d9d9d9
}

.container .content main .box .articles a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.container .content main .box .articles a>img {
  width: 204px;
  height: 136px;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover;
  margin-right: 22px;
  border-radius: 5px
}

.container .content main .box .articles a .text {
  overflow: hidden
}

.container .content main .box .articles a .text h3 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify
}

.container .content main .box .articles a .text .desc {
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 24px;
  padding: 15px 0;
  height: 94px
}

.container .content main .box .articles a .text .desc p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden
}

.container .content main .box .articles a .text .btm {
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
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.container .content main .box .articles a .text .btm .left {
  color: #333
}

.container .content main .box .articles a .text .btm .left object a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.container .content main .box .articles a .text .btm .left object a img {
  width: 24px;
  height: 24px;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  border-radius: 50%;
  margin-right: 8px
}

.container .content main .box .articles a .text .btm .right {
  color: #999
}

.container .content main .box .con {
  padding-top: 20px
}

.container .content main .box .con p {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  line-height: 1.9em;
  text-align: justify
}

.container .content main .box .con span {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  line-height: 20px;
  text-align: justify
}

.container .content main .box .con div {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  line-height: 20px;
  text-align: justify;
  margin-bottom: 14px
}

.container .content main .box .con b {
  font-weight: bold;
  font-size: 16px;
  color: #333;
  line-height: 20px
}

.container .content main .box .con img {
  max-width: 60%;
  height: initial !important;
  margin: 10px 0;
}

.container .content main .box .con h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #0770d1;
  display: inline-block
}

.container .content main .box .con h3 span {
  font-size: 20px;
  font-weight: bold;
  color: #0770d1
}

.container .content main .box .con h4 {
  font-size: 20px;
  font-weight: initial;
  display: inline-block;
  margin-left: 30px;
  color: #603926
}

.container .content main .box .con table {
  margin-top: 10px;
  border: solid #333 1px;
  vertical-align: middle
}

.container .content main .box .con table th {
  background-color: #f7f7f7;
  font-weight: bold;
  text-align: center
}

.container .content main .box .con table td,
.container .content main .box .con table th {
  border: solid #333 1px;
  padding: 4px
}

.container .content main .box .common_qa {
  background-color: #fff
}

.container .content main .box .common_qa ul li {
  margin-top: 20px
}

.container .content main .box .common_qa ul li h5 {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  line-height: 16px;
  padding-left: 28px;
  position: relative;
  font-weight: bold
}

.container .content main .box .common_qa ul li h5::before {
  position: absolute;
  content: "";
  left: 0;
  top: -1px;
  width: 18px;
  height: 18px;
  background: url(../images/eea2aa48.png) center/contain no-repeat
}

.container .content main .box .common_qa ul li p {
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 22px;
  margin-top: 10px;
  padding: 10px;
  background-color: #f7f8f9;
  border-radius: 6px;
  text-align: justify
}

.container .content main .box .environment {
  position: relative;
  padding-top: 20px
}

.container .content main .box .environment .swiper_envi {
  width: 800px;
  overflow: hidden;
  position: relative;
  margin: 0 34px
}

.container .content main .box .environment .swiper_envi .swiper-wrapper .swiper-slide img {
  width: 251px;
  height: 184px;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover
}

.container .content main .box .environment .swiper_envi .swiper-wrapper .swiper-slide p {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  padding-top: 16px
}

.container .content main .box .environment .swiper-button-next,
.container .content main .box .environment .swiper-button-prev {
  width: 20px;
  height: 60px;
  z-index: 100;
  pointer-events: all
}

.container .content main .box .environment .swiper-button-prev {
  background: url(https://schoollist.ieduchina.com/statics/school/images/c0bb8ac2.png) center/contain no-repeat;
  left: -1px
}

.container .content main .box .environment .swiper-button-next {
  background: url(https://schoollist.ieduchina.com/statics/school/images/358c7183.png) center/contain no-repeat;
  right: 0
}

.container .content main .box .concat {
  padding: 23px 0 0 0;
  position: relative;
  display: inline-block
}

.container .content main .box .concat.show p a {
  -webkit-filter: initial;
  filter: initial;
  -webkit-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
  pointer-events: auto;
}

.container .content main .box .concat p {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-top: 20px;
  display: inline-block;
}

.container .content main .box .concat p:first-of-type {
  margin-top: 0
}

.container .content main .box .concat p a {
  -webkit-filter: blur(2.5px);
  filter: blur(2.5px);
  vertical-align: -1px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  pointer-events: none;
}

.container .content main .box .concat p.email a {
  color: #0770d1
}

.container .content main .box .concat_ {
  font-size: 16px;
  font-weight: 500;
  color: #0770d1;
  margin-top: 20px;
  cursor: pointer
}

.container .content main .box .getconcat {
  font-size: 16px;
  font-weight: 500;
  color: #0770d1;
  margin-top: 20px;
  cursor: pointer
}

.container .content main .mask2 {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, .5);
  display: none
}

.container .content main .mask2.show {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.container .content main .mask2 form {
  position: relative;
  width: 546px;
  background: #fff;
  border-radius: 12px;
  padding: 30px 68px 36px
}

.container .content main .mask2 form .close {
  width: 15px;
  height: 15px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 13px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  z-index: 10;
  cursor: pointer
}

.container .content main .mask2 form p {
  font-size: 24px;
  font-weight: 500;
  color: #0770d1;
  text-align: center;
  padding-bottom: 15px
}

.container .content main .mask2 form .input {
  margin-top: 15px
}

.container .content main .mask2 form .input.select {
  position: relative
}

.container .content main .mask2 form .input.select::after {
  position: absolute;
  content: "";
  right: 20px;
  top: 18px;
  z-index: 10;
  pointer-events: none;
  width: 0;
  height: 0;
  border-left: 10px rgba(0, 0, 0, 0) solid;
  border-right: 10px rgba(0, 0, 0, 0) solid;
  border-top: 10px #999 solid
}

.container .content main .mask2 form .input[required] span {
  position: relative
}

.container .content main .mask2 form .input[required] span::before {
  position: absolute;
  content: "*";
  color: red;
  font-size: 19px;
  left: -8px;
  top: -12px;
  z-index: 10
}

.container .content main .mask2 form .input span {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  margin-right: 15px;
  line-height: 42px
}

.container .content main .mask2 form .input input,
.container .content main .mask2 form .input select {
  width: 325px;
  height: 42px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e3e3e3;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  outline: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 42px
}

.container .content main .mask2 form .input input::-webkit-input-placeholder,
.container .content main .mask2 form .input select::-webkit-input-placeholder {
  color: #999
}

.container .content main .mask2 form .input input::-moz-placeholder,
.container .content main .mask2 form .input select::-moz-placeholder {
  color: #999
}

.container .content main .mask2 form .input input:-ms-input-placeholder,
.container .content main .mask2 form .input select:-ms-input-placeholder {
  color: #999
}

.container .content main .mask2 form .input input::-ms-input-placeholder,
.container .content main .mask2 form .input select::-ms-input-placeholder {
  color: #999
}

.container .content main .mask2 form .input input::placeholder,
.container .content main .mask2 form .input select::placeholder {
  color: #999
}

.container .content main .mask2 form .input input {
  -webkit-box-shadow: inset 10px 100px 10px 10px #fff;
  box-shadow: inset 10px 100px 10px 10px #fff
}

.container .content main .mask2 form .input select {
  padding-left: 26px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #999
}

.container .content main .mask2 form .input select option {
  color: #333
}

.container .content main .mask2 form .emailcode_wrap {
  position: relative;
  margin-top: -40px;
  margin-left: 83px;
}

.container .content main .mask2 form .emailcode_wrap input {
  margin-right: 150px;
  width: 325px;
  height: 42px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e3e3e3;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  outline: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 42px;
}

.container .content main .mask2 form .emailcode_wrap button {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  width: 130px;
  height: 42px;
  background: #0770d1;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  border: none;
  outline: none;
  margin-top: 0;
}

.container .content main .mask2 form .emailcode_wrap button[disabled] {
  opacity: .5;
  cursor: no-drop
}




.container .content main .mask2 form button {
  display: block;
  width: 147px;
  height: 38px;
  background: #0770d1;
  border-radius: 4px;
  margin: 30px auto 0;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 19px;
  font-weight: 400;
  color: #fff
}

.container .content aside {
  margin-top: 0;
  padding-bottom: 30px
}

.layui-layer {
  pointer-events: none
}




/* 右侧表单 */

.form_a57c {
  width: 359px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px
}

.form_a57c .top {
  text-align: center;
  width: 359px;
  height: 94px;
  background: #0770d1;
  border-radius: 10px 10px 0px 0px
}

.form_a57c .top h2 {
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  padding-top: 18px
}

.form_a57c .top p {
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  padding-top: 15px
}

.form_a57c .bottom {
  padding: 0 24px 37px;
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
  flex-wrap: wrap
}

.form_a57c .bottom .item {
  width: 148px;
  height: 34px;
  background: #fff;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  border: 1px solid #d2d2d2;
  margin-top: 20px
}

.form_a57c .bottom .item.select {
  position: relative
}

.form_a57c .bottom .item.select::after {
  content: "";
  position: absolute;
  right: 10px;
  top: 13px;
  z-index: 10;
  width: 0;
  height: 0;
  border: solid 6px #707070;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  pointer-events: none
}

.form_a57c .bottom .item input,
.form_a57c .bottom .item select {
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  background-color: rgba(0, 0, 0, 0)
}

.form_a57c .bottom .item input {
  padding: 0 10px;
  font-size: 14px;
  font-weight: 400;
  color: #333
}

.form_a57c .bottom .item input::-webkit-input-placeholder {
  color: #999
}

.form_a57c .bottom .item input::-moz-placeholder {
  color: #999
}

.form_a57c .bottom .item input:-ms-input-placeholder {
  color: #999
}

.form_a57c .bottom .item input::-ms-input-placeholder {
  color: #999
}

.form_a57c .bottom .item input::placeholder {
  color: #999
}

.form_a57c .bottom .item select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 14px;
  font-weight: 400;
  color: #999;
  padding: 0 10px
}

.form_a57c .bottom .item select option {
  color: #333
}

.form_a57c .bottom button {
  width: 100%;
  height: 40px;
  background: #0770d1;
  border-radius: 0px;
  outline: none;
  border: none;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  cursor: pointer
}

.form_a57c .bottom .tel {
  margin-top: 34px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: #333
}

.form_a57c .bottom .tel img {
  width: 22px;
  margin-right: 10px;
  vertical-align: -3px
}
</style>