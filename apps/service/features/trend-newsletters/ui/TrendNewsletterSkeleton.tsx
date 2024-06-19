function NewsletterSkeleton() {
  return (
    <div className="flex gap-x-4">
      <div className="size-16 rounded-xl bg-gray-100 dark:bg-gray-700" />
      <div>
        <div className="h-5 w-32 rounded-md bg-gray-100 dark:bg-gray-700" />
        <div className="mt-2">
          <div className="h-4 w-60 rounded-md bg-gray-100 dark:bg-gray-700" />
          <div className="mt-1 h-4 w-52 rounded-md bg-gray-100 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  )
}

export default function TrendNewsletterSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {Array.from({ length: 10 }, (_, idx) => (
        <NewsletterSkeleton key={idx} />
      ))}
    </div>
  )
}
