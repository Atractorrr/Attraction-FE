import Background from '@/shared/background/ui'
import Title from '@/shared/title/ui'
import { TrophyOutline } from '@attraction/icons'
import Image from 'next/image'

export default function UserRank() {
  return (
    <Background>
      <div className="grid w-full items-start gap-y-4">
        <Title icon={<TrophyOutline className="size-5" />} text="유저 랭킹" />
        <div className="grid justify-items-center gap-y-4 p-5">
          <Image
            src="/images/warning.png"
            width={240}
            height={240}
            alt="warning"
          />
          <div className="grid gap-y-2 text-center">
            <p className="text-lg font-bold">랭킹 시스템을 준비하고 있어요</p>
            <p>조금만 기다려주시면 좋은 서비스로 돌아올게요</p>
          </div>
        </div>
      </div>
    </Background>
  )
}
