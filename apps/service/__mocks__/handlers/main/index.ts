import { HttpHandler, HttpResponse } from 'msw'
import { recentArticles, trendNewsLetters } from '@/__mocks__/data'
import { get } from '../tools'

const mainHandlers: HttpHandler[] = [
  get('/v1/user/articles/received', ({ request }) => {
    const url = new URL(request.url)
    const size = Number(url.searchParams.get('size') ?? 5)
    const res = {
      mainArticles: recentArticles.slice(0, size),
    }
    return HttpResponse.json(res)
  }),
  get('/v1/newsletters/recommend', ({ request }) => {
    const url = new URL(request.url)
    const size = Number(url.searchParams.get('size' ?? 10))
    const category = url.searchParams.get('category')
    const res = {
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
  get('/v1/newsletters/categories', () => {
    const categories = ['IT_TECH', 'DESIGN']

    return HttpResponse.json({ categories })
  }),
]

export default mainHandlers
