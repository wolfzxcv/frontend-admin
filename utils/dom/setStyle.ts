import isElement from './isElement'

/**
 * 設定style
 * @param el
 * @param prop
 * @param value
 */
export default function setStyle(el: HTMLElement, prop: string, value: string) {
  if (prop && isElement(el)) {
    el.style[prop] = value
  }
}
