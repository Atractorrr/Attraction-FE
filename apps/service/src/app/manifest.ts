import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: '#202427',
    background_color: '#202427',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    name: 'Attraction',
    short_name: 'Attraction',
    description: '어트랙션에서 쉽고 편하게 뉴스레터를 구독해보세요!',
    icons: [
      {
        purpose: 'maskable',
        src: '/icons/basic/icon_60.png',
        sizes: '60x60',
        type: 'image/png',
      },
      {
        purpose: 'maskable',
        src: '/icons/basic/icon_76.png',
        sizes: '76x76',
        type: 'image/png',
      },
      {
        purpose: 'maskable',
        src: '/icons/basic/icon_120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        purpose: 'maskable',
        src: '/icons/basic/icon_152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        purpose: 'maskable',
        src: '/icons/basic/icon_180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        purpose: 'maskable',
        src: '/icons/basic/icon_512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        purpose: 'maskable',
        src: '/icons/basic/icon_1024.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
      {
        src: '/icons/basic/icon_60.png',
        sizes: '60x60',
        type: 'image/png',
      },
      {
        src: '/icons/basic/icon_76.png',
        sizes: '76x76',
        type: 'image/png',
      },
      {
        src: '/icons/basic/icon_120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        src: '/icons/basic/icon_152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: '/icons/basic/icon_180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icons/basic/icon_512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/basic/icon_1024.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
    ],
    orientation: 'any',
    dir: 'auto',
    lang: 'ko-KR',
  }
}
