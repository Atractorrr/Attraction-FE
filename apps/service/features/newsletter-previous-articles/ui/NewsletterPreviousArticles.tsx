'use client'

import { Background, LoadingSpinner, Title } from '@/shared/ui'
import { ClockOutline } from '@attraction/icons'
import NewsletterPreviousArticle from '@/entities/newsletter-previous-article-item/ui/NewsletterPreviousArticle'
import { useNewsletterPreviousArticles } from '../lib'

interface NewsletterIntroduceProps {
  newsletterId: string
}

export default function NewsletterPreviousArticles({
  newsletterId,
}: NewsletterIntroduceProps) {
  const { data, isPending } = useNewsletterPreviousArticles(newsletterId)

  return (
    <Background>
      <div className="grid w-full gap-y-5">
        <Title icon={<ClockOutline className="size-6" />} text="지난 아티클" />
        {isPending || !data ? (
          <LoadingSpinner />
        ) : (
          <div className="flex w-full flex-col gap-y-5">
            {data.data.map((newsletter) => (
              <NewsletterPreviousArticle key={newsletter.id} {...newsletter} />
            ))}
          </div>
        )}
      </div>
    </Background>
  )
}
