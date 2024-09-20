'use client'

import { Button, Input } from '@attraction/design-system'

export default function NoticeFooter() {
  return (
    <div className="flex justify-between xs:flex-col xs:gap-4 md:flex-row">
      <div className="flex gap-3">
        <span className="text-gray-500">페이지</span>
        <div className="space-x-3">
          <Input
            value="0"
            className="w-16 rounded border border-gray-100 px-2 text-right"
          />
          <span className="text-gray-500">/ 15</span>
        </div>
      </div>

      <div className="md: flex gap-2 xs:justify-between">
        <Button className="rounded-lg bg-gray-700 px-5 py-2 text-white xs:inline md:hidden">
          글쓰기
        </Button>
        <div className="space-x-2">
          <Button className="rounded-lg bg-gray-50 px-5 py-2">이전</Button>
          <Button className="rounded-lg bg-gray-50 px-5 py-2">다음</Button>
        </div>
        <Button className="hidden rounded-lg bg-gray-700 px-5 py-2 text-white md:inline">
          글쓰기
        </Button>
      </div>
    </div>
  )
}
