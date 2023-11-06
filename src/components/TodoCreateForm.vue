<script lang="ts">
import { useTodosStore } from "@/stores/todos";

export default {
  data() {
    return {
      store: useTodosStore(),
      newTodoText: "",
    };
  },
  methods: {
    addTodoHandler(newTodoText: string) {
      this.store.addTodo(newTodoText);
      this.newTodoText = "";
    },
  },
};
</script>

<template>
  <form @submit.prevent="addTodoHandler(newTodoText)">
    <input type="text" id="addTodo" v-model="newTodoText" />
    <button>Add Todo</button>
  </form>
</template>
