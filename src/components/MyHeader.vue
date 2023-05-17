<template>
    <div role="child" class="child">
        <h1 @click="setText">{{ myText }}</h1>
        <h4>{{ props.number }}</h4>
    </div>
</template>

<style scoped>
h1 {
    color: red;
}
</style>

<script setup>
import {computed, ref} from "vue";

const props = defineProps(['text', 'number'])

const myText = computed(() => props.text + '!!!')

const emit = defineEmits()

function setText() {
    emit('set-text', 'new text')
}
</script>

<script>
export default {
    inheritAttrs: false
}
</script>