import { NewsletterPreviousArticles } from '@/features/newsletter-previous-articles'
import { RelatedNewsletters } from '@/features/related-newsletters'
import dynamic from 'next/dynamic'

interface NewsletterIntroduceProps {
  email: string | undefined
  newsletterId: string
}

const NewsletterProfile = dynamic(
  () =>
    import('@/features/newsletter-profile').then(
      (mod) => mod.NewsletterProfile,
    ),
  { ssr: false },
)

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
