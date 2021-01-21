<template>
  <div class="form-group d-flex align-items-center">
    <label
      :class="getLabelClass"
      class="form-group__label p-0s"
      :for="labelFor"
    >
      {{ label }}
    </label>

    <div v-if="rules" :class="getInputClass">
      <ValidateContainer v-slot="data" :rules="rules">
        <slot v-bind="{ ...data }" />
      </ValidateContainer>
    </div>

    <div v-else :class="getInputClass">
      <slot />
    </div>

    <slot name="suffix" :class="suffixClass" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'FormGruop'
})
export default class ValidateInput extends Vue {
  @Prop({ type: String, default: '' })
  inputClass!: string

  @Prop({ type: String, default: '' })
  label!: string

  @Prop({ type: String, default: '' })
  labelClass!: string

  @Prop({ type: String, default: '' })
  labelFor!: string

  @Prop({ type: String, default: '' })
  rules!: string

  @Prop({ type: String, default: '' })
  suffixClass!: string

  get getInputClass() {
    return this.inputClass || 'col-9'
  }

  get getLabelClass() {
    return this.labelClass || ''
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 25px;
}

.form-group__label {
  font-size: 16px;
  color: #000;
  text-align: right;
  letter-spacing: 1.5px;
  width: 90px;
  margin-bottom: 0;
}
</style>
