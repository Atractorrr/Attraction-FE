import { HttpHandler, HttpResponse } from 'msw'
import { post } from '../tools'

const signInHandlers: HttpHandler[] = [
  post('/v1/auth/login', () => {
    const res = {
      email: 'test0000@gmail.com',
      accessToken: 'abcdefgggggggggg',
    }

    return HttpResponse.json(res)
  }),
]

export default signInHandlers
