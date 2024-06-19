function NewsletterSkeleton() {
  return (
    <div className="flex w-full gap-x-4">
      <div className="size-16 shrink-0 rounded-xl bg-gray-100 dark:bg-gray-700" />
      <div className="w-full">
        <div className="h-5 w-full max-w-32 rounded-md bg-gray-100 dark:bg-gray-700" />
        <div className="mt-2 w-full">
          <div className="h-4 w-full max-w-60 rounded-md bg-gray-100 dark:bg-gray-700" />
          <div className="mt-1 h-4 w-full max-w-52 rounded-md bg-gray-100 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  )
}

export default function TrendNewsletterSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
      {Array.from({ length: 10 }, (_, idx) => (
        <NewsletterSkeleton key={idx} />
      ))}
    </div>
  )
}
