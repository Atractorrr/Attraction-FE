'use client'

import { Suspense } from 'react'
import { Background, ErrorGuideTxt, LoadingSpinner } from '@/shared/ui'
import { Button } from '@attraction/design-system'
import Image from 'next/image'
import Link from 'next/link'
import { HouseOutline } from '@attraction/icons'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { useNewsletterProfile } from '../lib'

interface NewsletterProfileProps {
  newsletterId: string
}

function NewsletterProfileContent({ newsletterId }: NewsletterProfileProps) {
  const { data } = useNewsletterProfile(newsletterId)

  return (
    <div className="flex w-full flex-col gap-y-4 p-5 md:gap-y-2">
      <div className="flex gap-x-6">
        <div className="h-[150px] w-[180px] shrink-0 overflow-hidden rounded-md bg-gray-100 md:h-40 dark:bg-gray-700">
          <Image
            className="size-full object-cover"
            src={
              data.data.thumbnailUrl.length
                ? data.data.thumbnailUrl
                : '/images/default-16x9.jpg'
            }
            width={500}
            height={500}
            alt={data.data.name ?? 'no thumbnail'}
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <h3 className="text-2xl font-bold">{data.data.name}</h3>
          <div className="flex flex-col gap-3 text-gray-500 md:flex-row dark:text-gray-400">
            <p>{data.data.uploadDays}</p>
            <Link className="flex gap-x-1 text-blue-400" href="/">
              <HouseOutline className="size-5" />
              <p>공식 홈페이지</p>
            </Link>
          </div>
          <p className="hidden break-keep text-gray-500 md:block dark:text-gray-400">
            {data.data.description}
          </p>
        </div>
      </div>
      <p className="break-keep text-gray-500 md:hidden dark:text-gray-400">
        {data.data.description}
      </p>
      <Button className="h-[40px] w-full rounded-lg bg-gray-700 py-2 text-white md:w-[180px] dark:bg-white dark:text-gray-700">
        구독하기
      </Button>
    </div>
  )
}

export default function NewsletterProfile({
  newsletterId,
}: NewsletterProfileProps) {
  return (
    <Background>
      <div className="flex w-full justify-start gap-x-6">
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <div className="flex w-full justify-center">
              <ErrorBoundary onReset={reset} FallbackComponent={ErrorGuideTxt}>
                <Suspense fallback={<LoadingSpinner />}>
                  <NewsletterProfileContent newsletterId={newsletterId} />
                </Suspense>
              </ErrorBoundary>
            </div>
          )}
        </QueryErrorResetBoundary>
      </div>
    </Background>
  )
}
