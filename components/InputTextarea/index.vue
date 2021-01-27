<template>
  <textarea
    v-model.trim="internalValue"
    v-observe-visibility="observeOptions"
    :rows="rows"
    :style="style"
    class="form-control"
    :disabled="disabled"
    :placeholder="setPlaceholder"
    v-on="listeners"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'

@Component({
  name: 'InputTextarea',
})
export default class extends Vue {
  @Prop({ type: String, default: '' })
  value!: string

  @Prop({ type: [String, Number] })
  rows?: string | number

  @Prop({ type: Boolean, default: true })
  autoResize!: boolean

  @Prop({ type: Boolean, default: false })
  disabled!: boolean

  @Prop({ type: String })
  placeholder!: string

  height: string = 'auto'

  /** 避免 Resize */
  dontResize = false

  get internalValue() {
    return this.value
  }

  set internalValue(newVal) {
    this.$emit('input', newVal)
  }

  get minHeight(): number {
    const rowH = 32
    const rows =
      typeof this.rows === 'string' ? parseFloat(this.rows) : this.rows

    let minH: number
    if (rows && !isNaN(rows)) {
      minH = rows * rowH
    } else {
      minH = rowH
    }
    return minH
  }

  get style(): Record<string, string> {
    return {
      height: this.height,
      'min-height': `${this.minHeight}px`,
    }
  }

  get listeners(): Record<string, Function | Function[]> {
    return {
      ...this.$listeners,
      // override parent v-model input event
      input: this.resizeHandler,
      blur: this.resizeHandler,
      focus: this.focusHandler,
    }
  }

  get setPlaceholder(): string {
    return this.placeholder ? this.placeholder : this.$tc('please_fill_in')
  }

  focusHandler() {
    // 當 focus 時不重新調整高度
    this.dontResize = true
  }

  get observeOptions() {
    return {
      callback: this.visibilityChanged,
      once: true,
    }
  }

  @Watch('value')
  private onValueChange() {
    this.resizeHandler()
  }

  mounted() {
    this.resizeHandler()
  }

  visibilityChanged(isVisible: boolean, _: IntersectionObserverEntry) {
    if (isVisible) {
      this.resizeHandler()
    }
  }

  resizeHandler() {
    if (this.autoResize) {
      this.setHeight()
    }
  }

  setHeight() {
    if (process.server) {
      return
    }

    // 當 focus 時不重新調整高度
    if (this.dontResize) {
      this.dontResize = false
      return
    }

    this.height = 'auto'

    this.$nextTick(() => {
      this.height = `${this.$el.scrollHeight}px`
    })
  }
}
</script>

<style lang="scss" scoped>
textarea {
  overflow: hidden;
}
</style>
