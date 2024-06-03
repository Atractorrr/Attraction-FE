import { HttpHandler, HttpResponse } from 'msw'
import { get } from '../tools'

const imgUrl =
  'https://images.pexels.com/photos/22669930/pexels-photo-22669930.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'

const mypageHandlers: HttpHandler[] = [
  get('/v1/user/:userId', () => {
    return HttpResponse.json({
      user: {
        id: 1234,
        nickname: 'kang15123',
        profileImg: imgUrl,
        backgroundImg: imgUrl,
        email: 'news.Ic@asdf.io',
        interest: [
          'IT_TECH',
          'BUSINESS_FINANCIAL_TECHNOLOGY',
          'DESIGN',
          'TREND_LIFE',
        ],
        userExpiration: 6,
        occupation: 'RETIREE',
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
            readingPercentage: 80,
          },
        },
        {
          id: 2,
          image: {
            thumbnail: imgUrl,
            profile: imgUrl,
          },
          info: {
            title: '💓요즘 주말 트렌드 싹 정리해봄 .zip',
            name: '다음',
            date: '2023-03-03',
            readingTime: 4,
            readingPercentage: 20,
          },
        },
        {
          id: 3,
          image: {
            thumbnail: imgUrl,
            profile: imgUrl,
          },
          info: {
            title: '💓요즘 주말 트렌드 싹 정리해봄 .zip',
            name: '네이버',
            date: '2023-03-03',
            readingTime: 10,
            readingPercentage: 10,
          },
        },
        {
          id: 4,
          image: {
            thumbnail: imgUrl,
            profile: imgUrl,
          },
          info: {
            title: '💓요즘 주말 트렌드 한번 보자 .zip',
            name: '뉴닉',
            date: '2023-03-03',
            readingTime: 8,
            readingPercentage: 40,
          },
        },
        {
          id: 5,
          image: {
            thumbnail: imgUrl,
            profile: imgUrl,
          },
          info: {
            title: '💓요즘 주말 트렌드 싹 정리 이리와바 .zip',
            name: '뉴닉',
            date: '2023-03-03',
            readingTime: 1,
            readingPercentage: 30,
          },
        },
      ],
    })
  }),
  get('/v1/member/:memberId/subscribe-list', () => {
    return HttpResponse.json({
      subscribeList: [
        {
          id: 1,
          thumbnailUrl: imgUrl,
          title: '네이버',
        },
        {
          id: 2,
          thumbnailUrl: imgUrl,
          title: '뉴닉',
        },
        {
          id: 3,
          thumbnailUrl: imgUrl,
          title: '네이트',
        },
        {
          id: 4,
          thumbnailUrl: imgUrl,
          title: '구글',
        },
        {
          id: 5,
          thumbnailUrl: imgUrl,
          title: '뉴닉',
        },
      ],
    })
  }),
  get('/v1/user/:userId/calendar', () => {
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
