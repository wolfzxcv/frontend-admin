import path from 'path'
import { Module } from '@nuxt/types'
import { VeeValidateModuleOptions } from './@types'
import { components, moduleName, moduleOptionName } from './plugin'

const veeValidateModule: Module<VeeValidateModuleOptions> = function (
  moduleOptions
) {
  const options: VeeValidateModuleOptions = {
    ...moduleOptions,
    ...this.options[moduleOptionName],
  }

  // 新增套件
  this.addPlugin({
    name: `${moduleName}.js`,
    src: path.resolve(__dirname, 'plugin.ts'),
    options,
  })

  // 新增套件
  this.addPlugin({
    name: `${moduleName}.locale.js`,
    src: path.resolve(__dirname, 'locale.ts'),
    options,
  })

  // 新增套件
  this.addPlugin({
    name: `${moduleName}.rules.js`,
    src: path.resolve(__dirname, 'rules.ts'),
    options,
  })

  // 新增組件模板
  components.forEach((name) => {
    this.addTemplate({
      fileName: `${moduleName}/components/${name}.vue`,
      src: path.resolve(__dirname, `./components/${name}.vue`),
    })
  })
}

export default veeValidateModule
