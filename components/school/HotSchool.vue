<script setup>
defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
const grade = ['幼儿园', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '七年级', '八年级', '九年级', '十年级', '十一年级', '十二年级', '大一', '大二', '大三', '大四', '已毕业']
</script>

<template>
  <div :class="$style.hotschool">
    <h3><i></i>热门学校</h3>
    <ul>
      <li v-for="item in data" :key="item.id">
        <NuxtLink :to="item.path">
          <img :src="item.logo" :alt="item.name">
          <h2 :title="item.name">
            {{ item.name }}
          </h2>
        </NuxtLink>
        <div :class="$style.label">
          <template v-for="(it, index) in item.grade" :key="index">
            <a v-if="it === '幼儿园'" :class="$style.y">幼儿园</a>
            <a v-else-if="it === '小学'" :class="$style.x">小学</a>
            <a v-else-if="it === '初中'" :class="$style.c">初中</a>
            <a v-else-if="it === '高中'" :class="$style.g">高中</a>
          </template>
        </div>
        <p>课程设置：{{ item.kecheng }}</p>
        <p>学费区间：{{ item.xuefei }}</p>
        <div :class="$style.btn">
          <button type="button">
            申请入读
          </button>
        </div>
      </li>
    </ul>
    <div id="hot_school_form" :class="$style.mask">
      <div :class="$style.main">
        <div :class="$style.close">
          ×
        </div>
        <h3>
          填写申请信息
        </h3>
        <form action="">
          <input type="hidden" value="国际教育网PC版" mark="mark">
          <div>
            <div :class="$style.list">
              <select id="provinceid" name="province" nullmsg="请选择在读省份"></select>
            </div>
          </div>
          <div>
            <div :class="$style.list">
              <select id="cityid" name="city" nullmsg="请选择在城市">
                <option value="">
                  您目前在读的城市
                </option>
              </select>
            </div>
          </div>
          <div>
            <div :class="$style.list">
              <input id="truename" type="text" name="name" placeholder="学生姓名" nullmsg="请填写学生姓名">
            </div>
          </div>
          <div>
            <div :class="$style.list">
              <select name="grade" nullmsg="请选择在读年级" style="color: rgb(102, 102, 102);">
                <option value="" selected="selected">
                  在读年级
                </option>
                <option v-for="(item, index) in grade" :key="index" :value="item">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div>
            <div :class="$style.list">
              <input id="mobile2" type="text" placeholder="手机号码" datatype="m" name="mobile" nullmsg="请填写手机号码" errormsg="手机号格式不正确" maxlength="11">
            </div>
          </div>
          <p :class="$style.tips"></p>
          <input type="hidden" name="want_school" value="">
          <div :class="$style.btn" successmsg="提交成功" errormsg="提交失败，请重新提交">
            确认提交
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="less" module scoped>
.hotschool {
  ul {
    li {
      width: 360px;
      box-sizing: border-box;
      border-radius: 12px;
      padding: 20px;
      background-color: white;
      margin-top: 16px;

      &:first-of-type {
        margin-top: 0;
      }

      img {
        width: 320px;
        height: 96px;
        margin: 0 auto;
        border: 1px solid rgba(112, 112, 112, 0.1);
        border-radius: 8px;
        object-fit: contain;
      }

      h2 {
        height: 30px;
        font-size: 22px;
        font-weight: 500;
        color: #333333;
        line-height: 30px;
        margin: 12px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: justify;
      }

      .label {
        overflow: hidden;

        a {
          padding: 3px 6px;
          border: 1px solid transparent;
          border-radius: 20px;
          float: left;
          margin-right: 10px;
          margin-bottom: 4px;
          font-size: 14px;

          &.y {
            color: #fecc76;
            border-color: #fecc76;
          }

          &.x {
            color: #fcb9b9;
            border-color: #fcb9b9;
          }

          &.c {
            color: #9cd8ae;
            border-color: #9cd8ae;
          }

          &.g {
            color: #64aafb;
            border-color: #64aafb;
          }
        }
      }

      p {
        margin-top: 5px;
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        color: #272727;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .btn {
        text-align: center;
        padding-top: 20px;

        button {
          cursor: pointer;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: 128px;
          height: 38px;
          border: 1px solid #076FCB;
          border-radius: 20px;
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #076FCB;
          background-color: transparent;
        }
      }
    }
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    display: none;
    font-size: 16px;

    .main {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background-color: #fff;
      width: 380px;
      overflow: auto;

      .close {
        position: absolute;
        right: 5px;
        top: 0;
        font-size: 30px;
        line-height: 1;
        cursor: pointer;
        color: white;
      }

      form {
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        &>div {
          margin-bottom: 10px;
          border-radius: 5px;
          border: 1px solid #eee;
          padding: 0 10px;
          margin-top: 10px;
          position: relative;
          background-color: #ffffff;

          .list {
            width: 100%;

            select {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              width: 100%;
              height: 38px;
              padding-left: 6px;
              border: none;
              outline: none;
            }

            input[type="text"] {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              width: 100%;
              height: 38px;
              padding-left: 10px;
              border: none;
              font-size: 14px;
              outline: none;

              &::placeholder {
                color: #666666;
              }
            }
          }
        }

        .btn {
          display: block;
          width: 160px;
          height: 52px;
          background: #1558a0;
          line-height: 52px;
          text-align: center;
          color: #fff;
          margin: 0 auto 20px;
          cursor: pointer;
        }

        .tips {
          text-align: center;
          line-height: 24px;
          height: 32px;
          color: red;
          font-size: 12px;
        }
      }

      h3 {
        font-size: 24px;
        color: #2e2e2e;
        background-color: #2462a5;
        text-align: center;
        padding: 20px 0;
        color: white;
      }
    }
  }
}
</style>
