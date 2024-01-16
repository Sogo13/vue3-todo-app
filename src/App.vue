<template>
  <p @click="hidden = !hidden"
     v-css:[property]="color"
     v-css:fontSize="'10rem'">MainPage
  </p>
  <template v-if="!hidden">
    <div class="pages">
    <Page class="page" v-for="good in goodsList" :key="good.id" :good="good"/>

    </div>
  </template>
</template>


<script setup>
import MyInput from '@/components/MyInput.vue';
import { computed, ref, onMounted } from 'vue';
import Page from '@/components/Page.vue';
import fetchData from  '@/script'

const text = ref('text')
const color = ref('yellow')
const counter = ref(0)

const flag = ref(true)
const hidden = ref(false)
const property = ref('color')
const goodsList = ref(null)

const textUpp = computed(() => upp(text.value))
 onMounted(async () => {
   goodsList.value = await fetchData()
});


function upp(val) {
  return val.toString().toUpperCase();
}
function log(val) {
  return val
}
function exp(val) {
  return val + '!!!'
}
</script>
<style scoped>
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