/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  images: {
    domains: ['cdn.sanity.io'],
  },
  devIndicators: {
    appIsrStatus: false,
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
};

export default nextConfig;
