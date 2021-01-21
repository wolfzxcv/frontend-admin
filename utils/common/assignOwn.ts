import { pick } from 'lodash'

export default function assignOwn<T, S>(
  destination: T,
  source: S,
  ignores?: string[]
) {
  const pickProps = Object.keys(destination)

  if (ignores) {
    pickProps.filter((props) => !ignores.includes(props))
  }

  return Object.assign(destination, pick(source, pickProps))
}
