/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/iteam-cloud/image/upload/**',
      },
    ],
  },
  env: {
      NEXT_PUBLIC_ENV: 'PRODUCTION',
      REACT_APP_SMTP_HOST: process.env.SMTP_HOST,
      REACT_APP_SMTP_PORT: process.env.REACT_APP_SMTP_PORT,
      REACT_APP_SMTP_USER: process.env.REACT_APP_SMTP_USER,
      REACT_APP_SMTP_PASSWORD: process.env.REACT_APP_SMTP_PASSWORD,
      REACT_APP_STRAPI_URL: process.env.REACT_APP_STRAPI_URL,
      REACT_APP_STRAPI_CONTENT_URL: process.env.REACT_APP_STRAPI_CONTENT_URL,
      REACT_APP_DEPLOY_HOST: process.env.REACT_APP_DEPLOY_HOST,
      REACT_APP_LOCAL_HOST: process.env.REACT_APP_LOCAL_HOST
  },
})
