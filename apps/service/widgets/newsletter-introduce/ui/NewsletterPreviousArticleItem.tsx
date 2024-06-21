import Link from 'next/link'
import { getTimeFromNow } from '@/shared/lib'
import { ThumbnailImage } from '@/shared/ui'
import { NewsletterPreviousArticleData } from '../model'

interface NewsletterPreviousArticleItemProps
  extends NewsletterPreviousArticleData {
  newsletterId: string
}

export default function NewsletterPreviousArticleItem({
  newsletterId,
  ...props
}: NewsletterPreviousArticleItemProps) {
  return (
    <Link
      href={`/newsletter/${newsletterId}/article/${props.id}`}
      className="flex w-full gap-x-5">
      <div className="relative flex size-full h-[120px] w-[180px] shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-100 md:max-w-[180px] dark:border-gray-700 dark:bg-gray-700">
        <ThumbnailImage
          src={props.thumbnailUrl}
          alt={`아티클 제목 : ${props.title}`}
          type="article"
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
