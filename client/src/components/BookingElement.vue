<template lang="html">
<div class="booking-element">
    <h2>{{ booking.name }}</h2>
    <p>Email Adress: {{ booking.email }}</p>
    <p>Check In: {{ booking.checkedIn }}</p>
    <button type="button" class="delete-btn" v-on:click="deleteBooking"></button>
</div>
  
</template>

<script>
import { eventBus } from '../main.js'
import BookingService from '../services/BookingService.js'

export default {
    name: 'booking-element',
    props: ['booking'],
    methods: {
        deleteBooking(){
            // BookingService.deleteBooking(this.booking._id)
            // .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        }
    }
}
</script>

<style>

</style>