import { ArticleCardSkeleton } from '@/shared/ui'

export default function RecentArticlesSkeleton() {
  return (
    <div className="flex gap-x-5 overflow-x-hidden px-5 pb-7">
      {Array.from({ length: 4 }, (_, idx) => (
        <ArticleCardSkeleton key={idx} className="min-w-64" />
      ))}
    </div>
  )
}
