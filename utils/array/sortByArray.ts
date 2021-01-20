export default function sortByArray<T>(
  array: T[],
  order: any[],
  key: string
): T[] {
  array.sort((a, b) => {
    const A = a[key]
    const B = b[key]

    if (order.indexOf(A) > order.indexOf(B)) {
      return 1
    } else {
      return -1
    }
  })
  return array
}
