import React from 'react'
import { ToolEmoji } from '@attraction/icons'
import { Background } from '@/shared/ui'

export default function Graph() {
  return (
    <Background className="h-full">
      <ToolEmoji className="size-16" />
      <div className="mt-5 font-semibold">아직 준비중이에요 기다려주세요</div>
    </Background>
  )
}
