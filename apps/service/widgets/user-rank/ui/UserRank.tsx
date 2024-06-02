import Image from 'next/image'
import Link from 'next/link'
import { TrophyOutline } from '@attraction/icons'
import { Background, GuideTxt, Title } from '@/shared/ui'

export default function UserRank() {
  return (
    <Background>
      <div className="flex min-h-[540px] w-full flex-col items-center gap-y-16 p-5">
        <div className="flex w-full items-center justify-between">
          <Title icon={<TrophyOutline className="size-5" />} text="유저 랭킹" />
          <Link
            href="/"
            className="text-sm text-gray-400 transition-colors hover:text-blue-400 dark:hover:text-blue-300">
            더보기
          </Link>
        </div>
        <div className="flex h-auto flex-col items-center justify-center">
          <div className="flex flex-col justify-center gap-y-4 p-5">
            <div className="size-52">
              <Image
                className="size-full"
                src="/images/warning.png"
                width={240}
                height={240}
                alt="warning"
              />
            </div>
          </div>
          <GuideTxt
            title="랭킹 시스템을 준비하고 있어요"
            sub="조금만 기다려주시면 좋은 서비스로 돌아올게요"
          />
        </div>
      </div>
    </Background>
  )
}
