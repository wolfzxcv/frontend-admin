import dayjs from 'dayjs'
import { RuleParamSchema } from 'vee-validate/dist/types/types'

const validate = (
  value: string,
  { target, inclusion, format }: Record<string, any>
): boolean => {
  let isValid: boolean = true

  if (value && target) {
    let valueDayjs: dayjs.Dayjs
    let targetDayjs: dayjs.Dayjs

    if (typeof value === 'string') {
      valueDayjs = dayjs(value, format)
    } else {
      valueDayjs = dayjs(value)
    }

    if (typeof target === 'string') {
      targetDayjs = dayjs(target, format)
    } else {
      targetDayjs = dayjs(target)
    }

    if (!valueDayjs.isValid() || !targetDayjs.isValid()) {
      return false
    }

    isValid =
      valueDayjs.isAfter(targetDayjs) ||
      (inclusion && valueDayjs.isSame(targetDayjs))
  }
  return isValid
}

const params: RuleParamSchema[] = [
  {
    name: 'target',
    isTarget: true,
  },
  {
    name: 'inclusion',
    default: false,
    cast(value) {
      return value === 'true'
    },
  },
  {
    name: 'format',
  },
]

export { validate, params }

export default {
  validate,
  params,
}
