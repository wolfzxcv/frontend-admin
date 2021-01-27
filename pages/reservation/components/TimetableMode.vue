<template>
  <div class="d-flex flex-column align-items-center">
    <ReservationHeader
      title="timetable_details"
      btn-word="edit"
      target-component="ReservationMode"
      v-on="$listeners"
    />

    <Table :data="syncTimetable" :columns="columns">
      <template #time="{ data: { time } }">
        <span v-for="each in time" :key="each" class="mr-3">
          {{ each }}
        </span>
      </template>
    </Table>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'nuxt-property-decorator'
import DeleteBtn from './DeleteBtn.vue'
import ReservationHeader from './ReservationHeader.vue'
import { Timetable } from '~/@types'
import { TableColumns } from '~/modules/base-components/@types'

@Component({
  components: {
    DeleteBtn,
    ReservationHeader,
  },
  name: 'TimetableMode',
})
export default class extends Vue {
  @PropSync('timetable', { type: Array, required: true })
  syncTimetable!: Timetable[]

  columns: TableColumns[] = [
    { title: '日期', dataIndex: 'date' },
    {
      title: '時間',
      slot: 'time',
      dataIndex: 'time',
    },
  ]
}
</script>
