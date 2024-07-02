'use client'

import { MagnifyingGlassOutline } from '@attraction/icons'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

export default function DiscoverInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSearch = () => {
    const query = inputRef.current?.value

    if (query) {
      router.push(`/discover?q=${query}`)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="relative mx-auto h-[60px] w-full max-w-3xl">
      <input
        className="size-full rounded-full border border-gray-100 bg-white py-3 pl-7 pr-16 outline-none transition-all placeholder:text-gray-500 focus:border-blue-400 focus:shadow-lg xs:text-lg dark:border-gray-800 dark:bg-gray-800 dark:shadow-none dark:placeholder:text-gray-400"
        ref={inputRef}
        type="text"
        placeholder="검색어를 입력하세요"
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-5 my-auto flex size-10 items-center justify-center rounded-full transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
        onClick={handleSearch}
        title="검색하기"
        aria-label="검색 버튼">
        <MagnifyingGlassOutline className="size-5" />
      </button>
    </div>
  )
}
