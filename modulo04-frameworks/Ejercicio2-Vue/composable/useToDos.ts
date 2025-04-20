import type { ToDo } from "~/shared/types";
import { defineStore } from 'pinia';

const toDoFactory = (text: string): ToDo => ({
  timestamp: Date.now(),
  text,
  completed: false,
});

export const useToDoStore = defineStore("todosStore", () => {
  const todos = ref<ToDo[]>([])
  const completedToDos = computed(() => todos.value.filter((todo) => todo.completed))
  const pendingToDos = computed(() => todos.value.filter((todo) => !todo.completed))

  const total = computed(() => todos.value.length)
  const completed = computed(() => completedToDos.value.length)
  
  const addTodo = (todo: string) => {
    const newTodo = toDoFactory(todo);
    todos.value.push(newTodo);
  };

  const toggleCompleted = (timestamp: number) => {
    const todo = todos.value.find((todo) => todo.timestamp === timestamp)
    if (todo) {
      todo.completed = !todo.completed
    }
  };

  const removeTodo = (timestamp: number) => {
    const index = todos.value.findIndex((todo) => todo.timestamp === timestamp);
    if (index !== -1) {
      todos.value.splice(index, 1);
    }
  };

  return {
    todos,
    total,
    completed,
    completedToDos,
    pendingToDos,
    // loadTodos,
    addTodo,
    toggleCompleted,
    removeTodo,
  };
}, { persist: true });
