interface ArticleProgressProps {
  readPercentage: number
}

export default function ReadProgress({ readPercentage }: ArticleProgressProps) {
  if (readPercentage <= 0) return null

  return (
    <span className="absolute inset-x-0 bottom-0 h-1 bg-gray-100 dark:bg-gray-300">
      <span
        className="absolute inset-x-0 h-1 bg-blue-400"
        style={{ width: `${readPercentage}%` }}
      />
    </span>
  )
}
