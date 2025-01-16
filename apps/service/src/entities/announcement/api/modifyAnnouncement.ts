import { CreateAnnouncementBody } from './createAnnouncement'

export interface ModifyAnnouncement {
  (id: number, body: CreateAnnouncementBody): Promise<void>
}

export const modifyAnnouncement: ModifyAnnouncement = async (id, body) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcement/${id}`,
    {
      body: JSON.stringify(body),
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  if (!response.ok) {
    throw new Error('공지사항을 수정하는데 실패했어요.')
  }
}
