import checkScrollable from './checkScrollable'
import getStyle from './getStyle'

/**
 * 最近的可滾動的上層元素
 * @param el
 * @param excludeStaticParent
 */
export default function getScrollParent(
  el: Element,
  excludeStaticParent: boolean = getStyle(el, 'position') === 'absolute'
): HTMLElement {
  const { parentElement } = el

  if (!parentElement) {
    return window.document.documentElement
  }

  let scrollable: boolean = checkScrollable(parentElement)

  if (excludeStaticParent && getStyle(parentElement, 'position') === 'static') {
    scrollable = false
  }

  return scrollable
    ? parentElement
    : getScrollParent(parentElement, excludeStaticParent)
}
