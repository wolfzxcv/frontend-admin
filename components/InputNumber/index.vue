<template>
  <input
    v-model.trim.number="internalValue"
    v-bind="$attrs"
    :class="classes"
    type="number"
    step="any"
    :placeholder="setPlaceholder"
    @blur="resetElValue"
    @change="resetElValue"
    v-on="listeners"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'

@Component({
  name: 'InputNumber',
})
export default class extends Vue {
  @Prop({ type: [String, Number], default: '' })
  value!: string | number

  @Prop({ type: [Object, Array, String], default: 'form-control' })
  classes!: object | string[] | string

  @Prop({ type: Boolean, default: false })
  lazy!: boolean

  @Prop({ type: String })
  placeholder!: string

  internalValue: string | number = ''

  get listeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...listeners } = this.$listeners

    if (this.lazy) {
      return {
        ...listeners,
        change: this.emitInput,
      }
    } else {
      return {
        ...listeners,
        input: this.emitInput,
      }
    }
  }

  @Watch('value', { immediate: true })
  private onValueWatch(newVal: string | number) {
    this.internalValue = newVal
    this.emitInput()
  }

  emitInput() {
    this.$emit('input', this.internalValue)
  }

  resetElValue(e: Event) {
    const el = e.target as HTMLInputElement

    // fix remove number text end of dot
    el.value = ''
    el.value = String(this.internalValue)
  }

  get setPlaceholder(): string {
    return this.placeholder ? this.placeholder : this.$tc('please_fill_in')
  }
}
</script>
