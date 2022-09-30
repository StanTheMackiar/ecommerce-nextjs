/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['i.pinimg.com', 'www.decathlon.com.co'],
  },
}

module.exports = nextConfig
