import Link from 'next/link'
import { GoogleOAuthButton, MainLogoSVG } from '@/shared/ui'
import SignInCarousel from './SignInCarousel'

export default function SignIn() {
  return (
    <div className="mx-auto flex size-full min-h-dvh max-w-7xl grow flex-col bg-white p-5 lg:min-h-[calc(100dvh-6rem)] lg:rounded-2xl lg:shadow-lg xl:flex-row xl:items-stretch xl:justify-center dark:bg-gray-800">
      <div className="h-auto min-h-fit w-full grow overflow-hidden rounded-xl border border-gray-100 bg-gray-50 sm:min-h-[360px] md:min-h-0 md:grow-0 xl:w-[calc(100%-480px)] dark:border-gray-700 dark:bg-gray-700">
        <SignInCarousel />
      </div>
      <div className="flex flex-col justify-between gap-12 pt-8 sm:px-8 sm:pb-6 sm:pt-12 md:grow md:gap-20 xl:ml-5 xl:px-5 xl:py-20">
        <div className="px-2 pt-5 sm:px-0">
          <h1 className="mb-5 flex items-center justify-start sm:mb-8">
            <Link href="/" title="메인페이지로 이동">
              <MainLogoSVG className="h-8 w-auto sm:h-[42px]" />
            </Link>
          </h1>
          <p className="break-keep text-gray-500 sm:text-lg dark:text-gray-400">
            나만의 뉴스레터 관리 서비스 어트랙션과 함께 <br />
            뉴스레터 생활을 더욱 풍요롭게 만들어보세요!
          </p>
        </div>
        <div className="flex flex-col justify-center pb-10">
          <div className="mb-4 flex items-center px-2 sm:mb-8">
            <div className="flex h-px w-full grow bg-gray-100 dark:bg-gray-700" />
            <p className="shrink-0 whitespace-nowrap px-4 text-gray-500 dark:text-gray-400">
              소셜 로그인
            </p>
            <div className="flex h-px w-full grow bg-gray-100 dark:bg-gray-700" />
          </div>
          <GoogleOAuthButton />
        </div>
      </div>
    </div>
  )
}
