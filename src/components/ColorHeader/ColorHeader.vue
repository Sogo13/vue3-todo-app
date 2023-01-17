<template>
  <h1 role="child" class="child" @click="updateText()">{{ newText }}
    + {{ props.number }}
    # {{ props.object }}</h1>
  <p>{{ obj.title }} - {{ obj.text }}</p>
</template>

<style scoped src="./ColorHeader.css">

</style>

<script setup>
import { computed, defineProps, reactive } from 'vue';

const props = defineProps({
  'text': String,
  'number': Number,
  'object': Object
})

console.log(typeof props.object)

const obj = reactive({
  title: 'title',
  text: 'text'
})

const newText = computed(() => props.text + '!!!')

const emit = defineEmits(['text-updated'])

function updateText() {
  console.log('updateText');
  emit('text-updated', 'new text from emit')
}
</script>

<script>
export default {
  inheritAttrs: false
}
</script>