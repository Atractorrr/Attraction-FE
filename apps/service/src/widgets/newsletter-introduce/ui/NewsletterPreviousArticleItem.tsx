import Link from 'next/link'
import { getTimeFromNow } from '@/shared/lib'
import { ThumbnailImage } from '@/shared/ui'
import { NewsletterPreviousArticleData } from '../model'

interface NewsletterPreviousArticleItemProps
  extends NewsletterPreviousArticleData {
  newsletterId: number
}

export default function NewsletterPreviousArticleItem({
  newsletterId,
  ...props
}: NewsletterPreviousArticleItemProps) {
  return (
    <Link
      href={`/newsletter/${newsletterId}/article/${props.id}`}
      className="flex w-full flex-col gap-5 sm:flex-row">
      <div className="relative flex size-full h-[200px] w-full shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-100 sm:h-[120px] sm:w-[180px] md:max-w-[180px] dark:border-gray-700 dark:bg-gray-700">
        <ThumbnailImage
          src={props.thumbnailUrl}
          alt={`아티클 썸네일 이미지: ${props.title}`}
          type="article"
        />
        <div className="absolute bottom-2 right-2 rounded-md bg-black/60 p-1 text-xs text-white">
          {props.readingTime > 1 ? `약 ${props.readingTime}분` : '1분 미만'}
        </div>
      </div>
      <div className="flex max-w-[890px] flex-col gap-y-2 overflow-hidden text-ellipsis">
        <p className="w-full truncate font-medium">{props.title}</p>
        <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
          {props.contentSummary}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="mr-1">{props.newsletterName} ·</span>
          <span className="whitespace-nowrap">
            {getTimeFromNow(props.receivedAt)}
          </span>
        </p>
      </div>
    </Link>
  )
}
