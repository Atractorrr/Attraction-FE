import Link from 'next/link'
import { GoogleOAuthButton, MainTextLogoSVG } from '@/shared/ui'
import ServiceIntroduceView from './ServiceIntroduceView'

export default function SignIn() {
  return (
    <ServiceIntroduceView>
      <section
        id="sign-in"
        className="mx-auto flex h-dvh min-h-fit w-full max-w-[540px] flex-col justify-between bg-white p-5 md:p-8 dark:bg-gray-800">
        <div className="py-12">
          <h1 className="mb-5 flex items-center justify-start sm:mb-8">
            <Link href="/" title="메인페이지로 이동">
              <MainTextLogoSVG className="h-9 w-auto md:h-[42px]" />
            </Link>
          </h1>
          <p className="break-keep px-1 text-gray-500 sm:text-lg dark:text-gray-400">
            나만의 뉴스레터 관리 서비스 어트랙션과 함께{' '}
            <br className="hidden xs:block" />
            뉴스레터 생활을 더욱 풍요롭게 만들어보세요!
          </p>
        </div>
        <div className="pb-16">
          <div className="mb-4 flex items-center px-2 sm:mb-8">
            <div className="flex h-px w-full grow bg-gray-100 dark:bg-gray-700" />
            <p className="shrink-0 whitespace-nowrap px-4 text-gray-500 dark:text-gray-400">
              소셜 로그인
            </p>
            <div className="flex h-px w-full grow bg-gray-100 dark:bg-gray-700" />
          </div>
          <GoogleOAuthButton />
        </div>
      </section>
    </ServiceIntroduceView>
  )
}
