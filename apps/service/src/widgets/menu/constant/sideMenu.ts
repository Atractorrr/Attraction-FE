import {
  BookmarkOutline,
  CogOutline,
  EnvelopeOpenOutline,
  HouseOutline,
  MagnifyingGlassOutline,
  MemberOutline,
} from '@attraction/icons'

interface SideMenu {
  name: string
  shortName: string | null
  href: string
  segment: string | null
  icon: typeof HouseOutline
  needLogin: boolean
}

const SIDE_MENU: Readonly<SideMenu[]> = Object.freeze([
  {
    name: '홈',
    shortName: '홈',
    href: '/',
    segment: null,
    icon: HouseOutline,
    needLogin: false,
  },
  {
    name: '아티클 보관함',
    shortName: '보관함',
    href: '/inbox',
    segment: 'inbox',
    icon: EnvelopeOpenOutline,
    needLogin: false,
  },
  {
    name: '뉴스레터 탐색',
    shortName: '탐색',
    href: '/discover',
    segment: 'discover',
    icon: MagnifyingGlassOutline,
    needLogin: false,
  },
  {
    name: '마이페이지',
    shortName: '프로필',
    href: '/mypage',
    segment: 'mypage',
    icon: MemberOutline,
    needLogin: false,
  },
  {
    name: '북마크한 아티클',
    shortName: null,
    href: '/inbox-bookmark',
    segment: 'inbox-bookmark',
    icon: BookmarkOutline,
    needLogin: true,
  },
  {
    name: '개인설정',
    shortName: null,
    href: '/setting',
    segment: 'setting',
    icon: CogOutline,
    needLogin: true,
  },
])

export default SIDE_MENU
