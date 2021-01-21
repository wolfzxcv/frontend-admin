<template>
  <ValidationProvider v-slot="slot" :immediate="false" :rules="rules">
    <!-- form-group// -->
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <slot name="icon" />
          </span>
        </div>
        <slot />
        <div class="text-danger pl-1">
          {{ slot.invalid ? slot.errors[0] : '' }}
        </div>
      </div>
    </div>
    <!-- form-group.// -->
  </ValidationProvider>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ValidationProvider } from 'vee-validate'

@Component({
  components: {
    ValidationProvider,
  },
  name: 'LoginFormInput',
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false })
  immediate!: boolean

  @Prop({ type: String, default: 'required' })
  rules!: string
}
</script>
