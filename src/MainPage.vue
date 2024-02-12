<template>

  <div class="header">
    Main Page
  </div>
  <div class="search">
    <input class="search-input" v-model="searchInput"   autocomplete="off">
    <label class="search-label" :class="{left:searchInput}">Search...</label>
  </div>
  <template v-if="!hidden">
    <div class="pages">

      <Page class="page" v-for="good in filteredGoodsList" :key="good.id" :good="good" @click="goCheckOut"/>

    </div>
  </template>
</template>


<script setup>
import { computed, ref, onMounted } from 'vue';
import Page from '@/components/Page.vue';
import fetchData from  '@/script'
import router from "./index";
const text = ref('text')
const color = ref('yellow')
const counter = ref(0)
const flag = ref(true)
const hidden = ref(false)
const property = ref('color')
const goodsList = ref(null)
let searchInput = ref('')

const textUpp = computed(() => upp(text.value))
onMounted(async () => {
  goodsList.value = await fetchData()
});
const filteredGoodsList = computed(() => {
  const searchValue = searchInput.value.toLowerCase().trim();
  if (!searchValue) {
    // Если поле поиска пустое, верните весь список товаров
    return goodsList.value;
  } else {
    // Верните отфильтрованный список товаров по названию и цене
    return goodsList.value.filter((good) => {
      const title = good.title.toLowerCase();
      const price = good.price.toString();
      return title.includes(searchValue) || price.includes(searchValue);
    });
  }
});

function upp(val) {
  return val.toString().toUpperCase();
}
function log(val) {
  return val
}
function goCheckOut(){
  router.push({ name: 'checkout'});
}
function exp(val) {
  return val + '!!!'
}
</script>
<style scoped lang="scss">
.search{
  display: flex;
  position: relative;
  border-bottom: 2px solid grey;
  border-left: 2px solid grey;
  padding: 24px 8px 2px 8px;
  width: 40%;
  margin-top: 10%;

  margin-left: 25%;
  margin-bottom: 5%;
  &-label {
    font-size: 24px;
    position: absolute;
    bottom: 20%;
    left: 50%;
    transition: left 0.5s ease;
  }

  &-label.left {
    left: -25%;
  }
  &-input{
    font-size: 18px;
    flex: 1;
    width: 100%;
    background-color: inherit;
    border: none;
  }
}
.header{
  font-size: 10rem;
  padding: 24px;
  margin-top: 10%;
  margin-bottom: 40px
}
.pages {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.page{
  padding: 16px;
  margin-bottom: 24px;
}
</style>