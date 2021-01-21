import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import DatePicker from 'vue2-datepicker'
import en from 'vue2-datepicker/locale/en'
import zhTW from 'vue2-datepicker/locale/zh-tw'

/** module 名稱 */
const moduleName = 'vue2-datepicker'
/** module 設定選項名稱 */
const moduleOptionName = moduleName

const datepickerPlugin: Plugin = () => {
  DatePicker.locale('en', en)
  DatePicker.locale('zh-tw', zhTW)

  Vue.component('DatePicker', DatePicker)
}

export default datepickerPlugin
export { moduleName, moduleOptionName }
