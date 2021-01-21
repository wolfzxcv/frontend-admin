export default function <T, K = { [key: string]: T }>(
  arr: T[],
  key: string
): K {
  return arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {} as K)
}
