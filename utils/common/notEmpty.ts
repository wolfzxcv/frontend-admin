import empty from './empty'

export default function notEmpty<T>(value: T | null | undefined): value is T {
  return !empty(value)
}
