<template>
    <li class="todo" :class="{
        'completed': props.todo.isCompleted,
        'editing': isEditing
    }" >
        <div class="view">
            <input class="toggle" type="checkbox"
                   @input="$emit('toggleState', props.todo.id)"
                   :checked="props.todo.isCompleted"
            />
            <label @dblclick="isEditing = true">{{ props.todo.title }} #{{ props.todo.id }}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" type="text" :value="props.todo.title"
        @keydown.enter="stopEditing"/>
    </li>
</template>

<style scoped>

</style>

<script setup>
import {ref} from "vue";

const props = defineProps(['todo'])

const isEditing = ref(false)

const emit = defineEmits()

function stopEditing(event) {
    isEditing.value = false
    emit('change-title', {
        id: props.todo.id,
        newValue: event.target.value
    })
}

</script>