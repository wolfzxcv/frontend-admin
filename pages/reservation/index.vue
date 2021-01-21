<template>
  <div class="mt-3 container d-flex flex-column align-items-center">
    <h2>預約系統</h2>
    <h3>可預約未來3週的時間</h3>
    <span>{{ date }}</span>
    <div>
      <DatePicker
        v-model="date"
        format="YYYY-MM-DD"
        :default-value="new Date()"
        :disabled-date="onlyTomorrowTil3WeeksLater"
        :lang="$i18n.locale"
        inline
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'Reservation',
})
export default class extends Vue {
  date: string = ''
  onlyTomorrowTil3WeeksLater(date) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const range =
      date < new Date(today.getTime() + 1 * 24 * 3600 * 1000) ||
      date > new Date(today.getTime() + 21 * 24 * 3600 * 1000)

    return range
  }
}
</script>

<style></style>
