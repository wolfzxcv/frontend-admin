import path from 'path'
import { Module } from '@nuxt/types'
import { ComponentName } from './@types'
import { moduleName } from './plugin'

/** 組件名稱列表 */
const components: ComponentName[] = ['Table']

const baseComponentsModule: Module = function () {
  /** module 選項 */
  const options: ComponentName[] = components

  // 新增套件
  this.addPlugin({
    name: `${moduleName}.js`,
    src: path.resolve(__dirname, 'plugin.ts'),
    options,
  })

  // 註冊組件
  options.forEach((componentName) => {
    this.addTemplate({
      fileName: `${moduleName}/components/${componentName}.vue`,
      src: path.resolve(__dirname, `./components/${componentName}.vue`),
    })
  })
}

export default baseComponentsModule
