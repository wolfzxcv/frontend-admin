import { RuleParamSchema, StringOrNumber } from 'vee-validate/dist/types/types'

const validate = (
  value: StringOrNumber | StringOrNumber[],
  { decimals }: Record<string, any>
): boolean => {
  if (decimals !== undefined && isNaN(Number(decimals))) {
    return false
  }

  if (Array.isArray(value)) {
    return value.every((val) => validate(val, { decimals }))
  }

  const strVal = String(value)

  // if is 0.
  if (Number(decimals) === 0) {
    return /^-?\d*$/.test(strVal)
  }

  const regex = new RegExp(
    `^[-+]?\\d*(\\.\\d{1,${decimals || ''}})?([eE]{1}[-]?\\d+)?$`
  )

  return regex.test(strVal)
}

const params: RuleParamSchema[] = [
  {
    name: 'decimals',
  },
]

export { validate, params }

export default {
  validate,
  params,
}
