<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">塔羅占卜</a>
    <LangSwitcher class="ml-auto" />
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LangSwitcher from '~/components/LangSwitcher/index.vue'

@Component({
  components: {
    LangSwitcher,
  },
  name: 'AppHeader',
})
export default class AppHeader extends Vue {}
</script>
