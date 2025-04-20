<script lang="ts" setup>
import { useToDoStore } from "~/composable/useToDos";
import type { ToDo } from "~/shared/types";

const todosStore = useToDoStore();

const updateToDos = computed(() => {
  if (todosStore.pendingToShow) {
    return todosStore.pendingToDos;
  } else if (todosStore.completedToShow) {
    return todosStore.completedToDos;
  }
  return todosStore.todos;
});

const onChange = (timestamp: number) => {
  todosStore.toggleCompleted(timestamp);
};
const onRemove = (timestamp: number) => {
  todosStore.removeTodo(timestamp);
};
const onEdit = (todo: ToDo) => {
  todo.isEditing = !todo.isEditing;
};
const onSaveEditChanges = (todo: ToDo) => {
  const newText = todo.text;
  if (newText) {
    todosStore.editTodo(todo.timestamp, newText);
  }
};
const completedAll = () => todosStore.completedAll();

const clearAllCompleted = () => todosStore.clearAllCompleted();
</script>

<template>
  <div class="flex flex-col items-center gap-2 sm:p-6">
    <h2 class="text-2xl font-bold text-center">To Do List</h2>
    <p class="text-center">Click on the checkbox to mark as completed</p>
    <p class="text-center">Click on the delete button to remove a todo</p>
    <div>
      <div v-if="todosStore.total" class="text-center">
        <p aria-live="polite" aria-atomic="true">Completed: {{ todosStore.completed }} / {{ todosStore.total }}</p>
      </div>
      <div class="flex flex-row items-center gap-1">
        <div class="flex items-center gap-1">
          <input
            type="checkbox"
            id="toggle-all"
            v-model="todosStore.pendingToShow"
            aria-describedby="toggle-all-description"
            class="w-5 h-5"
          />
          <label for="toggle-all">Show pending</label>
          <p id="toggle-all-description" class="sr-only">Toggle to show only pending tasks.</p>
        </div>

        <div class="flex items-center gap-1">
          <input
            type="checkbox"
            id="toggle-all"
            v-model="todosStore.completedToShow"
            aria-describedby="toggle-all-description"
            class="w-5 h-5"
          />
          <label for="toggle-all">Show pending</label>
          <p id="toggle-all-description" class="sr-only">Toggle to show only pending tasks.</p>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <button
        class="flex items-center gap-1 rounded bg-blue-500 text-white p-2 hover:bg-blue-600"
        @click="completedAll"
        title="Clear all completed tasks"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="size-3.5"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

        <label for="toggle-completed">Clear all completed</label>
        <p id="toggle-completed-description" class="sr-only">Toggle clear all the completed tasks.</p>
      </button>

      <button
        class="flex items-center gap-1 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        @click="clearAllCompleted"
        title="Clear all completed tasks"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

        <label for="toggle-completed">Clear all completed</label>
        <p id="toggle-completed-description" class="sr-only">Toggle clear all the completed tasks.</p>
      </button>
    </div>
  </div>
  <ul class="max-w-[500px] w-full flex gap-2 flex-col">
    <li :key="todo.timestamp" v-for="todo in updateToDos">
      <form @submit.prevent class="flex items-center gap-2">
        <input
          v-if="!todo.isEditing"
          type="checkbox"
          :id="`todo-${todo.timestamp}`"
          :checked="todo.completed"
          @change="onChange(todo.timestamp)"
          :aria-checked="todo.completed"
          aria-describedby="todo-completed-description"
          aria-label="Mark task {{ todo.text }} as completed"
          class="cursor-pointer w-5 h-5"
          :class="{
            'checked:bg-blue-500 checked:border-transparent': todo.completed,
            'checked:bg-gray-300 checked:border-transparent': !todo.completed,
          }"
        />

        <label
          :for="`todo-${todo.timestamp}`"
          :class="['mr-auto', { 'line-through text-gray-400': todo.completed }]"
          v-if="!todo.isEditing || todo.completed"
          class="text-center sm:text-left"
          aria-label="Remove task {{ todo.text }}"
        >
          {{ todo.text }}
        </label>
        <input
          v-else-if="todo.isEditing && !todo.completed"
          type="text"
          v-model="todo.text"
          class="border-2 border-gray-300 rounded p-2 w-full"
          aria-label="Edit task {{ todo.text }}"
          aria-describedby="todo-edit-description"
        />
        <button
          v-if="!todo.isEditing && !todo.completed"
          type="button"
          class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          @click="onEdit(todo)"
          title="Edit task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
          <span class="sr-only">Edit task {{ todo.text }}</span>
        </button>
        <div v-else-if="todo.isEditing && !todo.completed" class="flex gap-2">
          <button class="bg-red-500 text-white p-2 rounded hover:bg-red-600" @click="onEdit(todo)" title="Cancel edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            <span class="sr-only">Edit task {{ todo.text }}</span>
          </button>
          <button class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" @click="onSaveEditChanges(todo)" title="Save edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>

            <span class="sr-only">Save edited task {{ todo.text }}</span>
          </button>
        </div>

        <button class="bg-red-500 text-white p-2 rounded hover:bg-red-600" @click="onRemove(todo.timestamp)" title="Remove task">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          <span class="sr-only">Remove task {{ todo.text }}</span>
        </button>
      </form>
    </li>
  </ul>
</template>
