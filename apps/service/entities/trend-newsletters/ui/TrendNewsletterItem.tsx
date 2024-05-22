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
    <Link href={`/inbox/article/${newsletter.id}`}>
      <article className="flex gap-x-4">
        <Image
          src={newsletter.newsletterThumbnailUrl}
          alt={newsletter.name}
          width={300}
          height={300}
          className="size-20 shrink-0 rounded-xl object-cover"
        />
        <div className="flex flex-col gap-y-1">
          <p className="text-xl font-semibold">{newsletter.name}</p>
          <p className="font-thin text-gray-500">{newsletter.description}</p>
        </div>
      </article>
    </Link>
  )
}
