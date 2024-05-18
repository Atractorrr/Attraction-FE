import Link from 'next/link'
import Image from 'next/image'
import type { Article, ViewType } from '../types'
import * as Shared from '@/shared'

export default function CardItem({
  data,
  type,
}: {
  data: Article
  type?: ViewType
}) {
  return (
    <div className={(type === 'list' ? 'flex' : 'block') + ' h-auto w-full'}>
      <Link
        href={`/inbox/${data.id}`}
        title={`아티클 보기: ${data.title}`}
        className={
          'groupThumbnail relative block overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 ' +
          (type === 'list'
            ? 'mr-3 h-[8vw] max-h-24 min-h-20 w-1/4 min-w-28'
            : 'mb-2 h-[12vw] max-h-48 min-h-40 w-full')
        }>
        <img
          src={data.thumbnailUrl}
          className="size-full scale-100 object-cover transition-transform group-[Thumbnail]:hover:scale-110"
          alt={`아티클 썸네일 이미지: ${data.title}`}
        />
        {data.readPercentage > 0 && (
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gray-200 dark:bg-gray-700">
            <span
              className={
                'absolute inset-x-0 h-1 bg-green-400 dark:bg-green-600 ' +
                Shared.Constants.W_PERCENT[data.readPercentage]
              }></span>
          </span>
        )}
        <span className="absolute bottom-2 right-2 rounded bg-black/60 p-1 text-xs text-white">
          {data.readingTime > 0 ? `약 ${data.readingTime}분` : '1분 미만'}
        </span>
      </Link>
      <div className="flex items-start justify-start py-1">
        <Link
          href={`/newsletters/${data.newsletter.id}`}
          title={`뉴스레터 상세 보기: ${data.newsletter.name}`}
          className={
            (type === 'list' ? 'hidden ' : 'block ') +
            'mr-2 block h-7 w-7 overflow-hidden rounded-full border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-700'
          }>
          <img
            src={data.newsletter.thumbnail}
            alt={`뉴스레터 썸네일 이미지: ${data.newsletter.name}`}
          />
        </Link>
        <p
          className={
            type === 'list' ? 'w-full' : 'max-w-[calc(100%-2.25rem)] pr-1'
          }>
          <Link
            href={`/inbox/${data.id}`}
            title={`아티클 보기: ${data.title}`}
            className="mb-1 block break-keep font-medium text-gray-700 hover:text-blue-500 hover:underline dark:text-gray-50">
            {data.title}
          </Link>
          <span className="block break-keep text-sm text-gray-500 dark:text-gray-400">
            {data.newsletter.name} &middot; {data.receivedAt}
          </span>
        </p>
      </div>
    </div>
  )
}
