<template>
  <header><slot name="header">Header</slot></header>
  <main>
    <slot :mainText="mainText" :profile="profile"><h1>{{ mainText }}</h1></slot>
  </main>
  <footer><slot name="footer">© 2023 Vue.js</slot></footer>
</template>

<script setup>
import { reactive, ref } from 'vue';

const mainText = ref('Main')
const profile = reactive({
  name: 'John',
  secondName: 'White'
})
</script>