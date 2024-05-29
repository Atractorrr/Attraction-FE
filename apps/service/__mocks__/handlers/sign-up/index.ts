import { HttpHandler } from 'msw'
import { error, post } from '../tools'

const signupHandlers: HttpHandler[] = [
  post('/v1/auth/join/username-duplicate', () => {
    return error('409', 409)
  }),
]

export default signupHandlers
