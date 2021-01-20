<template>
  <div class="bg-light">
    <article
      class="card-body mx-auto col-lg-4 col-md-6 col-sm-12"
      style="max-width: 400px"
    >
      <h4 class="card-title mt-3 text-center">註冊帳號</h4>

      <form>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i aria-hidden="true" class="fa fa-user"></i>
            </span>
          </div>
          <input
            name=""
            class="form-control"
            placeholder="用戶名稱(帳號)"
            type="text"
          />
        </div>
        <!-- form-group// -->
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i aria-hidden="true" class="fa fa-envelope"></i>
            </span>
          </div>
          <input
            name=""
            class="form-control"
            placeholder="Email"
            type="email"
          />
        </div>
        <!-- form-group// -->
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i aria-hidden="true" class="fas fa-portrait"></i>
            </span>
          </div>
          <input
            name=""
            class="form-control"
            placeholder="大頭貼"
            type="text"
          />
        </div>
        <!-- form-group// -->
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i aria-hidden="true" class="fas fa-calendar-week"></i>
            </span>
          </div>
          <input
            name=""
            class="form-control"
            placeholder="出生西元年月日"
            type="text"
          />
        </div>
        <!-- form-group end.// -->
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i aria-hidden="true" class="fa fa-lock"></i>
            </span>
          </div>
          <input class="form-control" placeholder="密碼" type="password" />
        </div>
        <!-- form-group// -->
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i aria-hidden="true" class="fa fa-lock"></i>
            </span>
          </div>
          <input class="form-control" placeholder="確認密碼" type="password" />
        </div>
        <!-- form-group// -->
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">
            註冊帳號
          </button>
        </div>
        <!-- form-group// -->
        <p class="text-center">
          已經有帳號?
          <NuxtLink to="/login" class="text-success">登入</NuxtLink>
        </p>
      </form>
    </article>
  </div>
  <!-- card.// -->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'Register',
})
export default class extends Vue {}
</script>
