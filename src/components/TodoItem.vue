<script lang="ts">
import type { PropType } from "vue";
import type { Todo } from "@/stores/todos";
import { useTodosStore } from "@/stores/todos";
export default {
  props: {
    todo: { type: Object as PropType<Todo>, required: true },
  },
  data() {
    return { store: useTodosStore() };
  },
};
</script>

<template>
  <div class="todoItem">
    <li :class="{ isCompleted: todo.completed }">
      <input
        type="checkbox"
        :value="todo.completed"
        @change="store.toggleTodoComplete(todo.id)"
      />{{ todo.text }}
    </li>
    <button @click="store.removeTodo(todo)">Remove</button>
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
