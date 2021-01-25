<template>
  <div class="mt-3 container d-flex flex-column align-items-center">
    <h2>預約系統</h2>
    <h3>可預約未來2週的時間</h3>
    <span>{{ date }}</span>
    <div class="d-flex">
      <ReservationDatePicker v-model="date" />
      <ReservationTimePicker v-model="time" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ReservationDatePicker, ReservationTimePicker } from './components'

@Component({
  components: {
    ReservationDatePicker,
    ReservationTimePicker,
  },
  name: 'Reservation',
})
export default class extends Vue {
  date: string = ''

  time: string[] = []

  outputData: any[] = []

  testCheckbox: string[] = ['aaa', 'bbb', 'ccc']

  checkList: string[] = []

  isEnable: boolean = false

  textarea: string = ''
}
</script>
