import { HttpHandler, HttpResponse } from 'msw'
import { articles } from '@/__mocks__/data'

import {
  Article,
  SortType,
  UserArticlesResponse,
} from '@/entities/user-article'
import { Pagination } from '@/shared/type'
import { error, get, getParams, put } from '../tools'

const defaultPagination: Pagination = {
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

const sorted: Record<SortType, (a: Article, b: Article) => number> = {
  desc: (a, b) =>
    new Date(a.receivedAt).getTime() - new Date(b.receivedAt).getTime(),
  asc: (a, b) =>
    new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime(),
}

const inboxHandlers: HttpHandler[] = [
  get('/v1/user/:userId/articles', ({ request, params }) => {
    const userId = Number(params.userId)
    const searchParams = getParams(request.url)
    const page = Number(searchParams.get('page') ?? 0)
    const size = Number(searchParams.get('size') ?? 20)
    const sort = searchParams.get('sort') ?? 'asc'
    const isRead = searchParams.get('isRead') === 'true'
    const query = searchParams.get('q')
    const categories = searchParams.get('category')?.split(',') ?? []
    const isInvalidRequest = [userId, page, size].some(Number.isNaN)

    if (isInvalidRequest) {
      return error('잘못된 요청입니다', 400)
    }

    const sortedArticles =
      page > 0
        ? articles
            .map((article, i) => ({ ...article, id: page * size + i + 1 }))
            .sort(sorted[sort as SortType] ?? sorted.asc)
        : [...articles].sort(sorted[sort as SortType] ?? sorted.asc)
    const readArticles = isRead
      ? sortedArticles.filter((article) => article.readPercentage === 0)
      : sortedArticles
    const searchedArticles = query
      ? readArticles.filter((article) => article.title.includes(query))
      : readArticles
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

    const data: UserArticlesResponse = Object.assign(defaultPagination, {
      data: { content: resultOfArticles },
      size: resultOfArticles.length,
      number: page,
      first: page === 0,
      last: page >= 2 || resultOfArticles.length < size,
    })

    return HttpResponse.json(data)
  }),
  get('/v1/user/:userId/categories', ({ params }) => {
    const userId = Number(params.userId)

    if (Number.isNaN(userId)) {
      return error('잘못된 요청입니다', 400)
    }

    return HttpResponse.json({
      categories: articles
        .map((article) => article.category)
        .filter((_, i) => i < 6)
        .reduce(
          (categories: string[], currentCategory) =>
            categories.some((category) => category === currentCategory)
              ? categories
              : [...categories, currentCategory],
          [],
        ),
    })
  }),
  get('/v1/user/:userId/article/:articleId', ({ params }) => {
    const userId = Number(params.userId)
    const articleId = Number(params.articleId)
    const isInvalidRequest = [userId, articleId].some(Number.isNaN)

    if (isInvalidRequest) {
      return error('잘못된 요청입니다', 400)
    }
    if (articleId < 0 || articleId > articles.length) {
      return error('요청하신 아티클을 찾을 수 없습니다', 404)
    }
    return HttpResponse.json({
      data: articles.find((article) => article.id === articleId),
    })
  }),
  put('/v1/user/:userId/article/:articleId', ({ request, params }) => {
    const userId = Number(params.userId)
    const articleId = Number(params.articleId)
    const searchParams = getParams(request.url)
    const percentage = Number(searchParams.get('percentage'))
    const isInvalidRequest = [userId, articleId, percentage].some(Number.isNaN)

    if (isInvalidRequest) {
      return error('잘못된 요청입니다', 400)
    }
    if (articleId < 0 || articleId > articles.length) {
      return error('요청하신 아티클을 찾을 수 없습니다', 404)
    }
    const targetArticle = articles.find((article) => article.id === articleId)
    if (targetArticle) {
      targetArticle.readPercentage = percentage
    }
    return HttpResponse.json({ status: 'OK', message: '성공 코드' })
  }),
]

export default inboxHandlers
