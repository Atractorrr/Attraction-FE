import { Container, GuideTxt } from '@/shared/ui'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

function NeedLogin() {
  return (
    <Container>
      <div className="flex size-full h-[600px] flex-col items-center justify-center gap-y-12">
        <div className="flex size-40 shrink-0 items-center justify-center rounded-full bg-gray-50 dark:bg-gray-700">
          <Image
            src="/images/need-login-icon.png"
            width={100}
            height={100}
            className="size-20"
            alt="need-login"
          />
        </div>
        <GuideTxt
          title="로그인이 필요한 서비스에요"
          sub="어트랙션과 함께 즐거운 뉴스레터 라이프를 즐겨보세요!"
        />
        <div className="mt-4 flex gap-x-2">
          <Link
            href="/"
            className="rounded-lg bg-gray-50 px-6 py-2 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
            홈으로 이동하기
          </Link>
          <Link
            href="/sign-in"
            className="rounded-lg bg-gray-700 px-6 py-2 text-white transition-colors hover:bg-gray-600 dark:bg-gray-50 dark:text-black dark:hover:bg-gray-100">
            로그인 하러가기
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default function WithAuth(component: ReactNode) {
  const token = cookies().get('accessToken')

  return token ? component : <NeedLogin />
}
