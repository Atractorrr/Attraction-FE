'use client'

import React from 'react'
import { Button } from '@attraction/design-system/dist'
import { ViewType } from '@/entities/user-article'
import { BarsLeftOutline, GridOutline } from '@attraction/icons'

interface ViewTypeTabMenuProps {
  type: ViewType
  setType: (type: ViewType) => void
  isArticleView?: boolean
}

const btns: Array<[ViewType, string, React.FC]> = [
  ['gallery', '갤러리형', GridOutline],
  ['list', '리스트형', BarsLeftOutline],
]

export default function ViewTypeTabMenu({
  type,
  setType,
  isArticleView,
}: ViewTypeTabMenuProps) {
  return (
    <div className="relative flex border-b border-gray-100 pb-2 dark:border-gray-700">
      {btns.map(([viewType, label, Icon]) => (
        <Button
          key={viewType}
          type="button"
          title={`${label} 보기`}
          className={`xs:text-xl relative flex grow items-center justify-center gap-2 rounded-lg px-3 py-2 text-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
            isArticleView ? '' : 'md:grow-0'
          } ${
            type === viewType
              ? 'text-gray-700 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => setType(viewType)}>
          <Icon />
          <span className="xs:block hidden whitespace-nowrap text-base">
            {`${label} 보기`}
          </span>
          <span className="xs:hidden block whitespace-nowrap text-sm">
            {label}
          </span>
          {type === viewType && (
            <span className="absolute inset-x-0 -bottom-2 h-px bg-gray-700 dark:bg-gray-50" />
          )}
        </Button>
      ))}
    </div>
  )
}
