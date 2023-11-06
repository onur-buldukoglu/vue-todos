<script lang="ts">
export default {
  data() {
    return {
      username: "",
      password: "",
      signedUpUser: { username: "Onur", password: "1234" },
      hasError: false,
    };
  },
  methods: {
    loginHandler() {
      if (
        this.username === this.signedUpUser.username &&
        this.password === this.signedUpUser.password
      ) {
        sessionStorage.isAuthenticated = true;
        this.$router.push("/");
      } else {
        this.hasError = true;
      }
    },
  },
};
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
