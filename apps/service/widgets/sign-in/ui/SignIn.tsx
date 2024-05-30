import { SignInCarousel } from '@/features/sign-in-carousel'
import { LogoSVG } from '@/public/svgs/svg'
import { GoogleOAuthButton } from '@/shared/ui/oauth-button'
import Link from 'next/link'
import { INTRODUCE_MESSAGE } from '../constant'

export default function SignIn() {
  return (
    <div className="mx-auto flex size-full max-w-7xl flex-col bg-white p-5 md:flex-row md:items-stretch md:rounded-2xl md:shadow-lg dark:bg-gray-800">
      <div className="h-auto w-full md:w-[calc(100%-480px)]">
        <SignInCarousel />
      </div>
      <div className="flex grow flex-col justify-between px-5 py-20 md:ml-5">
        <div className="flex w-full flex-col gap-y-8">
          <h1 className="inline-flex items-center justify-start">
            <Link href="/" title="메인페이지로 이동">
              <LogoSVG className="h-fit" />
            </Link>
          </h1>
          <p className="max-w-[300px] break-keep text-gray-400">
            {INTRODUCE_MESSAGE}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-y-8 py-4">
          <div className="flex items-center">
            <div className="flex h-px w-full grow border-[0.5px] border-gray-100 dark:border-gray-700" />
            <p className="shrink-0 px-4 text-gray-400">소셜 로그인</p>
            <div className="flex h-px w-full grow border-[0.5px] border-gray-100 dark:border-gray-700" />
          </div>
          <GoogleOAuthButton />
        </div>
      </div>
    </div>
  )
}
