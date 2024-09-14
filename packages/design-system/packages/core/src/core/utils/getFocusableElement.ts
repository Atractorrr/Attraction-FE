import type { FocusableElement } from '../types'

export const focusableElementSelector =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'

export function getFocusableElement<T extends HTMLElement>(element: T | null) {
  return element?.querySelector<FocusableElement>(focusableElementSelector)
}

export function getFocusableElementAll<T extends HTMLElement>(
  element: T | null,
) {
  return element?.querySelectorAll<FocusableElement>(focusableElementSelector)
}
