import { HttpHandler, HttpResponse } from 'msw'
import { error, get, getParams } from '../tools'
import { articles } from '@/__mocks__/data'

const defaultPagination = {
  size: 0, // 읽어온 데이터 갯수
  number: 0, // size 기준 현재 페이지 (0부터 시작)
  sort: { empty: true, sorted: true, unsorted: true },
  numberOfElements: 0,
  pageable: {
    offset: 0,
    sort: { empty: true, sorted: true, unsorted: true },
    pageSize: 0,
    paged: true,
    pageNumber: 0,
    unpaged: true,
  },
  first: true, // 첫 번째 페이지
  last: true, // 마지막 페이지
  empty: true,
}

type DefaultPagination = typeof defaultPagination
type Article = (typeof articles)[number]

const sorted: { [key: string]: (a: Article, b: Article) => number } = {
  desc: (a, b) =>
    new Date(a.receivedAt).getTime() - new Date(b.receivedAt).getTime(),
  asc: (a, b) =>
    new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime(),
}

const inboxHandlers: HttpHandler[] = [
  get('/v1/member/:memberId/articles', ({ request, params }) => {
    const memberId = Number(params.memberId)
    const searchParams = getParams(request.url)
    const page = Number(searchParams.get('page') ?? 0)
    const size = Number(searchParams.get('size') ?? 12)
    const sort = searchParams.get('sort') ?? 'asc'
    const query = searchParams.get('q')
    const categories = searchParams.get('category')?.split(',') ?? []
    const isInvalidRequest = [memberId, page, size].some(isNaN)

    if (isInvalidRequest) {
      return error('잘못된 요청입니다', 400)
    }

    const sortedArticles = [...articles].sort(sorted[sort])
    const searchedArticles = !!query
      ? sortedArticles.filter((article) => article.title.includes(query))
      : sortedArticles
    const filteredArticles =
      categories.length > 0
        ? searchedArticles.filter((article) =>
            categories.some((category) => category === article.category),
          )
        : searchedArticles
    const resultOfArticles =
      searchedArticles.length > size
        ? filteredArticles.filter((_, i) => i < size)
        : filteredArticles

    const data: { articles: Article[] } & DefaultPagination = Object.assign(
      defaultPagination,
      {
        articles: resultOfArticles,
        size: resultOfArticles.length,
        number: page,
        first: page === 0,
        last: page >= 2 || resultOfArticles.length < size,
      },
    )

    return HttpResponse.json(data)
  }),
  get('/v1/member/:memberId/categories', ({ params }) => {
    const memberId = Number(params.memberId)

    if (isNaN(memberId)) {
      return error('잘못된 요청입니다', 400)
    }

    return HttpResponse.json({
      categories: articles
        .map((article) => article.category)
        .filter((_, i) => i < 6),
    })
  }),
  get('/v1/articles/:articleId', ({ params }) => {
    const articleId = Number(params.articleId)

    if (isNaN(articleId)) {
      return error('잘못된 요청입니다', 400)
    }
    if (articleId > articles.length) {
      return error('요청하신 아티클을 찾을 수 없습니다', 404)
    }

    return HttpResponse.json({
      article: articles.find((article) => article.id === articleId),
    })
  }),
]

export default inboxHandlers
