import Image from 'next/image'
import Link from 'next/link'
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
          {newsletter.newsletterThumbnailUrl ? (
            <Image
              src={newsletter.newsletterThumbnailUrl}
              alt={newsletter.name}
              width={300}
              height={300}
              className="size-full object-cover"
            />
          ) : (
            <Image
              src="/images/default-1x1.jpg"
              alt="no image"
              width={300}
              height={300}
              className="size-full"
            />
          )}
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
