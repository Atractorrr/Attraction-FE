const skeletonSize = {
  md: {
    avatar: 'size-7',
    text: 'h-4 w-[calc(80%-2.5rem)]',
  },
  lg: {
    avatar: 'size-8',
    text: 'h-5 w-[calc(100%-2.75rem)]',
  },
}

interface NewsletterSelectSkeletonProps {
  className?: string
  size?: keyof typeof skeletonSize
}

export default function NewsletterSelectSkeleton({
  className,
  size = 'md',
}: NewsletterSelectSkeletonProps) {
  return (
    <div className={`flex items-center px-2 py-1 ${className ?? 'w-full'}`}>
      <div
        className={`mr-3 ${skeletonSize[size].avatar} shrink-0 rounded-full bg-gray-100 dark:bg-gray-700`}
      />
      <div
        className={`${skeletonSize[size].text} rounded bg-gray-100 dark:bg-gray-700`}
      />
    </div>
  )
}
