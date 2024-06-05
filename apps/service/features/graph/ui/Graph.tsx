import React from 'react'
import { FolderEmoji } from '@attraction/icons'
import { Background } from '@/shared/ui'

export default function Graph() {
  return (
    <Background className="flex h-full flex-col items-center justify-center pb-24 pt-20 text-center lg:p-6">
      <FolderEmoji className="size-16" />
      <p className="mt-5">통계 서비스를 위한 데이터를 수집하고 있어요</p>
    </Background>
  )
}
