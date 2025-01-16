'use client'

import { Button } from '@attraction/ds-core'
import { cn } from '@attraction/utils'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export interface PageControllerProps {
  current: number
  first: boolean
  last: boolean
  baseURL: string
  className?: string
}

function ArrowLeftOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function PageController({
  current,
  first,
  last,
  baseURL,
  className,
}: PageControllerProps) {
  const { push } = useRouter()
  const separator = baseURL.includes('?') ? '&' : '?'

  return (
    <div className={cn('mt-6 items-center justify-end sm:flex', className)}>
      <div className="flex w-full items-center justify-end sm:w-auto">
        <Button
          variant="light"
          title="이전 페이지 이동"
          onClick={() => push(`${baseURL}${separator}page=${current - 1}`)}
          disabled={first}>
          <ArrowLeftOutline />
          <span className="pr-1">이전</span>
        </Button>
        <Button
          variant="light"
          className="ml-2"
          title="다음 페이지 이동"
          onClick={() => push(`${baseURL}${separator}page=${current + 1}`)}
          disabled={last}>
          <span className="pl-1">다음</span>
          <ArrowLeftOutline className="-scale-x-100" />
        </Button>
      </div>
      <Link
        href="/announcement/create"
        className="mb-2 mt-8 flex h-10 items-center justify-center rounded-lg bg-gray-700 px-6 py-2 text-white transition-colors hover:bg-gray-600 sm:my-0 sm:ml-4 dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-200"
        title="글쓰러 가기">
        글쓰기
      </Link>
    </div>
  )
}
