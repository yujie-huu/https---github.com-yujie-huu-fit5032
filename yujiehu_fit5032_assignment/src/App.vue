<script setup>
// import BHeader from './components/BHeader.vue'
import Homepage from './views/HomePage.vue';
</script>

<template>
  <h1 id="WebTitle">Monash Age Care</h1>

  <Homepage></Homepage>
</template>

<style scoped>
#WebTitle {
  font-size: 45px;
  font-family: 'Lucida Sans';
  background-color: #656fdfba;
  color: rgb(16, 16, 16);
  padding: 10px;
  border-radius: 10px 10px 0 0;
  text-align: center;
  margin: 20px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
