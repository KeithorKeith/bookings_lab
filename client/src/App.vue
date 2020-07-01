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
      this.bookings.push(booking)
    })

    eventBus.$on('booking-deleted', (id) => {
      const index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
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
  background: url('./assets/gatsby.jpg');
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
