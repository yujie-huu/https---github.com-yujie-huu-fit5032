<script setup>
import BHeader from './components/BHeader.vue'
</script>

<template>
  <h1 id="WebTitle">Monash Age Care</h1>

  <header>
    <BHeader />
  </header>

  <main class="main-box">
    <router-view></router-view>
  </main>
</template>

<style scoped>
#WebTitle {
  font-size: 45px;
  font-family: 'Lucida Sans';
  background-color: #3fe062;
  color: rgb(16, 16, 16);
  padding: 10px;
  border-radius: 10px 10px 0 0;
  text-align: center;
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
