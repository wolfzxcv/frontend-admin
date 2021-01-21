<template>
  <div class="card mx-auto col-lg-4 col-md-6 col-sm-12 mt-md-5">
    <article class="card-body">
      <h4 class="card-title text-center mb-4 mt-1">{{ $tc('login') }}</h4>
      <hr />
      <ValidationObserver ref="observer" v-slot="validation" slim>
        <form>
          <LoginFormInput>
            <template #icon>
              <i aria-hidden="true" class="fa fa-user"></i>
            </template>

            <template>
              <input
                v-model.trim="loginForm.username"
                class="form-control"
                :placeholder="$tc('register.username')"
                type="text"
              />
            </template>
          </LoginFormInput>

          <LoginFormInput>
            <template #icon>
              <i aria-hidden="true" class="fa fa-lock"></i>
            </template>

            <template>
              <input
                v-model.trim="loginForm.password"
                class="form-control"
                :placeholder="$tc('register.password')"
                type="password"
              />
            </template>
          </LoginFormInput>

          <LoginFormInput>
            <template #icon>
              <i aria-hidden="true" class="fas fa-key"></i>
            </template>

            <template>
              <input
                v-model.trim="loginForm.checkCode"
                class="form-control"
                :placeholder="$tc('register.verification_code')"
                type="text"
              />
              <Identify ref="identify" v-model="codes" class="mx-2" />
            </template>
          </LoginFormInput>

          <!-- form-group// -->
          <div class="form-group">
            <button
              type="submit"
              :disabled="validation.invalid"
              class="btn btn-primary btn-block"
              @click="handleLogin"
            >
              {{ $tc('login') }}
            </button>
          </div>
          <!-- form-group.// -->
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
import { LoginFormInput } from './components'
import { LoginForm } from '~/@types'
import { Identify } from '~/components'

@Component({
  components: {
    Identify,
    LoginFormInput,
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
    if (this.loginForm.checkCode !== this.codes) {
      alert('驗證碼錯誤')
    }
  }
}
</script>
