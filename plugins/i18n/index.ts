import { Plugin } from '@nuxt/types'
import { localize } from 'vee-validate'

const i18nPlugin: Plugin = ({ app }) => {
  // vee-validate Setting the locale
  localize(app.i18n.locale)

  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (_oldLocale, newLocale) => {
    // vee-validate localize
    localize(newLocale)
  }

  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (_oldLocale, _newLocale) => {}
}

export default i18nPlugin
