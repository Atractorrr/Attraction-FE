import React from 'react'

export default function forwardRefWithGeneric<T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode | null,
) {
  return React.forwardRef<T, P>(render) as (
    props: React.PropsWithoutRef<P> & React.RefAttributes<T>,
  ) => React.ReactNode | null
}
