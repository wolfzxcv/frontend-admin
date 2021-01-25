import { Module } from '@nuxt/types'

const importCssModule: Module = function () {
  this.options.css = this.options.css || []

  /**
   * 引入 global css
   */
  this.options.css.push('~/assets/scss/style.scss')
}

export default importCssModule
