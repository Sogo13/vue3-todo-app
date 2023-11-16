<template>
  <footer class="footer">
    <span class="todo-count">{{ left }} items left</span>
    <ul class="filters">
      <li>
        <a href="#"
           @click="$emit('set-filter', 'all')" class="selected">All</a>
      </li>
      <li>
        <a href="#"
           @click="$emit('set-filter', 'active')">Active</a>
      </li>
      <li>
        <a href="#"
           @click="$emit('set-filter', 'completed')">Completed</a>
      </li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<script setup>
defineProps(['left'])
</script>