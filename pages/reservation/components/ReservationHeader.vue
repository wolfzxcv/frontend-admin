<template>
  <h2>
    {{ $tc(`reservation.${title}`) }}
    <button
      class="btn btn-success"
      :title="$tc('reservation.switch_mode')"
      @click="$emit('change-component', targetComponent)"
    >
      {{ $tc(btnWord) }}
    </button>

    <button class="btn btn-primary" @click="$emit('save-handler')">
      {{ $tc('save') }}
    </button>
  </h2>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'ReservationHeader',
})
export default class extends Vue {
  @Prop({ type: String, required: true })
  targetComponent!: string

  @Prop({ type: String, required: true })
  title!: string

  @Prop({ type: String, required: true })
  btnWord!: string
}
</script>
