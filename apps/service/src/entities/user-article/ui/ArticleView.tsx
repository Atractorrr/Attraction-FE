'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Badge } from '@attraction/design-system/dist'
import { ErrorGuideTxt, ThumbnailImage } from '@/shared/ui'
import { censoringAnchorTags } from '@/shared/lib'
import { getTimeFromNow } from '@attraction/utils'
import BookmarkBtn from './BookmarkBtn'
import OfflineDownloadBtn from './OfflineDownloadBtn'

interface ArticleViewProps {
  id: number
  title: string
  contentUrl: string
  newsletterId: string | number
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
  const iframeLoadHandler = () => {
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
      iframe.style.height = `${iframeDoc.body.scrollHeight}px`

      window.scrollTo(0, 0)
      censoringAnchorTags(iframeDoc)
      setIframeLoad(true)
    } catch {
      setIframeError(true)
    }
  }

  useEffect(() => {
    const iframe = iframeRef.current
    const iframeResizeHandler = () => {
      if (iframe === null) return

      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
      if (!iframeDoc) return

      iframe.style.height = `${iframeDoc.body.scrollHeight}px`
    }

    window.addEventListener('resize', iframeResizeHandler)
    return () => {
      window.removeEventListener('resize', iframeResizeHandler)
    }
  }, [])

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
              <Badge variant="blue">
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
      <div className="min-h-full w-full overflow-hidden md:rounded-lg">
        {!isIframeError &&
        !!data.contentUrl &&
        /.html$/g.test(data.contentUrl) ? (
          <>
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
            {!isIframeLoad && (
              <div className="min-h-dvh bg-gray-100 md:rounded-lg dark:bg-gray-600" />
            )}
          </>
        ) : (
          <div className="px-5">
            <ErrorGuideTxt />
          </div>
        )}
      </div>
    </div>
  )
}
