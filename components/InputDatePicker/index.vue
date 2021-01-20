<template>
  <DatePicker
    v-bind="attrs"
    :format="format"
    :editable="editable"
    :input-attr="{ id: $attrs.id }"
    :placeholder="placeholder"
    :type="type"
    :clearable="clearable"
    :value-type="valueType"
    :lang="$i18n.locale"
    v-on="listeners"
    @close="closeHandler"
    @open="openHandler"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { isMobileDevice } from '~/utils'

@Component({
  inheritAttrs: false,
  name: 'InputDatePicker',
})
export default class extends Vue {
  /** 格式化顯示日期 */
  @Prop({ type: String, default: 'YYYY/MM/DD' })
  format!: string

  /** 類型 (date, datetime) */
  @Prop({ type: String, default: 'date' })
  type!: string

  /** 格式化 v-model 日期 */
  @Prop({ type: String, default: 'YYYY/MM/DD' })
  valueType!: string

  /** Placeholder */
  @Prop({ type: String })
  placeholder!: string

  /** editable */
  @Prop({ type: Boolean, default: false })
  editable!: boolean

  /** 是否開啟 */
  isOpen = false

  /** Placeholder */
  get setPlaceholder() {
    return this.placeholder ? this.placeholder : this.$tc('please_select')
  }

  /** 屬性 */
  get attrs(): Record<string, string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...attrs } = this.$attrs
    return attrs
  }

  /** 事件 */
  get listeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { open, close, ...listeners } = this.$listeners
    return listeners
  }

  /** 是否顯示清除按鈕 */
  get clearable() {
    return !isMobileDevice() || this.isOpen
  }

  /** 當日期選擇器開啟時 */
  openHandler() {
    this.$emit('open')
    this.isOpen = true
  }

  /** 當日期選擇器關閉時 */
  closeHandler() {
    this.$emit('close')
    this.isOpen = false
  }
}
</script>
