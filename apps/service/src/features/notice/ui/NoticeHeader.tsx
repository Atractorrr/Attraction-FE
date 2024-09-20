'use client'

import { Button } from '@attraction/design-system'
import { NOTICE_NAVIGATION } from '../constant'

export default function NoticeHeader() {
  return (
    <div className="flex w-fit rounded-lg bg-gray-50 p-1">
      {NOTICE_NAVIGATION.type.map((noticeType) => (
        <Button className="rounded px-6 py-1 hover:bg-white">
          {noticeType}
        </Button>
      ))}
    </div>
  )
}
