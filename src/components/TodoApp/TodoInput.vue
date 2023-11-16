<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus
           @keyup.enter="addTodo"
           v-model="text"
    >
  </header>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits()

const text = ref('')
function addTodo() {
  emit('add-todo', text.value)
  text.value = ''
}
</script>