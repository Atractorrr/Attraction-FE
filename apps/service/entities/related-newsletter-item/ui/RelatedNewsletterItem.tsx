import Link from 'next/link'
import Image from 'next/image'
import { RelatedNewsletter } from '../model'

export default function RelatedNewsletterItem({ ...props }: RelatedNewsletter) {
  return (
    <Link className="flex gap-x-4" href={`/newsletter/${props.id}`}>
      <div className="size-16 shrink-0 overflow-hidden rounded-xl">
        <Image
          className="size-full"
          src={props.thumbnailUrl}
          width={500}
          height={500}
          alt={props.name}
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
