'use client'

import { useEffect, useState } from 'react'
import { BookmarkOutline } from '@attraction/icons'
import {
  useAddUserArticleBookmark,
  useCancelUserArticleBookmark,
  useCheckUserArticleBookmarkQuery,
} from '../model'

interface BookmarkBtnProps {
  articleId: number
}

export default function BookmarkBtn({ articleId }: BookmarkBtnProps) {
  const { isLoading, data, isError } = useCheckUserArticleBookmarkQuery({
    articleId,
  })
  const [isBookmark, setBookmark] = useState(false)
  const { mutate: add } = useAddUserArticleBookmark({
    articleId,
    onMutate: () => setBookmark(true),
  })
  const { mutate: cancel } = useCancelUserArticleBookmark({
    articleId,
    onMutate: () => setBookmark(false),
  })

  useEffect(() => setBookmark(!!data), [data])

  return (
    <button
      type="button"
      title={isBookmark ? '북마크 해제' : '북마크'}
      disabled={isLoading || isError}
      className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-gray-50 pl-4 pr-5 transition-colors hover:bg-gray-100 disabled:!bg-gray-50 disabled:text-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:disabled:!bg-gray-700 dark:disabled:text-gray-400"
      onClick={() => (isBookmark ? cancel() : add())}>
      <BookmarkOutline className="xs:text-lg" />
      <span className="whitespace-nowrap text-sm xs:text-base">
        {isBookmark ? '북마크 해제' : '북마크'}
      </span>
    </button>
  )
}