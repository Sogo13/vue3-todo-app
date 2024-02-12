<template>
  <div class="header" @click="goHome"><p class="header-txt">Домой</p></div>
</template>
<script setup>
import router from "./index";

function goHome(){
  router.push({ name: 'home'});
}
</script>
<style scoped lang="scss">
.header{
  position: fixed;
  top: 0;
  left: 50%;
&-txt{
  font-size: 24px;
}
}
</style>