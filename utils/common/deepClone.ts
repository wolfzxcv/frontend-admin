import { cloneDeep } from 'lodash'

export default function deepClone<T>(data: T): T {
  return cloneDeep(data)
}
