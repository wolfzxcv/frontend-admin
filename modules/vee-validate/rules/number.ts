/** 是否為開頭不為 0 的整數 */
const validate = (value: string): boolean => {
  if (value == null || value === '') {
    return false
  }

  if (value.toString() === '0') {
    return true
  }

  return (
    !isNaN(Number(value)) &&
    !value.toString().includes('.') &&
    !value.toString().startsWith('0')
  )
}
export { validate }

export default {
  validate,
}
