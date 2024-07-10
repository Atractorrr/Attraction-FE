'use client'

import { useAuth } from '@/entities/auth'
import {
  Container,
  ErrorGuideTxt,
  GuideTxt,
  ThumbnailImage,
  Title,
} from '@/shared/ui'
import { DocumentListOutline } from '@attraction/icons'
import { skipToken, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { ErrorBoundary } from 'react-error-boundary'
import { fetchSubscribeList } from '../api'

function CustomErrorGuideTxt() {
  return <ErrorGuideTxt />
}

export default function SubscribeList() {
  const { userEmail } = useAuth()
  const { data: subscribeList } = useQuery({
    queryKey: ['userSubscribe', userEmail],
    queryFn: userEmail ? () => fetchSubscribeList(userEmail) : skipToken,
  })

  return (
    <Container className="h-full xl:h-auto xl:min-h-full">
      <ErrorBoundary FallbackComponent={CustomErrorGuideTxt}>
        <div className="h-full pb-6">
          <div className="p-5 pb-4">
            <Title
              icon={<DocumentListOutline className="text-2xl" />}
              text="구독한 뉴스레터"
            />
          </div>
          {subscribeList?.length !== 0 ? (
            <ul className="flex flex-col justify-start overflow-y-auto px-3 xl:h-[calc(100%-64px)] xl:max-h-64">
              {subscribeList?.map((newsletter) => (
                <li key={newsletter.id} className="peer peer-[]:mt-1">
                  <Link
                    href={`/newsletter/${newsletter.id}`}
                    className="flex items-center justify-start gap-3 overflow-hidden rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                    <div className="size-8 overflow-hidden rounded-full">
                      <ThumbnailImage
                        src={newsletter.thumbnailUrl}
                        alt="썸네일 이미지"
                        type="profile"
                      />
                    </div>
                    <span className="w-[calc(100%-4rem)] truncate font-medium">
                      {newsletter.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="pb-32 pt-20">
              <GuideTxt
                title="구독한 뉴스레터가 없어요"
                sub="지금 뉴스레터를 구독해보세요"
              />
            </div>
          )}
        </div>
      </ErrorBoundary>
    </Container>
  )
}
