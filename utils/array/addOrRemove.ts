import { cloneDeep } from 'lodash'

/** 新增或移除陣列元素 */
export default function addOrRemove<T>(arr: T[], value: T): T[] {
  const cloneArr = cloneDeep(arr)
  const index = cloneArr.indexOf(value)

  if (index === -1) {
    cloneArr.push(value)
  } else {
    cloneArr.splice(index, 1)
  }

  return cloneArr
}
