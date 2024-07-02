import { toast } from 'react-toastify'

export default function censoringAnchorTags(document: Document) {
  const anchorEls = document.querySelectorAll('a[href="#none"]')

  anchorEls.forEach((anchorEl) => {
    anchorEl.addEventListener('click', (e) => {
      toast.error('보안상의 이유로 접근할 수 없어요')
      e.preventDefault()
    })
  })
}
