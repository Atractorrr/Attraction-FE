'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ADMIN_EMAIL } from '../constant'

export default function NotFound() {
  const router = useRouter()

  return (
    <div>
      <div className="mx-auto mb-8 flex size-36 items-center justify-center rounded-full bg-gray-50 sm:mb-12 sm:size-48 lg:size-60 dark:bg-gray-700">
        <Image
          src="/images/not-found-icon.png"
          alt="404 페이지 아이콘"
          className="block size-20 sm:size-32 lg:size-40"
          width={160}
          height={160}
          priority
        />
      </div>
      <div className="break-keep text-center">
        <h3 className="mb-4 text-lg font-bold xs:text-xl sm:mb-6 lg:text-2xl">
          요청하신 페이지를 찾을 수 없어요
        </h3>
        <p className="text-sm text-gray-500 xs:text-base lg:text-lg dark:text-gray-400">
          찾으시고자 하는 페이지가 삭제되었거나 이동되었을 수 있어요
          <br className="hidden sm:block" />
          주소를 한번 더 확인해 주시고, 동일한 증상이 지속적으로 나타나는 경우{' '}
          <br className="hidden sm:block" />
          관리자({ADMIN_EMAIL})에게 문의해 주세요
        </p>
      </div>
      <p className="mt-16 flex flex-col-reverse items-center justify-center gap-2 xs:mt-12 xs:flex-row sm:mt-16 lg:gap-3">
        <button
          type="button"
          title="이전 페이지로 이동"
          onClick={router.back}
          className="w-full whitespace-nowrap rounded-lg bg-gray-50 px-6 py-3 text-center transition-colors hover:bg-gray-100 xs:w-auto dark:bg-gray-700 dark:hover:bg-gray-600">
          이전 페이지
        </button>
        <Link
          href="/"
          title="메인 페이지로 이동"
          className="w-full whitespace-nowrap rounded-lg bg-gray-700 px-8 py-3 text-center text-gray-50 transition-colors hover:bg-gray-800 xs:w-auto dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100">
          메인으로
        </Link>
      </p>
    </div>
  )
}
