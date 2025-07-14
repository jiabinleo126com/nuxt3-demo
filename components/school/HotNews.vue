<script setup>
defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="hot-news">
    <h3><i></i>热门资讯</h3>
    <ul>
      <li v-for="item in data" :key="item.author_id">
        <div class="wrap">
          <NuxtLink :to="item.path">
            <div class="card">
              <img :src="item.image" :alt="item.title">
              <div class="title">
                {{ item.title }}
              </div>
            </div>
          </NuxtLink>
          <NuxtLink :to="`//www.ieduchina.com/home/${item.author_id}.html`" rel="nofollow" class="author">
            {{ item.author }}
          </NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
.hot-news {
  ul {
    background-color: white;
    padding-top: 20px;
    border-radius: 12px;

    li {
      display: flex;
      margin: 0 40px 0 15px;
      padding: 14px 0;
      justify-content: space-between;
      border-bottom: solid #eeeeee 1px;

      &:first-of-type {
        padding-top: 0;
      }

      &:last-of-type {
        border-bottom: none;
      }

      .wrap {
        position: relative;

        .card {
          display: flex;
          justify-content: space-between;

          img {
            width: 102px;
            height: 64px;
            border-radius: 4px;
            margin-right: 14px;
            object-fit: cover;
          }

          .title {
            flex: 1;
            font-size: 16px;
            font-weight: 400;
            color: #1A1919;
            line-height: 18px;
            height: 36px;
            text-align: justify;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-bottom: 10px;
          }
        }

        .author {
          position: absolute;
          left: 116px;
          bottom: 0;
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          line-clamp: 1;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
