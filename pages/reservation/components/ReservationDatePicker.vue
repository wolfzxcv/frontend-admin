<template>
  <div>
    <DatePicker
      v-bind="$attrs"
      format="YYYY-MM-DD"
      type="date"
      value-type="format"
      :default-value="today"
      :not-before="today"
      :disabled-date="onlyTodayTil2WeeksLater"
      :lang="$i18n.locale"
      inline
      v-on="$listeners"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'ReservationDatePicker',
})
export default class extends Vue {
  get today(): string {
    return this.$dayjs(new Date()).format('YYYY-MM-DD')
  }

  get twoWeeksLater(): string {
    return this.$dayjs(
      this.$dayjs(new Date()).date(this.$dayjs().date() + 14)
    ).format('YYYY-MM-DD')
  }

  onlyTodayTil2WeeksLater(date) {
    const startDate = new Date(Date.parse(this.today))
    const endDate = new Date(Date.parse(this.twoWeeksLater))

    const range = date < startDate || date > endDate

    return range
  }
}
</script>
