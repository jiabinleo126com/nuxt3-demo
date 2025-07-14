<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineProps<{ data: number }>()
const route = useRoute()
const pageThis = ref(0)
pageThis.value = route.query.page ? Number.parseInt(route.query.page as string) : 1

watch(() => route.query.page, (newVal) => {
  pageThis.value = newVal ? Number.parseInt(newVal as string) : 1
})
</script>

<template>
  <div id="pages" class="pagination">
    <NuxtLink :to="{ path: '/huodong', query: { page: pageThis - 1 < 1 ? 1 : pageThis - 1 } }" class="active">
      上一页
    </NuxtLink>
    <template v-if="pageThis - 5 > 0">
      <NuxtLink :to="{ path: '/huodong', query: { page: 1 } }">
        1
      </NuxtLink>
    </template>
    <template v-if="pageThis - 5 > 0">
      ...
    </template>
    <template v-for="(item, index) in data + 1" :key="item">
      <template v-if="index">
        <NuxtLink v-if="index < pageThis && index > pageThis - 5 && pageThis > 0" :to="{ path: '/huodong', query: { page: index } }">
          {{ index }}
        </NuxtLink>
        <span v-if="index === pageThis && index > 0 && index < data + 1">
          {{ index }}
        </span>
        <NuxtLink v-else-if="index > pageThis && index < pageThis + 5 && index > 1 && index < data + 1" :to="{ path: '/huodong', query: { page: index } }">
          {{ index }}
        </NuxtLink>
      </template>
    </template>
    <template v-if="pageThis + 5 < data">
      ...
    </template>
    <NuxtLink v-if="pageThis + 5 < data + 1" :to="{ path: '/huodong', query: { page: data } }">
      {{ data }}
    </NuxtLink>
    <NuxtLink :to="{ path: '/huodong', query: { page: pageThis + 1 > data ? data : pageThis + 1 } }" class="active">
      下一页
    </NuxtLink>
  </div>
</template>

<style lang="less">
#pages {
  text-align: center;
  margin: 0;
  height: 116px;
  padding-top: 38px;
  box-sizing: border-box;
}

#pages span {
  height: 35px;
  background: #338EFF;
  border-radius: 2px;
  line-height: 35px;
  font-size: 14px;
  letter-spacing: -1px;
  border: 1px solid #338EFF;
  display: inline-block;
  padding: 0 10px;
  color: #fff;
}

#pages a {
  height: 35px;
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 2px;
  padding: 0 10px;
  color: rgba(153, 153, 153, 1);
  line-height: 35px;
  font-size: 13px;
  letter-spacing: -1px;
  display: inline-block;
}

#pages a:hover {
  background: #f1f1f1;
  color: #000;
  text-decoration: none;
}

#pages a:first-child {
  width: auto;
  padding: 0 10px;
}
</style>
