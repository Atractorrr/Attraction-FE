import { HttpHandler, HttpResponse } from 'msw'
import { get } from './tools'
import inboxHandlers from './inbox'
import mainHandlers from './main'
import mypageHandlers from './mypage'

let counter = 0

const handlers: HttpHandler[] = [
  get('/test', () => {
    return HttpResponse.json({ message: `success (${++counter})` })
  }),
  ...inboxHandlers,
  ...mainHandlers,
  ...mypageHandlers,
]

export default handlers
