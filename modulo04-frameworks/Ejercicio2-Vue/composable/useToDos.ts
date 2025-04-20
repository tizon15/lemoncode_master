import type { ToDo } from "~/shared/types";
import { defineStore } from "pinia";

const toDoFactory = (text: string): ToDo => ({
  timestamp: Date.now(),
  text,
  completed: false,
  isEditing: false,
});

export const useToDoStore = defineStore(
  "todosStore",
  () => {
    const todos = ref<ToDo[]>([]);
    const pendingToShow = ref(false);
    const completedToShow = ref(false);
    const completedToDos = computed(() => todos.value.filter((todo) => todo.completed));
    const pendingToDos = computed(() => todos.value.filter((todo) => !todo.completed));
    const total = computed(() => todos.value.length);
    const completed = computed(() => completedToDos.value.length);

    const addTodo = (todo: string) => {
      const newTodo = toDoFactory(todo);
      todos.value = [...todos.value, newTodo];
    };

    const toggleCompleted = (timestamp: number) => {
      const todo = todos.value.find((todo) => todo.timestamp === timestamp);
      if (todo) {
        todo.completed = !todo.completed;
      }
    };

    const removeTodo = (timestamp: number) => {
      const index = todos.value.findIndex((todo) => todo.timestamp === timestamp);
      if (index !== -1) {
        todos.value.splice(index, 1);
      }
    };

    const editTodo = (timestamp: number, text: string) => {
      const todo = todos.value.find((todo) => todo.timestamp === timestamp);
      if (todo) {
        todo.text = text;
        todo.isEditing = false;
      }
    };
    const clearAllCompleted = () => {
      todos.value = todos.value.filter((todo) => !todo.completed);  
      pendingToShow.value = false; // Reset pendingToShow when clearing completed todos
    }
    const completedAll = () => {
      todos.value.forEach((todo) => (todo.completed = true));
      pendingToShow.value = false; // Reset pendingToShow when marking all as completed
    }

    return {
      todos,
      total,
      completed,
      completedToDos,
      completedToShow,
      pendingToDos,
      pendingToShow,
      editTodo,
      addTodo,
      toggleCompleted,
      removeTodo,
      clearAllCompleted,
      completedAll,
    };
  },
  { persist: true }
);
