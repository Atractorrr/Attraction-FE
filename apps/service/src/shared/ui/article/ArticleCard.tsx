'use client'

import {
  type ComponentProps,
  type PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from 'react'
import Link from 'next/link'
import { getTimeFromNow } from '@/shared/lib'
import type { ViewType } from '../../type'
import ThumbnailImage from '../ThumbnailImage'
import ReadingTimeBadge from './ReadingTimeBadge'
import ReadProgress from './ReadPercentage'
import { NewsletterAvatar } from '../newsletter'

interface ArticleCardState {
  type?: ViewType
  href: string
  title: string
}

const ArticleCardContext = createContext<ArticleCardState>({
  type: 'gallery',
  href: '',
  title: '',
})

function ArticlesNewsletterAvatar(
  props: ComponentProps<typeof NewsletterAvatar>,
) {
  const { type } = useContext(ArticleCardContext)

  if (type === 'list') return null

  return <NewsletterAvatar {...props} />
}

interface ArticleDescriptionProps {
  name: string
  receivedAt: string
}

function Description({ name, receivedAt }: ArticleDescriptionProps) {
  return (
    <span className="block break-keep text-sm text-gray-500 dark:text-gray-400">
      {name} &middot;{' '}
      <span className="whitespace-nowrap">{getTimeFromNow(receivedAt)}</span>
    </span>
  )
}

function DescriptionGroup({ children }: PropsWithChildren) {
  const { type, href, title } = useContext(ArticleCardContext)

  return (
    <div
      className={
        type === 'list' ? 'w-full' : 'max-w-[calc(100%-2.25rem)] pr-1'
      }>
      <Link
        href={href}
        title={`아티클 보기: ${title}`}
        className="mb-1 !line-clamp-2 block max-h-12 break-keep font-medium text-gray-700 hover:text-blue-400 dark:text-gray-50 dark:hover:text-blue-300">
        {title}
      </Link>
      {children}
    </div>
  )
}

function InfoGroup({ children }: PropsWithChildren) {
  const { type } = useContext(ArticleCardContext)

  return (
    <div
      className={`flex items-start justify-start py-1 ${type === 'list' ? 'w-[calc(75%-0.75rem)] max-w-[calc(100%-7.75rem)]' : ''}`}>
      {children}
    </div>
  )
}

interface ArticleThumbnailProps {
  url: string
}

function Thumbnail({
  url,
  children,
}: PropsWithChildren<ArticleThumbnailProps>) {
  const { href, type, title } = useContext(ArticleCardContext)

  return (
    <div
      className={`relative block h-fit overflow-hidden rounded-lg border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700 ${
        type === 'list'
          ? 'mr-3 min-h-20 w-1/4 min-w-28 pb-[15%]'
          : 'mb-2 w-full pb-[60%]'
      }`}>
      <Link
        href={href}
        title={`아티클 보기: ${title}`}
        className="absolute inset-0">
        <ThumbnailImage
          src={url}
          alt={`아티클 썸네일 이미지: ${title}`}
          type="article"
        />
        {children}
      </Link>
    </div>
  )
}

interface ArticleCardProps {
  type?: ViewType
  to?: 'inbox' | 'bookmark'
  id: number
  title: string
  className?: string
}

function ArticleCard({
  children,
  to = 'inbox',
  type = 'gallery',
  id,
  title,
  className,
}: PropsWithChildren<ArticleCardProps>) {
  const href = `/inbox${to === 'bookmark' ? '-bookmark' : ''}/article/${id}`
  const articleCardContext = useMemo(
    () => ({ title, type, href }),
    [title, type, href],
  )

  return (
    <ArticleCardContext.Provider value={articleCardContext}>
      <div
        className={`${type === 'list' ? 'flex' : 'block'} h-auto ${className ?? 'w-full'}`}>
        {children}
      </div>
    </ArticleCardContext.Provider>
  )
}

export default Object.assign(ArticleCard, {
  Thumbnail,
  Progress: ReadProgress,
  ReadingTimeBadge,
  InfoGroup,
  DescriptionGroup,
  Description,
  NewsletterAvatar: ArticlesNewsletterAvatar,
})
