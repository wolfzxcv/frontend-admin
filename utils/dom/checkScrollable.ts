import getStyle from './getStyle'

const regex = /(auto|scroll)/

/**
 * 確認是否可滾動
 * @param node
 */
export default function checkScrollable(node: Element): boolean {
  return (
    regex.test(getStyle(node, 'overflow')) ||
    regex.test(getStyle(node, 'overflow-y')) ||
    regex.test(getStyle(node, 'overflow-x'))
  )
}
