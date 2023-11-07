<script setup lang="ts">
import TodoList from "@/components/TodoList.vue";
import TodoCreateForm from "@/components/TodoCreateForm.vue";
import type { Ref } from "vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isAuthenticated: Ref<boolean> = ref(
  JSON.parse(sessionStorage.getItem("isAuthenticated") || "false"),
);

function handleLogout() {
  isAuthenticated.value = false;
  router.push("login");
}

watch(isAuthenticated, (newValue) => {
  sessionStorage.setItem("isAuthenticated", JSON.stringify(newValue));
});
</script>

<template>
  <main>
    <h3>Todos</h3>
    <TodoCreateForm />
    <TodoList />
    <button @click="handleLogout">Logout</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  width: 20rem;
}
button {
  margin: 1rem 0;
}
</style>
