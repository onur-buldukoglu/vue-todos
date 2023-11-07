<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const username = ref("");
const password = ref("");
const hasError = ref(false);
const signedUpUser = { username: "Onur", password: "1234" };
const router = useRouter();

function loginHandler() {
  if (username.value === signedUpUser.username && password.value === signedUpUser.password) {
    sessionStorage.setItem("isAuthenticated", "true");
    router.push("/");
  } else {
    hasError.value = true;
  }
}
</script>

<template>
  <form @submit.prevent="loginHandler">
    <label for="username">Username</label>
    <input type="text" id="username" v-model="username" />
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" />
    <button>Login</button>
  </form>
  <p v-show="hasError" :style="{ color: 'red' }">Incorrect username or password</p>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
