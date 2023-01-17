<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus v-model="text"
           @keyup.enter="addTodo"
    >
  </header>
</template>

<style scoped></style>

<script setup>
import { ref } from 'vue';

const text = ref('')

const emit = defineEmits()
function addTodo() {
  emit('add-todo', text.value)
  text.value = ''
}
</script>