<template lang="html">
<div class="booking-element">
    <h2>{{ booking.name }}</h2>
    <p>Email Adress: {{ booking.email }}</p>
    <p>Check In: {{ booking.checkedIn }}</p>
    <button type="button" class="delete-btn" v-on:click="deleteBooking"></button>
</div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>