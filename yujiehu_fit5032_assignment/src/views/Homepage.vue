<template>
  <h1 class="text-center">Welcome, {{username}}</h1>

  <UserInfo/>

</template>

<script setup>
import UserInfo from '@/components/UserInfo.vue';
import store from '@/store/store';

// read the username
const username = store.state.user
</script>

<style scoped>
</style>
