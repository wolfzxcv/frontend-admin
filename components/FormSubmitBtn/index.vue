<template>
  <!-- form-group// -->
  <div class="form-group">
    <button
      type="submit"
      :disabled="disabled"
      class="btn btn-primary btn-block"
      @click.prevent="$emit('click-handler')"
    >
      {{ btnWord }}
    </button>
  </div>
  <!-- form-group.// -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'FormSubmitBtn',
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false })
  disabled!: boolean

  @Prop({ type: String, required: true })
  btnWord!: string
}
</script>
