<template>
  <ValidationProvider
    v-slot="data"
    class="position-relative"
    :rules="rules"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot v-bind="{ ...data }" />
    <div class="error_label">{{ data.errors[0] }}</div>
  </ValidationProvider>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'ValidateContainer',
  inheritAttrs: false
})
export default class ValidateContainer extends Vue {
  @Prop({ type: String, default: '' })
  rules!: string
}
</script>

<style lang="scss" scoped>
.error_label {
  font-size: 14px;
  color: red;
  position: absolute;
  white-space: nowrap;
}
</style>
