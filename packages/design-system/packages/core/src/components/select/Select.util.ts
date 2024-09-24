import { useElementRect } from '@attraction/ds-hooks'
import { rem } from '../../core'
import { OPTION_CONTAINER_PADDING, SELECT_OPTION_GAP } from './Select.constant'

export function computeOptionPosition(
  rect: ReturnType<typeof useElementRect>,
  optionHeight: number,
) {
  const { top, bottom, left, width } = rect
  const line = window.innerHeight - optionHeight - OPTION_CONTAINER_PADDING
  const isTopPosition = line < bottom
  const currentTop = isTopPosition
    ? rem(top - optionHeight - SELECT_OPTION_GAP)
    : rem(bottom + SELECT_OPTION_GAP)

  return {
    '--ds-select-top': currentTop,
    '--ds-select-left': rem(left),
    '--ds-select-width': rem(width),
  } as React.CSSProperties
}

export function handleOptionA11y<T extends HTMLElement>(
  element: T | null,
  close: () => void,
) {
  const btnEls = element?.querySelectorAll('button')
  btnEls?.forEach((btnEl, idx) => {
    btnEl.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') e.preventDefault()
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowUp' && idx > 0) {
        btnEls[idx - 1]?.focus()
      }
      if (e.key === 'ArrowDown' && idx < btnEls.length - 1) {
        btnEls[idx + 1]?.focus()
      }
    })
  })
}
