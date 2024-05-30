import { SignInCarousel } from '@/features/sign-in-carousel'
import { LogoSVG } from '@/public/svgs/svg'
import { GoogleOAuthButton } from '@/shared/ui/oauth-button'
import { INTRODUCE_MESSAGE } from '../constant'

export default function Signin() {
  return (
    <div className="flex size-full max-h-[760px] max-w-7xl flex-col bg-white md:flex-row md:rounded-2xl md:shadow-lg">
      <div className="h-[480px] w-full max-w-[900px] p-4 md:col-span-2">
        <SignInCarousel />
      </div>
      <div className="flex shrink-0 grow flex-col justify-between p-4 pb-11 md:py-24 md:pr-8">
        <div className="flex w-full flex-col gap-y-8">
          <LogoSVG className="h-fit" />
          <p className="max-w-[300px] break-keep text-gray-400">
            {INTRODUCE_MESSAGE}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-y-8 py-4">
          <div className="flex items-center">
            <div className="flex h-px w-full grow border-[0.5px] border-gray-100" />
            <p className="shrink-0 px-4 text-gray-400">소셜 로그인</p>
            <div className="flex h-px w-full grow border-[0.5px] border-gray-100" />
          </div>
          <GoogleOAuthButton />
        </div>
      </div>
    </div>
  )
}
