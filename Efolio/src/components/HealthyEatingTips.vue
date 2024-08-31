<script setup>
import {ref} from 'vue'
let areTipsVisible = ref{true}

const
const healthTips = ref{[]}
/**
 * Use v-if to only show the Headers if it is complete beginner!
 * Use v-for to display tips from a list (JSON)
 * Putting it all together to only show ALL tips if it is a beginner.
 */
</script>

<template>
  <button class="btn" @click="areTipsVisible = !areTipsVisible">Toggle Tips</button>
  <div class="tips" v-if="areTipsVisible">
    <h1>Healthy Eating Tips</h1>
    <!-- Show tips to the user -->
    <ul>
      <li v-for="myTips in healthTips" v-bind:key="myTips.id">{{ myTips.tip }}</li>
    </ul>
  </div>
</template>

<style scoped>
.tips {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
}

.btn {
  background-color: var(--color-primary);
  color: green;
  padding: 0.5rem lrem;
  border: none;
}
</style>
