export interface DeleteAnnouncement {
  (id: number): Promise<void>
}

export const deleteAnnouncement: DeleteAnnouncement = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcement/${id}`,
    { method: 'DELETE' },
  )

  if (!response.ok) {
    throw new Error('공지사항을 삭제하는데 실패했어요.')
  }
}
