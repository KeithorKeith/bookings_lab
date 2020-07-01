<template lang="html">
<div class="booking-element">
    <h2>{{ booking.name }}</h2>
    <p>Email Adress: {{ booking.email }}</p>
    <div v-if="booking.checkedIn">
        <p>Check-in status: Checked in.</p>
    </div>
    <div v-if="booking.checkedIn === false">
        <p>Check-in status: Checked out.</p>
    </div>
    <button type="button" class="delete-btn" v-on:click="deleteBooking">X</button>
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
            BookingService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        }
    }
}
</script>

<style>
button {
    width: 30px;
    height: 20px;
}
</style>