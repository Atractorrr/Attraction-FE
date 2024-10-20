import { DEFAULT_CENSORED_ARTICLE_HEIGHT } from '../../constant'

export default function getFrameHeight({
  height,
  isPrevArticle,
}: {
  height: number
  isPrevArticle: boolean
}) {
  if (isPrevArticle) {
    return `${height / 2 > DEFAULT_CENSORED_ARTICLE_HEIGHT ? DEFAULT_CENSORED_ARTICLE_HEIGHT : height / 2}px`
  }
  return `${height}px`
}
