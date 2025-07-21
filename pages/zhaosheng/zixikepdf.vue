<script setup>
import { defineAsyncComponent } from 'vue'

const CheckMark = defineAsyncComponent(() => import('@/components/zhaosheng/CheckMark.vue'))
const YinZhang = defineAsyncComponent(() => import('../../components/zhaosheng/YinZhang.vue'))
const QianZi = defineAsyncComponent(() => import('../../components/zhaosheng/QianZi.vue'))

useHead({
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
</script>

<template>
  <header>
    <h1>自习课服务申请与规则确认书</h1>
  </header>
  <section>
    <p>
      尊敬的家长：
    </p>
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
    <p class="indent">
      <component :is="CheckMark" />监督学生完成<b>本校区当前正课科目老师布置的作业</b>。
    </p>
    <p class="indent">
      <component :is="CheckMark" />提供基础的<b>本校区当前正课科目老师布置的作业</b>>完成情况监督与纪律管理。
    </p>
    <p class="indent">
      <component :is="CheckMark" />进行简单的、与<b>本校区当前正课科目老师布置的作业</b>相关的知识点提示和辅助（<b>不包含详细的知识点讲解或题目答疑</b>）。
    </p>
    <p class="indent">
      <component :is="CheckMark" />定期向家长、正课老师及顾问反馈学生的自习表现。
    </p>
    <p>2.<b>明确边界 (学管老师无法提供以下服务)</b>：</p>
    <p class="indent">
      <component :is="CheckMark" /><b>不辅助</b>学生在<b>其他机构、学校或家长额外布置</b>的作业。
    </p>
    <p class="indent">
      <component :is="CheckMark" /><b>不辅导</b>学生正课（未涉及的其他科目）内容（例如：学生正课为数学，学管不辅导英语作业）。
    </p>
    <h2>三、 自习课安排规则</h2>
    <p>1.<b>配比原则</b>：自习课的安排遵循“<b>1:1配比</b>”原则。即学员<b>每完成1节本校区正课</b>，可对应申请安排<b>1节自习课</b>。</p>
    <p>2.<b>有效期</b>：赠送的自习课必须在<b>对应的正课完成后的7天（一周）内</b>使用，逾期自动失效。</p>
    <p>3.<b>申请流程</b>：学生需自习课，家长需通过顾问提交申请。我们将根据配比原则和教室资源情况尽力安排。</p>
    <h2>四、 自习室纪律要求 (共同维护良好学习环境)</h2>
    <p>为确保所有学生都能在自习室高效学习，学生参与自习课需严格遵守以下纪律：</p>
    <p class="indent0">
      •禁止携带与学习无关的电子设备（如游戏机、平板电脑等，手机需交由学管暂存，特殊情况需使用时需经学管同意）进入自习室，可在自习室外使用。
    </p>
    <p class="indent0">
      •禁止交头接耳、讨论题目或大声喧哗，禁止随意走动、跑闹。
    </p>
    <p class="indent0">
      •禁止在自习室乱扔垃圾，需保持座位及周边环境整洁；
    </p>
    <p class="indent0">
      •禁止抄袭他人作业或干扰他人学习，需独立完成任务。
    </p>
    <h2>五、 纪律违规处理</h2>
    <p>学管老师将对违反纪律的学生进行提醒和记录。</p>
    <p>累计收到<b>3次有效警告</b>后，该学生<b>将被暂停享受自习课服务</b>的权益。恢复服务需家长与顾问、学管老师进行沟通并确认学生理解并承诺遵守规则。</p>
    <h2>重要提示</h2>
    <p>本文件所述规则为国际教育网当前自习课服务的执行标准，公司保留根据实际情况进行调整与更新的权利。如有更新，将以最新说明为准。</p>
    <div class="line"></div>
    <p>
      本人已仔细阅读并充分理解《国际教育网自习课服务申请与规则确认书》的全部内容，尤其是关于“服务范围与边界”、“1:1配比与有效期”、“自习室纪律要求及违规后果”的条款。本人自愿为孩子申请此项自习课服务，并承诺督促孩子遵守自习室各项纪律规定。本人理解自习课是国际教育网额外提供的免费增值服务，非主合同项下的强制义务。
    </p>
  </section>
  <footer>
    <div class="left">
      <p>
        家长签字：
        <component :is="QianZi" left="0" bottom="-26px" height="60" />
      </p>
      <p>日期：<u>2025</u>年<u>12</u>月<u>20</u>日</p>
    </div>
    <div class="right">
      <p>乙方：<span>:深圳市爱读有限公司</span></p>
      <p>乙方授权签约人签字：<span>:深圳市爱读有限公司</span></p>
      <p>日期：<u>2025</u>年<u>12</u>月<u>20</u>日</p>
      <component :is="YinZhang" right="-5cm" bottom="-0.6cm" width="4cm" height="4cm" />
    </div>
  </footer>
</template>

<style lang="less">
body {
  width: 911px;
  margin: 0 auto;
  padding: 30px 24px;

  header {
    margin: 40px 0 30px;

    h1 {
      text-align: center;
      font-size: 26px;
    }
  }

  section {
    p {
      font-size: 14px;
      color: #000;
      line-height: 20px;
      margin-top: 10px;

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
      margin: 40px 0;
    }

    h2 {
      font-size: 16px;
      font-weight: bold;
      padding: 20px 0 10px;
    }
  }

  footer {
    margin-top: 50px;

    &>div {
      display: inline-block;
      vertical-align: middle;

      &:first-of-type {
        width: 60%;
      }

      &:last-of-type {
        width: 36%;
      }
    }

    p {
      font-size: 16px;
      color: #000;
      margin-top: 16px;
    }
  }
}
</style>
