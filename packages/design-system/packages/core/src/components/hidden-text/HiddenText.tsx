import React from 'react'
import type { HeadingTag } from '../../core'

type TextTag = 'span' | 'label' | 'caption' | HeadingTag

type HiddenTextProps<T extends TextTag> = React.PropsWithoutRef<
  JSX.IntrinsicElements[T]
> & { as?: T }

export default function HiddenTextForA11y<T extends TextTag>({
  as,
  ...props
}: HiddenTextProps<T>) {
  const Component = as || 'span'

  return (
    <Component
      {...(props as Omit<HiddenTextProps<'span'>, 'as'>)}
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0px',
        margin: '0px',
        border: 'none',
        fontSize: '2px',
        whiteSpace: 'nowrap',
        clip: 'rect(1px 1px 1px 1px)',
        outline: 'none',
        overflow: 'hidden',
      }}
    />
  )
}
