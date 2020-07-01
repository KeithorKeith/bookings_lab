<template lang="html">
  <div id="app">
    <booking-form></booking-form>
    <booking-display :bookings="bookings"></booking-display>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import BookingForm from './components/BookingForm.vue'
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
    BookingService.getBookings()
    .then(bookings => this.bookings = bookings);

    eventBus.$on('booking-added', (booking) => {
      this.booking.push(booking)
    })

    eventBus.$on('booking-deleted', (id) => {
      const index = this.booking.findIndex(booking => booking._id === id)
      this.games.splice(index, 1)
    })
  },
  components: {
    'booking-display': BookingDisplay,
    'booking-form': BookingForm
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
