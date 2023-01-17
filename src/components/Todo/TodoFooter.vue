<template>
  <footer class="footer">
    <span class="todo-count">{{ props.count }} items left</span>
    <ul class="filters">
      <li>
        <a href="#/" class="selected" @click="$emit('set-mode', 'all')">All</a>
      </li>
      <li>
        <a href="#/active" @click="$emit('set-mode', 'active')">Active</a>
      </li>
      <li>
        <a href="#/completed" @click="$emit('set-mode', 'completed')">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="$emit('clear-completed')">Clear completed</button>
  </footer>
</template>

<style scoped></style>

<script setup>
  const props = defineProps(['count'])
</script>