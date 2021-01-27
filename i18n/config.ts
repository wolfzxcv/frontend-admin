import { NuxtVueI18n } from 'nuxt-i18n'

import { en, zhTW } from './langs'

const locales: (string | NuxtVueI18n.Options.LocaleObject)[] = [
  {
    code: 'en',
    iso: 'en',
    name: 'EN',
  },
  {
    code: 'zh-TW',
    iso: 'zh',
    name: '繁',
  },
]

const localesCode: string[] = locales.map((locale) => {
  if (typeof locale === 'string') {
    return locale
  } else {
    return locale.code
  }
})

const config: NuxtVueI18n.Options.AllOptionsInterface = {
  locales,
  defaultLocale: 'zh-TW',
  vueI18n: {
    fallbackLocale: 'zh-TW',
    messages: {
      en,
      'zh-TW': zhTW,
    },
  },
  vuex: false,
}

export default config
export { locales, localesCode }
