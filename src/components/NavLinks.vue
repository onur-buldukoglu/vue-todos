<script setup lang="ts">
const routes = [{ name: "Home", path: "/" }];
</script>

<template>
  <nav>
    <a v-for="route in routes" :key="routes.indexOf(route)" :href="route.path">{{ route.name }}</a>
  </nav>
</template>

<style>
nav {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
