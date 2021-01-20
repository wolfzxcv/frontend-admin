/**
 * 確認是否為元素
 * @param node
 */
export default function isElement(node: Node): boolean {
  return !!(node && node.nodeType === Node.ELEMENT_NODE)
}
