'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Article } from '../model'

interface ArticleViewProps {
  data: Article
}

export default function ArticleView({ data }: ArticleViewProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    const handleIframe = () => {
      if (iframe === null) return
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
      if (iframeDoc) {
        const iframeBody = iframeDoc.body
        iframe.style.height = `${iframeBody.scrollHeight + 10}px`
      }
    }
    iframe?.addEventListener('load', handleIframe)
    return () => {
      iframe?.removeEventListener('load', handleIframe)
    }
  }, [])

  return (
    <div className="h-auto min-h-dvh w-full">
      <div className="mb-7">
        <h3 className="mb-3 break-keep text-xl font-bold">{data.title}</h3>
        <div className="flex items-center gap-3">
          <p className="flex items-center justify-center">
            <Link
              href={`/newsletter/${data.newsletter.id}`}
              title={`뉴스레터 상세 보기: ${data.newsletter.name}`}
              className="mr-2 block size-8 overflow-hidden rounded-full border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700">
              <Image
                src={data.newsletter.thumbnailUrl}
                alt={`뉴스레터 썸네일 이미지: ${data.newsletter.name}`}
                className="size-full object-cover"
                width={300}
                height={300}
              />
            </Link>
            <span className="whitespace-nowrap font-medium">
              {data.newsletter.name}
            </span>
          </p>
          <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span>{data.receivedAt}</span>
            <span className="inline-block whitespace-nowrap rounded-full bg-blue-50 px-2 py-1 text-sm text-blue-400 dark:bg-blue-700">
              {data.readingTime ? `약 ${data.readingTime}분` : '1분 미만'}
            </span>
          </p>
        </div>
      </div>
      <div className="min-h-full w-full overflow-hidden rounded-lg">
        <iframe
          ref={iframeRef}
          src={data.contentUrl}
          className="size-full min-h-full"
          title={data.title}
        />
      </div>
    </div>
  )
}
