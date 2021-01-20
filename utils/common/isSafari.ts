export default function isSafari(): boolean {
  const safari = 'safari'

  return window ? !!window[safari] : false
}
