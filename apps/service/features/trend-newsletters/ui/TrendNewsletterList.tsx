import { GuideTxt } from '@/shared/ui'
import TrendNewsletterItem from './TrendNewsletterItem'
import { TrendNewsletterResponse } from '../model'

export default function TrendNewsletterList({
  mainPageNewsletters,
}: TrendNewsletterResponse) {
  return (
    <div>
      {mainPageNewsletters.length ? (
        <div className="grid gap-4 xl:grid-cols-2">
          {mainPageNewsletters.map((newsletter) => (
            <TrendNewsletterItem key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>
      ) : (
        <div className="pb-40 pt-32">
          <GuideTxt title="데이터가 없어요" sub="최대한 빠르게 추가할게요" />
        </div>
      )}
    </div>
  )
}
