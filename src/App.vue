<template>
    <section class="todoapp">
        <todo-input @add-new-todo="addTodo"></todo-input>
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <todo-item
                    v-for="todo in todoList"
                    :key="todo.id"
                    :todo="todo"
                    @toggle-state="toggleTodoState"
                    @change-title="changeTitle"
                ></todo-item>
            </ul>
        </section>
        <todo-filters
            :count="activeTodoCount"
            @set-filter="filter = $event"
            @clear-completed="clearCompleted"
        ></todo-filters>
    </section>
    <todo-footer></todo-footer>
</template>

<script setup>
import TodoItem from "@/components/TodoApp/TodoItem.vue";
import TodoFooter from "@/components/TodoApp/TodoFooter.vue";
import TodoInput from "@/components/TodoApp/TodoInput.vue";
import TodoFilters from "@/components/TodoApp/TodoFilters.vue";
import {computed, ref} from "vue";

const todos = ref([
    {
        id: 1,
        title: 'Buy PC',
        isCompleted: false
    },
    {
        id: 2,
        title: 'Run',
        isCompleted: true
    },
    {
        id: 3,
        title: 'Clean',
        isCompleted: false
    },
])

const todoList = computed(todosToShow)

const filter = ref('all')
function todosToShow() {
    switch (filter.value) {
        case 'all': return todos.value;
        case 'active': return todos.value.filter(t => !t.isCompleted)
        case 'finished': return todos.value.filter(t => t.isCompleted)
    }
}

const activeTodoCount = computed(
    () =>
        todos.value.filter(t => !t.isCompleted).length
)

function clearCompleted() {
    todos.value = todos.value.filter(t => !t.isCompleted)
}

function addTodo(text) {
    todos.value.push({
        id: todos.value.length + 1,
        title: text,
        isCompleted: false,
    })
}

function toggleTodoState(id) {
    const todo = getTodoById(id)
    todo.isCompleted = !todo.isCompleted
}

function getTodoById(id) {
    return todos.value.find(t => t.id === id)
}

function changeTitle({ id, newValue }) {
    getTodoById(id).title = newValue
}
</script>
