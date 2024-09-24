'use client'

import { Button } from '@attraction/design-system'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { NOTICE_NAVIGATION } from '../constant'

export default function NoticeHeader() {
  const searchParam = useSearchParams()
  const noticeUrlParamsCategory = searchParam.get('category')
  const pageNum = searchParam.get('page')

  return (
    <div className="flex w-fit rounded-lg bg-gray-50 p-1">
      {NOTICE_NAVIGATION.type.map((noticeType) => {
        const noticeCategoryType =
          NOTICE_NAVIGATION[noticeType as keyof typeof NOTICE_NAVIGATION]
        return (
          <Link href={`/notice?category=${noticeCategoryType}&page=${pageNum}`}>
            <Button
              className={`rounded px-6 py-1 hover:bg-white ${noticeUrlParamsCategory === noticeCategoryType ? 'bg-white' : ''}`}>
              {noticeType}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}
