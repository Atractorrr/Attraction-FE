'use client'

import { useAuth } from '@/entities/auth'
import { Button, Input } from '@attraction/design-system'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

function NoticePageBtn({
  pageBtnClickEvent,
  checkPageBtnDisabled,
  btnType,
}: {
  checkPageBtnDisabled: (type: 'next' | 'prev') => boolean
  pageBtnClickEvent: (type: 'next' | 'prev') => void
  btnType: 'next' | 'prev'
}) {
  return (
    <Button
      disabled={checkPageBtnDisabled(btnType)}
      className="rounded-lg bg-gray-50 px-5 py-2 disabled:text-gray-400"
      onClick={() => {
        pageBtnClickEvent(btnType)
      }}>
      {btnType === 'next' ? '다음' : '이전'}
    </Button>
  )
}

export default function NoticeFooter({ maxLength }: { maxLength: number }) {
  const { userRole } = useAuth()
  const searchParam = useSearchParams()
  const router = useRouter()
  const pageNum = useMemo(() => searchParam.get('page'), [searchParam])
  const category = useMemo(() => searchParam.get('category'), [searchParam])
  const isAdmin = useMemo(() => userRole === 'ADMIN', [userRole])

  const pageNumEnterEvent = (inputPageNum: number) => {
    router.push(`/notice?category=${category}&page=${inputPageNum}`)
  }

  const pageBtnClickEvent = (btnType: 'next' | 'prev') => {
    if (btnType === 'next') {
      router.push(`/notice?category=${category}&page=${Number(pageNum) + 1}`)
    }

    if (btnType === 'prev') {
      router.push(`/notice?category=${category}&page=${Number(pageNum) - 1}`)
    }
  }

  const checkPageBtnDisabled = (btnType: 'next' | 'prev') => {
    if (btnType === 'next' && Number(pageNum) === maxLength) return true
    if (btnType === 'prev' && Number(pageNum) === 1) return true

    return false
  }
  return (
    <div className="flex justify-between xs:flex-col xs:gap-4 md:flex-row">
      <div className="flex gap-3">
        <span className="text-gray-500">페이지</span>
        <div className="space-x-3">
          <Input
            defaultValue={pageNum!}
            type="number"
            className="m-0 w-16 rounded border border-gray-100 px-2 text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                pageNumEnterEvent(Number(e.currentTarget.value))
              }
            }}
          />
          <span className="text-gray-500">/ {maxLength}</span>
        </div>
      </div>

      <div
        className={`md: flex gap-2 ${isAdmin ? 'xs:justify-between' : 'xs:justify-end'}`}>
        {isAdmin && (
          <Button className="rounded-lg bg-gray-700 px-5 py-2 text-white xs:inline md:hidden">
            글쓰기
          </Button>
        )}
        <div className="space-x-2">
          <NoticePageBtn
            checkPageBtnDisabled={checkPageBtnDisabled}
            pageBtnClickEvent={pageBtnClickEvent}
            btnType="prev"
          />
          <NoticePageBtn
            checkPageBtnDisabled={checkPageBtnDisabled}
            pageBtnClickEvent={pageBtnClickEvent}
            btnType="next"
          />
        </div>
        {isAdmin && (
          <Button className="hidden rounded-lg bg-gray-700 px-5 py-2 text-white md:inline">
            글쓰기
          </Button>
        )}
      </div>
    </div>
  )
}
