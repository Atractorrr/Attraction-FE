import { RefreshOutline, SirenEmoji } from '@attraction/icons'
import { Button } from '@attraction/design-system/dist'
import GuideTxt from './GuideTxt'

interface ErrorGuideTxtProps {
  title?: string
  sub?: string
}

export default function ErrorGuideTxt({
  title = '이용에 불편을 드려 죄송해요',
  sub = '동일한 현상이 계속될 경우 문의 부탁드려요',
}: ErrorGuideTxtProps) {
  return (
    <div className="flex flex-col gap-y-9 bg-gray-100 pb-40 pt-32">
      <div className="flex flex-col gap-y-6">
        <div className="size-16 shrink-0 rounded-full ">
          <SirenEmoji className="size-9" />
        </div>
        <GuideTxt title={title} sub={sub} />
      </div>
      <Button className="flex gap-x-2 rounded-md bg-gray-100">
        <RefreshOutline />
        <span>다시시도</span>
      </Button>
    </div>
  )
}
