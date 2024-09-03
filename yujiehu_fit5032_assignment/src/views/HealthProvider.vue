<template>
  <div>
    <h1>Health Care Provider</h1>
  </div>
  <div v-for="provider in providers" :key="provider.id" class="provider">
    <h2>{{ provider.name }}</h2>
    <p>{{ provider.description }}</p>
    
    <!-- <p>Average rating: {{ averageRating(provider.ratings) }}</p> -->
    <!-- <RatingProvider :providerId="provider.id" /> --> 

    
    <div class="row text-center">
      <div class="col-sm-4">
        <p>Average Rating: {{ calculateAverageRating(provider.ratings) }}</p>
      </div>
      <div class="col-sm-5">
        <label :for="'rating-' + provider.id">Rate this provider:</label>
        <select v-model="rating" :id="'rating-' + provider.id">
          <option disabled value="">Select a rating</option>
          <option v-for="score in [1, 2, 3, 4, 5]" :key="score" :value="score">
            {{ score }}
          </option>
        </select>
      </div>
      <div class="col-sm-3">
        <button @click="submitRating(provider.id)" class="btn btn-outline-success">Submit Rating</button>
      </div>
    </div>
    
  </div>
</template>



<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      rating: 1, // Stores the user's selected rating
    };
  },
  computed: {
    ...mapState(['providers']),
  },
  methods: {
    ...mapActions(['updateRating']),
    submitRating(providerId) {
      if (this.rating) {
        const newRate = this.rating
        this.updateRating({ providerId, rating: newRate });
        this.rating = 1; // Reset the rating input after submission
      } else {
        alert("Please select a rating before submitting.");
      }
    },
    calculateAverageRating(ratings) {
      if (ratings.length === 0) return 0; // No ratings, return 0
      const total = ratings.reduce((sum, rating) => sum + rating, 0);
      return (total / ratings.length).toFixed(1); // Return average rating with one decimal place
    },
  },
};
</script>

<style scoped>
.provider {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>