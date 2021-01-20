export default function listen(
  node: EventTarget,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions | EventListenerOptions
) {
  node.addEventListener(event, handler, options)
  return () => node.removeEventListener(event, handler, options)
}
