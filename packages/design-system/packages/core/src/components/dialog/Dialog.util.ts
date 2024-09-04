export type FocusableElement =
  | HTMLAnchorElement
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement
  | HTMLDetailsElement

export const selector =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'

export function handleDialogA11y<T extends HTMLElement>(element: T | null) {
  const focusableEls = element?.querySelectorAll<FocusableElement>(selector)
  if (focusableEls && focusableEls.length > 0) {
    const firstFocusableEl = focusableEls[0]
    const lastFocusableEl = focusableEls[focusableEls.length - 1]
    firstFocusableEl?.addEventListener('keydown', (event) => {
      const e = event as KeyboardEvent
      if (e.key === 'Tab' && e.shiftKey) e.preventDefault()
    })
    lastFocusableEl?.addEventListener('keydown', (event) => {
      const e = event as KeyboardEvent
      if (e.key === 'Tab' && !e.shiftKey) e.preventDefault()
    })
    firstFocusableEl?.focus()
  }
}
