import NewsletterPreviousArticles from './NewsletterPreviousArticles'
import NewsletterProfile from './NewsletterProfile'
import RelatedNewsletters from './RelatedNewsletters'

interface NewsletterIntroduceProps {
  email: string | undefined
  newsletterId: string
}

export default function NewsletterIntroduce({
  email,
  newsletterId,
}: NewsletterIntroduceProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex w-full flex-col gap-y-6 lg:w-[calc(100%-366px)]">
        <NewsletterProfile email={email} newsletterId={newsletterId} />
        <NewsletterPreviousArticles newsletterId={newsletterId} />
      </div>
      <div className="flex w-full flex-col gap-y-6 lg:w-[366px]">
        <RelatedNewsletters newsletterId={newsletterId} />
      </div>
    </div>
  )
}
