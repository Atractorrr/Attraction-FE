'use client'

import { Suspense, useState } from 'react'
import { ChevronDownOutline } from '@attraction/icons'
import { useAuth } from '@/entities/auth'
import { useUserNewslettersQuery } from '@/entities/user-article'
import {
  NewsletterAvatar,
  NewsletterSelect,
  NewsletterSelectSkeleton,
} from '@/shared/ui'

function SubscribeNewsletterSkeleton() {
  return (
    <div>
      <div className="mx-2 mb-5 mt-3 h-px bg-gray-100 dark:bg-gray-700" />
      <div className="mb-3 ml-2 h-4 w-20 rounded bg-gray-100 dark:bg-gray-700" />
      {Array.from({ length: 3 }, (_, i) => (
        <NewsletterSelectSkeleton key={i} />
      ))}
    </div>
  )
}

interface SubscribeNewsletterProps {
  handleClick?: () => void
}

function SubscribeNewsletterList({ handleClick }: SubscribeNewsletterProps) {
  const [isFolded, setFold] = useState(true)
  const { data, isError } = useUserNewslettersQuery()

  if (isError || data.length <= 0) return null

  return (
    <>
      <div className="mx-2 mb-5 mt-3 h-px bg-gray-100 dark:bg-gray-700" />
      <strong className="mb-2 block whitespace-nowrap px-2 text-sm font-medium">
        구독한 뉴스레터{' '}
        <span className="ml-1 text-gray-500 dark:text-gray-400">
          {data.length}
        </span>
      </strong>
      <ul>
        {data.map((newsletter, i) => (
          <li key={newsletter.id} className={isFolded && i > 2 ? 'hidden' : ''}>
            <NewsletterSelect
              id={newsletter.id}
              name={newsletter.name}
              onClick={handleClick}>
              <NewsletterAvatar
                url={newsletter.thumbnailUrl}
                name={newsletter.name}
              />
              <NewsletterSelect.Name className="text-sm !font-normal">
                {newsletter.name}
              </NewsletterSelect.Name>
            </NewsletterSelect>
          </li>
        ))}
      </ul>
      {data.length > 3 && (
        <button
          type="button"
          onClick={() => setFold((prev) => !prev)}
          className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700">
          <ChevronDownOutline
            className={`text-base ${isFolded ? '' : 'rotate-180'}`}
          />
          <span className="pr-2">
            {isFolded ? `${data.length - 3}개 더보기` : '간략히 보기'}
          </span>
        </button>
      )}
    </>
  )
}

export default function SubscribeNewsletter(props: SubscribeNewsletterProps) {
  const { isLogin } = useAuth()

  if (isLogin) {
    return (
      <Suspense fallback={<SubscribeNewsletterSkeleton />}>
        <SubscribeNewsletterList {...props} />
      </Suspense>
    )
  }
  return null
}
