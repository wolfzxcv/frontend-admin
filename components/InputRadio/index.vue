<template>
  <div :class="classes">
    <input
      :id="identityCode"
      ref="input"
      :checked="isChecked"
      :value="value"
      :class="__inputClass"
      type="radio"
      v-bind="$attrs"
      v-on="listeners"
    />

    <label :class="labelClasses" :for="identityCode" @click="input.click()">
      <slot name="label">
        {{ label }}
      </slot>
    </label>
  </div>
</template>

<script lang="ts">
import { isEqual } from 'lodash'
import { Component, Vue, Model, Ref, Prop } from 'nuxt-property-decorator'

@Component({
  inheritAttrs: false,
  name: 'InputRadio',
})
export default class extends Vue {
  @Model('input')
  readonly modelValue?: any

  @Ref() readonly input!: HTMLInputElement

  @Prop({ type: [Object, Array, String], default: 'form-check' })
  classes!: object | string[] | string

  @Prop({ type: [Object, Array, String], default: 'form-check-input' })
  inputClasses!: object | string[] | string

  @Prop({ type: [Object, Array, String], default: 'form-check-label' })
  labelClasses!: object | string[] | string

  @Prop({ type: Boolean, default: false })
  checked!: boolean

  @Prop({ required: true })
  value!: any

  @Prop({ type: [String, Number] })
  identityCode?: string | number

  @Prop({ type: String, default: '' })
  label!: string

  @Prop({ type: Boolean, default: false })
  static!: boolean

  get __inputClass() {
    return [this.inputClasses, { staticText: this.static }]
  }

  get isChecked(): boolean {
    return this.checked || isEqual(this.modelValue, this.value)
  }

  get listeners(): Record<string, Function | Function[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, change, ...listeners } = this.$listeners

    return {
      ...listeners,
      change: this.inputHandler,
    }
  }

  inputHandler() {
    this.$emit('input', this.value)
    this.$emit('change', this.value)
  }
}
</script>
