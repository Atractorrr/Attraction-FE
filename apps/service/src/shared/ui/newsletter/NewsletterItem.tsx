'use client'

import Link from 'next/link'
import { createContext, useContext, type PropsWithChildren } from 'react'
import ThumbnailImage from '../ThumbnailImage'

const NewsletterItemContext = createContext('')

interface NewsletterItemThumbnailProps {
  url: string
}

function Thumbnail({ url }: NewsletterItemThumbnailProps) {
  const name = useContext(NewsletterItemContext)

  return (
    <div className="size-16 shrink-0 overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
      <ThumbnailImage
        src={url}
        alt={`뉴스레터 썸네일 이미지: ${name}`}
        type="profile"
      />
    </div>
  )
}

function Content({ children }: PropsWithChildren) {
  const name = useContext(NewsletterItemContext)

  return (
    <p className="block w-[calc(100%-5rem)]">
      <strong className="mb-1 block w-full truncate font-bold">{name}</strong>
      {children}
    </p>
  )
}

function Description({ children }: PropsWithChildren) {
  return (
    <span className="line-clamp-2 break-keep text-sm text-gray-500 dark:text-gray-400">
      {children}
    </span>
  )
}

interface NewsletterItemProps {
  id: number
  name: string
}

function NewsletterItem({
  id,
  name,
  children,
}: PropsWithChildren<NewsletterItemProps>) {
  return (
    <NewsletterItemContext.Provider value={name}>
      <Link
        className="flex gap-4"
        href={`/newsletter/${id}`}
        title={`뉴스레터 보러가기: ${name}`}>
        {children}
      </Link>
    </NewsletterItemContext.Provider>
  )
}

export default Object.assign(NewsletterItem, {
  Thumbnail,
  Content,
  Description,
})
