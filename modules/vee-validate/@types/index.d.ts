/** VeeValidate Modal 設定 */
export interface VeeValidateModuleOptions {
  i18n?: any
}

declare module 'vue/types/vue' {
  interface Vue {}
}

declare module '@nuxt/types' {
  interface Configuration {
    veeValidate?: VeeValidateModuleOptions
  }

  interface NuxtAppOptions {}
}

declare module 'vuex/types/index' {
  interface Store<S> {}
}
