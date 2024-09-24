import React from 'react'
import { createPortal } from 'react-dom'
import {
  useOutsideClick,
  useScrollLock,
  useTimeout,
  useElementRect,
  useBooleanState,
  useIsomorphicLayoutEffect,
} from '@attraction/ds-hooks'
import { ArrowFillDownOutline, CheckOutline } from '@attraction/icons'
import { cn } from '@attraction/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../button'
import { Label } from '../label'
import { Dimmed } from '../dimmed'
import { InputDescription } from '../input-description'
import { SelectContext, useSelect } from './Select.context'
import type {
  OptionProps,
  SelectContainerProps,
  SelectOption,
  SelectProps,
} from './Select.type'
import {
  selectInputClassName,
  selectOptionClassName,
  selectOptionClassNameWithMobileModifier,
  selectVariants,
} from './Select.style'
import { computeOptionPosition, handleOptionA11y } from './Select.util'

function Option({
  value,
  children: label,
  title,
  disabled,
  onSelect,
}: OptionProps) {
  const { value: selectedValue, setValue, size, round } = useSelect()
  const isSelected = selectedValue === value
  const select = React.useCallback(() => {
    setValue?.(value)
    onSelect?.(value)
  }, [])

  return (
    <li>
      <Button
        size={size === 'lg' ? 'md' : 'sm'}
        round={round === 'md' ? 'sm' : 'xs'}
        title={title || `선택: ${label || value}`}
        disabled={disabled}
        onClick={select}
        withoutClickInteraction>
        <span>{label || value}</span>
        {isSelected && <CheckOutline />}
      </Button>
    </li>
  )
}

const OptionComponentType = (<Option value="" />).type

function Select(
  {
    size,
    round,
    mobile: isMobile = false,
    deselect: isDeselect = false,
    value: valueProps,
    defaultValue = '',
    onChange,
    children,
    onKeyDown,
    onClick,
    ...props
  }: SelectProps,
  inputRef?: React.ForwardedRef<HTMLInputElement>,
) {
  const [valueState, setValueState] = React.useState(valueProps ?? defaultValue)
  const value = valueProps ?? valueState
  React.useEffect(() => onChange?.(valueState), [valueState])

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

  const options = React.useMemo(() => {
    return React.Children.toArray(children).reduce((option, child) => {
      if (React.isValidElement(child) && child.type === OptionComponentType) {
        const { value: v, children: label } = child.props
        return Object.assign(option, { [v]: label ?? null })
      }
      return option
    }, {} as SelectOption)
  }, [children])

  const [label, setLabel] = React.useState(options[defaultValue] ?? '')

  const setValue = React.useCallback(
    (v: string) => {
      setValueState((prev: string) => {
        if (isDeselect && prev === v) {
          setLabel(options[defaultValue] ?? '')
          return defaultValue
        }
        setLabel(options[v] ?? '')
        return v
      })
      closeAndFocusToSelectInput()
    },
    [isDeselect],
  )

  const inputBox = useElementRect(containerRef, [size])
  const optionBox = useElementRect(optionRef, [isOpen, size])

  useIsomorphicLayoutEffect(() => {
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
        <AnimatePresence>
          {isOpen && (
            <div
              className={cn(
                selectOptionClassName,
                isMobile && selectOptionClassNameWithMobileModifier,
              )}
              style={computeOptionPosition(inputBox, optionBox.height)}>
              <motion.ul
                ref={optionRef}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.1 }}>
                {children}
              </motion.ul>
              {isMobile && (
                <Dimmed
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: 'easeInOut', duration: 0.1 }}
                />
              )}
            </div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </SelectContext.Provider>
  )
}

const ForwardedSelect = React.forwardRef(Select)

function SelectContainer(
  {
    className,
    style,
    label,
    description,
    state,
    border,
    withBackground,
    ...props
  }: SelectContainerProps,
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
          border,
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

export default Object.assign(React.forwardRef(SelectContainer), { Option })
