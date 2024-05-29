import {
  EnvelopeOpenOutline,
  HouseOutline,
  MagnifyingGlassOutline,
  MemberOutline,
} from '@attraction/icons'

const SIDE_MENU = Object.freeze([
  {
    name: '홈',
    href: '/',
    segment: null,
    icon: HouseOutline,
  },
  {
    name: '뉴스레터 보관함',
    href: '/inbox',
    segment: 'inbox',
    icon: EnvelopeOpenOutline,
  },
  {
    name: '탐색',
    href: '/discover',
    segment: 'discover',
    icon: MagnifyingGlassOutline,
  },
  {
    name: '마이페이지',
    href: '/mypage/123',
    segment: 'mypage',
    icon: MemberOutline,
  },
])

export default SIDE_MENU
