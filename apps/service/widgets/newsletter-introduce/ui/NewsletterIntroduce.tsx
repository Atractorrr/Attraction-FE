import { NewsletterPreviousArticles } from '@/features/newsletter-previous-articles'
import { NewsletterProfile } from '@/features/newsletter-profile'
import { RelatedNewsletters } from '@/features/related-newsletters'

interface NewsletterIntroduceProps {
  newsletterId: string
}

export default function NewsletterIntroduce({
  newsletterId,
}: NewsletterIntroduceProps) {
  return (
    <section className="flex flex-col items-center justify-center lg:p-6">
      <div className="grid w-full gap-6 lg:grid-cols-3">
        <div className="flex w-full flex-col gap-y-6 lg:col-span-2">
          <NewsletterProfile newsletterId={newsletterId} />
          <NewsletterPreviousArticles newsletterId={newsletterId} />
        </div>
        <div className="flex w-full">
          <RelatedNewsletters newsletterId={newsletterId} />
        </div>
      </div>
    </section>
  )
}
