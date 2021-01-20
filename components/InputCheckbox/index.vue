<template>
  <div :class="classes" v-on="rootListeners">
    <slot name="beforeInput" />

    <input
      :id="identityCode"
      ref="input"
      :checked="isChecked"
      :value="value"
      :class="__inputClass"
      type="checkbox"
      v-bind="$attrs"
      v-on="listeners"
    />

    <label :class="labelClasses" :for="identityCode" @click="input.click()">
      <slot name="label">
        <span v-if="label">{{ label }}</span>
      </slot>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model, Ref, Prop } from 'nuxt-property-decorator'

@Component({
  inheritAttrs: false,
  name: 'InputCheckbox',
})
export default class extends Vue {
  @Model('input', { type: [Array, Boolean] })
  readonly modelValue?: any[] | boolean

  @Ref() readonly input!: HTMLInputElement

  @Prop({ type: [Object, Array, String], default: 'form-check' })
  classes!: object | string[] | string

  @Prop({ type: [Object, Array, String], default: 'form-check-input' })
  inputClasses!: object | string[] | string

  @Prop({ type: [Object, Array, String], default: 'form-check-label' })
  labelClasses!: object | string[] | string

  @Prop({ type: [String, Number] })
  identityCode?: string | number

  @Prop({ type: Boolean, default: false })
  checked!: boolean

  @Prop()
  value?: any

  @Prop({ type: String, default: '' })
  label!: string

  @Prop({ type: Boolean, default: false })
  clickStop!: boolean

  @Prop({ type: Boolean, default: false })
  static!: boolean

  get __inputClass() {
    return [this.inputClasses, { staticText: this.static }]
  }

  get isChecked(): boolean {
    if (Array.isArray(this.modelValue)) {
      return this.modelValue.includes(this.value)
    }
    return !!this.modelValue || !!this.checked
  }

  get listeners(): Record<string, Function | Function[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, change, ...listeners } = this.$listeners

    return {
      ...listeners,
      change: this.inputHandler,
    }
  }

  get rootListeners(): Record<string, Function | Function[]> {
    return {
      click: (e: Event) => {
        if (this.clickStop) {
          e.stopPropagation()
        }
      },
    }
  }

  inputHandler(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked

    if (Array.isArray(this.modelValue)) {
      const newValue = [...this.modelValue]

      if (isChecked) {
        newValue.push(this.value)
      } else {
        newValue.splice(newValue.indexOf(this.value), 1)
      }

      this.$emit('input', newValue)
      this.$emit('change', newValue)
    } else {
      this.$emit('input', isChecked)
      this.$emit('change', isChecked)
    }
  }
}
</script>
