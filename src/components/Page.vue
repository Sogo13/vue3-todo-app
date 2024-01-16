<template>
  <main>
    <div class="page">
      <h1 class="title">{{good.title}}</h1>
      <div class="imgBlock">
        <img class="image" :src="good.image" alt="sorry">

      </div>
      <h3>{{good.price}} €</h3>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue';

const mainText = ref('Main')

const props = defineProps({
  good: {
    type: Object,
    required: true
  }
});
</script>
<style scoped>
.page{
  line-height:32px;
  background-color: white;
  width: 400px;
  height: 600px;
}
.title{
  height: 30%;
  border-bottom: 1px solid  black;
}

.imgBlock{
height: 50%;

  border-bottom: 1px solid  black;
}
.image {
  margin: auto;
  padding: 12px;
  width: 50%;
  height: 80%;
}
</style>