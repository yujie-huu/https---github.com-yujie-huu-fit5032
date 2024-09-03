<template>
  <h1>Welcome, {{username}}</h1>

</template>

<script setup>
import store from '@/store/store';

// read the username
const username = store.state.user
</script>

<style scoped>

</style>
