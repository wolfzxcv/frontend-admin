<template>
  <div class="mt-3 container">
    <Component
      :is="currentComponent"
      :timetable.sync="timetable"
      @change-component="setComponentName"
      @save-handler="save"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ReservationMode, TimetableMode } from './components'
import { Timetable } from '~/@types'

@Component({
  components: {
    ReservationMode,
    TimetableMode,
  },
  name: 'Reservation',
})
export default class extends Vue {
  /** 目前所顯示的頁籤 component */
  currentComponent: 'ReservationMode' | 'TimetableMode' = 'ReservationMode'

  setComponentName(componentName: 'ReservationMode' | 'TimetableMode') {
    this.currentComponent = componentName
  }

  save() {
    console.log('打api,存進資料庫')
  }

  timetable: Timetable[] = []
}
</script>
