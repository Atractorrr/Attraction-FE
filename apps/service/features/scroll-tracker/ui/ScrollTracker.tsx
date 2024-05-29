import { useEffect, useRef } from 'react'
import {
  type UserArticleParams,
  useUserArticleMutation,
} from '@/entities/user-article'
import { useDebounce } from '@/shared/lib'
import { useScrollProgress } from '../lib'
import ScrollProgressBar from './ScrollProgressBar'
import { MAX_SCROLL_CRITERIA } from '../constant'

interface ScrollTrackerProps extends UserArticleParams {
  initProgress: number
}

export default function ScrollTracker({
  userId,
  articleId,
  initProgress,
}: ScrollTrackerProps) {
  const { scrollProgress } = useScrollProgress()
  const debouncedScroll = useDebounce(scrollProgress, 800)
  const progressRef = useRef(initProgress)
  const { mutate } = useUserArticleMutation({ userId, articleId })

  useEffect(() => {
    if (debouncedScroll > progressRef.current) {
      const percentage =
        debouncedScroll > MAX_SCROLL_CRITERIA ? 100 : debouncedScroll
      progressRef.current = percentage
      mutate(percentage)
    }
  }, [articleId, debouncedScroll, mutate, userId])

  return <ScrollProgressBar progress={scrollProgress} />
}
