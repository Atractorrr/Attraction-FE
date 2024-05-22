import { HttpHandler, HttpResponse } from 'msw'
import { get } from '../tools'
import { recentArticles, trendNewsLetters } from '@/__mocks__/data'

const mainHandlers: HttpHandler[] = [
  get('/v1/articles/recent', ({ request }) => {
    const url = new URL(request.url)
    const size = Number(url.searchParams.get('size') ?? 5)
    const res = {
      mainArticles: recentArticles.slice(0, size),
    }
    return HttpResponse.json(res)
  }),
  get('/v1/newsletters/recommend', ({ request }) => {
    const priorityCategory = ['IT/테크', '디자인']
    const url = new URL(request.url)
    const size = Number(url.searchParams.get('size' ?? 10))
    const category = url.searchParams.get('category')
    const res = {
      priorityCategory,
      content: {
        category,
        isUser: true,
        newsletters: category
          ? trendNewsLetters[category].slice(0, size)
          : trendNewsLetters.RECOMMEND.slice(0, size),
      },
    }

    return HttpResponse.json(res)
  }),
]

export default mainHandlers
