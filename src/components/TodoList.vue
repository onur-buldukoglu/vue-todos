<script lang="ts">
import { useTodosStore } from "@/stores/todos";
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  data() {
    return { store: useTodosStore() };
  },
};
</script>

<template>
  <ul>
    <TodoItem v-for="todo in store.todos" :key="todo.id" :todo="todo" />
  </ul>
  <button v-if="store.todos.length" @click="store.clearTodos">Clear Todos</button>
</template>
