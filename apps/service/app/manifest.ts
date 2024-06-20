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
        src: '/icons/icon_shadow_16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_20.png',
        sizes: '20x20',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_29.png',
        sizes: '29x29',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_40.png',
        sizes: '40x40',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_50.png',
        sizes: '50x50',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_57.png',
        sizes: '57x57',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_58.png',
        sizes: '58x58',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_60.png',
        sizes: '60x60',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_76.png',
        sizes: '76x76',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_80.png',
        sizes: '80x80',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_87.png',
        sizes: '87x87',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_100.png',
        sizes: '100x100',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_114.png',
        sizes: '114x114',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_167.png',
        sizes: '167x167',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_324.png',
        sizes: '324x324',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon_shadow_1024.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
    ],
    orientation: 'any',
    dir: 'auto',
    lang: 'ko-KR',
  }
}
