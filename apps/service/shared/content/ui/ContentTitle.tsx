import React from 'react'
import { TitleType } from '../model/types/title'

export default function ContentTitle({ type, content }: TitleType) {
  return (
    <div
      className={`${type === 'main' ? 'font-medium' : 'text-sm text-[#6F7A86]'} self-center`}>
      {content}
    </div>
  )
}
