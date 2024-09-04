import React from 'react'

export default function forwardRefWithGeneric<T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) {
  return React.forwardRef(render) as (
    props: P & React.RefAttributes<T>,
  ) => React.ReactNode
}
