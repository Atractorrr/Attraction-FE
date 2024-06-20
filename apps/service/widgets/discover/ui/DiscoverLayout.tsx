import { TrendNewsletters } from '@/features/trend-newsletters'
import DiscoverInput from './DiscoverInput'
import HotKeywords from './HotKeywords'

export default function DiscoverLayout() {
  return (
    <div>
      <div className="mb-12 flex w-full justify-center px-4 lg:px-0">
        <DiscoverInput />
      </div>
      <div className="flex w-full flex-col justify-center gap-6 lg:flex-row">
        <div className="w-full lg:w-[calc(100%-366px)]">
          <TrendNewsletters />
        </div>
        <div className="w-full lg:w-[366px]">
          <HotKeywords />
        </div>
      </div>
    </div>
  )
}
