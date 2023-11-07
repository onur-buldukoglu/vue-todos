<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import TodoItem from "./TodoItem.vue";

const store = useTodosStore();
</script>

<template>
  <ul>
    <TodoItem v-for="todo in store.todos" :key="todo.id" :todo="todo" />
  </ul>
  <button v-if="store.todos.length" @click="store.clearTodos">Clear Todos</button>
</template>
