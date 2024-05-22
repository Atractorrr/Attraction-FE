import React from 'react'
import { TitleType } from '../model'

export default function ContentTitle({ type, content }: TitleType) {
  return (
    <div
      className={`${type === 'main' ? 'font-medium' : 'text-sm text-gray-500'} line-clamp-2 self-center`}>
      {content}
    </div>
  )
}
