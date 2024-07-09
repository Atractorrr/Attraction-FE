'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { useCheckDevice } from '@/shared/lib'
import SignInCarousel from './SignInCarousel'

export default function ServiceIntroduceView({ children }: PropsWithChildren) {
  const { isVisited, setVisited } = useCheckDevice()
  const [isSkip, setSkip] = useState(true)

  useEffect(() => setSkip(isVisited), [isVisited])

  if (!isVisited && !isSkip) {
    return (
      <section
        id="introduce"
        className="mx-auto flex h-auto min-h-dvh w-full max-w-[540px] flex-col justify-between bg-white dark:bg-gray-800">
        <div />
        <SignInCarousel />
        <div className="flex flex-col items-center justify-center gap-4 px-5 py-8 md:p-8 md:pb-12">
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center rounded-lg bg-gray-700 font-medium text-gray-50 transition-colors hover:bg-gray-600 md:h-14 md:text-lg dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100"
            title="시작하기"
            onClick={setVisited}>
            시작하기
          </button>
          <button
            type="button"
            className="px-2 py-1 text-sm text-gray-500 underline md:text-base dark:text-gray-400"
            title="다음에 보기"
            onClick={() => setSkip(true)}>
            다음에 볼래요
          </button>
        </div>
      </section>
    )
  }

  return children
}
