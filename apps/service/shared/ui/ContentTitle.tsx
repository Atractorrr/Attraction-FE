import React from 'react'

interface ContentTitleProps {
  type: 'main' | 'sub'
  content: string
}

export default function ContentTitle({ type, content }: ContentTitleProps) {
  return (
    <div
      className={`${type === 'main' ? 'font-medium' : 'text-sm text-gray-500 dark:text-gray-400'} line-clamp-2 self-center`}>
      {content}
    </div>
  )
}
