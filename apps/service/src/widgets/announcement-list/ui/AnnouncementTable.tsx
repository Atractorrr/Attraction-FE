'use client'

import { HiddenText } from '@attraction/ds-core'

export function AnnouncementTable({ children }: React.PropsWithChildren) {
  return (
    <div>
      <table className="relative block w-full border-y border-gray-100 md:table dark:border-gray-700">
        <HiddenText as="caption">
          카테고리, 제목, 날짜로 구성된 어트랙션 공지사항에 대한 표에요
        </HiddenText>
        <colgroup>
          <col width="16%" />
          <col width="64%" />
          <col width="20%" />
        </colgroup>
        <thead className="hidden border-b border-gray-100 md:table-row-group dark:border-gray-700">
          <tr>
            <th className="p-2 font-medium">카테고리</th>
            <th className="p-2 font-medium">제목</th>
            <th className="p-2 font-medium">날짜</th>
          </tr>
        </thead>
        <tbody className="block w-full md:table-row-group md:w-auto">
          {children}
        </tbody>
      </table>
    </div>
  )
}
