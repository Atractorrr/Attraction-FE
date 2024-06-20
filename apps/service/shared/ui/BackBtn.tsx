'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeftOutline } from '@attraction/icons'
import { Button } from '@attraction/design-system/dist'

export default function BackBtn() {
  const router = useRouter()

  return (
    <Button
      type="button"
      className="inline-flex items-center justify-center gap-2 p-1 text-lg hover:text-blue-400 dark:hover:text-blue-300"
      title="뒤로가기"
      onClick={router.back}>
      <ChevronLeftOutline />
      <span className="text-base">뒤로</span>
    </Button>
  )
}
