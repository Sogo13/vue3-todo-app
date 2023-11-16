<template>
  <section class="todoapp">
    <todo-input @add-todo="addTodo"></todo-input>
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <todo-item v-for="todo in filteredTodos"
                   :key="todo.id"
                   :todo="todo"
                   @toggle-completed="toggleCompleted"
                   @set-text="setText(todo.id, $event)"
                   @destroy="removeTodo(todo.id)"
        ></todo-item>
      </ul>
    </section>
    <todo-filters :left="leftCount" @set-filter="filter = $event"></todo-filters>
  </section>
  <todo-footer></todo-footer>
</template>

<script setup>
import TodoItem from "@/components/TodoApp/TodoItem.vue";
import TodoFooter from "@/components/TodoApp/TodoFooter.vue";
import TodoFilters from "@/components/TodoApp/TodoFilters.vue";
import TodoInput from "@/components/TodoApp/TodoInput.vue";
import {computed, reactive, ref} from "vue";

let todos = reactive([
  {
    id: 1,
    title: 'Buy laptop',
    isCompleted: false
  },
  {
    id: 2,
    title: 'Run laptop',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Clean my room',
    isCompleted: true
  },
])

function addTodo(text) {
  todos.push({
    id: todos.length + 1,
    title: text,
    isCompleted: false
  })
}

function toggleCompleted(id) {
  const todo = todos.find(todo => todo.id === id)
  todo.isCompleted = !todo.isCompleted
}

const leftCount = computed(
    () => todos.filter(todo => !todo.isCompleted).length
)

function setText(id, newText) {
  const todo = todos.find(todo => todo.id === id)
  todo.title = newText
}

const filter = ref('all')

const filteredTodos = computed(() => {
  switch (filter.value) {
    case 'all': return todos;
    case 'completed': return todos.filter(todo => todo.isCompleted);
    case 'active': return todos.filter(todo => !todo.isCompleted);
  }
})

console.log(filteredTodos)

function removeTodo(id) {
  const i = todos.findIndex((todo) => todo.id === id)
  todos.splice(i, 1)

  console.log('id', id)

  todos = reactive(todos.filter(todo => todo !== id))
}
</script>