import { GOOGLE_OAUTH_FORCE_URL } from '@/shared/constant'
import { WarnTxt } from '@/shared/ui'
import Link from 'next/link'

export default function ShouldReissueTokenGuide() {
  return (
    <div className="border-gray-100 bg-white p-5 md:mb-8 md:rounded-xl md:border dark:border-gray-800 dark:bg-gray-800">
      <WarnTxt
        content={
          <>
            메일 접근 권한이 만료되었어요 <br className="sm:hidden" />
            원활한 서비스 사용을 위해 다시{' '}
            <Link
              href={GOOGLE_OAUTH_FORCE_URL}
              title="로그인 하러가기"
              className="text-blue-400 underline dark:text-blue-300">
              로그인
            </Link>{' '}
            부탁드려요
          </>
        }
        type="info"
      />
    </div>
  )
}
