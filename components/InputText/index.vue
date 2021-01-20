<template>
  <input
    v-model.trim="internalValue"
    type="text"
    class="form-control"
    :placeholder="setPlaceholder"
    @input="$emit('input', $event.target.value)"
    v-on="listeners"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'InputText',
  inheritAttrs: false,
})
export default class extends Vue {
  @Prop({ type: [String, Number], default: '' })
  value!: string | number

  @Prop({ type: String })
  placeholder!: string

  get internalValue() {
    return this.value
  }

  set internalValue(newVal) {
    this.$emit('input', newVal)
  }

  get listeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...listeners } = this.$listeners
    return listeners
  }

  get setPlaceholder(): string {
    return this.placeholder ? this.placeholder : this.$tc('please_fill_in')
  }
}
</script>
