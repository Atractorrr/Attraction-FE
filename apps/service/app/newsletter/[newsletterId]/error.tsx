'use client'

import { Container } from '@/shared/ui'
import { RefreshOutline } from '@attraction/icons'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }, [error])

  return (
    <Container>
      <div className="flex min-h-96 w-full items-center justify-center px-5 pb-32 pt-20">
        <div>
          <div className="mx-auto mb-8 flex size-24 items-center justify-center rounded-full bg-gray-50 sm:mb-12 sm:size-32 lg:size-40 dark:bg-gray-700">
            <Image
              src="/images/warning-icon.png"
              alt="검색 실패 아이콘"
              className="block size-12 sm:size-16 lg:size-20"
              width={80}
              height={80}
              priority
            />
          </div>
          <div className="break-keep text-center">
            <h3 className="mb-2 text-lg font-bold xs:text-xl sm:mb-4 lg:text-2xl">
              현재 뉴스레터 소개 서비스가 원활하지 않아요
            </h3>
            <p className="text-sm text-gray-500 xs:text-base lg:text-lg dark:text-gray-400">
              동일한 현상이 지속될 경우 관리자에게 문의 부탁드려요
            </p>
          </div>
          <p className="mt-16 flex flex-col-reverse items-center justify-center gap-2 xs:mt-12 xs:flex-row sm:mt-16 lg:gap-3">
            <button
              type="button"
              title="다시시도"
              onClick={reset}
              className="flex w-full gap-x-2 whitespace-nowrap rounded-lg bg-gray-50 px-5 py-2 text-center transition-colors hover:bg-gray-100 xs:w-auto md:px-6 md:py-3 dark:bg-gray-700 dark:hover:bg-gray-600">
              <RefreshOutline className="size-5" />
              <span>다시시도</span>
            </button>
          </p>
        </div>
      </div>
    </Container>
  )
}
