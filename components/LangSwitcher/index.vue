<template>
  <div>
    <NuxtLink
      v-for="{ label, key } in langs"
      :key="key"
      class="btn btn-primary ml-2"
      :to="switchLocalePath(key)"
    >
      {{ label }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'LangSwitcher',
})
export default class LangSwitcher extends Vue {
  langs = [
    { label: '中', key: 'zh-TW' },
    { label: 'EN', key: 'en' },
  ]
}
</script>
