import { Plugin } from '@nuxt/types'
import { localize } from 'vee-validate'
import en from 'vee-validate/dist/locale/en.json'
import zhTW from 'vee-validate/dist/locale/zh_TW.json'

import { i18nValidate } from '~/i18n'

const localePlugin: Plugin = () => {
  localize({
    en: {
      ...en,
      messages: {
        ...en.messages,
        ...(i18nValidate.en as any),
      },
    },
    'zh-tw': {
      ...zhTW,
      messages: {
        ...zhTW.messages,
        ...(i18nValidate.zhTW as any),
      },
    },
  })
}

export default localePlugin
