'use client'

import { useEffect, useState } from 'react'
import { BackspaceOutline, MagnifyingGlassOutline } from '@attraction/icons'
import { useDebounce } from '@/shared/lib'

interface SearchBarProps {
  setValue: (value: string) => void
}

export default function SearchBar({ setValue }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 500)

  useEffect(() => setValue(debouncedValue), [debouncedValue, setValue])

  return (
    <div className="relative block">
      <MagnifyingGlassOutline className="absolute inset-y-0 left-2 my-auto ml-0.5 inline-flex size-4 items-center justify-center text-base text-gray-500 xs:size-5 dark:text-gray-400" />
      <input
        className="block h-10 w-full rounded-lg border border-gray-100 bg-gray-50 px-8 py-1 text-sm outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400 focus:bg-white xs:px-10 xs:text-base dark:border-gray-700 dark:bg-gray-700 dark:placeholder:text-gray-400 dark:focus:bg-gray-800"
        placeholder="검색어를 입력해 주세요"
        type="search"
        autoComplete="off"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <button
          type="button"
          title="검색어 지우기"
          className="absolute inset-y-0 right-0 my-auto inline-flex size-8 items-center justify-center p-1 text-xl text-gray-500 xs:size-10  dark:text-gray-400"
          onClick={() => {
            setSearchValue('')
            setValue('')
          }}>
          <BackspaceOutline />
          <span className="blind">검색어 지우기</span>
        </button>
      )}
    </div>
  )
}
