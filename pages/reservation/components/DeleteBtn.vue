<template>
  <div class="container">
    <div class="row">
      <button
        v-for="each in timeList"
        :key="each"
        class="col-4 btn btn btn-light line-through"
        :title="$tc('reservation.click_to_delete')"
        @click="$emit('delete-time', each)"
      >
        {{ each }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'DeleteBtn',
})
export default class extends Vue {
  @Prop({ type: Array, required: true })
  timeList!: string[]
}
</script>

<style lang="scss" scoped>
.line-through {
  &:hover {
    text-decoration: line-through double red;
  }
}
</style>
