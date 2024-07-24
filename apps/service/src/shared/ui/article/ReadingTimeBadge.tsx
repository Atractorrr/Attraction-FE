interface ArticleReadingTimeBadge {
  readingTime: number
}

export default function ReadingTimeBadge({
  readingTime,
}: ArticleReadingTimeBadge) {
  return (
    <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-1 text-xs text-white">
      {readingTime > 0 ? `약 ${readingTime}분` : '1분 미만'}
    </span>
  )
}
