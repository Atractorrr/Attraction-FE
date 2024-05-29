import { GoogleSVG } from '@/public/svgs/svg'
import { GOOGLE_OAUTH_URL } from '@/shared/constant/oAuthURL'

export default function GoogleOAuthButton() {
  return (
    <a
      href={GOOGLE_OAUTH_URL.href}
      className="flex h-12 items-center rounded-xl border border-gray-100 px-4 py-2 md:h-14">
      <GoogleSVG className="size-4 justify-self-start md:size-7" />
      <p className="mx-auto whitespace-nowrap text-sm md:text-base">
        구글 계정으로 로그인
      </p>
    </a>
  )
}
