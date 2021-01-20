import { Component, Vue, Ref } from 'nuxt-property-decorator'

/***********************
 * IE 點擊 tags 區域展開
 ***********************/
@Component
export default class FixedDropdownMixins extends Vue {
  @Ref() readonly multiselect!: any

  mounted() {
    this.bindTagsMousedownHandler()
  }

  beforeDestroy() {
    this.unbindTagsMousedownHandler()
  }

  bindTagsMousedownHandler() {
    const $tags = (this.multiselect as Vue).$refs.tags as HTMLElement

    $tags.addEventListener('mousedown', this.clickActivateHandler)
  }

  unbindTagsMousedownHandler() {
    const $tags = (this.multiselect as Vue).$refs.tags as HTMLElement

    $tags.removeEventListener('mousedown', this.clickActivateHandler)
  }

  clickActivateHandler(e: Event) {
    const target = e.target as Element
    const { searchable, activate, toggle } = this.multiselect

    if (
      // ignore element
      target.classList.contains('multiselect__tag-icon') ||
      target.classList.contains('multiselect__select') ||
      target.classList.contains('multiselect__single') ||
      target.classList.contains('multiselect__placeholder')
    ) {
      return
    }

    if (!searchable) {
      toggle()
      return
    }

    activate()
  }
}
