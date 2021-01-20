export default function deepFreeze<T>(obj: T): T {
  const propNames = Object.getOwnPropertyNames(obj)

  propNames.forEach(function(name) {
    const prop = obj[name]

    if (typeof prop === 'object' && prop !== null) deepFreeze(prop)
  })

  return Object.freeze(obj)
}
