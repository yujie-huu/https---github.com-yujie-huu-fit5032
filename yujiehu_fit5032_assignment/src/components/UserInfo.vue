<template>
    <div class="container mt-5">
        <h2 class="mt-2">User Info</h2>
        <p class="mt-2"> username: {{currentUser?.username}}</p>
    </div>

</template>

<script setup>
import { computed } from 'vue';
import store from '@/store/store';
import { userAccounts } from '@/store/userAccount';

// Create a reactive computed user info property for current user
const currentUser = computed(() => 
  userAccounts.find(account => account.username === store.state.user)
);

</script>

<style scoped>
</style>