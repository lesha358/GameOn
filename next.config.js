/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.tildacdn.com',
        pathname: '/**',
      }
    ],
    unoptimized: true
  },
  output: 'standalone'
}

module.exports = nextConfig 