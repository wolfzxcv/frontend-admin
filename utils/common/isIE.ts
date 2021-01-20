export default function isIE(): boolean {
  const { userAgent } = navigator
  let browserName

  if (userAgent.indexOf('MSIE') > 0) {
    browserName = 'IE'
    console.log('IE<=10')
  } else if (userAgent.indexOf('Trident/') > 0) {
    browserName = 'IE'
    console.log('IE 11')
  }

  return browserName === 'IE'
}
