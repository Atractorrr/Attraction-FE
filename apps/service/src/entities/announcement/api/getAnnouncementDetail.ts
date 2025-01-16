import type { PostDetail } from '../model'

export interface GetAnnouncementDetailResponse {
  status: string
  message: string
  data: PostDetail
}

export interface GetAnnouncementDetail {
  (id: number): Promise<GetAnnouncementDetailResponse>
}

export const getAnnouncementDetail: GetAnnouncementDetail = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcement/${id}`,
    { method: 'GET' },
  )

  const data: GetAnnouncementDetailResponse = await response.json()

  if (!response.ok) {
    throw new Error('공지사항을 가져오는데 실패했어요.')
  }

  return data
}
