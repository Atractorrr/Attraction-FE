import { ReactNode } from 'react'

interface PreferTagListProps<T> {
  categories: T[]
  renderItem: (data: T) => ReactNode
}

export default function PreferTagList<T>({
  categories,
  renderItem,
}: PreferTagListProps<T>) {
  return (
    <ul className="flex flex-wrap items-end gap-2">
      {categories.map((category) => renderItem(category))}
    </ul>
  )
}
