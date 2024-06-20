import Link from 'next/link'
import { getTimeFromNow } from '@/shared/lib'
import { ThumbnailImage } from '@/shared/ui'
import { ViewType } from '../model'
import { daysAgo } from '../lib'
import ToBeDeletedTxt from './ToBeDeletedTxt'

interface CardItemProps {
  type: ViewType
  articleUrl: string
  articleTitle: string
  articleThumbnailUrl: string
  readPercentage?: number
  readingTime: number
  newsletterId: string | number
  newsletterName: string
  newsletterThumbnailUrl: string
  receivedAt: string
}

export default function CardItem({ type, ...data }: CardItemProps) {
  return (
    <div className={`${type === 'list' ? 'flex' : 'block'} h-auto w-full`}>
      <Link
        href={data.articleUrl}
        title={`아티클 보기: ${data.articleTitle}`}
        className={`group relative block overflow-hidden rounded-lg border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700 ${
          type === 'list'
            ? 'mr-3 h-[8vw] max-h-24 min-h-20 w-1/4 min-w-28'
            : 'mb-2 h-[56vw] max-h-60 min-h-40 w-full sm:h-[16vw] sm:max-h-48'
        }`}>
        <ThumbnailImage
          src={data.articleThumbnailUrl}
          alt={`아티클 썸네일 이미지: ${data.articleTitle}`}
          type="article"
        />
        {!!data.readPercentage && data.readPercentage > 0 && (
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gray-200">
            <span
              className="absolute inset-x-0 h-1 bg-blue-400"
              style={{ width: `${data.readPercentage}%` }}
            />
          </span>
        )}
        <span className="absolute bottom-2 right-2 rounded bg-black/60 p-1 text-xs text-white">
          {data.readingTime > 0 ? `약 ${data.readingTime}분` : '1분 미만'}
        </span>
      </Link>
      <div className="flex items-start justify-start py-1">
        <Link
          href={`/newsletter/${data.newsletterId}`}
          title={`뉴스레터 상세 보기: ${data.newsletterName}`}
          className={`${
            type === 'list' ? 'hidden' : 'block'
          } mr-2 block size-7 overflow-hidden rounded-full border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700`}>
          <ThumbnailImage
            src={data.newsletterThumbnailUrl || '/images/default-1x1.jpg'}
            alt={`뉴스레터 썸네일 이미지: ${data.newsletterName}`}
            type="profile"
            // className="size-full object-cover"
            // width={300}
            // height={300}
          />
        </Link>
        <p
          className={
            type === 'list' ? 'w-full' : 'max-w-[calc(100%-2.25rem)] pr-1'
          }>
          <Link
            href={data.articleUrl}
            title={`아티클 보기: ${data.articleTitle}`}
            className="mb-1 !line-clamp-2 block max-h-12 break-keep font-medium text-gray-700 hover:text-blue-400 dark:text-gray-50 dark:hover:text-blue-300">
            {data.articleTitle}
          </Link>
          <span className="block break-keep text-sm text-gray-500 dark:text-gray-400">
            {data.newsletterName} &middot; {getTimeFromNow(data.receivedAt)}
          </span>
          {daysAgo(data.receivedAt) === 7 && <ToBeDeletedTxt />}
        </p>
      </div>
    </div>
  )
}
