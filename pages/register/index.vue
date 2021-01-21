<template>
  <div class="bg-light">
    <article
      class="card-body mx-auto col-lg-4 col-md-6 col-sm-12"
      style="max-width: 400px"
    >
      <h4 class="card-title mt-3 text-center">
        {{ $tc('register.registration') }}
      </h4>
      <ValidationObserver ref="observer" v-slot="validation" slim>
        <form>
          <RegisterFormInput icon-class="fa fa-user">
            <template>
              <input
                v-model.trim="registerForm.username"
                class="form-control"
                :placeholder="$tc('register.username')"
                type="text"
              />
            </template>
          </RegisterFormInput>

          <RegisterFormInput icon-class="fa fa-lock">
            <template>
              <input
                v-model.trim="registerForm.password"
                class="form-control"
                :placeholder="$tc('register.password')"
                type="password"
              />
            </template>
          </RegisterFormInput>

          <RegisterFormInput icon-class="fa fa-lock">
            <template>
              <input
                v-model.trim="registerForm.confirmPassword"
                class="form-control"
                :placeholder="$tc('register.confirm_password')"
                type="password"
              />
            </template>
          </RegisterFormInput>

          <RegisterFormInput icon-class="fa fa-envelope">
            <template>
              <input
                v-model.trim="registerForm.email"
                class="form-control"
                placeholder="email"
                type="email"
              />
            </template>
          </RegisterFormInput>

          <RegisterFormInput icon-class="fas fa-calendar-week">
            <template>
              <input
                v-model.trim="registerForm.birthday"
                class="form-control"
                :placeholder="$tc('register.birthday')"
                type="text"
              />
            </template>
          </RegisterFormInput>

          <RegisterFormInput icon-class="fas fa-portrait">
            <template>
              <input
                v-model.trim="registerForm.imageURL"
                class="form-control"
                :placeholder="$tc('register.profile_picture')"
                type="text"
              />
            </template>
          </RegisterFormInput>

          <FormSubmitBtn
            :disabled="validation.invalid"
            :btn-word="$tc('register.registration')"
            @click-handler="handleRegister"
          />

          <p class="text-center">
            {{ $tc('register.already_have_an_account') }}
            <NuxtLink to="/login" class="text-success">{{
              $tc('login')
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
import { RegisterForm } from '~/@types'
import { FormSubmitBtn, RegisterFormInput } from '~/components'

@Component({
  components: {
    FormSubmitBtn,
    RegisterFormInput,
    ValidationObserver,
  },
  layout: 'default',
  meta: {
    auth: false,
  },
  name: 'Register',
})
export default class extends Vue {
  registerForm: RegisterForm = {} as RegisterForm
  handleRegister() {
    if (this.registerForm.password !== this.registerForm.confirmPassword) {
      alert('2個密碼不符')
    }
  }
}
</script>
