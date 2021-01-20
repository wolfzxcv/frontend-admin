export default function objectPick<T extends object, K extends keyof T>(
  source: T,
  keys: K[] = []
): { [P in K]: T[P] } {
  return keys.reduce(
    (prev, key) => ({ ...prev, [key]: source[key] }),
    {} as { [P in K]: T[P] }
  )
}
