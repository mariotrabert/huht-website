/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['de-DE', 'en'],
  //   defaultLocale: 'de-DE',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.huht.wachtelhunde.net/**'
      }
    ]}
}

module.exports = nextConfig
