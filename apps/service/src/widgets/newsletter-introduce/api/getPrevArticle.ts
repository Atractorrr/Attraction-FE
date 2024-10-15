interface GetPrevArticleOption {
  newsletterId: number
  articleId: number
}

interface GetPrevArticleResponse {
  message: string
  data: {
    id: number
    title: string
    thumbnailUrl: string
    contentUrl: string
    contentSummary: string
    readingTime: number
    receivedAt: string
    newsletter: {
      id: number
      name: string
      category: string
      thumbnailUrl: string
      homepageUrl: string
      prevArticleListUrl: string | null
    }
  }
}

export default async function getPrevArticle({
  newsletterId,
  articleId,
}: GetPrevArticleOption) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/newsletters/${newsletterId}/articles/prev/${articleId}`,
  )
  const data: GetPrevArticleResponse = await res.json()

  if (!res.ok) {
    throw new Error('이전 아티클을 불러오지 못했어요')
  }

  return data
}
