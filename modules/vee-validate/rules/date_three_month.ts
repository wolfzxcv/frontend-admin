import dayjs from 'dayjs'
import { RuleParamSchema } from 'vee-validate/dist/types/types'

const validate = (value: string): boolean => {
  let isValid: boolean = true
  const today = new Date()
  const dueDate = new Date().setMonth(today.getMonth() + 3)
  const date = dayjs(value)

  isValid = dayjs(date).isBetween(today, dueDate)

  return isValid
}

const params: RuleParamSchema[] = [
  {
    name: 'date',
  },
]

export { validate, params }

export default {
  validate,
  params,
}
