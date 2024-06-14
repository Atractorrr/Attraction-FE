'use client'

import * as React from 'react'
import { CheckOutline } from '@attraction/icons'
import { cn } from '../utils'
import checkboxVariants from './Checkbox.style'

const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    label?: string
    color?: 'default' | 'red' | 'blue' | 'green' | 'yellow'
  }
>(
  (
    { className, id, label, checked, color = 'default', disabled, ...props },
    ref,
  ) =>
    React.createElement(
      label ? 'label' : React.Fragment,
      label
        ? ({
            htmlFor: id,
            className: cn(
              'ds-inline-flex ds-cursor-pointer ds-items-center ds-justify-start',
              className,
            ),
          } as React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLLabelElement>,
            HTMLLabelElement
          >)
        : undefined,
      <>
        <span className="ds-relative ds-block ds-size-6">
          <input
            ref={ref}
            id={id}
            checked={checked}
            className={cn(
              'ds-peer',
              checkboxVariants({ variant: disabled ? 'disabled' : color }),
            )}
            disabled={disabled}
            type="checkbox"
            {...props}
          />
          <CheckOutline
            className={cn(
              'ds-pointer-events-none ds-absolute ds-inset-0 ds-m-auto ds-hidden ds-text-base ds-text-white peer-checked:ds-inline-block peer-disabled:ds-inline-block peer-disabled:ds-text-gray-200 dark:peer-disabled:ds-text-gray-500',
              color === 'default' && 'dark:ds-text-gray-700',
            )}
          />
        </span>
        {label ? <span className="ds-ml-3 ds-break-keep">{label}</span> : null}
      </>,
    ),
)

export default Checkbox
