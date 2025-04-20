<script setup lang="ts">
import { useToDoStore } from '~/composable/useToDos'



const todoInput = ref('')
const todosStore = useToDoStore()
const addTodo = () => {
  todosStore.addTodo(todoInput.value)
  todoInput.value = ''
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <label for="todo">New task: </label>
    <input id="todo" type="text" v-model="todoInput" class="border-2" />
    <button>Add</button>
  </form>
</template>
