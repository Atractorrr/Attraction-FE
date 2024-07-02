export function RecentArticleItemSkeleton() {
  return (
    <div className="flex w-full max-w-[264px] shrink-0 flex-col gap-y-3">
      <div className="h-[140px] w-full shrink-0 rounded-md bg-gray-100 dark:bg-gray-800" />
      <div className="flex w-full gap-x-3">
        <div className="size-8 shrink-0 rounded-full bg-gray-100 dark:bg-gray-800" />
        <div className="flex w-full flex-col gap-y-2">
          <div className="h-4 w-full max-w-[220px] rounded-md bg-gray-100 dark:bg-gray-800" />
          <div className="h-4 w-full max-w-[164px] rounded-md bg-gray-100 dark:bg-gray-800" />
        </div>
      </div>
    </div>
  )
}

export default function RecentArticlesSkeleton() {
  return (
    <div className="flex gap-x-5 overflow-x-hidden">
      {Array.from({ length: 4 }, (_, idx) => (
        <RecentArticleItemSkeleton key={idx} />
      ))}
    </div>
  )
}
