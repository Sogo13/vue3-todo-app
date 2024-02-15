<template>
  <div class="header" >
    <p class="header-txt" @click="goHome">Домой</p>
    <p class="header-txt" v-if="!login" @click="goLogin">Вход</p>
    <p class="header-txt" v-if="login" @click="stopLogin">Выход</p>
    <p class="header-txt" @click="goAuthorie">Админка</p>
    <p class="header-txt" v-if="login" >{{ login }}</p>
  </div>
</template>
<script setup>
import router from "./index";
import {computed} from "vue";
import store from "@/store";
const isAuthenticated = localStorage.getItem('isAuthenticated');
const login = computed(() => store.getters.getLogin);
function goHome(){

  router.push({ name: 'home'});
}
function goLogin(){

  router.push({ name: 'login'});
}
function stopLogin(){
store.dispatch('stopLogin')
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