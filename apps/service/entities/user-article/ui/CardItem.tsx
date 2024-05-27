import Link from 'next/link'
import Image from 'next/image'

import { WIDTH_PERCENT } from '@/shared/constant'
import { Article, ViewType } from '../model'

interface CardItemProps {
  data: Article
  type?: ViewType
}

export default function CardItem({ data, type }: CardItemProps) {
  return (
    <div className={`${type === 'list' ? 'flex' : 'block'} h-auto w-full`}>
      <Link
        href={`/inbox/article/${data.id}`}
        title={`아티클 보기: ${data.title}`}
        className={`group relative block overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 ${
          type === 'list'
            ? 'mr-3 h-[8vw] max-h-24 min-h-20 w-1/4 min-w-28'
            : 'mb-2 h-[56vw] max-h-60 min-h-40 w-full sm:h-[16vw] sm:max-h-48'
        }`}>
        <Image
          src={data.thumbnailUrl}
          className="size-full scale-100 object-cover transition-transform group-hover:scale-110"
          alt={`아티클 썸네일 이미지: ${data.title}`}
          width={1280}
          height={720}
        />
        {data.readPercentage > 0 && (
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gray-200 dark:bg-gray-300">
            <span
              className={`absolute inset-x-0 h-1 bg-blue-400 dark:bg-blue-300 ${
                WIDTH_PERCENT[data.readPercentage]
              }`}
            />
          </span>
        )}
        <span className="absolute bottom-2 right-2 rounded bg-black/60 p-1 text-xs text-white">
          {data.readingTime > 0 ? `약 ${data.readingTime}분` : '1분 미만'}
        </span>
      </Link>
      <div className="flex items-start justify-start py-1">
        <Link
          href={`/newsletter/${data.newsletter.id}`}
          title={`뉴스레터 상세 보기: ${data.newsletter.name}`}
          className={`${
            type === 'list' ? 'hidden' : 'block'
          } mr-2 block size-7 overflow-hidden rounded-full border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700`}>
          <Image
            src={data.newsletter.thumbnailUrl}
            alt={`뉴스레터 썸네일 이미지: ${data.newsletter.name}`}
            className="size-full object-cover"
            width={300}
            height={300}
          />
        </Link>
        <p
          className={
            type === 'list' ? 'w-full' : 'max-w-[calc(100%-2.25rem)] pr-1'
          }>
          <Link
            href={`/inbox/article/${data.id}`}
            title={`아티클 보기: ${data.title}`}
            className="mb-1 !line-clamp-2 block max-h-12 break-keep font-medium text-gray-700 hover:text-blue-400 dark:text-gray-50">
            {data.title}
          </Link>
          <span
            // TODO: dayjs 적용
            className="block break-keep text-sm text-gray-500 dark:text-gray-400">
            {data.newsletter.name} &middot; {data.receivedAt}
          </span>
        </p>
      </div>
    </div>
  )
}
