import Link from 'next/link'
import { ThumbnailImage } from '@/shared/ui'
import { RelatedNewsletter } from '../model'

export default function RelatedNewsletterItem({ ...props }: RelatedNewsletter) {
  return (
    <Link className="flex gap-x-4" href={`/newsletter/${props.id}`}>
      <div className="size-16 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-100 dark:border-gray-700 dark:bg-gray-700">
        <ThumbnailImage
          src={props.thumbnailUrl}
          alt={`썸네일 이미지 : ${props.name}`}
          type="profile"
        />
      </div>
      <div className="flex flex-col gap-y-0.5">
        <p className="w-[100px] truncate font-bold sm:w-[200px]">
          {props.name}
        </p>
        <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </Link>
  )
}
