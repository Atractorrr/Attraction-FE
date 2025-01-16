import { Metadata } from 'next'
import {
  AnnouncementEmptyItem,
  AnnouncementList,
  AnnouncementSearchInput,
  AnnouncementTable,
  PageController,
} from '@/widgets/announcement-list'
import {
  getAnnouncementList,
  getPinnedAnnouncementList,
  SearchParams,
} from '@/entities/announcement'
import { Container } from '@/shared/ui'

export const metadata: Metadata = {
  title: '공지사항',
}

export interface AnnouncementPageProps {
  searchParams: SearchParams
}

export default async function AnnouncementPage({
  searchParams,
}: AnnouncementPageProps) {
  const [{ data }, { data: pinnedList }] = await Promise.all([
    getAnnouncementList(searchParams),
    getPinnedAnnouncementList(),
  ])

  const totalLength = data.totalElements + pinnedList.length

  return (
    <Container className="p-5">
      <div className="mb-6 flex items-center justify-end">
        <AnnouncementSearchInput />
      </div>
      {totalLength > 0 && (
        <p className="mb-4 mt-8 break-keep px-2">
          {totalLength}개의 공지가 있어요
        </p>
      )}
      <AnnouncementTable>
        <AnnouncementEmptyItem render={totalLength <= 0} />
        <AnnouncementList contents={pinnedList} pinned />
        <AnnouncementList contents={data.content} />
      </AnnouncementTable>
      <PageController
        current={data.number}
        first={data.first}
        last={data.last}
        baseURL="/announcement"
      />
    </Container>
  )
}
