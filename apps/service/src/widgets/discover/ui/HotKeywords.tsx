import { Container, GuideTxt, Title } from '@/shared/ui'
import { PodiumOutline } from '@attraction/icons'
import Image from 'next/image'

export default function HotKeywords() {
  return (
    <Container>
      <div className="p-5">
        <Title icon={<PodiumOutline className="size-6" />} text="인기 검색어" />
        <div className="mt-5 flex flex-col items-center justify-center gap-y-4 pb-16 pt-10">
          <Image
            width={240}
            height={240}
            src="/images/construction.png"
            alt="서비스 준비 중 이미지"
          />
          <div className="mt-7">
            <GuideTxt
              title="인기 검색어를 준비하고 있어요"
              sub="조금만 기다려주시면 더 좋은 서비스로 찾아올게요"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
