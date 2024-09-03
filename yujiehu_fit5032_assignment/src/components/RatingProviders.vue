<template>
    <div>
        <div>
            <p>Average Rating: {{ averageRating }}</p>
        </div>
        <div>
            <label for="rating">Your Rating (1 to 5):</label>
            <input type="number" id="rating" v-model="userRating" min="1" max="5" />
            <button @click="submitRating">Submit Rating</button>
        </div>
    </div>
</template>
  
<script>
import { mapMutations, mapGetters } from 'vuex';
  
export default {
    props: {
      providerId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        userRating: ''
      };
    },
    computed: {
      ...mapGetters(['averageRating']),
    },
    methods: {
      ...mapMutations(['addRating']),
      submitRating() {
        if (this.userRating) {
          this.addRating({ providerId: this.providerId, rating: Number(this.userRating) });
          this.userRating = ''; // Reset the rating selection after submission
        } else {
          alert('Please select a rating before submitting.');
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
  
