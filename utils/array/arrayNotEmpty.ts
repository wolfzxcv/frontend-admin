import arrayIsEmpty from './arrayIsEmpty'

export default function arrayNotEmpty<T>(
  array: T[] | null | undefined
): array is T[] {
  return !arrayIsEmpty(array)
}
