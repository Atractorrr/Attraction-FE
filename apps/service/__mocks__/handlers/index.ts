import { HttpHandler, HttpResponse } from 'msw'
import { get } from './tools'
import inboxHandlers from './inbox'
import mainHandlers from './main'
import mypageHandlers from './mypage'
import signUpHandlers from './sign-up'

const handlers: HttpHandler[] = [
  get('/test', () => {
    return HttpResponse.json({ message: `success)` })
  }),
  ...mainHandlers,
  ...inboxHandlers,
  ...mypageHandlers,
  ...signUpHandlers,
]

export default handlers
