import { useElementRect } from '@attraction/ds-hooks'

export function computeOptionPosition(
  rect: ReturnType<typeof useElementRect>,
  optionHeight: number,
) {
  const { top, bottom, left, width } = rect
  const line = window.innerHeight - optionHeight - 20
  const isTopPosition = line < bottom
  const currentTop = isTopPosition
    ? `calc(${top - optionHeight}px - 0.25rem)`
    : `calc(${bottom}px + 0.25rem)`

  return {
    '--ds-select-top': currentTop,
    '--ds-select-left': `${left}px`,
    '--ds-select-width': `${width}px`,
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
