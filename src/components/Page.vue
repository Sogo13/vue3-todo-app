<template>
  <header>
    <slot name="header">
      <my-input></my-input>
    </slot>
  </header>

  <main>
    <slot></slot>
  </main>

  <footer>
    <slot name="footer" :year="year" :profile="profile">
      © Vuejs {{ year }}
    </slot>
  </footer>
</template>

<script setup>
import {ref} from "vue";

const year = ref(2023)

const profile = ref({
  name: 'John',
  surname: 'Last'
})
</script>