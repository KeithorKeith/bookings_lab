<template lang="html">
  <div id="app">
    <booking-display :bookings="bookings"></booking-display>
  </div>
</template>

<script>
import BookingDisplay from './components/BookingDisplay.vue'
import BookingService from './services/BookingService.js';

export default {
  name: 'App',
  data() {
    return {
      bookings: []
    }
  },
  mounted() {
    BookingService.getBookings
    .then(bookings => this.bookings = bookings)
  },
  components: {
    'booking-display': BookingDisplay
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
