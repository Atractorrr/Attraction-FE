import Link from 'next/link'
import { getTimeFromNow } from '@/shared/lib'
import { ThumbnailImage } from '@/shared/ui'
import { RecentArticle } from '../model'

export default function RecentArticleItem({ ...props }: RecentArticle) {
  return (
    <Link
      href={`/inbox/article/${props.id}`}
      className="grid w-[280px] justify-items-start gap-y-4"
      title={`아티클 보기: ${props.title}`}>
      <div className="relative h-40 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-100 dark:border-gray-700 dark:bg-gray-700">
        <ThumbnailImage
          src={props.thumbnailUrl}
          alt={`아티클 썸네일 이미지: ${props.title}`}
          type="article"
        />
        <div className="absolute bottom-2 right-2 rounded-md bg-black/60 p-1 text-xs text-white">
          {props.readingTime > 1 ? `약 ${props.readingTime}분` : `1분 미만`}
        </div>
        {props.readPercentage > 0 && (
          <div className="absolute inset-x-0 bottom-0 mt-4 h-1 overflow-hidden bg-gray-100">
            {/* // TODO: cva 적용하여 리팩토링 */}
            <span
              className="absolute inset-0 h-full bg-blue-400"
              style={{ width: `${props.readPercentage}%` }}
            />
          </div>
        )}
      </div>
      <div className="flex gap-x-2">
        <div className="size-8 shrink-0 overflow-hidden rounded-full border-gray-100 dark:border-gray-700">
          <ThumbnailImage
            src={props.newsletter.thumbnailUrl}
            alt={`뉴스레터 썸네일 이미지: ${props.newsletter.name}`}
            width={100}
            height={100}
            type="profile"
          />
        </div>
        <div className="flex flex-col">
          <p className="line-clamp-2 grow break-keep font-medium">
            {props.title}
          </p>
          <p className="flex text-sm text-gray-500 dark:text-gray-400">
            <span>{props.newsletter.name}</span>
            <span className="before:mx-1 before:content-['·']">
              {getTimeFromNow(props.receivedAt)}
            </span>
          </p>
        </div>
      </div>
    </Link>
  )
}
