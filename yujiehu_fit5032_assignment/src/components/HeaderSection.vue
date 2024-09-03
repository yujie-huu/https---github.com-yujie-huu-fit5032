<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/home" class="nav-link active" aria-current="page">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/health" class="nav-link">My Health</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
