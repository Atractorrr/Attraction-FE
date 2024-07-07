import { Container } from '@/shared/ui'

export default function ProfileContainerSkeleton() {
  return (
    <Container>
      <div className="relative flex w-full flex-col">
        <div className="group relative md:px-5 md:pt-5">
          <div className="relative h-[48vw] max-h-60 min-h-40 w-full overflow-hidden bg-gray-100 sm:h-64 md:rounded-lg dark:bg-gray-700" />
        </div>
        <div className="flex size-full flex-col pl-5 md:flex-row md:pl-12">
          <div className="relative size-20 md:size-auto">
            <div className="relative size-40 shrink-0 -translate-y-1/2 rounded-full bg-white p-2 dark:bg-gray-800">
              <div className="relative size-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700" />
            </div>
          </div>
          <div className="flex w-full flex-col justify-between py-10 pl-1 pr-6 md:p-5 ">
            <div className="mb-6 px-1">
              <span className="rounded-md bg-gray-50 px-12 py-1 dark:bg-gray-700 " />
            </div>
            <div className="flex w-full flex-col justify-between gap-4 px-1 lg:flex-row">
              <div className="flex justify-start space-x-2">
                <span className="w-fit rounded-full bg-gray-50 px-10 py-4 dark:bg-gray-700" />
                <span className="w-fit rounded-full bg-gray-50 px-10 py-4 dark:bg-gray-700" />
              </div>
              <div className="mt-8 flex w-full shrink-0 gap-2 md:self-end lg:mt-0 lg:w-auto">
                <span className="w-full rounded-md bg-gray-50 px-14 py-4 dark:bg-gray-700" />
                <span className="w-full rounded-md bg-gray-50 px-14 py-4 dark:bg-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
