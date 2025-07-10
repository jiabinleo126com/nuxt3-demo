<script setup>
defineProps({
  data: {
    type: Array,
    default: []
  }
})
</script>

<template>
  <div class="star-school-choice">
    <h3><i></i>说择校</h3>
    <ul>
      <li v-for="item in data" :key="item.id">
        <NuxtLink :to="`//www.ieduchina.com/video/${item.id}.html`">
          <div>
            <img :src="item.image" :alt="item.title">
            <p>香港国际学校竞教小学生开公司？香港威雅杨副校长：学生18岁前玩转跨国商业项目！</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.star-school-choice {
  ul {
    background-color: white;
    padding: 20px 0;
    border-radius: 12px;

    li {
      margin-bottom: 18px;

      &:last-of-type {
        margin-bottom: 0;
      }

      div {
        cursor: pointer;
        position: relative;
        width: 320px;
        height: 150px;
        border-radius: 6px;
        overflow: hidden;
        margin: 0 auto;
        background-color: #000000;

        img {
          width: 320px;
          height: 150px;
          object-fit: cover;
        }

        &::before {
          position: absolute;
          padding: 4px 8px;
          left: 11px;
          top: 8px;
          z-index: 30;
          border-radius: 4px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: bold;
        }

        &::after {
          content: "";
          position: absolute;
          z-index: 20;
          left: 0;
          bottom: 0;
          right: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.3);
          background-image: url(https://www.ieduchina.com/statics/pcc/img/play.png);
          background-size: 40px 40px;
          background-position: center center;
          background-repeat: no-repeat;
          border-radius: 0px 0px 6px 6px;
        }
      }

      &.hg {
        div::before {
          background-color: rgba(39, 39, 39, 0.8);
          content: "回顾";
          color: white;
          position: relative;
          z-index: 30;
          padding: 2px 8px;
          margin: 8px;
          left: 0;
          border-radius: 0;
        }
      }

      &.yg {
        div::before {
          background-color: #FC6607;
          content: "预告";
          color: #ffffff;
        }
      }

      &.jx {
        div::before {
          background-color: #FC6607;
          content: "æ­£åœ¨ç›´æ’­";
          color: #ffffff;
        }
      }

      p {
        position: absolute;
        z-index: 50;
        bottom: 0;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: white;
        text-align: left;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        background: rgba(39, 39, 39, 0.6);
        border-radius: 0px 0px 6px 6px;
        padding: 6px 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 27px;
      }
    }
  }
}
</style>