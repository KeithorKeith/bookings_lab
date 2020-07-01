<template lang="html">
  <div class="booking-wrapper">
      <booking-element v-for="(booking, index) in bookings" :key="index" :booking="booking" />
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import BookingElement from './BookingElement.vue'
import BookingService from '../services/BookingService.js'

export default {
    name: 'booking-display',
    props: ['bookings'],
    components: {
        'booking-element': BookingElement
    }
}
</script>

<style>

</style>