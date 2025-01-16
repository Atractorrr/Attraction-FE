export interface CreateAnnouncementBody {
  title: string
  content: string
  postCategory: string
  isPinned: false
}

export interface CreateAnnouncement {
  (body: CreateAnnouncementBody): Promise<void>
}

export const createAnnouncement: CreateAnnouncement = async (body) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcement`,
    {
      body: JSON.stringify(body),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  if (!response.ok) {
    throw new Error('공지사항을 생성하는데 실패했어요.')
  }
}
