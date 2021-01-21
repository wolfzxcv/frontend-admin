import { Plugin } from '@nuxt/types'
import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

import customRules from '~/modules/vee-validate/rules/index'

const rulesPlugin: Plugin = () => {
  for (const [rule, validation] of Object.entries(rules)) {
    extend(rule, {
      ...validation,
    })
  }

  for (const [rule, validation] of Object.entries(customRules)) {
    extend(rule, {
      ...validation,
    })
  }
}

export default rulesPlugin
