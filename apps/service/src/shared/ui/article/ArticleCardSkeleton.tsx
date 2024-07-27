import type { ViewType } from '../../type'

interface ArticleCardSkeletonProps {
  type?: ViewType
  className?: string
}

export default function ArticleCardSkeleton({
  type = 'gallery',
  className,
}: ArticleCardSkeletonProps) {
  if (type === 'list') {
    return (
      <div className={`flex ${className ?? ''}`}>
        <div className="mr-3 block min-h-20 w-1/4 min-w-28 rounded-md bg-gray-100 pb-[15%] dark:bg-gray-700" />
        <div className="w-[calc(75%-0.75rem)] max-w-[calc(100%-7.75rem)]">
          <div className="mb-2 h-5 w-full rounded-md bg-gray-100 dark:bg-gray-700" />
          <div className="mb-2 h-5 w-full rounded-md bg-gray-100 dark:bg-gray-700" />
          <div className="h-5 w-3/4 rounded-md bg-gray-100 dark:bg-gray-700" />
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="mb-2 block w-full rounded-md bg-gray-100 pb-[60%] dark:bg-gray-700" />
      <div className="flex w-full">
        <div className="mr-2 size-8 shrink-0 rounded-full bg-gray-100 dark:bg-gray-700" />
        <div className="block w-[calc(100%-3rem)]">
          <div className="mb-2 h-4 w-full rounded-md bg-gray-100 dark:bg-gray-700" />
          <div className="h-4 w-3/4 rounded-md bg-gray-100 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  )
}
