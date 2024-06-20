'use client'

import { MagnifyingGlassOutline } from '@attraction/icons'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

export default function DiscoverInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSearch = () => {
    if (inputRef.current) {
      const searchTerm = inputRef.current.value
      router.push(`/discover/${searchTerm}`)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="flex w-full gap-x-2 overflow-hidden rounded-full border border-gray-100 bg-white px-7 py-5 text-gray-400 shadow-lg lg:max-w-screen-md dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300">
      <input
        className="w-full bg-transparent focus:outline-none"
        ref={inputRef}
        type="text"
        placeholder="검색어를 입력하세요"
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="flex size-6 items-center justify-center"
        onClick={handleSearch}
        aria-label="검색 버튼">
        <MagnifyingGlassOutline className="size-full" />
      </button>
    </div>
  )
}
