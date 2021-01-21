/** 是否不為 null 或 undefined */
const validate = (value: any): boolean => {
  return value != null
}

export { validate }

export default {
  validate,
}
