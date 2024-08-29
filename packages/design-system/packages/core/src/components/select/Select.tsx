import React from 'react'
import { createPortal } from 'react-dom'
import {
  useOutsideClick,
  useScrollLock,
  useTimeout,
  useElementRect,
  useBooleanState,
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
import { computeOptionPosition, handleOptionA11y } from './Select.util'

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
    setValue?.(value, children)
    onSelect?.(value)
  }, [])

  return (
    <li>
      <Button
        size={size === 'lg' ? 'md' : 'sm'}
        round={round === 'md' ? 'sm' : 'xs'}
        title={title || `선택: ${children || value}`}
        disabled={disabled}
        onClick={select}>
        <span>{children || value}</span>
        {isSelected && <CheckOutline />}
      </Button>
    </li>
  )
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
  const [label, setLabel] = React.useState('')
  const valueStore = React.useState(defaultValue ?? '')
  const [value, setValueState] = store ?? valueStore
  React.useEffect(() => onChange?.(value as T), [value])

  const [isOpen, { setTrue: open, setFalse: close, toggle }] = useBooleanState()
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
  const setValue = React.useCallback((v: string, l?: string) => {
    if (l) setLabel(l)
    setValueState(v as T)
    closeAndFocusToSelectInput()
  }, [])

  const inputBox = useElementRect<HTMLDivElement>(containerRef)
  const optionBox = useElementRect<HTMLUListElement>(optionRef, [isOpen])

  React.useLayoutEffect(() => {
    if (isOpen) {
      const optionEl = optionRef.current
      handleOptionA11y(optionEl, closeAndFocusToSelectInput)
    }
  }, [isOpen, closeAndFocusToSelectInput])

  return (
    <SelectContext.Provider value={{ value, setValue, size, round }}>
      <div ref={containerRef} className={selectInputClassName}>
        <input
          ref={inputRef}
          type="text"
          value={label || value}
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
            style={computeOptionPosition(inputBox, optionBox.height)}>
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
