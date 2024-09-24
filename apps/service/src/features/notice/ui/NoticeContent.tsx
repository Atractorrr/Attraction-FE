'use client'

import { useCheckDevice } from '@/shared/lib'
import { Badge } from '@attraction/design-system'
import { NoticeItemType } from '../model'

function NoticeMobileItem({ item }: { item: Omit<NoticeItemType, 'id'> }) {
  return (
    <li className="border-y border-gray-100 px-2 py-4 first:border-b-0 last:border-t-0">
      <div className="mb-3 space-x-2">
        <Badge variant="green">{item.category}</Badge>
      </div>
      <p className="mb-4 truncate">{item.title}</p>
      <p>{item.createdAt}</p>
    </li>
  )
}

function NoticePCItem({ item }: { item: NoticeItemType }) {
  return (
    <tr className="*:p-3">
      <td>{item.id}</td>
      <td>
        <Badge variant="green">{item.category}</Badge>
      </td>
      <td className="max-w-0 truncate text-left">{item.title}</td>
      <td>2024.01.30</td>
    </tr>
  )
}

type NoticeContentProps = {
  noticeList: NoticeItemType[]
}

export default function NoticeContent({ noticeList }: NoticeContentProps) {
  const { isMobileView } = useCheckDevice()

  const renderNoticeItems = (isMobile: boolean) => {
    return noticeList.map((item) => {
      if (isMobile) {
        const { id, ...rest } = item
        return <NoticeMobileItem key={id} item={rest} />
      }
      return <NoticePCItem key={item.id} item={item} />
    })
  }

  return (
    <div className="py-6">
      {isMobileView ? (
        <ul className="*:border-y *:border-gray-100 ">
          {renderNoticeItems(isMobileView)}
        </ul>
      ) : (
        <table className="w-full border-y border-gray-100">
          <colgroup>
            <col width="0%" />
            <col width="0%" />
            <col width="70%" />
            <col width="0%" />
          </colgroup>
          <thead>
            <tr className="*:p-2 *:font-medium">
              <th>글 번호</th>
              <th>카테고리</th>
              <th>제목</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {renderNoticeItems(isMobileView)}
          </tbody>
        </table>
      )}
    </div>
  )
}
