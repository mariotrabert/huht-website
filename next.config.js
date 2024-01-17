/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.huht.wachtelhunde.net/**'
      }
    ]}
}

module.exports = nextConfig
