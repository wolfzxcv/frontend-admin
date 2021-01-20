/* eslint-disable camelcase */
import VueI18n from 'vue-i18n'

import { Common } from './common'
import { Components } from './components'
import { Main } from './main'
import { Notify } from './notify'
import { Sweetalert } from './sweetalert'

type Message = {
  components: Components
  notify: Notify
  sweetalert: Sweetalert
  main: Main
} & Common

export type Locales = 'en' | 'zh-tw'
export type I18nMessage = Message & VueI18n.LocaleMessageObject
