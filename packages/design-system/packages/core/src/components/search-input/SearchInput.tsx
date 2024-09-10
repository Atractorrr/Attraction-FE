import React from 'react'
import { BackspaceOutline, MagnifyingGlassOutline } from '@attraction/icons'
import { cn } from '@attraction/utils'
import { HiddenText } from '../hidden-text'
import { searchInputVariants, variants } from './SearchInput.style'

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
  withBackground?: boolean
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>
  withClearButton?: boolean
  onClear?: React.MouseEventHandler<HTMLButtonElement>
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
      onEnter,
      withClearButton,
      onClear,
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
        }),
        className,
      )}
      style={style}>
      <MagnifyingGlassOutline />
      <input
        ref={ref}
        type="search"
        autoComplete="off"
        placeholder={placeholder || '검색어를 입력해주세요'}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onEnter?.(e)
          }
          onKeyDown?.(e)
        }}
        {...props}
      />
      {withClearButton && (
        <button type="button" onClick={onClear}>
          <BackspaceOutline />
          <HiddenText>검색어 지우기</HiddenText>
        </button>
      )}
    </div>
  ),
)

export default SearchInput
