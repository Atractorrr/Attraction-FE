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
        source: '/html/:path*',
        destination: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/:path*`,
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

export default nextConfig
