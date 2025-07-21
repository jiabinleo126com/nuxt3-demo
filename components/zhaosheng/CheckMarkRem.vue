<template>
  <span :class="$style.g"></span>
</template>
<style lang="less" module>
.g {
  display: inline-block;
  width: 10px;
  height: 25px;
  border-style: solid;
  border-color: initial;
  border-width: 0 2px 2px 0;
  transform: rotate(30deg);
  margin: 0 10px;
  pointer-events: none;
}
</style>