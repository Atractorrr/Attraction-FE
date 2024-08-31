import React from 'react'
import { forwardRefWithGeneric } from '../../core'

type HiddenTextProps<T extends React.ElementType> = {
  as?: T
} & React.ComponentPropsWithoutRef<T>

function HiddenText<T extends React.ElementType = 'span'>(
  { as, style = {}, ...props }: HiddenTextProps<T>,
  ref?: React.ComponentPropsWithRef<T>['ref'],
) {
  const Component = as || 'span'

  return (
    <Component
      ref={ref}
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
        ...style,
      }}
      {...props}
    />
  )
}

export default forwardRefWithGeneric(HiddenText)
