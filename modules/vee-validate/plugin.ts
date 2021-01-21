import { Plugin } from '@nuxt/types'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Vue from 'vue'

import { VeeValidateModuleOptions } from './@types'

/** components 名稱列表 */
const components = ['ValidateContainer', 'FormGroup']
/** module 名稱 */
const moduleName = 'vee-validate'
/** module 設定選項名稱 */
const moduleOptionName = 'veeValidate'
/** module Vue property 名稱 */
const modulePropertyName = `$veeValidate`

const veeValidatePlugin: Plugin = () => {
  const options: VeeValidateModuleOptions = JSON.parse(
    '<%= serialize(options) %>'.replace(/undefined/g, '""')
  )

  // const {} = options

  Vue.prototype[modulePropertyName] = {
    // 選項
    options,
  }

  Vue.component('ValidationObserver', ValidationObserver)
  Vue.component('ValidationProvider', ValidationProvider)

  // 註冊組件
  components.forEach((componentName) => {
    Vue.component(
      componentName,
      () => import(`./${moduleName}/components/${componentName}.vue`)
    )
  })
}

export default veeValidatePlugin
export { components, moduleName, moduleOptionName, modulePropertyName }
