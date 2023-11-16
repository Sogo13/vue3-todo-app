<template>
  <li class="todo" :class="{ 'completed': todo.isCompleted,
    'editing': isEditing }">
    <div class="view">
      <input class="toggle" type="checkbox"
             :checked="todo.isCompleted"
             @input="$emit('toggle-completed', todo.id)" />
      <label @dblclick="isEditing = true">
        {{ todo.title }} #{{ todo.id }}
      </label>
      <button class="destroy" @click="$emit('destroy')"></button>
    </div>
    <input class="edit" type="text" v-model="text"
    @blur="setText"
           @keyup.enter="setText"
    />
  </li>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps(['todo'])

const isEditing = ref(false)

const emit = defineEmits()

const text = ref(props.todo.title)

function setText() {
  emit('set-text', text.value)
  isEditing.value = false
}
</script>