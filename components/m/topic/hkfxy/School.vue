<script setup>
defineProps({
  data: {
    type: Array,
    default: () => []
  },
})
</script>
<template>
  <section class="green">
    <div :class="$style.school">
      <h3 class="title" en="SCHOOLS">参与院校</h3>
      <ul>
        <ul>
          <li v-for="(item, index) in data" :key="index">
            <a :href="`${item.path}?tgform=香港教育文化之旅`" target="_blank">
              <img :src="item.logo" :alt="item.name">
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </ul>
    </div>
  </section>
</template>
<style lang="less" module>
.school {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    padding: 1.06666667rem 0 0.85333333rem;

    li {
      width: 7.06133333rem;

      &:first-of-type img {
        padding: 0.21333333rem;
      }

      img {
        width: 7.06133333rem;
        height: 2.92266667rem;
        object-fit: contain;
        object-position: center;
        background-color: white;
      }

      p {
        font-size: 0.512rem;
        font-weight: 400;
        color: #FFFFFF;
        padding: 0.42666667rem 0 0.64rem;
        letter-spacing: -0.02133333rem;
      }
    }
  }
}
</style>
