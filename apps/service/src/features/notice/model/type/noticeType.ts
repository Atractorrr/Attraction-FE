interface NoticeType {
  category: string
  page: string
}

interface NoticeItemType {
  id: number
  category: string
  title: string
  author: string
  createdAt: string
  pinned: boolean
}

export type { NoticeItemType, NoticeType }
