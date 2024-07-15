import Link from 'next/link'
import { ThumbnailImage } from '@/shared/ui'
import { RelatedNewsletter } from '../model'

export default function RelatedNewsletterItem({ ...props }: RelatedNewsletter) {
  return (
    <Link className="flex gap-4" href={`/newsletter/${props.id}`}>
      <div className="size-16 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-100 dark:border-gray-700 dark:bg-gray-700">
        <ThumbnailImage
          src={props.thumbnailUrl}
          alt={`연관 뉴스레터 썸네일 이미지: ${props.name}`}
          type="profile"
        />
      </div>
      <p className="block w-[calc(100%-5rem)]">
        <strong className="mb-0.5 block w-full truncate font-bold">
          {props.name}
        </strong>
        <span className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
          {props.description}
        </span>
      </p>
    </Link>
  )
}
