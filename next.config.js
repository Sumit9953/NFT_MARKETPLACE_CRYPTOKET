/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['sumit.infura-ipfs.io'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ipfs.infura.io:5001/api/:path*', // Proxy to Backend
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
