<template>
  <header>
    <div :class="$style.con">
      <h1>2025全球多元化升学论坛大湾区国际教育名校择校展</h1>
      <div :class="$style.links">
        <a href="https://www.ieduchina.com/" target="_blank">国际教育网</a>
        <a href="https://schoollist.ieduchina.com/" target="_blank">学校大全</a>
        <a href="https://www.ieduchina.com/huodong/" target="_blank">学校活动</a>
      </div>
    </div>
  </header>
</template>
<style lang="less" module>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  min-width: 1200px
}

header .con {
  width: 1200px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center
}

header .con h1 {
  font-weight: bold;
  font-size: 20px;
  color: #333333;
}

header .con .links a {
  font-size: 20px;
  font-weight: 400;
  color: #333;
  margin-right: 30px
}

header .con .links a:hover {
  color: #101e5d
}
</style>