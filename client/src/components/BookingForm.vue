<template>
  <div>
      <form class="booking-form" v-on:submit="handleBooking">
          <label for="name-field">Enter name:</label>
          <input type="text" id="name-field" v-model="name">

          <label for="email-field">Email:</label>
          <input type="text" id="email-field" v-model="email">

          <label for="checked-in-field">Checked in:</label>
          <select name="checked-in" id="checked-in-field" v-model="checkedIn">
              <option value="true">Yes</option>
              <option value="false">No</option>
          </select>

          <input type="submit" id="submit-field" value="Submit details" />
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            checkedIn: null
        }
    },
    method: {
        handleBooking: function
    }
}
</script>

<style>

</style>