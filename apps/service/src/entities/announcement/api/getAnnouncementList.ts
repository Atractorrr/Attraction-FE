import type { PostItem } from '../model'

export interface PaginationResponse<T> {
  totalElements: number
  totalPages: number
  first: boolean
  last: boolean
  size: number
  content: T[]
  number: number
  sort: {
    empty: boolean
    unsorted: boolean
    sorted: boolean
  }
  numberOfElements: number
  pageable: {
    pageNumber: number
    pageSize: number
    sort: {
      empty: boolean
      unsorted: boolean
      sorted: boolean
    }
    offset: number
    unpaged: boolean
    paged: boolean
  }
  empty: boolean
}

export interface SearchParams {
  [key: string]: string | string[] | undefined
}

export interface GetAnnouncementListResponse {
  status: string
  message: string
  data: PaginationResponse<PostItem>
}

export interface GetAnnouncementList {
  (params: SearchParams): Promise<GetAnnouncementListResponse>
}

export const getAnnouncementList: GetAnnouncementList = async (params) => {
  const targetURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcement`,
  )

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      targetURL.searchParams.set(
        key,
        Array.isArray(value) ? value[value.length - 1] : value,
      )
    }
  })

  const response = await fetch(targetURL, { method: 'GET' })

  const data: GetAnnouncementListResponse = await response.json()

  if (!response.ok) {
    throw new Error('공지사항 목록을 가져오는데 실패했어요.')
  }

  return data
}
