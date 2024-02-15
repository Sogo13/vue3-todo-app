<template>
  <div class="header" >
    <p class="header-txt" @click="goHome">Домой</p>
    <p class="header-txt" @click="goAuthorie">Админка</p>
  </div>
</template>
<script setup>
import router from "./index";
const isAuthenticated = localStorage.getItem('isAuthenticated');
function goHome(){

  router.push({ name: 'home'});
}
function goAuthorie(){
  if (isAuthenticated === 'true'){
    router.push({ name: 'createGood'});
  }
  else{
    router.push({ name: 'authorisation'});
  }

}
</script>
<style scoped lang="scss">
.header{
  width: 70%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;

&-txt{
  font-size: 24px;
}
}
</style>