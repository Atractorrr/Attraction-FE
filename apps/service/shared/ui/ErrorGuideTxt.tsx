'use client'

import Image from 'next/image'
import { RefreshOutline } from '@attraction/icons'
import { Button } from '@attraction/design-system'
import { useRouter } from 'next/navigation'
import GuideTxt from './GuideTxt'

interface ErrorGuideTxtProps {
  title?: string
  sub?: string
}

export default function ErrorGuideTxt({
  title = '이용에 불편을 드려 죄송해요',
  sub = '동일한 현상이 계속될 경우 문의 부탁드려요',
}: ErrorGuideTxtProps) {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 justify-items-center gap-y-9 pb-[100px] pt-20">
      <div className="grid grid-cols-1 justify-items-center gap-y-6">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-50 dark:bg-gray-700">
          <Image
            className="m-auto block size-9"
            src="/images/warning-icon.png"
            width={120}
            height={120}
            alt="경고 아이콘"
          />
        </div>
        <GuideTxt title={title} sub={sub} />
        <p className="mt-9 flex items-center justify-center">
          <Button
            type="button"
            className="flex items-center justify-center gap-x-2 rounded-md bg-gray-50 py-2 pl-4 pr-5 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
            title="다시시도하기"
            onClick={router.refresh}>
            <RefreshOutline className="text-xl" />
            <span>다시시도</span>
          </Button>
        </p>
      </div>
    </div>
  )
}
