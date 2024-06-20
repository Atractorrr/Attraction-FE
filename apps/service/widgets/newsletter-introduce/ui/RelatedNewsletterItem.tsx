import Link from 'next/link'
import Image from 'next/image'
import { RelatedNewsletter } from '../model'

export default function RelatedNewsletterItem({ ...props }: RelatedNewsletter) {
  return (
    <Link className="flex gap-x-4" href={`/newsletter/${props.id}`}>
      <div className="size-16 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-100 dark:border-gray-700 dark:bg-gray-700">
        <Image
          className="size-full object-cover"
          src={
            props.thumbnailUrl.length
              ? props.thumbnailUrl
              : '/images/default-1x1.jpg'
          }
          width={500}
          height={500}
          alt={props.name ?? 'no thumbnail'}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="w-[200px] truncate font-bold">{props.name}</p>
        <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </Link>
  )
}
