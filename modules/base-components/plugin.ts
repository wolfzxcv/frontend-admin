import { Plugin } from '@nuxt/types'
import Vue from 'vue'

import { ComponentName } from './@types'

/** module 名稱 */
const moduleName = 'base-components'
/** module 設定選項名稱 */
const moduleOptionName = 'baseComponents'

const baseComponentPlugin: Plugin = () => {
  const options: ComponentName[] = JSON.parse('<%= serialize(options) %>')

  options.forEach((componentName) => {
    Vue.component(
      componentName,
      () => import(`./${moduleName}/components/${componentName}.vue`)
    )
  })
}

export default baseComponentPlugin
export { moduleName, moduleOptionName }
