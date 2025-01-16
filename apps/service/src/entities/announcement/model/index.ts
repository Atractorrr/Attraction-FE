export interface PostItem {
  id: string | number
  title: string
  postCategory: string
  createdAt: string
  viewCount: number
}

export interface PostDetail {
  id: string | number
  title: string
  postCategory: string
  createdAt: string
  modifiedAt: string
  viewCount: number
  isPinned: boolean
  related: {
    prev: Pick<PostItem, 'id' | 'title' | 'createdAt'> | null
    next: Pick<PostItem, 'id' | 'title' | 'createdAt'> | null
  }
}
