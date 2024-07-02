import { useEffect, useRef } from 'react'
import {
  type UserArticleParams,
  useTrackingUserArticleScroll,
} from '@/entities/user-article'
import { useDebounce } from '@/shared/lib'
import { useScrollProgress } from '../lib'
import ScrollProgressBar from './ScrollProgressBar'
import { MAX_SCROLL_CRITERIA } from '../constant'

interface ScrollTrackerProps extends Omit<UserArticleParams, 'userEmail'> {
  initProgress: number
}

export default function ScrollTracker({
  articleId,
  initProgress,
}: ScrollTrackerProps) {
  const { mutate } = useTrackingUserArticleScroll({ articleId })
  const { scrollProgress } = useScrollProgress()
  const debouncedScroll = useDebounce(scrollProgress, 800)
  const progressRef = useRef(initProgress)

  useEffect(() => {
    if (debouncedScroll > progressRef.current) {
      const readPercentage =
        debouncedScroll > MAX_SCROLL_CRITERIA ? 100 : debouncedScroll
      progressRef.current = readPercentage
      mutate(readPercentage)
    }
  }, [debouncedScroll, mutate])

  return <ScrollProgressBar progress={scrollProgress} />
}
