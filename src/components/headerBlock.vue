<template>
  <div class="header" >
    <p class="header-txt" @click="goHome">Домой</p>
    <p class="header-txt" v-if="!login" @click="goLogin">Вход</p>
    <p class="header-txt" v-if="login" @click="stopLogin">Выход</p>
    <p class="header-txt" @click="goAuthorie">Админка</p>
    <p class="header-txt" v-if="login" >{{ login }}</p>
    <p class="header-txt" @click="goCart">Корзина</p>
    <p class="header-txt" @click="clearCart">Очистить корзину</p>
  </div>
</template>
<script setup>
import router from "@";
import {computed} from "vue";
import store from "@/store/store";
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
  router.push({ name: 'authorisation' });

}
function goCart(){
  router.push({ name: 'cart' });
}
function clearCart(){
store.dispatch('clearCart')
}
</script>
<style scoped lang="scss">
.header{
  background-color: #181818;
  z-index: 10;
  width: 85%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;

&-txt{
  color: white;
  cursor: pointer;
  font-size: 24px;
}
}
</style>