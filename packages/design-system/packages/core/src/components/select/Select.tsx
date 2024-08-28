import React from 'react'
import { createPortal } from 'react-dom'
import {
  useOutsideClick,
  useScrollLock,
  useTimeout,
  useElementRect,
} from '@attraction/ds-hooks'
import { ArrowFillDownOutline, CheckOutline } from '@attraction/icons'
import { cn } from '@attraction/utils'
import { forwardRefWithGeneric } from '../../core'
import { Button } from '../button'
import { Label } from '../label'
import { Dimmed } from '../dimmed'
import { InputDescription } from '../input-description'
import { SelectContext, useSelect } from './Select.context'
import type {
  OptionProps,
  SelectContainerProps,
  SelectProps,
} from './Select.type'
import {
  selectInputClassName,
  selectOptionClassName,
  selectOptionClassNameWithMobileModifier,
  selectVariants,
} from './Select.style'

function Option<T extends string>({
  value,
  children,
  title,
  disabled,
  onSelect,
}: OptionProps<T>) {
  const { value: selectedValue, setValue, size, round } = useSelect()
  const isSelected = selectedValue === value
  const select = React.useCallback(() => {
    setValue?.(value)
    onSelect?.(value)
  }, [])

  if (typeof children === 'function') {
    return <li>{children({ isSelected, select })}</li>
  }
  return (
    <li>
      <Button
        size={size === 'lg' ? 'md' : 'sm'}
        round={round === 'md' ? 'sm' : 'xs'}
        title={title || `선택: ${value}`}
        disabled={disabled}
        onClick={select}>
        <span>{children || value}</span>
        {isSelected && <CheckOutline />}
      </Button>
    </li>
  )
}

function computePosition(
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

function Select<T extends string>(
  {
    store,
    size,
    round,
    mobile: isMobile = false,
    defaultValue,
    onChange,
    children,
    onKeyDown,
    onClick,
    ...props
  }: SelectProps<T>,
  inputRef?: React.ForwardedRef<HTMLInputElement>,
) {
  const valueStore = React.useState(defaultValue ?? '')
  const [value, setValueState] = store ?? valueStore
  React.useEffect(() => onChange?.(value as T), [value])

  const [isOpen, setOpen] = React.useState(false)
  const open = React.useCallback(() => setOpen(true), [])
  const close = React.useCallback(() => setOpen(false), [])
  const toggle = React.useCallback(() => setOpen((prev) => !prev), [])
  useScrollLock(isOpen)

  const focusTimeout = useTimeout()
  const optionRef = React.useRef<HTMLUListElement | null>(null)
  const containerRef = useOutsideClick<HTMLDivElement>((e) => {
    if (!optionRef.current) return
    if (optionRef.current.contains(e.target as Node | null)) return
    close()
  })
  const closeAndFocusToSelectInput = React.useCallback(() => {
    const containerEl = containerRef.current
    const inputEl = containerEl?.querySelector('input')
    inputEl?.focus()
    close()
  }, [])
  const setValue = React.useCallback((v: string) => {
    setValueState(v as T)
    closeAndFocusToSelectInput()
  }, [])

  const inputBox = useElementRect<HTMLDivElement>(containerRef)
  const optionBox = useElementRect<HTMLUListElement>(optionRef, [isOpen])

  React.useLayoutEffect(() => {
    if (isOpen) {
      const optionEl = optionRef.current
      const btnEls = optionEl?.querySelectorAll('button')
      btnEls?.forEach((btnEl, idx) => {
        btnEl.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') e.preventDefault()
          if (e.key === 'Escape') closeAndFocusToSelectInput()
          if (e.key === 'ArrowUp' && idx > 0) {
            btnEls?.[idx - 1]?.focus()
          }
          if (e.key === 'ArrowDown' && idx < btnEls.length) {
            btnEls?.[idx + 1]?.focus()
          }
        })
      })
    }
  }, [isOpen, closeAndFocusToSelectInput])

  return (
    <SelectContext.Provider value={{ value, setValue, size, round }}>
      <div ref={containerRef} className={selectInputClassName}>
        <input
          ref={inputRef}
          type="text"
          value={value || defaultValue}
          placeholder="옵션을 선택해주세요"
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.key === 'Tab' && isOpen) e.preventDefault()
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
              e.preventDefault()
              open()
              focusTimeout.start(() => {
                const optionEl = optionRef.current
                const btnEl = optionEl?.querySelector('button')
                btnEl?.focus()
              }, 0)
            }
            onKeyDown?.(e)
          }}
          onClick={(e) => {
            toggle()
            onClick?.(e)
          }}
          readOnly
          {...props}
        />
        <ArrowFillDownOutline />
      </div>
      {createPortal(
        isOpen && (
          <div
            className={cn(
              selectOptionClassName,
              isMobile && selectOptionClassNameWithMobileModifier,
            )}
            style={computePosition(inputBox, optionBox.height)}>
            <ul ref={optionRef}>{children}</ul>
            {isMobile && <Dimmed />}
          </div>
        ),
        document.body,
      )}
    </SelectContext.Provider>
  )
}

const ForwardedSelect = forwardRefWithGeneric(Select)

function SelectContainer<T extends string>(
  {
    className,
    style,
    label,
    description,
    state,
    withBackground,
    ...props
  }: SelectContainerProps<T>,
  inputRef?: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <div
      className={cn(
        selectVariants({
          state,
          size: props.size,
          round: props.round,
          background: withBackground ? 'with' : null,
        }),
        className,
      )}
      style={style}>
      <Label htmlFor={props.id} required={props.required}>
        {label}
      </Label>
      <ForwardedSelect ref={inputRef} {...props} />
      <InputDescription>{description}</InputDescription>
    </div>
  )
}

Option.displayName = 'Select.Option'
SelectContainer.displayName = 'Select'

export default Object.assign(forwardRefWithGeneric(SelectContainer), { Option })
