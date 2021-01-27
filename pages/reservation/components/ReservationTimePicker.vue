<template>
  <div class="time-picker">
    <div class="d-flex align-items-center">
      <InputSelect
        v-model="hour"
        placeholder=""
        class="time"
        :options="hourList"
      />
      {{ '：' }}
      <InputSelect
        v-model="minute"
        placeholder=""
        class="time"
        :options="minuteList"
      />

      <button
        class="btn btn-success ml-4"
        :disabled="!hour || !minute || !date"
        @click="addTime"
      >
        {{ $tc('reservation.add_time') }}
      </button>
    </div>
    <DeleteBtn :time-list="timeList" @delete-time="deleteTime" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import DeleteBtn from './DeleteBtn.vue'
import { Timetable } from '~/@types'
import { InputSelect } from '~/components'

@Component({
  components: {
    DeleteBtn,
    InputSelect,
  },
  name: 'ReservationTimePicker',
})
export default class extends Vue {
  @Prop({ type: Array, default: () => [] })
  value!: Timetable[]

  @Prop({ type: String, required: true })
  date!: string

  hour: string = ''
  minute: string = ''

  hourList: string[] = []

  minuteList: string[] = ['00', '30']

  // timeList 改變, output 改變 => {date: '2020-01-25', time: timeList}
  timeList: string[] = []

  mounted() {
    for (let i = 0; i <= 23; i++) {
      const hour = i.toString().length === 1 ? '0' + i.toString() : i.toString()
      this.hourList.push(hour)
    }
  }

  resetTime() {
    this.hour = ''
    this.minute = ''
  }

  addTime() {
    const newTime = `${this.hour}:${this.minute}`

    if (this.timeList.includes(newTime)) {
      alert('時間重複')
    } else {
      this.timeList.push(newTime)

      this.timeList = this.timeList.sort()

      this.resetTime()
      this.formatOutput(this.date, this.timeList)
    }
  }

  deleteTime(time: string) {
    this.timeList = this.timeList.filter((x) => x !== time)
    this.formatOutput(this.date, this.timeList)
  }

  formatOutput(date: string, timeList: string[]) {
    let newInput
    if (this.value.find((x) => x.date === date)) {
      newInput = this.value.map((x) => {
        if (x.date === date) {
          return { date: x.date, time: timeList }
        } else {
          return x
        }
      })
    } else {
      newInput = [...this.value, { date, time: timeList }]
    }

    newInput = newInput.sort((a, b) => a.date.localeCompare(b.date))

    this.$emit('input', newInput)
  }

  @Watch('date')
  onDateChagned(date: string) {
    this.timeList = this.value.find((x) => x.date === date)?.time || []
  }
}
</script>

<style lang="scss" scoped>
.time-picker {
  max-width: 400px;

  .time {
    width: 80px;
  }
}
</style>
