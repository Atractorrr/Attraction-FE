import React from 'react'
import { ToolEmoji } from '@attraction/icons'

export default function Graph() {
  return (
    <section className="flex w-full flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4">
      <ToolEmoji className="size-16" />
      <div className="mt-5 font-semibold">아직 준비중이에요 기다려주세요</div>
    </section>
  )
}
