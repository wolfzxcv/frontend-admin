import path from 'path'
import { Module } from '@nuxt/types'
import { moduleName } from './plugin'

const datepickerModule: Module = function (moduleOptions) {
  /** module 選項 */
  const options = {
    ...moduleOptions,
    ...this.options[moduleName],
  }

  this.options.css = this.options.css || []
  // 引入 datepicker css
  this.options.css.push('vue2-datepicker/index.css')

  // 新增套件
  this.addPlugin({
    name: `${moduleName}.js`,
    src: path.resolve(__dirname, 'plugin.ts'),
    options,
  })
}

export default datepickerModule
