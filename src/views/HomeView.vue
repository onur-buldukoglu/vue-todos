<script lang="ts">
import TodoList from "@/components/TodoList.vue";
import TodoCreateForm from "@/components/TodoCreateForm.vue";

export default {
  components: {
    TodoList,
    TodoCreateForm,
  },
  data() {
    return {
      isAuthenticated: JSON.parse(sessionStorage.getItem("isAuthenticated") || "false"),
    };
  },
  methods: {
    handleLogout() {
      this.isAuthenticated = false;
      this.$router.push("login");
    },
  },
  watch: {
    isAuthenticated(newValue) {
      sessionStorage.setItem("isAuthenticated", JSON.stringify(newValue));
    },
  },
};
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
