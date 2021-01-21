/** 所有新增檔案大小限制 (MB) */
import { RuleParamSchema } from 'vee-validate/dist/types/types'

const validate = (value: any, { size }: Record<string, any>): boolean => {
  const newFiles: File[] = value.newFiles || []

  return newFiles.every((file) => file.size / 1024 ** 2 <= size)
}

const params: RuleParamSchema[] = [
  {
    name: 'size',
    cast(value) {
      return Number(value)
    },
  },
]

export { validate, params }

export default {
  validate,
  params,
}
