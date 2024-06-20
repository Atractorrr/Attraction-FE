import type { UserArticleParams } from '../model'

const methodOfBookmark = {
  check: 'GET',
  add: 'PUT',
  cancel: 'DELETE',
}

interface FetchUserArticleBookmarkOption extends UserArticleParams {
  type: keyof typeof methodOfBookmark
}

export default async function fetchUserArticleBookmark({
  userEmail,
  articleId,
  type,
}: FetchUserArticleBookmarkOption) {
  if (!userEmail) {
    throw new Error('보관함 접근에 실패했어요')
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}/bookmark?articleId=${articleId}`,
    {
      method: methodOfBookmark[type],
    },
  )
  const { data }: { data: boolean | null } = await res.json()

  if (!res.ok) {
    throw new Error('북마크 상태를 가져오는데 실패했어요')
  }

  return data
}
