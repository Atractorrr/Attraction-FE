import Image from 'next/image'
import Link from 'next/link'
import { NewsletterPreviousArticle } from '../model'

export default function NewsletterPreviousArticleItem({
  ...props
}: NewsletterPreviousArticle) {
  return (
    <Link href={props.contentUrl} className="flex w-full gap-x-5">
      <div className="relative flex size-full max-h-[120px] max-w-[130px] shrink-0 overflow-hidden rounded-lg md:max-w-[180px]">
        <Image
          className="size-full object-cover transition-all hover:scale-110"
          src={props.thumbnail}
          width={500}
          height={500}
          alt={props.title}
        />
      </div>
      <div className="flex max-w-[890px] flex-col gap-y-3 overflow-hidden text-ellipsis">
        <p className="w-full truncate font-medium">{props.title}</p>
        <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
          {props.content}
        </p>
      </div>
    </Link>
  )
}
