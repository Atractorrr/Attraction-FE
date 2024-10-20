'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Badge } from '@attraction/ds-core'
import { getTimeFromNow, twcn } from '@attraction/utils'
import { useWindowEvent } from '@attraction/ds-hooks'
import { ErrorGuideTxt, ThumbnailImage } from '@/shared/ui'
import { censoringAnchorTags } from '@/shared/lib'
import { getFrameHeight } from '../lib'
import BookmarkBtn from './BookmarkBtn'
import OfflineDownloadBtn from './OfflineDownloadBtn'

function NewTabIcon({ className }: { className?: string }) {
  return (
    <svg
      // TODO: 아이콘 추가 시 제거
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5"
      />
      <path
        fill="currentColor"
        d="M12.47 10.47a.75.75 0 1 0 1.06 1.06l7.72-7.72v3.534a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.344a.75.75 0 0 0 0 1.5h3.533z"
      />
    </svg>
  )
}

interface ArticleViewProps {
  id: number
  title: string
  contentUrl: string
  newsletterId: string | number
  newsletterUrl?: string | null
  newsletterThumbnailUrl: string
  newsletterName: string
  receivedAt: string
  readingTime: number
  setError?: (status: boolean) => void
  setLoad?: (status: boolean) => void
  articleType: 'user' | 'prev'
}

export default function ArticleView({
  setError,
  setLoad,
  articleType,
  ...data
}: ArticleViewProps) {
  const [isIframeError, setIframeError] = useState(false)
  useEffect(() => setError?.(isIframeError), [setError, isIframeError])

  const [isIframeLoad, setIframeLoad] = useState(false)
  useEffect(() => setLoad?.(isIframeLoad), [setLoad, isIframeLoad])

  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const iframeLoadHandler = useCallback(() => {
    try {
      const iframe = iframeRef.current
      if (iframe === null) return

      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
      if (!iframeDoc) return

      if (iframeDoc.body.hasAttribute('data-error')) {
        setIframeError(true)
        return
      }

      iframe.style.display = 'block'
      iframe.style.height = getFrameHeight({
        height: iframeDoc.body.scrollHeight,
        isPrevArticle: articleType === 'prev',
      })

      if (articleType === 'user') window.scrollTo(0, 0)
      censoringAnchorTags(iframeDoc)
      setIframeLoad(true)
    } catch {
      setIframeError(true)
    }
  }, [articleType])

  const iframeResizeHandler = useCallback(() => {
    const iframe = iframeRef.current
    if (iframe === null) return

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
    if (!iframeDoc) return

    iframe.style.height = getFrameHeight({
      height: iframeDoc.body.scrollHeight,
      isPrevArticle: articleType === 'prev',
    })
  }, [articleType])

  useWindowEvent('resize', iframeResizeHandler)

  return (
    <div className="h-auto min-h-dvh w-full pt-8 md:px-5 md:pb-12 md:pt-5">
      <div className="mb-7 px-5 md:px-0">
        <h3 className="mb-3 break-keep text-lg font-bold md:text-xl">
          {data.title}
        </h3>
        <div className="flex flex-col flex-wrap justify-between gap-x-5 gap-y-7 md:flex-row md:items-end">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`/newsletter/${data.newsletterId}`}
              title={`뉴스레터 상세 보기: ${data.newsletterName}`}
              className="flex items-center justify-center">
              <span className="mr-2 block size-8 overflow-hidden rounded-full border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700">
                <ThumbnailImage
                  src={data.newsletterThumbnailUrl}
                  alt={`뉴스레터 썸네일 이미지: ${data.newsletterName}`}
                  type="profile"
                />
              </span>
              <span className="max-w-[calc(100%-2.5rem)] break-keep font-medium">
                {data.newsletterName}
              </span>
            </Link>
            <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <span>{getTimeFromNow(data.receivedAt)}</span>
              <Badge color="blue">
                {data.readingTime ? `약 ${data.readingTime}분` : '1분 미만'}
              </Badge>
            </p>
          </div>
          {articleType === 'user' && (
            <div className="scrollbar-hidden flex max-w-full grow items-center gap-2 overflow-x-auto md:justify-end">
              <BookmarkBtn articleId={data.id} />
              {isIframeLoad && <OfflineDownloadBtn />}
            </div>
          )}
        </div>
      </div>
      <div
        className={twcn(
          'relative',
          articleType === 'prev' &&
            isIframeLoad &&
            'mb-32 after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-40 after:bg-gradient-to-t after:from-gray-50 after:to-transparent md:mb-12 md:after:from-white dark:after:from-gray-900 md:dark:after:from-gray-800',
        )}>
        <div className="min-h-full w-full overflow-hidden md:rounded-lg">
          {!isIframeLoad && (
            <div className="min-h-dvh bg-gray-100 md:rounded-lg dark:bg-gray-600" />
          )}
          {!isIframeError &&
          !!data.contentUrl &&
          /.html$/g.test(data.contentUrl) ? (
            <iframe
              ref={(node) => {
                iframeRef.current = node
              }}
              src={data.contentUrl}
              className="hidden size-full min-h-full overflow-hidden bg-white"
              title={data.title}
              onLoad={iframeLoadHandler}
              onError={() => setIframeError(true)}
            />
          ) : (
            <div className="px-5">
              <ErrorGuideTxt />
            </div>
          )}
        </div>
        {articleType === 'prev' && isIframeLoad && (
          <p className="absolute inset-x-0 bottom-0 z-20 inline-flex translate-y-1/2 items-center justify-center">
            <Link
              href={data.newsletterUrl ?? `/newsletter/${data.newsletterId}`}
              target={!data.newsletterUrl ? '_self' : '_blank'}
              title={`뉴스레터 홈페이지 바로가기: ${data.newsletterName}`}
              className="flex items-center justify-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-6 py-3 text-blue-400 transition-colors hover:bg-blue-100 dark:border-blue-700 dark:bg-gray-800 dark:text-blue-300 dark:hover:bg-blue-800">
              <span>지난아티클들 읽어 보기</span>
              <NewTabIcon className="text-lg" />
            </Link>
          </p>
        )}
      </div>
    </div>
  )
}
