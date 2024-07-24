'use client'

import type { ReactNode } from 'react'
import { useCheckDevice } from '../../lib'
import { Carousel } from '../carousel'

const carouselOptions = {
  dragFree: true,
}

interface ArticleCardContainerProps {
  children: ReactNode[]
}

export default function ArticleCardContainer({
  children,
}: ArticleCardContainerProps) {
  const { isMobile } = useCheckDevice()

  if (isMobile) {
    return (
      <div className="relative w-full">
        <div className="overflow-x-auto before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-5 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-5 after:bg-gradient-to-l after:from-white after:to-transparent dark:before:from-gray-800 dark:after:from-gray-800">
          <div className="flex min-w-fit items-start justify-start gap-4 px-5 pb-5">
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-5 pb-5">
      <Carousel options={carouselOptions} slides={children} showBlur />
    </div>
  )
}
