const containsUnsubscribe = (text: string) => {
  const regex = /수신거부|unsubscribe/i
  return regex.test(text)
}

export default function censoringAnchorTags(document: Document) {
  const anchorEls = document.querySelectorAll('a')
  anchorEls.forEach((anchorEl) => {
    const targetTxt = anchorEl.textContent ?? ''
    if (containsUnsubscribe(targetTxt)) {
      anchorEl.removeAttribute('href')
      anchorEl.addEventListener('click', (e) => {
        // eslint-disable-next-line no-alert
        alert('잘못된 접근입니다') // TODO: 커스텀 alert or toast ui 사용
        e.preventDefault()
      })
    }
  })
}
