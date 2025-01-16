import { PostItem } from '@/entities/announcement'
import AnnouncementItem from './AnnouncementItem'

export interface AnnouncementListProps {
  contents: PostItem[]
  pinned?: boolean
}

export async function AnnouncementList({
  contents,
  pinned,
}: AnnouncementListProps) {
  return (
    <>
      {contents.map((postItem) => (
        <AnnouncementItem key={postItem.id} {...postItem} pinned={pinned} />
      ))}
    </>
  )
}
