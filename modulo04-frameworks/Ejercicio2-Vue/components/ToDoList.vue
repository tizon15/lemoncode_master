<script lang="ts" setup>
import { useToDoStore } from "~/composable/useToDos";

const todosStore = useToDoStore();

const onChange = (timestamp: number) => {
  todosStore.toggleCompleted(timestamp);
};
const onRemove = (timestamp: number) => {
  todosStore.removeTodo(timestamp);
};
const toDosToShow = ref(todosStore.todos);

const showOnlyPendingToDos = (event: Event) => {
  if ((event.target as HTMLInputElement)?.checked) {
    toDosToShow.value = todosStore.pendingToDos;
  } else {
    toDosToShow.value = todosStore.todos;
  }
};

onMounted(() => {
  toDosToShow.value = todosStore.todos;
});
</script>

<template>
  <h2 class="text-2xl font-bold">To Do List</h2>
  <p>Click on the checkbox to mark as completed</p>
  <p>Click on the delete button to remove a todo</p>
  <div v-if="todosStore.total">
    <p>Completed: {{ todosStore.completed }} / {{ todosStore.total }}</p>
  </div>
  <div>
    <input type="checkbox" id="toggle-all" @change="showOnlyPendingToDos" />
    <label for="toggle-all">Show only pending</label>
  </div>
  <hr />
  <ul class="max-w-[500px]">
    <li :key="todo.timestamp" v-for="todo in toDosToShow">
      <form @submit.prevent class="flex items-center justify-between">
        <input type="checkbox" :id="`todo-${todo.timestamp}`" :checked="todo.completed" @change="onChange(todo.timestamp)" />

        <label :for="`todo-${todo.timestamp}`" :class="['mr-auto', { 'line-through text-gray-400': todo.completed }]">
          {{ todo.text }}
        </label>
        <button @click="onRemove(todo.timestamp)">Remove</button>
      </form>
    </li>
  </ul>
</template>
