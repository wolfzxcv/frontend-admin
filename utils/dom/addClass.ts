import isElement from './isElement'

/**
 * 新增class
 * @param el
 * @param className
 */
export default function addClass(el: Element, className: string) {
  if (className && isElement(el) && el.classList) {
    el.classList.add(className)
  }
}
