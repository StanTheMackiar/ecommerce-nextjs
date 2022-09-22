/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['i.pinimg.com'],
  },
  env: {
    location: 'http'
  }
}

module.exports = nextConfig
