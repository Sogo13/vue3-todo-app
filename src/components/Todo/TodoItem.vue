<template>
  <li class="todo" :class="{ 'completed': props.todo.isCompleted }">
    <div class="view">
      <input class="toggle" type="checkbox"
             :checked="props.todo.isCompleted"
             @input="$emit('set-is-completed', !props.todo.isCompleted)"
      />
      <label>{{ props.todo.text }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" type="text" />
  </li>
</template>

<style scoped></style>

<script setup>
const props = defineProps(['todo'])
</script>