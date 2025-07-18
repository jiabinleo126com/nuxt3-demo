<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "名称"
  },
  checked: {
    type: Boolean,
    default: () => !1
  }
})
</script>
<template>
  <span :checked :class="$style.checkbox">
    {{ title }}
  </span>
</template>
<style lang="less" module>
.checkbox {
  position: relative;
  height: 0.4cm;
  padding-left: 0.5cm;
  font-size: 0.42cm;
  margin-right: 0.4cm;
  white-space: nowrap;

  &[checked] {
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 0.08cm;
      height: 0.2cm;
      border-style: solid;
      border-width: 0 2px 2px 0;
      transform: rotateZ(45deg);
      transform-origin: 62% 117%;
    }
  }

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    width: 0.32cm;
    height: 0.32cm;
    border: solid 1px #000;
  }
}
</style>