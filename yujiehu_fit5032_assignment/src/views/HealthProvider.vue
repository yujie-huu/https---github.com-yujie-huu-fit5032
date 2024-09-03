<template>
  <div>
    <h1>Health Care Provider</h1>
  </div>
  <div v-for="provider in providers" :key="provider.id" class="provider">
    <h2>{{ provider.name }}</h2>
    <p>{{ provider.description }}</p>
    <RatingProvider :providerId="provider.id" />
  </div>
</template>

<script setup>
import { computed } from 'vue';

import RatingProvider from '@/components/Rating.vue';
import store from '@/store/store';


// Computed property to get the list of providers from the store
const providers = computed(() => store.state.providers);
</script>

<style scoped>
.provider {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>