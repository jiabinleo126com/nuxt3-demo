<script setup>
defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>
<template>
  <div :class="$style.images">
    <img alt="" :src="data[0].image" :preview="data[0].imageMax">
    <div :class="$style.bottom">
      <img :src="data[1].image" :preview="data[1].imageMax" alt="香港教育文化之旅">
      <img :src="data[2].image" :preview="data[2].imageMax" alt="香港教育文化之旅">
      <img :src="data[3].image" :preview="data[3].imageMax" alt="香港教育文化之旅">
    </div>
  </div>
</template>
<style lang="less" module>
@rem: 750/16rem;

.images {
  font-size: 0;
  margin-top: 0.64rem;
  margin: 0.64rem (30/@rem) 0;
}

.images>img {
  width: 100%;
  height: 8.02133333rem;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.images .bottom {
  margin-top: 0.29866667rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.images .bottom img {
  width: 4.69333333rem;
  height: 3.008rem;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}
</style>