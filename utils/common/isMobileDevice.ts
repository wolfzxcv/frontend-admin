export default function isMobileDevice() {
  const mobileDevices = [
    'Android',
    'webOS',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'Windows Phone'
  ]
  return mobileDevices.some(mobileDevice =>
    window.navigator.userAgent.match(mobileDevice)
  )
}
