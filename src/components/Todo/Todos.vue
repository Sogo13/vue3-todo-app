<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <todo-item v-for="todo in props.todos"
                 :key="todo.id"
                 :todo="todo"
                 @set-is-completed="$emit('set-is-completed', {
                   id: todo.id, val: $event})"
      ></todo-item>
    </ul>
  </section>
</template>

<style scoped></style>

<script setup>
import TodoItem from '@/components/Todo/TodoItem.vue';

const props = defineProps(['todos'])
</script>