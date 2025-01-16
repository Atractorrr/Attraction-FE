'use client'

import { SEARCH_TYPE } from '@/entities/announcement'
import { SearchInput, Select } from '@attraction/ds-core'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

export interface AnnouncementSearchInputProps {
  defaultValue?: string
  currentType?: string
}

export function AnnouncementSearchInput({
  defaultValue = '',
  currentType = SEARCH_TYPE.TITLE,
}: AnnouncementSearchInputProps) {
  const { push } = useRouter()
  const pathname = usePathname()

  const [type, setType] = useState<string>(currentType)
  const [query, setQuery] = useState(defaultValue)

  const onSubmit = useCallback(() => {
    if (query.trim()) {
      const value = encodeURI(query.trim())

      push(`/announcement/search?page=0&query=${value}&type=${encodeURI(type)}`)
    }
  }, [query, type, push])

  const onClear = useCallback(() => {
    if (pathname === '/announcement/search') {
      push('/announcement?page=0')
    }

    setQuery('')
  }, [pathname, push])

  return (
    <div className="flex w-full max-w-3xl flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
      <Select defaultValue={type} onChange={setType} className="max-w-36">
        <Select.Option value={SEARCH_TYPE.TITLE} />
        <Select.Option value={SEARCH_TYPE.CONTENT} />
        <Select.Option value="제목내용">
          {SEARCH_TYPE.TITLE_CONTENT}
        </Select.Option>
      </Select>
      <SearchInput
        value={query}
        submitButtonPosition="right"
        withClearButton={!!query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        onSubmit={onSubmit}
        onClear={onClear}
      />
    </div>
  )
}
