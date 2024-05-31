import Image from 'next/image'
import Link from 'next/link'
import { TrendNewsletter } from '../model'

interface TrendNewsletterItemProps {
  newsletter: TrendNewsletter
}

// TODO: 다른 페이지 적용 완료되면 Link 적용할 것
export default function TrendNewsletterItem({
  newsletter,
}: TrendNewsletterItemProps) {
  return (
    <Link href={`/newsletter/${newsletter.id}`}>
      <article className="flex gap-x-4">
        {newsletter.newsletterThumbnailUrl ? (
          <Image
            src={newsletter.newsletterThumbnailUrl}
            alt={newsletter.name}
            width={300}
            height={300}
            className="size-16 shrink-0 rounded-xl object-cover"
          />
        ) : (
          <div className="size-16 shrink-0 rounded-xl border-gray-100 bg-gray-50 dark:border-gray-600 dark:bg-gray-700" />
        )}

        <div className="flex flex-col gap-y-1">
          <p className="whitespace-nowrap text-base font-semibold">
            {newsletter.name}
          </p>
          <p className="line-clamp-2 text-sm font-normal text-gray-500">
            {newsletter.description}
          </p>
        </div>
      </article>
    </Link>
  )
}
