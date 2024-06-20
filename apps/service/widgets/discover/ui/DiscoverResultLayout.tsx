import DiscoverArticles from './DiscoverArticles'
import DiscoverInput from './DiscoverInput'
import DiscoverRelatedNewsletters from './DiscoverRelatedNewsletters'

interface DiscoverResultLayoutProps {
  keyword: string
}

export default function DiscoverResultLayout({
  keyword,
}: DiscoverResultLayoutProps) {
  return (
    <div>
      <div className="mb-12 flex w-full justify-center px-4 pt-20 md:pt-0 lg:px-0">
        <DiscoverInput />
      </div>
      <div className="flex w-full flex-col justify-center gap-6 md:flex-row">
        <div className="w-full lg:w-[calc(100%-366px)]">
          <DiscoverArticles keyword={keyword} />
        </div>
        <div className="w-full lg:w-[366px]">
          <DiscoverRelatedNewsletters keyword={keyword} />
        </div>
      </div>
    </div>
  )
}
