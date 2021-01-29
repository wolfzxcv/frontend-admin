<template>
  <div class="container text-center">
    <h1>所有會員</h1>

    <Table :data="users" :columns="columns" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { User } from '~/@types/types'

import Users from '~/apollo/users.graphql'
import { TableColumns } from '~/modules/base-components/@types'
@Component({
  apollo: {
    users: {
      query: Users,
    },
  },
  name: 'Homepage',
})
export default class extends Vue {
  users: User[] = []

  columns: TableColumns[] = [
    { title: '帳號', dataIndex: 'username' },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: '創建時間',
      dataIndex: 'createAt',
    },
  ]
}
</script>
