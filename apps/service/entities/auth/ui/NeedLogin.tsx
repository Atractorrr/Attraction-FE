'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Container } from '@/shared/ui'
import { GOOGLE_OAUTH_URL } from '@/shared/constant'

export interface NeedLoginProps {
  title?: string
  sub?: string
}

export default function NeedLogin({ title, sub }: NeedLoginProps) {
  const router = useRouter()

  return (
    <Container>
      <div className="flex min-h-96 w-full items-center justify-center px-5 pb-32 pt-20">
        <div>
          <div className="mx-auto mb-8 flex size-24 items-center justify-center rounded-full bg-gray-50 sm:mb-12 sm:size-32 lg:size-40 dark:bg-gray-700">
            <Image
              src="/images/need-login-icon.png"
              alt="로그인 필요 서비스 아이콘"
              className="block size-12 sm:size-16 lg:size-20"
              width={80}
              height={80}
              priority
            />
          </div>
          <div className="break-keep text-center">
            <h3 className="mb-2 text-lg font-bold xs:text-xl sm:mb-4 lg:text-2xl">
              {title ?? '로그인이 필요한 서비스에요'}
            </h3>
            <p className="text-sm text-gray-500 xs:text-base lg:text-lg dark:text-gray-400">
              {sub ?? '어트랙션과 함께 즐거운 뉴스레터 라이프를 즐겨보세요!'}
            </p>
          </div>
          <p className="mt-16 flex flex-col-reverse items-center justify-center gap-2 xs:mt-12 xs:flex-row sm:mt-16 lg:gap-3">
            <button
              type="button"
              title="이전 페이지로 이동"
              onClick={router.back}
              className="w-full whitespace-nowrap rounded-lg bg-gray-50 px-5 py-2 text-center transition-colors hover:bg-gray-100 xs:w-auto md:px-6 md:py-3 dark:bg-gray-700 dark:hover:bg-gray-600">
              이전 페이지
            </button>
            <Link
              href={GOOGLE_OAUTH_URL}
              title="로그인 페이지 이동"
              className="w-full whitespace-nowrap rounded-lg bg-gray-700 px-5 py-2 text-center text-gray-50 transition-colors hover:bg-gray-800 xs:w-auto md:px-8 md:py-3 dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100">
              로그인 하러가기
            </Link>
          </p>
        </div>
      </div>
    </Container>
  )
}
