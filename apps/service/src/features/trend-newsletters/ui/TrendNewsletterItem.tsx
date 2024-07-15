import Link from 'next/link'
import { ThumbnailImage } from '@/shared/ui'
import { TrendNewsletter } from '../model'

interface TrendNewsletterItemProps {
  newsletter: TrendNewsletter
}

export default function TrendNewsletterItem({
  newsletter,
}: TrendNewsletterItemProps) {
  return (
    <Link href={`/newsletter/${newsletter.id}`}>
      <div className="flex gap-x-4">
        <div className="size-16 shrink-0 overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
          <ThumbnailImage
            src={newsletter.newsletterThumbnailUrl}
            alt={`뉴스레터 썸네일 이미지: ${newsletter.name}`}
            type="profile"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="whitespace-nowrap text-base font-semibold">
            {newsletter.name}
          </p>
          <p className="line-clamp-2 text-sm font-normal text-gray-500">
            {newsletter.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
