<template>
  <VueMultiselect
    ref="multiselect"
    v-bind="$attrs"
    :multiple="multiple"
    :options="formatOptions"
    :value="internalValue"
    :show-labels="showLabels"
    :placeholder="setPlaceholder"
    :track-by="trackBy"
    :select-all="selectAll"
    :searchable="searchable"
    v-on="listeners"
  >
    <template #noResult>
      <span>查無資料</span>
    </template>

    <template #noOptions>
      <span>查無資料</span>
    </template>

    <template v-for="(_, slot) in $scopedSlots" #[slot]="slotData">
      <slot :name="slot" v-bind="slotData" />
    </template>
  </VueMultiselect>
</template>

<script lang="ts">
import { isEqual } from 'lodash'
import { Component, mixins, Ref, Prop, Watch } from 'nuxt-property-decorator'
import VueMultiselect from 'vue-multiselect'
import { FixIEClickActivateMixins } from './mixins'
import { notEmpty } from '~/utils'

@Component({
  components: {
    VueMultiselect,
  },
  inheritAttrs: false,
  name: 'InputSelect',
})
export default class extends mixins(FixIEClickActivateMixins) {
  @Ref() readonly multiselect!: VueMultiselect

  /**
   * Presets the selected options value.
   * @type {Object||Array||String||Integer}
   */
  @Prop({ required: true })
  value!: any[] | any

  /** 選項列表 */
  @Prop({ type: Array, default: () => [] })
  options!: any[]

  /** 選項上顯示標籤 */
  @Prop({ type: Boolean, default: false })
  showLabels!: boolean

  /** 是否可搜尋 */
  @Prop({ type: Boolean, default: false })
  searchable!: boolean

  /** placeholder */
  @Prop({ type: String })
  placeholder!: string

  /** ID Key */
  @Prop({ type: String })
  trackBy?: string

  /** 是否依 tackBy 簡化 value */
  @Prop({ type: Boolean, default: false })
  reduce!: boolean

  /** 是否多選 */
  @Prop({ type: Boolean, default: false })
  multiple!: boolean

  /** 是否要選擇全部 */
  @Prop({ type: Boolean, default: false })
  selectAll!: boolean

  /** 全部選項 */
  @Prop({ type: Function })
  selectAllOption?: () => any

  /** 暫存選項, reduce 使用 */
  optionsCache: any[] = []

  get setPlaceholder(): string {
    return notEmpty(this.placeholder)
      ? this.placeholder
      : this.$tc('please_select')
  }

  get formatOptions() {
    if (!this.options.length) {
      return this.options
    }

    /** 增加選擇全部選項 */
    if (this.selectAll) {
      let allOption = {
        [this.trackBy || 'value']: '',
        [this.$attrs.label]: '全部',
      }

      if (typeof this.selectAllOption === 'function') {
        allOption = this.selectAllOption()
      }

      return [allOption, ...this.options]
    }
    return this.options
  }

  /** 格式化 value */
  get internalValue() {
    let value = this.value

    if (this.reduce) {
      if (this.multiple && Array.isArray(value)) {
        value = this.optionsCache.filter((option) =>
          value.some((item) => isEqual(this.reduceValue(option), item))
        )
      } else {
        value = this.optionsCache.find((option) =>
          isEqual(this.reduceValue(option), value)
        )
      }
    }
    return value
  }

  get listeners() {
    return Object.assign({}, this.$listeners, {
      input: this.inputHandler,
    })
  }

  @Watch('value', { immediate: true })
  private onValueChange(newVal: any[] | any) {
    // cache selected options
    this.cacheOptions(newVal)
  }

  @Watch('options', { immediate: true })
  private onOptionsChange() {
    // cache selected options
    this.cacheOptions(this.value)
  }

  reduceValue(value) {
    return value && this.trackBy ? value[this.trackBy] : value
  }

  inputHandler(value) {
    let _value = value

    if (this.reduce) {
      if (this.multiple && Array.isArray(value)) {
        _value = value.map((item) => this.reduceValue(item))
      } else {
        _value = this.reduceValue(value)
      }
    }

    // cache selected options
    this.cacheOptions(_value)

    this.$emit('input', _value)
  }

  /**
   * 暫存選項
   * @value (已處理資料)
   */
  cacheOptions(value) {
    let options: any[] = []

    // fetch selected options
    if (this.multiple && Array.isArray(value)) {
      options = this.options.filter((option) =>
        value.some((item) => {
          const identity = this.reduce ? item : this.reduceValue(item)

          return isEqual(this.reduceValue(option), identity)
        })
      )
    } else {
      options = this.options.filter((option) => {
        const identity = this.reduce ? value : this.reduceValue(value)

        return isEqual(this.reduceValue(option), identity)
      })
    }

    // cache
    options.forEach((option) => {
      const index = this.optionsCache.findIndex((cache) =>
        isEqual(this.reduceValue(cache), this.reduceValue(option))
      )

      if (index === -1) {
        this.optionsCache.push(option)
      } else {
        // fix when update options, replace existing elements
        this.optionsCache.splice(index, 1, option)
      }
    })
  }

  focus() {
    ;(this.multiselect.$el as HTMLElement).focus()
  }

  blur() {
    ;(this.multiselect.$el as HTMLElement).blur()
  }
}
</script>
