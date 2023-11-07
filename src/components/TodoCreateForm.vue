<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import { ref } from "vue";
const store = useTodosStore();
const newTodoText = ref("");

function addTodoHandler(todoText: string) {
  store.addTodo(todoText);
  newTodoText.value = "";
}
</script>

<template>
  <form @submit.prevent="addTodoHandler(newTodoText)">
    <input type="text" id="addTodo" v-model="newTodoText" />
    <button>Add Todo</button>
  </form>
</template>
