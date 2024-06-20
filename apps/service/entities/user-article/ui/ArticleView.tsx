'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Badge } from '@attraction/design-system/dist'
import { ErrorGuideTxt } from '@/shared/ui'
import { censoringAnchorTags, getTimeFromNow } from '@/shared/lib'
import { Article } from '../model'
import BookmarkBtn from './BookmarkBtn'
import OfflineDownloadBtn from './OfflineDownloadBtn'

interface ArticleViewProps {
  data: Article
  censored?: boolean
}

export default function ArticleView({ data, censored }: ArticleViewProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const [isIframeNotFound, setIframeNotFound] = useState(false)

  useEffect(() => {
    const iframe = iframeRef.current
    const handleIframe = () => {
      if (iframe === null) return

      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
      if (!iframeDoc) return

      if (iframeDoc.title.includes('404')) {
        setIframeNotFound(true)
        return
      }
      iframe.style.display = 'block'

      if (censored) censoringAnchorTags(iframeDoc)

      const iframeBody = iframeDoc.body
      iframe.style.height = `${iframeBody.scrollHeight + 10}px`
    }
    iframe?.addEventListener('load', handleIframe)
    window.addEventListener('resize', handleIframe)
    return () => {
      iframe?.removeEventListener('load', handleIframe)
      window.removeEventListener('resize', handleIframe)
    }
  }, [censored])

  return (
    <div className="h-auto min-h-dvh w-full pt-8 md:px-5 md:pb-12 md:pt-5">
      <div className="mb-7 px-5 md:px-0">
        <h3 className="mb-3 break-keep text-lg font-bold md:text-xl">
          {data.title}
        </h3>
        <div className="flex flex-col flex-wrap justify-between gap-x-5 gap-y-7 md:flex-row md:items-end">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`/newsletter/${data.newsletter.id}`}
              title={`뉴스레터 상세 보기: ${data.newsletter.name}`}
              className="flex items-center justify-center">
              <span className="mr-2 block size-8 overflow-hidden rounded-full border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700">
                <Image
                  src={
                    data.newsletter.thumbnailUrl || '/images/default-1x1.jpg'
                  }
                  alt={`뉴스레터 썸네일 이미지: ${data.newsletter.name}`}
                  className="size-full object-cover"
                  width={300}
                  height={300}
                />
              </span>
              <span className="max-w-[calc(100%-2.5rem)] break-keep font-medium">
                {data.newsletter.name}
              </span>
            </Link>
            <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <span>{getTimeFromNow(data.receivedAt)}</span>
              <Badge variant="blue">
                {data.readingTime ? `약 ${data.readingTime}분` : '1분 미만'}
              </Badge>
            </p>
          </div>
          <div className="scrollbar-hidden flex max-w-full grow items-center gap-2 overflow-x-auto md:justify-end">
            <BookmarkBtn articleId={data.id} />
            <OfflineDownloadBtn />
          </div>
        </div>
      </div>
      <div className="min-h-full w-full overflow-hidden md:rounded-lg">
        {!isIframeNotFound &&
        !!data.contentUrl &&
        /\/[^\\/]+\.html$/g.test(data.contentUrl) ? (
          <iframe
            ref={(node) => {
              iframeRef.current = node
            }}
            src={`/html/article${data.contentUrl.match(/\/[^\\/]+\.html$/g)![0]}`}
            className="hidden size-full min-h-full"
            title={data.title}
          />
        ) : (
          <div className="px-5">
            <ErrorGuideTxt />
          </div>
        )}
      </div>
    </div>
  )
}
