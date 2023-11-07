<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import { defineProps } from "vue";
const store = useTodosStore();
const props = defineProps(["todo"]);
</script>

<template>
  <div class="todoItem">
    <li :class="{ isCompleted: props.todo.completed }">
      <input
        type="checkbox"
        :value="props.todo.completed"
        @change="store.toggleTodoComplete(props.todo.id)"
      />{{ props.todo.text }}
    </li>
    <button @click="store.removeTodo(props.todo)">Remove</button>
  </div>
</template>

<style>
.todoItem {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 0.5rem 0;
}
.isCompleted {
  text-decoration: line-through;
  color: grey;
}
</style>
