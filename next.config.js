/** @type {import('next').NextConfig} */
require('./process.env.config.js').execute()
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
