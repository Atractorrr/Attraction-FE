import { HttpHandler, HttpResponse } from 'msw'
import introduceArticles from '@/__mocks__/data/introduceArticles'
import relatedArticles from '@/__mocks__/data/relatedArticles'
import { get } from '../tools'

const newsletterHandlers: HttpHandler[] = [
  get('/v1/newsletters', () => {
    const res = {
      name: 'Tech Weekly',
      description: 'Weekly newsletter about the latest in tech.',
      uploadDays: ['MON', 'WED', 'FRI'],
      category: 'IT_TECH',
      mainLink: 'http://localhost:3000',
      subscribeLink: 'http://localhost:3000',
      thumbnail: 'https://picsum.photos/1920/1080?random=99',
    }

    return HttpResponse.json(res)
  }),
  get('/v1/newsletters/:newsletterId/articles/prev', () => {
    const res = {
      data: introduceArticles,
      status: 200,
    }

    return HttpResponse.json(res)
  }),
  get('/v1/newsletters/:newsletterId/related', () => {
    const res = {
      data: relatedArticles,
    }

    return HttpResponse.json(res)
  }),
]

export default newsletterHandlers
