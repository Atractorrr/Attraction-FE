'use client'

import {
  Children,
  type ComponentProps,
  type PropsWithChildren,
  type ReactNode,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import Link from 'next/link'
import { getTimeFromNow } from '@/shared/lib'
import type { ViewType } from '../../type'
import ThumbnailImage from '../ThumbnailImage'
import { NewsletterAvatar } from '../newsletter'

interface ArticleCardState {
  type?: ViewType
  href: string
  title: string
  hasAvatar: boolean
  setHasAvatar: (status: boolean) => void
}

const ArticleCardContext = createContext<ArticleCardState>({
  type: 'gallery',
  href: '',
  title: '',
  hasAvatar: false,
  setHasAvatar: () => {},
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

function Status({ name, receivedAt }: ArticleDescriptionProps) {
  return (
    <span className="block break-keep text-sm text-gray-500 dark:text-gray-400">
      {name} &middot;{' '}
      <span className="whitespace-nowrap">{getTimeFromNow(receivedAt)}</span>
    </span>
  )
}

function Description({ children }: PropsWithChildren) {
  return (
    <p className="mb-1 mt-2 line-clamp-3 break-keep text-sm text-gray-500 dark:text-gray-400">
      {children}
    </p>
  )
}

function DescriptionGroup({ children }: PropsWithChildren) {
  const { type, href, title, hasAvatar } = useContext(ArticleCardContext)

  return (
    <div
      className={`w-full ${type === 'gallery' && hasAvatar ? 'max-w-[calc(100%-2.25rem)] pr-1' : ''}`}>
      <Link
        href={href}
        title={`아티클 보기: ${title}`}
        className={`mb-1 ${hasAvatar ? '!line-clamp-2 max-h-12 break-keep' : 'truncate'} block font-medium text-gray-700 hover:text-blue-400 dark:text-gray-50 dark:hover:text-blue-300`}>
        {title}
      </Link>
      {children}
    </div>
  )
}

const ArticlesNewsletterAvatarType = (
  <ArticlesNewsletterAvatar name="" url="" />
).type
function hasNewsletterAvatar(children: ReactNode) {
  return Children.toArray(children).some((child) => {
    return isValidElement(child) && child.type === ArticlesNewsletterAvatarType
  })
}

function Content({ children }: PropsWithChildren) {
  const { type, setHasAvatar } = useContext(ArticleCardContext)
  const hasAvatar = useMemo(() => hasNewsletterAvatar(children), [children])

  useEffect(() => setHasAvatar(hasAvatar), [hasAvatar, setHasAvatar])

  return (
    <div
      className={`flex items-start justify-start py-1 ${type === 'list' ? `${hasAvatar ? 'w-[calc(75%-0.75rem)] max-w-[calc(100%-7.75rem)]' : 'w-[calc(100%-12.5rem)]'}` : ''}`}>
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
  const { href, type, title, hasAvatar } = useContext(ArticleCardContext)

  return (
    <div
      className={`relative block h-fit overflow-hidden rounded-lg border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700 ${
        type === 'list'
          ? `${hasAvatar ? 'mr-3 w-1/4 pb-[15%]' : 'mr-5 w-[11.25rem] pb-[7.5rem]'} min-h-20 min-w-28`
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
  to?: 'inbox' | 'bookmark' | 'previous'
  id: number
  title: string
  className?: string
  newsletterId?: number
}

function ArticleCard({
  children,
  to = 'inbox',
  type = 'gallery',
  id,
  newsletterId,
  title,
  className,
}: PropsWithChildren<ArticleCardProps>) {
  const [hasAvatar, setHasAvatar] = useState(false)
  const href =
    to === 'previous'
      ? `/newsletter/${newsletterId}/article/${id}`
      : `/inbox${to === 'bookmark' ? '-bookmark' : ''}/article/${id}`
  const articleCardContext = useMemo(
    () => ({ title, type, href, hasAvatar, setHasAvatar }),
    [title, type, href, hasAvatar, setHasAvatar],
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
  Content,
  DescriptionGroup,
  Status,
  Description,
  NewsletterAvatar: ArticlesNewsletterAvatar,
})
