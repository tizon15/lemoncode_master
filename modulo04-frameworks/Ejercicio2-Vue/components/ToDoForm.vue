<script setup lang="ts">
import { useToDoStore } from "~/composable/useToDos";

const todoInput = ref("");
const todosStore = useToDoStore();
const addTodo = () => {
  todosStore.addTodo(todoInput.value);
  todoInput.value = "";
};
</script>

<template>
  <form @submit.prevent="addTodo" class="flex sm:flex-row items-center gap-2 w-full">
    <label for="add-todo" class="sr-only">New task</label>
      <input
        id="add-todo"
        type="text"
        v-model="todoInput"
        class="border-2 border-gray-300 rounded p-2"
        placeholder="Enter a new task"
        aria-describedby="add-todo-help"
      />
    
    <button
      type="submit"
      class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center gap-2"
      aria-label="Add task {{ todoInput }}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      <span>Add</span>
    </button>
  </form>
</template>
