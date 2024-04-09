/** @type {import('next').NextConfig} */
require('./process.env.config.js').execute()
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.eltiempo.com'],
  },
}

module.exports = nextConfig
