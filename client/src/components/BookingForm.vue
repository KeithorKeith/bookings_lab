<template lang="html">
  <div>
      <h1>Hotel Booking Tool</h1>
      <form class="booking-form" v-on:submit="handleBooking" method="post">
          <label for="name-field">Enter name:</label>
          <input type="text" id="name-field" v-model="name">

          <label for="email-field">Email:</label>
          <input type="text" id="email-field" v-model="email">

          <label for="checked-in-field">Checked in:</label>
          <select name="checked-in" id="checked-in-field" v-model="checkedIn">
              <option :value="true">Yes</option>
              <option :value="false">No</option>
          </select>

          <input type="submit" id="submit-field" value="Submit details" />
      </form>
  </div>
</template>
 
<script>
import { eventBus } from '../main.js'
import BookingService from '../services/BookingService.js'

export default {
    name: 'booking-form',
    data() {
        return {
            name: "",
            email: "",
            checkedIn: null
        }
    },
    methods: {
        handleBooking: function(event) {
            event.preventDefault();
            const newBooking = {
                name: this.name,
                email: this.email,
                checkedIn: this.checkedIn
            }
            BookingService.postBooking(newBooking)
            .then(booking => eventBus.$emit('booking-added', booking))

        }
    }
}
</script>

<style>

</style>