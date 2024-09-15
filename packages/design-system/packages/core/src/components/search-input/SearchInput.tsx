import React from 'react'
import { BackspaceOutline, MagnifyingGlassOutline } from '@attraction/icons'
import { cn } from '@attraction/utils'
import {
  useBooleanState,
  useElementRect,
  useIsomorphicLayoutEffect,
} from '@attraction/ds-hooks'
import { HiddenText } from '../hidden-text'
import { selectClassName } from '../select/Select.style'
import {
  searchInputDividerClassName,
  searchInputWithSelectClassName,
  searchInputClearButtonClassName,
  searchInputSubmitButtonClassName,
  searchInputVariants,
  variants,
  searchInputWithSelectClassNameFocusModifier,
} from './SearchInput.style'

type SearchInputVariant = typeof variants
interface SearchInputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'size'
  > {
  size?: keyof SearchInputVariant['size']
  round?: keyof SearchInputVariant['round']
  submitButtonPosition?: keyof SearchInputVariant['submitButtonPosition']
  withBackground?: boolean
  onSubmit?: () => void
  withClearButton?: boolean
  onClear?: () => void
  clearIcon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  clearOnSubmit?: boolean
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      className,
      style,
      placeholder,
      onKeyDown,
      size,
      round,
      withBackground,
      submitButtonPosition,
      onSubmit,
      withClearButton,
      onClear,
      clearIcon: ClearIcon = BackspaceOutline,
      clearOnSubmit = false,
      ...props
    },
    ref,
  ) => (
    <div
      className={cn(
        searchInputVariants({
          size,
          round,
          background: withBackground ? 'with' : null,
          submitButtonPosition,
        }),
        className,
      )}
      style={style}>
      <input
        ref={ref}
        type="search"
        autoComplete="off"
        placeholder={placeholder || '검색어를 입력해주세요'}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (clearOnSubmit) onClear?.()
            onSubmit?.()
          }
          onKeyDown?.(e)
        }}
        {...props}
      />
      {withClearButton && (
        <button
          type="button"
          className={searchInputClearButtonClassName}
          onClick={onClear}>
          <ClearIcon />
          <HiddenText>검색어 지우기</HiddenText>
        </button>
      )}
      <button
        type="button"
        className={searchInputSubmitButtonClassName}
        onClick={() => {
          if (clearOnSubmit) onClear?.()
          onSubmit?.()
        }}>
        <MagnifyingGlassOutline />
        <HiddenText>검색</HiddenText>
      </button>
    </div>
  ),
)

function WithSelect({
  className,
  style = {},
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const selectRef = React.useRef<HTMLElement | null>(null)
  const selectRect = useElementRect(selectRef)
  const [isFocus, { setTrue, setFalse }] = useBooleanState()

  useIsomorphicLayoutEffect(() => {
    const containerEl = containerRef.current
    const inputEls = containerEl?.querySelectorAll('input')
    inputEls?.forEach((inputEl) => {
      inputEl.addEventListener('focus', setTrue)
      inputEl.addEventListener('blur', setFalse)
    })
    selectRef.current =
      containerEl?.querySelector(`.${selectClassName}`) ?? null
  }, [props.children])

  return (
    <div
      ref={containerRef}
      className={cn(
        searchInputWithSelectClassName,
        isFocus && searchInputWithSelectClassNameFocusModifier,
        className,
      )}
      style={
        {
          '--ds-select-width': `${selectRect.width}px`,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

function Divider({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return (
    <div className={cn(searchInputDividerClassName, className)} {...props} />
  )
}

export default Object.assign(SearchInput, { WithSelect, Divider })
