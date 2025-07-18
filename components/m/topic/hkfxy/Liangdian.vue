<script setup>
defineProps({
  data: {
    type: Array,
    default: () => Array
  }
})
</script>
<template>
  <section>
    <div :class="$style.ld">
      <h3 class="title" en="characteristic">亮点特色</h3>
      <ul>
        <li v-for="(item, index) in data">
          <span>{{ index + 1 }}</span>
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="less" module>
.ld {
  padding-bottom: 1.28rem;
  width: 100%;

  ul {
    margin-top: 1.06666667rem;

    li {
      height: 1.19466667rem;
      margin-top: 0.53333333rem;
      line-height: 1.19466667rem;
      background-color: #F6F6F6;
      font-size: 0.512rem;
      font-weight: 400;
      color: #333333;
      clip-path: polygon(0.72533333rem -1.25866667rem, 200% 100%, 200% 100%, 0 1.06666667rem);
      letter-spacing: -0.01066667rem;

      span {
        background-color: var(--primary);
        margin-right: 0.08533333rem;
        font-size: 0.512rem;
        font-weight: 500;
        width: 2.00533333rem;
        height: 1.19466667rem;
        display: inline-block;
        color: #fff;
        text-align: center;
        -webkit-clip-path: polygon(2.00533333rem -5.99466667rem, 5.184rem -10.45333333rem, 1.64266667rem 1.216rem, 0.04266667rem 1.088rem);
        clip-path: polygon(2.00533333rem -5.99466667rem, 5.184rem -10.45333333rem, 1.64266667rem 1.216rem, 0.04266667rem 1.088rem);
      }

      &:nth-of-type(2n) {
        span {
          background-color: var(--next);
        }
      }
    }
  }
}
</style>