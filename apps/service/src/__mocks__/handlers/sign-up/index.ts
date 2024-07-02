import { HttpHandler, HttpResponse } from 'msw'
import { post } from '../tools'

const signupHandlers: HttpHandler[] = [
  post('/v1/auth/join/username-duplicate', async () => {
    return HttpResponse.json({ message: '성공이에요' }, { status: 200 })
  }),
]

export default signupHandlers
