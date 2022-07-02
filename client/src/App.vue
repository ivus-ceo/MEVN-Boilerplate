<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style>

</style>
