<template>
  <div class="card mx-auto col-lg-4 col-md-6 col-sm-12 mt-md-5">
    <article class="card-body">
      <h4 class="card-title text-center mb-4 mt-1">登入</h4>
      <hr />
      <form>
        <!-- form-group// -->
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i aria-hidden="true" class="fa fa-user"></i>
              </span>
            </div>
            <input
              name=""
              class="form-control"
              placeholder="用戶名稱"
              type="text"
            />
          </div>
        </div>
        <!-- form-group.// -->
        <!-- form-group// -->
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i aria-hidden="true" class="fa fa-lock"></i>
              </span>
            </div>
            <input class="form-control" placeholder="密碼" type="password" />
          </div>
        </div>
        <!-- form-group.// -->
        <!-- form-group// -->
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i aria-hidden="true" class="fas fa-key"></i>
              </span>
            </div>
            <input class="form-control" placeholder="驗證碼" type="text" />
            <Identify ref="identify" v-model="codes" class="mx-2" />
          </div>
        </div>
        <!-- form-group.// -->
        <!-- form-group// -->
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-primary btn-block"
            @click="handleLogin"
          >
            Login
          </button>
        </div>
        <!-- form-group.// -->
        <p class="text-center">
          <NuxtLink to="/" class="text-success">忘記密碼?</NuxtLink>
          |
          <NuxtLink to="/register" class="text-success">註冊會員</NuxtLink>
        </p>
      </form>
    </article>
  </div>
  <!-- card.// -->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Identify } from '~/components'

@Component({
  components: {
    Identify,
  },
  layout: 'default',
  meta: {
    auth: false,
  },
  name: 'Login',
})
export default class extends Vue {
  codes: string = ''
}
</script>
