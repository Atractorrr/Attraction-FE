'use client'

import { BarsLeftOutline, GridOutline } from '@attraction/icons'
import type { ViewType } from '@/shared/type'

interface ViewTypeButtonProps {
  viewType: ViewType
  setViewType: (type: ViewType) => void
}

const viewTypeBtns: Array<[ViewType, string, typeof GridOutline]> = [
  ['gallery', '갤러리형 보기', GridOutline],
  ['list', '리스트형 보기', BarsLeftOutline],
]

export default function ViewTypeButton({
  viewType,
  setViewType,
}: ViewTypeButtonProps) {
  return (
    <p className="relative flex h-10 items-center justify-center rounded-lg bg-gray-50 p-1 dark:bg-gray-700">
      {viewTypeBtns.map(([type, label, Icon]) => (
        <button
          key={type}
          type="button"
          className={`relative z-10 flex items-center justify-center rounded px-3 py-1 ${
            type === viewType
              ? 'text-gray-700 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          title={label}
          onClick={(e) => {
            e.currentTarget?.scrollIntoView({
              inline: 'start',
              behavior: 'smooth',
            })
            setViewType(type)
          }}
          disabled={type === viewType}>
          <Icon className="text-lg xs:text-xl" />
          <span className="blind">{label}</span>
        </button>
      ))}
      <span
        className={`absolute inset-y-1 ${
          viewType === 'list' ? 'left-1/2 right-1' : 'left-1 right-1/2'
        } h-8 rounded border border-gray-100 bg-white transition-all dark:border-gray-800 dark:bg-gray-800`}
      />
    </p>
  )
}
