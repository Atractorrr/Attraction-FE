import { GetAnnouncementListResponse } from './getAnnouncementList'

export type SearchType = keyof typeof SEARCH_TYPE

export interface SearchAnnouncementParams {
  type: SearchType
  query: string
}

export interface SearchAnnouncement {
  (params: SearchAnnouncementParams): Promise<GetAnnouncementListResponse>
}

export const SEARCH_TYPE = Object.freeze({
  TITLE: '제목',
  CONTENT: '내용',
  TITLE_CONTENT: '제목 및 내용',
})

export const searchAnnouncement: SearchAnnouncement = async (params) => {
  const targetURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcement/search`,
  )

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      targetURL.searchParams.set(key, value)
    }
  })

  const response = await fetch(targetURL, { method: 'GET' })

  const data: GetAnnouncementListResponse = await response.json()

  if (!response.ok) {
    throw new Error('공지사항 검색에 실패했어요.')
  }

  return data
}
