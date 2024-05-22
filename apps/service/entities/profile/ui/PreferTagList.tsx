import React, { ReactNode } from 'react'

type Props<T> = {
  categories: T[]
  renderItem: (data: T) => ReactNode
}

export default function PreferTagList<T>({ categories, renderItem }: Props<T>) {
  return (
    <ul className="flex flex-wrap gap-2">
      {categories.map((category) => renderItem(category))}
    </ul>
  )
}
