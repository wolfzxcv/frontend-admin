export default function arrayIsEmpty(array: any): boolean {
  return !Array.isArray(array) || array.length === 0
}
