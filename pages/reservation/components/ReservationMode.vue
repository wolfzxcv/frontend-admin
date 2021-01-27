<template>
  <div class="d-flex flex-column align-items-center">
    <ReservationHeader
      title="reservation"
      btn-word="view"
      target-component="TimetableMode"
      v-on="$listeners"
    />

    <h3>{{ $tc('reservation.incoming_time_is_editable') }}</h3>

    <div class="d-flex picker-rwd">
      <ReservationDatePicker v-model="date" />
      <ReservationTimePicker v-model="syncTimetable" :date="date" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'nuxt-property-decorator'
import ReservationDatePicker from './ReservationDatePicker.vue'
import ReservationHeader from './ReservationHeader.vue'
import ReservationTimePicker from './ReservationTimePicker.vue'

import { Timetable } from '~/@types'

@Component({
  components: {
    ReservationDatePicker,
    ReservationHeader,
    ReservationTimePicker,
  },
  name: 'ReservationMode',
})
export default class extends Vue {
  @PropSync('timetable', { type: Array, required: true })
  syncTimetable!: Timetable[]

  date: string = ''
}
</script>

<style lang="scss" scoped>
@media (min-width: 769px) {
  .picker-rwd {
    .time-picker {
      margin-left: 3rem;
    }
  }
}
@media (max-width: 768px) {
  .picker-rwd {
    flex-direction: column;
    align-items: center;
    .time-picker {
      margin-top: 2rem;
    }
  }
}
</style>
