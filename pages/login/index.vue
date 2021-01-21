<template>
  <div class="card mx-auto col-lg-4 col-md-6 col-sm-12 mt-md-5">
    <article class="card-body">
      <h4 class="card-title text-center mb-4 mt-1">{{ $tc('login') }}</h4>
      <hr />
      <ValidationObserver ref="observer" v-slot="validation" slim>
        <form>
          <RegisterFormInput icon-class="fa fa-user">
            <template>
              <input
                v-model.trim="loginForm.username"
                class="form-control"
                :placeholder="$tc('register.username')"
                type="text"
              />
            </template>
          </RegisterFormInput>

          <RegisterFormInput icon-class="fa fa-lock">
            <template>
              <input
                v-model.trim="loginForm.password"
                class="form-control"
                :placeholder="$tc('register.password')"
                type="password"
              />
            </template>
          </RegisterFormInput>

          <RegisterFormInput icon-class="fas fa-key">
            <template>
              <input
                v-model.trim="loginForm.verificationCode"
                class="form-control"
                :placeholder="$tc('register.verification_code')"
                type="text"
              />
              <Identify ref="identify" v-model="codes" class="mx-2" />
            </template>
          </RegisterFormInput>

          <FormSubmitBtn
            :disabled="validation.invalid"
            :btn-word="$tc('login')"
            @click-handler="handleLogin"
          />

          <p class="text-center">
            <NuxtLink to="/" class="text-success">{{
              $tc('register.forgot_password')
            }}</NuxtLink>
            |
            <NuxtLink to="/register" class="text-success">{{
              $tc('register.registration')
            }}</NuxtLink>
          </p>
        </form>
      </ValidationObserver>
    </article>
  </div>
  <!-- card.// -->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationObserver } from 'vee-validate'
import { LoginForm } from '~/@types'
import { FormSubmitBtn, RegisterFormInput, Identify } from '~/components'

@Component({
  components: {
    FormSubmitBtn,
    Identify,
    RegisterFormInput,
    ValidationObserver,
  },
  layout: 'default',
  meta: {
    auth: false,
  },
  name: 'Login',
})
export default class extends Vue {
  codes: string = ''

  loginForm: LoginForm = {} as LoginForm

  handleLogin() {
    if (this.loginForm.verificationCode !== this.codes) {
      alert('驗證碼錯誤')
    }
  }
}
</script>
