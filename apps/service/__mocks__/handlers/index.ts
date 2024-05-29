import { HttpHandler, HttpResponse } from 'msw'
import { get } from './tools'
import inboxHandlers from './inbox'
import mainHandlers from './main'
import mypageHandlers from './mypage'
import signUpHandlers from './sign-up'
import signInHandlers from './sign-in'
import newsletterHandlers from './newsletter'

const handlers: HttpHandler[] = [
  get('/test', () => {
    return HttpResponse.json({ message: `success)` })
  }),
  ...newsletterHandlers,
  ...signInHandlers,
  ...mainHandlers,
  ...inboxHandlers,
  ...mypageHandlers,
  ...signUpHandlers,
]

export default handlers
