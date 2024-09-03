<template>
  <div>
    <h1>Health Care Provider</h1>
  </div>
  <div v-for="provider in providers" :key="provider.id">
    <h2>{{ provider.name }}</h2>
    <Rating :providerId="provider.id" />
  </div>
</template>

<script setup>
import Rating from '@/components/Rating.vue';

</script>

<style scoped>
.provider {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>