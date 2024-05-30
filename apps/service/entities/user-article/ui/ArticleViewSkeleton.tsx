export default function ArticleViewSkeleton() {
  return (
    <div className="p-5">
      <div className="mb-4 h-8 rounded bg-gray-100 dark:bg-gray-700" />
      <div className="mb-7 flex items-center gap-3">
        <div className="h-6 w-[12%] rounded bg-gray-100 dark:bg-gray-700" />
        <div className="h-6 w-1/5 rounded bg-gray-100 dark:bg-gray-700" />
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-gray-700" />
      </div>
      <div className="h-dvh w-full rounded bg-gray-100 dark:bg-gray-700" />
    </div>
  )
}
