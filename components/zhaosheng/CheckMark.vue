<template>
  <span :class="$style.g"></span>
</template>
<style lang="less" module>
.g {
  display: inline-block;
  width: 8px;
  height: 16px;
  border-style: solid;
  border-color: initial;
  border-width: 0 2px 2px 0;
  transform: rotate(30deg);
  margin: 0 4px;
  pointer-events: none;
}
</style>