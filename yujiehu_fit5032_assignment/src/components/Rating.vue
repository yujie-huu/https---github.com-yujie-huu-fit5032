<template>
    <div>
      <h2>Rate the Health Care Provider</h2>
      <div>
        <label for="rating">Your Rating (1 to 5):</label>
        <input type="number" id="rating" v-model="userRating" min="1" max="5" />
        <button @click="submitRating">Submit Rating</button>
      </div>
      <div v-if="averageRating !== '0.0'">
        <h3>Average Rating: {{ averageRating }}</h3>
      </div>
      <div v-else>
        <h3>No ratings yet</h3>
      </div>
    </div>
</template>
  
