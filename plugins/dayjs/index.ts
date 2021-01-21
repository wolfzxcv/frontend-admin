import { Plugin } from '@nuxt/types'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween)

const dayjsPlugin: Plugin = (ctx, inject) => {
  ctx.$dayjs = dayjs
  inject('dayjs', dayjs)
}

export default dayjsPlugin
