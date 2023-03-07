/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/quiz1.tsx',
        permanent: true,
      },
    ];
  },
}