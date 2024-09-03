<template>
  <form @submit.prevent="submitRating(providerId)">
    <div class="row text-center">
      <div class="col-sm-6">
        <label for="rating">Rate the provider (1-5):</label>
        <input type="number" id="rating" v-model.number="rating" min="1" max="5" required />
      </div>
      <div class="col-sm-4">
        <button type="submit" class="btn btn-outline-success">Submit Rating</button>
      </div>
    </div>
  </form>
</template>
  
<script>
import { mapActions} from 'vuex';
  
export default {
  props: {
    providerId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      rating: 1,
    };
  },
  methods: {
    ...mapActions(['updateRating']),
    submitRating() {
      if (this.rating) {
        const providerId = this.providerId
        const rating = this.rating
        this.updateRating(providerId, rating);
        this.rating = 1; // Reset the rating selection after submission
      } else {
        alert('Please enter a rating before submitting.');
      }
    }
  }
};
</script>
  
<style scoped>
.rating-component {
    margin-top: 10px;
}
</style>
  
