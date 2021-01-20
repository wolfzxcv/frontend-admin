/**
 * 取得style
 * @param el
 * @param prop
 */
export default function getStyle(el: Element, prop: string): string {
  return window.getComputedStyle(el).getPropertyValue(prop)
}
