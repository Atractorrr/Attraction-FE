'use client'

import { ErrorBoundary } from 'react-error-boundary'
import { skipToken, useQuery } from '@tanstack/react-query'
import { DocumentListOutline } from '@attraction/icons'
import { useAuth } from '@/entities/auth'
import {
  Container,
  ErrorGuideTxt,
  GuideTxt,
  Title,
  NewsletterAvatar,
  NewsletterSelect,
  NewsletterSelectSkeleton,
} from '@/shared/ui'
import { fetchSubscribeList } from '../api'

export default function SubscribeList() {
  const { userEmail } = useAuth()
  const { isLoading, data: subscribeList } = useQuery({
    queryKey: ['userSubscribe', userEmail],
    queryFn: userEmail ? () => fetchSubscribeList(userEmail) : skipToken,
  })

  return (
    <Container className="h-full xl:h-auto xl:min-h-full">
      <ErrorBoundary fallback={<ErrorGuideTxt />}>
        <div className="h-full pb-2">
          <Title className="p-5 pb-4">
            <DocumentListOutline className="text-2xl" />
            구독한 뉴스레터
          </Title>
          {isLoading && (
            <div className="px-3">
              {Array.from({ length: 5 }, (_, i) => (
                <NewsletterSelectSkeleton key={i} size="lg" />
              ))}
            </div>
          )}
          {subscribeList?.length !== 0 ? (
            <ul className="flex flex-col justify-start overflow-y-auto overscroll-none px-3 xl:h-[calc(100%-4.5rem)] xl:max-h-[17.5rem]">
              {subscribeList?.map((newsletter) => (
                <li key={newsletter.id} className="peer peer-[]:mt-1">
                  <NewsletterSelect id={newsletter.id} name={newsletter.title}>
                    <NewsletterAvatar
                      url={newsletter.thumbnailUrl}
                      name={newsletter.title}
                      size="lg"
                    />
                    <NewsletterSelect.Name>
                      {newsletter.title}
                    </NewsletterSelect.Name>
                  </NewsletterSelect>
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
