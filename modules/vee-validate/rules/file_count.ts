/** 檔案數量限制 */
import {
  RuleParamSchema,
  ValidationMessageTemplate,
} from 'vee-validate/dist/types/types'

const validate = (value: any, { length }: Record<string, any>): boolean =>
  value.filesLength <= length

const params: RuleParamSchema[] = [
  {
    name: 'length',
    cast(value) {
      return Number(value)
    },
  },
]

const message: ValidationMessageTemplate = '最多上傳 {length} 份檔案'

export { validate, params, message }

export default {
  validate,
  params,
  message,
}
