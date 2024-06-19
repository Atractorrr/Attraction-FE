import { Container, Title } from '@/shared/ui'
import { MagnifyingGlassOutline } from '@attraction/icons'

function DiscoverArticleItemSkeleton() {
  return (
    <div className="flex w-full gap-x-5">
      <div className="h-36 w-full max-w-[208px] rounded-md bg-gray-100 dark:bg-gray-800" />
      <div className="flex w-full flex-col gap-y-3">
        <div className="h-5 w-full max-w-[516px] rounded-md bg-gray-100 dark:bg-gray-800" />
        <div className="h-5 w-full max-w-[662px] rounded-md bg-gray-100 dark:bg-gray-800" />
        <div className="h-5 w-full max-w-[662px] rounded-md bg-gray-100 dark:bg-gray-800" />
        <div className="h-5 w-full max-w-[315px] rounded-md bg-gray-100 dark:bg-gray-800" />
      </div>
    </div>
  )
}

function DiscoverArticlesSkeleton() {
  return (
    <Container>
      <div className="p-5">
        <div className="mt-6 flex flex-col gap-y-5">
          {Array.from({ length: 4 }, (_, idx) => (
            <DiscoverArticleItemSkeleton key={idx} />
          ))}
        </div>
      </div>
    </Container>
  )
}

function RelatedNewsletterItemSkeleton() {
  return (
    <div className="flex w-full gap-x-3">
      <div className="size-16 shrink-0 rounded-md bg-gray-100 dark:bg-gray-800" />
      <div className="flex w-full flex-col gap-y-2">
        <div className="h-4 w-full max-w-24 rounded-md bg-gray-100 dark:bg-gray-800" />
        <div className="h-4 w-full max-w-[236px] rounded-md bg-gray-100 dark:bg-gray-800" />
        <div className="h-4 w-full max-w-[164px] rounded-md bg-gray-100 dark:bg-gray-800" />
      </div>
    </div>
  )
}

function RelatedNewsletterSkeleton() {
  return (
    <Container>
      <div className="p-5">
        <Title text="관련 뉴스레터" />
        <div className="mt-5 flex flex-col gap-y-5">
          {Array.from({ length: 5 }, (_, idx) => (
            <RelatedNewsletterItemSkeleton key={idx} />
          ))}
        </div>
      </div>
    </Container>
  )
}

function DiscoverInputSkeleton() {
  return (
    <div className="flex w-full justify-end gap-x-2 overflow-hidden rounded-full border bg-white px-7 py-5 text-gray-400 shadow-lg lg:max-w-screen-md dark:bg-gray-800 dark:text-gray-300 ">
      <div className="flex size-6 items-center justify-center">
        <MagnifyingGlassOutline className="size-full" />
      </div>
    </div>
  )
}

export default function DiscoverResultSkeleton() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-12">
      <div className="flex w-full justify-center px-4 lg:px-0">
        <DiscoverInputSkeleton />
      </div>
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex w-full flex-col gap-y-6 lg:w-[calc(100%-366px)]">
          <DiscoverArticlesSkeleton />
        </div>
        <div className="flex w-full flex-col gap-y-6 lg:w-[366px]">
          <RelatedNewsletterSkeleton />
        </div>
      </div>
    </div>
  )
}
