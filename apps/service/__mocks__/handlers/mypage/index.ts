import { HttpHandler, HttpResponse } from 'msw'
import { get } from '../tools'

const imgUrl =
  'https://images.pexels.com/photos/22669930/pexels-photo-22669930.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'

const mypageHandlers: HttpHandler[] = [
  get('/v1/member/:memberId', () => {
    return HttpResponse.json({
      user: {
        id: 1234,
        name: 'kang15123',
        profileImg: imgUrl,
        backgroundImg: imgUrl,
        email: 'news.Ic@asdf.io',
        categories: ['연애', '기사', '과학'],
      },
    })
  }),

  get('/v1/member/:memberId/articles/recent', () => {
    return HttpResponse.json({
      myPageArticles: [
        {
          id: 1,
          image: {
            thumbnail: imgUrl,
            profile: imgUrl,
          },
          info: {
            title: '💓요즘 주말 트렌드 싹 정리해봄 .zip',
            name: '뉴닉',
            date: '2023-03-03',
            readingTime: 8,
            readPercentage: 30,
          },
        },
        {
          id: 1,
          image: {
            thumbnail: imgUrl,
            profile: imgUrl,
          },
          info: {
            title: '💓요즘 주말 트렌드 싹 정리해봄 .zip',
            name: '뉴닉',
            date: '2023-03-03',
            readingTime: 8,
            readPercentage: 30,
          },
        },
      ],
    })
  }),
  get('/v1/member/:memberId/subscribe-list', () => {
    return HttpResponse.json({
      calendarRecord: [
        {
          id: 4,
          thumbnailUrl: imgUrl,
          title: '뉴닉',
        },
        {
          id: 4,
          thumbnailUrl: imgUrl,
          title: '뉴닉',
        },
      ],
    })
  }),
  get('/v1/member/:memberId/calendar', () => {
    return HttpResponse.json({
      calendarData: [
        {
          date: '2024-01-02',
          count: 10,
        },
        { date: '2024-01-03', count: 1 },
        { date: '2024-03-03', count: 2 },
        { date: '2024-04-03', count: 3 },
        { date: '2024-05-03', count: 2 },
      ],
    })
  }),
]

export default mypageHandlers
