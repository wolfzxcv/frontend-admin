<template>
  <div>
    <AppHeader />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { AppHeader } from '~/components'

@Component({
  components: {
    AppHeader,
  },
})
export default class Index extends Vue {}
</script>
