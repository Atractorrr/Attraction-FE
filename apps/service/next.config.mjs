import { withSentryConfig } from '@sentry/nextjs'
import withPWAInit from '@ducanh2912/next-pwa'

const withPWA = withPWAInit({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  dest: 'public',
  fallbacks: {
    document: '/offline',
  },
  disable: process.env.NODE_ENV === 'development', // 개발 환경에서 비활성화
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        },
      },
    },
    {
      urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-font-assets',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
        },
      },
    },
    {
      urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-image-assets',
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
      },
    },
    {
      urlPattern: /\.(?:js)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-js-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
      },
    },
    {
      urlPattern: /\.(?:css|less)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-style-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
      },
    },
    {
      urlPattern: /\.(?:json|xml|csv)$/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'static-data-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
      },
    },
    {
      urlPattern: /.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'others',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
        networkTimeoutSeconds: 10,
      },
    },
  ],
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/mocks/api/:path*',
        destination: `${process.env.MOCK_URL}/api/:path*`,
      },
      {
        source: '/server/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/:path*`,
      },
      {
        source: '/admin/swagger',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/swagger`,
      },
      {
        source: '/swagger-ui',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/swagger-ui`,
      },
      {
        source: '/swagger-ui/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/swagger-ui/:path*`,
      },
      {
        source: '/api-docs',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/api-docs`,
      },
      {
        source: '/api-docs/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/api-docs/:path*`,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/oauth/google',
        destination: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_URL}&response_type=code&scope=email profile openid https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.settings.basic&access_type=offline`,
        permanent: true,
      },
      {
        source: '/oauth/google-force',
        destination: `https://accounts.google.com/o/oauth2/auth?access_type=offline&approval_prompt=force&client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_URL}&response_type=code&scope=email profile openid https://mail.google.com/%20https://www.googleapis.com/auth/gmail.readonly%20https://www.googleapis.com/auth/gmail.labels%20https://www.googleapis.com/auth/gmail.settings.basic%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile`,
        permanent: true,
      },
      {
        source: '/oauth/google-ios-pwa',
        destination: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_IOS_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_URL}&response_type=code&scope=email profile openid https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.settings.basic&access_type=offline`,
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
      {
        protocol: 'http',
        hostname: '*',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default withSentryConfig(withPWA(nextConfig), {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: 'attraction',
  project: 'attraction-fe',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
})
