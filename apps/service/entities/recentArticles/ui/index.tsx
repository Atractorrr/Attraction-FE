import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import Link from 'next/link'
import { RecentArticle } from '../model'

// TODO: Util 함수로 분리
dayjs.extend(relativeTime)
dayjs.locale('ko')

// TODO: 다른 페이지 적용 완료되면 Link 적용할 것
export default function Article({ ...props }: RecentArticle) {
  return (
    <Link href="/" className="grid max-w-[280px] justify-items-start gap-y-4">
      <div className="relative h-40 w-full overflow-hidden rounded-xl">
        <Image
          className="size-full object-cover"
          width={260}
          height={140}
          src={props.articleThumbnailUrl}
          alt={props.title}
        />
        <div className="absolute bottom-3 right-2 rounded-md bg-black/60 px-1.5 py-1 text-white">
          {props.readingTime > 1 ? `약 ${props.readingTime}분` : `1분 미만`}
        </div>
        <div className="absolute bottom-0 left-0 mt-4 h-1.5 w-full overflow-hidden bg-gray-100">
          {/* // TODO: cva 적용하여 리팩토링 */}
          <div
            className="h-full bg-blue-400"
            style={{ width: `${props.readPercentage}%` }}
          />
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="shrink-0">
          <Image
            className="size-8 rounded-full object-cover"
            width={100}
            height={100}
            src={props.newsletterThumbnailUrl}
            alt={props.title}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="grow break-keep">{props.title}</h2>
          <div className="flex text-sm text-gray-500">
            <p>{props.newsletterTitle}</p>
            <p className="before:mx-1 before:content-['·']">
              {dayjs(props.date).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
