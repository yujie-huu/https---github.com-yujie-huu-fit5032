<template>
  <HeaderSection />
  <h1>Welcome, {{username}}</h1>

</template>

<script setup>
import store from '@/store/store';
import HeaderSection from '@/components/HeaderSection.vue'

// read the username
const username = store.state.user
</script>

<style scoped>

</style>
