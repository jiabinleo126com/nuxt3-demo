<script setup>
import image from '~/assets/topic/2025/sz/52fc9723.png'
</script>
<template>
  <div class="mask">
    <div class="inner">
      <div class="form">
        <h2 class="title"><span>提前锁定精彩活动</span></h2>
        <form action="/index.php?m=college&c=index&a=collegereg&dopost=reg" method="post">
          <div><input name="name" type="text" class="name" placeholder="姓名"></div>
          <div><input name="mobile" type="text" class="mobile" placeholder="手机" maxlength="11"></div>
          <div><select class="grade" name="grade">
              <option value="" disabled selected style="display:none;color:#999">
                选择即将入读年级
              </option>
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
          <div><input name="want_school" type="text" class="want_school" placeholder="意向学校">
            <input name="mark" type="hidden" value="2025全球多元化升学论坛大湾区国际教育名校择校展PC版">
          </div>
          <p class="error-tips"></p><button class="submit" type="submit">立即报名</button>
        </form>
      </div>
      <div class="bottom"><img :src="image" class="close"></div>
    </div>
  </div>
</template>
<style lang="less">
body .mask {
  display: none;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, .4);
  z-index: 110;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0
}

body .mask.show {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

body .mask .inner .form {
  width: 436px;
  height: 532px;
  background: #fff;
  border-radius: 10px 10px 10px 10px;
  opacity: 1
}

body .mask .inner .form h2.title {
  padding: 37px 0 11px;
  text-align: center
}

body .mask .inner .form h2.title span {
  font-size: 28px
}

body .mask .inner .form form div {
  overflow: hidden;
  width: 368px;
  height: 50px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ebebeb;
  margin: 26px auto 0
}

body .mask .inner .form form div input {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
  width: 368px;
  height: 50px;
  font-size: 18px;
  font-weight: 400;
  color: #333;
  -webkit-box-shadow: inset #fff 100px 100px 100px;
  box-shadow: inset #fff 100px 100px 100px
}

body .mask .inner .form form div input::-webkit-input-placeholder {
  font-size: 18px;
  font-weight: 400;
  color: #999
}

body .mask .inner .form form div input::-moz-placeholder {
  font-size: 18px;
  font-weight: 400;
  color: #999
}

body .mask .inner .form form div input:-ms-input-placeholder {
  font-size: 18px;
  font-weight: 400;
  color: #999
}

body .mask .inner .form form div input::-ms-input-placeholder {
  font-size: 18px;
  font-weight: 400;
  color: #999
}

body .mask .inner .form form div input::placeholder {
  font-size: 18px;
  font-weight: 400;
  color: #999
}

body .mask .inner .form form div select {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
  width: 368px;
  height: 50px;
  font-size: 18px;
  font-weight: 400;
  color: #999;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: none
}

body .mask .inner .form form div select:-internal-autofill-previewed {
  -webkit-text-fill-color: #000;
  -webkit-transition: background-color 5000s ease-out .5s;
  transition: background-color 5000s ease-out .5s
}

body .mask .inner .form form div select:-internal-autofill-selected {
  -webkit-text-fill-color: #000;
  -webkit-transition: background-color 5000s ease-out .5s;
  transition: background-color 5000s ease-out .5s
}

body .mask .inner .form form div select option {
  color: #000
}

body .mask .inner .form form p.error-tips {
  font-size: 16px;
  color: red;
  height: 0;
  line-height: 60px;
  text-align: center
}

body .mask .inner .form form button[type=submit] {
  display: block;
  width: 368px;
  height: 56px;
  background: #101e5d;
  border-radius: 4px;
  margin: 60px auto 0;
  font-size: 26px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none
}

body .mask .inner .bottom {
  text-align: center
}

body .mask .inner .bottom img {
  width: 48px;
  height: 48px;
  margin-top: 40px;
  cursor: pointer
}
</style>