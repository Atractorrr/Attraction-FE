'use client'

import { RefreshOutline } from '@attraction/icons'
import { Button } from '@attraction/design-system'
import Image from 'next/image'
import GuideTxt from './GuideTxt'

interface ErrorGuideTxtProps {
  title?: string
  sub?: string
}

export default function ErrorGuideTxt({
  title = '이용에 불편을 드려 죄송해요',
  sub = '동일한 현상이 계속될 경우 문의 부탁드려요',
}: ErrorGuideTxtProps) {
  const refresh = () => {
    window.location.reload()
  }

  return (
    <div className="grid grid-cols-1 justify-items-center gap-y-9 pb-[100px] pt-20">
      <div className="grid grid-cols-1 justify-items-center gap-y-6">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-100 ">
          <Image
            className="size-9"
            src="/images/siren-icon.jpg"
            width={100}
            height={100}
            alt="siren"
          />
        </div>
        <GuideTxt title={title} sub={sub} />
      </div>
      <Button
        className="flex w-[120px] items-center justify-center gap-x-2 rounded-md bg-gray-100 py-2"
        onClick={refresh}>
        <RefreshOutline />
        <span>다시시도</span>
      </Button>
    </div>
  )
}
