'use client'

import { useEffect, useState } from 'react'
import { Input, Button } from '@attraction/design-system/dist'
import { MagnifyingGlassOutline } from '@attraction/icons'

import { useDebounce } from '@/shared/lib'

interface SearchBarProps {
  setValue: (value: string) => void
}

export default function SearchBar({ setValue }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 500)

  useEffect(() => setValue(debouncedValue), [debouncedValue, setValue])

  return (
    <div className="relative min-w-52 xs:min-w-72">
      <span className="absolute inset-y-0 left-0 my-auto inline-flex size-8 items-center justify-center text-base text-gray-500 xs:size-10 xs:text-lg dark:text-gray-400">
        <MagnifyingGlassOutline />
      </span>
      <Input
        className="block h-9 w-full rounded-lg border border-gray-100 bg-gray-50 px-8 py-1 text-sm outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400 focus:bg-white xs:h-10 xs:px-10 xs:text-base dark:border-gray-700 dark:bg-gray-700 dark:placeholder:text-gray-400 dark:focus:bg-gray-800"
        placeholder="검색어를 입력해 주세요"
        type="search"
        autoComplete="off"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <Button
          title="지우기"
          className="absolute inset-y-0 right-0 my-auto inline-flex size-8 items-center justify-center p-1 text-xl text-gray-500 xs:size-10  dark:text-gray-400"
          onClick={() => {
            setSearchValue('')
            setValue('')
          }}>
          <svg
            // TODO: Icon 패키지 사용 (백스페이스 아이콘)
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11.03 8.97a.75.75 0 0 0-1.06 1.06L11.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L13 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L14.06 12l1.97-1.97a.75.75 0 0 0-1.06-1.06L13 10.94z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21.32 4.634c-.766-.745-1.735-1.074-2.933-1.231c-1.168-.153-2.662-.153-4.553-.153h-2.728c-1.083 0-1.948 0-2.656.066c-.73.068-1.35.21-1.935.525c-.586.316-1.04.754-1.49 1.324c-.433.551-.892 1.266-1.465 2.158L2.837 8.45c-.478.744-.869 1.352-1.135 1.882c-.278.553-.452 1.08-.452 1.669s.174 1.116.452 1.67c.266.53.657 1.137 1.135 1.881l.723 1.126c.573.892 1.032 1.607 1.466 2.158c.449.57.903 1.008 1.49 1.324c.584.315 1.203.457 1.934.525c.708.066 1.573.066 2.656.066h2.728c1.891 0 3.385 0 4.553-.153c1.198-.157 2.167-.486 2.932-1.231c.768-.747 1.11-1.698 1.273-2.874c.158-1.14.158-2.598.158-4.434v-.116c0-1.836 0-3.293-.158-4.434c-.162-1.176-.505-2.126-1.273-2.874m-7.541.116c1.958 0 3.354.002 4.413.14c1.04.136 1.642.392 2.081.82c.436.423.695 1.001.834 2.004c.141 1.026.143 2.379.143 4.286c0 1.907-.002 3.26-.143 4.286c-.139 1.003-.398 1.58-.834 2.005c-.439.427-1.041.683-2.081.819c-1.06.139-2.455.14-4.413.14h-2.637c-1.127 0-1.922 0-2.553-.06c-.615-.057-1.017-.165-1.362-.352c-.344-.185-.65-.457-1.023-.932c-.384-.487-.804-1.14-1.402-2.071l-.681-1.06c-.505-.787-.852-1.328-1.078-1.779c-.219-.435-.293-.725-.293-.996s.074-.561.293-.996c.226-.45.573-.992 1.078-1.779l.68-1.06c.599-.93 1.02-1.584 1.403-2.071c.374-.475.68-.747 1.023-.932c.345-.187.747-.295 1.362-.353c.63-.058 1.426-.059 2.553-.059z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      )}
    </div>
  )
}
