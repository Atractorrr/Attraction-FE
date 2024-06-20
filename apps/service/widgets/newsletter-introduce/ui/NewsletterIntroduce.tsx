import NewsletterPreviousArticles from './NewsletterPreviousArticles'
import NewsletterProfile from './NewsletterProfile'
import RelatedNewsletters from './RelatedNewsletters'

interface NewsletterIntroduceProps {
  newsletterId: string
}

export default function NewsletterIntroduce({
  newsletterId,
}: NewsletterIntroduceProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex w-full flex-col gap-y-6 lg:w-[calc(100%-366px)]">
        <NewsletterProfile newsletterId={newsletterId} />
        <NewsletterPreviousArticles newsletterId={newsletterId} />
      </div>
      <div className="flex w-full flex-col gap-y-6 lg:w-[366px]">
        <RelatedNewsletters newsletterId={newsletterId} />
      </div>
    </div>
  )
}
