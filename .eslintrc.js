module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-undef': 'warn',
    'import/named': 'warn',
    'prettier/prettier': 'warn',

    /*****************************************
     * Eslint 規則
     * DOC: https://eslint.org/docs/rules
     * 文件: https://cn.eslint.org/docs/rules
     ****************************************/
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    // class 成員需空行 (警告)
    'lines-between-class-members': ['warn'],

    // console (只在 development 允許)
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    /***********************************
     * Vue Eslint 規則
     * https://eslint.vuejs.org/rules/
     **********************************/
    // Vue script, 未使用的組件 (警告)
    'vue/no-unused-components': 'warn',

    // Vue template, 不使用 v-html (關閉)
    'vue/no-v-html': 'off',

    // Vue template, HTML Tag 關閉規則 (警告)
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'any',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],

    // Vue template, Component 命名規則
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: ['notifications', 'i18n'],
      },
    ],

    // Vue template, attribute 命名
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: [],
      },
    ],

    'vue/no-parsing-error': 'off',

    /***********************************
     * other plugins
     **********************************/

    'import/no-unresolved': [
      'warn',
      {
        caseSensitive: true,
      },
    ],

    // import 排序
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
}
