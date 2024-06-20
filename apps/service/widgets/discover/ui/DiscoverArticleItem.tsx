import Image from 'next/image'
import Link from 'next/link'
import { getTimeFromNow } from '@/shared/lib'
import { DiscoverArticle } from '../model'

export default function DiscoverArticleItem({ ...props }: DiscoverArticle) {
  return (
    <Link href={props.contentUrl} className="flex w-full gap-x-5">
      <div className="relative flex size-full h-[120px] w-[180px] shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-100 md:max-w-[180px] dark:border-gray-700 dark:bg-gray-700">
        <Image
          className="size-full object-cover transition-all hover:scale-110"
          src={
            props.thumbnailUrl.length
              ? props.thumbnailUrl
              : '/images/default-16x9.jpg'
          }
          width={500}
          height={500}
          alt={props.title ?? 'no thumbnail'}
        />
        <div className="absolute bottom-2 right-2 rounded-md bg-black/60 p-1 text-xs text-white">
          {props.readingTime > 1 ? `약 ${props.readingTime}분` : `1분 미만`}
        </div>
      </div>
      <div className="flex max-w-[890px] flex-col gap-y-3 overflow-hidden text-ellipsis">
        <p className="w-full truncate font-medium">{props.title}</p>
        <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
          {props.contentSummary}
        </p>
        <div className="flex text-sm text-gray-500 dark:text-gray-400">
          <p>{props.newsletterName}</p>
          <p className="before:mx-1 before:content-['·']">
            {getTimeFromNow(props.receivedAt)}
          </p>
        </div>
      </div>
    </Link>
  )
}
