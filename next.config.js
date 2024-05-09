/** @type {import('next').NextConfig} */
require('./process.env.config.js').execute()
const nextConfig = {
  env: {
    BASE_DOMAIN: process.env.BASE_DOMAIN,
    IMAGES: process.env.IMAGES,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.eltiempo.com',
      'stg-premiospo.eltiempo.com.co',
      'img.youtube.com',
      'beta-premios.portafolio.co',
      'premios.portafolio.co',
    ],
  },
}

module.exports = nextConfig
