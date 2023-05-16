<template>
  <input type="text" :value="props.modelValue"
         @input="$emit('update:model-value', $event.target.value)">
  <button @click="clearInput">X</button>
</template>

<style scoped>
input {
  border: 1px solid red;
  border-radius: 5px;
  font-size: 1.5rem;
}
button {
  background: yellow;
  color: red;
  padding: 1rem;
  margin-left: 1rem;
}
</style>

<script setup>
import { ref } from 'vue';

const emit = defineEmits()
const props = defineProps(['modelValue', 'modelModifiers',
                           'counterModifiers'])
const counter = ref(0)

console.log(props.modelModifiers)
console.log(props.counterModifiers)

function clearInput() {
  emit('update:model-value', '')
  counter.value++
  emit('update:counter', counter.value)
}
</script>