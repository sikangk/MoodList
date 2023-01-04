/** @type {import('next').NextConfig} */
const isProduction = process.env.REACT_APP_IS_PRODUCTION === 'y'
const repository = 'MoodList'
const debug = process.env.NODE_ENV !== "production";


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash:true
}

module.exports = nextConfig
