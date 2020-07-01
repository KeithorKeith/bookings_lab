<template lang-"html">
  <div>
      <booking-element v-for="(booking, index) in bookings" :key="index" :booking="booking"></booking-element>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import BookingElement from './BookingElement.vue'
import BookingService from '../services/BookingService'

export default {
    props: ['bookings'],
    components: {
        'booking-element': BookingElement
    }
}
</script>

<style>

</style>