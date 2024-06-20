import { Container, Title } from '@/shared/ui'
import { ClockOutline } from '@attraction/icons'

function NewsletterIntroduceProfileSkeleton() {
  return (
    <Container>
      <div className="flex w-full gap-x-6 p-5">
        <div className="h-[208px] w-60 shrink-0 rounded-md bg-gray-100 dark:bg-gray-800" />
        <div className="w-full">
          <div className="flex w-full flex-col gap-y-2">
            <div className="h-5 w-full max-w-[480px] rounded-md bg-gray-100 dark:bg-gray-800" />
            <div className="flex w-full gap-x-2">
              <div className="h-5 w-full max-w-24 rounded-md bg-gray-100 dark:bg-gray-800" />
              <div className="h-5 w-full max-w-16 rounded-md bg-gray-100 dark:bg-gray-800" />
            </div>
          </div>
          <div className="mt-7 flex w-full flex-col gap-y-2">
            <div className="h-5 w-full max-w-[480px] rounded-md bg-gray-100 dark:bg-gray-800" />
            <div className="h-5 w-full max-w-[480px] rounded-md bg-gray-100 dark:bg-gray-800" />
            <div className="h-5 w-full max-w-screen-xs rounded-md bg-gray-100 dark:bg-gray-800" />
          </div>
        </div>
      </div>
    </Container>
  )
}

function NewsletterPreviousArticleItemSkeleton() {
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

function NewsletterPreviousArticlesSkeleton() {
  return (
    <Container>
      <div className="p-5">
        <Title icon={<ClockOutline className="size-6" />} text="지난 아티클" />
        <div className="mt-6 flex flex-col gap-y-5">
          {Array.from({ length: 4 }, (_, idx) => (
            <NewsletterPreviousArticleItemSkeleton key={idx} />
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
        <Title text="연관 뉴스레터" />
        <div className="mt-5 flex flex-col gap-y-5">
          {Array.from({ length: 5 }, (_, idx) => (
            <RelatedNewsletterItemSkeleton key={idx} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default function NewsletterIntroduceSkeleton() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex w-full flex-col gap-y-6 lg:w-[calc(100%-366px)]">
        <NewsletterIntroduceProfileSkeleton />
        <NewsletterPreviousArticlesSkeleton />
      </div>
      <div className="flex w-full flex-col gap-y-6 lg:w-[366px]">
        <RelatedNewsletterSkeleton />
      </div>
    </div>
  )
}
