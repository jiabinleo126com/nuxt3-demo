<script setup>
defineProps({
  en: {
    type: String,
    default: () => ''
  },
  cn: {
    type: String,
    default: () => ''
  },
  tip: {
    type: String,
    default: () => ''
  },
})
</script>
<template>
  <div :class="$style.title">
    <p>{{ en }}</p>
    <h2>{{ cn }}</h2>
    <p v-if="tip">{{ tip }}</p>
    <i></i>
  </div>
</template>
<style lang="less" module scoped>
@font-face {
  font-family: "B7VNYcbWYc7r";
  src: url('https://www.ieduchina.com/statics/font/B7VNYcbWYc7r.woff') format('truetype');
}

.title {
  width: 100%;
  text-align: center;
  position: relative;
  padding-bottom: 20rem;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: calc(50% - 25rem);
    height: 1rem;
    border-bottom: solid 1rem #D6D6D6;
  }

  &::after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    width: calc(50% - 25rem);
    height: 1rem;
    border-bottom: solid 1rem #D6D6D6;
  }

  p {
    &:first-of-type {
      font-size: 36rem;
      font-weight: bold;
      text-transform: uppercase;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0) 100%);
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: "B7VNYcbWYc7r";
    }

    &:nth-of-type(2) {
      text-align: center;
      color: #333333;
      font-size: 10rem;
      font-weight: 400;
      margin-top: 8rem;
    }
  }

  h2 {
    font-size: 24rem;
    font-weight: bold;
    letter-spacing: 0em;
    color: #083A83;
    margin-top: -14rem;
  }

  i {
    position: absolute;
    bottom: 0;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent #083A83 transparent transparent;
    border-width: 9rem 18rem 9.5rem 9rem;
    transform: translate(-50%, 75%) rotateZ(-90deg);

    &::after {
      content: "";
      position: absolute;
      left: 5.5rem;
      top: -9rem;
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent white transparent transparent;
      border-width: 9rem 4rem 9.5rem 9rem;
    }
  }
}
</style>