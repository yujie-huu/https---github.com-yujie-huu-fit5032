<script>
import BHeader from './components/BHeader.vue';

export default {
  name: 'App',
  components: {
    BHeader
  },
  computed: {
    showHeader() {
      return this.$route.path !== '/countBook';
    }
  }
};
</script>

<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>
    <main class="main-box">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
</style>

