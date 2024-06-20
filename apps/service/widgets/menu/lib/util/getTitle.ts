'use client'

import { PAGE_TITLE } from '../../constant'

export default function getTitle(pathname: string) {
  if (pathname === '/') {
    return '홈'
  }

  const title = globalThis?.document?.title?.match(/^(.*?) - /)

  if (!title) {
    return '어트랙션'
  }

  if (title[1] === '404') {
    const [, localTitle] =
      PAGE_TITLE.find(([path]) => pathname.startsWith(path)) ?? []

    return localTitle ?? '어트랙션'
  }

  return title[1]
}
