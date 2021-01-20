import isElement from './isElement'

/**
 * 移除class
 * @param el
 * @param className
 */
export default function removeClass(el: Element, className: string) {
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className)
  }
}
