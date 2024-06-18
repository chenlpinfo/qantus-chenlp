/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'streamcoimg-a.akamaihd.net',
        port: '',
        pathname: '/000/**',
      },
    ],
  },
};

export default nextConfig;
