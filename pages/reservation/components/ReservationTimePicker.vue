<template>
  <div class="ml-5" style="width: 400px">
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
        :disabled="!hour || !minute"
        @click="addTime"
      >
        加入時間
      </button>
    </div>
    <div class="container mt-3">
      <div class="row">
        <button
          v-for="each in timeList"
          :key="each"
          class="col-4 btn btn btn-light line-through"
          title="點擊刪除"
          @click="deleteTime(each)"
        >
          {{ each }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { InputSelect } from '~/components'

@Component({
  components: {
    InputSelect,
  },
  name: 'ReservationTimePicker',
})
export default class extends Vue {
  hour: string = ''
  minute: string = ''

  hourList: string[] = []

  minuteList: string[] = ['00', '30']

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
    }
  }

  deleteTime(time: string) {
    this.timeList = this.timeList.filter((x) => x !== time)
  }
}
</script>

<style lang="scss" scoped>
.time {
  width: 80px;
}

.line-through {
  &:hover {
    text-decoration: line-through double red;
  }
}
</style>
