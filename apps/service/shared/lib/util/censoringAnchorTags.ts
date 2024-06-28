import { toast } from 'react-toastify'
import { UNSUBSCRIBE_REGEX } from '@/shared/constant'

export default function censoringAnchorTags(document: Document) {
  const anchorEls = document.querySelectorAll('a')
  anchorEls.forEach((anchorEl) => {
    const targetTxt = anchorEl.textContent ?? ''
    if (UNSUBSCRIBE_REGEX.test(targetTxt)) {
      anchorEl.removeAttribute('href')
      anchorEl.addEventListener('click', (e) => {
        toast.error('보안상의 이유로 접근할 수 없어요')
        e.preventDefault()
      })
    }
  })
}
