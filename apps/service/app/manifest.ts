import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: '#FFFFFF',
    background_color: '#FFFFFF',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    name: 'Attraction',
    short_name: 'Attraction',
    description: '어트랙션에서 쉽고 편하게 뉴스레터를 구독해보세요!',
    icons: [
      {
        src: '/icons/icon_shadow.png',
        sizes: '428x428',
        type: 'image/png',
      },
    ],
    orientation: 'any',
    dir: 'auto',
    lang: 'ko-KR',
  }
}
