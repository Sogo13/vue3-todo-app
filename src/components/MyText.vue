<template>
  <div class="" role="child" id="child" @click="emit('set-text', 'new text')">
    <h1>{{ updatedText }}</h1>
    <h2>{{ updatedText }}</h2>
    <h3>{{ props.number }}</h3>
  </div>
</template>

<!--<style scoped>-->
<!--h1 {-->
<!--  color: red;-->
<!--}-->
<!--</style>-->

<script setup>
import {computed, ref, useAttrs} from "vue";

const props = defineProps({
  text: String,
  number: {
    type: Number,
    default: 123
  }
})

const updatedText = computed(() => props.text + '!!!')


const emit = defineEmits()
</script>

<script>
export default {
  inheritAttrs: false
}
</script>