<template>
  <div @click="textColor = 'yellow'">
    <label v-css:[targetProperty].delayed="'green'" v-css="textColor">
      {{ label }}<br>
      <input type="text" :value="props.modelValue"
             @input="$emit('update:model-value', $event.target.value)">
      <button
          @click="$emit('update:model-value', '');
          $emit('update:clearedCount',
          props.clearedCount + 1)">
        X @ {{ props.clearedCount }}
      </button>
    </label>
    <p>Count: {{ props.modelValue.length }}</p>
    <slot></slot>
  </div>
</template>

<style scoped>
label {
  font-size: 2rem;
}
input {
  border-radius: 5px;
  font-size: 2rem;
  border: 2px red solid;
}
button {
  background: yellow;
  color: red;
  font-size: 2rem;
  padding: 10px;
}
</style>

<script setup>
import {ref} from "vue";

const props = defineProps(['modelValue', 'clearedCount', 'label', 'modelModifiers'])

const textColor = ref('red')
const targetProperty = ref('backgroundColor')

console.log(props.modelModifiers)
</script>