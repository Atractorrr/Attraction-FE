import { PostItem } from '../model'

export interface GetPinnedAnnouncementListResponse {
  status: string
  message: string
  data: PostItem[]
}

export interface GetPinnedAnnouncementList {
  (): Promise<GetPinnedAnnouncementListResponse>
}

export const getPinnedAnnouncementList: GetPinnedAnnouncementList =
  async () => {
    const targetURL = new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcement/pinned`,
    )

    const response = await fetch(targetURL, { method: 'GET' })

    const data: GetPinnedAnnouncementListResponse = await response.json()

    if (!response.ok) {
      throw new Error('고정된 공지사항 목록을 가져오는데 실패했어요.')
    }

    return data
  }
