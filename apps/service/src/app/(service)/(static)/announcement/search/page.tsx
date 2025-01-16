import { Metadata } from 'next'
import {
  SEARCH_TYPE,
  searchAnnouncement,
  SearchType,
} from '@/entities/announcement'
import { Container } from '@/shared/ui'
import {
  AnnouncementSearchInput,
  AnnouncementTable,
  AnnouncementList,
  PageController,
  AnnouncementEmptyItem,
} from '@/widgets/announcement-list'
import { AnnouncementPageProps } from '../page'

export const metadata: Metadata = {
  title: '공지사항 검색',
}

export default async function AnnouncementSearchPage({
  searchParams,
}: AnnouncementPageProps) {
  const { query = '', type = SEARCH_TYPE.TITLE } = searchParams
  const validQuery = Array.isArray(query) ? query[query.length - 1] : query
  const validType = (
    Array.isArray(type) ? type[type.length - 1] : type
  ) as SearchType

  const { data } = await searchAnnouncement({
    query: validQuery,
    type: validType,
  })

  return (
    <Container className="p-5">
      <div className="mb-6 flex items-center justify-end">
        <AnnouncementSearchInput
          defaultValue={validQuery}
          currentType={validType}
        />
      </div>
      {data.totalElements > 0 && (
        <p className="mb-4 mt-8 break-keep px-2">
          {data.totalElements}개의 검색결과가 있어요
        </p>
      )}
      <AnnouncementTable>
        <AnnouncementEmptyItem
          comment="검색결과가 없어요"
          render={data.totalElements <= 0}
        />
        <AnnouncementList contents={data.content} />
      </AnnouncementTable>
      <PageController
        current={data.number}
        first={data.first}
        last={data.last}
        baseURL={`/announcement/search?query=${validQuery}&type=${validType}`}
      />
    </Container>
  )
}
