<template>
<!--  <color-header :text="text" :number="123 + 1"-->
<!--                :object="{ a: 1 }"-->
<!--                role="parent"-->
<!--                class="parent"-->
<!--                @text-updated="text = $event"-->
<!--  ></color-header>-->
<!--  <color-header text="sub"></color-header>-->

  <section class="todoapp">
    <todo-header @add-todo="addTodo"></todo-header>
    <todos :todos="viewTodo" @set-is-completed="setIsCompleted"></todos>
    <todo-footer :count="countLeft"
                 @clear-completed="clearCompleted"
                 @set-mode="currentMode = $event"
    ></todo-footer>
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
    <p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>


<script setup>
import TodoHeader from '@/components/Todo/TodoHeader.vue';
import Todos from '@/components/Todo/Todos.vue';
import TodoFooter from '@/components/Todo/TodoFooter.vue';
import { computed, ref } from 'vue';

const todos = ref([
    {
  id: 1,
  text: 'first todo',
  isCompleted: false,
}, {
  id: 2,
  text: 'second todo',
  isCompleted: true,
}, {
  id: 3,
  text: 'third todo',
  isCompleted: false,
},
])

const Mode = {
  all: 'all',
  active: 'active',
  completed: 'completed'
}

const currentMode = ref(Mode.all)

const viewTodo = computed(() =>
    filterTodoByMode(todos.value, currentMode))

function filterTodoByMode(todos, mode) {
  switch (mode.value) {
    case Mode.all: return todos;
    case Mode.active: return todos.filter(t => !t.isCompleted)
    case Mode.completed: return todos.filter(t => t.isCompleted)
  }
}

function setIsCompleted({ id, val }) {
  todos.value.find(todo => todo.id === id).isCompleted = val
}

function clearCompleted() {
  todos.value = todos.value.filter(t => !t.isCompleted)
}

function addTodo(text) {
  todos.value.push({ id: todos.value.length + 1, text, isCompleted: false })
}

const countLeft = computed(() => todos.value.filter(t => !t.isCompleted).length)
</script>