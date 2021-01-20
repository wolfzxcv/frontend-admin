import setStyle from './setStyle'

/**
 * 移除style
 * @param el
 * @param prop
 */
export default function removeStyle(el: HTMLElement, prop: string) {
  setStyle(el, prop, '')
}
