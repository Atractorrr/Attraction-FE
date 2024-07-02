'use client'

import { RefreshOutline } from '@attraction/icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Offline() {
  const router = useRouter()

  return (
    <div>
      <div className="mx-auto mb-8 flex size-24 items-center justify-center rounded-full bg-gray-50 sm:mb-12 sm:size-32 lg:size-40 dark:bg-gray-700">
        <Image
          src="/images/network-not-working.png"
          alt="오프라인 페이지 아이콘"
          className="block size-12 sm:size-16 lg:size-20"
          width={80}
          height={80}
          priority
        />
      </div>
      <div className="break-keep text-center">
        <h3 className="mb-2 text-lg font-bold xs:text-xl sm:mb-4 lg:text-2xl">
          현재 오프라인 상태에요
        </h3>
        <p className="text-sm text-gray-500 xs:text-base lg:text-lg dark:text-gray-400">
          네트워크 연결 상태를 확인하고 다시시도 부탁드려요
        </p>
      </div>
      <p className="mt-16 flex flex-col-reverse items-center justify-center gap-2 xs:mt-12 xs:flex-row sm:mt-16 lg:gap-3">
        <button
          type="button"
          title="다시 시도"
          className="flex w-[120px] items-center justify-center gap-x-2 rounded-md bg-gray-50 py-2 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          onClick={router.back}>
          <RefreshOutline />
          <span>다시시도</span>
        </button>
      </p>
    </div>
  )
}
