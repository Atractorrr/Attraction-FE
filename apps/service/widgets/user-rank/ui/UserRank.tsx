import Image from 'next/image'
import Link from 'next/link'
import { TrophyOutline } from '@attraction/icons'
import { Background, Title } from '@/shared/ui'

export default function UserRank() {
  return (
    <Background>
      <div className="grid w-full items-start gap-y-4">
        <div className="flex justify-between">
          <Title icon={<TrophyOutline className="size-5" />} text="유저 랭킹" />
          <Link href="/" className="text-sm text-gray-400">
            더보기
          </Link>
        </div>
        <div className="grid justify-items-center gap-y-4 p-5">
          <Image
            src="/images/warning.png"
            width={240}
            height={240}
            alt="warning"
          />
          <div className="grid gap-y-2 text-center">
            <p className="text-lg font-bold">랭킹 시스템을 준비하고 있어요</p>
            <p className="font-thin text-gray-400">
              조금만 기다려주시면 좋은 서비스로 돌아올게요
            </p>
          </div>
        </div>
      </div>
    </Background>
  )
}
